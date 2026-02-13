// Theme configuration for Ray Art Gallery
// Based on the logo color palette: teal, navy, gold, mint

export const theme = {
  colors: {
    // Primary teal palette (paintbrush handle)
    primary: {
      50: '#f0faf8',
      100: '#d4f0eb',
      200: '#a8e1d7',
      300: '#7bccc0',
      400: '#5BA8A0',   // Main brand color - teal from logo
      500: '#4A9189',
      600: '#3A7A73',
      700: '#2D635D',
      800: '#204C47',
      900: '#163532',
    },
    
    // Secondary navy palette (R letter)
    secondary: {
      50: '#f0f2f7',
      100: '#d6dae8',
      200: '#adb5d1',
      300: '#8490ba',
      400: '#5B6BA3',
      500: '#3D4F7A',
      600: '#2D3E5F',   // Dark navy from logo
      700: '#243252',
      800: '#1B2645',
      900: '#121A38',
    },
    
    // Accent gold palette (brush stroke)
    accent: {
      50: '#fdf8ec',
      100: '#f9ecc8',
      200: '#f3d991',
      300: '#E0BD5E',
      400: '#C9A74C',   // Gold from logo
      500: '#B5943D',
      600: '#9A7D31',
      700: '#7E6526',
      800: '#624E1C',
      900: '#473812',
    },
    
    // Neutral colors
    neutral: {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    
    // Semantic colors
    success: {
      50: '#f0faf8',
      100: '#d4f0eb',
      200: '#a8e1d7',
      300: '#7bccc0',
      400: '#5BA8A0',
      500: '#4A9189',
      600: '#3A7A73',
      700: '#2D635D',
      800: '#204C47',
      900: '#163532',
    },
    
    warning: {
      50: '#fdf8ec',
      100: '#f9ecc8',
      200: '#f3d991',
      300: '#E0BD5E',
      400: '#C9A74C',
      500: '#B5943D',
      600: '#9A7D31',
      700: '#7E6526',
      800: '#624E1C',
      900: '#473812',
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
      accent: '#f0faf8',       // teal-50
    },
    
    // Text colors
    text: {
      primary: '#111827',      // gray-900
      secondary: '#4b5563',    // gray-600
      tertiary: '#9ca3af',     // gray-400
      accent: '#5BA8A0',       // teal-400
      inverse: '#ffffff',
    },
    
    // Border colors
    border: {
      primary: '#e5e7eb',      // gray-200
      secondary: '#d1d5db',    // gray-300
      accent: '#5BA8A0',       // teal-400
      focus: '#7bccc0',        // teal-300
    },
  },
  
  // Component-specific color mappings
  components: {
    button: {
      primary: {
        background: '#5BA8A0',      // teal-400
        backgroundHover: '#4A9189', // teal-500
        text: '#ffffff',
        border: '#5BA8A0',
        focusRing: '#7bccc0',       // teal-300
      },
      secondary: {
        background: '#2D3E5F',      // navy-600
        backgroundHover: '#243252', // navy-700
        text: '#ffffff',
        border: '#2D3E5F',
        focusRing: '#5B6BA3',       // navy-400
      },
      outline: {
        background: 'transparent',
        backgroundHover: '#5BA8A0',
        text: '#5BA8A0',
        textHover: '#ffffff',
        border: '#5BA8A0',
        focusRing: '#7bccc0',
      },
      ghost: {
        background: 'transparent',
        backgroundHover: '#f0faf8', // teal-50
        text: '#5BA8A0',
        border: 'transparent',
        focusRing: '#7bccc0',
      },
    },
    
    card: {
      background: '#ffffff',
      border: '#e5e7eb',
      shadow: 'rgba(0, 0, 0, 0.1)',
      hoverShadow: 'rgba(91, 168, 160, 0.15)', // teal-400 with opacity
    },
    
    badge: {
      sale: {
        background: '#5BA8A0',      // teal-400
        text: '#ffffff',
      },
      featured: {
        background: '#C9A74C',      // gold-400
        text: '#ffffff',
      },
      discount: {
        background: '#f0faf8',      // teal-50
        text: '#2D635D',            // teal-700
      },
    },
    
    input: {
      background: '#ffffff',
      border: '#d1d5db',
      borderFocus: '#5BA8A0',       // teal-400
      text: '#111827',
      placeholder: '#9ca3af',
      focusRing: '#7bccc0',         // teal-300
    },
    
    header: {
      background: '#ffffff',
      logo: '#5BA8A0',              // teal-400
      text: '#374151',              // gray-700
      textHover: '#5BA8A0',         // teal-400
      cartBadge: '#5BA8A0',         // teal-400
    },
    
    footer: {
      background: '#f9fafb',
      logo: '#5BA8A0',              // teal-400
      text: '#6b7280',
      textHover: '#5BA8A0',         // teal-400
      subscribeButton: '#5BA8A0',   // teal-400
    },
    
    hero: {
      overlay: 'rgba(0, 0, 0, 0.3)',
      textPrimary: '#ffffff',
      textAccent: '#7bccc0',        // teal-300 (soft teal)
      textSecondary: '#E0BD5E',     // gold-300
    },
    
    features: {
      iconBackgrounds: {
        primary: '#f0faf8',         // teal-50
        secondary: '#d4f0eb',       // teal-100
        accent: '#fdf8ec',          // gold-50
      },
      iconColors: {
        primary: '#5BA8A0',         // teal-400
        secondary: '#2D3E5F',       // navy-600
        accent: '#C9A74C',          // gold-400
      },
    },
    
    newsletter: {
      background: 'linear-gradient(to right, #5BA8A0, #2D3E5F)', // teal to navy
      text: '#ffffff',
      button: {
        background: '#ffffff',
        text: '#5BA8A0',
        hover: '#f3f4f6',
      },
    },
  },
  
  // Gradient definitions
  gradients: {
    primary: 'linear-gradient(135deg, #5BA8A0 0%, #7bccc0 100%)',      // teal gradient
    secondary: 'linear-gradient(135deg, #2D3E5F 0%, #5B6BA3 100%)',    // navy gradient
    accent: 'linear-gradient(135deg, #C9A74C 0%, #E0BD5E 100%)',       // gold gradient
    hero: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%)',
    newsletter: 'linear-gradient(to right, #5BA8A0, #2D3E5F)',         // teal to navy
  },
  
  // Shadow definitions
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    accent: '0 10px 15px -3px rgba(91, 168, 160, 0.1), 0 4px 6px -2px rgba(91, 168, 160, 0.05)', // teal-400
  },
  
  // Spacing scale
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
    '4xl': '6rem',
  },
  
  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
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
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
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