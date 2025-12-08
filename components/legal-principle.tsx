import { Scale, Shield } from "lucide-react"

export function LegalPrinciple() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <Scale className="h-12 w-12 text-accent" />
            <Shield className="h-12 w-12 text-accent" />
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">O Princípio da Não-Incriminação</h2>

          <div className="bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-lg p-8">
            <p className="text-lg leading-relaxed mb-6">
              A Constituição Federal garante o princípio do <strong>Nemo Tenetur Se Detegere</strong>: ninguém é
              obrigado a produzir provas contra si mesmo.
            </p>
            <p className="text-lg leading-relaxed mb-6">
              Somado à <strong>Presunção de Inocência (In Dubio Pro Reo)</strong>, a lei determina que, na dúvida, a
              decisão deve favorecer o réu.
            </p>
            <p className="text-xl font-semibold text-accent">Nossa missão é fazer valer essa regra.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
