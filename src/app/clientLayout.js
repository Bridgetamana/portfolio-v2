"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollArrow from "@/components/ScrollArrow";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return (
        <body className="min-h-screen flex flex-col bg-background text-foreground">
            <Header />
            <main className="flex-1 flex">
                {children}
            </main>
            <Footer />
            <ScrollArrow position={pathname === '/' ? 'center' : 'bottom-left'} />
        </body>
    );
}