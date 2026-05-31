# Futuristic Student Dashboard

A dark, animated Next.js App Router prototype with Supabase-backed course tiles, Tailwind CSS, Framer Motion interactions, and Lucide icons.

## Setup

1. Create a Supabase project.
2. Open the Supabase SQL editor and run `supabase/seed.sql`.
3. Copy `.env.example` to `.env.local` and add:

```bash
NEXT_PUBLIC_SUPABASE_URL="https://your-project-ref.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
```

4. Install and run:

```bash
npm install
npm run dev
```

The app fetches `courses` from Supabase in a React Server Component and renders animated client components for the interactive Bento experience.
