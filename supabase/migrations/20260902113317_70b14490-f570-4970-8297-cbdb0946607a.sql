CREATE TABLE public.feedback_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES auth.users ON DELETE CASCADE,
  sender_name TEXT NOT NULL DEFAULT '',
  sender_email TEXT NOT NULL,
  category TEXT NOT NULL DEFAULT 'suggestion',
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.feedback_messages TO authenticated;
GRANT ALL ON public.feedback_messages TO service_role;

ALTER TABLE public.feedback_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Members can send their own feedback"
  ON public.feedback_messages FOR INSERT TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Members can view their own feedback"
  ON public.feedback_messages FOR SELECT TO authenticated
  USING (auth.uid() = user_id);