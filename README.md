# QUAP Frontend

hey man 3

Quick-Commerce Analytics Platform - Universal analytics for Blinkit, Zepto, and Instamart.

## Tech Stack

- **Framework**: Next.js 15+ (App Router, Client-Only)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4
- **UI Components**: shadcn/ui + Radix UI
- **State Management**: Zustand 5.0
- **Data Fetching**: TanStack Query 5.x
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Tables**: TanStack Table
- **HTTP Client**: Axios
- **Date Utilities**: date-fns

## Getting Started

### Installation

1. Install dependencies:

```bash
npm install
```

2. Set up environment variables (`.env.local` is already configured):

```env
NEXT_PUBLIC_API_URL=http://localhost:8000/api/v1
NEXT_PUBLIC_WS_URL=ws://localhost:8000
NEXT_PUBLIC_APP_NAME=QUAP
NEXT_PUBLIC_APP_VERSION=1.0.0
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Auth pages
│   ├── (dashboard)/       # Dashboard pages
│   ├── layout.tsx         # Root layout
│   └── providers.tsx      # React Query provider
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── [features]/       # Feature components
├── stores/               # Zustand stores
├── api/                  # API client
├── lib/                  # Utilities
├── types/                # TypeScript types
└── styles/               # Global styles
```

## Features Completed ✅

### Sprint 1: Foundation
- ✅ Next.js 15 setup
- ✅ TypeScript & Tailwind configuration
- ✅ shadcn/ui integration
- ✅ TanStack Query setup
- ✅ Zustand state management
- ✅ API client with auth
- ✅ Type definitions
- ✅ Utility functions

## Available Scripts

- `npm run dev` - Development server
- `npm run build` - Production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Documentation

For detailed documentation, see [FRONTEND-TODO.md](../FRONTEND-TODO.md)

## License

Proprietary - All rights reserved

---

**Version**: 1.0.0
**Status**: Sprint 1 Complete ✅
