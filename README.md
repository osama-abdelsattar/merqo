# Merqo

**Everything, everywhere, delivered.**
A modern general marketplace — browse, wishlist, and shop everything in one place.

![Next.js](https://img.shields.io/badge/Next.js-16.x-black?style=for-the-badge&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)
![React](https://img.shields.io/badge/React-19.x-61DAFB?style=for-the-badge&logo=react)
![TanStack Query](https://img.shields.io/badge/TanStack_Query-5.x-FF4154?style=for-the-badge&logo=react-query)

---

## ✨ Features

- 🔐 **Secure Authentication** – Built with [Next-Auth](https://next-auth.js.org/) for robust user management.
- 🌓 **Dynamic Theming** – Seamless dark and light mode support via [next-themes](https://github.com/pacocoursey/next-themes).
- 🧩 **Synchronized State** – Powered by [TanStack Query v5](https://tanstack.com/query/latest) for real-time cart and wishlist synchronization.
- 📱 **Responsive Design** – Fully optimized for mobile, tablet, and desktop using [Tailwind CSS v4](https://tailwindcss.com/).
- 🛍️ **Modular Architecture** – Domain-driven server actions and service layers for clean, maintainable logic.
- 🎡 **Interactive Hero Section** – Engaging carousels powered by [Swiper](https://swiperjs.com/).
- ⚡ **Built for Speed** – Optimized with Next.js 16 App Router and Turbopack for peak performance.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Runtime**: [React 19](https://react.dev/)
- **Data Fetching**: [TanStack Query v5](https://tanstack.com/query/latest), [Axios](https://axios-http.com/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/), [Radix UI](https://www.radix-ui.com/), [Framer Motion](https://www.framer.com/motion/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
- **Auth**: [Next-Auth v4](https://next-auth.js.org/)

## 🏗️ Architectural Patterns

The project follows strict engineering standards to ensure scalability and type safety:

- **Domain-Driven Actions**: Core logic is encapsulated in `src/actions/` (e.g., `cart.action.ts`, `order.action.ts`).
- **Standardized Exports**: All non-page files follow the **"Bottom-Only" Export Rule** for cleaner import graphs.
- **Strict Typing**: Use of `export type { ... }` for explicit type-stripping and type boundaries.
- **Resilient UI**: Root-level `error.tsx` boundaries and isolated loading states for a seamless user experience.
- **SSRF Protection**: Centralized `fetchApi` wrapper with origin validation and path-traversal prevention.

## 🚀 Getting Started

### Prerequisites

- Node.js 20+
- npm, yarn, or pnpm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/osama-abdelsattar/merqo.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in the required fields:

   ```env
   NEXT_PUBLIC_API_BASE_URL=   # Backend API base URL (must end with a slash, e.g., https://api.example.com/)
   NEXTAUTH_SECRET=            # A random string used to encrypt JWT tokens / cookies
   NEXTAUTH_URL=               # Canonical URL of the site (e.g., http://localhost:3000)
   NEXT_PUBLIC_SITE_URL=       # (Optional) Public site URL fallback
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
merqo/
├── src/
│   ├── app/                  # Next.js App Router (Routes & Groups)
│   ├── actions/              # Domain-specific Server Actions (Cart, Orders, etc.)
│   ├── components/           # UI Components
│   │   ├── _components/      # Internal helper components (Auth inputs)
│   │   ├── common/           # Shared reusable components (buttons, rating, form inputs)
│   │   ├── layout/           # Global layouts (Navbar, Footer, Toaster)
│   │   └── ui/               # Base UI primitives (Shadcn UI)
│   ├── config/               # Application Configuration
│   ├── constants/            # Global Constants (Breakpoints, etc.)
│   ├── context/              # State management
│   ├── hooks/                # Custom React Hooks
│   ├── lib/                  # Library Wrappers (Zod Schemas, Animations)
│   ├── providers/            # Context Providers (Theme, QueryClient, Auth)
│   ├── services/             # Core API Service Layer
│   ├── styles/               # CSS Stylesheets
│   ├── types/                # Strict TypeScript Definitions
│   └── utils/                # Pure Utility Functions
├── public/                   # Static Assets
├── .env.example              # Template for environment variables
└── proxy.ts                  # Next.js 16 Middleware (renamed to proxy.ts)
```

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

Made with ❤️ by [Osama Abdelsattar](https://github.com/osama-abdelsattar).
