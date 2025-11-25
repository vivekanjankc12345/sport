"use client";

import { useEffect } from "react";
import { CheckCircle2, XCircle, X } from "lucide-react";

interface ToastProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  type,
  isVisible,
  onClose,
  duration,
}: ToastProps) {
  // Error messages should show longer
  const defaultDuration = type === "error" ? 5000 : 3000;
  const displayDuration = duration || defaultDuration;

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, displayDuration);

      return () => clearTimeout(timer);
    }
  }, [isVisible, displayDuration, onClose]);

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed top-4 right-4 md:top-6 md:right-6 z-50
        flex items-center gap-3 px-4 py-3 rounded-lg shadow-lg
        animate-slide-in-right
        ${type === "success" ? "bg-green-500" : "bg-red-500"}
        text-white min-w-[280px] max-w-md
      `}
    >
      {type === "success" ? (
        <CheckCircle2 size={20} className="flex-shrink-0" />
      ) : (
        <XCircle size={20} className="flex-shrink-0" />
      )}
      <p className="flex-1 text-sm font-medium">{message}</p>
      <button
        onClick={onClose}
        className="flex-shrink-0 hover:opacity-80 transition-opacity"
        aria-label="Close toast"
      >
        <X size={18} />
      </button>
    </div>
  );
}

