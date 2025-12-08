"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const whatsappLink = "https://wa.me/5511930819577"

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo-dark.png"
              alt="Dr. Oliveira Advocacia & Associados"
              width={200}
              height={60}
              className="h-12 sm:h-14 md:h-16 w-auto"
              priority
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link href="#servicos" className="text-foreground hover:text-secondary transition-colors font-medium">
              Áreas de Atuação
            </Link>
            <Link href="#sobre" className="text-foreground hover:text-secondary transition-colors font-medium">
              Sobre
            </Link>
            <Link href="#diferenciais" className="text-foreground hover:text-secondary transition-colors font-medium">
              Diferenciais
            </Link>
            <Link href="#contato" className="text-foreground hover:text-secondary transition-colors font-medium">
              Contato
            </Link>
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors font-bold"
            >
              <Phone className="h-4 w-4" />
              <span>11 93081-9577</span>
            </a>
          </div>

          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 flex flex-col gap-4">
            <Link
              href="#servicos"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Áreas de Atuação
            </Link>
            <Link
              href="#sobre"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link
              href="#diferenciais"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Diferenciais
            </Link>
            <Link
              href="#contato"
              className="text-foreground hover:text-secondary transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-5 py-2.5 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors font-bold w-fit"
            >
              <Phone className="h-4 w-4" />
              <span>11 93081-9577</span>
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
