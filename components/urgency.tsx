import { Clock, Phone, AlertTriangle, ArrowRight } from "lucide-react"

export function Urgency() {
  const whatsappLink =
    "https://wa.me/5511930819577?text=URGENTE%3A%20Preciso%20de%20um%20advogado%20criminalista%20agora."

  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <AlertTriangle className="h-8 w-8 text-accent" />
            <span className="text-accent text-lg font-semibold uppercase tracking-wider">Atendimento de Urgência</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6 text-balance">
            Familiar Preso? Recebeu uma Intimação? Não espere.
          </h2>

          <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            Nas primeiras horas após uma prisão em flagrante, decisões cruciais são tomadas. Um advogado presente na
            audiência de custódia pode fazer a diferença entre a liberdade provisória e a prisão preventiva.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <Clock className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Atendimento 24 Horas</h3>
              <p className="text-primary-foreground/70">
                Disponível para emergências a qualquer hora do dia ou da noite, incluindo finais de semana e feriados.
              </p>
            </div>
            <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6">
              <Phone className="h-8 w-8 text-accent mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">Resposta Imediata</h3>
              <p className="text-primary-foreground/70">
                Retorno rápido pelo WhatsApp para avaliar seu caso e orientar sobre os próximos passos imediatamente.
              </p>
            </div>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-10 py-4 rounded-md hover:bg-accent/90 transition-colors font-bold text-lg"
          >
            Preciso de Ajuda Urgente
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
