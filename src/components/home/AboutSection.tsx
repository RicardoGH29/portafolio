import React from "react";
import { skills } from "@/data/skills";

const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Sobre Mí</h2>
        
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4">
            Desarrollador Web Full Stack con experiencia en la creación de aplicaciones 
            web modernas y escalables. Apasionado por aprender nuevas tecnologías y 
            resolver problemas complejos.
          </p>
          <p className="text-lg text-gray-700">
            Especializado en el stack MERN (MongoDB, Express, React, Node.js) y 
            tecnologías modernas como Next.js, TypeScript y Docker.
          </p>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-center mb-8">Habilidades Técnicas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skillCategory, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4 text-center">
                  {skillCategory.category}
                </h4>
                <ul className="space-y-2">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-gray-700 text-sm">
                      • {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
