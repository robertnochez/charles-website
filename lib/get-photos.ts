import { supabaseServer } from "@/lib/supabase-server"

export async function getPhotosForCategory(dir: string): Promise<string[]> {
//   console.log("URL from get-photos:", process.env.NEXT_PUBLIC_SUPABASE_URL)
//   console.log("KEY from get-photos:", process.env.SUPABASE_PUBLISHABLE_KEY)
//   console.log("Fetching photos for dir:", dir)
  const { data, error } = await supabaseServer.storage
    .from("portfolio")
    .list(dir, { sortBy: { column: "name", order: "asc" } })

  if (error || !data) {
    console.error("Supabase storage error:", error)
    return []
  }

  return data
    .filter((file) => file.id !== null)
    .map((file) => {
      const { data: { publicUrl } } = supabaseServer.storage
        .from("portfolio")
        .getPublicUrl(`${dir}/${file.name}`)
      return publicUrl
    })
}