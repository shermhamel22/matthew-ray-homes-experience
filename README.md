# Matthew Ray Homes Inc. — Website

A modern, responsive website for Matthew Ray Homes Inc., a premium home remodeling company based in Florida.

## Tech Stack

This project is built with:

- **React** — UI library
- **TypeScript** — type-safe JavaScript
- **Vite** — fast build tool and dev server
- **Tailwind CSS** — utility-first CSS framework
- **shadcn/ui** — accessible, reusable component library

## Getting Started

Make sure you have **Node.js** and **npm** installed. You can install Node.js via [nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
# Step 1: Clone the repository
git clone https://github.com/shermhamel22/matthew-ray-homes-experience.git

# Step 2: Navigate into the project directory
cd matthew-ray-homes-experience

# Step 3: Install dependencies
npm install

# Step 4: Start the development server
npm run dev
```

The dev server will start at `http://localhost:8080` with hot module reloading enabled.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run test` | Run tests |

## Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── ui/           # shadcn/ui base components
│   ├── Navbar.tsx
│   ├── HeroSection.tsx
│   ├── ServicesSection.tsx
│   ├── AboutSection.tsx
│   ├── StatsSection.tsx
│   ├── ProcessSection.tsx
│   ├── TestimonialsSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── pages/            # Route-level pages
├── hooks/            # Custom React hooks
├── lib/              # Utility functions
└── assets/           # Static images and media
```

## Deployment

Build the project for production:

```sh
npm run build
```

The output will be in the `dist/` folder. You can deploy it to any static hosting provider such as:

- [Netlify](https://netlify.com)
- [Vercel](https://vercel.com)
- [GitHub Pages](https://pages.github.com)
- [Cloudflare Pages](https://pages.cloudflare.com)

## Custom Domain

If deploying to Netlify or Vercel, you can connect a custom domain through their respective dashboard settings.
