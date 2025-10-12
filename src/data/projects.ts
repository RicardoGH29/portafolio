export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sistema de Gestión de Portafolio",
    description: "Aplicación web completa con Next.js 14, utilizando React Server Components, MongoDB para base de datos y Docker para despliegue.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
    technologies: ["Next.js", "React", "TypeScript", "MongoDB", "Docker"],
    githubUrl: "https://github.com/RicardoGH29/portafolio",
  },
  {
    id: 2,
    title: "API REST con Node.js",
    description: "Backend robusto desarrollado con Node.js, Express y MongoDB, implementando autenticación JWT y arquitectura escalable.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=500&h=300&fit=crop",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
  },
  {
    id: 3,
    title: "Aplicación Full Stack",
    description: "Desarrollo de aplicación completa utilizando stack MERN, con funcionalidades CRUD, autenticación y panel de administración.",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500&h=300&fit=crop",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
  },
];
