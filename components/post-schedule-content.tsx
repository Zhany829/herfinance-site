"use client"

import { Button } from "@/components/ui/button"

export function PostScheduleContent() {
  return (
    <section className="bg-background px-4 py-10 text-[#1F1F1F] md:px-6 md:py-14">
      <div className="mx-auto max-w-4xl px-4">
        <div className="text-center">
          <h1 className="font-serif text-4xl leading-tight md:text-6xl">
            Follow The Steps Below To
          </h1>
          <p className="mt-3 font-serif text-3xl italic text-[#D88C95] md:text-5xl">
            Confirm Your Call
          </p>
        </div>

        <div className="mt-10 space-y-8">
          {/* Step 1 */}
          <div className="overflow-hidden rounded-[30px] border border-[#EEE7E1] bg-white shadow-[0_6px_24px_rgba(31,31,31,0.03)]">
            <div className="bg-[#E8B4B8] px-6 py-4 text-center text-lg font-semibold text-[#1F1F1F] md:text-2xl">
              Step 1: Watch this video below to make sure we don’t cancel your call
            </div>
            <div className="p-4 md:p-6">
  <div className="rounded-[22px] bg-gradient-to-br from-[#EEF2F1] via-[#F4E7E4] to-[#F6EFE6] px-4 py-8 md:px-6 md:py-10">
    <div className="mx-auto max-w-[360px] overflow-hidden rounded-[22px] bg-black shadow-[0_12px_40px_rgba(31,31,31,0.12)]">
     <video
  className="w-full h-auto"
  controls
  playsInline
  preload="metadata"
>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  </div>
</div>
          </div>

          {/* Step 2 */}
          <div className="overflow-hidden rounded-[30px] border border-[#EEE7E1] bg-[#FFF7F8] shadow-[0_6px_24px_rgba(31,31,31,0.03)]">
            <div className="bg-[#E8B4B8] px-6 py-4 text-center text-lg font-semibold text-[#1F1F1F] md:text-2xl">
              Step 2: In your email, confirm the calendar invite from our team
            </div>
<div className="p-4 md:p-6">
  <div className="overflow-hidden rounded-[22px] border border-[#F0E6E1] bg-white">
    <img
      src="/step2.png"
      alt="Email confirmation screenshot"
      className="w-full h-auto"
    />
  </div>
  <p className="mt-4 text-center text-base italic text-[#6F6A66] md:text-lg">
    *If your appointment isn’t confirmed, it will be cancelled
  </p>
</div>
          </div>

          {/* Step 3 */}
          {/* <div className="overflow-hidden rounded-[30px] border border-[#EEE7E1] bg-white shadow-[0_10px_40px_rgba(31,31,31,0.04)]">
            <div className="bg-[#E8B4B8] px-6 py-4 text-center text-lg font-semibold text-[#1F1F1F] md:text-2xl">
              Step 3: Watch this short video below to get a sneak peek into the HerFinance Program!
            </div>
            <div className="p-4 md:p-6">
              <div className="aspect-video rounded-[22px] bg-[#F3EEEA] flex items-center justify-center">
                <span className="text-[#6F6A66]">Video 2 Placeholder</span>
              </div>
            </div>
          </div> */}

       {/* Founder Section */}
<div className="overflow-hidden rounded-[32px] border border-[#E9DDD5] bg-[#F5EADB] px-5 py-12 md:px-10 md:py-16">
{/* Images */}
<div className="relative mx-auto mb-12 h-[220px] w-full max-w-[320px] md:mb-16 md:h-[420px] md:max-w-[560px]">

  {/* 左图 */}
  <img
    src="/judy-photo-1.jpg"
    alt="Judy photo 1"
    className="
      absolute
      left-2
      top-20
      w-[130px] md:w-[260px]   /* ✅ 手机缩小约 2/5 */
      rotate-[-8deg]
      rounded-[12px]
      shadow-[0_10px_24px_rgba(31,31,31,0.12)]
      z-10
      transition-all duration-300
      hover:-translate-y-2 hover:rotate-[-5deg] hover:scale-[1.03]
    "
  />

  {/* 右图 */}
  <img
    src="/judy-photo-2.jpg"
    alt="Judy photo 2"
    className="
      absolute
      right-4
      top-6
      w-[150px] md:w-[300px]   /* ✅ 手机缩小 */
      rotate-[4deg]
      rounded-[14px]
      shadow-[0_14px_32px_rgba(31,31,31,0.16)]
      z-20
      transition-all duration-300
      hover:-translate-y-3 hover:rotate-[2deg] hover:scale-[1.03]
    "
  />

</div>

  {/* Title */}
<div className="mx-auto max-w-[760px] text-center">
  <h2 className="font-serif text-[44px] leading-[1] tracking-[-0.02em] text-[#171717] md:text-[68px]">
    <span className="block">I’m Judy</span>
    <span className="block">I built this for YOU</span>
  </h2>
</div>

  {/* Text */}
  <div className="mx-auto mt-8 max-w-[680px] space-y-6 text-left text-[18px] italic leading-[1.45] text-[#1F1F1F] md:mt-10 md:text-[22px]">
    <p>
      Whether you found me through my finance content, investing education, or my vision for helping women feel truly confident with money, life, and relationships — I’m so glad you’re here.
    </p>

    <p>
      I created HerFinance Academy to make finance feel clear,
      structured, feminine, and actually actionable.
    </p>

    <p>
      This isn’t another overwhelming finance course that makes you
      feel behind. It’s a framework to help you understand how money
      works and start building long-term confidence.
    </p>

    <p>
      If you’re ready to stop feeling confused and start feeling in
      control, you’re in the right place.
    </p>
  </div>
</div>

{/* Results Section */}
<div className="pt-6 text-center">
  <h2 className="font-serif text-[36px] leading-tight md:text-[52px]">
    What My Founding Members Experience After Just 1 Week💫
  </h2>
  {/* <p className="mt-3 text-[#6F6A66] italic md:text-lg">
    inside the HerFinance community
  </p> */}
</div>

<div className="mt-8 grid gap-6 md:grid-cols-2">
  {/* Result 1 */}
  <div className="group overflow-hidden rounded-[28px] border border-[#EEE7E1] bg-white shadow-[0_10px_40px_rgba(31,31,31,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(31,31,31,0.08)]">
    <div className="overflow-hidden">
      <img
        src="/result1.jpg"
        alt="Result 1"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    </div>
  </div>

  {/* Result 2 */}
  <div className="group overflow-hidden rounded-[28px] border border-[#EEE7E1] bg-[#FFF7F8] shadow-[0_10px_40px_rgba(31,31,31,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_18px_60px_rgba(31,31,31,0.08)]">
    <div className="overflow-hidden">
      <img
        src="/result2.jpg"
        alt="Result 2"
        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
      />
    </div>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}