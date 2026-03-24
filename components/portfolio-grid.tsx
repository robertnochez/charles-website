"use client"

import Image from "next/image"
import Link from "next/link"
import type { PortfolioCategory } from "@/lib/portfolio-data"

export function PortfolioRow({
  categories,
  activeSlug,
}: {
  categories: PortfolioCategory[]
  activeSlug?: string
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 md:gap-3">
      {categories.map((cat) => (
        <Link
          key={cat.slug}
          href={`/portfolio/${cat.slug}`}
          className={`relative aspect-square overflow-hidden group block ${
            activeSlug === cat.slug ? "ring-2 ring-foreground" : ""
          }`}
        >
          <Image
            src={cat.cover}
            alt={cat.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-white text-lg font-semibold text-center px-2">
              {cat.title}
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}