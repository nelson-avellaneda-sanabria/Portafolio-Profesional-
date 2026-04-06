"use client"

import { useState, type FormEvent } from "react"
import { Mail, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/portfolio-data"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { FadeInUp, FadeIn } from "@/components/motion-wrapper"

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
}

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

export function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validate = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "El nombre es obligatorio"
    }
    if (!formData.email.trim()) {
      newErrors.email = "El email es obligatorio"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Ingresa un email valido"
    }
    if (!formData.message.trim()) {
      newErrors.message = "El mensaje es obligatorio"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)
    // Simulate submission
    await new Promise((resolve) => setTimeout(resolve, 1200))
    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (
    field: keyof FormData,
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  return (
    <SectionWrapper id="contacto" className="bg-secondary/30">
      <FadeInUp>
        <SectionHeader
          label="Contacto"
          title="Trabajemos juntos"
          description="Tienes un proyecto en mente? Me encantaria escucharte. Completa el formulario o escribeme directamente."
        />
      </FadeInUp>

      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Contact Info */}
        <FadeInUp className="lg:col-span-2">
          <div className="flex flex-col gap-8">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Email</p>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
                >
                  {PERSONAL_INFO.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary text-accent">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-sm font-medium text-foreground">Ubicacion</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {PERSONAL_INFO.location}
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-4">
              <p className="mb-4 text-sm font-medium text-foreground">Redes sociales</p>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = socialIconMap[link.icon]
                  return (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-all hover:border-accent/50 hover:text-accent"
                      aria-label={link.name}
                    >
                      <Icon size={16} />
                    </a>
                  )
                })}
              </div>
            </div>
          </div>
        </FadeInUp>

        {/* Contact Form */}
        <FadeInUp delay={0.15} className="lg:col-span-3">
          {isSubmitted ? (
            <FadeIn className="flex flex-col items-center justify-center rounded-xl border border-border bg-card px-6 py-16 text-center">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <Send size={24} />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                Mensaje enviado
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Gracias por tu mensaje. Te respondere lo antes posible.
              </p>
              <button
                onClick={() => setIsSubmitted(false)}
                className="mt-6 text-sm font-medium text-accent transition-opacity hover:opacity-80"
              >
                Enviar otro mensaje
              </button>
            </FadeIn>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-5 rounded-xl border border-border bg-card p-6 md:p-8"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Nombre <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      errors.name ? "border-destructive-foreground" : "border-border"
                    }`}
                    placeholder="Tu nombre"
                  />
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-destructive-foreground">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    className={`w-full rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                      errors.email ? "border-destructive-foreground" : "border-border"
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-destructive-foreground">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                  className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50"
                  placeholder="Asunto del mensaje"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-foreground"
                >
                  Mensaje <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`w-full resize-none rounded-lg border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/50 ${
                    errors.message ? "border-destructive-foreground" : "border-border"
                  }`}
                  placeholder="Cuentame sobre tu proyecto..."
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-destructive-foreground">
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent-foreground/30 border-t-accent-foreground" />
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    <span>Enviar mensaje</span>
                  </>
                )}
              </button>
            </form>
          )}
        </FadeInUp>
      </div>
    </SectionWrapper>
  )
}
