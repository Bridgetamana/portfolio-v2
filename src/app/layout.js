import { Inter } from "next/font/google";
import ClientLayout from "./clientLayout";
import "./globals.css";

export const metadata = {
  title: "Bridget Amana | Frontend Developer",
  description: "Frontend developer with extensive knowledge of JavaScript, web technologies, and cross platform development.",
  authors: [{ name: "Bridget Amana" }],
  creator: "Bridget Amana",
  openGraph: {
    title: "Bridget Amana | Frontend Developer",
    description: "Explore the work of Bridget Amana, a frontend developer focused on building responsive, high-performance web applications with React and Next.js.",
    url: "https://www.bridgetamana.tech/",
    siteName: "Bridget Amana Portfolio",
    images: [
      {
        url: "https://www.bridgetamana.tech/opengraph-image.jpeg", 
        width: 1100,
        height: 660,
        alt: "Bridget Amana Portfolio",
      },
    ],
    type: "website",
  },
};

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
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <ClientLayout>{children}</ClientLayout>
    </html>
  );
}
