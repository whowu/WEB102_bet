import { createClient } from '@supabase/supabase-js'

const URL = 'https://lrpahwtrongkakayayll.supabase.co'
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxycGFod3Ryb25na2FrYXlheWxsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMzMTQyMDIsImV4cCI6MjA2ODg5MDIwMn0.AtqM1E4MKRbZhCaOCHND9HYMr3Hs4ExMrB85atJafoQ'

export const supabase = createClient(URL, API_KEY)