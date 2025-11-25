# Yup Validation Integration

This project now uses **Yup** for form validation with React hooks.

## 📦 Installation

Yup is already added to `package.json`. Install dependencies:

```bash
npm install
```

## 🎯 Features

- ✅ Yup schema-based validation
- ✅ React hook integration (`useFormWithYup`)
- ✅ Real-time field validation
- ✅ Type-safe validation
- ✅ Custom validation rules
- ✅ Async validation support

## 📝 Usage

### 1. Define Yup Schema

```typescript
// src/lib/validators/leadFormSchema.ts
import * as yup from "yup";

export const leadFormSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be no more than 50 characters"),
  
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  
  phone: yup
    .string()
    .required("Phone number is required")
    .test("phone-length", "Phone number must be at least 10 digits", (value) => {
      if (!value) return false;
      const digitsOnly = value.replace(/\D/g, "");
      return digitsOnly.length >= 10;
    }),
  
  message: yup
    .string()
    .max(500, "Message must be no more than 500 characters"),
});
```

### 2. Use the Hook in Component

```typescript
import { useFormWithYup } from "@/hooks/useFormWithYup";
import { leadFormSchema } from "@/lib/validators";

const {
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  validateForm,
  resetForm,
} = useFormWithYup(initialValues, leadFormSchema);
```

### 3. Form Submission

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const isValid = await validateForm();
  if (!isValid) {
    // Show error message
    return;
  }
  
  // Submit form
};
```

## 🔧 Validation Rules

### Lead Form Schema

- **Name**: Required, 2-50 characters
- **Email**: Required, valid email format
- **Phone**: Required, minimum 10 digits
- **Message**: Optional, max 500 characters

## 📚 Yup Methods Used

- `string()` - String validation
- `required()` - Required field
- `min()` - Minimum length
- `max()` - Maximum length
- `email()` - Email format validation
- `test()` - Custom validation function
- `trim()` - Trim whitespace

## 🎨 Benefits

1. **Declarative**: Schema defines validation rules clearly
2. **Type-safe**: TypeScript integration
3. **Flexible**: Easy to add custom validations
4. **Reusable**: Schemas can be shared across components
5. **Async Support**: Can handle async validation
6. **Error Messages**: Built-in error message handling

## 🔄 Form Validation

This project uses `useFormWithYup` hook with Yup schemas for all form validation.

## 📖 Resources

- [Yup Documentation](https://github.com/jquense/yup)
- [Yup API Reference](https://github.com/jquense/yup#api)

