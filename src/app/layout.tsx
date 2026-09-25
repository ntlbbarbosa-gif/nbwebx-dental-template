import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NBWebX Dental Template",
  description: "Template odontológico reutilizável com site, painel e branding dinâmica.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
