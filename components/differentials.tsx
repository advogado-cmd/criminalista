import { Shield, Lock, Clock, Target, Briefcase, Headphones } from "lucide-react"

const differentials = [
  {
    icon: Shield,
    title: "Defesa Técnica Especializada",
    description: "Estratégias jurídicas elaboradas especificamente para cada tipo de crime e circunstância.",
  },
  {
    icon: Lock,
    title: "Sigilo Absoluto",
    description: "Garantia de confidencialidade total. Seu caso é tratado com máxima discrição.",
  },
  {
    icon: Clock,
    title: "Disponibilidade 24h",
    description: "Atendimento emergencial a qualquer hora para prisões em flagrante e urgências.",
  },
  {
    icon: Target,
    title: "Foco no Resultado",
    description: "Atuação estratégica visando a liberdade do cliente e a melhor solução possível.",
  },
  {
    icon: Briefcase,
    title: "Experiência Comprovada",
    description: "Anos de atuação em casos criminais complexos com resultados positivos.",
  },
  {
    icon: Headphones,
    title: "Atendimento Humanizado",
    description: "Acolhimento e orientação em um momento delicado para você e sua família.",
  },
]

export function Differentials() {
  return (
    <section id="diferenciais" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-8 bg-primary" />
            <span className="text-primary text-sm font-medium uppercase tracking-wider">Por que nos escolher</span>
            <div className="h-px w-8 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Diferenciais do Nosso Atendimento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Compromisso com a defesa dos seus direitos e com um atendimento que faz a diferença nos momentos mais
            difíceis.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
