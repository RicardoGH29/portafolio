import "./globals.css";
import React from "react";

export const metadata = {
    title: "Ricardo Gonzalez Hernandez - Desarrollador Full Stack",
    description: "Portafolio profesional de Ricardo Gonzalez Hernandez, desarrollador web Full Stack especializado en Next.js, React, Node.js y bases de datos.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
      {children}
      </body>
    </html>
  );
}
