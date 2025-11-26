"use client";

import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { scrollToSection } from "@/utils";

export default function FeaturedEvent() {
  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section title */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Featured <span className="text-orange-500">Event</span>
            </h2>
            <a href="#" className="text-sm text-slate-500 hover:underline">
              More items to browse →
            </a>
          </div>
        </AnimatedSection>

        {/* Main featured card */}
        <AnimatedSection delay={100}>
          <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
          {/* Image */}
          <div className="relative h-[300px] md:h-full overflow-hidden">
            <Image
              src="/japan.webp"
              alt="F1 Japan Grand Prix"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="p-10">
            <span className="text-sm uppercase tracking-wider text-orange-500 font-semibold">
              Spotlight Event
            </span>

            <h3 className="text-4xl font-bold mt-3 mb-4">
              F1 Japanese Grand Prix 🇯🇵
            </h3>

            <p className="text-gray-600 mb-6">
              Experience the thrill of Formula 1 at the legendary Suzuka
              Circuit. Premium seats, luxury hotel, VIP experiences and full
              travel support included.
            </p>

            <ul className="text-gray-700 mb-8 space-y-2">
              <li>✅ Flight + Hotel Included</li>
              <li>✅ Premium Race Tickets</li>
              <li>✅ 3 Days Local Experiences</li>
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link
                href="#lead"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("lead");
                }}
                className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition"
              >
                Book Now
              </Link>

              <Link
                href="#packages"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("packages");
                }}
                className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
              >
                View All
              </Link>
            </div>
          </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
