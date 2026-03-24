export interface PortfolioCategory {
  slug: string
  title: string
  category: string
  cover: string   // path to the cover shown on the portfolio grid
  dir: string     // subfolder name inside /public/media/
}

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "california", title: "California",  category: "Travel",     cover: "/covers/Cali.jpg",     dir: "cali"    },
  { slug: "cars",       title: "Cars",         category: "Automotive", cover: "/covers/Cars.jpg",     dir: "cars"    },
  { slug: "japan",      title: "Japan",        category: "Travel",     cover: "/covers/Japan.jpg",    dir: "japan"   },
  // other categories will return empty until you create their folders in Supabase
]

export const rowOneCategories = portfolioCategories.slice(0, 4)
export const rowTwoCategories = portfolioCategories.slice(4, 8)

export function getCategoryBySlug(slug: string): PortfolioCategory | undefined {
  return portfolioCategories.find((c) => c.slug === slug)
}