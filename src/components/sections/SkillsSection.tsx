'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { skills } from '@/data/skills';

export default function SkillsSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="skills" className="section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Title */}
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Stack <span className="gradient-text">Tecnológico</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Tecnologías y herramientas que domino para crear soluciones completas e innovadoras.
                    </p>
                </AnimatedSection>

                {/* Skills Grid */}
                <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skills.map((category, idx) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.08 }}
                            className="card-glass rounded-2xl p-6"
                        >
                            <div className="flex items-center gap-3 mb-5">
                                <span className="text-2xl">{category.icon}</span>
                                <h3 className="font-semibold text-base">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span key={skill} className="tech-badge">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
