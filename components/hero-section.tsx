import Image from "next/image"

interface HeroSectionProps {
  imageSrc: string
  imageAlt: string
}

export function HeroSection({ imageSrc, imageAlt }: HeroSectionProps) {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="order-2 md:order-1">
          <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground text-balance">
            {"I'm Charles,"}
          </h1>
          <p className="mt-4 font-serif text-xl md:text-2xl lg:text-3xl leading-relaxed text-muted-foreground text-pretty">
            a filmmaker and photographer creating and sharing stories through the visual arts.
          </p>
        </div>
        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}