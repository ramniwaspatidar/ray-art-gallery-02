// Product Types
export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  originalPrice: string | null;
  imageUrl: string | null;
  category: string;
  subCategory: string;
  createdAt: string;
  updatedAt: string;
}

// ApiProduct is now same as Product, so we can remove it or alias it if needed,
// but for now let's just use Product.


// Category Types
export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: string;
  productCount: number;
}

// Filter Types
export interface FilterOptions {
  categories: string[];
  priceRange: {
    min: number;
    max: number;
  };
  sizes: string[];
  colors: string[];
  materials: string[];
  inStock?: boolean;
}

// Sort Types
export type SortOption = 
  | 'featured'
  | 'price-low-high'
  | 'price-high-low'
  | 'newest'
  | 'best-selling'
  | 'alphabetical';

// Pagination Types
export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

export interface ProductsResponse {
  products: Product[];
  pagination: PaginationInfo;
  filters: {
    availableCategories: Category[];
    priceRange: { min: number; max: number };
    availableSizes: string[];
    availableColors: string[];
    availableMaterials: string[];
  };
}

// Search Types
export interface SearchParams {
  query?: string;
  category?: string;
  filters?: Partial<FilterOptions>;
  sort?: SortOption;
  page?: number;
  limit?: number;
}

// Cart Types
export interface CartItem {
  productId: string;
  product: Product;
  quantity: number;
  selectedSize?: string;
  selectedColor?: string;
}

export interface Cart {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  subtotal: number;
  tax: number;
  shipping: number;
}

// User Types
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  addresses: Address[];
  preferences: UserPreferences;
}

export interface Address {
  id: string;
  type: 'home' | 'work' | 'other';
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  isDefault: boolean;
}

export interface UserPreferences {
  currency: string;
  language: string;
  notifications: {
    email: boolean;
    sms: boolean;
    push: boolean;
  };
}

// Component Props Types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  onMouseEnter?: (e: React.MouseEvent<Element>) => void;
  onMouseLeave?: (e: React.MouseEvent<Element>) => void;
}

export interface InputProps extends BaseComponentProps {
  id?: string;
  name?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'search' | 'tel';
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  disabled?: boolean;
  error?: string;
  required?: boolean;
}

// Network/API Types
export interface NetworkConfig {
  baseURL: string;
  timeout: number;
  headers: Record<string, string>;
}

export interface RequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  data?: any;
  params?: Record<string, any>;
  headers?: Record<string, string>;
}

export interface NetworkError {
  message: string;
  status?: number;
  code?: string;
  details?: any;
}

// Layout Types
export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showHeader?: boolean;
  showFooter?: boolean;
}

// Modal Types
export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

// Loading States
export interface LoadingState {
  isLoading: boolean;
  error?: string | null;
}

// Form Types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'select' | 'textarea';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: RegExp;
    custom?: (value: any) => string | null;
  };
}

export interface FormData {
  [key: string]: any;
}

export interface FormErrors {
  [key: string]: string;
}