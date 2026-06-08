# Green Bharat Foundation

Green Bharat Foundation is a responsive Next.js website for an environmental NGO concept focused on reforestation, conservation programs, community stories, donations, and volunteer contact.

## Live Site

https://abhitechdev.github.io/GreenBharath/

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Zustand

## Local Development

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in your browser.

## Verification

```bash
npm run lint
npm run build
```

`npm run build` creates a static export in `out/` for GitHub Pages.

## Deployment

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. Every push to `main` builds the static site and publishes `out/` to GitHub Pages.

The production build uses the repository base path `/GreenBharath`, so assets and routes resolve correctly at the GitHub Pages project URL.
