"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { Menu, X } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => pathname === path;

  const menuItems = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Skill", path: "/skill" },
    { title: "Projects", path: "/projects" },
    { title: "Blog", path: "/blog" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed w-full top-0 z-50 py-4 px-8 bg-background/80 backdrop-blur-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:hidden">
          <Logo />
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        <nav className="hidden md:flex items-center justify-between flex-1">
          <div className="mx-6">
            <Logo />
          </div>
          <div className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={`menu-item ${isActive(item.path) ? "active" : ""}`}
              >
                {item.title}
              </Link>
            ))}
          </div>
          <Link
            href="/contact"
            className="relative z-10 px-5 py-2 font-light transition-colors cutout-button"
          >
            Contact
          </Link>
        </nav>
        <div
          className={`fixed inset-0 bg-background transition-transform duration-300 ease-in-out md:hidden ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } z-40 flex items-center justify-center`}
        >
          <nav className="flex flex-col items-center space-y-6">
            <Logo />
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`text-xl menu-item ${
                  isActive(item.path) ? "active" : ""
                }`}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href="/contact"
              className="text-xl menu-item"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}