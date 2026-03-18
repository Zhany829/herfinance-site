export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/30 px-4 py-10 text-center text-xs text-muted-foreground md:text-sm">
      <p className="mb-4 font-serif text-lg text-foreground md:text-xl">
        HerFinance
      </p>

      <p className="mx-auto max-w-3xl text-[11px] leading-5 md:text-xs md:leading-6">
        HerFinance Academy provides financial education for informational purposes only.
        Nothing on this website should be considered financial or investment advice.
        Results may vary based on individual effort and circumstances.
      </p>

      <p className="mt-4 text-[11px] md:text-xs">
        Not endorsed by Google or Meta.
      </p>

      <div className="mt-4 flex flex-wrap justify-center gap-x-4 gap-y-2 text-[11px] md:text-xs">
        <a href="/terms" className="hover:text-[#1F1F1F]">
          Terms &amp; Conditions
        </a>
        <a href="/privacy" className="hover:text-[#1F1F1F]">
          Privacy Policy
        </a>
        <a href="/disclaimer" className="hover:text-[#1F1F1F]">
          Earnings Disclaimer
        </a>
      </div>
    </footer>
  )
}