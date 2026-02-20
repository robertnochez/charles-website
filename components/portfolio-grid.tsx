import Image from "next/image"
import Link from "next/link"
import type { PortfolioPhoto } from "@/lib/portfolio-data"

export function PortfolioRow({
  photos,
  activeSlug,
}: {
  photos: PortfolioPhoto[]
  activeSlug?: string
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 md:gap-3">
      {photos.map((photo) => {
        const isActive = photo.slug === activeSlug
        return (
          <Link
            key={photo.src}
            href={`/portfolio/${photo.slug}`}
            className={`relative aspect-square overflow-hidden group block ${isActive ? "ring-2 ring-foreground" : ""}`}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 12.5vw"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-300" />
            <div className="absolute inset-x-0 bottom-0 p-2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-t from-foreground/60 to-transparent">
              <p className="text-xs text-background font-medium truncate">
                {photo.title}
              </p>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
