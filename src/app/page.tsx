import { Github, Linkedin, Mail } from "lucide-react";
import { IconButton } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import ProjectCards from "@/components/home/ProjectCards";
import ContactSection from "@/components/home/ContactSection";

export default function Portfolio() {
  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   const form = event.target;
  //   console.log(form);
  //   return
  //   const data = Object.fromEntries(formData);
  //   try {
  //     const response = fetchDataPostAsync("/api/contact", data);
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Ricardo Gonzalez Hernandez</h1>
        <p className="text-xl mb-8">Desarrollador Web Full Stack</p>
        <div className="flex justify-center space-x-4">
          <a
            href="https://github.com/RicardoGH29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small">
              <Github className="h-4 w-4" />
            </IconButton>
          </a>
          <a
            href="https://linkedin.com/in/ricardo-gonzalez-hernandez-118473234"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small">
              <Linkedin className="h-4 w-4" />
            </IconButton>
          </a>
          <a href="mailto:ricardogzahdez@gmail.com">
            <IconButton size="small">
              <Mail className="h-4 w-4" />
            </IconButton>
          </a>
          <a
            href="https://wa.me/522383948188"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconButton size="small">
              <FaWhatsapp className="h-4 w-4" />
            </IconButton>
          </a>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <h2 className="text-3xl font-bold text-center mb-10">Mis Proyectos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {[1, 2, 3].map((project) => (
            <ProjectCards key={project} />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection/>
    </div>
  );
}
