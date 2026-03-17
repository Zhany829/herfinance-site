import { Footer } from "@/components/footer"

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F] flex flex-col">
      {/* Top Brand */}
      <div className="text-center pt-14">
        <a
          href="/"
          className="font-serif text-4xl tracking-wide hover:opacity-80"
        >
          HerFinance
        </a>
      </div>

      <div className="mx-auto max-w-3xl px-6 py-16 flex-1">
        <h1 className="text-3xl md:text-4xl font-serif mb-4">
          Earnings Disclaimer
        </h1>

        <p className="mb-4 text-sm text-gray-600">
          Effective Date: March 2026
        </p>

        <p className="mb-8 text-sm text-gray-600">
          Last Updated: March 2026
        </p>

        <div className="h-px bg-gray-200 mb-8"></div>

        <p className="leading-7 mb-6">
          HerFinance Academy provides educational content, training, and
          resources related to financial literacy, investing, and long-term
          wealth building. By using this website, enrolling in our programs, or
          consuming any of our content, you acknowledge and agree to the terms
          of this Earnings Disclaimer.
        </p>

        <h2 className="text-lg font-semibold mt-10 mb-3">
          No Guaranteed Results
        </h2>

        <p className="leading-7 mb-6">
          We do not guarantee any specific financial results, investment
          outcomes, income levels, portfolio growth, or wealth-building
          milestones from using our website, materials, educational programs, or
          services.
        </p>

        <p className="leading-7 mb-6">
          Any financial progress or results you may experience depend on many
          factors, including your background, financial situation, consistency,
          effort, decision-making, market conditions, and circumstances outside
          our control.
        </p>

        <h2 className="text-lg font-semibold mt-10 mb-3">
          Educational Purposes Only
        </h2>

        <p className="leading-7 mb-6">
          All content provided by HerFinance Academy is for educational and
          informational purposes only.
        </p>

        <p className="leading-7 mb-6">
          Nothing on this website, in our training, or in our programs should be
          interpreted as financial advice, investment advice, legal advice, tax
          advice, or a recommendation to buy, sell, or hold any asset,
          investment, or financial product.
        </p>

        <h2 className="text-lg font-semibold mt-10 mb-3">
          No Professional Advisory Relationship
        </h2>

        <p className="leading-7 mb-6">
          Your use of our website, content, or services does not create any
          advisor-client, fiduciary, legal, or professional relationship between
          you and HerFinance Academy.
        </p>

        <p className="leading-7 mb-6">
          You are solely responsible for your own financial decisions, actions,
          and results.
        </p>

        <h2 className="text-lg font-semibold mt-10 mb-3">
          Testimonials and Examples
        </h2>

        <p className="leading-7 mb-6">
          Any testimonials, examples, student stories, illustrations, or case
          studies shared on this website or in our materials are provided for
          illustrative purposes only.
        </p>

        <p className="leading-7 mb-6">
          They are not guarantees, representations, or promises that you will
          achieve the same or similar outcomes.
        </p>

        <h2 className="text-lg font-semibold mt-10 mb-3">
          Personal Responsibility
        </h2>

        <p className="leading-7 mb-6">
          You accept full responsibility for evaluating the information provided
          and for any decisions you make based on that information.
        </p>

        <p className="leading-7 mb-6">
          Before making any financial, investment, tax, or legal decision, you
          should consult with appropriately licensed professionals who can advise
          you based on your personal circumstances.
        </p>

        <h2 className="text-lg font-semibold mt-10 mb-3">
          Market and Investment Risk
        </h2>

        <p className="leading-7 mb-6">
          All investing and financial decisions involve risk. Markets fluctuate,
          and losses are possible. Past performance is not indicative of future
          results.
        </p>

        <p className="leading-7 mb-6">
          HerFinance Academy is not responsible for any losses, damages, or
          negative outcomes that may result from your reliance on educational
          content or materials provided through our website or programs.
        </p>

        <h2 className="text-lg font-semibold mt-10 mb-3">
          Contact
        </h2>

        <p className="leading-7">
          If you have questions regarding this Earnings Disclaimer, please
          contact:
        </p>

        <p className="mt-2 font-medium">
          Email: herfinanceacademyofficial@gmail.com
        </p>
      </div>

      <Footer />
    </main>
  )
}