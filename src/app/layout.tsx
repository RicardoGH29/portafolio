import "./globals.css";
import React from "react";

// export const metadata = {
//   title: "Ricardo Gonzalez Hernandez",
//   description: "Desarrollador Web Full Stack",
// };
export const metadata = {
    title: "test",
    description: "test",
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
