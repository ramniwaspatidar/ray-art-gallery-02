'use client';

import React, { Suspense, useCallback, useEffect, useRef, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { networkService } from '@/services/NetworkService';
import toast from 'react-hot-toast';
import { Product, ApiResponse, ProductsResponse } from '@/types';
import { APP_CONSTANTS, UI_TEXT } from '@/constants';
import { theme } from '@/styles/theme';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import FeatureCard from '@/components/FeatureCard';

// Product is now compatible with API response directly


const features = [
  {
    id: 'premium-quality',
    title: UI_TEXT.FEATURES.PREMIUM_QUALITY_TITLE,
    description: UI_TEXT.FEATURES.PREMIUM_QUALITY_DESC,
    gradient: 'linear-gradient(135deg, #7bccc0 0%, #5BA8A0 50%, #2D3E5F 100%)',
    iconBgColor: 'linear-gradient(135deg, #d4f0eb, #a8e1d7)',
    iconColor: '#5BA8A0',
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
    title: UI_TEXT.FEATURES.FAST_DELIVERY_TITLE,
    description: UI_TEXT.FEATURES.FAST_DELIVERY_DESC,
    gradient: 'linear-gradient(135deg, #C9A74C 0%, #E0BD5E 50%, #f9ecc8 100%)',
    iconBgColor: 'linear-gradient(135deg, #f9ecc8, #f3d991)',
    iconColor: '#C9A74C',
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
    title: UI_TEXT.FEATURES.CUSTOMER_SATISFACTION_TITLE,
    description: UI_TEXT.FEATURES.CUSTOMER_SATISFACTION_DESC,
    gradient: 'linear-gradient(135deg, #2D3E5F 0%, #5B6BA3 50%, #8490ba 100%)',
    iconBgColor: 'linear-gradient(135deg, #d6dae8, #adb5d1)',
    iconColor: '#2D3E5F',
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

const HomePageContent: React.FC = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryFilter = searchParams.get('category') || '';
  const subCategoryFilter = searchParams.get('subCategory') || '';

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
      
      const params: Record<string, any> = {
        page,
        limit,
      };

      // Add category/subcategory filters from URL params
      if (categoryFilter) {
        params.category = categoryFilter;
      }
      if (subCategoryFilter) {
        params.subCategory = subCategoryFilter;
      }

      const response = await networkService.get<ApiResponse<ProductsResponse>>('/products', params);

      if (response.success && response.data) {
        // API now returns products matching our interface
        // The structure seems to be response.data (which is ProductsResponse) -> .products (Product[])
        // Wait, looking at types again.
        // ApiResponse<T> { success: boolean; data: T; ... }
        // ProductsResponse { products: Product[]; pagination: ... }
        // So response.data is ProductsResponse. response.data.products is the array.
        
        // However, in previous code: const newApiProducts: ApiProduct[] = response.data.data;
        // This implies response.data (axios data) .data (payload) was the array?
        // Let's assume the previous code was `response.data.data` where `response.data` is `ApiResponse`.
        // So `ApiResponse.data` was `ApiProduct[]`.
        // But `ProductsResponse` interface exists.
        // If the API returns `ApiResponse<Product[]>`, then `response.data` is `Product[]`.
        
        // Let's stick to what the previous code implied:
        // `const newApiProducts: ApiProduct[] = response.data.data;`
        // `response` was axios response. `response.data` was the body.
        // `response.data.data` was array of products.
        // So `ApiResponse<T>` where T is `Product[]`?
        
        // But `ProductsResponse` interface exists in `index.ts`.
        // Let's check `src/types/index.ts` again (step 5).
        // lines 98-108: `export interface ProductsResponse { products: Product[]; ... }`
        // But line 91: `export interface ApiResponse<T> { success: boolean; data: T; ... }`
        
        // If the backend returns `ProductsResponse` inside `data`:
        // data: { products: [...], pagination: ... }
        // Then `response.data` (from NetworkService) is `ApiResponse<ProductsResponse>`.
        // Then `response.data.data` is `ProductsResponse`.
        // Then `response.data.data.products` is `Product[]`.
        
        // But if the previous code was `response.data.data` and assigned to `ApiProduct[]`, then `data` was just the array.
        // Let's check the previous code in `page.tsx`:
        // `const newApiProducts: ApiProduct[] = response.data.data;`
        // It didn't access `.products`.
        // So the API returns `{ success: true, data: [ ...products... ], pagination: ... }`?
        // Or `{ success: true, data: { products: [...], ... } }`?
        
        // If `data` is `ApiProduct[]`, then pagination needs to be separate or `data` is `ProductsResponse`.
        // `const pagination = response.data.pagination;` suggests pagination is sibling to `data` or inside it?
        // In previous code:
        // `const newApiProducts: ApiProduct[] = response.data.data;`
        // `const pagination = response.data.pagination;`
        // This implies the body is `{ success, data: Product[], pagination: ... }`.
        
        // So `ApiResponse` has `data: T`. Here `T` is `Product[]`.
        // And `ApiResponse` also has `pagination`?
        // Let's look at `types/index.ts` again.
        // `export interface ApiResponse<T> { success: boolean; data: T; message?: string; error?: string; }`
        // It does NOT have pagination.
        // But `ProductsResponse` has `pagination`.
        
        // Maybe `T` is `ProductsResponse`?
        // `data: { products: [], pagination: ... }`.
        // Then `response.data.data.products`.
        
        // But existing code: `response.data.data` (array). AND `response.data.pagination`.
        // This implies the standard `ApiResponse` might be extended or `response.data` (axios body) has `pagination` property which is NOT in `ApiResponse` definition or `ApiResponse` definition in file is incomplete/different from actual API.
        
        // The user said "change product fields as per below response object".
        // The user didn't change the outer structure.
        
        // Let's assume the API returns:
        // {
        //   success: true,
        //   data: [ prod1, prod2 ... ],
        //   pagination: { ... }
        // }
        // And typescript interface `ApiResponse` might be finding its limit or loosely typed?
        // Or `response.data` is `any`.
        
        // In `NetworkService`: `public async get<T>(...) : Promise<T>`.
        // So `response` is `T`.
        // If I say `T = ApiResponse<Product[]> & { pagination: PaginationInfo }`.
        
        let newProducts: Product[] = [];
        if (Array.isArray(response.data)) {
             newProducts = response.data;
        } else if ((response.data as any).products) {
             newProducts = (response.data as any).products;
        }

        setProducts(prev => {
           return page === 1 ? newProducts : [...prev, ...newProducts];
        });
        
        const pagination = (response as any).pagination;
        if (pagination) {
            setHasMore(pagination.hasMore);
        } else {
             setHasMore(newProducts.length === limit);
        }

      } else {
        toast.error((response as any).message || UI_TEXT.PRODUCT_LIST.FETCH_FAILED);
        setHasMore(false);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      toast.error(UI_TEXT.PRODUCT_LIST.ERROR_LOADING);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, [page, categoryFilter, subCategoryFilter]);

  // Reset products and page when filters change
  useEffect(() => {
    setProducts([]);
    setPage(1);
    setHasMore(true);

    // Scroll to products section when a filter is applied
    if (categoryFilter || subCategoryFilter) {
      setTimeout(() => {
        const productsSection = document.getElementById('products-section');
        if (productsSection) {
          productsSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [categoryFilter, subCategoryFilter]);

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
                  {UI_TEXT.HERO.TITLE_LINE1}
                </span>
                <span className="block font-serif" style={{ color: theme.colors.accent[300] }}>
                  {UI_TEXT.HERO.TITLE_LINE2}
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
                {UI_TEXT.HERO.DESCRIPTION}
              </p>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section id="products-section" className="py-8">
          <div className="max-w mx-auto px-4 sm:px-6 lg:px-8">
            {/* Active Filter Chips */}
            {(categoryFilter || subCategoryFilter) && (
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="text-sm font-medium text-gray-500 mr-1">{UI_TEXT.FILTER.LABEL}</span>

                {categoryFilter && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-teal-50 text-teal-700 border border-teal-200 transition-all hover:bg-teal-100">
                    {categoryFilter}
                    <button
                      onClick={() => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.delete('category');
                        params.delete('subCategory');
                        router.push(params.toString() ? `/?${params.toString()}` : '/');
                      }}
                      className="ml-0.5 rounded-full p-0.5 hover:bg-teal-200 transition-colors"
                      aria-label={`Remove ${categoryFilter} filter`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                )}

                {subCategoryFilter && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium bg-amber-50 text-amber-700 border border-amber-200 transition-all hover:bg-amber-100">
                    {subCategoryFilter}
                    <button
                      onClick={() => {
                        const params = new URLSearchParams(searchParams.toString());
                        params.delete('subCategory');
                        router.push(params.toString() ? `/?${params.toString()}` : '/');
                      }}
                      className="ml-0.5 rounded-full p-0.5 hover:bg-amber-200 transition-colors"
                      aria-label={`Remove ${subCategoryFilter} filter`}
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </span>
                )}

                <button
                  onClick={() => router.push('/')}
                  className="text-xs text-gray-400 hover:text-teal-600 underline underline-offset-2 transition-colors ml-1"
                >
                  {UI_TEXT.FILTER.CLEAR_ALL}
                </button>
              </div>
            )}

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
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-600"></div>
                  )}
              </div>
            )}

            {!hasMore && products.length > 0 && (
                <div className="text-center py-8 text-gray-500">
                    {UI_TEXT.PRODUCT_LIST.END_OF_LIST}
                </div>
            )}
            
             {!loading && products.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">{UI_TEXT.PRODUCT_LIST.NO_PRODUCTS}</p>
                </div>
            )}
          </div>
        </section>

        {/* Features */}
        <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#FAFAFA' }}>
          {/* Blurred background blobs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute top-20 right-20 w-96 h-96 bg-peach-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s', backgroundColor: '#FFDAB9' }} />
          <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }} />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
                style={{
                  fontFamily: theme.typography.fontFamily.serif.join(', '),
                }}
              >
                Why Choose{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: 'linear-gradient(135deg, #5BA8A0 0%, #2D3E5F 100%)' }}
                >
                  {APP_CONSTANTS.APP_NAME}
                </span>
                {UI_TEXT.FEATURES.SECTION_TITLE_SUFFIX}
              </h2>

              <p
                className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
                style={{
                  color: theme.colors.text.secondary,
                  fontFamily: theme.typography.fontFamily.sans.join(', '),
                }}
              >
                {UI_TEXT.FEATURES.SECTION_SUBTITLE}
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

const HomePage: React.FC = () => (
  <Suspense fallback={
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
    </div>
  }>
    <HomePageContent />
  </Suspense>
);

export default HomePage;
