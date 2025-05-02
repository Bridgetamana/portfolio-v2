import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-8 px-8 mt-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="text-sm text-muted-foreground mb-4 md:mb-0">
          Copyright © {currentYear} Bridget Amana. All rights reserved.
        </div>

        <div className="flex items-center space-x-2">
          <a href="#" className="social-icon">
            <Facebook className="w-4 h-4" />
          </a>
          <a href="#" className="social-icon">
            <Instagram className="w-4 h-4" />
          </a>
          <a href="#" className="social-icon">
            <Twitter className="w-4 h-4" />
          </a>
          <a href="#" className="social-icon">
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};