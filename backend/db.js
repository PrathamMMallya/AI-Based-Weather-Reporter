import { supabase } from './supabaseClient.js'

export async function saveSubmission(data) {
  const { error } = await supabase
    .from('weather_submissions')
    .insert([data])

  if (error) {
    console.error('Error inserting data:', error)
    return false
  }
  return true
}
