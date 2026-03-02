'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '@/components/ui/AnimatedSection';

const stats = [
    { value: '3+', label: 'Años de Experiencia' },
    { value: '11+', label: 'Proyectos Completados' },
    { value: '8+', label: 'Categorías Tech' },
    { value: '100%', label: 'Compromiso' },
];

const highlights = [
    { icon: '🧠', title: 'IA & Machine Learning', desc: 'Experiencia práctica con LangChain, OpenAI, RAG, NLP y embeddings en proyectos reales.' },
    { icon: '💻', title: 'Full Stack Development', desc: 'Aplicaciones completas con React, Next.js, Node.js y diferentes bases de datos.' },
    { icon: '⚡', title: 'Automatización', desc: 'Workflows con n8n, web scraping y chatbots integrados con WhatsApp y Telegram.' },
];

export default function AboutSection() {
    const [statsRef, statsInView] = useInView({ triggerOnce: true, threshold: 0.3 });

    return (
        <section id="sobre-mi" className="section-padding section-alt-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Title */}
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Sobre <span className="gradient-text">Mí</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Desarrollador apasionado por resolver problemas reales con tecnología moderna, siempre en constante aprendizaje.
                    </p>
                </AnimatedSection>

                {/* Bio + Stats Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16">
                    {/* Bio */}
                    <AnimatedSection className="lg:col-span-3" delay={0.1}>
                        <div className="card-glass rounded-2xl p-8">
                            <p className="text-base leading-relaxed text-muted mb-4">
                                Soy un <strong className="text-foreground">Desarrollador Full Stack</strong> con experiencia práctica en
                                <strong className="text-foreground"> Inteligencia Artificial</strong> y más de 3 años construyendo aplicaciones
                                web y soluciones que integran IA.
                            </p>
                            <p className="text-base leading-relaxed text-muted mb-4">
                                He trabajado en proyectos que van desde plataformas e-commerce completas
                                hasta sistemas de matching con NLP, chatbots conversacionales con RAG,
                                y automatización de procesos empresariales con n8n.
                            </p>
                            <p className="text-base leading-relaxed text-muted">
                                Me apasiona aprender nuevas tecnologías y resolver problemas complejos. Estoy
                                constantemente explorando herramientas y busco proyectos desafiantes donde
                                pueda aplicar <strong className="text-foreground">IA, automatización y desarrollo web</strong> para
                                crear soluciones con impacto real.
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Stats */}
                    <div ref={statsRef} className="lg:col-span-2 grid grid-cols-2 gap-4">
                        {stats.map((stat, idx) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={statsInView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: idx * 0.1 }}
                                className="card-glass rounded-2xl p-6 text-center"
                            >
                                <div className="text-3xl sm:text-4xl font-bold gradient-text mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-xs text-muted">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {highlights.map((item, idx) => (
                        <AnimatedSection key={item.title} delay={idx * 0.15}>
                            <div className="card-glass rounded-2xl p-6 text-center">
                                <span className="text-4xl mb-4 block">{item.icon}</span>
                                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    );
}
