"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/constants";
import { scrollToSection } from "@/utils";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-300
        ${scrolled ? "bg-black/95 backdrop-blur-md shadow-lg" : "bg-transparent"}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="text-white font-bold text-lg md:text-xl tracking-wide hover:text-orange-400 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            SPORTS
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="text-white text-sm hover:text-orange-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <Link
            href="#lead"
            onClick={(e) => handleNavClick(e, "lead")}
            className="hidden md:block bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-sm text-white font-medium transition-colors"
          >
            Enquire Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          <div className="bg-black/95 backdrop-blur-md py-4 space-y-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.sectionId)}
                className="block text-white px-4 py-2 hover:text-orange-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#lead"
              onClick={(e) => handleNavClick(e, "lead")}
              className="block mx-4 bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-full text-center text-white font-medium transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

