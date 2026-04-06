"use client"

import Image from "next/image"
import { Github, ExternalLink } from "lucide-react"
import { motion } from "framer-motion"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  githubUrl: string
  demoUrl: string
  index: number
}

export function ProjectCard({
  title,
  description,
  image,
  technologies,
  githubUrl,
  demoUrl,
  index,
}: ProjectCardProps) {
  return (
    <motion.article
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            delay: index * 0.1,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:border-accent/30 hover:shadow-[0_0_40px_-12px] hover:shadow-accent/10"
    >
      {/* Image */}
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={image}
          alt={`Captura de ${title}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* Hover overlay links */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 transition-all duration-500 group-hover:opacity-100">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-background/90 text-foreground backdrop-blur-sm transition-transform hover:scale-110"
            aria-label={`Ver codigo de ${title} en GitHub`}
          >
            <Github size={18} />
          </a>
          <a
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-accent text-accent-foreground transition-transform hover:scale-110"
            aria-label={`Ver demo de ${title}`}
          >
            <ExternalLink size={18} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-accent">
          {title}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>

        {/* Technologies */}
        <div className="mt-5 flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-secondary/50 px-3 py-1 font-mono text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  )
}
