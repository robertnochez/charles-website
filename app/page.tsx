import { Navbar } from "@/components/navbar"
import { PhotoGrid } from "@/components/photo-grid"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Photo Grid - 10 photos */}
          <section id="portfolio" className="py-8 md:py-12">
            {/* <PhotoGrid photos={topPhotos} /> */}
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