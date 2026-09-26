"use client"

import { useState, useEffect, useCallback } from "react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

import { ChevronLeft, ChevronRight } from "lucide-react"

const videoContent = [
  {
    id: 1,
    title: "Wrong Number",
    description: "",
    youtubeId: "pf3G_nPC25E",
  },
  {
    id: 2,
    title: "Lights and Smoke",
    description: "",
    youtubeId: "KIpmWXEpKrQ",
  },
  {
    id: 3,
    title: "The Northern Elephant Seal",
    description: "",
    youtubeId: "qD-nGIL8jZk",
  },
  {
    id: 4,
    title: "The Great Egret",
    description: "",
    youtubeId: "balp9YXIXOU",
  },
  {
    id: 5,
    title: "RinRin Pasadena Video Shoot",
    description: "",
    youtubeId: "hyQMKqA7hKs",
  },
]

export default function VideosPage() {
  const [mounted, setMounted] = useState(false)
  const [currentVideo, setCurrentVideo] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const goToVideo = useCallback(
    (index: number) => {
      if (transitioning) return

      setTransitioning(true)

      setTimeout(() => {
        setCurrentVideo(index)

        setTimeout(() => {
          setTransitioning(false)
        }, 100)
      }, 300)
    },
    [transitioning],
  )

  const nextVideo = useCallback(() => {
    const nextIndex = (currentVideo + 1) % videoContent.length
    goToVideo(nextIndex)
  }, [currentVideo, goToVideo])

  const prevVideo = useCallback(() => {
    const prevIndex =
      (currentVideo - 1 + videoContent.length) % videoContent.length

    goToVideo(prevIndex)
  }, [currentVideo, goToVideo])

  if (!mounted) {
    return (
      <>
        <Navbar />

        <main className="pt-20">
          <div className="mx-auto max-w-[1400px] px-6">
            <section className="py-16 md:py-24">
              <div className="h-[70vh] bg-black" />
            </section>

            <Footer />
          </div>
        </main>
      </>
    )
  }

  const video = videoContent[currentVideo]

  return (
    <>
      <Navbar />

      <main className="pt-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <section className="py-16 md:py-24">
            <h1 className="mb-12 font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Videos
            </h1>

            {/* Video Gallery */}
            <div className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-black">
              {/* YouTube Video Background */}
              <div className="absolute inset-0 h-full w-full overflow-hidden">
                {video.youtubeId ? (
                  <iframe
                    key={video.id}
                    className={`pointer-events-none absolute left-1/2 top-1/2 h-[56.25vw] min-h-full w-[177.78vh] min-w-full -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500 ${
                      transitioning ? "opacity-0" : "opacity-100"
                    }`}
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&loop=1&playlist=${video.youtubeId}&controls=0&modestbranding=1&rel=0&playsinline=1`}
                    title={video.title}
                    allow="autoplay; encrypted-media"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <p className="text-lg">
                      Video coming soon
                    </p>
                  </div>
                )}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Previous Button */}
              <div
                onClick={prevVideo}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-black/30 p-3 text-white transition-colors hover:bg-black/50"
                aria-label="Previous video"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    prevVideo()
                  }
                }}
              >
                <ChevronLeft className="h-8 w-8" />
              </div>

              {/* Next Button */}
              <div
                onClick={nextVideo}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 cursor-pointer rounded-full bg-black/30 p-3 text-white transition-colors hover:bg-black/50"
                aria-label="Next video"
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    nextVideo()
                  }
                }}
              >
                <ChevronRight className="h-8 w-8" />
              </div>

              {/* Video Information */}
              <div
                className={`relative z-10 flex h-full items-center justify-center px-6 text-center text-white transition-opacity duration-500 ${
                  transitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <div className="max-w-3xl">
                  <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
                    {video.title}
                  </h2>

                  {video.description && (
                    <p className="text-xl md:text-2xl">
                      {video.description}
                    </p>
                  )}
                </div>
              </div>

              {/* Video Indicators */}
              <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center space-x-2">
                {videoContent.map((videoItem, index) => (
                  <div
                    key={videoItem.id}
                    onClick={() => {
                      if (index !== currentVideo) {
                        goToVideo(index)
                      }
                    }}
                    className={`h-2 w-8 cursor-pointer rounded-full transition-all ${
                      currentVideo === index
                        ? "bg-white"
                        : "bg-white/40"
                    }`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (
                        (e.key === "Enter" || e.key === " ") &&
                        index !== currentVideo
                      ) {
                        goToVideo(index)
                      }
                    }}
                    aria-label={`Go to video ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}