"use client"

import { SKILLS } from "@/lib/portfolio-data"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { FadeInUp, StaggerContainer, motion, fadeInUp } from "@/components/motion-wrapper"

function SkillBar({ name, level, index }: { name: string; level: number; index: number }) {
  return (
    <motion.div variants={fadeInUp} className="group">
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="font-mono text-xs text-muted-foreground">{level}%</span>
      </div>
      <div className="relative h-1.5 overflow-hidden rounded-full bg-secondary">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-accent"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </motion.div>
  )
}

export function Skills() {
  return (
    <SectionWrapper id="habilidades">
      <FadeInUp>
        <SectionHeader
          label="Habilidades"
          title="Mi stack tecnologico"
          description="Tecnologias y herramientas que utilizo a diario para construir productos digitales."
        />
      </FadeInUp>

      <div className="grid gap-10 md:grid-cols-3 md:gap-12">
        {SKILLS.map((category, catIndex) => (
          <FadeInUp key={category.category} delay={catIndex * 0.15}>
            <div className="rounded-xl border border-border bg-card p-6 md:p-8">
              <h3 className="mb-6 flex items-center gap-3 text-base font-semibold text-foreground">
                <span className="h-px flex-1 bg-border" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {category.category}
                </span>
                <span className="h-px flex-1 bg-border" />
              </h3>
              <StaggerContainer className="flex flex-col gap-5">
                {category.items.map((skill, skillIndex) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    index={skillIndex}
                  />
                ))}
              </StaggerContainer>
            </div>
          </FadeInUp>
        ))}
      </div>
    </SectionWrapper>
  )
}
