import type { Metadata } from "next";
import { Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/src/components/organisms/header";
import Footer from "@/src/components/organisms/footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Triana | Diseño y Construcción",
  description:
    "Empresa dedicada al diseño y construcción de proyectos residenciales y comerciales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${geistMono.variable} antialiased max-w-screen relative background`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
