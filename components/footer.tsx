import Image from "next/image"
import Link from "next/link"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src="/logo-light.png"
              alt="Dr. Oliveira Advocacia & Associados"
              width={180}
              height={54}
              className="h-14 w-auto mb-4"
            />
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Advocacia Criminal especializada em defesas de urgência. Atendimento 24 horas em São Paulo.
            </p>
          </div>

          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Áreas de Atuação</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>Lei Seca e Acidentes de Trânsito</li>
              <li>Violência Doméstica (Maria da Penha)</li>
              <li>Porte de Drogas e Tráfico</li>
              <li>Porte Ilegal de Arma</li>
              <li>Receptação</li>
            </ul>
          </div>

          <div>
            <h3 className="text-primary-foreground font-semibold mb-4">Contato</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>+55 11 93081 9577</li>
              <li>
                Rua Loefgren, 1291, Cj. 72
                <br />
                Vila Mariana, São Paulo - SP
              </li>
              <li>OAB/SP 524.997</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60 text-sm">
              © {currentYear} Dr. Carlos Fernando Lopes de Oliveira. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link
                href="/politica-de-privacidade"
                className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="#"
                className="text-primary-foreground/60 text-sm hover:text-primary-foreground transition-colors"
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
