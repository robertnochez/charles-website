"use client"

import Image from "next/image"

interface PhotoGridProps {
  photos: {
    src: string
    alt: string
  }[]
}

export function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {photos.map((photo, index) => (
        <div
          key={index}
          className="relative aspect-[4/5] overflow-hidden bg-muted group"
        >
          <Image
            src={photo.src || "/placeholder.svg"}
            alt={photo.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      ))}
    </div>
  )
}