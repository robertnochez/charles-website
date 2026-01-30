import { Navbar } from "@/components/navbar"
import { PhotoGrid } from "@/components/photo-grid"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"

const topPhotos = [
  { src: "/homepage-top/036A0375.jpg", alt: "pic 1" },
  { src: "/homepage-top/036A0977.jpg", alt: "pic 2" },
  { src: "/homepage-top/036A1962-2.jpg", alt: "pic 3" },
  { src: "/homepage-top/036A2450.jpg", alt: "pic 4" },
  { src: "/homepage-top/DSC00322-3.JPG", alt: "pic 5" },
  { src: "/homepage-top/DSC02042.jpg", alt: "pic 6" },
  { src: "/homepage-top/IMG_0014.1.jpg", alt: "pic 7" },
  { src: "/homepage-top/IMG_0051.1.jpg", alt: "pic 8" },
  { src: "/homepage-top/IMG_0143.1.jpg", alt: "pic 9" },
  { src: "/homepage-top/img-014.jpg", alt: "pic 10" },
  { src: "/homepage-top/img066.jpg", alt: "pic 11" },
  { src: "/homepage-top/img20250627_13105483-2.jpg", alt: "pic 12" },
  { src: "/homepage-top/img441-3.jpg", alt: "pic 13" },
  { src: "/homepage-top/img804-1.jpg", alt: "pic 14" },
  { src: "/homepage-top/img812.jpg", alt: "pic 15" }
]

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Photo Grid - 10 photos */}
          <section id="portfolio" className="py-8 md:py-12">
            <PhotoGrid photos={topPhotos} />
          </section>

          {/* Hero Section */}
          <HeroSection 
            imageSrc="/charles_pic.jpg" 
            imageAlt="Charles Lai - Filmmaker and Photographer" 
          />

          {/* Services Section */}
          <ServicesSection />

          {/* Bottom Photo Grid - 10 photos */}
          <section className="py-8 md:py-12 border-t border-border">
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Charles Lai. All rights reserved.
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