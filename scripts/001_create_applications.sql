-- 申请预约记录表
CREATE TABLE IF NOT EXISTS public.applications (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  interested_in_brand TEXT,
  income_goal TEXT,
  investment_ready TEXT,
  move_forward_ready TEXT,
  scheduled_date DATE,
  scheduled_time TEXT,
  timezone TEXT DEFAULT 'America/Los_Angeles',
  status TEXT DEFAULT 'pending',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 添加索引
CREATE INDEX IF NOT EXISTS idx_applications_email ON public.applications(email);
CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);

-- 启用RLS
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;

-- 允许匿名用户插入和读取
CREATE POLICY "Allow anon insert" ON public.applications FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow anon select" ON public.applications FOR SELECT TO anon USING (true);
