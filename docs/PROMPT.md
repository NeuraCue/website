# Prompts

```
I want you to help me write a spec file for a project I am building. It's called "hookhub", It's 
a place where cool open source claude hooks are displayed and browsed. Search on Claude hooks 
and write an initial spec for this. Remember it's an MVP ATM and we need only the functionality 
of displaying the hooks. Hooks are found in github repositories, they have name, category, 
description and link to the repo. The main page should display the hooks in a grid like view.
```

```
Can you please now implement the main page grid as specified in @memory/spec/SPEC.md
```

```
Please update footer with below text:

      <p>AI-powered geofenced reminders for Android. App coming soon.</p>
      <p style="font-size: 0.9rem; color: #cbd5e1">
        This site hosts required policy and compliance pages for the NeuraCue
        Android app on Google Play.
      </p>
      <p><a href="/privacy.html" style="color: #38bdf8">Privacy Policy</a></p>
      
  <footer style="font-size: 0.8em; margin-top: 3rem; color: #888">
    <p>© 2025 NeuraCue™. All rights reserved.</p>
  </footer>
```

```
And I need the Privacy Policy link to page like below:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="Content-Language" content="en"/>
    <meta name="author" content="NeuraCue Inc."/>
    <meta name="description" content="NeuraCue™ – AI-powered geofenced reminders and contextual productivity."/>
    <meta name="keywords" content="AI reminders, geofencing, productivity, contextual AI, task automation, NeuraCue"/>
    <meta name="twitter:card" content="summary_large_image"/>
    <meta name="keywords" content="AI reminders, geofencing, productivity, contextual AI, task automation, NeuraCue"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta property="og:description" content="AI-powered geofenced reminders and contextual productivity."/>
    <meta property="og:image" content="https://neuracue.com/assets/logo.png"/>
    <meta property="og:title" content="NeuraCue"/>
    <link rel="canonical" href="https://neuracue.com/privacy.html" />
    <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
    <title>Privacy Policy - NeuraCue</title>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacy Policy - NeuraCue",
            "url": "https://neuracue.com/privacy.html",
            "description": "NeuraCue’s privacy policy detailing data use, collection, and contact information."
        }
    </script>
</head>
<body>
<main>
    <section>
        <h2>Data Collection</h2>
        <p>NeuraCue™ does not collect or store personal data beyond what is necessary for app functionality.</p>
    </section>

    <section>
        <h2>Third-Party Services</h2>
        <p>Firebase is used for authentication and cloud storage. No data is sold or shared.</p>
    </section>

    <section>
        <h2>Contact</h2>
        <p>Questions? Email us at <a href="mailto:hello@neuracue.com">hello@neuracue.com</a></p>
    </section>
</main>
</body>
<footer style="font-size: 0.8em; margin-top: 3rem; color: #888;">
    <p>© 2025 NeuraCue™. All rights reserved.</p>
</footer>
</html>

But integrated nicely for next.js
```

```
I want you to please write a python script that is going to play the sound @ulala.wav every time the 
script runs
```



