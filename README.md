# Sports Travel Packages - Next.js Application

A modern, professional sports travel booking platform built with Next.js, React, TypeScript, Tailwind CSS, and Yup validation.

## 🚀 Tech Stack

- **Frontend Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Form Validation**: Yup
- **Backend**: Next.js API Routes (runs on same port as frontend)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager
- **Git** (for version control)

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

This will install all required npm packages. See the complete list below.

## 📦 NPM Packages

### Production Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **next** | ^16.0.4 | Next.js React framework with App Router |
| **react** | ^19.2.0 | React UI library |
| **react-dom** | ^19.2.0 | React DOM rendering |
| **yup** | ^1.4.0 | **Schema-based form validation** ⭐ |
| **lucide-react** | ^0.554.0 | Icon library |

### Development Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| **typescript** | ^5 | TypeScript compiler |
| **tailwindcss** | ^4 | Tailwind CSS framework |
| **@tailwindcss/postcss** | ^4 | Tailwind PostCSS plugin |
| **@types/node** | ^20 | Node.js TypeScript types |
| **@types/react** | ^19 | React TypeScript types |
| **@types/react-dom** | ^19 | React DOM TypeScript types |
| **eslint** | ^9 | ESLint linter |
| **eslint-config-next** | ^16.0.4 | Next.js ESLint config |
| **babel-plugin-react-compiler** | ^1.0.0 | React compiler plugin |

### Key Package: Yup

**Yup** (`yup@^1.4.0`) is the form validation library used in this project:

```bash
npm install yup
```

**Already included in `package.json`**, just run:
```bash
npm install
```

**Usage:**
- Schema-based validation
- React hook integration (`useFormWithYup`)
- Type-safe validation
- Custom validation rules

### 2. Environment Variables (Optional)

Create a `.env.local` file in the root directory:

```env
# API Configuration (leave empty for same-origin API calls)
NEXT_PUBLIC_API_URL=

# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER=+1234567890
```

**Note**: If `NEXT_PUBLIC_API_URL` is empty, the app will use relative paths for API calls (recommended for Next.js API routes).

### 3. Run Development Server

```bash
npm run dev
```

This will start:
- **Frontend**: `http://localhost:3000`
- **Backend API Routes**: `http://localhost:3000/api/*`

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Folder Structure

```
srviz/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API Routes (Backend)
│   │   │   ├── lead/          # Lead form submission endpoint
│   │   │   │   └── route.ts
│   │   │   └── health/        # Health check endpoint
│   │   │       └── route.ts
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx           # Home page
│   │
│   ├── components/            # React Components
│   │   ├── layouts/          # Layout Components
│   │   │   ├── Footer.tsx    # Footer component
│   │   │   └── Navbar.tsx    # Navigation bar
│   │   ├── sections/         # Page Sections
│   │   │   ├── FAQContact.tsx      # FAQ & Contact section
│   │   │   ├── FeaturedEvent.tsx   # Featured event section
│   │   │   ├── Hero.tsx            # Hero banner section
│   │   │   ├── HowItWorks.tsx      # How it works section
│   │   │   ├── Itinerary.tsx       # Itinerary section
│   │   │   ├── LeadForm.tsx        # Lead form section
│   │   │   ├── TopPackages.tsx     # Top packages section
│   │   │   └── WhyChooseUs.tsx    # Why choose us section
│   │   └── ui/               # Reusable UI Components
│   │       ├── AnimatedSection.tsx  # Scroll animation wrapper
│   │       ├── Button.tsx           # Button component
│   │       ├── Card.tsx             # Card component
│   │       ├── Input.tsx            # Input & Textarea components
│   │       ├── Toast.tsx            # Toast notification
│   │       └── WhatsAppButton.tsx   # Floating WhatsApp button
│   │
│   ├── constants/            # Application Constants
│   │   └── index.ts         # All constants (API config, validation rules, etc.)
│   │
│   ├── hooks/               # Custom React Hooks
│   │   ├── useFormWithYup.ts       # Yup-based form validation hook
│   │   └── useScrollAnimation.ts   # Scroll animation hook
│   │
│   ├── lib/                 # Library/Utility Code
│   │   ├── api/            # API Client
│   │   │   ├── client.ts   # Base API client
│   │   │   ├── lead.ts     # Lead API endpoints
│   │   │   └── index.ts    # API exports
│   │   └── validators/     # Validation Logic
│   │       ├── leadFormSchema.ts    # Yup schema for lead form
│   │       └── index.ts            # Validator exports
│   │
│   ├── types/              # TypeScript Type Definitions
│   │   └── index.ts        # All types and interfaces
│   │
│   ├── utils/              # Utility Functions
│   │   └── index.ts        # Helper functions (scroll, form, error handling)
│   │
│   ├── data/               # Static Data
│   │   ├── packages.ts     # Package data
│   │   └── stats.ts        # Statistics data
│   │
│   └── server/             # Express Server (Optional)
│       ├── index.js        # Express server entry point
│       └── routes/         # Express routes
│           └── lead.route.js
│
├── public/                 # Static Assets
│   └── mountain.jpg        # Images
│
├── .env.local             # Environment variables (create this)
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.ts         # Next.js configuration
│
└── Documentation/
    ├── README.md          # This file
    ├── PROJECT_STRUCTURE.md  # Detailed project structure
    ├── SERVER_SETUP.md    # Server setup guide
    └── YUP_VALIDATION.md  # Yup validation guide
```

## 🎯 Key Features

### Form Validation (Yup)
- ✅ **Yup Package**: `yup@^1.4.0` - Included in dependencies
- ✅ **Yup Schema Validation**: Professional form validation using Yup schemas
- ✅ **React Hook Integration**: Custom `useFormWithYup` hook for React forms
- ✅ **Real-time Validation**: Field-level validation on blur
- ✅ **Type-safe**: Full TypeScript support with Yup
- ✅ **Custom Rules**: Phone number validation with custom Yup test
- ✅ **Async Support**: Yup supports async validation

### API Integration
- ✅ **Next.js API Routes**: Backend runs on same port (3000)
- ✅ **Type-safe API Calls**: TypeScript interfaces for API responses
- ✅ **Error Handling**: Comprehensive error handling and user feedback
- ✅ **Toast Notifications**: Success/error notifications

### UI/UX
- ✅ **Responsive Design**: Mobile, tablet, and desktop support
- ✅ **Smooth Animations**: Scroll animations and hover effects
- ✅ **Accessibility**: ARIA labels and semantic HTML
- ✅ **Modern Design**: Clean, professional UI with Tailwind CSS

## 📝 API Endpoints

All API routes run on the same port as Next.js (3000):

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/lead` | Submit lead form |
| GET | `/api/health` | Health check |

### Example API Request

```typescript
POST /api/lead
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Interested in F1 Japan package"
}
```

## 🔧 Form Validation with Yup

The lead form uses **Yup** (v1.4.0) for schema-based validation with React hooks.

### Yup Package

Yup is already included in `package.json` dependencies:

```json
{
  "dependencies": {
    "yup": "^1.4.0"
  }
}
```

Install it with:
```bash
npm install
```

### Validation Rules

The lead form uses Yup schema validation:

| Field | Rules |
|-------|-------|
| **Name** | Required, 2-50 characters, trimmed |
| **Email** | Required, valid email format, trimmed |
| **Phone** | Required, minimum 10 digits (custom validation) |
| **Message** | Optional, max 500 characters, trimmed |

### Usage with React Hook

The form uses the `useFormWithYup` hook:

```typescript
import { useFormWithYup } from "@/hooks/useFormWithYup";
import { leadFormSchema } from "@/lib/validators";

const { values, errors, touched, handleChange, handleBlur, validateForm } = 
  useFormWithYup(initialValues, leadFormSchema);
```

### Files

- **Yup Schema**: `src/lib/validators/leadFormSchema.ts`
- **React Hook**: `src/hooks/useFormWithYup.ts`
- **Documentation**: See `YUP_VALIDATION.md` for detailed guide

## 🎨 Component Architecture

### Layout Components
- **Navbar**: Fixed navigation with smooth scroll
- **Footer**: Footer with links and social icons

### Section Components
- **Hero**: Main banner with CTA
- **TopPackages**: Package grid with hover effects
- **FeaturedEvent**: Featured event showcase
- **WhyChooseUs**: Benefits section
- **LeadForm**: Contact form with Yup validation
- **FAQContact**: FAQ accordion section

### UI Components
- **Button**: Reusable button with variants
- **Input/Textarea**: Form inputs with error handling
- **Toast**: Notification system
- **AnimatedSection**: Scroll animation wrapper
- **Card**: Reusable card component

## 🔐 Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | API base URL | `""` (same origin) |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp contact number | `"+1234567890"` |

## 📚 Assumptions Made

### 1. **Next.js App Router**
- Using Next.js 16 with App Router (not Pages Router)
- API routes are in `app/api/` directory
- All components are client components (`"use client"`)

### 2. **Form Validation**
- Using Yup for schema validation (industry standard)
- Real-time validation on field blur
- Form submission validates entire form

### 3. **API Architecture**
- Backend runs on same port as frontend (Next.js API routes)
- API routes use Next.js `route.ts` convention
- No separate Express server needed

### 4. **Type Safety**
- Full TypeScript coverage
- Type-safe API calls
- Type-safe form validation

### 5. **Styling**
- Tailwind CSS for all styling
- No inline styles (except for dynamic values)
- Responsive design with mobile-first approach

### 6. **Code Organization**
- Separation of concerns (components, hooks, utils, types)
- Reusable components and utilities
- Constants centralized in `constants/` folder

### 7. **Browser Support**
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ features supported
- No IE11 support

### 8. **Development Workflow**
- Development server on port 3000
- Hot module replacement enabled
- TypeScript strict mode enabled

## 🚦 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm start` | Start production server |
| `npm run lint` | Run ESLint |

## 🐛 Troubleshooting

### Form Not Submitting

1. **Check API route**: Ensure `/api/lead` route exists
2. **Check browser console**: Look for error messages
3. **Check validation**: Ensure all required fields are filled correctly
4. **Check network tab**: Verify API request is being sent

### Build Errors

1. **TypeScript errors**: Run `npm run lint` to see type errors
2. **Missing dependencies**: Run `npm install`
3. **Port already in use**: Change port in `package.json` or kill process on port 3000

### Validation Not Working

1. **Check Yup installation**: 
   - Ensure `yup` package is installed: `npm list yup`
   - If missing, install: `npm install yup`
   - Version should be `^1.4.0` (check `package.json`)
2. **Check schema**: Verify `leadFormSchema` is correctly defined in `src/lib/validators/leadFormSchema.ts`
3. **Check hook usage**: Ensure `useFormWithYup` is imported and used correctly
4. **Check imports**: Verify `import { useFormWithYup } from "@/hooks/useFormWithYup"` and `import { leadFormSchema } from "@/lib/validators"`

## 📖 Additional Documentation

- **PROJECT_STRUCTURE.md**: Detailed folder structure explanation
- **SERVER_SETUP.md**: Server setup and API documentation
- **YUP_VALIDATION.md**: **Yup validation guide and examples** ⭐

### Yup Package Information

**Package Details:**
- **Package Name**: `yup`
- **Version**: `^1.4.0`
- **Location**: `package.json` → `dependencies`
- **Installation**: Included in dependencies, install with `npm install`
- **Purpose**: Schema-based form validation library
- **Integration**: Custom React hook `useFormWithYup` for React forms

**Related Files:**
- **Schema**: `src/lib/validators/leadFormSchema.ts` - Yup schema definition
- **Hook**: `src/hooks/useFormWithYup.ts` - React hook with Yup integration
- **Component**: `src/components/sections/LeadForm.tsx` - Form using Yup validation
- **Docs**: `YUP_VALIDATION.md` - Complete Yup validation guide

## 🤝 Contributing

This is a private project. For questions or issues, please contact the development team.

## 📄 License

Private project - All rights reserved

## 👨‍💻 Development Notes

- Code follows professional standards (2+ years experience level)
- All components are TypeScript typed
- Form validation uses Yup schemas
- API routes use Next.js App Router conventions
- Responsive design with Tailwind CSS
- Smooth animations and transitions
- Accessibility considerations included

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
