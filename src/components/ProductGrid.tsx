import React from 'react';
import { Product } from '@/types';
import { UI_TEXT } from '@/constants';
import ProductCard from './ProductCard';

interface ProductGridProps {
  products: Product[];
  loading?: boolean;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  loading = false,
  onAddToCart,
  className = '',
}) => {
  if (loading) {
    return (
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
        {[...Array(8)].map((_, index) => (
          <ProductCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className={`flex flex-col items-center justify-center py-12 ${className}`}>
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            {UI_TEXT.GALLERY.NO_PRODUCTS}
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Try adjusting your search or filter criteria.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 ${className}`}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};

// Skeleton component for loading state
const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden animate-pulse">
      {/* Image skeleton */}
      <div className="aspect-square bg-gray-300"></div>
      
      {/* Content skeleton */}
      <div className="p-4">
        {/* Title skeleton */}
        <div className="h-4 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded w-3/4 mb-3"></div>
        
        {/* Description skeleton */}
        <div className="h-3 bg-gray-300 rounded mb-1"></div>
        <div className="h-3 bg-gray-300 rounded w-2/3 mb-3"></div>
        
        {/* Rating skeleton */}
        <div className="flex items-center mb-3">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-4 w-4 bg-gray-300 rounded"></div>
            ))}
          </div>
          <div className="ml-2 h-3 w-8 bg-gray-300 rounded"></div>
        </div>
        
        {/* Price skeleton */}
        <div className="flex items-center justify-between mb-4">
          <div className="h-5 w-16 bg-gray-300 rounded"></div>
          <div className="h-4 w-12 bg-gray-300 rounded"></div>
        </div>
        
        {/* Tags skeleton */}
        <div className="flex gap-1 mb-4">
          <div className="h-6 w-12 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-16 bg-gray-300 rounded-full"></div>
          <div className="h-6 w-14 bg-gray-300 rounded-full"></div>
        </div>
        
        {/* Button skeleton */}
        <div className="h-8 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductGrid;