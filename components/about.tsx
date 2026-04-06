"use client"

import Image from "next/image"
import { ABOUT, PERSONAL_INFO } from "@/lib/portfolio-data"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { FadeInUp, FadeIn, StaggerContainer, motion, fadeInUp } from "@/components/motion-wrapper"

export function About() {
  return (
    <SectionWrapper id="sobre-mi">
      <SectionHeader
        label="Sobre mi"
        title="Conoce mi historia"
        description="Un vistazo rapido a quien soy y lo que hago."
      />

      <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
        {/* Photo */}
        <FadeInUp className="lg:col-span-2">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-sm overflow-hidden rounded-2xl lg:max-w-none">
            <Image
              src="/images/profile.jpg"
              alt={`Foto de ${PERSONAL_INFO.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 384px, 40vw"
              priority
            />
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-foreground/5" />
          </div>
        </FadeInUp>

        {/* Content */}
        <div className="flex flex-col justify-center lg:col-span-3">
          <FadeInUp>
            <div className="space-y-5">
              {ABOUT.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-base leading-relaxed text-muted-foreground"
                >
                  {p}
                </p>
              ))}
            </div>
          </FadeInUp>

          {/* Stats */}
          <StaggerContainer className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            {ABOUT.stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="text-center lg:text-left"
              >
                <span className="block text-3xl font-bold text-foreground">
                  {stat.value}
                </span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </StaggerContainer>

          {/* Resume Link */}
          <FadeIn className="mt-10">
            <a
              href={PERSONAL_INFO.resumeUrl}
              className="inline-flex items-center gap-2 font-mono text-sm text-accent transition-opacity hover:opacity-80"
            >
              <span>Descargar CV</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className="transition-transform group-hover:translate-x-1"
              >
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </FadeIn>
        </div>
      </div>
    </SectionWrapper>
  )
}
