import { Navbar } from "@/components/navbar"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Photography | Charles Lai",
  description:
    "Photography portfolio by Charles Lai. Capturing bustling cities, quiet mountains, and fleeting moments of everyday life.",
}

const rowOnePhotos = [
  { src: "/covers/Cali.jpg", alt: "Cali" },
  { src: "/covers/Cars.jpg", alt: "Cars" },
  { src: "/covers/Japan.jpg", alt: "Japan" },
  { src: "/covers/Outdoors.jpg", alt: "Outdoors" }
]

const rowTwoPhotos = [
  { src: "/covers/SK.jpg", alt: "SK" },
  { src: "/covers/Stills.jpg", alt: "Stills" },
    { src: "/covers/Taiwan.jpg", alt: "Taiwan" }
]

function PortfolioRow({ photos }: { photos: { src: string; alt: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-3">
      {photos.map((photo) => (
        <div
          key={photo.src}
          className="relative aspect-square overflow-hidden group"
        >
          <Image
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
        </div>
      ))}
    </div>
  )
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
              <PortfolioRow photos={rowOnePhotos} />
              <PortfolioRow photos={rowTwoPhotos} />
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
