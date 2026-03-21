"use client"

import { useState } from "react"
import { HeroSection } from "@/components/hero-section"
import { QuestionnaireForm } from "@/components/questionnaire-form"
import { CalendlyEmbed } from "@/components/calendly-embed"
import { PostScheduleContent } from "@/components/post-schedule-content"
import { ProgramFitSection } from "@/components/program-fit-section"
import { ProblemSection } from "@/components/problem-section"
import { Footer } from "@/components/footer"

export type ApplicationData = {
  helpTopics: string[]
  biggestChallenge: string
  moneyGoal12Months: string
  whyNow: string
  budget: string
  firstName: string
  lastName: string
  email: string
  phone: string
}

export type AppStep = "home" | "questionnaire" | "calendar" | "confirmed"

export default function Home() {
  const [step, setStep] = useState<AppStep>("home")
  const [applicationData, setApplicationData] = useState<Partial<ApplicationData>>({})

  const handleApplyClick = () => {
    setStep("questionnaire")
  }

const handleQuestionnaireComplete = async (data: any) => {

  const message = `
<b>New HerFinance Application</b>

<b>Name:</b> ${data.firstName} ${data.lastName}
<b>Email:</b> ${data.email}
<b>Phone:</b> ${data.phone}

--------------------------------

<b>What would you like the most help with right now when it comes to understanding money?</b>
${Array.isArray(data.helpTopics) ? data.helpTopics.join("<br>") : data.helpTopics}

<b>What has been the biggest challenge for you when trying to learn about money or investing?</b>
${data.biggestChallenge}

<b>If everything worked out over the next 12 months, how would you like your relationship with money to look?</b>
${data.moneyGoal12Months}

<b>Why is financial literacy important to you right now?</b>
${data.whyNow}

<b>What is your budget to INVEST into fast-tracking your financial literacy and financial skill set right now?</b>
${data.budget}


`

  const formData = new FormData()

  formData.append("access_key", "5cfcbff3-df0d-41f7-aec8-8cf588f1eaff")
formData.append(
  "subject",
  `New HerFinance Application - ${data.firstName} ${data.lastName}`
)
  formData.append("from_name", "HerFinance Website")
  formData.append("message", message)

  try {
    // await fetch("https://api.web3forms.com/submit", {
    //   method: "POST",
    //   body: formData
    // })
  } catch (error) {
    console.error("Email send failed:", error)
  }

  setApplicationData(data)
  setStep("calendar")
}

  return (
    <main className="min-h-screen bg-[#F8F6F3]">
      {step === "home" && (
  <>
    <HeroSection onApplyClick={handleApplyClick} />
    <ProgramFitSection />
    <ProblemSection onApplyClick={handleApplyClick} />
  </>
)}

      {step === "questionnaire" && (
        <QuestionnaireForm
          onComplete={handleQuestionnaireComplete}
          onBack={() => setStep("home")}
        />
      )}

      {step === "calendar" && (
        <CalendlyEmbed
          applicationData={applicationData}
          onBack={() => setStep("questionnaire")}
          onScheduled={() => setStep("confirmed")}
        />
      )}

      {step === "confirmed" && <PostScheduleContent />}
          <Footer />
    </main>

  )
}