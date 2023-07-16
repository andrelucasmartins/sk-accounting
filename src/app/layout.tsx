import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header } from "./components/header";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SK Accounting",
  description:
    "A SK Accounting oferecer ao cliente um atendimento diferenciado e especifico para cada segmento de negocio, com uma equipe de profissionais capacitados e experientes, sempre estruturado sobre os pilares do negócio, confiança, credibilidade e qualidade.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
