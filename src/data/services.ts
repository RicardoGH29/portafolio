import { Service } from '@/types';

export const services: Service[] = [
    {
        title: 'Desarrollo Full Stack',
        description: 'Aplicaciones web completas con las tecnologías más modernas. Desde el frontend hasta el backend, bases de datos y despliegue.',
        icon: '💻',
        features: ['React / Next.js', 'Node.js / Python', 'MongoDB / PostgreSQL', 'Despliegue en la nube'],
    },
    {
        title: 'Agentes de IA',
        description: 'Desarrollo de agentes inteligentes con LangChain y OpenAI que automatizan tareas complejas y toman decisiones basadas en datos.',
        icon: '🧠',
        features: ['LangChain Agents', 'OpenAI GPT-4', 'RAG Systems', 'Embeddings & NLP'],
    },
    {
        title: 'Chatbots & Voice AI',
        description: 'Chatbots conversacionales y sistemas de voz AI para atención al cliente automatizada en múltiples plataformas.',
        icon: '🤖',
        features: ['WhatsApp / Telegram Bots', 'Voice AI (Llamadas)', 'NLP Avanzado', 'Integración con CRMs'],
    },
    {
        title: 'Automatización con n8n',
        description: 'Workflows de automatización empresarial que conectan servicios, eliminan tareas repetitivas y optimizan procesos.',
        icon: '⚡',
        features: ['Workflows n8n', 'Integración de APIs', 'Automatización de Marketing', 'Cron Jobs & Webhooks'],
    },
    {
        title: 'Web Scraping',
        description: 'Extracción automatizada de datos de cualquier sitio web con sistemas robustos anti-bloqueo y almacenamiento inteligente.',
        icon: '🕷️',
        features: ['Scrapy / Selenium', 'Puppeteer / Playwright', 'Anti-Bot Bypass', 'Data Pipeline'],
    },
    {
        title: 'Consultoría Técnica',
        description: 'Asesoría en arquitectura de software, elección de stack tecnológico e implementación de soluciones escalables.',
        icon: '🎯',
        features: ['Arquitectura de Software', 'Code Review', 'Optimización', 'Mentoring Técnico'],
    },
];
