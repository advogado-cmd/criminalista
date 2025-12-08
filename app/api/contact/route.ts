import { Resend } from "resend"
import { NextResponse } from "next/server"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  console.log("[v0] API contact chamada")
  console.log("[v0] RESEND_API_KEY existe:", !!process.env.RESEND_API_KEY)

  try {
    const body = await request.json()
    console.log("[v0] Body recebido:", body)

    const { nome, telefone, email, urgencia, mensagem } = body

    const { data, error } = await resend.emails.send({
      from: "Dr. Oliveira Advocacia <onboarding@resend.dev>",
      to: ["advogado@droliveira.adv.br"],
      replyTo: email,
      subject: `[${urgencia}] Solicitação de Defesa Criminal - ${nome}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background-color: #0e105a; padding: 20px; text-align: center;">
            <h1 style="color: #c9a962; margin: 0;">Nova Solicitação de Defesa Criminal</h1>
          </div>
          
          <div style="padding: 30px; background-color: #f8f8f8;">
            <h2 style="color: #0e105a; border-bottom: 2px solid #c9a962; padding-bottom: 10px;">
              Urgência: ${urgencia}
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
            </table>
            
            <h3 style="color: #0e105a; margin-top: 20px;">Descrição do Caso:</h3>
            <div style="background-color: #fff; padding: 15px; border-left: 4px solid #c9a962; margin-top: 10px;">
              ${mensagem.replace(/\n/g, "<br>")}
            </div>

            <div style="margin-top: 20px; padding: 15px; background-color: #fff3cd; border-left: 4px solid #c9a962;">
              <strong style="color: #0e105a;">Cliente será redirecionado ao WhatsApp após envio</strong>
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
      console.error("[v0] Resend error:", error)
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    console.log("[v0] Email enviado com sucesso:", data)
    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("[v0] Error sending email:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
