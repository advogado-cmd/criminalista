import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Storytelling } from "@/components/storytelling"
import { Mechanism } from "@/components/mechanism"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { LegalPrinciple } from "@/components/legal-principle"
import { FAQ } from "@/components/faq"
import { FormSection } from "@/components/form-section"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Storytelling />
      <Mechanism />
      <Services />
      <About />
      <LegalPrinciple />
      <FAQ />
      <FormSection />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
