import { ContactForm } from "@/components/contact-form"
import { Phone, MessageCircle, Clock } from "lucide-react"
import Link from "next/link"

export function FormSection() {
  const whatsappNumber = "5511930819577"
  const whatsappMessage = encodeURIComponent("Olá Dr. Carlos, gostaria de informações sobre defesa criminal.")

  return (
    <section id="formulario" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Solicite Atendimento</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Preencha o formulário abaixo para uma análise inicial do seu caso. Responderemos o mais rápido possível.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <div className="bg-background rounded-xl shadow-lg p-6 md:p-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-primary rounded-xl p-6 text-primary-foreground">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-accent" />
                Precisa de Ajuda Urgente?
              </h3>
              <p className="text-primary-foreground/80 text-sm mb-4">
                Se você ou alguém próximo foi preso em flagrante, não perca tempo. Entre em contato imediatamente pelo
                WhatsApp.
              </p>
              <Link
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg transition-colors w-full"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp 24h
              </Link>
            </div>

            <div className="bg-background rounded-xl shadow-lg p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 text-primary">
                <Phone className="w-5 h-5 text-accent" />
                Contato Direto
              </h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <strong className="text-foreground">Telefone:</strong>
                  <br />
                  <a href="tel:+5511930819577" className="hover:text-primary">
                    +55 11 93081 9577
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">E-mail:</strong>
                  <br />
                  <a href="mailto:contato@droliveira.adv.br" className="hover:text-primary">
                    contato@droliveira.adv.br
                  </a>
                </li>
                <li>
                  <strong className="text-foreground">Endereço:</strong>
                  <br />
                  Rua Loefgren, 1291, Cj. 72
                  <br />
                  Vila Mariana, São Paulo - SP
                </li>
                <li>
                  <strong className="text-foreground">OAB/SP:</strong> 524.997
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 rounded-xl p-6 border border-accent/30">
              <h3 className="font-semibold text-primary mb-2">Sigilo Garantido</h3>
              <p className="text-sm text-muted-foreground">
                Todas as informações compartilhadas são protegidas pelo sigilo profissional da advocacia (Art. 7º do
                Estatuto da OAB).
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
