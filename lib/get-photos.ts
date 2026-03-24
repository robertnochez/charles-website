import { supabase } from "@/lib/supabase"

export async function getPhotosForCategory(dir: string): Promise<string[]> {
  const { data, error } = await supabase.storage
    .from("portfolio")
    .list(dir, { sortBy: { column: "name", order: "asc" } })

  if (error || !data) {
    console.error("Supabase storage error:", error)
    return []
  }

  return data
    .filter((file) => file.id !== null)
    .map((file) => {
      const { data: { publicUrl } } = supabase.storage
        .from("portfolio")
        .getPublicUrl(`${dir}/${file.name}`)
      return publicUrl
    })
}