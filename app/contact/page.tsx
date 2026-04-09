import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About | Charles Lai",
  description:
    "Chinese-American Filmmaker and Photographer born, raised, and based in California with a passion for storytelling and adventure.",
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6">
          <section className="py-16 md:py-24 lg:py-32">
            <p>
                Contact Page
            </p>
          </section>

          {/* Footer */}
          <Footer />
        </div>
      </main>
    </>
  )
}
