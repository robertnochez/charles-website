"use client"

export function Footer() {
    return (
        <footer className="py-12 border-t border-border">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Charles Lai
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
                {/* <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a> */}
              </div>
            </div>
          </footer>
    )
}