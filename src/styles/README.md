# Ray Gallery Theme System

This document explains how to use the comprehensive theme system implemented for Ray Gallery, featuring a warm color palette based on rose, pink, and orange colors.

## 🎨 Color Palette

The theme is built around three main color families:

### Primary Colors (Rose-based)
- **rose-300** (`#f9a8d4`) - Main accent color
- **rose-400** (`#f472b6`) - Primary brand color
- **rose-500** (`#ec4899`) - Hover states
- **rose-50** (`#fdf2f8`) - Light backgrounds
- **rose-100** (`#fce7f3`) - Subtle backgrounds

### Secondary Colors (Pink-based)
- **pink-300** (`#f9a8d4`) - Secondary accent color
- **pink-400** (`#f472b6`) - Secondary elements
- **pink-100** (`#fce7f3`) - Light backgrounds

### Accent Colors (Orange-based)
- **orange-300** (`#fdba74`) - Accent color
- **orange-400** (`#fb923c`) - Accent elements
- **orange-100** (`#ffedd5`) - Light backgrounds

## 📁 File Structure

```
src/styles/
├── theme.ts           # Main theme configuration
├── README.md          # This documentation
└── globals.css        # Global styles

src/components/
├── ThemeProvider.tsx  # React context provider
└── ui/               # Themed UI components

tailwind.config.js     # Tailwind CSS configuration
```

## 🚀 Usage Methods

### 1. Using Tailwind CSS Classes

The theme extends Tailwind CSS with custom color classes:

```jsx
// Primary colors
<div className="bg-primary-400 text-white">Primary Button</div>
<div className="bg-primary-50 text-primary-900">Light Background</div>

// Secondary colors
<div className="bg-secondary-300 text-white">Secondary Element</div>

// Accent colors
<div className="bg-accent-300 text-white">Accent Badge</div>

// Brand colors (shortcuts)
<div className="bg-brand-primary text-white">Brand Primary</div>
<div className="bg-brand-secondary text-white">Brand Secondary</div>
<div className="bg-brand-accent text-white">Brand Accent</div>
```

### 2. Using Custom Tailwind Utilities

Pre-built utility classes for common patterns:

```jsx
// Buttons
<button className="btn-warm">Warm Button</button>

// Cards
<div className="card-warm">Warm Card</div>

// Badges
<span className="badge-warm">Warm Badge</span>

// Inputs
<input className="input-warm" />

// Gradient text
<h1 className="text-gradient-primary">Gradient Text</h1>
<h2 className="text-gradient-secondary">Secondary Gradient</h2>
<h3 className="text-gradient-accent">Accent Gradient</h3>
```

### 3. Using Custom Gradients

```jsx
// Background gradients
<div className="bg-gradient-primary">Primary Gradient</div>
<div className="bg-gradient-secondary">Secondary Gradient</div>
<div className="bg-gradient-accent">Accent Gradient</div>
<div className="bg-gradient-warm">Multi-color Warm Gradient</div>

// Hero section
<section className="bg-gradient-hero">Hero with Overlay</section>

// Newsletter section
<section className="bg-gradient-newsletter">Newsletter Section</section>
```

### 4. Using Custom Shadows

```jsx
// Warm-tinted shadows
<div className="shadow-warm-sm">Small warm shadow</div>
<div className="shadow-warm-md">Medium warm shadow</div>
<div className="shadow-warm-lg">Large warm shadow</div>
<div className="shadow-warm-xl">Extra large warm shadow</div>

// Glow effects
<div className="shadow-glow-primary">Primary glow</div>
<div className="shadow-glow-secondary">Secondary glow</div>
<div className="shadow-glow-accent">Accent glow</div>
```

### 5. Using React Theme Provider

```jsx
import { ThemeProvider, useTheme, useColors } from '@/components/ThemeProvider';

// Wrap your app
function App() {
  return (
    <ThemeProvider>
      <YourComponent />
    </ThemeProvider>
  );
}

// Use in components
function YourComponent() {
  const { colors, getColor } = useColors();
  const { getComponentColor } = useTheme();
  
  return (
    <div style={{ backgroundColor: colors.primary[400] }}>
      <button style={{ 
        backgroundColor: getComponentColor('button', 'primary', 'background'),
        color: getComponentColor('button', 'primary', 'text')
      }}>
        Themed Button
      </button>
    </div>
  );
}
```

### 6. Using Pre-built Themed Components

```jsx
import { 
  ThemedButton, 
  ThemedCard, 
  ThemedBadge 
} from '@/components/ThemeProvider';

function Example() {
  return (
    <ThemedCard hover>
      <ThemedBadge variant="sale">SALE</ThemedBadge>
      <h3>Product Title</h3>
      <ThemedButton variant="primary" size="lg">
        Add to Cart
      </ThemedButton>
    </ThemedCard>
  );
}
```

### 7. Using Theme Object Directly

```jsx
import { theme } from '@/styles/theme';

function CustomComponent() {
  return (
    <div style={{
      backgroundColor: theme.colors.primary[400],
      color: theme.colors.text.inverse,
      padding: theme.spacing.md,
      borderRadius: theme.borderRadius.lg,
      boxShadow: theme.shadows.md,
    }}>
      Custom styled component
    </div>
  );
}
```

## 🎯 Component-Specific Usage

### Buttons

```jsx
// Using Tailwind classes
<button className="bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-lg">
  Primary Button
</button>

// Using utility class
<button className="btn-warm">
  Warm Button
</button>

// Using themed component
<ThemedButton variant="primary" size="lg">
  Themed Button
</ThemedButton>
```

### Cards

```jsx
// Using Tailwind classes
<div className="bg-white rounded-xl shadow-warm-sm border border-gray-200 hover:shadow-warm-lg transition-shadow">
  Card Content
</div>

// Using utility class
<div className="card-warm">
  Card Content
</div>

// Using themed component
<ThemedCard hover>
  Card Content
</ThemedCard>
```

### Badges

```jsx
// Using Tailwind classes
<span className="bg-primary-400 text-white px-2 py-1 rounded-md text-xs font-medium">
  Badge
</span>

// Using utility class
<span className="badge-warm">
  Badge
</span>

// Using themed component
<ThemedBadge variant="sale">
  SALE
</ThemedBadge>
```

## 🎨 Custom Animations

```jsx
// Fade in animation
<div className="animate-fade-in">Fades in</div>

// Slide animations
<div className="animate-slide-up">Slides up</div>
<div className="animate-slide-down">Slides down</div>

// Scale animation
<div className="animate-scale-in">Scales in</div>

// Gentle bounce
<div className="animate-bounce-gentle">Gentle bounce</div>

// Warm pulse
<div className="animate-pulse-warm">Warm pulse</div>

// Glow effect
<div className="animate-glow">Glowing effect</div>
```

## 🔧 Customization

### Adding New Colors

1. **Update theme.ts:**
```typescript
export const theme = {
  colors: {
    // Add your new color
    tertiary: {
      50: '#...',
      100: '#...',
      // ... more shades
    }
  }
}
```

2. **Update tailwind.config.js:**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        tertiary: {
          50: '#...',
          100: '#...',
          // ... more shades
        }
      }
    }
  }
}
```

### Adding New Component Styles

1. **Update theme.ts:**
```typescript
export const theme = {
  components: {
    // Add new component
    newComponent: {
      primary: {
        background: '#f472b6',
        text: '#ffffff',
        // ... more properties
      }
    }
  }
}
```

2. **Create utility class in tailwind.config.js:**
```javascript
function({ addUtilities, theme }) {
  const newUtilities = {
    '.new-component': {
      backgroundColor: theme('colors.primary.400'),
      color: theme('colors.white'),
      // ... more styles
    }
  };
  
  addUtilities(newUtilities);
}
```

## 📱 Responsive Design

All theme colors and utilities work with Tailwind's responsive prefixes:

```jsx
<div className="bg-primary-400 md:bg-secondary-300 lg:bg-accent-300">
  Responsive background colors
</div>

<button className="btn-warm md:bg-secondary-400 lg:bg-accent-400">
  Responsive button
</button>
```

## 🌙 Dark Mode Support

To add dark mode support, extend the theme:

```javascript
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          // Add dark variants
          dark: {
            400: '#...',
            500: '#...',
          }
        }
      }
    }
  }
}
```

## 🎯 Best Practices

1. **Use semantic color names** instead of specific color values
2. **Prefer Tailwind classes** for consistency and performance
3. **Use themed components** for complex styling logic
4. **Test color contrast** for accessibility
5. **Use gradients sparingly** for accent elements
6. **Maintain color hierarchy** with primary, secondary, and accent colors
7. **Use warm shadows** to maintain theme consistency

## 🔍 Debugging

To debug theme issues:

1. **Check browser dev tools** for applied styles
2. **Use theme object** directly to verify color values
3. **Test with different screen sizes** for responsive behavior
4. **Validate color contrast** for accessibility compliance

## 📚 Examples

See the following components for implementation examples:
- `src/components/Header.tsx` - Header styling
- `src/components/ui/Button.tsx` - Button variants
- `src/components/ProductCard.tsx` - Card styling
- `src/app/page.tsx` - Homepage layout
- `src/components/Footer.tsx` - Footer styling

## 🎨 Color Reference

### Quick Reference Table

| Usage | Tailwind Class | Hex Value | Description |
|-------|---------------|-----------|-------------|
| Primary Brand | `bg-primary-400` | `#f472b6` | Main brand color |
| Primary Light | `bg-primary-300` | `#f9a8d4` | Light accent |
| Secondary | `bg-secondary-300` | `#f9a8d4` | Secondary elements |
| Accent | `bg-accent-300` | `#fdba74` | Accent highlights |
| Success | `bg-success-500` | `#f97316` | Success states |
| Warning | `bg-warning-500` | `#ec4899` | Warning states |

This theme system provides a comprehensive, maintainable, and flexible approach to styling the Ray Gallery application with a cohesive warm color palette.