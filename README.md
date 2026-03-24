# Chinou Electric Website

## Requirements
- Node.js 18+ → Download from https://nodejs.org

## Setup & Run

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Then open http://localhost:5173 in your browser.

## Build for production

```bash
npm run build
```

Output will be in the `dist/` folder — upload this to any web host.

## Edit content
All website sections are in: `src/components/sections/`
- `Hero.tsx` — Main page hero
- `Services.tsx` — Services section
- `Stats.tsx` — Numbers/counters
- `About.tsx` — About section
- `SolarHighlight.tsx` — Solar panels section
- `Contact.tsx` — Contact section

Logo and images are in: `public/`
