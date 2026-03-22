"use client"

import { useState } from "react"
import { ChevronLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import type { ApplicationData } from "@/app/page"

interface QuestionnaireFormProps {
  onComplete: (data: Partial<ApplicationData>) => void
  onBack: () => void
}

type QuestionStep = 1 | 2 | 3 | 4 | 5 | 6

const helpOptions = [
  "Understanding how money and investing actually work",
  "Knowing how to start building my first investment portfolio",
  "Feeling more confident making financial decisions",
  "Organizing my finances and long-term financial plan",
  "Developing the financial knowledge needed for long-term independence",
]

const budgetOptions = [
  "I have/am willing to invest $1 – $500",
  "I have/am willing to invest $500 – $1,000",
  "I have/am willing to invest $1,000 – $2,000",
  "I have/am willing to invest $2,000 – $4,000",
  "I have/am willing to invest $4,000+",
]

export function QuestionnaireForm({
  onComplete,
  onBack,
}: QuestionnaireFormProps) {
  const [currentStep, setCurrentStep] = useState<QuestionStep>(1)

  const [answers, setAnswers] = useState({
    helpTopics: [] as string[],
    biggestChallenge: "",
    moneyGoal12Months: "",
    whyNow: "",
    budget: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })

  const totalSteps = 6
  const progress = (currentStep / totalSteps) * 100

  const toggleHelpTopic = (value: string) => {
    setAnswers((prev) => {
      const exists = prev.helpTopics.includes(value)
      return {
        ...prev,
        helpTopics: exists
          ? prev.helpTopics.filter((item) => item !== value)
          : [...prev.helpTopics, value],
      }
    })
  }

  const handleNext = () => {
    if (currentStep < 6) {
      setCurrentStep((prev) => (prev + 1) as QuestionStep)
    }
  }

  const handleBackStep = () => {
    if (currentStep === 1) {
      onBack()
    } else {
      setCurrentStep((prev) => (prev - 1) as QuestionStep)
    }
  }

  const handleSubmit = () => {
    onComplete({
      helpTopics: answers.helpTopics,
      biggestChallenge: answers.biggestChallenge,
      moneyGoal12Months: answers.moneyGoal12Months,
      whyNow: answers.whyNow,
      budget: answers.budget,
      firstName: answers.firstName,
      lastName: answers.lastName,
      email: answers.email,
      phone: answers.phone,
    })
  }

  const isNextDisabled = () => {
    switch (currentStep) {
      case 1:
        return answers.helpTopics.length === 0
      case 2:
        return !answers.biggestChallenge.trim()
      case 3:
        return !answers.moneyGoal12Months.trim()
      case 4:
        return !answers.whyNow.trim()
      case 5:
        return !answers.budget
      case 6:
        return (
          !answers.firstName.trim() ||
          !answers.lastName.trim() ||
          !answers.email.trim() ||
          !answers.phone.trim()
        )
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-[#F8F6F3]">
      <div className="py-6 text-center md:py-8">
        <h2 className="font-serif text-lg text-[#1F1F1F] md:text-2xl">
          Fill Out The Application Below &amp; Book A Call
        </h2>
      </div>

      <div className="mx-auto max-w-3xl px-4">
        <div className="overflow-hidden rounded-[24px] border border-[#EEE7E1] bg-white shadow-[0_8px_28px_rgba(31,31,31,0.05)]">
          <div className="h-1 bg-[#F1E7E8]">
            <div
              className="h-full bg-[#C96A74] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="p-5 md:p-7">
            <div className="mb-6">
              <p className="font-serif text-xl text-[#1F1F1F] md:text-2xl">
                HerFinance
              </p>
            </div>

            <div className="mb-4 flex h-6 w-6 items-center justify-center rounded bg-[#D88C95] text-xs text-white">
              {currentStep}
            </div>

            {/* Step 1 */}
            {currentStep === 1 && (
              <>
                <h3 className="mb-3 text-base font-medium text-[#1F1F1F] md:text-xl">
                  What would you like the most help with right now when it comes to understanding money?
                </h3>
                <p className="mb-5 text-sm text-[#6F6A66] md:text-base">
                  (Select all that apply)
                </p>

                <div className="space-y-3">
                  {helpOptions.map((option, index) => {
                    const selected = answers.helpTopics.includes(option)
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() => toggleHelpTopic(option)}
                        className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${
                          selected
                            ? "border-[#C96A74] bg-[#FFF7F8]"
                            : "border-[#E9E2DC] bg-white hover:border-[#D88C95]"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border text-xs ${
                            selected
                              ? "border-[#C96A74] bg-[#C96A74] text-white"
                              : "border-[#D8CFC8] text-[#6F6A66]"
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-sm leading-6 text-[#1F1F1F] md:text-base">
                          {option}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <>
                <h3 className="mb-3 text-base font-medium text-[#1F1F1F] md:text-xl">
                  What has been the biggest challenge for you when trying to learn about money or investing?
                </h3>
                <p className="mb-4 text-sm text-[#6F6A66] md:text-base">
                  Example answers: Too much conflicting information online / I don’t know where to start / Finance feels intimidating or complicated / I’ve learned pieces but never the full system
                </p>

                <textarea
                  rows={6}
                  value={answers.biggestChallenge}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      biggestChallenge: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-[#E9E2DC] bg-white px-4 py-3 text-sm text-[#1F1F1F] outline-none placeholder:text-[#9C948E] focus:border-[#C96A74] md:text-base"
                  placeholder="Type your answer here..."
                />
              </>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <>
                <h3 className="mb-3 text-base font-medium text-[#1F1F1F] md:text-xl">
                  If everything worked out over the next 12 months, how would you like your relationship with money to look?
                </h3>
                <p className="mb-4 text-sm text-[#6F6A66] md:text-base">
                  Please be specific. Example inspiration: Feeling confident about how money works / Having a clear system for managing and growing money / Feeling independent and in control of my financial future / Being able to make financial decisions without confusion / Build my first 10k or 100k portfolio
                </p>

                <textarea
                  rows={6}
                  value={answers.moneyGoal12Months}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      moneyGoal12Months: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-[#E9E2DC] bg-white px-4 py-3 text-sm text-[#1F1F1F] outline-none placeholder:text-[#9C948E] focus:border-[#C96A74] md:text-base"
                  placeholder="Describe what success would look like for you..."
                />
              </>
            )}

            {/* Step 4 */}
            {currentStep === 4 && (
              <>
                <h3 className="mb-3 text-base font-medium text-[#1F1F1F] md:text-xl">
                  Why is financial literacy important to you right now?
                </h3>

                <textarea
                  rows={6}
                  value={answers.whyNow}
                  onChange={(e) =>
                    setAnswers((prev) => ({
                      ...prev,
                      whyNow: e.target.value,
                    }))
                  }
                  className="w-full rounded-xl border border-[#E9E2DC] bg-white px-4 py-3 text-sm text-[#1F1F1F] outline-none placeholder:text-[#9C948E] focus:border-[#C96A74] md:text-base"
                  placeholder="Type your answer here..."
                />
              </>
            )}

            {/* Step 5 */}
            {currentStep === 5 && (
              <>
                <h3 className="mb-5 text-base font-medium text-[#1F1F1F] md:text-xl">
                  What is your budget to invest into fast-tracking your financial literacy and financial skill set right now?
                </h3>

                <div className="space-y-3">
                  {budgetOptions.map((option, index) => {
                    const selected = answers.budget === option
                    return (
                      <button
                        key={option}
                        type="button"
                        onClick={() =>
                          setAnswers((prev) => ({ ...prev, budget: option }))
                        }
                        className={`flex w-full items-start gap-3 rounded-xl border p-4 text-left transition ${
                          selected
                            ? "border-[#C96A74] bg-[#FFF7F8]"
                            : "border-[#E9E2DC] bg-white hover:border-[#D88C95]"
                        }`}
                      >
                        <span
                          className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs ${
                            selected
                              ? "border-[#C96A74] bg-[#C96A74] text-white"
                              : "border-[#D8CFC8] text-[#6F6A66]"
                          }`}
                        >
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="text-sm leading-6 text-[#1F1F1F] md:text-base">
                          {option}
                        </span>
                      </button>
                    )
                  })}
                </div>
              </>
            )}

            {/* Step 6 */}
            {currentStep === 6 && (
              <>
                <h3 className="mb-5 text-base font-medium text-[#1F1F1F] md:text-xl">
                  Enter your information below
                </h3>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#1F1F1F]">
                      First name*
                    </label>
                    <Input
                      placeholder="Jane"
                      value={answers.firstName}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          firstName: e.target.value,
                        }))
                      }
                      className="border-[#E9E2DC] bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#1F1F1F]">
                      Last name*
                    </label>
                    <Input
                      placeholder="Smith"
                      value={answers.lastName}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          lastName: e.target.value,
                        }))
                      }
                      className="border-[#E9E2DC] bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#1F1F1F]">
                      Email*
                    </label>
                    <Input
                      type="email"
                      placeholder="you@example.com"
                      value={answers.email}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="border-[#E9E2DC] bg-white"
                    />
                  </div>

                  <div>
                    <label className="mb-1 block text-sm font-medium text-[#1F1F1F]">
                      Phone number*
                    </label>
                    <Input
                      placeholder="(201) 555-0123"
                      value={answers.phone}
                      onChange={(e) =>
                        setAnswers((prev) => ({
                          ...prev,
                          phone: e.target.value,
                        }))
                      }
                      className="border-[#E9E2DC] bg-white"
                    />
                  </div>
                </div>
              </>
            )}

            <div className="mt-7 flex gap-3">
              <Button
                variant="outline"
                size="icon"
                onClick={handleBackStep}
                className="shrink-0 border-[#E9E2DC]"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                onClick={currentStep === 6 ? handleSubmit : handleNext}
                disabled={isNextDisabled()}
                className="flex-1 rounded-full bg-[#C96A74] text-white shadow-[0_8px_20px_rgba(201,106,116,0.25)] transition hover:scale-[1.01] hover:bg-[#B85A64]"
              >
                {currentStep === 6 ? "Book A Call in the Next Page" : "OK"}
              </Button>
            </div>

            <p className="mt-5 text-center text-xs text-[#8D8782]">
              Powered by HerFinance
            </p>
          </div>
        </div>
      </div>

      <div className="py-8 text-center">
        <p className="text-xs text-[#6F6A66] md:text-sm">
          Limited spots each month. Apply now &amp; book your strategy call
        </p>
      </div>
    </div>
  )
}