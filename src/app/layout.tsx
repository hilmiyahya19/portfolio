import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import  Footer  from "@/components/Footer";

// Import semua section
import HomePage from "./page"; // Halaman utama
import AboutPage from "./@about/page";
import PortfolioPage from "./@portfolio/page";
import ContactPage from "./@contact/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hilmi Yahya | Portfolio",
  description: "Personal portfolio built with Next.js, TypeScript, Tailwind, and Framer Motion",
  icons: {
    icon: "/images/hades.jpg",
  },
};

export default function RootLayout() {
  return (
    <html
      lang="en"
      className={`dark ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="bg-dark text-white min-h-screen flex flex-col antialiased font-sans">
        <Navbar />

        {/* Semua section digabung di sini */}
        <main className="flex-grow">
          <section id="home">
            <HomePage />
          </section>
          <section id="about">
            <AboutPage />
          </section>
          <section id="portfolio">
            <PortfolioPage />
          </section>
          <section id="contact">
            <ContactPage />
          </section>
        </main>

        <Footer />
      </body>
    </html>
  );
}
