"use client"

const forYouItems = [
  "want to finally equip yourself with the financial literacy and investing skills",
  "are tired of feeling confused when people talk about stocks, investing, or financial decisions",
  "want to learn the real skill set behind evaluating investments instead of relying on random tips online",
  "want to build the ability to research, analyze, and understand financial opportunities independently",
  "want to grow inside a community of ambitious women who are serious about becoming financially capable and independent",
]

const notForYouItems = [
  "You’re looking for a shortcut or “get rich quick” investment scheme",
  "You expect someone to simply tell you what to buy instead of learning how to think for yourself",
  "You’re not willing to put in the effort to build real financial knowledge and skills",
  "You don’t want to be part of a supportive community of women learning and growing together",
  "You’re not ready to take ownership of your financial future.",
]

function CheckList({
  items,
  icon,
  iconBgClass,
}: {
  items: string[]
  icon: string
  iconBgClass: string
}) {
  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <div
          key={index}
className="flex gap-3 border-b border-[#E9D9DC] py-3 md:gap-5 md:py-5"        >
          <div
className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] text-white md:h-6 md:w-6 md:text-xs ${iconBgClass}`}          >
            {icon}
          </div>
<p className="text-xs leading-5 text-[#1F1F1F] md:text-lg md:leading-7">
                {item}
          </p>
        </div>
      ))}
    </div>
  )
}

export function ProgramFitSection() {
  return (
    <section className="bg-white py-10 md:py-16">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
<div className="mt-5 rounded-[18px] border border-[#EEE7E1] bg-white px-4 py-4 shadow-[0_5px_16px_rgba(31,31,31,0.04)] max-w-2xl mx-auto md:mt-6 md:rounded-[22px] md:px-6 md:py-5">          <h2 className="font-serif text-xl text-[#1F1F1F] md:text-3xl">
            This Program Is For You If You…
          </h2>

          <div className="mt-6">
            <CheckList
  items={forYouItems}
  icon="✓"
  iconBgClass="bg-[#D88C95]"
/>
          </div>
        </div>

<div className="mt-5 rounded-[18px] border border-[#EEE7E1] bg-white px-4 py-4 shadow-[0_5px_16px_rgba(31,31,31,0.04)] max-w-2xl mx-auto md:mt-6 md:rounded-[22px] md:px-6 md:py-5">          <h2 className="font-serif text-xl text-[#1F1F1F] md:text-3xl">
            This Program Is NOT For You If…
          </h2>

          <div className="mt-6">
            <CheckList
  items={notForYouItems}
  icon="✕"
  iconBgClass="bg-[#C97A84]"
/>
          </div>
        </div>
      </div>
    </section>
  )
}