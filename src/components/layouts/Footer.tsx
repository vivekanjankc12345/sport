"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { scrollToSection } from "@/utils";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-16 pb-10 mt-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-4 gap-8 md:gap-12">
        
        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Sports<span className="text-orange-500">Trips</span>
          </h3>

          <p className="text-sm leading-relaxed text-gray-400">
            Premium sports travel experiences across the globe. We plan, you enjoy.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <Link 
                href="#packages" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("packages");
                }}
                className="hover:text-orange-500 transition-colors"
              >
                Packages
              </Link>
            </li>
            <li>
              <Link 
                href="#featured" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("featured");
                }}
                className="hover:text-orange-500 transition-colors"
              >
                Featured Events
              </Link>
            </li>
            <li>
              <Link 
                href="#why" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("why");
                }}
                className="hover:text-orange-500 transition-colors"
              >
                Why Choose Us
              </Link>
            </li>
            <li>
              <Link 
                href="#lead" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("lead");
                }}
                className="hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              <span>+91 99999 99999</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-orange-500" />
              <span>info@sportstrips.com</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} className="text-orange-500" />
              <span>Global Offices</span>
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="text-white font-semibold mb-4">Follow Us</h4>

          <div className="flex gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer group"
              aria-label="Facebook"
            >
              <Facebook size={18} className="group-hover:text-white" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer group"
              aria-label="Instagram"
            >
              <Instagram size={18} className="group-hover:text-white" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer group"
              aria-label="Twitter"
            >
              <Twitter size={18} className="group-hover:text-white" />
            </a>

            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-gray-500 flex items-center justify-center hover:bg-orange-500 hover:border-orange-500 transition cursor-pointer group"
              aria-label="YouTube"
            >
              <Youtube size={18} className="group-hover:text-white" />
            </a>
          </div>
        </div>

      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SportsTrips. All rights reserved.
      </div>
    </footer>
  );
}
