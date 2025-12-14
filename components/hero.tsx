import Image from "next/image"
import { Shield, Clock } from "lucide-react"

export function Hero() {
  const whatsappLink =
    "https://wa.me/5511930819577?text=Ol%C3%A1%2C%20Dr.%20Carlos!%20Preciso%20de%20assist%C3%AAncia%20jur%C3%ADdica%20URGENTE."

  return (
    <section className="relative min-h-screen pt-20 bg-gradient-to-br from-primary via-primary to-primary/90 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="lg:hidden flex justify-center mb-4">
            <div className="relative">
              <Image
                src="/images/forumboa.jpeg"
                alt="Dr. Carlos Fernando Lopes de Oliveira - Advogado Criminalista"
                width={200}
                height={250}
                className="rounded-lg shadow-2xl object-cover w-40 h-auto sm:w-48"
                priority
              />
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap shadow-lg">
                OAB/SP 524.997
              </div>
            </div>
          </div>

          <div className="relative z-10 text-center lg:text-left">
            <div className="flex items-center gap-2 mb-4 sm:mb-6 justify-center lg:justify-start">
              <div className="h-px w-8 bg-accent" />
              <span className="text-accent text-xs sm:text-sm font-medium uppercase tracking-wider">
                DEFESA CRIMINAL ESTRATÉGICA 24H
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-4 sm:mb-6 text-balance">
              Defesa Criminal Técnica e Estratégica para Proteger Sua Liberdade
            </h1>

            <p className="text-base sm:text-lg text-primary-foreground/90 mb-6 sm:mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
              A presença de um advogado criminalista desde o primeiro momento é um direito constitucional que pode
              definir o rumo do seu caso. O Direito Penal exige conhecimento técnico especializado. Garanta uma defesa
              qualificada que proteja seus direitos fundamentais.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 sm:mb-12 justify-center lg:justify-start">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-accent/90 transition-colors font-semibold text-base sm:text-lg"
              >
                🛡️ Falar com Advogado Criminalista Agora
              </a>
            </div>

            <div className="hidden lg:flex items-center gap-6 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm">OAB/SP 524.997 | OAB/PE 24.469</span>
              </div>
              <div className="h-4 w-px bg-primary-foreground/30" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-accent" />
                <span className="text-sm">Atendimento 24h</span>
              </div>
            </div>

            <div className="lg:hidden flex flex-wrap items-center justify-center gap-4 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-accent" />
                <span className="text-xs sm:text-sm">Atendimento 24h</span>
              </div>
              <div className="h-3 w-px bg-primary-foreground/30" />
              <span className="text-xs sm:text-sm">11 93081-9577</span>
            </div>
          </div>

          {/* Foto desktop - mantida */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <Image
                src="/images/forumboa.jpeg"
                alt="Dr. Carlos Fernando Lopes de Oliveira - Advogado Criminalista"
                width={500}
                height={600}
                className="rounded-lg shadow-2xl object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full bg-accent/20 rounded-lg -z-10" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
