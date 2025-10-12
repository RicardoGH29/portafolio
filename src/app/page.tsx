import { Github, Linkedin, Mail } from "lucide-react";
import { IconButton } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import ProjectCards from "@/components/home/ProjectCards";
import ContactSection from "@/components/home/ContactSection";
import AboutSection from "@/components/home/AboutSection";
import { projects } from "@/data/projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 text-center bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4 text-gray-900">
            Ricardo Gonzalez Hernandez
          </h1>
          <p className="text-2xl mb-4 text-gray-700">
            Desarrollador Web Full Stack
          </p>
          <p className="text-lg mb-8 text-gray-600 max-w-2xl mx-auto">
            Creando soluciones web innovadoras con tecnologías modernas. 
            Especializado en React, Next.js, Node.js y MongoDB.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://github.com/RicardoGH29"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <IconButton size="medium" className="hover:bg-gray-100">
                <Github className="h-6 w-6" />
              </IconButton>
            </a>
            <a
              href="https://linkedin.com/in/ricardo-gonzalez-hernandez-118473234"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <IconButton size="medium" className="hover:bg-gray-100">
                <Linkedin className="h-6 w-6" />
              </IconButton>
            </a>
            <a 
              href="mailto:ricardogzahdez@gmail.com"
              aria-label="Email"
            >
              <IconButton size="medium" className="hover:bg-gray-100">
                <Mail className="h-6 w-6" />
              </IconButton>
            </a>
            <a
              href="https://wa.me/522383948188"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <IconButton size="medium" className="hover:bg-gray-100">
                <FaWhatsapp className="h-6 w-6" />
              </IconButton>
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Mis Proyectos</h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto">
            Una selección de proyectos que demuestran mis habilidades en desarrollo web full stack
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCards key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection/>
    </div>
  );
}
