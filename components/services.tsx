import { HeartCrack, CarFront, AlertTriangle, Briefcase } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: HeartCrack,
    title: "Violência Doméstica (Maria da Penha)",
    description:
      "Defesa técnica em casos de medidas protetivas e conflitos familiares. Análise criteriosa de acusações e garantia do contraditório.",
  },
  {
    icon: CarFront,
    title: "Acidentes e Embriaguez",
    description:
      "Atuação em crimes de trânsito, lesão corporal e direção sob efeito de álcool. Defesa em casos de recusa ao bafômetro e Lei Seca.",
  },
  {
    icon: AlertTriangle,
    title: "Porte de Armas e Drogas",
    description:
      "Estratégias de desclassificação de crimes e verificação da legalidade da apreensão. Diferenciação entre usuário e tráfico.",
  },
  {
    icon: Briefcase,
    title: "Crimes Financeiros e Empresariais",
    description:
      "Defesa especializada em crimes de colarinho branco, sonegação e fraudes. Análise técnica de documentação contábil.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Cenários de Atuação</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Em quais casos atuamos com urgência?
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
