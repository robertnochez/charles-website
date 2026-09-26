import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioRow } from "@/components/portfolio-grid"
import { rowOneCategories, rowTwoCategories } from "@/lib/portfolio-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photography | Charles Lai",
  description:
    "Photography portfolio by Charles Lai. Capturing bustling cities, quiet mountains, and fleeting moments of everyday life.",
}

export default function PortfolioPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <section className="py-16 md:py-24">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-16 text-balance">
              Photography
            </h1>
            <div className="flex flex-col gap-2 md:gap-3">
              <PortfolioRow categories={rowOneCategories} />
              <PortfolioRow categories={rowTwoCategories} />
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  )
}