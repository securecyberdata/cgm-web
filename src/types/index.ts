export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  dateOfBirth: string;
  address: Address;
  insurance: InsuranceInfo;
  createdAt: Date;
  updatedAt: Date;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface InsuranceInfo {
  type: 'medicare' | 'ppo' | 'none';
  memberId: string;
  groupNumber?: string;
  insuranceCardFront?: string;
  insuranceCardBack?: string;
  primaryCarePhysician?: DoctorInfo;
}

export interface DoctorInfo {
  name: string;
  city: string;
  phone?: string;
  email?: string;
  npi?: string;
}

export interface MedicalInfo {
  diabetesType: 'type1' | 'type2' | 'gestational' | 'other';
  currentMonitoring: 'fingersticks' | 'cgm' | 'both' | 'none';
  hypoglycemicEvents: boolean;
  insulinUse: boolean;
  a1c?: number;
  lastA1cDate?: string;
}

export interface Application {
  id: string;
  userId: string;
  status: 'submitted' | 'verification' | 'authorization' | 'prescription' | 'shipping' | 'completed' | 'rejected';
  insuranceType: 'medicare' | 'ppo' | 'none';
  medicalInfo: MedicalInfo;
  doctorInfo?: DoctorInfo;
  documents: Document[];
  createdAt: Date;
  updatedAt: Date;
  estimatedCompletion?: Date;
}

export interface Document {
  id: string;
  name: string;
  type: 'insurance_card_front' | 'insurance_card_back' | 'prescription' | 'lab_results' | 'other';
  status: 'pending' | 'uploaded' | 'approved' | 'rejected';
  url?: string;
  uploadedAt?: Date;
  required: boolean;
  size?: number;
  mimeType?: string;
}

export interface CGMDevice {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  monthlyPrice: number;
  features: string[];
  imageUrl?: string;
  inStock: boolean;
  popular: boolean;
}

export interface DiabeticSupply {
  id: string;
  name: string;
  category: 'test_strips' | 'lancets' | 'monitors' | 'shoes' | 'accessories';
  brand: string;
  description: string;
  price: number;
  unit: string;
  inStock: boolean;
  coverage: CoverageInfo;
}

export interface CoverageInfo {
  medicare: boolean;
  ppo: boolean;
  requirements?: string[];
  priorAuthRequired: boolean;
  quantityLimits?: {
    monthly?: number;
    yearly?: number;
  };
}

export interface Order {
  id: string;
  userId: string;
  applicationId?: string;
  items: OrderItem[];
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  total: number;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  createdAt: Date;
  updatedAt: Date;
  trackingNumber?: string;
  estimatedDelivery?: Date;
}

export interface OrderItem {
  id: string;
  productId: string;
  productType: 'cgm_device' | 'diabetic_supply';
  name: string;
  quantity: number;
  price: number;
  total: number;
}

export interface PaymentMethod {
  type: 'credit_card' | 'hsa' | 'fsa' | 'cash';
  last4?: string;
  brand?: string;
  expiryMonth?: number;
  expiryYear?: number;
}

export interface Notification {
  id: string;
  userId: string;
  type: 'email' | 'sms' | 'push' | 'in_app';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  actionUrl?: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
  order: number;
  published: boolean;
}

export interface ContactForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  practice?: string;
  message: string;
  type: 'general' | 'support' | 'demo' | 'partnership';
}

export interface EligibilityResult {
  eligible: boolean;
  reason?: string;
  nextSteps: string[];
  estimatedTimeline?: string;
  requiredDocuments: string[];
  cashPayOptions?: CGMDevice[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface SearchParams {
  query?: string;
  category?: string;
  brand?: string;
  priceMin?: number;
  priceMax?: number;
  inStock?: boolean;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: 'asc' | 'desc';
}

export interface AnalyticsEvent {
  event: string;
  properties: Record<string, any>;
  userId?: string;
  sessionId?: string;
  timestamp: Date;
}

export interface ConsentRecord {
  id: string;
  userId: string;
  type: 'hipaa' | 'tcpa' | 'marketing' | 'analytics';
  granted: boolean;
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
  version: string;
}

export interface AuditLog {
  id: string;
  userId?: string;
  action: string;
  resource: string;
  resourceId: string;
  changes?: Record<string, any>;
  ipAddress: string;
  userAgent: string;
  timestamp: Date;
}
