# Realty World Söke Real Estate Platform

A modern, high-performance real estate website for Realty World Söke. Built with Next.js 15 and Tailwind CSS 4, featuring dynamic listing management, smooth animations, and a multi-page architecture designed for professional property showcase.

## Files

| File | Description |
|------|-------------|
| `app/page.tsx` | Main landing page assembling hero, featured listings, services, and contact sections. |
| `app/ilanlar/page.tsx` | Dedicated property search page with filtering UI and comprehensive listing grid. |
| `app/hakkimizda/page.tsx` | Detailed corporate page covering vision, mission, and local expertise. |
| `lib/data.ts` | Centralized data store for all property listings, ensuring consistency across pages. |
| `components/Navbar.tsx` | Responsive navigation component with dynamic scroll effects and mobile menu. |
| `components/FeaturedListings.tsx` | Reusable property showcase component with hover effects and listing tags. |
| `components/Hero.tsx` | High-impact entry section with integrated search bar and Söke-specific imagery. |

## Setup

1. Run `npm install` to install dependencies (Next.js, Tailwind, Motion, Lucide).
2. Run `npm run dev` to start the development server on port 3000.
3. Access the application at `http://localhost:3000`.

## Important Notes

- **Next.js 15 App Router** — Leverages the latest React features and Server Components for optimal performance.
- **Tailwind CSS 4** — Uses the newest utility-first CSS framework for a clean, modern, and maintainable design.
- **Motion/React** — Implements fluid, high-quality animations for a premium user experience.
- **Responsive Design** — Fully optimized for mobile, tablet, and desktop screens using Tailwind's mobile-first approach.
- **Centralized Data** — Property listings are decoupled from UI components, allowing for easy updates and future API integration.

## Customization

- **Property Listings** — Update the `listings` array in `lib/data.ts` to add, remove, or modify property details.
- **Brand Colors** — Adjust the primary red and slate colors in Tailwind classes to match specific brand guidelines.
- **Navigation** — Modify the `navLinks` array in `Navbar.tsx` to add new pages or change the site structure.
- **Animations** — Customize `initial`, `whileInView`, and `transition` props in components to adjust animation speed and style.
