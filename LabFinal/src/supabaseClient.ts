// src/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

// Your Supabase URL and API Key
const supabaseUrl = 'https://jquispufjfyfytqqwtkw.supabase.co';
const supabaseKey = ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxdWlzcHVmamZ5Znl0cXF3dGt3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQ4MTc2NzQsImV4cCI6MjA1MDM5MzY3NH0.Vatmc4Pz7yUdr-wMzfn6sHC3RkqHtOLAfeG7mDYg380';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
