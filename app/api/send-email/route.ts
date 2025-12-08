import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { nome, telefone, email, tipoAssunto, jaFoiPreso, urgencia, mensagem } = body

    const tipoAssuntoLabels: Record<string, string> = {
      "lei-seca": "Lei Seca / Embriaguez ao Volante",
      "maria-penha": "Violência Doméstica (Maria da Penha)",
      drogas: "Porte de Drogas / Tráfico",
      armas: "Porte Ilegal de Arma",
      receptacao: "Receptação",
      acidente: "Acidente de Trânsito",
      "furto-roubo": "Furto / Roubo",
      outro: "Outro Assunto Criminal",
    }

    const prisaoLabels: Record<string, string> = {
      "sim-flagrante": "Sim, está preso agora",
      "sim-liberado": "Foi preso mas já foi liberado",
      nao: "Não houve prisão",
      preventiva: "Prisão preventiva",
    }

    const urgenciaLabels: Record<string, string> = {
      urgente: "🔴 URGENTE (precisa de ajuda agora)",
      "24h": "🟠 Precisa de resposta em até 24h",
      semana: "🟡 Pode aguardar alguns dias",
      consulta: "🟢 Apenas consulta informativa",
    }

    const { data, error } = await resend.emails.send({
      from: "Formulário Landing Page <onboarding@resend.dev>",
      to: "contato@droliveira.adv.br",
      replyTo: email,
      subject: `[${urgenciaLabels[urgencia]?.split(" ")[0] || ""}] Novo Contato - ${tipoAssuntoLabels[tipoAssunto] || tipoAssunto}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0e105a; padding: 20px; text-align: center;">
            <h1 style="color: #c9a962; margin: 0;">Novo Contato via Landing Page</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f8f8f8;">
            <h2 style="color: #0e105a; border-bottom: 2px solid #c9a962; padding-bottom: 10px;">
              ${urgenciaLabels[urgencia] || urgencia}
            </h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold; width: 40%;">Nome:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${nome}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Telefone/WhatsApp:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <a href="https://wa.me/55${telefone.replace(/\D/g, "")}" style="color: #0e105a;">${telefone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">E-mail:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">
                  <a href="mailto:${email}" style="color: #0e105a;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Tipo de Caso:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${tipoAssuntoLabels[tipoAssunto] || tipoAssunto}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd; font-weight: bold;">Situação de Prisão:</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #ddd;">${prisaoLabels[jaFoiPreso] || jaFoiPreso}</td>
              </tr>
            </table>
            
            <h3 style="color: #0e105a; margin-top: 20px;">Descrição do Caso:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #c9a962; margin-top: 10px;">
              ${mensagem.replace(/\n/g, "<br>")}
            </div>
          </div>
          
          <div style="background-color: #0e105a; padding: 15px; text-align: center;">
            <p style="color: #fff; margin: 0; font-size: 12px;">
              Origem: advogado-criminalista.go.droliveira.adv.br
            </p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.error("Resend error:", error)
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
    }

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
