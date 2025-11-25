import * as yup from "yup";

export const leadFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be no more than 50 characters")
    .trim(),
  
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format")
    .trim(),
  
  phone: yup
    .string()
    .required("Phone number is required")
    .test(
      "phone-length",
      "Phone number must be at least 10 digits",
      (value) => {
        if (!value) return false;
        const digitsOnly = value.replace(/\D/g, "");
        return digitsOnly.length >= 10;
      }
    ),
  
  message: yup
    .string()
    .max(500, "Message must be no more than 500 characters")
    .trim(),
});

export type LeadFormSchemaType = yup.InferType<typeof leadFormSchema>;

