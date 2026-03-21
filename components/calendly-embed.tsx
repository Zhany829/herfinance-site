"use client"

import { InlineWidget, useCalendlyEventListener } from "react-calendly"

type ApplicationData = {
  firstName?: string
  lastName?: string
  email?: string
  phone?: string
}

type CalendlyEmbedProps = {
  applicationData: Partial<ApplicationData>
  onBack: () => void
  onScheduled: () => void
}

const CALENDLY_URL = "https://calendly.com/annie-herfinance/30mins"

export function CalendlyEmbed({
  applicationData,
  onBack,
  onScheduled,
}: CalendlyEmbedProps) {
  const fullName = [applicationData.firstName, applicationData.lastName]
    .filter(Boolean)
    .join(" ")

  useCalendlyEventListener({
    onEventScheduled: () => {
      onScheduled()
    },
  })

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 bg-[#F8F6F3]">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-3xl font-semibold text-[#1F1F1F]">
          Book Your Call
        </h2>
        <button
          onClick={onBack}
          className="rounded-full border border-[#E8B4B8] px-4 py-2 text-sm text-[#1F1F1F] hover:bg-[#FFF7F8]"
        >
          ← Back
        </button>
      </div>

      <div className="overflow-hidden rounded-[28px] border border-[#EEE7E1] bg-white p-3 shadow-[0_10px_40px_rgba(31,31,31,0.05)]">
        <InlineWidget
          url={CALENDLY_URL}
          styles={{ height: "780px" }}
          prefill={{
            name: fullName || undefined,
            email: applicationData.email || undefined,
          }}
          pageSettings={{
            hideEventTypeDetails: false,
            hideLandingPageDetails: false,
            primaryColor: "D88C95",
            textColor: "1F1F1F",
            backgroundColor: "FFF7F8",
          }}
        />
      </div>
    </section>
  )
}