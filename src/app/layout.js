import { Inter } from "next/font/google";
import ClientLayout from "./clientLayout";
import "./globals.css";

export const metadata = {
  title: "Bridget Amana | Frontend Developer",
  description: "Frontend developer with extensive knowledge of JavaScript, React, Next.js, and modern web technologies. Specializing in responsive design and cross-platform development.",
  keywords: ["Frontend Developer", "React Developer", "Next.js", "JavaScript", "Web Development", "UI/UX", "Responsive Design"],
  authors: [{ name: "Bridget Amana" }],
  creator: "Bridget Amana",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bridget Amana | Frontend Developer",
    description: "Explore the work of Bridget Amana, a frontend developer focused on building responsive, high-performance web applications with React and Next.js.",
    url: "https://www.bridgetamana.tech/",
    siteName: "Bridget Amana Portfolio",
    images: [
      {
        url: "/opengraph-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Bridget Amana - Frontend Developer Portfolio",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bridget Amana | Frontend Developer",
    description: "Frontend developer specializing in React, Next.js, and modern web technologies",
    creator: "@bridget_amana",
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
