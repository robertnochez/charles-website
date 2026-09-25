import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioRow } from "@/components/portfolio-grid"
import { rowOneCategories, rowTwoCategories } from "@/lib/portfolio-data"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Videos | Charles Lai",
  description:
    "Videography portfolio by Charles Lai.",
}

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <section className="py-16 md:py-24">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-16 text-balance">
              Videos
            </h1>
            <div className="flex flex-col gap-2 md:gap-3">
            </div>
          </section>
          <Footer />
        </div>
      </main>
    </>
  )
}