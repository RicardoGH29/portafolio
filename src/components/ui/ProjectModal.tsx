'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/types';

interface ProjectModalProps {
    project: Project | null;
    isOpen: boolean;
    onClose: () => void;
}

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                >
                    <motion.div
                        className="modal-content"
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-3">
                                <span className="text-4xl">{project.icon}</span>
                                <div>
                                    <h3 className="text-2xl font-bold" style={{ color: project.accentColor }}>
                                        {project.title}
                                    </h3>
                                    <span className="text-xs font-medium uppercase tracking-wider text-muted">
                                        {project.category === 'ai' ? 'IA & ML' :
                                            project.category === 'fullstack' ? 'Full Stack' :
                                                project.category === 'automation' ? 'Automatización' :
                                                    project.category === 'mobile' ? 'Mobile' : 'Backend'}
                                    </span>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-muted hover:text-foreground transition-colors p-2 rounded-lg hover:bg-[var(--surface-secondary)]"
                                aria-label="Cerrar"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </button>
                        </div>

                        {/* Description */}
                        <p className="text-muted leading-relaxed mb-6">
                            {project.fullDescription}
                        </p>

                        {/* Technologies */}
                        <div className="mb-6">
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: project.accentColor }}>
                                Tecnologías
                            </h4>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech) => (
                                    <span key={tech} className="tech-badge">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Features */}
                        <div>
                            <h4 className="text-sm font-semibold uppercase tracking-wider mb-3" style={{ color: project.accentColor }}>
                                Características Clave
                            </h4>
                            <ul className="space-y-2">
                                {project.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-start gap-2 text-muted text-sm">
                                        <svg
                                            className="w-4 h-4 mt-0.5 flex-shrink-0"
                                            style={{ color: project.accentColor }}
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
