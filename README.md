# Chhota Bheem — Cinematic Scrollytelling Experience

A production-ready, Awwwards-quality, single-page cinematic scrollytelling showcase designed for the Chhota Bheem sequence. The project features a scroll-driven image sequence serving as a full-bleed background, overlaid with a HUD-style narrative experience synchronized precisely to scroll progress.

Built by **KaliIO**. [Visit the website](https://kaliio.com).

## 🚀 Key Features

*   **High-Fidelity Scrollytelling**: Seamlessly controls 240 high-resolution frames using the Canvas API tied to Framer Motion's scroll values.
*   **Performance First**: Achieves 60 FPS playback with zero main-thread blocking by utilizing `requestAnimationFrame` and an upfront preload system.
*   **Retina Clarity**: Canvas is algorithmically constrained to `window.devicePixelRatio` with exact integer mapping (`Math.round`) to entirely eliminate subpixel interpolation blur.
*   **Three-Act HUD Overlay**: 
    1.  *Conflict (0%–30%)*: Battle for Dholakpur
    2.  *Transition (30%–70%)*: Resolving Conflict / From Chaos to Control
    3.  *Resolution (70%–100%)*: Heroes Return Home
*   **Cinematic Aesthetic**: Employs a CSS-based subtle film grain, immersive dark-mode (`bg-[#0b0b0b]`), and tailored typography (Orbitron + Rajdhani).
*   **Accessibility**: Includes `sr-only` screen reader summary blocks outlining the entire narrative action.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 14+](https://nextjs.org/) (App Router, TypeScript)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) (configured via CSS `@theme` variables)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/) (`useScroll`, `useMotionValueEvent`)
*   **Render Engine**: Raw HTML5 `<canvas>` API

## 💻 Getting Started

### Prerequisites

*   Node.js requirements check (`v18.x` or higher recommended).
*   The raw frame sequence (`1.jpg` to `240.jpg`) must exist within `public/images/images/`.

### Installation

1.  Clone the repository and run:
    ```bash
    npm install
    ```
2.  Start the development server:
    ```bash
    npm run dev
    ```
3.  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Directory Structure

*   `app/page.tsx`: The master scroll orchestrator handling `useScroll`. Contains the post-sequence text and footer.
*   `app/globals.css`: Contains Tailwind v4 token configurations and custom animations.
*   `components/ChhotaBheemScrollCanvas.tsx`: Hand-built `requestAnimationFrame` and `canvas` renderer ensuring high-DPI fidelity.
*   `components/ChhotaBheemExperience.tsx`: The Framer Motion-powered narrative overlay that animates on thresholds.
*   `public/images/`: Stores the frame-by-frame narrative assets.

## 🛡️ License & Attribution

Creative engineering portfolio piece.

**Made by [KaliIO](https://kaliio.com) © 2026** — Empowering businesses with cutting-edge digital solutions, app development, and design.
