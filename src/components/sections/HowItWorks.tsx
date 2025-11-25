export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Choose Your Sport",
      description:
        "Select from a wide range of premium sports events across the globe.",
    },
    {
      id: 2,
      title: "Customize Your Trip",
      description:
        "Pick travel dates, hotel preferences, and add special experiences.",
    },
    {
      id: 3,
      title: "Confirm & Enjoy",
      description:
        "We handle the planning while you enjoy the unforgettable experience.",
    },
  ];

  return (
    <section id="how" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Title */}
        <h2 className="text-3xl font-bold mb-4">
          How It <span className="text-orange-500">Works</span>
        </h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Three simple steps to start your perfect sports travel journey.
        </p>

        {/* Steps */}
        <div className="relative grid md:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-gray-50 p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              {/* Step number */}
              <div className="absolute -top-6 left-6 bg-orange-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-lg font-bold shadow-lg">
                {step.id}
              </div>

              <h3 className="mt-6 text-xl font-semibold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-600">
                {step.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
