import { Footer } from "@/components/footer"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#F8F6F3] text-[#1F1F1F] flex flex-col">
{/* Top Logo */}
<div className="text-center pt-12">
  <a href="/" className="text-3xl font-serif tracking-wide hover:opacity-80">
    HerFinance
  </a>
</div>
      <div className="mx-auto max-w-4xl px-6 py-20 flex-1">

        <h1 className="text-3xl md:text-4xl font-serif mb-8">
          Privacy Policy
        </h1>
<div className="h-px bg-gray-200 mb-8"></div>
        <p className="mb-6 text-sm text-gray-600">
          Effective Date: March 2026
        </p>

        <p className="mb-8 leading-7">
          HerFinance Academy ("Company", "we", "us", or "our") respects your
          privacy and is committed to protecting your information. This Privacy
          Policy explains what information we collect, how we use it, and the
          choices you have when using our website (the "Site") and services (the
          "Services").
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          1. Information We Collect
        </h2>

        <p className="leading-7 mb-4">
          We may collect the following types of information:
        </p>

        <p className="font-medium mb-2">a. Personal Information</p>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Payment information (if purchasing a program)</li>
          <li>Billing details</li>
          <li>Any other information you voluntarily provide</li>
        </ul>

        <p className="font-medium mb-2">b. Non-Personal Information</p>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>IP address</li>
          <li>Browser type and version</li>
          <li>Device information</li>
          <li>Usage behavior and analytics</li>
          <li>Cookies and tracking technologies</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          2. How We Collect Your Information
        </h2>

        <p className="leading-7 mb-6">
          We collect information in several ways, including directly from you
          when you submit forms, book a call, purchase a program, or contact us.
          We may also collect information automatically through cookies,
          analytics tools, and tracking technologies when you browse our Site.
        </p>

        <p className="leading-7 mb-6">
          In some cases, information may also come from third-party providers
          such as payment processors, scheduling tools, or analytics services.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          3. How We Use Your Information
        </h2>

        <p className="leading-7 mb-4">
          We may use the information we collect to:
        </p>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>Provide and improve our Services</li>
          <li>Process payments and send confirmations</li>
          <li>Provide customer support</li>
          <li>Communicate with you about programs or services</li>
          <li>Send educational or promotional emails (you can unsubscribe anytime)</li>
          <li>Improve website performance and user experience</li>
          <li>Prevent fraud and maintain security</li>
          <li>Comply with legal obligations</li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          4. Sharing Your Information
        </h2>

        <p className="leading-7 mb-6">
          We do not sell or rent your personal information. We may share your
          information with trusted service providers who help operate our
          business, such as payment processors, website hosting providers,
          analytics tools, or scheduling platforms.
        </p>

        <p className="leading-7 mb-6">
          We may also disclose information if required by law or in response to
          legal requests, or if necessary to protect our rights, users, or
          business operations.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          5. Data Security
        </h2>

        <p className="leading-7 mb-6">
          We take reasonable measures to protect your personal information.
          However, no internet transmission or electronic storage method is
          completely secure. By using our Services, you acknowledge that we
          cannot guarantee absolute security.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          6. Your Choices and Rights
        </h2>

        <ul className="list-disc ml-6 mb-6 space-y-1">
          <li>
            You may unsubscribe from marketing emails at any time using the
            unsubscribe link in our emails.
          </li>
          <li>
            You may request access, updates, or deletion of your personal data
            by contacting us.
          </li>
          <li>
            You can adjust your browser settings to control cookie preferences.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          7. Third-Party Links
        </h2>

        <p className="leading-7 mb-6">
          Our Site may include links to third-party websites such as scheduling
          tools, payment providers, or social media platforms. We are not
          responsible for the privacy practices of those third-party websites.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          8. Children's Privacy
        </h2>

        <p className="leading-7 mb-6">
          Our Services are not intended for individuals under the age of 18. We
          do not knowingly collect personal information from minors.
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          9. Changes to This Policy
        </h2>

        <p className="leading-7 mb-6">
          We may update this Privacy Policy from time to time. Any updates will
          be posted on this page with an updated "Effective Date".
        </p>

        <h2 className="text-xl font-semibold mt-10 mb-4">
          10. Contact Information
        </h2>

        <p className="leading-7">
          If you have any questions regarding this Privacy Policy, please
          contact us at:
        </p>

        <p className="mt-2 font-medium">
          Email: herfinanceacademyofficial@gmail.com
        </p>

      </div>

      <Footer />

    </main>
  )
}