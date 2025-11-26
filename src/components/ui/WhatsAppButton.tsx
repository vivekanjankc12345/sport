"use client";

import { MessageCircle } from "lucide-react";
import { WHATSAPP_CONFIG } from "@/constants";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export default function WhatsAppButton({
  phoneNumber = WHATSAPP_CONFIG.PHONE_NUMBER,
  message = WHATSAPP_CONFIG.DEFAULT_MESSAGE,
}: WhatsAppButtonProps) {
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, "")}?text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-subtle flex items-center justify-center group"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={24} className="group-hover:scale-110 transition-transform" />
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center animate-pulse">
        1
      </span>
    </button>
  );
}

