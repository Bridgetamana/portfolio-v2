import { Inter } from "next/font/google";
import "./globals.css";
import ClientLayout from "./clientLayout";

export const metadata = {
  title: "Bridget Amana",
  description: "portfolio",
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
