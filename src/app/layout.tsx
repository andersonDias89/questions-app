import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Question App",
  description: "Meu Aplicativo de Perguntas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
