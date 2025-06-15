import type { Metadata } from "next";
import "./globals.css";
import { CardPage } from "@/components/ui/Cards/CardPage";

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
      <body className="m-auto">
        <CardPage>{children}</CardPage>
      </body>
    </html>
  );
}
