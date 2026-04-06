// ============================================================
// PORTFOLIO DATA - Edit this file to update your portfolio info
// ============================================================

export const PERSONAL_INFO = {
  name: "Carlos Mendoza",
  title: "Full-Stack Developer",
  subtitle: "Construyo experiencias digitales excepcionales",
  description:
    "Desarrollador apasionado por crear aplicaciones web modernas, escalables y con interfaces elegantes. Especializado en React, Next.js y Node.js.",
  email: "carlos@mendoza.dev",
  location: "Ciudad de Mexico, Mexico",
  availability: "Disponible para proyectos freelance",
  resumeUrl: "#",
}

export const ABOUT = {
  paragraphs: [
    "Soy un desarrollador full-stack con mas de 5 anos de experiencia construyendo aplicaciones web de alto rendimiento. Mi enfoque principal esta en crear experiencias de usuario excepcionales combinando un codigo limpio con un diseno atractivo.",
    "Actualmente me especializo en el ecosistema de React y Next.js, trabajando tanto en el frontend como en el backend. Me apasiona aprender nuevas tecnologias y aplicar las mejores practicas de la industria en cada proyecto.",
    "Cuando no estoy programando, disfruto contribuir a proyectos open source, escribir articulos tecnicos y participar en comunidades de desarrollo.",
  ],
  stats: [
    { label: "Anos de experiencia", value: "5+" },
    { label: "Proyectos completados", value: "40+" },
    { label: "Clientes satisfechos", value: "25+" },
    { label: "Contribuciones OSS", value: "100+" },
  ],
}

export const NAV_LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Sobre mi", href: "#sobre-mi" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Contacto", href: "#contacto" },
]

export const PROJECTS = [
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electronico completa con panel de administracion, pasarela de pagos, gestion de inventario y analiticas en tiempo real.",
    image: "/images/project-1.jpg",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    featured: true,
  },
  {
    title: "AI Chat Application",
    description:
      "Aplicacion de chat inteligente con procesamiento de lenguaje natural, respuestas en tiempo real y soporte multilenguaje.",
    image: "/images/project-2.jpg",
    technologies: ["React", "Node.js", "OpenAI", "WebSocket", "MongoDB"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "Aplicacion de gestion de tareas con tableros Kanban, asignacion de equipos, notificaciones en tiempo real y reportes de productividad.",
    image: "/images/project-3.jpg",
    technologies: ["Next.js", "Prisma", "tRPC", "Tailwind", "Supabase"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    featured: false,
  },
  {
    title: "Analytics Dashboard",
    description:
      "Dashboard de analiticas con visualizacion de datos interactiva, filtros avanzados, exportacion de reportes y actualizacion en tiempo real.",
    image: "/images/project-4.jpg",
    technologies: ["React", "D3.js", "Express", "Redis", "Docker"],
    githubUrl: "https://github.com",
    demoUrl: "https://demo.com",
    featured: false,
  },
]

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 80 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 88 },
      { name: "Python", level: 75 },
      { name: "PostgreSQL", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "REST / GraphQL", level: 85 },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git / GitHub", level: 92 },
      { name: "Docker", level: 75 },
      { name: "AWS / Vercel", level: 80 },
      { name: "Figma", level: 70 },
      { name: "CI/CD", level: 78 },
    ],
  },
]

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: "github" as const,
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: "linkedin" as const,
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: "twitter" as const,
  },
  {
    name: "Email",
    url: "mailto:carlos@mendoza.dev",
    icon: "mail" as const,
  },
]

export const FOOTER = {
  text: "Disenado y desarrollado con",
  name: PERSONAL_INFO.name,
  year: new Date().getFullYear(),
}
