import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://nrouftrggkycuvtlbuct.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5yb3VmdHJnZ2t5Y3V2dGxidWN0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTIyOTk4MDEsImV4cCI6MjAwNzg3NTgwMX0.nsoJzBK1M3jM_FK6LsKdtF5YcIRI1NCKv2E3aQ2_0TQ";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
