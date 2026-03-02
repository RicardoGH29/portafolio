'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

export default function HeroSection() {
    return (
        <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--hero-gradient-from)] to-[var(--hero-gradient-to)]" />
            <div className="absolute inset-0 hero-grid opacity-40" />

            {/* Floating Orbs */}
            <div className="orb orb-1" />
            <div className="orb orb-2" />

            <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[var(--badge-bg)] text-primary-400 text-sm font-medium mb-6"
                >
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    Disponible para proyectos
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 leading-tight"
                >
                    Ricardo González{' '}
                    <span className="gradient-text">Hernández</span>
                </motion.h1>

                {/* Typing Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="text-xl sm:text-2xl md:text-3xl font-medium text-muted mb-6 h-10"
                >
                    <TypeAnimation
                        sequence={[
                            'Desarrollador Full Stack',
                            2000,
                            'Desarrollo con IA',
                            2000,
                            'Automatización con n8n',
                            2000,
                            'Chatbots & Voice AI',
                            2000,
                            'Web Scraping & Data',
                            2000,
                        ]}
                        repeat={Infinity}
                        speed={50}
                        className="gradient-text"
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-base sm:text-lg text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    Desarrollo soluciones web con IA, automatización y tecnologías modernas.
                    Me apasiona aprender constantemente y construir productos que resuelven problemas reales.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
                >
                    <a
                        href="#proyectos"
                        className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:-translate-y-0.5"
                    >
                        Ver Proyectos
                    </a>
                    <a
                        href="#contacto"
                        className="px-8 py-3.5 rounded-xl border border-[var(--border)] text-foreground font-semibold text-sm hover:bg-[var(--surface-secondary)] transition-all hover:-translate-y-0.5"
                    >
                        Contactar →
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex justify-center gap-4"
                >
                    {[
                        {
                            href: 'https://github.com/RicardoGH29', label: 'GitHub', icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            )
                        },
                        {
                            href: 'https://www.linkedin.com/in/ricardo-gonzalez-hernandez-118473234', label: 'LinkedIn', icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            )
                        },
                        {
                            href: 'mailto:ricardogzahdez@gmail.com', label: 'Email', icon: (
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                    <polyline points="22,6 12,13 2,6" />
                                </svg>
                            )
                        },
                    ].map((social) => (
                        <a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-xl border border-[var(--border)] text-muted hover:text-foreground hover:border-primary-400 hover:bg-[var(--surface-secondary)] transition-all"
                            aria-label={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 scroll-indicator"
            >
                <a href="#sobre-mi" className="text-muted hover:text-foreground transition-colors" aria-label="Scroll down">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </a>
            </motion.div>
        </section>
    );
}
