create table if not exists reservations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  date date not null,
  guests text not null,
  occasion text,
  note text,
  status text not null default 'pending',
  created_at timestamptz default now()
);

alter table reservations enable row level security;

create policy "Anyone can insert reservations"
  on reservations for insert
  with check (true);
