"use client"

import { useState } from "react"
import { Play } from "lucide-react"

export function HeroVideo() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="mx-auto mt-8 max-w-[360px] md:max-w-[420px]">
      <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] shadow-[0_12px_40px_rgba(0,0,0,0.12)]">

        {!isPlaying && (
          <>
            {/* 封面图（换成你自己的） */}
            <img
              src="/video-thumbnail.jpg"
              alt="Video cover"
              className="absolute inset-0 h-full w-full object-cover"
            />

            {/* 渐变遮罩（更高级） */}
            <div className="absolute inset-0 bg-black/20" />

            {/* Play按钮 */}
            <button
              onClick={() => setIsPlaying(true)}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 shadow-lg transition hover:scale-105">
                <Play className="ml-1 h-8 w-8 text-black" />
              </div>
            </button>
          </>
        )}

        {isPlaying && (
          <iframe
            src="https://www.youtube.com/embed/J5O4k1ERSAk?autoplay=1&mute=1&rel=0&modestbranding=1"
            className="h-full w-full"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>
    </div>
  )
}