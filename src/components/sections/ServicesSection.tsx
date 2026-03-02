'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import { services } from '@/data/services';

export default function ServicesSection() {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    return (
        <section id="servicios" className="section-padding section-alt-bg">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Title */}
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Mis <span className="gradient-text">Servicios</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        Soluciones tecnológicas adaptadas a las necesidades de tu negocio.
                    </p>
                </AnimatedSection>

                {/* Services Grid */}
                <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {services.map((service, idx) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="card-glass rounded-2xl p-8 group"
                        >
                            <span className="text-5xl mb-5 block">{service.icon}</span>
                            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-400 transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-sm text-muted leading-relaxed mb-5">
                                {service.description}
                            </p>
                            <ul className="space-y-2">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-2 text-sm text-muted">
                                        <svg className="w-4 h-4 text-primary-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <AnimatedSection className="text-center" delay={0.3}>
                    <div className="card-glass rounded-2xl p-8 max-w-2xl mx-auto gradient-border">
                        <h3 className="text-2xl font-bold mb-3">
                            ¿Tienes un proyecto en mente?
                        </h3>
                        <p className="text-muted mb-6">
                            Hablemos sobre cómo puedo ayudarte a convertir tu idea en realidad.
                        </p>
                        <a
                            href="#contacto"
                            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:-translate-y-0.5"
                        >
                            Contactar ahora
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
