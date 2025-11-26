"use client";

import { useState } from "react";
import { Input, Textarea } from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Toast from "@/components/ui/Toast";
import AnimatedSection from "@/components/ui/AnimatedSection";
import { useFormWithYup } from "@/hooks/useFormWithYup";
import { leadApi } from "@/lib/api";
import { leadFormSchema } from "@/lib/validators";
import { getErrorMessage } from "@/utils";
import type { LeadFormData } from "@/types";

export default function LeadForm() {
  const [loading, setLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error">("success");

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
  } = useFormWithYup<LeadFormData>(
    {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
    leadFormSchema
  );
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ Run Yup validation FIRST
    const isValid = await validateForm();

    // ✅ If form is invalid, STOP here
    // Errors will show below inputs (not in toast)
    if (!isValid) return;

    try {
      setLoading(true);

      const response = await leadApi.submit(values);

      if (response.success) {
        setToastMessage("Thank you! We will contact you shortly.");
        setToastType("success");
        setShowToast(true);
        resetForm();
      } else {
        setToastMessage(
          response.message || "Failed to submit form. Please try again."
        );
        setToastType("error");
        setShowToast(true);
      }
    } catch (error) {
      console.error("Form submission error:", error);

      const errorMessage = getErrorMessage(error);

      setToastMessage(
        errorMessage.includes("fetch")
          ? "Connection error. Please make sure the server is running"
          : errorMessage
      );
      setToastType("error");
      setShowToast(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <section id="lead" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* LEFT TEXT */}
          <AnimatedSection>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Plan Your <span className="text-orange-500">Dream Trip</span>
              </h2>

              <p className="text-gray-600 mb-6 text-sm md:text-base">
                Fill out the form and our expert travel consultant will connect
                with you shortly.
              </p>

              <ul className="space-y-3 text-gray-700 text-sm md:text-base">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span>
                  Personalized sports packages
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span>
                  Flights, hotels & tickets included
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✔</span>
                  24x7 support & consultation
                </li>
              </ul>
            </div>
          </AnimatedSection>

          {/* FORM */}
          <AnimatedSection delay={100}>
            <form
              onSubmit={handleSubmit}
              className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg space-y-4"
            >
              <h3 className="text-xl font-semibold mb-4">Get In Touch</h3>

              <Input
                name="name"
                placeholder="Your Name *"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.name}
              />

              <Input
                name="email"
                type="email"
                placeholder="Email Address *"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.email}
              />

              <Input
                name="phone"
                type="tel"
                placeholder="Phone Number *"
                value={values.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.phone}
              />

              <Textarea
                name="message"
                placeholder="Message / Requirements (Optional)"
                rows={4}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={errors.message}
              />

              <Button
                type="submit"
                disabled={loading}
                fullWidth
                className="mt-2"
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </section>

      {/* TOAST (only for success + API errors) */}
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  );
}
