import { MapPin, Phone, Clock, ArrowRight } from "lucide-react"

export function Contact() {
  const whatsappLink =
    "https://wa.me/5511930819577?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20presencial."

  return (
    <section id="contato" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Contato</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">Entre em Contato Agora</h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Não deixe para depois. Quanto antes você buscar orientação jurídica, maiores as chances de um desfecho
              favorável para seu caso.
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
                  <p className="text-muted-foreground">+55 11 93081 9577</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                  <p className="text-muted-foreground">
                    Rua Loefgren, 1291, Conjunto 72
                    <br />
                    Vila Mariana, São Paulo - SP
                    <br />
                    CEP 04040-030
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 9h às 18h
                    <br />
                    Urgências: 24 horas
                  </p>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              Enviar Mensagem no WhatsApp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="bg-card rounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.8447193036557!2d-46.64062472467067!3d-23.58934996303988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59f1c0e3c8a7%3A0x6f2a0a3f0a0a0a0a!2sR.%20Loefgren%2C%201291%20-%20Vila%20Mariana%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004040-030!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização do escritório"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
