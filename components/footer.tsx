export function Footer() {
  return (
<footer className="border-t border-border/30 py-10 text-center text-sm text-muted-foreground mt-20">      
      <p className="mb-4 font-serif text-xl text-foreground">
        HerFinance
      </p>

      <p className="max-w-3xl mx-auto text-xs leading-6">
        HerFinance Academy provides financial education for informational purposes only. 
        Nothing on this website should be considered financial or investment advice. 
        Results may vary based on individual effort and circumstances.
      </p>

      <p className="mt-4 text-xs">
        Not endorsed by Google or Meta.
      </p>

      <div className="mt-4 flex justify-center gap-4 text-xs">
        <a href="/terms">Terms & Conditions</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/disclaimer" className="hover:text-[#1F1F1F]">
    Earnings Disclaimer
  </a>
      </div>

    </footer>
  )
}