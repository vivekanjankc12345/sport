import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Hero from "../components/sections/Hero";
import TopPackages from "../components/sections/TopPackages";
import FeaturedEvent from "../components/sections/FeaturedEvent";
import WhyChooseUs from "../components/sections/WhyChooseUs";
import HowItWorks from "../components/sections/HowItWorks";
import Itinerary from "../components/sections/Itinerary";
import LeadForm from "../components/sections/LeadForm";
import FAQContact from "../components/sections/FAQContact";
import WhatsAppButton from "../components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">


      {/* HERO SECTION */}
      <Hero />

      {/* TOP PACKAGES */}
      <TopPackages />

      {/* FEATURED EVENT */}
      <FeaturedEvent />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* HOW IT WORKS */}
      <HowItWorks />

      {/* ITINERARY / ADD-ONS */}
      <Itinerary />

      {/* MAIN LEAD FORM */}
      <LeadForm />

      {/* FAQ & CONTACT SECTION */}
      <FAQContact />

      {/* FOOTER */}
      <Footer />

      {/* FLOATING WHATSAPP BUTTON */}
      <WhatsAppButton />

    </main>
  );
}
