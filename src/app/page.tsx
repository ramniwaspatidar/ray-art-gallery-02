'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '@/types';
import { APP_CONSTANTS } from '@/constants';
import { theme } from '@/styles/theme';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Mock featured products
const mockFeaturedProducts: Product[] = [
  {
    id: '1',
    name: 'Modern Abstract Wall Art',
    description: 'Beautiful modern abstract painting perfect for contemporary spaces',
    price: 2499,
    originalPrice: 3499,
    images: ['/api/placeholder/400/400'],
    category: 'wall-decors',
    tags: ['modern', 'abstract', 'contemporary'],
    inStock: true,
    stockQuantity: 15,
    rating: 4.5,
    reviewCount: 23,
    dimensions: { width: 60, height: 80, unit: 'cm' },
    material: 'Canvas',
    color: ['Multicolor'],
    size: 'Large',
    featured: true,
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '3',
    name: 'Minimalist Metal Wall Clock',
    description: 'Sleek minimalist wall clock with metal finish',
    price: 899,
    originalPrice: 1299,
    images: ['/api/placeholder/400/400'],
    category: 'clocks',
    tags: ['minimalist', 'metal', 'modern'],
    inStock: true,
    stockQuantity: 25,
    rating: 4.3,
    reviewCount: 42,
    dimensions: { width: 30, height: 30, unit: 'cm' },
    material: 'Metal',
    color: ['Black', 'Silver'],
    size: 'Small',
    featured: true,
    createdAt: '2024-01-20T00:00:00Z',
    updatedAt: '2024-01-20T00:00:00Z',
  },
  {
    id: '6',
    name: 'Geometric Wall Decal',
    description: 'Modern geometric pattern wall decal for contemporary spaces',
    price: 599,
    images: ['/api/placeholder/400/400'],
    category: 'wall-decors',
    tags: ['geometric', 'modern', 'decal'],
    inStock: true,
    stockQuantity: 50,
    rating: 4.2,
    reviewCount: 67,
    material: 'Vinyl',
    color: ['Gold', 'Black'],
    size: 'Medium',
    featured: true,
    createdAt: '2024-01-18T00:00:00Z',
    updatedAt: '2024-01-18T00:00:00Z',
  },
];

const HomePage: React.FC = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProducts = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 800));
      setFeaturedProducts(mockFeaturedProducts);
      setLoading(false);
    };

    fetchFeaturedProducts();
  }, []);

  const handleAddToCart = (product: Product) => {
    console.log('Add to cart:', product);
    alert(`Added "${product.name}" to cart!`);
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background.primary }}>
      {/* Top Promotional Banner */}
      <div 
        className="text-white text-center py-3 px-4"
        style={{ 
          background: `linear-gradient(to right, ${theme.colors.primary[600]}, ${theme.colors.primary[500]})`,
          fontFamily: theme.typography.fontFamily.sans.join(', ')
        }}
      >
        <p className="text-sm font-medium">
          🚚 EXPRESS DELIVERY AND EXTRA 10% OFF ON PRE-PAID ORDERS
        </p>
      </div>

      <Header />
      
      <main>
        {/* Hero Section - Header Image Background */}
        <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/header.png)'
            }}
          ></div>
          
          {/* Overlay for better text readability */}
          <div 
            className="absolute inset-0"
            style={{ background: theme.gradients.hero }}
            data-hero-overlay
          ></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div style={{ color: theme.components.hero.textPrimary }}>

              <h1 
                className="text-5xl lg:text-7xl font-bold mb-6"
                style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
              >
                <span 
                  className="font-serif italic flex justify-start mb-5"
                  style={{ color: theme.colors.primary[300] }}
                >
                  Love
                </span>
                <span 
                  className="block font-serif"
                  style={{ color: theme.colors.accent[300] }}
                >
                  Lives Here
                </span>
              </h1>

              {/* Decorative Hearts */}
              <div className="flex justify-end mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">💖</span>
                  <span className="text-xl">•</span>
                  <span className="text-2xl">💖</span>
                  <span className="text-xl">•</span>
                  <span className="text-2xl">💖</span>
                </div>
              </div>
              
              <p 
                className="text-xl mt-20 max-w-5xl mx-auto"
                style={{ 
                  color: theme.colors.neutral[200],
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
              >
                Transform your space with our handmade Mandala, Resin and Mirror art collection.
                Discover wall clocks, keychains and MDF décor that reflect your unique style.
              </p>

         
            </div>
            
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ 
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
              >
                Wall Decor
              </h2>
              <div className="flex justify-between items-center">
                <div></div>
                <p style={{ color: theme.colors.text.secondary }}>
                  {mockFeaturedProducts.length} Items
                </p>
                <div className="flex items-center space-x-2">
                  <span 
                    className="text-sm"
                    style={{ color: theme.colors.text.secondary }}
                  >
                    Sort
                  </span>
                  <select 
                    className="rounded-lg px-3 py-1 text-sm"
                    style={{ 
                      border: `1px solid ${theme.colors.border.primary}`,
                      color: theme.colors.text.primary,
                      backgroundColor: theme.colors.background.primary
                    }}
                  >
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest</option>
                  </select>
                </div>
              </div>
            </div>
            
            <ProductGrid
              products={featuredProducts}
              loading={loading}
              onAddToCart={handleAddToCart}
              className="mb-8"
            />
            
            <div className="text-center">
              <Link href="/collections">
                <Button 
                  size="lg" 
                  className="text-white"
                  style={{ 
                    backgroundColor: theme.colors.primary[400],
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                  onMouseEnter={(e: React.MouseEvent<Element>) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = theme.colors.primary[500];
                  }}
                  onMouseLeave={(e: React.MouseEvent<Element>) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = theme.colors.primary[400];
                  }}
                >
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section 
          className="py-16"
          style={{ backgroundColor: theme.colors.background.secondary }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ 
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
              >
                Why Choose {APP_CONSTANTS.APP_NAME}?
              </h2>
              <p 
                className="text-lg max-w-2xl mx-auto"
                style={{ 
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
              >
                We offer the finest collection of wall decor items with exceptional quality and service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card variant="elevated" padding="lg" className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: theme.components.features.iconBackgrounds.primary }}
                >
                  <svg 
                    className="w-8 h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: theme.components.features.iconColors.primary }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <Card.Title 
                  className="mb-2"
                  style={{ 
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                >
                  Premium Quality
                </Card.Title>
                <Card.Description
                  style={{ 
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                >
                  Hand-picked items made from the finest materials to ensure lasting beauty and durability.
                </Card.Description>
              </Card>

              <Card variant="elevated" padding="lg" className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: theme.components.features.iconBackgrounds.secondary }}
                >
                  <svg 
                    className="w-8 h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: theme.components.features.iconColors.secondary }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <Card.Title 
                  className="mb-2"
                  style={{ 
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                >
                  Fast Delivery
                </Card.Title>
                <Card.Description
                  style={{ 
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                >
                  Quick and secure shipping to get your beautiful wall decor items to you as soon as possible.
                </Card.Description>
              </Card>

              <Card variant="elevated" padding="lg" className="text-center">
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: theme.components.features.iconBackgrounds.accent }}
                >
                  <svg 
                    className="w-8 h-8" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    style={{ color: theme.components.features.iconColors.accent }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <Card.Title 
                  className="mb-2"
                  style={{ 
                    color: theme.colors.text.primary,
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                >
                  Customer Satisfaction
                </Card.Title>
                <Card.Description
                  style={{ 
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                >
                  100% satisfaction guarantee with easy returns and dedicated customer support.
                </Card.Description>
              </Card>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 
                className="text-3xl font-bold mb-4"
                style={{ 
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
              >
                Shop by Category
              </h2>
              <p 
                className="text-lg"
                style={{ 
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
              >
                Explore our diverse range of wall decor categories.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'Wall Art', href: '/collections?category=paintings', gradient: theme.gradients.primary },
                { name: 'Mirrors', href: '/collections?category=mirrors', gradient: theme.gradients.secondary },
                { name: 'Clocks', href: '/collections?category=clocks', gradient: theme.gradients.accent },
                { name: 'Frames', href: '/collections?category=frames', gradient: theme.gradients.primary },
              ].map((category) => (
                <Link key={category.name} href={category.href}>
                  <Card hover className="overflow-hidden group">
                    <div className="aspect-video relative">
                      <div 
                        className="absolute inset-0 opacity-80"
                        style={{ background: category.gradient }}
                      ></div>
                      <div 
                        className="absolute inset-0"
                        style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)' }}
                      ></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 
                          className="text-lg font-semibold group-hover:text-yellow-300 transition-colors"
                          style={{ fontFamily: theme.typography.fontFamily.sans.join(', ') }}
                        >
                          {category.name}
                        </h3>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section 
          className="py-16 text-white"
          style={{ background: theme.gradients.newsletter }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: theme.typography.fontFamily.sans.join(', ') }}
            >
              Stay Updated with Latest Collections
            </h2>
            <p 
              className="text-xl mb-8 max-w-2xl mx-auto"
              style={{ fontFamily: theme.typography.fontFamily.sans.join(', ') }}
            >
              Subscribe to our newsletter and be the first to know about new arrivals, special offers, and design tips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
                style={{ 
                  color: theme.colors.text.primary,
                  backgroundColor: theme.colors.background.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
              />
              <Button 
                style={{ 
                  backgroundColor: theme.components.newsletter.button.background,
                  color: theme.components.newsletter.button.text,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
                onMouseEnter={(e: React.MouseEvent<Element>) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = theme.components.newsletter.button.hover;
                }}
                onMouseLeave={(e: React.MouseEvent<Element>) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = theme.components.newsletter.button.background;
                }}
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
