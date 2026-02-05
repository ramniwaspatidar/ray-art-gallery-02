'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { theme, ThemeColors, ComponentColors, ThemeGradients } from '@/styles/theme';

// Theme context type
interface ThemeContextType {
  colors: ThemeColors;
  components: ComponentColors;
  gradients: ThemeGradients;
  getColor: (path: string) => string;
  getComponentColor: (component: string, variant: string, property: string) => string;
}

// Create theme context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider props
interface ThemeProviderProps {
  children: ReactNode;
}

// Helper functions
const getColor = (path: string): string => {
  const keys = path.split('.');
  let value: any = theme.colors;
  
  for (const key of keys) {
    value = value?.[key];
  }
  
  return value || path;
};

const getComponentColor = (component: string, variant: string, property: string): string => {
  try {
    const comp = (theme.components as any)?.[component];
    const variantObj = comp?.[variant];
    return variantObj?.[property] || '';
  } catch {
    return '';
  }
};

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const contextValue: ThemeContextType = {
    colors: theme.colors,
    components: theme.components,
    gradients: theme.gradients,
    getColor,
    getComponentColor,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};

// Hook for getting colors easily
export const useColors = () => {
  const { colors, getColor } = useTheme();
  return { colors, getColor };
};

// Hook for getting component colors
export const useComponentColors = () => {
  const { components, getComponentColor } = useTheme();
  return { components, getComponentColor };
};

// Utility component for applying theme styles
interface ThemedProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const Themed: React.FC<ThemedProps> = ({ children, className = '', style = {} }) => {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
};

// Pre-built themed components for common use cases
export const ThemedButton: React.FC<{
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
}> = ({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  onClick, 
  disabled = false,
  className = '' 
}) => {
  const { getComponentColor } = useTheme();
  
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeStyles = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };
  
  const variantStyles = {
    primary: {
      backgroundColor: getComponentColor('button', 'primary', 'background'),
      color: getComponentColor('button', 'primary', 'text'),
      borderColor: getComponentColor('button', 'primary', 'border'),
    },
    secondary: {
      backgroundColor: getComponentColor('button', 'secondary', 'background'),
      color: getComponentColor('button', 'secondary', 'text'),
      borderColor: getComponentColor('button', 'secondary', 'border'),
    },
    outline: {
      backgroundColor: getComponentColor('button', 'outline', 'background'),
      color: getComponentColor('button', 'outline', 'text'),
      borderColor: getComponentColor('button', 'outline', 'border'),
      border: '2px solid',
    },
    ghost: {
      backgroundColor: getComponentColor('button', 'ghost', 'background'),
      color: getComponentColor('button', 'ghost', 'text'),
      borderColor: getComponentColor('button', 'ghost', 'border'),
    },
  };
  
  return (
    <button
      className={`${baseStyles} ${sizeStyles[size]} ${className}`}
      style={variantStyles[variant]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export const ThemedCard: React.FC<{
  children: ReactNode;
  hover?: boolean;
  className?: string;
}> = ({ children, hover = false, className = '' }) => {
  const { components } = useTheme();
  
  const baseStyles = 'rounded-lg border';
  const hoverStyles = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  
  return (
    <div
      className={`${baseStyles} ${hoverStyles} ${className}`}
      style={{
        backgroundColor: components.card.background,
        borderColor: components.card.border,
        boxShadow: components.card.shadow,
      }}
    >
      {children}
    </div>
  );
};

export const ThemedBadge: React.FC<{
  variant: 'sale' | 'featured' | 'discount';
  children: ReactNode;
  className?: string;
}> = ({ variant, children, className = '' }) => {
  const { components } = useTheme();
  
  const baseStyles = 'inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium';
  
  const variantStyles = {
    sale: {
      backgroundColor: components.badge.sale.background,
      color: components.badge.sale.text,
    },
    featured: {
      backgroundColor: components.badge.featured.background,
      color: components.badge.featured.text,
    },
    discount: {
      backgroundColor: components.badge.discount.background,
      color: components.badge.discount.text,
    },
  };
  
  return (
    <span
      className={`${baseStyles} ${className}`}
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
};

// CSS-in-JS style generator for dynamic styles
export const generateThemeStyles = () => {
  return {
    ':root': {
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
    },
  };
};

export default ThemeProvider;