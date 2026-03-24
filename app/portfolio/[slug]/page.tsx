import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioRow } from "@/components/portfolio-grid"
import {
  portfolioCategories,
  rowOneCategories,
  rowTwoCategories,
  getCategoryBySlug,
} from "@/lib/portfolio-data"
import { getPhotosForCategory } from "@/lib/get-photos"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export function generateStaticParams() {
  return portfolioCategories.map((cat) => ({ slug: cat.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const cat = getCategoryBySlug(slug)
  if (!cat) return { title: "Not Found | Charles Lai" }
  return {
    title: `${cat.title} | Charles Lai Photography`,
    description: `${cat.category} photography by Charles Lai.`,
  }
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const cat = getCategoryBySlug(slug)
  if (!cat) notFound()

  // Read all images from /public/media/<dir> at request time
  const photos = getPhotosForCategory(cat.dir)

  const currentIndex = portfolioCategories.findIndex((c) => c.slug === slug)
  const prevCat = currentIndex > 0 ? portfolioCategories[currentIndex - 1] : null
  const nextCat = currentIndex < portfolioCategories.length - 1
    ? portfolioCategories[currentIndex + 1]
    : null

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-[1400px] mx-auto px-6">
          <section className="py-10 md:py-16">

            {/* Back link */}
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            {/* Category header + prev/next */}
            <div className="flex flex-col gap-2 mb-10">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">
                {cat.category}
              </p>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground text-balance">
                {cat.title}
              </h1>
              <p className="text-sm text-muted-foreground">
                {photos.length} {photos.length === 1 ? "photo" : "photos"}
              </p>

              {/* Prev / Next */}
              <div className="flex items-center justify-between border-t border-border pt-6 mt-4">
                {prevCat ? (
                  <Link
                    href={`/portfolio/${prevCat.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    &larr; {prevCat.title}
                  </Link>
                ) : <span />}
                {nextCat ? (
                  <Link
                    href={`/portfolio/${nextCat.slug}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
                  >
                    {nextCat.title} &rarr;
                  </Link>
                ) : <span />}
              </div>
            </div>

            {/* Dynamic photo grid */}
            {photos.length > 0 ? (
              <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 md:gap-3 space-y-2 md:space-y-3 mb-16">
                {photos.map((src) => (
                  <div key={src} className="relative w-full overflow-hidden break-inside-avoid">
                    <Image
                      src={src}
                      alt={`${cat.title} photo`}
                      width={800}
                      height={600}
                      className="w-full h-auto object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground text-sm mb-16">
                No photos found in this collection yet.
              </p>
            )}

            {/* More photography grid */}
            <div className="border-t border-border pt-12">
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-8">
                More Photography
              </h2>
              <div className="flex flex-col gap-2 md:gap-3">
                <PortfolioRow categories={rowOneCategories} activeSlug={slug} />
                <PortfolioRow categories={rowTwoCategories} activeSlug={slug} />
              </div>
            </div>

          </section>
          <Footer />
        </div>
      </main>
    </>
  )
}
