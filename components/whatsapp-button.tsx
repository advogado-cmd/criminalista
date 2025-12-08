"use client"

import { MessageCircle } from "lucide-react"

export function WhatsAppButton() {
  const whatsappLink = "https://wa.me/5511930819577?text=Ol%C3%A1%2C%20preciso%20falar%20com%20o%20advogado."

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
      aria-label="Falar pelo WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  )
}
