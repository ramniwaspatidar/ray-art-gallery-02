'use client';

import React from 'react';
import { useTheme, ThemedButton, ThemedCard, ThemedBadge } from './ThemeProvider';

/**
 * ThemeShowcase Component
 * 
 * This component demonstrates all the available theme colors and utilities.
 * Use this as a reference for implementing the warm color theme throughout the application.
 */
const ThemeShowcase: React.FC = () => {
  const { colors, getColor, getComponentColor } = useTheme();

  return (
    <div className="p-8 space-y-12 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gradient-primary">
          Ray Art Gallery Theme Showcase
        </h1>
        <p className="text-center text-gray-600 mb-12">
          Demonstrating the warm color palette: Rose, Pink, and Orange
        </p>

        {/* Color Palette Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Color Palette</h2>
          
          {/* Primary Colors (Rose) */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-primary-400">Primary Colors (Rose)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {Object.entries(colors.primary).map(([shade, color]) => (
                <div key={shade} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-lg shadow-warm-sm mb-2 mx-auto"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs font-medium text-gray-700">rose-{shade}</p>
                  <p className="text-xs text-gray-500">{color}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary Colors (Pink) */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-secondary-300">Secondary Colors (Pink)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {Object.entries(colors.secondary).map(([shade, color]) => (
                <div key={shade} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-lg shadow-warm-sm mb-2 mx-auto"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs font-medium text-gray-700">pink-{shade}</p>
                  <p className="text-xs text-gray-500">{color}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Accent Colors (Orange) */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-accent-300">Accent Colors (Orange)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
              {Object.entries(colors.accent).map(([shade, color]) => (
                <div key={shade} className="text-center">
                  <div 
                    className="w-16 h-16 rounded-lg shadow-warm-sm mb-2 mx-auto"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs font-medium text-gray-700">orange-{shade}</p>
                  <p className="text-xs text-gray-500">{color}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Buttons Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Button Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Tailwind CSS Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Tailwind CSS Classes</h3>
              <button className="w-full bg-primary-400 hover:bg-primary-500 text-white px-4 py-2 rounded-lg transition-colors">
                Primary Button
              </button>
              <button className="w-full bg-secondary-300 hover:bg-secondary-400 text-white px-4 py-2 rounded-lg transition-colors">
                Secondary Button
              </button>
              <button className="w-full bg-accent-300 hover:bg-accent-400 text-white px-4 py-2 rounded-lg transition-colors">
                Accent Button
              </button>
              <button className="w-full border-2 border-primary-400 text-primary-400 hover:bg-primary-400 hover:text-white px-4 py-2 rounded-lg transition-colors">
                Outline Button
              </button>
            </div>

            {/* Utility Class Buttons */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Utility Classes</h3>
              <button className="w-full btn-warm">
                Warm Button
              </button>
              <button className="w-full bg-secondary-300 text-white px-4 py-2 rounded-lg hover:bg-secondary-400 transition-all hover:-translate-y-1 shadow-warm-md">
                Hover Effect
              </button>
              <button className="w-full bg-gradient-primary text-white px-4 py-2 rounded-lg hover:shadow-glow-primary transition-all">
                Gradient Button
              </button>
              <button className="w-full bg-white border border-primary-400 text-primary-400 px-4 py-2 rounded-lg hover:shadow-warm-md transition-all">
                Ghost Button
              </button>
            </div>

            {/* Themed Components */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Themed Components</h3>
              <ThemedButton variant="primary" size="md" className="w-full">
                Primary Themed
              </ThemedButton>
              <ThemedButton variant="secondary" size="md" className="w-full">
                Secondary Themed
              </ThemedButton>
              <ThemedButton variant="outline" size="md" className="w-full">
                Outline Themed
              </ThemedButton>
              <ThemedButton variant="ghost" size="md" className="w-full">
                Ghost Themed
              </ThemedButton>
            </div>

            {/* Size Variants */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Size Variants</h3>
              <ThemedButton variant="primary" size="sm" className="w-full">
                Small Button
              </ThemedButton>
              <ThemedButton variant="primary" size="md" className="w-full">
                Medium Button
              </ThemedButton>
              <ThemedButton variant="primary" size="lg" className="w-full">
                Large Button
              </ThemedButton>
              <button className="w-full bg-primary-400 text-white px-6 py-4 rounded-xl text-lg font-semibold hover:bg-primary-500 transition-colors">
                Extra Large
              </button>
            </div>
          </div>
        </section>

        {/* Cards Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Card Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Basic Card */}
            <div className="card-warm p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Basic Card</h3>
              <p className="text-gray-600 mb-4">Using utility class card-warm</p>
              <ThemedBadge variant="sale">SALE</ThemedBadge>
            </div>

            {/* Themed Card */}
            <ThemedCard className="p-6">
              <h3 className="text-lg font-semibold mb-2 text-gray-900">Themed Card</h3>
              <p className="text-gray-600 mb-4">Using ThemedCard component</p>
              <ThemedBadge variant="featured">FEATURED</ThemedBadge>
            </ThemedCard>

            {/* Gradient Card */}
            <div className="bg-gradient-primary p-6 rounded-xl text-white shadow-warm-lg">
              <h3 className="text-lg font-semibold mb-2">Gradient Card</h3>
              <p className="text-white/90 mb-4">Using gradient background</p>
              <span className="bg-white/20 text-white px-2 py-1 rounded-md text-xs font-medium">
                PREMIUM
              </span>
            </div>
          </div>
        </section>

        {/* Badges Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Badge Variants</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Themed Badges</h3>
              <div className="space-y-2">
                <ThemedBadge variant="sale">SALE</ThemedBadge>
                <ThemedBadge variant="featured">FEATURED</ThemedBadge>
                <ThemedBadge variant="discount">50% OFF</ThemedBadge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Utility Badges</h3>
              <div className="space-y-2">
                <span className="badge-warm">WARM BADGE</span>
                <span className="bg-secondary-300 text-white px-2 py-1 rounded-md text-xs font-medium">SECONDARY</span>
                <span className="bg-accent-300 text-white px-2 py-1 rounded-md text-xs font-medium">ACCENT</span>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-gray-700">Custom Badges</h3>
              <div className="space-y-2">
                <span className="bg-gradient-primary text-white px-3 py-1 rounded-full text-xs font-medium">GRADIENT</span>
                <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-xs font-medium">SOFT</span>
                <span className="border border-primary-400 text-primary-400 px-3 py-1 rounded-full text-xs font-medium">OUTLINE</span>
              </div>
            </div>
          </div>
        </section>

        {/* Gradients Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Gradient Backgrounds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-gradient-primary p-8 rounded-xl text-white text-center">
              <h3 className="text-lg font-semibold mb-2">Primary Gradient</h3>
              <p className="text-white/90">Rose to Pink</p>
            </div>

            <div className="bg-gradient-secondary p-8 rounded-xl text-white text-center">
              <h3 className="text-lg font-semibold mb-2">Secondary Gradient</h3>
              <p className="text-white/90">Pink to Orange</p>
            </div>

            <div className="bg-gradient-accent p-8 rounded-xl text-white text-center">
              <h3 className="text-lg font-semibold mb-2">Accent Gradient</h3>
              <p className="text-white/90">Orange to Rose</p>
            </div>

            <div className="bg-gradient-warm p-8 rounded-xl text-white text-center">
              <h3 className="text-lg font-semibold mb-2">Warm Gradient</h3>
              <p className="text-white/90">Multi-color Warm</p>
            </div>

            <div className="bg-gradient-radial-warm p-8 rounded-xl text-white text-center">
              <h3 className="text-lg font-semibold mb-2">Radial Gradient</h3>
              <p className="text-white/90">Radial Warm</p>
            </div>

            <div className="bg-gradient-newsletter p-8 rounded-xl text-white text-center">
              <h3 className="text-lg font-semibold mb-2">Newsletter Gradient</h3>
              <p className="text-white/90">Newsletter Style</p>
            </div>
          </div>
        </section>

        {/* Text Gradients Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Text Gradients</h2>
          <div className="space-y-4 text-center">
            <h1 className="text-4xl font-bold text-gradient-primary">
              Primary Gradient Text
            </h1>
            <h2 className="text-3xl font-bold text-gradient-secondary">
              Secondary Gradient Text
            </h2>
            <h3 className="text-2xl font-bold text-gradient-accent">
              Accent Gradient Text
            </h3>
          </div>
        </section>

        {/* Shadows Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Shadow Effects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow-warm-sm">
              <h3 className="font-semibold mb-2">Small Shadow</h3>
              <p className="text-gray-600 text-sm">shadow-warm-sm</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-warm-md">
              <h3 className="font-semibold mb-2">Medium Shadow</h3>
              <p className="text-gray-600 text-sm">shadow-warm-md</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-warm-lg">
              <h3 className="font-semibold mb-2">Large Shadow</h3>
              <p className="text-gray-600 text-sm">shadow-warm-lg</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-warm-xl">
              <h3 className="font-semibold mb-2">Extra Large</h3>
              <p className="text-gray-600 text-sm">shadow-warm-xl</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-glow-primary">
              <h3 className="font-semibold mb-2">Primary Glow</h3>
              <p className="text-gray-600 text-sm">shadow-glow-primary</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-glow-secondary">
              <h3 className="font-semibold mb-2">Secondary Glow</h3>
              <p className="text-gray-600 text-sm">shadow-glow-secondary</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-glow-accent">
              <h3 className="font-semibold mb-2">Accent Glow</h3>
              <p className="text-gray-600 text-sm">shadow-glow-accent</p>
            </div>

            <div className="bg-white p-6 rounded-lg animate-glow">
              <h3 className="font-semibold mb-2">Animated Glow</h3>
              <p className="text-gray-600 text-sm">animate-glow</p>
            </div>
          </div>
        </section>

        {/* Animations Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Animations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="bg-white p-6 rounded-lg shadow-warm-md animate-fade-in">
              <h3 className="font-semibold mb-2">Fade In</h3>
              <p className="text-gray-600 text-sm">animate-fade-in</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-warm-md animate-slide-up">
              <h3 className="font-semibold mb-2">Slide Up</h3>
              <p className="text-gray-600 text-sm">animate-slide-up</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-warm-md animate-scale-in">
              <h3 className="font-semibold mb-2">Scale In</h3>
              <p className="text-gray-600 text-sm">animate-scale-in</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-warm-md animate-bounce-gentle">
              <h3 className="font-semibold mb-2">Gentle Bounce</h3>
              <p className="text-gray-600 text-sm">animate-bounce-gentle</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-warm-md animate-pulse-warm">
              <h3 className="font-semibold mb-2">Warm Pulse</h3>
              <p className="text-gray-600 text-sm">animate-pulse-warm</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-warm-md animate-glow">
              <h3 className="font-semibold mb-2">Glow Effect</h3>
              <p className="text-gray-600 text-sm">animate-glow</p>
            </div>
          </div>
        </section>

        {/* Usage Examples */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Real-world Examples</h2>
          
          {/* Product Card Example */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <div className="card-warm overflow-hidden">
              <div className="aspect-square bg-gradient-secondary relative">
                <ThemedBadge variant="sale" className="absolute top-3 left-3">
                  SALE
                </ThemedBadge>
                <ThemedBadge variant="featured" className="absolute top-3 right-3">
                  FEATURED
                </ThemedBadge>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Product Title</h3>
                <p className="text-gray-600 text-sm mb-3">Product description goes here</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-primary-400">$99</span>
                    <span className="text-sm text-gray-500 line-through ml-2">$149</span>
                  </div>
                  <ThemedButton variant="primary" size="sm">
                    Add to Cart
                  </ThemedButton>
                </div>
              </div>
            </div>

            {/* Hero Section Example */}
            <div className="col-span-1 md:col-span-2 bg-gradient-hero bg-primary-400 rounded-xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h2 className="text-3xl font-bold mb-4">Hero Section</h2>
                <p className="text-white/90 mb-6">
                  This demonstrates how the warm theme can be used in hero sections with gradients and overlays.
                </p>
                <div className="space-x-4">
                  <ThemedButton variant="outline" className="border-white text-white hover:bg-white hover:text-primary-400">
                    Learn More
                  </ThemedButton>
                  <button className="bg-white text-primary-400 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
              <div className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 left-4 w-24 h-24 bg-white/5 rounded-full blur-lg"></div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-gray-200">
          <p className="text-gray-600">
            This showcase demonstrates the complete warm color theme implementation for Ray Art Gallery.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            All colors are based on rose-300, pink-300, orange-300, and rose-400 palette.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default ThemeShowcase;