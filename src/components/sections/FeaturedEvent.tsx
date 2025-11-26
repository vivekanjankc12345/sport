"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AnimatedSection from "@/components/ui/AnimatedSection";
import { scrollToSection } from "@/utils";

const featuredEvents = [
  {
    id: 1,
    title: "F1 Japanese Grand Prix 🇯🇵",
    image: "/japan.webp",
    desc: "Experience the thrill of Formula 1 at the legendary Suzuka Circuit. Premium seats, luxury hotel, VIP experiences and full travel support included.",
  },
  {
    id: 2,
    title: "FIFA World Cup Final 🏆",
    image: "/event1.avif",
    desc: "Watch football history being made live in world-class stadiums with premium seating and stay.",
  },
  {
    id: 3,
    title: "NBA Finals USA 🇺🇸",
    image: "/event2.jpg",
    desc: "Enjoy courtside action with premium hospitality and 5-star accommodation included.",
  },
  {
    id: 4,
    title: "Wimbledon Final 🎾",
    image: "/event3.jpg",
    desc: "Experience the elegance of Wimbledon with premium tickets and luxury stay.",
  },
];

export default function FeaturedEvent() {
  return (
    <section id="featured" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section title */}
        <AnimatedSection>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">
              Featured <span className="text-orange-500">Event</span>
            </h2>
            <a href="#" className="text-sm text-slate-500 hover:underline">
              More items to browse →
            </a>
          </div>
        </AnimatedSection>

        {/* SLIDER - SAME CARD DESIGN */}
        <AnimatedSection delay={100}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            slidesPerView={1}     // ✅ ONLY 1 CARD
            spaceBetween={30}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000 }}
            className="pb-10"
          >
            {featuredEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <div className="grid md:grid-cols-2 gap-10 items-center bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">

                  {/* Image */}
                  <div className="relative h-[300px] md:h-full overflow-hidden">
                    <Image
                      src={event.image}
                      alt={event.title}
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
                      {event.title}
                    </h3>

                    <p className="text-gray-600 mb-6">
                      {event.desc}
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
              </SwiperSlide>
            ))}
          </Swiper>
        </AnimatedSection>

      </div>
    </section>
  );
}
