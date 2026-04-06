"use client"

import { PROJECTS } from "@/lib/portfolio-data"
import { SectionWrapper, SectionHeader } from "@/components/section-wrapper"
import { ProjectCard } from "@/components/project-card"
import { FadeInUp } from "@/components/motion-wrapper"

export function Projects() {
  return (
    <SectionWrapper id="proyectos" className="bg-secondary/30">
      <FadeInUp>
        <SectionHeader
          label="Proyectos"
          title="Trabajo seleccionado"
          description="Una seleccion de proyectos recientes que reflejan mi experiencia y pasion por el desarrollo."
        />
      </FadeInUp>

      <div className="grid gap-8 md:grid-cols-2">
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            description={project.description}
            image={project.image}
            technologies={project.technologies}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  )
}
