// Theme configuration for Ray Art Gallery
// Based on the warm color palette: rose-300, pink-300, orange-300, rose-400

export const theme = {
  colors: {
    // Primary warm color palette
    primary: {
      50: '#fdf2f8',   // rose-50
      100: '#fce7f3',  // rose-100
      200: '#fbcfe8',  // rose-200
      300: '#f9a8d4',  // rose-300 - Main accent color
      400: '#f472b6',  // rose-400 - Primary brand color
      500: '#ec4899',  // rose-500
      600: '#db2777',  // rose-600
      700: '#be185d',  // rose-700
      800: '#9d174d',  // rose-800
      900: '#831843',  // rose-900
    },
    
    // Secondary pink palette
    secondary: {
      50: '#fdf2f8',   // pink-50
      100: '#fce7f3',  // pink-100
      200: '#fbcfe8',  // pink-200
      300: '#f9a8d4',  // pink-300 - Secondary accent color
      400: '#f472b6',  // pink-400
      500: '#ec4899',  // pink-500
      600: '#db2777',  // pink-600
      700: '#be185d',  // pink-700
      800: '#9d174d',  // pink-800
      900: '#831843',  // pink-900
    },
    
    // Accent orange palette
    accent: {
      50: '#fff7ed',   // orange-50
      100: '#ffedd5',  // orange-100
      200: '#fed7aa',  // orange-200
      300: '#fdba74',  // orange-300 - Accent color
      400: '#fb923c',  // orange-400
      500: '#f97316',  // orange-500
      600: '#ea580c',  // orange-600
      700: '#c2410c',  // orange-700
      800: '#9a3412',  // orange-800
      900: '#7c2d12',  // orange-900
    },
    
    // Neutral colors
    neutral: {
      50: '#f9fafb',   // gray-50
      100: '#f3f4f6',  // gray-100
      200: '#e5e7eb',  // gray-200
      300: '#d1d5db',  // gray-300
      400: '#9ca3af',  // gray-400
      500: '#6b7280',  // gray-500
      600: '#4b5563',  // gray-600
      700: '#374151',  // gray-700
      800: '#1f2937',  // gray-800
      900: '#111827',  // gray-900
    },
    
    // Semantic colors using the warm palette
    success: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',  // orange-300
      400: '#fb923c',
      500: '#f97316',
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    
    warning: {
      50: '#fdf2f8',
      100: '#fce7f3',
      200: '#fbcfe8',
      300: '#f9a8d4',  // pink-300
      400: '#f472b6',
      500: '#ec4899',
      600: '#db2777',
      700: '#be185d',
      800: '#9d174d',
      900: '#831843',
    },
    
    error: {
      50: '#fef2f2',
      100: '#fee2e2',
      200: '#fecaca',
      300: '#fca5a5',
      400: '#f87171',
      500: '#ef4444',
      600: '#dc2626',
      700: '#b91c1c',
      800: '#991b1b',
      900: '#7f1d1d',
    },
    
    // Background colors
    background: {
      primary: '#ffffff',
      secondary: '#f9fafb',
      tertiary: '#f3f4f6',
      accent: '#fdf2f8',  // rose-50
    },
    
    // Text colors
    text: {
      primary: '#111827',    // gray-900
      secondary: '#4b5563',  // gray-600
      tertiary: '#9ca3af',   // gray-400
      accent: '#f472b6',     // rose-400
      inverse: '#ffffff',
    },
    
    // Border colors
    border: {
      primary: '#e5e7eb',    // gray-200
      secondary: '#d1d5db',  // gray-300
      accent: '#f472b6',     // rose-400
      focus: '#f9a8d4',      // rose-300
    },
  },
  
  // Component-specific color mappings
  components: {
    button: {
      primary: {
        background: '#f472b6',      // rose-400
        backgroundHover: '#ec4899', // rose-500
        text: '#ffffff',
        border: '#f472b6',          // rose-400
        focusRing: '#f9a8d4',       // rose-300
      },
      secondary: {
        background: '#f9a8d4',      // pink-300
        backgroundHover: '#f472b6', // pink-400
        text: '#ffffff',
        border: '#f9a8d4',          // pink-300
        focusRing: '#fbcfe8',       // pink-200
      },
      outline: {
        background: 'transparent',
        backgroundHover: '#f472b6', // rose-400
        text: '#f472b6',            // rose-400
        textHover: '#ffffff',
        border: '#f472b6',          // rose-400
        focusRing: '#f9a8d4',       // rose-300
      },
      ghost: {
        background: 'transparent',
        backgroundHover: '#fdf2f8', // rose-50
        text: '#f472b6',            // rose-400
        border: 'transparent',
        focusRing: '#f9a8d4',       // rose-300
      },
    },
    
    card: {
      background: '#ffffff',
      border: '#e5e7eb',           // gray-200
      shadow: 'rgba(0, 0, 0, 0.1)',
      hoverShadow: 'rgba(244, 114, 182, 0.15)', // rose-400 with opacity
    },
    
    badge: {
      sale: {
        background: '#f472b6',      // rose-400
        text: '#ffffff',
      },
      featured: {
        background: '#fdba74',      // orange-300
        text: '#ffffff',
      },
      discount: {
        background: '#fdf2f8',      // rose-50
        text: '#be185d',            // rose-700
      },
    },
    
    input: {
      background: '#ffffff',
      border: '#d1d5db',           // gray-300
      borderFocus: '#f472b6',      // rose-400
      text: '#111827',             // gray-900
      placeholder: '#9ca3af',      // gray-400
      focusRing: '#f9a8d4',        // rose-300
    },
    
    header: {
      background: '#ffffff',
      logo: '#f472b6',             // rose-400
      text: '#374151',             // gray-700
      textHover: '#f472b6',        // rose-400
      cartBadge: '#f472b6',        // rose-400
    },
    
    footer: {
      background: '#f9fafb',       // gray-50
      logo: '#f472b6',             // rose-400
      text: '#6b7280',             // gray-500
      textHover: '#f472b6',        // rose-400
      subscribeButton: '#f472b6',  // rose-400
    },
    
    hero: {
      overlay: 'rgba(0, 0, 0, 0.3)',
      textPrimary: '#ffffff',
      textAccent: '#f9a8d4',       // rose-300
      textSecondary: '#fdba74',    // orange-300
    },
    
    features: {
      iconBackgrounds: {
        primary: '#fdf2f8',         // rose-50
        secondary: '#fce7f3',       // pink-100
        accent: '#fff7ed',          // orange-50
      },
      iconColors: {
        primary: '#f472b6',         // rose-400
        secondary: '#f9a8d4',       // pink-300
        accent: '#fdba74',          // orange-300
      },
    },
    
    newsletter: {
      background: 'linear-gradient(to right, #f472b6, #f9a8d4)', // rose-400 to pink-300
      text: '#ffffff',
      button: {
        background: '#ffffff',
        text: '#f472b6',            // rose-400
        hover: '#f3f4f6',           // gray-100
      },
    },
  },
  
  // Gradient definitions
  gradients: {
    primary: 'linear-gradient(135deg, #f472b6 0%, #f9a8d4 100%)',     // rose-400 to pink-300
    secondary: 'linear-gradient(135deg, #f9a8d4 0%, #fdba74 100%)',   // pink-300 to orange-300
    accent: 'linear-gradient(135deg, #fdba74 0%, #f472b6 100%)',      // orange-300 to rose-400
    hero: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%)',
    newsletter: 'linear-gradient(to right, #f472b6, #f9a8d4)',        // rose-400 to pink-300
  },
  
  // Shadow definitions
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    accent: '0 10px 15px -3px rgba(244, 114, 182, 0.1), 0 4px 6px -2px rgba(244, 114, 182, 0.05)', // rose-400
  },
  
  // Spacing scale
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',  // 2px
    md: '0.375rem',  // 6px
    lg: '0.5rem',    // 8px
    xl: '0.75rem',   // 12px
    '2xl': '1rem',   // 16px
    full: '9999px',
  },
  
  // Typography
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Georgia', 'serif'],
      mono: ['Monaco', 'monospace'],
    },
    fontSize: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
      '7xl': '4.5rem',  // 72px
    },
    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },
} as const;

// Type definitions for better TypeScript support
export type ThemeColors = typeof theme.colors;
export type ComponentColors = typeof theme.components;
export type ThemeGradients = typeof theme.gradients;

// Helper functions for accessing theme values
export const getColor = (path: string): string => {
  const keys = path.split('.');
  let value: any = theme.colors;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || path;
};

export const getComponentColor = (component: string, variant: string, property: string): string => {
  try {
    const comp = (theme.components as any)?.[component];
    const variantObj = comp?.[variant];
    return variantObj?.[property] || '';
  } catch {
    return '';
  }
};

// CSS custom properties for use in CSS files
export const cssVariables = {
  '--color-primary-50': theme.colors.primary[50],
  '--color-primary-100': theme.colors.primary[100],
  '--color-primary-200': theme.colors.primary[200],
  '--color-primary-300': theme.colors.primary[300],
  '--color-primary-400': theme.colors.primary[400],
  '--color-primary-500': theme.colors.primary[500],
  '--color-primary-600': theme.colors.primary[600],
  '--color-primary-700': theme.colors.primary[700],
  '--color-primary-800': theme.colors.primary[800],
  '--color-primary-900': theme.colors.primary[900],
  
  '--color-secondary-50': theme.colors.secondary[50],
  '--color-secondary-100': theme.colors.secondary[100],
  '--color-secondary-200': theme.colors.secondary[200],
  '--color-secondary-300': theme.colors.secondary[300],
  '--color-secondary-400': theme.colors.secondary[400],
  '--color-secondary-500': theme.colors.secondary[500],
  '--color-secondary-600': theme.colors.secondary[600],
  '--color-secondary-700': theme.colors.secondary[700],
  '--color-secondary-800': theme.colors.secondary[800],
  '--color-secondary-900': theme.colors.secondary[900],
  
  '--color-accent-50': theme.colors.accent[50],
  '--color-accent-100': theme.colors.accent[100],
  '--color-accent-200': theme.colors.accent[200],
  '--color-accent-300': theme.colors.accent[300],
  '--color-accent-400': theme.colors.accent[400],
  '--color-accent-500': theme.colors.accent[500],
  '--color-accent-600': theme.colors.accent[600],
  '--color-accent-700': theme.colors.accent[700],
  '--color-accent-800': theme.colors.accent[800],
  '--color-accent-900': theme.colors.accent[900],
  
  '--gradient-primary': theme.gradients.primary,
  '--gradient-secondary': theme.gradients.secondary,
  '--gradient-accent': theme.gradients.accent,
  '--gradient-hero': theme.gradients.hero,
  '--gradient-newsletter': theme.gradients.newsletter,
};

export default theme;