import { Navbar } from "@/components/navbar"
import { PortfolioRow } from "@/components/portfolio-grid"
import {
  allPhotos,
  getPhotoBySlug,
  rowOnePhotos,
  rowTwoPhotos,
} from "@/lib/portfolio-data"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export async function generateStaticParams() {
  return allPhotos.map((photo) => ({ slug: photo.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const photo = getPhotoBySlug(slug)
  if (!photo) return { title: "Not Found | Charles Lai" }
  return {
    title: `${photo.title} | Charles Lai Photography`,
    description: `${photo.alt} - ${photo.category} photography by Charles Lai.`,
  }
}

export default async function PhotoPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const photo = getPhotoBySlug(slug)

  if (!photo) {
    notFound()
  }

  const currentIndex = allPhotos.findIndex((p) => p.slug === slug)
  const prevPhoto = currentIndex > 0 ? allPhotos[currentIndex - 1] : null
  const nextPhoto =
    currentIndex < allPhotos.length - 1 ? allPhotos[currentIndex + 1] : null

  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-[1400px] mx-auto px-6">
          {/* Back link and photo detail */}
          <section className="py-10 md:py-16">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>

            {/* Featured photo */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
              <div className="relative w-full lg:w-2/3 aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>

              <div className="flex flex-col justify-end lg:w-1/3">
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">
                  {photo.category}
                </p>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-tight text-foreground mb-4 text-balance">
                  {photo.title}
                </h1>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8">
                  {photo.alt}
                </p>

                {/* Prev / Next navigation */}
                <div className="flex items-center justify-between border-t border-border pt-6">
                  {prevPhoto ? (
                    <Link
                      href={`/portfolio/${prevPhoto.slug}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      &larr; {prevPhoto.title}
                    </Link>
                  ) : (
                    <span />
                  )}
                  {nextPhoto ? (
                    <Link
                      href={`/portfolio/${nextPhoto.slug}`}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors text-right"
                    >
                      {nextPhoto.title} &rarr;
                    </Link>
                  ) : (
                    <span />
                  )}
                </div>
              </div>
            </div>

            {/* Full portfolio grid */}
            <div className="border-t border-border pt-12">
              <h2 className="font-serif text-2xl md:text-3xl tracking-tight text-foreground mb-8">
                More Photography
              </h2>
              <div className="flex flex-col gap-2 md:gap-3">
                <PortfolioRow photos={rowOnePhotos} activeSlug={slug} />
                <PortfolioRow photos={rowTwoPhotos} activeSlug={slug} />
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} Charles Lai. All rights
                reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  )
}
