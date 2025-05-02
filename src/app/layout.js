"use client"
import Header from "@/components/Header";
import { Playfair } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollArrow from "@/components/ScrollArrow";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const playfair = Playfair({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  preload: true,
  fallback: ["system-ui", "sans-serif"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <ScrollArrow position={pathname === '/' ? 'center' : 'bottom-left'} />
      </body>
    </html>
  );
}
