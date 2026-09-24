export interface Plan {
  id: string;
  name: string;
  category: 'general' | 'mma' | 'special';
  duration: string;
  price: number;
  admissionFee?: number;
  highlight?: string;
  popular?: boolean;
  features: string[];
  description: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: 'strength' | 'combat' | 'endurance' | 'wellness';
  tagline: string;
  description: string;
  benefits: string[];
  suitableFor: string;
}

export interface RegistrationData {
  fullName: string;
  phoneNumber: string;
  email: string;
  membershipPlan: string;
  startDate: string;
  message: string;
}
