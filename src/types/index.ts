export interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  monthlySpend: string;
  message?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  location: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  description: string;
  icon: string;
  itemCount: string;
  color: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface CoverageRegion {
  name: string;
  deliveryTime: string;
}
