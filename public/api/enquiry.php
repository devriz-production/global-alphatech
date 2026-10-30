<?php
/**
 * Global Alpha Tech website: enquiry and careers form handler.
 *
 * Receives the contact and careers forms, checks them, and emails the studio.
 * It stores nothing and needs no database; it runs on Hostinger's standard PHP.
 *
 * Forms sent by JavaScript get a JSON answer. Forms posted by a browser without
 * JavaScript are redirected to /thank-you/ (or back to the form if something is missing).
 *
 * Before going live: create the mailbox in FROM_ADDRESS in hPanel (Emails), or mail
 * sent from this script is likely to be rejected or land in spam.
 */

declare(strict_types=1);

// ---- Settings ---------------------------------------------------------------
const RECIPIENT = 'info@globalalphatech.com';
const FROM_ADDRESS = 'no-reply@globalalphatech.com';
const ALLOWED_HOSTS = ['globalalphatech.com', 'www.globalalphatech.com'];
const RATE_LIMIT = 5;          // submissions allowed per address...
const RATE_WINDOW = 600;       // ...in this many seconds
const MIN_SECONDS = 3;         // a person takes longer than this to fill a form

$wantsJson = str_contains((string) ($_SERVER['HTTP_ACCEPT'] ?? ''), 'application/json')
    || ($_SERVER['HTTP_X_REQUESTED_WITH'] ?? '') === 'fetch';

header('X-Content-Type-Options: nosniff');
header('Cache-Control: no-store');

function respond(int $status, array $body): void
{
    global $wantsJson;
    if (!$wantsJson) {
        // Plain form post: send the visitor somewhere sensible instead of showing JSON.
        $page = (string) ($_POST['page'] ?? '/contact/');
        $back = preg_match('#^/[a-z0-9/_-]*$#i', $page) ? $page : '/contact/';
        $to = !empty($body['ok']) ? '/thank-you/' : $back . '?error=' . urlencode((string) ($body['error'] ?? 'invalid'));
        header('Location: ' . $to, true, 303);
        exit;
    }
    header('Content-Type: application/json; charset=utf-8');
    http_response_code($status);
    echo json_encode($body);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    $wantsJson = true;
    respond(405, ['ok' => false, 'error' => 'method']);
}

// Only accept posts that come from this site (or its Hostinger preview address).
$source = $_SERVER['HTTP_ORIGIN'] ?? $_SERVER['HTTP_REFERER'] ?? '';
$sourceHost = strtolower((string) parse_url($source, PHP_URL_HOST));
$preview = (bool) preg_match('/\.hostingersite\.com$/', $sourceHost);
if ($sourceHost === '' || (!in_array($sourceHost, ALLOWED_HOSTS, true) && !$preview)) {
    respond(403, ['ok' => false, 'error' => 'origin']);
}

// Bots fill the hidden field and submit instantly. Tell them it worked.
// (Without JavaScript the elapsed field stays 0, so the timing check only applies to fetch posts.)
if (trim((string) ($_POST['website'] ?? '')) !== '' || ($wantsJson && (int) ($_POST['elapsed'] ?? 0) < MIN_SECONDS)) {
    respond(200, ['ok' => true]);
}

// ---- Rate limit by address --------------------------------------------------
$ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
$bucket = sys_get_temp_dir() . '/gat-enquiry-' . hash('sha256', $ip) . '.json';
$now = time();
$hits = [];
if (is_file($bucket)) {
    $hits = array_filter((array) json_decode((string) file_get_contents($bucket), true), fn ($t) => is_int($t) && $t > $now - RATE_WINDOW);
}
if (count($hits) >= RATE_LIMIT) {
    respond(429, ['ok' => false, 'error' => 'rate']);
}

// ---- Read and clean fields --------------------------------------------------
function text(string $key, int $max): string
{
    $value = (string) ($_POST[$key] ?? '');
    $value = preg_replace('/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/u', '', $value) ?? '';
    return mb_substr(trim($value), 0, $max);
}

// Single-line fields can end up in mail headers, so line breaks are removed.
function line(string $key, int $max): string
{
    return trim((string) preg_replace('/[\r\n]+/', ' ', text($key, $max)));
}

$form = line('form', 20) === 'careers' ? 'careers' : 'contact';
$errors = [];

$name = line('name', 120);
$email = line('email', 200);
$phone = line('phone', 30);
$message = text('message', 4000);

if ($name === '') {
    $errors['name'] = 'Enter your name.';
}
if ($email === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $errors['email'] = 'Enter an email address in the format name@example.com.';
}
if ($phone !== '') {
    $digits = preg_replace('/\D/', '', $phone);
    if (strlen((string) $digits) < 7 || strlen((string) $digits) > 15) {
        $errors['phone'] = 'Enter a phone number with 7 to 15 digits.';
    }
}
if ($message === '') {
    $errors['message'] = 'Tell us a little about what you need.';
}
if (($_POST['consent'] ?? '') !== 'yes') {
    $errors['consent'] = 'Please tick this box so we can reply to you.';
}

if ($form === 'careers') {
    if ($phone === '') {
        $errors['phone'] = 'Enter your mobile number.';
    }
    foreach (['city' => 'Enter your current city.', 'role' => 'Choose a role.', 'experience' => 'Choose your experience.'] as $key => $msg) {
        if (line($key, 120) === '') {
            $errors[$key] = $msg;
        }
    }
    foreach (['resume' => true, 'portfolio' => false] as $key => $required) {
        $url = line($key, 300);
        if ($url === '' && $required) {
            $errors[$key] = 'Enter a full link to your CV, starting with https://';
        } elseif ($url !== '' && !preg_match('#^https?://#i', $url)) {
            $errors[$key] = 'Enter a full link starting with https://';
        }
    }
    $subject = 'Application: ' . line('role', 80) . ' - ' . $name;
    $rows = [
        'Name' => $name,
        'Email' => $email,
        'Mobile' => $phone,
        'Current city' => line('city', 120),
        'Role' => line('role', 120),
        'Experience' => line('experience', 40),
        'CV' => line('resume', 300),
        'Portfolio' => line('portfolio', 300),
    ];
} else {
    $service = line('service', 80);
    $subject = 'Enquiry' . ($service !== '' ? ' (' . $service . ')' : '') . ' - ' . $name;
    $rows = [
        'Name' => $name,
        'Email' => $email,
        'Phone' => $phone,
        'Business' => line('company', 160),
        'Service' => $service !== '' ? $service : 'Not sure yet',
        'Budget' => line('budget', 60),
    ];
}

if ($errors) {
    respond(422, ['ok' => false, 'errors' => $errors, 'error' => 'invalid']);
}

// ---- Compose and send -------------------------------------------------------
$body = '';
foreach ($rows as $label => $value) {
    if ($value !== '') {
        $body .= str_pad($label . ':', 16) . $value . "\n";
    }
}
$body .= "\n" . ($form === 'careers' ? "About them\n----------\n" : "Message\n-------\n") . $message . "\n\n";
$body .= "--\nSent from " . line('page', 120) . ' on ' . gmdate('j M Y, H:i') . " UTC\n";

$headers = [
    'From: Global Alpha Tech website <' . FROM_ADDRESS . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
];

$sent = mail(
    RECIPIENT,
    mb_encode_mimeheader('[globalalphatech.com] ' . $subject, 'UTF-8', 'B'),
    $body,
    implode("\r\n", $headers),
    '-f' . FROM_ADDRESS
);

if (!$sent) {
    respond(502, ['ok' => false, 'error' => 'mail']);
}

$hits[] = $now;
@file_put_contents($bucket, json_encode(array_values($hits)), LOCK_EX);

respond(200, ['ok' => true]);
