// Application Constants
export const APP_CONSTANTS = {
  APP_NAME: 'Ray Art Gallery',
  APP_DESCRIPTION: 'Beautiful wall decor collection',
  APP_VERSION: '1.0.0',
} as const;

// UI Text Constants
export const UI_TEXT = {
  // Navigation
  NAV: {
    HOME: 'Home',
    ABOUT: 'About',
    CONTACT: 'Contact'
  },
  
  // Product Related
  PRODUCT: {
    ADD_TO_CART: 'Add to Cart',
    VIEW_DETAILS: 'View Details',
    OUT_OF_STOCK: 'Out of Stock',
    IN_STOCK: 'In Stock',
    PRICE: 'Price',
    DESCRIPTION: 'Description',
    SPECIFICATIONS: 'Specifications',
    REVIEWS: 'Reviews',
    RELATED_PRODUCTS: 'Related Products',
  },
  
  // Gallery/Collection
  GALLERY: {
    WALL_DECORS: 'Wall Decors',
    FILTER_BY: 'Filter By',
    SORT_BY: 'Sort By',
    SHOW_MORE: 'Show More',
    LOAD_MORE: 'Load More',
    NO_PRODUCTS: 'No products found',
    TOTAL_ITEMS: 'Total Items',
    ITEMS_PER_PAGE: 'Items per page',
  },
  
  // Common Actions
  ACTIONS: {
    SUBMIT: 'Submit',
    CANCEL: 'Cancel',
    SAVE: 'Save',
    DELETE: 'Delete',
    EDIT: 'Edit',
    CLOSE: 'Close',
    BACK: 'Back',
    NEXT: 'Next',
    PREVIOUS: 'Previous',
    LOADING: 'Loading...',
    RETRY: 'Retry',
  },
  
  // Messages
  MESSAGES: {
    SUCCESS: 'Operation completed successfully',
    ERROR: 'Something went wrong. Please try again.',
    NETWORK_ERROR: 'Network error. Please check your connection.',
    NOT_FOUND: 'Page not found',
    UNAUTHORIZED: 'You are not authorized to access this page',
    VALIDATION_ERROR: 'Please check your input and try again',
  },
  
  // Footer
  FOOTER: {
    COPYRIGHT: '© 2024 Ray Art Gallery. All rights reserved.',
    PRIVACY_POLICY: 'Privacy Policy',
    TERMS_OF_SERVICE: 'Terms of Service',
    CONTACT_US: 'Contact Us',
  },
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  CATEGORIES: '/categories',
  SEARCH: '/search',
  CART: '/cart',
  USER: '/user',
  AUTH: '/auth',
} as const;

// Pagination Constants
export const PAGINATION = {
  DEFAULT_PAGE_SIZE: 12,
  MAX_PAGE_SIZE: 50,
  DEFAULT_PAGE: 1,
} as const;

// Breakpoints for responsive design
export const BREAKPOINTS = {
  SM: '640px',
  MD: '768px',
  LG: '1024px',
  XL: '1280px',
  '2XL': '1536px',
} as const;

// Product Categories (based on vibecrafts.com)
export const CATEGORIES = {
  WALL_DECORS: 'wall-decors',
  PAINTINGS: 'paintings',
  FRAMES: 'frames',
  MIRRORS: 'mirrors',
  CLOCKS: 'clocks',
} as const;

// Sort Options
export const SORT_OPTIONS = [
  { value: 'featured', label: 'Featured' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'newest', label: 'Newest' },
  { value: 'best-selling', label: 'Best Selling' },
  { value: 'alphabetical', label: 'Alphabetical' },
] as const;

// Filter Options
export const FILTER_OPTIONS = {
  PRICE_RANGES: [
    { min: 0, max: 1000, label: 'Under ₹1,000' },
    { min: 1000, max: 2500, label: '₹1,000 - ₹2,500' },
    { min: 2500, max: 5000, label: '₹2,500 - ₹5,000' },
    { min: 5000, max: 10000, label: '₹5,000 - ₹10,000' },
    { min: 10000, max: Infinity, label: 'Above ₹10,000' },
  ],
  SIZES: ['Small', 'Medium', 'Large', 'Extra Large'],
  COLORS: ['Black', 'White', 'Brown', 'Gold', 'Silver', 'Multicolor'],
  MATERIALS: ['Wood', 'Metal', 'Canvas', 'Glass', 'Plastic'],
} as const;