export interface PortfolioPhoto {
  src: string
  alt: string
  slug: string
  title: string
  category: string
}

export const rowOnePhotos: PortfolioPhoto[] = [
  { src: "/images/portfolio-1.jpg", alt: "California coastline at sunset", slug: "california-coastline", title: "California Coastline", category: "Landscape" },
  { src: "/images/portfolio-2.jpg", alt: "Asian night market", slug: "night-market", title: "Night Market", category: "Street" },
  { src: "/images/portfolio-3.jpg", alt: "Snow-capped mountain peak", slug: "mountain-peak", title: "Mountain Peak", category: "Landscape" },
  { src: "/images/portfolio-4.jpg", alt: "Candid urban portrait", slug: "urban-portrait", title: "Urban Portrait", category: "Portrait" },
  { src: "/images/portfolio-5.jpg", alt: "River through forest valley", slug: "forest-valley", title: "Forest Valley", category: "Aerial" },
  { src: "/images/portfolio-6.jpg", alt: "Artisan coffee shop", slug: "coffee-shop", title: "Artisan Coffee", category: "Brand" },
  { src: "/images/portfolio-7.jpg", alt: "Deer in misty forest", slug: "misty-forest", title: "Misty Forest", category: "Wildlife" },
  { src: "/images/portfolio-8.jpg", alt: "Outdoor festival at dusk", slug: "festival-dusk", title: "Festival at Dusk", category: "Event" },
]

export const rowTwoPhotos: PortfolioPhoto[] = [
  { src: "/images/portfolio-9.jpg", alt: "San Francisco skyline", slug: "sf-skyline", title: "San Francisco Skyline", category: "Cityscape" },
  { src: "/images/portfolio-10.jpg", alt: "Water droplets macro", slug: "water-droplets", title: "Water Droplets", category: "Macro" },
  { src: "/images/portfolio-11.jpg", alt: "Desert sand dunes", slug: "desert-dunes", title: "Desert Dunes", category: "Landscape" },
  { src: "/images/portfolio-12.jpg", alt: "Film set behind the scenes", slug: "film-set-bts", title: "Film Set BTS", category: "Film" },
  { src: "/images/portfolio-13.jpg", alt: "Coral reef underwater", slug: "coral-reef", title: "Coral Reef", category: "Underwater" },
  { src: "/images/portfolio-14.jpg", alt: "Milky way night sky", slug: "milky-way", title: "Milky Way", category: "Astrophotography" },
  { src: "/images/portfolio-15.jpg", alt: "Japanese temple garden", slug: "temple-garden", title: "Temple Garden", category: "Travel" },
  { src: "/images/portfolio-16.jpg", alt: "Surfer at sunrise", slug: "surfer-sunrise", title: "Surfer at Sunrise", category: "Sport" },
]

export const allPhotos: PortfolioPhoto[] = [...rowOnePhotos, ...rowTwoPhotos]

export function getPhotoBySlug(slug: string): PortfolioPhoto | undefined {
  return allPhotos.find((photo) => photo.slug === slug)
}
