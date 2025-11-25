// Form Types
export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface FormErrors {
  [key: string]: string;
}

// FAQ Types
export interface FAQItem {
  id: string;
  title: string;
  subtitle?: string;
  content?: string;
}

// Package Types
export interface Package {
  id: string;
  title: string;
  img: string;
  starting: string;
}

// Stats Types
export interface Stat {
  id: string;
  value: string;
  title: string;
  description: string;
}

// API Response Types
export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
}

export interface LeadApiResponse extends ApiResponse<LeadFormData> {}

// Toast Types
export type ToastType = "success" | "error" | "warning" | "info";

export interface ToastProps {
  message: string;
  type: ToastType;
  isVisible: boolean;
  onClose: () => void;
  duration?: number;
}

// Component Props Types
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  isLoading?: boolean;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

