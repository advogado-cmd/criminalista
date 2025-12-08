import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter, Roboto_Serif, Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const playfair = Playfair_Display({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })
const robotoSerif = Roboto_Serif({ subsets: ["latin"] })
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
})

export const metadata: Metadata = {
  title: "Advogado Criminalista em Goiânia | Dr. Carlos Fernando de Oliveira | OAB/SP 524.997",
  description:
    "Defesa Criminal Estratégica 24h. Você está a um passo de perder sua liberdade? Não vá à delegacia desacompanhado. Atendimento urgente em Goiânia para prisões em flagrante, Lei Seca, Maria da Penha, drogas e armas.",
  keywords:
    "advogado criminalista Goiânia, defesa criminal urgente, prisão em flagrante, Lei Seca GO, Maria da Penha advogado, porte de drogas defesa, audiência de custódia, habeas corpus, advogado 24h Goiás",
  authors: [{ name: "Dr. Carlos Fernando Lopes de Oliveira" }],
  metadataBase: new URL("https://advogado-criminalista.go.droliveira.adv.br"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Defesa Criminal Estratégica 24h | Dr. Carlos Fernando de Oliveira",
    description:
      "Mestre em Direito. Especialista em defesa criminal urgente. Atendimento imediato para quem está sob risco de prisão.",
    type: "website",
    locale: "pt_BR",
    url: "https://advogado-criminalista.go.droliveira.adv.br",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Dr. Oliveira Advocacia & Associados",
      },
    ],
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV3MG7ZN');`}
        </Script>
      </head>
      <body className="font-sans antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV3MG7ZN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
