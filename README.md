# Isa Alvi | Graphic Design Portfolio

An editorial-style portfolio website for **Isa Alvi**, Creative Director and Graphic Designer, showcasing brand identity, social media campaign systems, and event design work. The design work is the content. The site itself is a custom front-end build, designed and coded from scratch.

**Live site:** [graphic-designer-web-theta-steel.vercel.app](https://graphic-designer-web-theta-steel.vercel.app/)

---

## About the Project

This is a graphic designer's portfolio, built as a website so the presentation matches the quality of the work. It is laid out like an editorial magazine: a cover, featured work spreads, a process section, and a closing page.

The project also demonstrates custom frontend development, interactive UI design, responsive layouts, animation, and reusable component architecture.

## Sections

- **Editorial Cover:** Name, positioning, availability, and direct contact
- **Featured Work:** Project spreads for Changan Multan Motors, FAST Media Mavericks, Frenzy Store & Watch, and Zeanora Studio
- **Selected Capabilities:** Graphic design, brand identity, creative direction, interactive web design, motion design, and editorial design
- **Process:** Discover, Direction, Design, Deliver
- **Clients & Partners:** Commissioned work and collaborations
- **Skills:** Design tools used
- **About / Experience:** Philosophy, leadership record, industries, and engagement opportunities
- **Closing:** Call to action and contact

## Features

- Custom spring-physics cursor that changes state over links and VIEW/PLAY targets, and hides automatically on touch devices
- Smooth scrolling with Lenis
- Scroll and entrance animations with Framer Motion and GSAP
- Media loader that lazy-loads images and videos with a skeleton spinner and fade-in
- Fixed global halftone background with a noise overlay and glass-style cards
- Optimized images through `next/image`
- Reusable component library for buttons, headings, sections, containers, and cards
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

```text
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
git clone https://github.com/m250526-del/graphic-designer-portfolio.git
cd graphic-designer-portfolio
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

