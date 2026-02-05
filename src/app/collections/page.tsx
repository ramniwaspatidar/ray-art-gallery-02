'use client';

import React, { useState, useEffect } from 'react';
import { Product, FilterOptions, SortOption, ProductsResponse } from '@/types';
import { UI_TEXT, PAGINATION } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProductGrid from '@/components/ProductGrid';
import ProductFilter from '@/components/ProductFilter';
import Button from '@/components/ui/Button';

// Mock data for demonstration (since we don't have real APIs yet)
const mockProducts: Product[] = [
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
    id: '2',
    name: 'Vintage Wooden Frame Mirror',
    description: 'Elegant vintage-style mirror with ornate wooden frame',
    price: 1899,
    images: ['/api/placeholder/400/400'],
    category: 'mirrors',
    tags: ['vintage', 'wooden', 'ornate'],
    inStock: true,
    stockQuantity: 8,
    rating: 4.8,
    reviewCount: 15,
    dimensions: { width: 45, height: 60, unit: 'cm' },
    material: 'Wood',
    color: ['Brown'],
    size: 'Medium',
    featured: false,
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z',
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
    id: '4',
    name: 'Botanical Print Set',
    description: 'Set of 3 botanical prints in elegant frames',
    price: 1599,
    images: ['/api/placeholder/400/400'],
    category: 'paintings',
    tags: ['botanical', 'nature', 'set'],
    inStock: false,
    stockQuantity: 0,
    rating: 4.6,
    reviewCount: 18,
    dimensions: { width: 25, height: 35, unit: 'cm' },
    material: 'Paper',
    color: ['Green', 'White'],
    size: 'Small',
    featured: false,
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z',
  },
  // Add more mock products...
  {
    id: '5',
    name: 'Industrial Pipe Shelf',
    description: 'Rustic industrial-style wall shelf with metal pipes',
    price: 3299,
    images: ['/api/placeholder/400/400'],
    category: 'wall-decors',
    tags: ['industrial', 'rustic', 'functional'],
    inStock: true,
    stockQuantity: 12,
    rating: 4.4,
    reviewCount: 31,
    dimensions: { width: 80, height: 20, depth: 25, unit: 'cm' },
    material: 'Metal',
    color: ['Black'],
    size: 'Large',
    featured: false,
    createdAt: '2024-01-12T00:00:00Z',
    updatedAt: '2024-01-12T00:00:00Z',
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

const CollectionsPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    priceRange: { min: 0, max: Infinity },
    sizes: [],
    colors: [],
    materials: [],
    inStock: false,
  });
  const [sortBy, setSortBy] = useState<SortOption>('featured');

  // Simulate API call
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setProducts(mockProducts);
      setFilteredProducts(mockProducts);
      setTotalPages(Math.ceil(mockProducts.length / PAGINATION.DEFAULT_PAGE_SIZE));
      setLoading(false);
    };

    fetchProducts();
  }, []);

  // Apply filters and sorting
  useEffect(() => {
    let filtered = [...products];

    // Apply category filter
    if (filters.categories.length > 0) {
      filtered = filtered.filter(product => 
        filters.categories.includes(product.category)
      );
    }

    // Apply price range filter
    if (filters.priceRange.min > 0 || filters.priceRange.max < Infinity) {
      filtered = filtered.filter(product => 
        product.price >= filters.priceRange.min && 
        product.price <= filters.priceRange.max
      );
    }

    // Apply size filter
    if (filters.sizes.length > 0) {
      filtered = filtered.filter(product => 
        filters.sizes.includes(product.size)
      );
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      filtered = filtered.filter(product => 
        product.color.some(color => filters.colors.includes(color))
      );
    }

    // Apply material filter
    if (filters.materials.length > 0) {
      filtered = filtered.filter(product => 
        filters.materials.includes(product.material)
      );
    }

    // Apply stock filter
    if (filters.inStock) {
      filtered = filtered.filter(product => product.inStock);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low-high':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high-low':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        filtered.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        break;
      case 'best-selling':
        filtered.sort((a, b) => b.reviewCount - a.reviewCount);
        break;
      case 'alphabetical':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'featured':
      default:
        filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
        break;
    }

    setFilteredProducts(filtered);
    setTotalPages(Math.ceil(filtered.length / PAGINATION.DEFAULT_PAGE_SIZE));
    setCurrentPage(1);
  }, [products, filters, sortBy]);

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleSortChange = (newSort: SortOption) => {
    setSortBy(newSort);
  };

  const handleClearFilters = () => {
    setFilters({
      categories: [],
      priceRange: { min: 0, max: Infinity },
      sizes: [],
      colors: [],
      materials: [],
      inStock: false,
    });
  };

  const handleAddToCart = (product: Product) => {
    // TODO: Implement add to cart functionality
    console.log('Add to cart:', product);
    alert(`Added "${product.name}" to cart!`);
  };

  const handleLoadMore = () => {
    setCurrentPage(prev => prev + 1);
  };

  // Get products for current page
  const startIndex = (currentPage - 1) * PAGINATION.DEFAULT_PAGE_SIZE;
  const endIndex = startIndex + PAGINATION.DEFAULT_PAGE_SIZE;
  const currentProducts = filteredProducts.slice(0, endIndex);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {UI_TEXT.GALLERY.WALL_DECORS}
          </h1>
          <p className="text-gray-600">
            Discover our beautiful collection of wall decor items to transform your space.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <ProductFilter
              filters={filters}
              sortBy={sortBy}
              onFiltersChange={handleFiltersChange}
              onSortChange={handleSortChange}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-gray-600">
                Showing {currentProducts.length} of {filteredProducts.length} products
              </p>
            </div>

            {/* Product Grid */}
            <ProductGrid
              products={currentProducts}
              loading={loading}
              onAddToCart={handleAddToCart}
              className="mb-8"
            />

            {/* Load More Button */}
            {currentProducts.length < filteredProducts.length && (
              <div className="text-center">
                <Button
                  variant="outline"
                  size="lg"
                  onClick={handleLoadMore}
                >
                  {UI_TEXT.GALLERY.LOAD_MORE}
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CollectionsPage;