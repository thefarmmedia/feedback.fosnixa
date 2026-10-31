# Field of Screams Nixa — Guest Feedback

Standalone static website ready for GitHub and Netlify. No packages, build command, API keys, or environment variables are needed. All images and fonts are included locally.

## Publish from GitHub

1. Unzip this download.
2. Create a GitHub repository, such as `fos-nixa-feedback`.
3. Upload the CONTENTS of this folder to the repository root: `index.html`, `assets/`, `netlify.toml`, and this README. Do not upload only the ZIP.
4. In Netlify, add a new project by importing an existing Git repository. Choose GitHub and select the repository.
5. Leave base directory and build command blank. Set publish directory to `.` (the included netlify.toml also sets this).
6. Deploy. Netlify will provide a temporary netlify.app address. Future GitHub changes automatically deploy through the connected repository.

## Recommended address

Use `feedback.fieldofscreamsnixa.com` for this standalone page. The main website stays where it is, and this subdomain points to the separate Netlify project.

1. In the new Netlify project's domain settings, add `feedback.fieldofscreamsnixa.com` as a custom production domain.
2. At the DNS provider for `fieldofscreamsnixa.com`, add a CNAME record with name `feedback`. Use the exact target Netlify supplies for this project (normally the project's netlify.app hostname).
3. Do not change the existing root-domain or www records, nameservers, or email/MX records.
4. Wait for DNS verification and HTTPS certificate activation. If the domain uses Netlify DNS already, follow Netlify's automatic setup instead.
5. Open the final HTTPS subdomain on a phone and desktop before emailing customers.

## Current feedback behavior

- Selecting 1, 2, or 3 stars reveals a private feedback form.
- The email button opens the visitor's email app, addressed to `fieldofscreams417@gmail.com`, with the rating, comments, and optional contact details.
- The visitor MUST press Send in their email app. The site does not send automatically, store submissions, or confirm inbox delivery. An email app must be configured.
- Selecting 4 or 5 stars redirects to `https://g.page/r/CVxy9Qi5mhbGEBM/review`.
- The logo is centered. Assets use relative paths for hosting portability.

For automatic inbox delivery without opening an email app, add a hosted form service or server-side mail endpoint separately. Netlify Forms is not configured in this package.

## Before sharing

- Test all five star choices on the deployed page.
- Test a private feedback email and verify actual receipt.
- Confirm the Google link opens the correct Nixa business.
- Use the feedback subdomain in emails to actual guests. No customer list or email campaign is included in this package.

## Editing

All layout, copy, styles, and browser logic are in `index.html`. Search for the email address or Google review URL to update those destinations. Keep the `assets` folder beside `index.html`.

Search indexing is disabled with an X-Robots-Tag header because this is a customer feedback destination.
