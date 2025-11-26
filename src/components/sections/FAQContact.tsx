"use client";

import { useState } from "react";
import { ChevronRight, HelpCircle, MessageCircle, Plus } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import Button from "@/components/ui/Button";
import { FAQ_ITEMS } from "@/constants";
import { scrollToSection } from "@/utils";
import type { FAQItem } from "@/types";

export default function FAQContact() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Header */}
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-orange-500">Questions</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our sports travel packages
            </p>
          </div>
        </AnimatedSection>

        {/* FAQ List */}
        <AnimatedSection delay={100}>
          <div className="space-y-4 mb-12">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md hover:border-orange-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors group"
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center group-hover:bg-orange-200 transition-colors">
                      {index === 0 ? (
                        <HelpCircle size={20} className="text-orange-500" />
                      ) : index === 1 ? (
                        <Plus size={20} className="text-orange-500" />
                      ) : (
                        <MessageCircle size={20} className="text-orange-500" />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {item.title}
                      </h3>
                      {item.subtitle && (
                        <p className="text-sm text-gray-500">
                          {item.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                  <ChevronRight
                    size={20}
                    className={`text-gray-400 flex-shrink-0 ml-4 transition-transform duration-300 ${openIndex === index ? "rotate-90" : ""} group-hover:text-orange-500`}
                  />
                </button>

                {/* Expanded Content */}
                {openIndex === index && (
                  <div className="px-5 md:px-6 pb-5 md:pb-6 pt-0">
                    <div className="pl-14">
                      <div className="pt-4 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed">
                          {item.content}
                        </p>
                        {index === 2 && (
                          <a
                            href="#lead"
                            onClick={(e) => {
                              e.preventDefault();
                              scrollToSection("lead");
                            }}
                            className="inline-block mt-4"
                          >
                            <Button size="sm" variant="primary">
                              Contact Support
                            </Button>
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* CTA to Contact Form */}
        <AnimatedSection delay={200}>
          <div className="text-center bg-white rounded-xl p-8 shadow-sm border border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? Get in touch with our team.
            </p>
            <a
              href="#lead"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("lead");
              }}
            >
              <Button variant="primary" size="lg">
                Contact Us
              </Button>
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

