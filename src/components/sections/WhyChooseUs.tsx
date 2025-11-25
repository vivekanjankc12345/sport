"use client";

import { stats } from "@/data/stats";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function WhyChooseUs() {
  return (
    <section id="why" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-4">
            Why <span className="text-orange-500">Choose Us</span>
          </h2>

          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            We offer premium sports travel experiences trusted by thousands of fans worldwide.
          </p>
        </AnimatedSection>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <AnimatedSection key={item.id} delay={index * 100}>
              <div
                className="
                  bg-white rounded-xl shadow-md p-8 
                  hover:shadow-xl hover:scale-105 hover:border-orange-500
                  border border-transparent
                  transition-all duration-300 cursor-pointer
                "
              >
                <div className="text-4xl font-bold text-orange-500 mb-2">
                  {item.value}
                </div>

                <h4 className="font-semibold text-gray-800 mb-1">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-600">
                  {item.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

      </div>
    </section>
  );
}
