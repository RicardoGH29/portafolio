'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { timeline } from '@/data/experience';

export default function ExperienceSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="experiencia" className="section-padding">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                {/* Title */}
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Mi <span className="gradient-text">Trayectoria</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Evolución profesional a través de proyectos desafiantes e innovadores.
                    </p>
                </AnimatedSection>

                {/* Timeline */}
                <div ref={ref} className="relative">
                    {/* Line */}
                    <div className="timeline-line hidden md:block" />

                    <div className="space-y-12">
                        {timeline.map((item, idx) => {
                            const isLeft = idx % 2 === 0;
                            return (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                                    className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Content card */}
                                    <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                                        <div className="card-glass rounded-2xl p-6">
                                            <div className={`flex items-center gap-2 mb-2 ${isLeft ? 'md:justify-end' : ''}`}>
                                                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-[var(--badge-bg)] text-primary-400">
                                                    {item.period}
                                                </span>
                                                <span className={`text-xs px-2 py-0.5 rounded-full ${item.type === 'work'
                                                        ? 'bg-green-500/10 text-green-400'
                                                        : 'bg-blue-500/10 text-blue-400'
                                                    }`}>
                                                    {item.type === 'work' ? 'Trabajo' : 'Proyecto'}
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                                            <p className="text-sm text-muted leading-relaxed mb-3">
                                                {item.description}
                                            </p>
                                            <div className={`flex flex-wrap gap-1.5 ${isLeft ? 'md:justify-end' : ''}`}>
                                                {item.technologies.map((tech) => (
                                                    <span key={tech} className="tech-badge !text-[10px]">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Dot (centered) */}
                                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                                        <div className="timeline-dot" />
                                    </div>

                                    {/* Mobile dot */}
                                    <div className="md:hidden absolute left-[20px] top-0">
                                        <div className="timeline-dot" />
                                    </div>

                                    {/* Spacer for opposite side */}
                                    <div className="hidden md:block w-[calc(50%-2rem)]" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
