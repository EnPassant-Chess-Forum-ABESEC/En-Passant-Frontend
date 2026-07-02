# EnPassant Chess Forum

The official frontend for the EnPassant Chess Forum (ABESEC's Chess Club).

This is a modern, design-driven frontend built with a custom scroll-jacking engine, heavy editorial typography, and high-fidelity aesthetics.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: Custom inline SVGs (no external UI/icon libraries)

## Getting Started

Follow these steps to run the development server locally:

### 1. Install Dependencies

Ensure you have Node.js installed on your machine. Then, run the following command in the root directory:

```bash
npm install
```

### 2. Start the Development Server

Start the Next.js development server:

```bash
npm run dev
```

### 3. Open the App

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

- **`/app`**: Next.js App Router entry point, layout, and global CSS.
- **`/components`**: Global shared UI components (e.g. `ScrollStage`, `ProgressIndicator`, `AuthModal`).
- **`/components/panels`**: The individual horizontal scrolling panels (Home, Community, ACC, Events, Leads, Alumni).
- **`/public`**: Static assets, including the high-resolution imagery used in the cards and backdrop.
- **`/lib`**: Context providers (like `AuthContext`) and validation schemas (like Zod schemas).

## Notes
- **Images**: The project uses unoptimized raw files via the `unoptimized` flag on `next/image` to prevent Next.js from bottlenecking during local development, as the assets are intentionally high-res.
- **Styling**: Uses standard Tailwind CSS v4 utility classes. Most foundational styles and CSS variables are found in `app/globals.css`.
