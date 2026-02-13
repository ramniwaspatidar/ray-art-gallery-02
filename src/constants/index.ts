// Application Constants
export const APP_CONSTANTS = {
  APP_NAME: 'Ray Art Gallery',
  APP_NAME_SORT: 'Art Gallery',

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

  // Home Page - Hero Section
  HERO: {
    TITLE_LINE1: 'Love',
    TITLE_LINE2: 'Lives Here',
    DESCRIPTION: 'Transform your space with our handmade Mandala, Resin and Mirror art collection. Discover wall clocks, keychains and MDF décor that reflect your unique style.',
  },

  // Home Page - Features Section
  FEATURES: {
    SECTION_TITLE_SUFFIX: '?',
    SECTION_SUBTITLE: 'We offer the finest collection of handmade wall decor items with exceptional quality and service.',
    PREMIUM_QUALITY_TITLE: 'Premium Quality',
    PREMIUM_QUALITY_DESC: 'Hand-picked items made from the finest materials to ensure lasting beauty and durability.',
    FAST_DELIVERY_TITLE: 'Fast Delivery',
    FAST_DELIVERY_DESC: 'Quick and secure shipping to get your beautiful wall decor items to you as soon as possible.',
    CUSTOMER_SATISFACTION_TITLE: 'Customer Satisfaction',
    CUSTOMER_SATISFACTION_DESC: '100% satisfaction guarantee with easy returns and dedicated customer support.',
  },

  // Home Page - Product List
  PRODUCT_LIST: {
    END_OF_LIST: 'You have reached the end of the list.',
    NO_PRODUCTS: 'No products found matching your criteria.',
    ERROR_LOADING: 'Error loading products',
    FETCH_FAILED: 'Failed to fetch products',
  },

  // Filter UI
  FILTER: {
    LABEL: 'Filters:',
    CLEAR_ALL: 'Clear all',
  },

  // Product Details Page
  PRODUCT_DETAILS: {
    SOMETHING_WENT_WRONG: 'Something went wrong',
    FAILED_TO_LOAD: 'Failed to load product details. Please try again.',
    PRODUCT_NOT_FOUND: 'Product Not Found',
    PRODUCT_NOT_FOUND_DESC: "The product you're looking for doesn't exist.",
    GO_BACK_HOME: 'Go back home',
    SALE: 'SALE',
    DESCRIPTION: 'Description',
    FEATURE_AND_DETAILS: 'Feature And Details',
    ORDER_ON_WHATSAPP: 'Order on WhatsApp',
    WHATSAPP_MESSAGE: "I'm interested in this product",
    FEATURE_DETAILS_LIST: [
      'Size : Please Refer Image for Dimensions.',
      'The elegant Wood Wall Shelf can also be gifted to your loved ones, gift for your relative and friends.',
      'Wall Shelf will create a special ambience for you, an ideal Shelf decoration sign for hanging on the wall of your bedroom, club, restaurant, Outlet, ceiling lights, bistro, Waterfall, dance hall, baby room, and bedroom.',
      'Easy to Clean, CARE GUIDE Wipe clean with a soft, damp cloth when needed.',
      'Ready to hang, hooks provided in the package for easy installation.',
      'Made by Local Artisans of India #MADE IN INDIA #',
      'Wrapped in soft paper and packed with bubble wrap and card board box for reaching you safely.',
    ],
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