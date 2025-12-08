import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "Fui intimado a depor. Devo ir sozinho?",
    answer:
      "Nunca vá sem advogado. O que você disser poderá ser usado contra você, mesmo que seja apenas para 'esclarecer os fatos'. Você tem o direito constitucional de permanecer em silêncio e de ser assistido por advogado desde o primeiro contato com a autoridade policial.",
  },
  {
    question: "Minha família ou patrão ficarão sabendo do processo?",
    answer:
      "O sigilo advogado-cliente é absoluto e protegido pela Constituição Federal. Além disso, processos criminais podem tramitar em segredo de justiça dependendo da natureza do crime. Trabalhamos com discrição total para proteger sua privacidade e reputação.",
  },
  {
    question: "Há risco de eu ser preso hoje?",
    answer:
      "Depende da situação. Em casos de flagrante, a prisão pode ocorrer imediatamente. Porém, existem diversas possibilidades de liberdade provisória e relaxamento de prisão. Fazemos uma análise realista dos riscos de prisão preventiva ou temporária e atuamos rapidamente com pedidos de liberdade.",
  },
  {
    question: "Advogado criminal é caro?",
    answer:
      "O custo da liberdade é incalculável. Oferecemos honorários justos e transparentes, com diferentes modalidades de pagamento. O investimento em uma defesa técnica qualificada pode significar a diferença entre a absolvição e uma condenação injusta. Entre em contato para um orçamento personalizado.",
  },
  {
    question: "Posso fazer minha própria defesa?",
    answer:
      "Tecnicamente sim, mas não é recomendável. O sistema de justiça criminal é complexo e técnico. Sem conhecimento especializado, você pode cometer erros irreversíveis que prejudicam sua defesa. Mesmo advogados de outras áreas contratam criminalistas quando são acusados.",
  },
]

export function FAQ() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-px w-8 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-wider">Dúvidas Frequentes</span>
              <div className="h-px w-8 bg-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
              Perguntas que Recebemos Diariamente
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
