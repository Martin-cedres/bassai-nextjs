import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Script from "next/script";
// app/layout.tsx o app/globals.css
import "bootstrap/dist/css/bootstrap.min.css";



import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import BootstrapScripts from "./components/BootstrapScripts";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Productos Bassai",
  description: "Limpieza concentrada para tu hogar y negocio",
  icons: {
    icon: "/favicon.png",
  },
};





export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        {children}
        <a
          href="https://wa.me/59898615074"
          className="whatsapp-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/whatsapp-icon.png" alt="WhatsApp" width={60} height={60} />
        </a>
       
        {/* Footer visible en todas las páginas */}
        <footer className="text-center text-muted py-3">
          © 2025 Bassai San José · Distribuidor oficial · Todos los derechos reservados
        </footer>


        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />


      </body>
    </html>
  );
}
