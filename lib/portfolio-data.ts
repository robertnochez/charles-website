export interface PortfolioCategory {
  slug: string
  title: string
  category: string
  cover: string   // path to the cover shown on the portfolio grid
  dir: string     // subfolder name inside /public/media/
}

export const portfolioCategories: PortfolioCategory[] = [
  { slug: "california", title: "California",   category: "Travel",    cover: "/covers/Cali.jpg",     dir: "cali"     },
  { slug: "cars",       title: "Cars",          category: "Automotive",cover: "/covers/Cars.jpg",     dir: "cars"     },
  { slug: "japan",      title: "Japan",         category: "Travel",    cover: "/covers/Japan.jpg",    dir: "japan"    },
  { slug: "outdoors",   title: "Outdoors",      category: "Nature",    cover: "/covers/Outdoors.jpg", dir: "outdoors" },
  { slug: "south-korea",title: "South Korea",   category: "Travel",    cover: "/covers/SK.jpg",       dir: "sk"       },
  { slug: "stills",     title: "Stills",        category: "Street",    cover: "/covers/Stills.jpg",   dir: "stills"   },
  { slug: "taiwan",     title: "Taiwan",        category: "Travel",    cover: "/covers/Taiwan.jpg",   dir: "taiwan"   },
  { slug: "wildlife",   title: "Wildlife",      category: "Nature",    cover: "/covers/Wildlife.jpg", dir: "wildlife" },
]

export const rowOneCategories = portfolioCategories.slice(0, 4)
export const rowTwoCategories = portfolioCategories.slice(4, 8)

export function getCategoryBySlug(slug: string): PortfolioCategory | undefined {
  return portfolioCategories.find((c) => c.slug === slug)
}