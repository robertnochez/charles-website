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
  const [currentVideo, setCurrentVideo] = useState(0)
  const [transitioning, setTransitioning] = useState(false)

  const goToVideo = useCallback(
    (index: number) => {
      if (transitioning || index === currentVideo) return

      setTransitioning(true)

      setTimeout(() => {
        setCurrentVideo(index)

        setTimeout(() => {
          setTransitioning(false)
        }, 100)
      }, 300)
    },
    [transitioning, currentVideo],
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

  // Allow keyboard arrow navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        prevVideo()
      }

      if (event.key === "ArrowRight") {
        nextVideo()
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [prevVideo, nextVideo])

  const video = videoContent[currentVideo]

  return (
    <>
      <Navbar />

      <main className="pt-20">
        <div className="mx-auto max-w-[1400px] px-6">
          <section className="py-16 md:py-24">

            {/* Page Title */}
            <h1 className="mb-16 font-serif text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Videography
            </h1>

            {/* Video Title */}
            <div
              className={`mb-8 text-center transition-opacity duration-300 ${
                transitioning ? "opacity-0" : "opacity-100"
              }`}
            >
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                {video.title}
              </h2>

              {video.description && (
                <p className="mt-4 text-lg text-muted-foreground md:text-xl">
                  {video.description}
                </p>
              )}
            </div>

            {/* Video Player */}
            <div className="relative w-full overflow-hidden bg-black">
              <div
                className={`relative aspect-video w-full transition-opacity duration-500 ${
                  transitioning ? "opacity-0" : "opacity-100"
                }`}
              >
                <iframe
                  key={video.id}
                  className="absolute inset-0 h-full w-full"
                  src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
                  title={video.title}
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Previous Button */}
              <button
                onClick={prevVideo}
                className="absolute left-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition-colors hover:bg-black/70"
                aria-label="Previous video"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextVideo}
                className="absolute right-4 top-1/2 z-20 -translate-y-1/2 rounded-full bg-black/40 p-3 text-white transition-colors hover:bg-black/70"
                aria-label="Next video"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Video Indicators */}
              <div className="absolute bottom-5 left-0 right-0 z-20 flex justify-center gap-2">
                {videoContent.map((videoItem, index) => (
                  <button
                    key={videoItem.id}
                    onClick={() => goToVideo(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentVideo === index
                        ? "w-8 bg-white"
                        : "w-6 bg-white/40 hover:bg-white/70"
                    }`}
                    aria-label={`Go to video ${index + 1}: ${videoItem.title}`}
                    aria-current={
                      currentVideo === index ? "true" : undefined
                    }
                  />
                ))}
              </div>
            </div>

            {/* Video Counter */}
            <div className="mt-6 flex items-center justify-between text-sm text-muted-foreground">
              <span>
                {String(currentVideo + 1).padStart(2, "0")}
              </span>

              <span>
                {String(videoContent.length).padStart(2, "0")}
              </span>
            </div>

          </section>

          <Footer />
        </div>
      </main>
    </>
  )
}