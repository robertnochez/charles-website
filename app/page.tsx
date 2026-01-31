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
  // { src: "/homepage-top/img066.jpg", alt: "pic 11" },
  // { src: "/homepage-top/img20250627_13105483-2.jpg", alt: "pic 12" },
  // { src: "/homepage-top/img441-3.jpg", alt: "pic 13" },
  // { src: "/homepage-top/img804-1.jpg", alt: "pic 14" },
  // { src: "/homepage-top/img812.jpg", alt: "pic 15" }
]

const bottomPhotos =[
  { src: "/homepage-bottom/036A1984.jpg", alt: "pic 1" },
  { src: "/homepage-bottom/036A2313.jpg", alt: "pic 2" },
  { src: "/homepage-bottom/036A2370.jpg", alt: "pic 3" },
  { src: "/homepage-bottom/036A2509.jpg", alt: "pic 4" },
  { src: "/homepage-bottom/036A2609.jpg", alt: "pic 5" },
  { src: "/homepage-bottom/036A2941.jpg", alt: "pic 6" },
  { src: "/homepage-bottom/036A4465.jpg", alt: "pic 7" },
  { src: "/homepage-bottom/IMG_0016.1.jpg", alt: "pic 8" },
  { src: "/homepage-bottom/IMG_0192.1.jpg", alt: "pic 9" },
  { src: "/homepage-bottom/img_1157.jpg", alt: "pic 10" },
  //{ src: "/homepage-bottom/img_1373.jpg", alt: "pic 11" },
  { src: "/homepage-bottom/img_1518.jpg", alt: "pic 12" },
  { src: "/homepage-bottom/img_1817.jpg", alt: "pic 13" },
  { src: "/homepage-bottom/img_2154.jpg", alt: "pic 14" },
  //{ src: "/homepage-bottom/img_2281.jpg", alt: "pic 15" },
  { src: "/homepage-bottom/img_2349.jpg", alt: "pic 16" },
  { src: "/homepage-bottom/IMG_9683.1.jpg", alt: "pic 17" },
  { src: "/homepage-bottom/IMG_9974.jpg", alt: "pic 18" },
  { src: "/homepage-bottom/img-061.jpg", alt: "pic 19" },
  { src: "/homepage-bottom/img002.jpg", alt: "pic 20" },
  { src: "/homepage-bottom/img113.jpg", alt: "pic 21" },
  { src: "/homepage-bottom/img129.jpg", alt: "pic 22" },
  { src: "/homepage-bottom/img20241229_0008-6.jpg", alt: "pic 23" },
  { src: "/homepage-bottom/img20250620_13211647.jpg", alt: "pic 24" },
  { src: "/homepage-bottom/img20250620_14171684.jpg", alt: "pic 25" },
  { src: "/homepage-bottom/img20250620_16464202.jpg", alt: "pic 26" },
  { src: "/homepage-bottom/img206.jpg", alt: "pic 27" },
  { src: "/homepage-bottom/img275.jpg", alt: "pic 28" },
  //{ src: "/homepage-bottom/img449-6.jpg", alt: "pic 29" },
  //{ src: "/homepage-bottom/img815.jpg", alt: "pic 30" }
]


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* Top Photo Grid - 10 photos */}
          <section className="py-8 md:py-12">
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
          <section className="py-8 md:py-12">
            <PhotoGrid photos={bottomPhotos} />
          </section>

          {/* Footer */}
          <footer className="py-12 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Charles Lai. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a
                  href="https://www.instagram.com/charleslaishoots/"
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