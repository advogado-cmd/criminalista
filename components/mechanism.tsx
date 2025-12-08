import { Siren, ShieldAlert, Scale } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const steps = [
  {
    icon: Siren,
    title: "Blindagem Imediata",
    subtitle: "Delegacia/Flagrante",
    description:
      "Orientação sobre o que falar (e o que calar) para evitar a produção de provas contra si mesmo. Acompanhamento em depoimentos e audiências de custódia.",
  },
  {
    icon: ShieldAlert,
    title: "Análise Técnica",
    subtitle: "Inquérito Policial",
    description:
      "Investigação defensiva para encontrar falhas processuais, nulidades na acusação e verificação da legalidade de provas obtidas.",
  },
  {
    icon: Scale,
    title: "Atuação Combativa",
    subtitle: "Processo Judicial",
    description:
      "Pedidos de Liberdade Provisória, Habeas Corpus e defesa em audiências. Estratégia para absolvição ou desclassificação do crime.",
  },
]

export function Mechanism() {
  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">O Mecanismo</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Proteção Criminal para Casos Urgentes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Nossa defesa funciona em 3 etapas integradas, do primeiro contato policial até a sentença final.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors relative">
              <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl shadow-lg">
                {index + 1}
              </div>
              <CardHeader className="pt-8">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{step.title}</CardTitle>
                <p className="text-sm text-accent font-medium">{step.subtitle}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
