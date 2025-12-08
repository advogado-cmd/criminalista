import { AlertTriangle, Scale, Shield } from "lucide-react"

export function Storytelling() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary font-serif mb-4 text-balance">
              O erro que custa anos de vida
            </h2>
          </div>

          <div className="space-y-8">
            <div className="bg-muted/50 border-l-4 border-secondary p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">Sua Rotina Antes da Acusação</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Até ontem, sua maior preocupação era o trabalho e a família. A liberdade era um direito garantido.
                    Você acreditava que a justiça seria automática para quem não tem nada a esconder.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-destructive/5 border-l-4 border-destructive p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <AlertTriangle className="h-8 w-8 text-destructive flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">O Momento Crítico</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Agora, diante de uma intimação ou acusação, o medo de ser preso, de sofrer violência no cárcere ou
                    de ser condenado injustamente paralisa. Muitos tentam "explicar a verdade" sozinhos, achando que a
                    justiça será automática. É aí que ocorrem as condenações evitáveis.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-secondary/10 border-l-4 border-secondary p-6 rounded-r-lg">
              <div className="flex items-start gap-4">
                <Scale className="h-8 w-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">A Defesa Técnica e Estratégica</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Na vida é preciso distinguir o fato real do "fato jurídico". Uma defesa especializada é capaz de
                    desfazer equívocos policiais e garantir que a lei seja cumprida:{" "}
                    <strong className="text-primary">na dúvida, a favor da sua liberdade</strong>. O silêncio é seu
                    maior direito, mas apenas se usado com estratégia.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
