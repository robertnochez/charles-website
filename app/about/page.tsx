import { Navbar } from "@/components/navbar"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Charles Lai",
  description:
    "Chinese-American Filmmaker and Photographer born, raised, and based in California with a passion for storytelling and adventure.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <section className="py-16 md:py-24 lg:py-32">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">
              {/* Left Column - Text */}
              <div className="flex-1 lg:max-w-[55%]">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-10 text-balance">
                  {"Hello, I'm Charles"}
                </h1>
                <div className="flex flex-col gap-6">
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    I'm a Chinese-American Filmmaker and Photographer born, raised, and based in California. 
                    I have a passion for storytelling and adventure. From capturing bustling cities to quiet snow-topped mountains, 
                    seas of people to hidden creatures, I hope to share these fleeting moments of everyday life.
                  </p>
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    Traveling and exploring the outdoors is a big part of how I
                    create. The world is abundant with learning experiences. I am
                    constantly seeking new experiences to broaden my perspective
                    and enhance my work as a storyteller. I hope to create
                    something that is meaningful and can have a positive
                    influence on others.
                  </p>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="flex-1 w-full lg:max-w-[45%]">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src="/charles_about.jpg"
                    alt="Charles Lai - Filmmaker and Photographer"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    priority
                  />
                </div>
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
