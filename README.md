# Recreate Engineers

Version 1: static business profile and portfolio website for industrial automation and engineering services in Bangladesh. Uses company information and assets from the original repository. Product drawings are category illustrations; supplier logos identify products in the supplied range and do not imply authorized partner status.

## Run locally

Requires Python 3. From the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1
```

Open the server in your browser. Both `/index.html` and the legacy `/home.html` entry point serve the website. There is no build step, package installation or external runtime asset dependency.

## Features

- Original company logo with a cyan and graphite color palette
- Responsive navigation and accessible service/product detail dialogs
- Product category filters and search across names, brands and specifications
- Direct phone, email and social contact links
- Local imagery, CSS, JavaScript and SVG illustrations
- Subtle entrance and hover animations
- Horizontal supplier-logo reel with hover pause and reduced-motion support
- Reduced-motion support and keyboard navigation

Version 1 has no inquiry form, submission handling, database or server-side application. Contact details are presented as direct phone, email and social links. The site can be hosted on any static host.

Company details are sourced from the legacy website and should be confirmed before launch. No fabricated customer counts, case studies, certifications, IoT product capabilities or uptime guarantees are included.

## Browser verification

With the server running, Playwright installed in your test environment, and Chromium available:

```sh
CHROMIUM_PATH=/usr/bin/chromium node tests/browser-smoke.cjs
```

The smoke test covers category filtering, brand search, empty results, detail dialogs, Escape dismissal, service details, absence of inquiry forms, direct business contact links, mobile navigation, asset loading, browser errors, and horizontal overflow at 320, 390, 768, 1024, 1440 and 1920 pixels. It does not send email.

## GitHub Pages

Publish the static site from `main` at `/ (root)`:

1. Open repository **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** and **/ (root)**, then save.

The expected project URL is `https://mohtadahmed.github.io/recreate_engineers/`. GitHub shows the confirmed live URL and deployment status in Settings → Pages. The `.nojekyll` file serves the site as plain static files. All local assets use relative URLs to support the project subdirectory.

Future commits pushed to `main` are deployed automatically after Pages is enabled. No application server or database is needed.
