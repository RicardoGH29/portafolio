import "./globals.css";
import ThemeRegistry from "@/utils/MIU/ThemeRegistry";
import React from "react";

// export const metadata = {
//   title: "Ricardo Gonzalez Hernandez",
//   description: "Desarrollador Web Full Stack",
// };
export const metadata = {
    title: "test2",
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
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
