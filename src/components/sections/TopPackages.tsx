"use client";
import React from "react";
import Image from "next/image";
import { packagesData } from "../../data/packages";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TopPackages() {
  return (
    <section id="packages" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <AnimatedSection>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            TOP <span className="text-orange-500">PACKAGES</span>
          </h2>
          <a href="#" className="text-sm text-slate-500 hover:underline">
            More items to browse →
          </a>
        </div>
      </AnimatedSection>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {packagesData?.map((p) => (
          <article
            key={p.id}
            className="
              bg-white rounded-lg shadow-sm overflow-hidden 
              border border-slate-100 
              hover:shadow-xl hover:scale-105 hover:border-orange-500
              transition-all duration-300 cursor-pointer
              group
            "
          >
            {/* Image */}
            <div className="relative w-full h-48 overflow-hidden">
              <Image
                src={p.img}
                alt={p.title}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>

            {/* Body */}
            <div className="p-4">
              <h3 className="text-lg font-semibold text-slate-900 mb-1 group-hover:text-orange-500 transition-colors">
                {p.title}
              </h3>

              <p className="text-sm text-slate-600 mb-3">
                Starting at <span className="font-semibold">{p.starting}</span>
              </p>

              {/* CTA BUTTON */}
              <button className="
                w-full mt-2 bg-black text-white py-2 rounded-md 
                text-sm font-medium 
                hover:bg-orange-500 hover:scale-105
                transition-all duration-300
              ">
                Book Now
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
