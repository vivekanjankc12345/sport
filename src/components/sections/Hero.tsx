"use client";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import Navbar from "@/components/layouts/Navbar";
import { scrollToSection } from "@/utils";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative w-full overflow-visible">
        <div className="relative min-h-[85vh] md:min-h-[90vh] flex items-center justify-center">
          {/* Background Image */}
          <Image
            src="/mountain.jpg"
            alt="Sports Background"
            fill
            priority
            className="object-cover object-center"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />

          {/* NAVBAR */}
          <Navbar />

          {/* HERO CONTENT */}
          <div className="relative z-20 text-center px-6">
            <h1
              className="text-white font-extrabold leading-tight text-balance
                           text-3xl sm:text-4xl md:text-5xl xl:text-6xl max-w-4xl mx-auto"
            >
              SPORTS TRAVEL <br />
              PACKAGES FOR <br />
              GLOBAL EVENTS
            </h1>

            <p className="mt-4 md:mt-6 text-white/80 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
              Access premium sports travel experiences with customized global
              event packages.
            </p>

            <Link
              href="#lead"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("lead");
              }}
              className="inline-block mt-6 md:mt-8 bg-orange-500 hover:bg-orange-600 px-8 py-3 rounded-full text-white text-sm md:text-base font-medium transition-colors"
            >
              Plan My Trip
            </Link>
          </div>
        </div>
      </section>

      <div className="relative w-full h-32 md:h-40"></div>

      <div className="relative -mt-24 md:-mt-48 mb-16 md:mb-24 px-4 md:px-0 z-30 flex justify-center">
        <div
          className="
            relative rounded-3xl shadow-2xl overflow-hidden
            border border-white/10
            w-full md:w-4xl h-64 sm:h-72 md:h-80
          "
        >
          {/* F1 Background Image */}
          <Image
            src="/japan.webp"
            alt="F1 Japan"
            fill
            className="object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/30" />

          <div className="absolute inset-0 flex flex-col justify-center items-center p-6 sm:p-8 md:p-10 text-white">
            <div className="text-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-wide">
                F1 JAPAN
              </h2>
              <p className="text-white/90 text-sm mt-3 leading-relaxed">
                <span className="block">Pack Asia(5) Box 168-0922</span>
                <span className="block text-white/70 text-xs mt-1">
                  Members: 12 to 80% discount
                </span>
              </p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-auto">
              <Link
                href="#lead"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("lead");
                }}
                className="bg-orange-500 hover:bg-orange-600 rounded-full px-6 py-2 text-white text-sm font-medium transition-colors shadow-lg hover:shadow-xl"
              >
                Register My Interest
              </Link>
           
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
