import './globals.css';
import React from 'react';
import { Inter, Fira_Code } from 'next/font/google';
import ThemeProvider from '@/components/ui/ThemeProvider';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
});

export const metadata = {
  title: 'Ricardo González Hernández | Desarrollador Full Stack & Especialista en IA',
  description:
    'Portafolio profesional de Ricardo González Hernández. Desarrollador Full Stack especializado en React, Next.js, Python, IA con LangChain/OpenAI, automatización con n8n, chatbots y Voice AI.',
  keywords: [
    'desarrollador full stack',
    'inteligencia artificial',
    'LangChain',
    'OpenAI',
    'Next.js',
    'React',
    'Node.js',
    'Python',
    'chatbots',
    'automatización',
    'n8n',
    'web scraping',
    'freelance',
  ],
  authors: [{ name: 'Ricardo González Hernández' }],
  openGraph: {
    title: 'Ricardo González Hernández | Full Stack & IA',
    description:
      'Desarrollador Full Stack & Especialista en IA. Creando soluciones innovadoras con tecnología de punta.',
    url: 'https://ricardogonzalez.dev',
    siteName: 'Ricardo González - Portfolio',
    locale: 'es_MX',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ricardo González Hernández | Full Stack & IA',
    description:
      'Desarrollador Full Stack & Especialista en IA. Creando soluciones innovadoras.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        <ThemeProvider>
          {children}
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: 'var(--card-bg)',
                color: 'var(--foreground)',
                border: '1px solid var(--border)',
                borderRadius: '12px',
                fontSize: '14px',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
