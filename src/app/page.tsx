'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Product } from '@/types';
import { APP_CONSTANTS } from '@/constants';
import { theme } from '@/styles/theme';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import FeatureCard from '@/components/FeatureCard';

// Mapper function to convert API product to frontend Product type
// Product is now compatible with API response directly


const features = [
  {
    id: 'premium-quality',
    title: 'Premium Quality',
    description: 'Hand-picked items made from the finest materials to ensure lasting beauty and durability.',
    gradient: 'linear-gradient(135deg, #FFB6C1 0%, #FFC0CB 50%, #FFD700 100%)',
    iconBgColor: 'linear-gradient(135deg, #FFB6C1, #FFC0CB)',
    iconColor: '#FF69B4',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    id: 'fast-delivery',
    title: 'Fast Delivery',
    description: 'Quick and secure shipping to get your beautiful wall decor items to you as soon as possible.',
    gradient: 'linear-gradient(135deg, #FFDAB9 0%, #FFE4B5 50%, #FFD700 100%)',
    iconBgColor: 'linear-gradient(135deg, #FFDAB9, #FFE4B5)',
    iconColor: '#FF8C00',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
        />
      </svg>
    ),
  },
  {
    id: 'customer-satisfaction',
    title: 'Customer Satisfaction',
    description: '100% satisfaction guarantee with easy returns and dedicated customer support.',
    gradient: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FF8C00 100%)',
    iconBgColor: 'linear-gradient(135deg, #FFD700, #FFA500)',
    iconColor: '#FF6347',
    icon: (
      <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
];

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Ref for infinite scroll observer
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProductElementRef = useCallback((node: HTMLDivElement) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(prevPage => prevPage + 1);
      }
    });
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore]);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      const limit = 10;
      
      // Hardcoded params for "Featured APIs" as requested
      const params = {
        search: '',
        category: '',
        page,
        limit,
      };

      const response = await axios.get('http://localhost:3001/api/products', {
        params,
      });

      if (response.data.success) {
        // API now returns products matching our interface
        const newProducts: Product[] = response.data.data;

        setProducts(prev => {
           return page === 1 ? newProducts : [...prev, ...newProducts];
        });
        
        const pagination = response.data.pagination;
        if (pagination) {
            setHasMore(pagination.hasMore);
        } else {
             setHasMore(newProducts.length === limit);
        }

      } else {
        toast.error(response.data.message || 'Failed to fetch products');
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error('Error loading products');
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleAddToCart = useCallback((product: Product) => {
    console.log('Add to cart:', product);
    toast.success(`Added "${product.name}" to cart!`);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: theme.colors.background.primary }}>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-[500px] flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: 'url(/header.png)' }}
          />

          <div className="absolute inset-0" style={{ background: theme.gradients.hero }} data-hero-overlay />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
            <div style={{ color: theme.components.hero.textPrimary }}>
              <h1
                className="text-5xl lg:text-7xl font-bold mb-6"
                style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
              >
                <span className="font-serif italic flex justify-start mb-5" style={{ color: theme.colors.primary[300] }}>
                  Love
                </span>
                <span className="block font-serif" style={{ color: theme.colors.accent[300] }}>
                  Lives Here
                </span>
              </h1>

              <div className="flex justify-end mb-6">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl animate-heart-wave inline-block" style={{ animationDelay: '0s' }}>💖</span>
                  <span className="text-xl">•</span>
                  <span className="text-2xl animate-heart-wave inline-block" style={{ animationDelay: '0.2s' }}>💖</span>
                  <span className="text-xl">•</span>
                  <span className="text-2xl animate-heart-wave inline-block" style={{ animationDelay: '0.4s' }}>💖</span>
                </div>
              </div>

              <p
                className="text-xl mt-20 max-w-5xl mx-auto"
                style={{
                  color: theme.colors.neutral[200],
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                Transform your space with our handmade Mandala, Resin and Mirror art collection. Discover wall clocks,
                keychains and MDF décor that reflect your unique style.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
            <ProductGrid
              products={products}
              loading={loading && products.length === 0}
              onAddToCart={handleAddToCart}
              className="mb-8"
            />
            
            {/* Infinite Scroll Sentinel / Loading Indicator */}
            {hasMore && (
              <div 
                ref={lastProductElementRef} 
                className="flex justify-center py-8"
              >
                  {loading && (
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-rose-600"></div>
                  )}
              </div>
            )}

            {!hasMore && products.length > 0 && (
                <div className="text-center py-8 text-gray-500">
                    You have reached the end of the list.
                </div>
            )}
            
             {!loading && products.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#FAFAFA' }}>
          {/* Blurred background blobs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-peach-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s', backgroundColor: '#FFDAB9' }} />
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent"
                style={{
                  backgroundImage: 'linear-gradient(135deg, #FF69B4 0%, #FFD700 100%)',
                  fontFamily: theme.typography.fontFamily.serif.join(', '),
                }}
              >
                Why Choose {APP_CONSTANTS.APP_NAME}?
              </h2>

              <p
                className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                We offer the finest collection of handmade wall decor items with exceptional quality and service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {features.map((feature, index) => (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  iconBgColor={feature.iconBgColor}
                  iconColor={feature.iconColor}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
