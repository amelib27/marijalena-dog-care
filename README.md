# Marijalena's Dog Care — Düsseldorf

A React + Vite site for a (fictional) dog walking / pet sitting service in Düsseldorf, Germany.
All personal details (name, phone, email, reviews) are placeholder data in `src/data.js` — replace with real info before going live.

## Run locally

```bash
npm install
npm run dev
```

Then open the URL shown in the terminal (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

Output goes to the `dist/` folder.

## Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Marijalena's Dog Care site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git push -u origin main
```

## Deploy for free with GitHub Pages

1. Install the deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
2. In `package.json`, add:
   ```json
   "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. In `vite.config.js`, add `base: '/YOUR-REPO-NAME/'` inside `defineConfig({...})`.
4. Run:
   ```bash
   npm run build
   npm run deploy
   ```
5. In your GitHub repo settings → Pages, set the source to the `gh-pages` branch.

## Project structure

```
src/
  data.js              → all fake content (profile, services, areas, reviews)
  App.jsx              → page layout
  index.css            → all styling
  components/
    Navbar.jsx         → nav with mobile menu
    Hero.jsx
    TrustBar.jsx
    Services.jsx       → clickable service cards, feeds into booking modal
    Areas.jsx          → clickable district pills
    HowItWorks.jsx     → expandable steps
    About.jsx
    Testimonials.jsx   → review carousel
    BookingModal.jsx   → booking form (demo only, no backend)
    CTA.jsx
    Footer.jsx
```

## What's interactive

- Mobile hamburger menu
- Clicking a service card opens the booking modal pre-filled with that service
- District pills highlight on click
- "How it works" steps expand/collapse on click
- Testimonials carousel (Prev / Next)
- Booking form has basic validation and a success screen (no real backend — for that you'd wire it to something like Formspree, EmailJS, or your own API)
