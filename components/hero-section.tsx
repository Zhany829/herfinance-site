"use client"

import { Play } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  onApplyClick: () => void
}

export function HeroSection({ onApplyClick }: HeroSectionProps) {
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
            <h1 className="hidden 2xl:block mx-auto max-w-[1700px] font-serif text-[2.65rem] leading-[1.12] tracking-[-0.01em] text-[#1F1F1F]">
              Learn How To Build Your First{" "}
              <span className="whitespace-nowrap text-[#C9A24E]">$10K–$100K</span>{" "}
              Investment Portfolio Using Proven Wall Street Research Frameworks
            </h1>

            {/* 普通桌面 / 非全屏 / 手机：双行版本 */}
            <h1 className="2xl:hidden mx-auto max-w-[1400px] font-serif text-[1.2rem] leading-[1.2] tracking-[-0.01em] text-[#1F1F1F] md:text-[2.2rem] md:leading-[1.16] xl:text-[2.45rem]">
              <span className="block">
                Learn How To Build Your First{" "}
                <span className="whitespace-nowrap text-[#C9A24E]">$10K–$100K</span>{" "}
                Investment Portfolio
              </span>
              <span className="mt-2 block md:mt-3">
                Using Proven Wall Street Research Frameworks
              </span>
            </h1>
          </div>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6F6A66] md:mt-5 md:max-w-3xl md:text-lg md:leading-8">
            Even if you feel confused about money and don’t know where to start.
          </p>

<p className="mx-auto mt-2 max-w-full whitespace-nowrap text-sm leading-6 text-[#6F6A66] md:mt-3 md:text-lg md:leading-8">
  This is for women who are ready to build real financial confidence and take control of their future.
</p>
        </div>

        {/* Video */}

<div className="mx-auto mt-6 max-w-4xl rounded-[20px] border border-[#EEE7E1] bg-white p-2 shadow-[0_8px_28px_rgba(31,31,31,0.05)] md:mt-8 md:rounded-[24px] md:p-3">
  <div className="relative aspect-video overflow-hidden rounded-[14px] md:rounded-[18px]">
    <iframe
  src="https://www.youtube.com/embed/J5O4k1ERSAk?rel=0&modestbranding=1&vq=hd720"
  title="HerFinance Video"
  className="h-full w-full"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
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