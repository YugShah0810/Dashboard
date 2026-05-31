import { createClient } from "@supabase/supabase-js";
import type { Course, CourseQueryResult } from "@/lib/types";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export async function getCourses(): Promise<CourseQueryResult> {
  if (!supabaseUrl || !supabaseAnonKey) {
    return {
      courses: [],
      error:
        "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env.local."
    };
  }

  const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false
    }
  });

  const { data, error } = await supabase
    .from("courses")
    .select("id,title,progress,icon_name,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    return {
      courses: [],
      error: error.message
    };
  }

  return {
    courses: (data ?? []) as Course[]
  };
}
