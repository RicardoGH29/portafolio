import { Github, Linkedin, Mail } from "lucide-react"
import {Button, IconButton} from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import React from "react";
import ProjectCards from "@/components/home/ProjectCards";

export default function Portfolio() {

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Hero Section */}
            <section className="py-20 text-center">
                <h1 className="text-4xl font-bold mb-4">Ricardo Gonzalez Hernandez</h1>
                <p className="text-xl mb-8">Desarrollador Web Full Stack</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/RicardoGH29" target="_blank" rel="noopener noreferrer">
                        <IconButton size="small">
                            <Github className="h-4 w-4"/>
                        </IconButton>
                    </a>
                    <a href="https://linkedin.com/in/ricardo-gonzalez-hernandez-118473234" target="_blank" rel="noopener noreferrer">
                        <IconButton size="small">
                            <Linkedin className="h-4 w-4"/>
                        </IconButton>
                    </a>
                    <a href="mailto:ricardogzahdez@gmail.com">
                        <IconButton size="small">
                            <Mail className="h-4 w-4"/>
                        </IconButton>
                    </a>
                    <a href="https://wa.me/522383948188" target="_blank" rel="noopener noreferrer">
                        <IconButton size="small">
                            <FaWhatsapp className="h-4 w-4"/>
                        </IconButton>
                    </a>
                </div>
            </section>

            {/* Projects Section */}
            <section className="py-20">
                <h2 className="text-3xl font-bold text-center mb-10">Mis Proyectos</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                    {[1, 2, 3].map((project) => (
                        <ProjectCards key={project}/>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-md mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-10">Contáctame</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Nombre"
                            className="w-full p-2 rounded-md border border-input bg-white"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 rounded-md border border-input bg-white"
                        />
                        <textarea
                            placeholder="Mensaje"
                            rows={4}
                            className="w-full p-2 rounded-md border border-input bg-white"
                        ></textarea>
                        <Button className="w-full bg-black text-white">Enviar Mensaje</Button>
                    </form>
                </div>
            </section>
        </div>
    )
}