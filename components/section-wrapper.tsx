import type { ReactNode } from "react"

interface SectionWrapperProps {
  id?: string
  children: ReactNode
  className?: string
}

export function SectionWrapper({ id, children, className = "" }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`px-6 py-20 md:py-28 lg:py-32 ${className}`}
    >
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  )
}

export function SectionHeader({
  label,
  title,
  description,
}: {
  label: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-14 md:mb-20">
      <span className="mb-3 block font-mono text-sm uppercase tracking-widest text-accent">
        {label}
      </span>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
