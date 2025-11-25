# Project Structure - Professional Organization

This project follows industry-standard folder structure and naming conventions for a 2+ years experience level.

## 📁 Folder Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── components/             # React Components
│   ├── layouts/           # Layout Components
│   │   ├── Footer.tsx
│   │   └── Navbar.tsx
│   ├── sections/          # Page Sections
│   │   ├── FAQContact.tsx
│   │   ├── FeaturedEvent.tsx
│   │   ├── Hero.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── Itinerary.tsx
│   │   ├── LeadForm.tsx
│   │   ├── TopPackages.tsx
│   │   └── WhyChooseUs.tsx
│   └── ui/                # Reusable UI Components
│       ├── AnimatedSection.tsx
│       ├── Button.tsx
│       ├── Card.tsx
│       ├── Input.tsx
│       ├── Toast.tsx
│       └── WhatsAppButton.tsx
│
├── constants/             # Application Constants
│   └── index.ts          # All constants exported from here
│
├── hooks/                # Custom React Hooks
│   ├── useFormWithYup.ts       # Yup-based form validation hook
│   └── useScrollAnimation.ts   # Scroll animation hook
│
├── lib/                   # Library/Utility Code
│   ├── api/              # API Client
│   │   ├── client.ts     # Base API client
│   │   ├── lead.ts       # Lead API endpoints
│   │   └── index.ts      # API exports
│   └── validators/       # Validation Logic
│       ├── leadFormSchema.ts    # Yup schema for lead form
│       └── index.ts            # Validator exports
│
├── types/                 # TypeScript Type Definitions
│   └── index.ts          # All types exported from here
│
├── utils/                 # Utility Functions
│   └── index.ts          # All utilities exported from here
│
└── data/                  # Static Data
    ├── packages.ts
    └── stats.ts
```

## 🎯 Naming Conventions

### Files & Folders
- **Components**: PascalCase (e.g., `LeadForm.tsx`, `Navbar.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useFormWithYup.ts`)
- **Utils/Constants**: camelCase (e.g., `formValidators.ts`, `index.ts`)
- **Types**: PascalCase interfaces/types (e.g., `LeadFormData`, `ApiResponse`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_CONFIG`, `NAV_LINKS`)

### Code
- **Variables/Functions**: camelCase (e.g., `handleSubmit`, `scrollToSection`)
- **Components**: PascalCase (e.g., `LeadForm`, `Button`)
- **Types/Interfaces**: PascalCase (e.g., `LeadFormData`, `ToastProps`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_CONFIG`, `NAV_LINKS`)

## 📦 Key Features

### 1. **Centralized Constants** (`src/constants/index.ts`)
- API configuration
- Form validation rules
- Navigation links
- Toast configuration
- WhatsApp configuration

### 2. **Type Safety** (`src/types/index.ts`)
- All TypeScript types in one place
- Reusable type definitions
- Proper type exports

### 3. **API Client** (`src/lib/api/`)
- Centralized API client
- Type-safe API calls
- Easy to extend with new endpoints
- Error handling built-in

### 4. **Utility Functions** (`src/utils/index.ts`)
- Reusable helper functions
- Scroll utilities
- Form utilities
- Error handling utilities

### 5. **Custom Hooks** (`src/hooks/`)
- Reusable form validation logic
- Scroll animation hooks
- Separation of concerns

## 🔧 Best Practices Implemented

1. **Separation of Concerns**
   - Components only handle UI
   - Business logic in hooks/utils
   - API calls abstracted in lib/api

2. **DRY Principle**
   - Constants extracted to `constants/`
   - Reusable utilities in `utils/`
   - Shared types in `types/`

3. **Type Safety**
   - Full TypeScript coverage
   - Proper type definitions
   - Type-safe API calls

4. **Maintainability**
   - Clear folder structure
   - Consistent naming
   - Easy to locate files

5. **Scalability**
   - Easy to add new features
   - Modular architecture
   - Extensible API client

## 📝 Import Examples

```typescript
// Constants
import { API_CONFIG, NAV_LINKS } from "@/constants";

// Types
import type { LeadFormData, ApiResponse } from "@/types";

// Utils
import { scrollToSection, getErrorMessage } from "@/utils";

// API
import { leadApi } from "@/lib/api";

// Hooks
import { useFormWithYup } from "@/hooks/useFormWithYup";
```

## 🚀 Benefits

1. **Professional Structure**: Follows industry standards
2. **Easy Navigation**: Clear folder organization
3. **Type Safety**: Full TypeScript support
4. **Maintainable**: Easy to update and extend
5. **Scalable**: Ready for growth
6. **Reusable**: Components and utilities are modular

