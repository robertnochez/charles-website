import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"
import { title } from "process"

export const metadata: Metadata = {
  title: "Photography | Charles Lai",
  description:
    "Photography portfolio by Charles Lai. Capturing bustling cities, quiet mountains, and fleeting moments of everyday life.",
}

const rowOnePhotos = [
  { src: "/covers/Cali.jpg", alt: "Cali", title: "California"},
  { src: "/covers/Cars.jpg", alt: "Cars", title: "Cars"},
  { src: "/covers/Japan.jpg", alt: "Japan", title: "Japan"},
  { src: "/covers/Outdoors.jpg", alt: "Outdoors", title: "Outdoors"}
]

const rowTwoPhotos = [
  { src: "/covers/SK.jpg", alt: "SK", title: "South Korea"},
  { src: "/covers/Stills.jpg", alt: "Stills", title: "Stills"},
  { src: "/covers/Taiwan.jpg", alt: "Taiwan", title: "Taiwan"},
  { src: "/covers/Wildlife.jpg", alt: "Wildlife", title: "Wildlife"}
]

function PortfolioRow({ photos }: { photos: { src: string; alt: string; title?: string }[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-2 md:gap-3">
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

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />

          {/* Centered text */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold text-center px-2">
              {photo.title}
            </p>
          </div>
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
          <Footer />
        </div>
      </main>
    </>
  )
}
