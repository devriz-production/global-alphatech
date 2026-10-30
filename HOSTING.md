# Putting the Global Alpha Tech site on Hostinger

The site is static: HTML, CSS, images and one small PHP file for the forms. There is no database and nothing to keep running. Hostinger serves the contents of `dist/`, and `.htaccess` handles old addresses, HTTPS and caching.

**This replaces a WordPress site.** That is the one part that cannot be undone casually, so step 1 is a backup.

## 1. Back up WordPress first

In hPanel: Websites > Manage > Files > Backups, and take a full backup of files and database. Or download `public_html` as a zip from File Manager and export the database from phpMyAdmin.

Keep it until the new site has been live for a few weeks. Restoring it is your rollback.

## 2. Create the mailbox the forms send from

The form handler sends from `no-reply@globalalphatech.com` to `info@globalalphatech.com`.

In hPanel: Emails > create `no-reply@globalalphatech.com`. Without it, form mail is likely to be rejected or land in spam, and visitors see the "send by email instead" message.

To use different addresses, change `RECIPIENT` and `FROM_ADDRESS` at the top of `public/api/enquiry.php` and rebuild. The handler needs PHP 8.0 or newer (hPanel: Advanced > PHP Configuration).

## 3. Build

```bash
npm ci
```

```bash
npm run check
```

`check` builds the site and tests every link. Do not upload if it reports a problem.

## 4. Try it on the preview address first

Hostinger gives each site a temporary `*.hostingersite.com` address (the old site already has one). Upload there first and click through.

Upload **the contents of `dist/`**, not the `dist` folder itself, into `public_html`. In File Manager turn on "Show hidden files" and confirm both `.htaccess` files arrived (one at the top, one inside `_astro/`). FTP clients and File Manager both tend to skip files that start with a dot.

| Visit | Expect |
|---|---|
| `/` | New homepage |
| `/services/seo-services/` | SEO page |
| `/portfolio/` | Redirects to `/work/` |
| `/blog/` | Redirects to `/insights/` |
| `/top-digital-marketing-agency-in-delhi-2026-global-alpha-tech/` | Redirects to the article under `/insights/` |
| `/pricing-plans/` | Redirects to `/pricing/` |
| `/anything-made-up/` | The custom "left the orbit" 404 page |
| `/contact/` form | Sends, shows the thank you message, and the email arrives at info@ |
| `/careers/` form | Same, with the CV link in the email |

## 5. Go live

1. Delete the WordPress files from `public_html` (after the backup in step 1), keeping anything you know is unrelated to the website.
2. Upload the contents of `dist/`.
3. Visit `https://globalalphatech.com/` and run through the table above again.
4. In hPanel, if WordPress caching (LiteSpeed Cache) was on, purge the cache.

## 6. After launch

- **Google Search Console:** add the property if it is not there, submit `https://globalalphatech.com/sitemap-index.xml`, and use "Inspect URL" on the homepage and a service page.
- **Google Business Profile:** point the website link to `https://globalalphatech.com/`.
- **Analytics:** add a GA4 measurement ID to `gaId` in `src/data/site.ts`, rebuild and upload. Form submissions are already pushed as an `enquiry_sent` event.

## Updating the site later

Edit, run `npm run check`, then upload the new `dist/` contents over the old ones. Uploading never touches anything outside the files it replaces. Old files in `_astro/` can be deleted occasionally; they are only previous versions of styles, scripts and images.
