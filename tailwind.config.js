/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary warm color palette (rose-based)
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
          DEFAULT: '#f472b6', // rose-400
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
          DEFAULT: '#f9a8d4', // pink-300
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
          DEFAULT: '#fdba74', // orange-300
        },
        
        // Warm success colors (using orange palette)
        success: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
          DEFAULT: '#f97316',
        },
        
        // Warm warning colors (using pink palette)
        warning: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          DEFAULT: '#ec4899',
        },
        
        // Brand colors for easy access
        brand: {
          primary: '#f472b6',    // rose-400
          secondary: '#f9a8d4',  // pink-300
          accent: '#fdba74',     // orange-300
          light: '#fdf2f8',      // rose-50
          dark: '#831843',       // rose-900
        },
      },
      
      // Custom gradients
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #f472b6 0%, #f9a8d4 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #f9a8d4 0%, #fdba74 100%)',
        'gradient-accent': 'linear-gradient(135deg, #fdba74 0%, #f472b6 100%)',
        'gradient-hero': 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.2) 50%, rgba(0,0,0,0.3) 100%)',
        'gradient-newsletter': 'linear-gradient(to right, #f472b6, #f9a8d4)',
        'gradient-warm': 'linear-gradient(45deg, #f472b6, #f9a8d4, #fdba74)',
        'gradient-radial-warm': 'radial-gradient(circle, #f472b6, #f9a8d4, #fdba74)',
      },
      
      // Custom box shadows with warm colors
      boxShadow: {
        'warm-sm': '0 1px 2px 0 rgba(244, 114, 182, 0.05)',
        'warm-md': '0 4px 6px -1px rgba(244, 114, 182, 0.1), 0 2px 4px -1px rgba(244, 114, 182, 0.06)',
        'warm-lg': '0 10px 15px -3px rgba(244, 114, 182, 0.1), 0 4px 6px -2px rgba(244, 114, 182, 0.05)',
        'warm-xl': '0 20px 25px -5px rgba(244, 114, 182, 0.1), 0 10px 10px -5px rgba(244, 114, 182, 0.04)',
        'warm-2xl': '0 25px 50px -12px rgba(244, 114, 182, 0.25)',
        'warm-inner': 'inset 0 2px 4px 0 rgba(244, 114, 182, 0.06)',
        'glow-primary': '0 0 20px rgba(244, 114, 182, 0.3)',
        'glow-secondary': '0 0 20px rgba(249, 168, 212, 0.3)',
        'glow-accent': '0 0 20px rgba(253, 186, 116, 0.3)',
      },
      
      // Custom border colors
      borderColor: {
        'warm': '#f472b6',
        'warm-light': '#f9a8d4',
        'warm-accent': '#fdba74',
      },
      
      // Custom ring colors for focus states
      ringColor: {
        'warm': '#f472b6',
        'warm-light': '#f9a8d4',
        'warm-accent': '#fdba74',
      },
      
      // Custom text colors
      textColor: {
        'warm': '#f472b6',
        'warm-light': '#f9a8d4',
        'warm-accent': '#fdba74',
        'warm-dark': '#831843',
      },
      
      // Custom spacing for consistent design
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '128': '32rem',   // 512px
        '144': '36rem',   // 576px
      },
      
      // Custom font families
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Georgia', 'serif'],
        'mono': ['Monaco', 'Consolas', 'monospace'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      
      // Custom animations
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'pulse-warm': 'pulseWarm 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      
      // Custom keyframes
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(-5%)' },
          '50%': { transform: 'translateY(0)' },
        },
        pulseWarm: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(244, 114, 182, 0.2), 0 0 10px rgba(244, 114, 182, 0.2), 0 0 15px rgba(244, 114, 182, 0.2)' },
          '100%': { boxShadow: '0 0 10px rgba(244, 114, 182, 0.4), 0 0 20px rgba(244, 114, 182, 0.4), 0 0 30px rgba(244, 114, 182, 0.4)' },
        },
      },
      
      // Custom backdrop blur
      backdropBlur: {
        'xs': '2px',
      },
      
      // Custom border radius
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      
      // Custom z-index values
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      
      // Custom container sizes
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
      
      // Custom aspect ratios
      aspectRatio: {
        '4/3': '4 / 3',
        '3/2': '3 / 2',
        '2/3': '2 / 3',
        '9/16': '9 / 16',
      },
    },
  },
  plugins: [
    // Add any additional plugins here
    function({ addUtilities, theme }) {
      const newUtilities = {
        // Custom gradient text utilities
        '.text-gradient-primary': {
          background: 'linear-gradient(135deg, #f472b6 0%, #f9a8d4 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-secondary': {
          background: 'linear-gradient(135deg, #f9a8d4 0%, #fdba74 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        '.text-gradient-accent': {
          background: 'linear-gradient(135deg, #fdba74 0%, #f472b6 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
          'background-clip': 'text',
        },
        
        // Custom button utilities
        '.btn-warm': {
          backgroundColor: theme('colors.primary.400'),
          color: theme('colors.white'),
          padding: theme('spacing.2') + ' ' + theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          fontWeight: theme('fontWeight.medium'),
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: theme('colors.primary.500'),
            transform: 'translateY(-1px)',
            boxShadow: theme('boxShadow.warm-md'),
          },
          '&:focus': {
            outline: 'none',
            ringWidth: '2px',
            ringColor: theme('colors.primary.300'),
            ringOffsetWidth: '2px',
          },
        },
        
        // Custom card utilities
        '.card-warm': {
          backgroundColor: theme('colors.white'),
          borderRadius: theme('borderRadius.xl'),
          boxShadow: theme('boxShadow.warm-sm'),
          border: '1px solid ' + theme('colors.gray.200'),
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            boxShadow: theme('boxShadow.warm-lg'),
            transform: 'translateY(-2px)',
          },
        },
        
        // Custom badge utilities
        '.badge-warm': {
          backgroundColor: theme('colors.primary.400'),
          color: theme('colors.white'),
          padding: theme('spacing.1') + ' ' + theme('spacing.2'),
          borderRadius: theme('borderRadius.md'),
          fontSize: theme('fontSize.xs'),
          fontWeight: theme('fontWeight.medium'),
          textTransform: 'uppercase',
          letterSpacing: theme('letterSpacing.wide'),
        },
        
        // Custom input utilities
        '.input-warm': {
          borderColor: theme('colors.gray.300'),
          borderRadius: theme('borderRadius.lg'),
          padding: theme('spacing.3'),
          transition: 'all 0.2s ease-in-out',
          '&:focus': {
            outline: 'none',
            borderColor: theme('colors.primary.400'),
            ringWidth: '2px',
            ringColor: theme('colors.primary.300'),
            ringOffsetWidth: '0px',
          },
        },
      };
      
      addUtilities(newUtilities);
    },
  ],
};