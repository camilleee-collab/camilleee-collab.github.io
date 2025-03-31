import { createClient } from '@supabase/supabase-js';

const supabaseUrl = "https://hnordlnzoxyclejyhwep.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhub3JkbG56b3h5Y2xlanlod2VwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzOTEyNDEsImV4cCI6MjA1ODk2NzI0MX0.CtKMdptMxxla5jklz7w2O38HOiuN_pBjvSqsz8eIkeE";
export const supabase = createClient(supabaseUrl, supabaseKey);
