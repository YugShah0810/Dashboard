create extension if not exists "pgcrypto";

create table if not exists public.courses (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  progress integer not null check (progress >= 0 and progress <= 100),
  icon_name text not null,
  created_at timestamp with time zone default now()
);

alter table public.courses enable row level security;

drop policy if exists "Courses are readable by everyone" on public.courses;
create policy "Courses are readable by everyone"
on public.courses
for select
to anon, authenticated
using (true);

insert into public.courses (title, progress, icon_name)
values
  ('Advanced React Patterns', 75, 'Atom'),
  ('AI-Assisted Study Systems', 58, 'BrainCircuit'),
  ('Database Design Lab', 42, 'DatabaseZap'),
  ('Motion Design for Interfaces', 86, 'Sparkles')
on conflict do nothing;
