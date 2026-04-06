"use client"

import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/lib/portfolio-data"

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
}

export function Hero() {
  const handleScroll = (href: string) => {
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >
      {/* Subtle background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-30" />

      {/* Radial gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_70%)]" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 backdrop-blur-sm"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-muted-foreground">
            {PERSONAL_INFO.availability}
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
        >
          {PERSONAL_INFO.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-mono text-lg text-accent md:text-xl"
        >
          {PERSONAL_INFO.title}
        </motion.p>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          {PERSONAL_INFO.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <button
            onClick={() => handleScroll("#proyectos")}
            className="rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-accent-foreground transition-all hover:opacity-90"
          >
            Ver proyectos
          </button>
          <button
            onClick={() => handleScroll("#contacto")}
            className="rounded-lg border border-border px-8 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
          >
            Contactar
          </button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-12 flex items-center justify-center gap-5"
        >
          {SOCIAL_LINKS.filter((s) => s.icon !== "mail").map((link) => {
            const Icon = iconMap[link.icon as keyof typeof iconMap]
            return Icon ? (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-foreground"
                aria-label={link.name}
              >
                <Icon size={20} />
              </a>
            ) : null
          })}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        onClick={() => handleScroll("#sobre-mi")}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground transition-colors hover:text-foreground"
        aria-label="Desplazar hacia abajo"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.button>
    </section>
  )
}
