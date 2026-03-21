"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect } from "react"
interface HeroSectionProps {
  onApplyClick: () => void
}
declare global {
  interface Window {
    Vimeo?: {
      Player: new (element: HTMLElement | null) => {
        setPlaybackRate: (rate: number) => Promise<void>
      }
    }
  }
}
export function HeroSection({ onApplyClick }: HeroSectionProps) {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://player.vimeo.com/api/player.js"]'
    ) as HTMLScriptElement | null

    const initPlayer = () => {
      const iframe = document.getElementById("vimeo-player")
      if (iframe && window.Vimeo) {
        const player = new window.Vimeo.Player(iframe)
        player.setPlaybackRate(1.25).catch(() => {
          console.log("Vimeo playback rate could not be changed.")
        })
      }
    }

    if (existingScript) {
      if (window.Vimeo) {
        initPlayer()
      } else {
        existingScript.addEventListener("load", initPlayer, { once: true })
      }
      return
    }

    const script = document.createElement("script")
    script.src = "https://player.vimeo.com/api/player.js"
    script.async = true
    script.onload = initPlayer
    document.body.appendChild(script)

    return () => {
      script.onload = null
    }
  }, [])
  return (
    <section className="bg-background text-foreground">
      {/* Top Banner */}
      <div className="border-b border-[#E3D2D5] bg-[#F1D6DA]">
        <div className="mx-auto max-w-6xl px-4 py-2 text-center md:px-6 md:py-3">
          <p className="text-sm font-medium tracking-wide text-[#1F1F1F] md:text-base">
            2026 Is Your Year To Build Your Financial Freedom
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-4 pb-12 pt-8 md:px-6 md:pb-16 md:pt-10">
        <div className="text-center">
          {/* Logo */}
          <div className="mb-5 md:mb-7">
            <div className="inline-flex flex-col items-center">
              <p className="font-serif text-[2.1rem] leading-none tracking-[-0.04em] text-[#1F1F1F] md:text-[4.6rem]">
                Her<span className="italic text-[#C9A24E]">Finance</span>
              </p>
              <div className="mt-2 h-[2px] w-20 rounded-full bg-[#D8B36A]/70 md:mt-3 md:w-28" />
            </div>
          </div>

          {/* Headline */}
         <div className="mt-6 md:mt-8">

  {/* 超宽屏：单行版本 */}
  <h1 className="hidden 2xl:block mx-auto max-w-[1700px] font-serif tracking-[-0.01em] text-[#1F1F1F]">

    {/* ① 主部分（放大1.6倍） */}
    <span className="font-semibold text-[3.2rem] leading-[1.08]">
      Learn How To Build Your First{" "}
      <span className="text-[#C9A24E] whitespace-nowrap">$10K–$100K</span>{" "}
      Investment Portfolio
    </span>

    {/* ② 副部分（保持对比） */}
    <span className="block mt-4 text-[2.9rem] text-[#2A2A2A]">
  Using Proven Wall Street Research Frameworks
</span>

  </h1>

  {/* 普通桌面 / 非全屏 / 手机：双行版本 */}
  <h1 className="2xl:hidden mx-auto max-w-[1400px] font-serif tracking-[-0.01em] text-[#1F1F1F]">

    {/* ① 主标题 */}
    <span className="block font-semibold text-[2.0rem] leading-[1.25] md:text-[2.4rem] md:leading-[1.18] xl:text-[2.7rem]">
      Learn How To Build Your First{" "}
      <span className="text-[#C9A24E] md:whitespace-nowrap">$10K–$100K</span>{" "}
      Investment Portfolio
    </span>

    {/* ② 副标题 */}
    <span className="block mt-3 md:mt-4 text-[1.5rem] leading-[1.3] md:text-[1.6rem] xl:text-[1.8rem] text-[#2A2A2A]">
      Using Proven Wall Street Research Frameworks
    </span>

  </h1>

</div>

<p className="mx-auto mt-4 max-w-2xl text-sm leading-[1.2] text-[#6F6A66] md:mt-5 md:max-w-3xl md:text-lg md:leading-8 md:whitespace-nowrap">
  Even if you feel confused about money and{" "}
  <br className="block md:hidden" />
  don’t know where to start.
</p>

<p className="mx-auto mt-2 max-w-2xl text-sm leading-[1.2] text-[#6F6A66] md:mt-3 md:max-w-3xl md:text-lg md:leading-8 md:whitespace-nowrap">
  This is for women who are ready to build
  <br className="block md:hidden" />
  real financial confidence and take control of their future.
</p>
        </div>

        {/* Video */}
<div className="mx-auto mt-6 max-w-4xl rounded-[20px] border border-[#EEE7E1] bg-white p-2 shadow-[0_8px_28px_rgba(31,31,31,0.05)] md:mt-8 md:rounded-[24px] md:p-3">
          <div className="relative aspect-video overflow-hidden rounded-[14px] md:rounded-[18px]">
            <iframe
              id="vimeo-player"
              src="https://player.vimeo.com/video/1175680425?title=0&byline=0&portrait=0"
              className="absolute left-0 top-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="HerFinance Intro"
            />
          </div>
        </div>

        {/* CTA under video */}
        <div className="mt-7 text-center">
          <Button
            onClick={onApplyClick}
            className="rounded-full bg-[#C96A74] px-12 py-5 text-base font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(201,106,116,0.35)] transition hover:scale-[1.03] hover:bg-[#B85A64] md:px-24 md:py-8 md:text-xl"
          >
            APPLY NOW →
          </Button>

          <p className="mx-auto mt-3 max-w-fit whitespace-nowrap text-[11px] leading-4 text-[#6F6A66] md:text-sm md:leading-5">
            Limited spots each month. Apply now &amp; book your strategy call
          </p>
        </div>
      </div>
    </section>
  )
}