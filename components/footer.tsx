"use client"

import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react"
import { FOOTER, NAV_LINKS, SOCIAL_LINKS } from "@/lib/portfolio-data"

const socialIconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  mail: Mail,
}

export function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "")
    const el = document.getElementById(id)
    if (el) {
      const offset = 80
      const top = el.getBoundingClientRect().top + window.scrollY - offset
      window.scrollTo({ top, behavior: "smooth" })
    }
  }

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNavClick("#inicio")}
            className="font-mono text-lg font-bold text-foreground transition-colors hover:text-accent"
          >
            {FOOTER.name.split(" ")[0]}
            <span className="text-accent">.</span>
          </button>

          {/* Navigation */}
          <nav>
            <ul className="flex flex-wrap items-center justify-center gap-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((link) => {
              const Icon = socialIconMap[link.icon]
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  aria-label={link.name}
                >
                  <Icon size={16} />
                </a>
              )
            })}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-border" />

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground">
          {FOOTER.text}{" "}
          <Heart size={14} className="inline text-accent" />{" "}
          {"por"}{" "}
          <span className="font-medium text-foreground">{FOOTER.name}</span>{" "}
          &copy; {FOOTER.year}
        </p>
      </div>
    </footer>
  )
}
