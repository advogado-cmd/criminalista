"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Shield, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import Link from "next/link"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [acceptedPrivacy, setAcceptedPrivacy] = useState(false)
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    email: "",
    urgencia: "",
    mensagem: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!acceptedPrivacy) {
      alert("Por favor, aceite a política de privacidade para continuar.")
      return
    }

    setIsSubmitting(true)
    setStatus("idle")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus("success")

        const mensagem = `Olá, Dr. Carlos!

Sou ${formData.nome} e tenho uma questão CRIMINAL URGENTE.
Nível de Urgência: ${formData.urgencia}

📧 Email: ${formData.email}
📱 Telefone: ${formData.telefone}

Preciso de orientação imediata.`

        const whatsappUrl = `https://api.whatsapp.com/send?phone=5511930819577&text=${encodeURIComponent(mensagem)}`

        // Wait a moment then redirect
        setTimeout(() => {
          window.open(whatsappUrl, "_blank")
        }, 1500)

        setFormData({
          nome: "",
          telefone: "",
          email: "",
          urgencia: "",
          mensagem: "",
        })
        setAcceptedPrivacy(false)
      } else {
        setStatus("error")
      }
    } catch {
      setStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-green-800 mb-2">Abrindo WhatsApp...</h3>
        <p className="text-green-700 mb-4">
          Sua mensagem foi registrada. Você será redirecionado para o WhatsApp para atendimento imediato.
        </p>
        <Button onClick={() => setStatus("idle")} className="bg-accent hover:bg-accent/90 text-accent-foreground">
          Enviar Nova Solicitação
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-foreground mb-2">
            Nome Completo *
          </label>
          <Input
            id="nome"
            type="text"
            required
            value={formData.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
            placeholder="Seu nome completo"
            className="bg-background border-muted-foreground/30"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="block text-sm font-medium text-foreground mb-2">
            Telefone / WhatsApp *
          </label>
          <Input
            id="telefone"
            type="tel"
            required
            value={formData.telefone}
            onChange={(e) => handleChange("telefone", e.target.value)}
            placeholder="(11) 99999-9999"
            className="bg-background border-muted-foreground/30"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          E-mail *
        </label>
        <Input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="seu@email.com"
          className="bg-background border-muted-foreground/30"
        />
      </div>

      <div>
        <label htmlFor="urgencia" className="block text-sm font-medium text-foreground mb-2">
          Qual o nível de urgência? *
        </label>
        <Select value={formData.urgencia} onValueChange={(value) => handleChange("urgencia", value)} required>
          <SelectTrigger className="bg-background border-muted-foreground/30">
            <SelectValue placeholder="Selecione o nível de urgência" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Baixa">Baixa - Consulta preventiva</SelectItem>
            <SelectItem value="Média">Média - Tenho alguns dias</SelectItem>
            <SelectItem value="Alta - Risco de Prisão Imediata">Alta - Risco de Prisão Imediata</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-foreground mb-2">
          Breve relato do caso *
        </label>
        <Textarea
          id="mensagem"
          required
          value={formData.mensagem}
          onChange={(e) => handleChange("mensagem", e.target.value)}
          placeholder="Descreva brevemente sua situação. Todas as informações são confidenciais..."
          rows={5}
          className="bg-background border-muted-foreground/30"
        />
      </div>

      <div className="flex items-start gap-3">
        <Checkbox
          id="privacy"
          checked={acceptedPrivacy}
          onCheckedChange={(checked) => setAcceptedPrivacy(checked as boolean)}
          className="mt-1"
        />
        <label htmlFor="privacy" className="text-sm text-muted-foreground">
          Li e aceito a{" "}
          <Link href="/politica-de-privacidade" className="text-primary underline hover:text-primary/80">
            Política de Privacidade
          </Link>
          . Autorizo o contato para atendimento jurídico.
        </label>
      </div>

      {status === "error" && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
          <AlertCircle className="w-5 h-5 text-red-500" />
          <p className="text-red-700 text-sm">
            Erro ao enviar mensagem. Tente novamente ou entre em contato por WhatsApp.
          </p>
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting || !acceptedPrivacy}
        className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Processando...
          </>
        ) : (
          <>
            <Shield className="w-5 h-5 mr-2" />
            Solicitar Defesa Urgente
          </>
        )}
      </Button>

      <p className="text-xs text-center text-muted-foreground">
        Suas informações são confidenciais e protegidas pelo sigilo profissional da advocacia.
      </p>
    </form>
  )
}
