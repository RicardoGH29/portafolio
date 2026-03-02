'use client';

import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection from '@/components/ui/AnimatedSection';
import toast from 'react-hot-toast';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

export default function ContactSection() {
    const [form, setForm] = useState<FormData>({ name: '', email: '', subject: '', message: '' });
    const [sending, setSending] = useState(false);
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error('Por favor completa los campos requeridos.');
            return;
        }
        setSending(true);

        try {
            // EmailJS integration - replace with your own service/template/user IDs
            const emailjs = await import('@emailjs/browser');
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
                {
                    from_name: form.name,
                    from_email: form.email,
                    subject: form.subject || 'Sin asunto',
                    message: form.message,
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
            );
            toast.success('¡Mensaje enviado! Te responderé pronto. 🚀');
            setForm({ name: '', email: '', subject: '', message: '' });
        } catch {
            toast.error('Error al enviar. Intenta por email directo.');
        } finally {
            setSending(false);
        }
    };

    const contactInfo = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                </svg>
            ),
            label: 'Email',
            value: 'ricardogzahdez@gmail.com',
            href: 'mailto:ricardogzahdez@gmail.com',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
            ),
            label: 'LinkedIn',
            value: 'Ricardo González',
            href: 'https://www.linkedin.com/in/ricardo-gonzalez-hernandez-118473234',
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
            ),
            label: 'GitHub',
            value: 'RicardoGH29',
            href: 'https://github.com/RicardoGH29',
        },
    ];

    return (
        <section id="contacto" className="section-padding">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                {/* Title */}
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                        Hablemos de tu <span className="gradient-text">Proyecto</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto">
                        ¿Tienes una idea o necesitas un desarrollador? Envíame un mensaje y te responderé lo antes posible.
                    </p>
                </AnimatedSection>

                <div ref={ref} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
                    {/* Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-3"
                    >
                        <form onSubmit={handleSubmit} className="card-glass rounded-2xl p-8 space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium mb-2">
                                        Nombre <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="contact-name"
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all text-sm"
                                        placeholder="Tu nombre"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium mb-2">
                                        Email <span className="text-red-400">*</span>
                                    </label>
                                    <input
                                        id="contact-email"
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all text-sm"
                                        placeholder="tu@email.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-subject" className="block text-sm font-medium mb-2">Asunto</label>
                                <input
                                    id="contact-subject"
                                    type="text"
                                    value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all text-sm"
                                    placeholder="¿Sobre qué quieres hablar?"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium mb-2">
                                    Mensaje <span className="text-red-400">*</span>
                                </label>
                                <textarea
                                    id="contact-message"
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface-secondary)] border border-[var(--border)] text-foreground placeholder:text-muted/50 focus:outline-none focus:border-primary-400 focus:ring-1 focus:ring-primary-400 transition-all text-sm resize-none"
                                    placeholder="Cuéntame sobre tu proyecto..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={sending}
                                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-primary-500 to-accent-500 text-white font-semibold text-sm hover:shadow-lg hover:shadow-primary-500/25 transition-all hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {sending ? 'Enviando...' : 'Enviar Mensaje 🚀'}
                            </button>
                        </form>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-2 space-y-4"
                    >
                        {contactInfo.map((info) => (
                            <a
                                key={info.label}
                                href={info.href}
                                target={info.href.startsWith('http') ? '_blank' : undefined}
                                rel="noopener noreferrer"
                                className="card-glass rounded-2xl p-5 flex items-center gap-4 group"
                            >
                                <div className="p-3 rounded-xl bg-[var(--badge-bg)] text-primary-400 group-hover:scale-110 transition-transform">
                                    {info.icon}
                                </div>
                                <div>
                                    <div className="text-xs text-muted uppercase tracking-wider">{info.label}</div>
                                    <div className="text-sm font-medium">{info.value}</div>
                                </div>
                            </a>
                        ))}

                        {/* Availability Badge */}
                        <div className="card-glass rounded-2xl p-6 text-center">
                            <div className="flex items-center justify-center gap-2 mb-3">
                                <span className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                                <span className="text-sm font-medium text-green-400">Disponible</span>
                            </div>
                            <p className="text-xs text-muted">
                                Abierto para trabajo freelance, proyectos innovadores y colaboraciones remotas.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
