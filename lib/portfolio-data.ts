// ============================================================
// PORTFOLIO DATA - Edit this file to update your portfolio info
// ============================================================

export const PERSONAL_INFO = {
  name: "Nelson Avellaneda",
  title: "Full-Stack analyst and Developer",
  subtitle: "Construyo experiencias digitales excepcionales",
  description:
    "Analista y Desarrollador de Software con experiencia en el desarrollo de soluciones escalables en frontend, backend y móvil, enfocado en buenas prácticas, rendimiento y aplicaciones eficientes orientadas a resultados.",
  email: "nelsonavellanedasanabria@gmail.com",
  location: "Bogotá, Colombia",
  availability: "Disponible para proyectos freelance",
  resumeUrl: "https://drive.google.com/file/d/1PGDY3vBER9wCFGK7ofemnDF25KKXEnPk/view?usp=drivesdk",
}

export const ABOUT = {
  paragraphs: [
    "Soy Analista y Desarrollador de Software con experiencia en el diseño, desarrollo e implementación de soluciones tecnológicas modernas y escalables. Me especializo en la construcción de aplicaciones web y móviles, abarcando tanto el frontend como el backend, así como la integración eficiente de servicios y bases de datos.",
    "A lo largo de mi proceso, he trabajado con diversas tecnologías y herramientas que me permiten desarrollar aplicaciones funcionales, mantenibles y centradas en la experiencia del usuario. Tengo experiencia en la creación de interfaces intuitivas, consumo de APIs, gestión de datos y optimización del rendimiento de las aplicaciones.",
    "Me caracterizo por mi capacidad de adaptación a nuevos entornos tecnológicos, pensamiento analítico y enfoque en la resolución de problemas. Busco constantemente mejorar mis habilidades y aportar soluciones que generen valor real, combinando buenas prácticas de desarrollo con un enfoque orientado a resultados.",
  ],
  stats: [
    { label: "Años de experiencia", value: "1+" },
    { label: "Proyectos completados", value: "5+" },
    { label: "Clientes satisfechos", value: "25+" },
    { label: "Contribuciones OSS", value: "30+" },
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
    title: "Calculadora basica (Primer Proyecto) ",
    description:
      "Calculadora interactiva basica hecha con lenguajes basicos y desplegada en Vercel, con funcionalidades de suma, resta, multiplicacion y division.",
    image: "/images/project-1.jpg",
    technologies: [ "HTML", "CSS", "JavaScript", "Vercel"],
    githubUrl: "https://github.com/nelson-avellaneda-sanabria/calculadora",
    demoUrl: "https://calculadora-liard-nine.vercel.app/",
    featured: true,
  },
  {
    title: "En desarrollo: Chat Inteligente",
    description:
      "Aplicacion de chat inteligente con procesamiento de lenguaje natural, respuestas en tiempo real y soporte multilenguaje.",
    image: "/images/project-2.jpg",
    technologies: ["React", "Node.js", "OpenAI", "WebSocket", "MongoDB"],
   // githubUrl: "...",
   // demoUrl: "...",
    featured: true,
  },
 // {
 //   title: "Task Management App",
 //   description:
 //     "Aplicacion de gestion de tareas con tableros Kanban, asignacion de equipos, notificaciones en tiempo real y reportes de productividad.",
 //   image: "/images/project-3.jpg",
 //   technologies: ["Next.js", "Prisma", "tRPC", "Tailwind", "Supabase"],
 //   githubUrl: "https://github.com",
 //   demoUrl: "https://demo.com",
 //   featured: false,
 // }
 // {
 //   title: "Analytics Dashboard",
 //   description:
 //     "Dashboard de analiticas con visualizacion de datos interactiva, filtros avanzados, exportacion de reportes y actualizacion en tiempo real.",
 //   image: "/images/project-4.jpg",
 //   technologies: ["React", "D3.js", "Express", "Redis", "Docker"],
 //   githubUrl: "https://github.com",
 //   demoUrl: "https://demo.com",
 //   featured: false,
 // },
]

export const SKILLS = [
  {
    category: "Frontend",
    items: [
      { name: "React / Next.js", level: 85 },
      { name: "TypeScript", level: 80 },
      { name: "Tailwind CSS", level: 70 },
      { name: "Framer Motion", level: 80 },
      { name: "HTML / CSS", level: 95 },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Python", level: 85 },
      { name: "PostgreSQL", level: 60 },
      { name: "MongoDB", level: 85 },
      { name: "REST / GraphQL", level: 85 },
    ],
  },
  {
    category: "Herramientas",
    items: [
      { name: "Git / GitHub", level: 95 },
      { name: "Docker", level: 70 },
      { name: "AWS / Vercel", level: 65 },
      { name: "Figma", level: 60 },
      { name: "CI/CD", level: 55 },
    ],
  },
]

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/nelson-avellaneda-sanabria",
    icon: "github" as const,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/nelson-avellaneda-sanabria/",
    icon: "linkedin" as const,
  },
  {
    name: "Email",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=nelsonavellanedasanabria@gmail.com",
    icon: "mail" as const,
  },
]

export const FOOTER = {
  text: "Disenado y desarrollado con",
  name: PERSONAL_INFO.name,
  year: new Date().getFullYear(),
}
