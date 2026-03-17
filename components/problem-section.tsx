"use client"

import { Button } from "@/components/ui/button"

interface ProblemSectionProps {
  onApplyClick: () => void
}

export function ProblemSection({ onApplyClick }: ProblemSectionProps) {
  return (
    <section className="bg-[#FFF7F8] py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
<div className="rounded-[18px] bg-white px-4 py-4 shadow-[0_5px_16px_rgba(31,31,31,0.04)] max-w-2xl mx-auto md:rounded-[22px] md:px-6 md:py-5">          <h2 className="font-serif text-xl leading-tight text-[#1F1F1F] md:text-3xl">
            Here’s the truth.
          </h2>

         <div className="mt-4 space-y-4 text-xs leading-5 text-[#1F1F1F] md:mt-5 md:text-lg md:leading-7">
            <p>
              Most women trying to figure out finance and investing right now are doing it completely backwards.
            </p>

            <p>They’re saving random TikToks about stocks.</p>
            <p>Watching scattered YouTube videos.</p>
            <p>
              Buying cheap courses that explain concepts but never actually show them how to apply anything in real life.
            </p>

            <p>So they stay stuck in the same place.</p>

            <div className="pt-2">
              <p className="font-medium">Feeling like:</p>
              <p className="mt-2 italic text-[#6F6A66]">“I should understand this by now.”</p>
            </div>

            <div className="pt-2">
              <p className="font-medium">But still feeling:</p>
              <ul className="mt-3 space-y-2 text-[#6F6A66]">
                <li>Confused</li>
                <li>Overwhelmed</li>
                <li>Unsure where to start</li>
                <li>And hesitant to make decisions with their money.</li>
              </ul>
            </div>

            <p>
              Meanwhile they watch other people talk about investing, building wealth, and “making their money work for them”… while they’re still trying to piece together what any of it actually means.
            </p>

            <p>
              And eventually many women start to believe:
            </p>

            <p className="italic text-[#6F6A66]">“Maybe finance just isn’t my thing.”</p>

            <p>But that’s not the problem.</p>

            <p>
              The real problem is that no one ever teaches you the system.
            </p>

            <div className="space-y-2 pt-2 font-medium">
              <p>Not tips.</p>
              <p>Not hype.</p>
              <p>Not random advice.</p>
            </div>

            <p>
              A system that helps you understand money, evaluate opportunities, and make confident decisions long-term.
            </p>

            <p>
              Once you learn that system, everything changes.
            </p>

            <p className="font-medium text-[#D88C95]">
              It&apos;s time to change your life for the better.
            </p>
          </div>

          <div className="mt-10 text-center">
<Button
  onClick={onApplyClick}
  className="rounded-full bg-[#C96A74] px-12 py-5 text-base font-semibold tracking-wide text-white shadow-[0_8px_20px_rgba(201,106,116,0.35)] transition hover:scale-[1.03] hover:bg-[#B85A64] md:px-24 md:py-8 md:text-xl"
>
  APPLY NOW →
</Button>
          </div>
        </div>
      </div>
    </section>
  )
}