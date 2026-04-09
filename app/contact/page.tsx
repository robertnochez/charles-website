import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Charles Lai",
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
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

              {/* Left Column - Intro */}
              <div className="flex-1 lg:max-w-[45%]">
                <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-foreground mb-10 text-balance">
                  {"Let's work together"}
                </h1>
                <div className="flex flex-col gap-6">
                  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                    Have a project in mind, a collaboration, or just want to say
                    hello? Fill out the form and I'll get back to you as soon as
                    possible.
                  </p>
                  <div className="flex flex-col gap-4 text-sm text-muted-foreground">
                    <div>
                      <p className="text-xs tracking-widest uppercase text-foreground/40 mb-1">
                        Based in
                      </p>
                      <p>California, USA</p>
                    </div>
                    <div>
                      <p className="text-xs tracking-widest uppercase text-foreground/40 mb-1">
                        Available for
                      </p>
                      <p>Film · Photography · Collaboration</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="flex-1 w-full lg:max-w-[55%]">
                <form
                  action="https://api.web3forms.com/submit"
                  method="POST"
                  id="form"
                  className="flex flex-col gap-8"
                >
                  <input
                    type="hidden"
                    name="access_key"
                    value="55236999-472d-40e0-82c0-65a6845064a3"
                  />
                  <input
                    type="hidden"
                    name="subject"
                    value="New message from charleslaishoots.com"
                  />
                  <input
                    type="checkbox"
                    name="botcheck"
                    style={{ display: "none" }}
                  />

                  {/* Full Name */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs tracking-widest uppercase text-foreground/40"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="John Doe"
                      required
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs tracking-widest uppercase text-foreground/40"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="you@company.com"
                      required
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="phone"
                      className="text-xs tracking-widest uppercase text-foreground/40"
                    >
                      Phone Number
                    </label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      placeholder="+1 (555) 1234-567"
                      required
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="message"
                      className="text-xs tracking-widest uppercase text-foreground/40"
                    >
                      Your Message
                    </label>
                    <textarea
                      rows={5}
                      name="message"
                      id="message"
                      placeholder="Tell me about your project..."
                      required
                      className="w-full bg-transparent border-b border-foreground/20 py-3 text-base text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-8 py-3 text-sm tracking-widest uppercase border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300"
                    >
                      Send Message
                    </button>
                  </div>

                  <p
                    className="text-sm text-muted-foreground"
                    id="result"
                  />
                </form>
              </div>

            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}