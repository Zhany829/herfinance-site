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
         <div className="mb-5 md:mb-7">
  <div className="inline-flex flex-col items-center">
    <p className="font-serif text-[2.1rem] leading-none tracking-[-0.04em] text-[#1F1F1F] md:text-[4.6rem]">
      Her<span className="italic text-[#C9A24E]">Finance</span>
    </p>
    <div className="mt-2 h-[2px] w-20 rounded-full bg-[#D8B36A]/70 md:mt-3 md:w-28" />
  </div>
</div>

<h1 className="mx-auto max-w-3xl font-serif text-[1.35rem] leading-[1.25] md:max-w-4xl md:text-4xl md:leading-[1.18]">
<span className="block whitespace-nowrap">
  Learn How To Build Your First{" "}
  <span className="text-[#C9A24E]">$10K–$100K</span> Investment Portfolio
</span>

  <span className="mt-2 block md:mt-3">
    Using Proven Wall Street Research Frameworks
  </span>
</h1>

<p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#6F6A66] md:mt-5 md:max-w-3xl md:text-lg md:leading-8">            Even if you currently feel confused about financial literacy, don’t come from a finance background, and have no clear system yet.
          </p>

<p className="mx-auto mt-2 max-w-2xl text-sm leading-6 text-[#6F6A66] md:mt-3 md:max-w-3xl md:text-lg md:leading-8">            Made for ambitious women who want to stop guessing with money and start building real financial confidence inside a supportive community of women learning together.
          </p>
        </div>

        {/* Video */}
<div className="mx-auto mt-6 max-w-4xl rounded-[20px] border border-[#EEE7E1] bg-white p-2 shadow-[0_8px_28px_rgba(31,31,31,0.05)] md:mt-8 md:rounded-[24px] md:p-3">          <div className="relative aspect-video overflow-hidden rounded-[14px] bg-[#EFE7E0] md:rounded-[18px]">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop"
              alt="HerFinance training video"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/5" />
<button className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#E8B4B8]/90 text-white shadow-lg transition hover:scale-105 md:h-24 md:w-24">
  <Play className="ml-0.5 h-6 w-6 fill-current md:ml-1 md:h-10 md:w-10" />
</button>
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

<p className="mx-auto mt-3 max-w-fit whitespace-nowrap text-[11px] leading-4 text-[#6F6A66] md:text-sm md:leading-5">            Limited spots each month. Apply now &amp; book your strategy call
          </p>
        </div>
        
      </div>
    </section>
  )
}