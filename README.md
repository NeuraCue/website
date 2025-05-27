# NeuraCue Website

This is the official public-facing website for [NeuraCue](https://neuracue.com) — an AI-powered productivity platform providing geofenced reminders and contextual task cues.

The site is hosted on **GitHub Pages** at a custom domain (`neuracue.com`) and serves as the landing and compliance site for the NeuraCue Android application.

This repo is public, while the core NeuraCue Android app is private under the same organization.

---

## 🌐 Live Website

🔗 [https://neuracue.com](https://neuracue.com)

---

## 📁 Project Contents

| File/Directory     | Description                                                                 |
|--------------------|-----------------------------------------------------------------------------|
| `index.html`       | Landing page introducing NeuraCue                                           |
| `privacy.html`     | Required privacy policy for Firebase and Google Play compliance             |
| `CNAME`            | GitHub Pages domain configuration for `neuracue.com`                        |
| `robots.txt`       | SEO: instructs crawlers and links to sitemap                                |
| `sitemap.xml`      | Search engine indexing support for main pages                               |
| `favicon.ico`      | Website favicon                                                             |
| `assets/`          | Static assets (e.g. logo.png)                                               |

---

## 🚀 Deployment Instructions

This project uses **GitHub Pages** for automatic deployment from the `main` branch.

To update the site content:

```bash
git clone https://github.com/NeuraCue/website.git
cd website
# Make changes to HTML, CSS, assets, etc.
git commit -am "Update site content"
git push origin main
```

---

## License

Content in this repository is licensed under the [CC BY-NC-ND 4.0 License](https://creativecommons.org/licenses/by-nc-nd/4.0/).  
NeuraCue™ and the NeuraCue logo are trademarks of Jon DeMaagd. All rights reserved.
