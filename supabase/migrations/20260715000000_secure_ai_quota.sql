-- Server-owned, atomic quota accounting for paid AI requests. Clients have no
-- table access; the Edge Functions call the RPC with the service-role key.
create table if not exists public.ai_usage_daily (
  clerk_user_id text not null,
  usage_date date not null default current_date,
  request_count integer not null default 0 check (request_count >= 0),
  primary key (clerk_user_id, usage_date)
);

alter table public.ai_usage_daily enable row level security;
revoke all on table public.ai_usage_daily from anon, authenticated;

create or replace function public.consume_ai_request(
  p_clerk_user_id text,
  p_daily_limit integer default 10
)
returns table (allowed boolean, remaining integer)
language plpgsql
security definer
set search_path = public
as $$
declare
  new_count integer;
begin
  if p_clerk_user_id is null or length(p_clerk_user_id) = 0
    or p_daily_limit < 1 or p_daily_limit > 1000 then
    raise exception 'invalid AI quota request';
  end if;

  insert into public.ai_usage_daily (clerk_user_id, usage_date, request_count)
  values (p_clerk_user_id, current_date, 1)
  on conflict (clerk_user_id, usage_date) do update
    set request_count = public.ai_usage_daily.request_count + 1
    where public.ai_usage_daily.request_count < p_daily_limit
  returning request_count into new_count;

  if new_count is null then
    return query select false, 0;
  else
    return query select true, p_daily_limit - new_count;
  end if;
end;
$$;

revoke all on function public.consume_ai_request(text, integer) from public;
grant execute on function public.consume_ai_request(text, integer) to service_role;
