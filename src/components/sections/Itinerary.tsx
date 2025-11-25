import Image from "next/image";

const items = [
  {
    id: 1,
    title: "City Tour",
    image: "/city.jpg",
  },
  {
    id: 2,
    title: "VIP Lounge Access",
    image: "/vip.avif",
  },
  {
    id: 3,
    title: "Behind The Scenes",
    image: "/bhind.png",
  },
  {
    id: 4,
    title: "Premium Dining",
    image: "/hotel.png",
  },
  {
    id: 5,
    title: "Merchandise Pack",
    image: "/merchandise.jpg",
  },
];

export default function Itinerary() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4 text-center">
          Sample <span className="text-orange-500">Itinerary</span> & Add-Ons
        </h2>

        <p className="text-gray-600 mb-10 text-center max-w-2xl mx-auto">
          Enhance your trip with these exclusive experiences and premium add-ons.
        </p>

        {/* Horizontal Scroll */}
        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">

          {items.map((item) => (
            <div
              key={item.id}
              className="min-w-[280px] bg-white rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover rounded-t-xl"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <a
                  href="#lead"
                  className="inline-block text-orange-500 font-medium hover:underline"
                >
                  Add to my trip →
                </a>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
