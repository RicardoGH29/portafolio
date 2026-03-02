'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import ProjectModal from '@/components/ui/ProjectModal';
import { projects, projectCategories } from '@/data/projects';
import { Project } from '@/types';

export default function ProjectsSection() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

    const filtered = activeCategory === 'all'
        ? projects
        : projects.filter((p) => p.category === activeCategory);

    return (
        <section id="proyectos" className="section-padding section-alt-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Title */}
                <AnimatedSection className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Mis <span className="gradient-text">Proyectos</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Una selección de proyectos que demuestran mis habilidades en IA, desarrollo full stack y automatización.
                    </p>
                </AnimatedSection>

                {/* Filters */}
                <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12" delay={0.1}>
                    {projectCategories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveCategory(cat.key)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${activeCategory === cat.key
                                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg shadow-primary-500/25'
                                    : 'text-muted hover:text-foreground border border-[var(--border)] hover:border-primary-400'
                                }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </AnimatedSection>

                {/* Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filtered.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.4, delay: idx * 0.08 }}
                            layout
                        >
                            <button
                                onClick={() => setSelectedProject(project)}
                                className="card-glass rounded-2xl p-6 text-left w-full group cursor-pointer"
                            >
                                {/* Icon + Category */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="text-3xl">{project.icon}</span>
                                    <span
                                        className="text-xs font-medium px-2.5 py-1 rounded-full"
                                        style={{
                                            backgroundColor: `${project.accentColor}15`,
                                            color: project.accentColor,
                                        }}
                                    >
                                        {project.category === 'ai' ? 'IA & ML' :
                                            project.category === 'fullstack' ? 'Full Stack' :
                                                project.category === 'automation' ? 'Automatización' :
                                                    project.category === 'mobile' ? 'Mobile' : 'Backend'}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary-400 transition-colors">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-sm text-muted leading-relaxed mb-4 line-clamp-3">
                                    {project.shortDescription}
                                </p>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-1.5">
                                    {project.technologies.slice(0, 4).map((tech) => (
                                        <span key={tech} className="tech-badge !text-[10px] !px-2 !py-0.5">
                                            {tech}
                                        </span>
                                    ))}
                                    {project.technologies.length > 4 && (
                                        <span className="tech-badge !text-[10px] !px-2 !py-0.5">
                                            +{project.technologies.length - 4}
                                        </span>
                                    )}
                                </div>

                                {/* View more */}
                                <div className="mt-4 flex items-center gap-1 text-xs font-medium text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                    Ver detalles
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <ProjectModal
                project={selectedProject}
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </section>
    );
}
