import Image from "next/image"
import { Award, BookOpen, GraduationCap, ArrowRight } from "lucide-react"

export function About() {
  const whatsappLink = "https://wa.me/5511930819577?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta."

  return (
    <section id="sobre" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <Image
              src="/images/mesaboa.jpeg"
              alt="Dr. Carlos Fernando Lopes de Oliveira - Mestre em Direito"
              width={500}
              height={600}
              className="rounded-lg shadow-xl object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg shadow-lg hidden md:block">
              <div className="text-sm font-medium">OAB/SP 524.997</div>
              <div className="text-xs text-primary-foreground/80">OAB/PE 24.469</div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Autoridade e Confiança</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
              Formação Acadêmica e Atuação Profissional
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              <strong className="text-foreground">
                A defesa criminal exige técnica, estratégia e profundo conhecimento jurídico.
              </strong>{" "}
              O Dr. Carlos Fernando Lopes de Oliveira é Mestre em Ciências Jurídicas pela UFPB e Especialista em Gestão
              pelo CEDEPE. Sua sólida trajetória acadêmica inclui a docência em instituições de ensino superior como
              UFPB, FIR e AESO, o que lhe confere o rigor técnico necessário para identificar e contestar teses
              acusatórias inconsistentes.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Aliada à formação acadêmica, sua atuação prática na advocacia criminal garante a combatividade que cada
              caso exige. O compromisso é garantir que o Estado respeite integralmente os direitos do acusado.{" "}
              <strong className="text-foreground">Todo cidadão tem direito à ampla defesa e ao contraditório.</strong>
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Mestre UFPB</div>
                  <div className="text-sm text-muted-foreground">Ciências Jurídicas</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Docente</div>
                  <div className="text-sm text-muted-foreground">UFPB, FIR, AESO</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Award className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Especialista</div>
                  <div className="text-sm text-muted-foreground">Gestão CEDEPE</div>
                </div>
              </div>
            </div>

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              Agendar Consulta
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
