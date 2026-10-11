# Isa Alvi | Graphic Design Portfolio

An editorial-style portfolio website for **Isa Alvi**, Creative Director and Graphic Designer, showcasing brand identity, social media campaign systems and event design work. The design work is the content. The site itself is a custom front-end build, designed and coded from scratch.

**Live site:** [portfolio-web-isa-6e8e.vercel.app](https://portfolio-web-isa-6e8e.vercel.app/)

---

## About the Project

This is not a developer portfolio. It's a graphic designer's portfolio, built as a website so the presentation matches the quality of the work. It is laid out like an editorial magazine: a cover, featured work "spreads", a process section and a closing page.

## Sections

- **Editorial Cover:** name, positioning, availability and direct contact
- **Featured Work:** project spreads for Changan Multan Motors, Fast Media Mavericks, Frenzy Store & Watch and Zeanora Studio
- **Selected Capabilities:** graphic design, brand identity, creative direction, interactive web design, motion design, editorial design
- **Process:** Discover, Direction, Design, Deliver
- **Clients & Partners:** commissioned work and collaborations
- **Skills:** the design tools used
- **About / Experience:** philosophy, leadership record, industries and engagement opportunities
- **Closing:** call to action and contact

## Features

- Custom spring-physics cursor that changes state over links, "VIEW" and "PLAY" targets, and hides automatically on touch devices
- Smooth scrolling with Lenis
- Scroll and entrance animations with Framer Motion and GSAP
- Media loader that lazy-loads images and videos with a skeleton spinner and fade-in
- Fixed global halftone background with a noise overlay and glass-style cards
- Optimized images through `next/image`
- Reusable component library (buttons, headings, sections, containers, cards)
- Responsive layout

## Tech Stack

- **Framework:** Next.js 16 (App Router), React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, `class-variance-authority`, `clsx`, `tailwind-merge`
- **Animation:** Framer Motion, GSAP, Lenis
- **Icons:** Lucide React
- **Tooling:** ESLint
- **Deployment:** Vercel

## Project Structure

```
.
├── app/                 # App Router entry (layout, page, global styles)
├── components/
│   ├── home/            # Page sections (cover, work, process, skills, about, closing)
│   └── ...              # Shared UI (navigation, cursor, media loader, cards)
├── hooks/               # Custom hooks (mouse position)
├── lib/                 # Utilities and constants
├── public/              # Static assets
└── portfolio-assets/    # Design work and client project media
```

## Getting Started

Requires Node.js 20 or newer.

```bash
git clone https://github.com/m250526-del/portfolio-web.git
cd portfolio-web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Scripts

```bash
npm run dev      # start the development server
npm run build    # create a production build
npm run start    # run the production build
npm run lint     # run ESLint
```

## Contact

Email: [alvii3391@gmail.com](mailto:alvii3391@gmail.com)

---

All design work shown in the portfolio belongs to Isa Alvi and the respective clients.
