'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import Card from './ui/Card';

interface ProductCardProps {
  product: Product;
  onAddToCart?: (product: Product) => void;
  className?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  className = '',
}) => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push(`/products/${product.id}`);
  };

  const formatPrice = (price: string | number) => {
    const numericPrice = typeof price === 'string' ? parseFloat(price) : price;
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(numericPrice);
  };

  return (
    <div onClick={handleNavigation} className={`block cursor-pointer ${className}`}>
      <Card variant="outlined" padding="none" hover className="h-full overflow-hidden">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.imageUrl || '/api/placeholder/400/400'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />

        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
             <h3 className="text-base font-medium text-gray-900 line-clamp-1 group-hover:text-teal-600 transition-colors">
              {product.name}
            </h3>
          </div>
          
          <Card.Description className="text-sm mb-3 line-clamp-2 min-h-[40px]">
            {product.description}
          </Card.Description>

          {/* Features */}
          {product.features && product.features.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-3">
              {product.features.slice(0, 2).map((feature, index) => (
                <span 
                  key={index} 
                  className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-600"
                >
                  {feature}
                </span>
              ))}
              {product.features.length > 2 && (
                 <span className="text-xs text-gray-400 self-center">+{product.features.length - 2}</span>
              )}
            </div>
          )}


          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
            </div>
            
            {/* {onAddToCart && (
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                disabled={false}
              >
                {UI_TEXT.PRODUCT.ADD_TO_CART}
              </Button>
            )} */}
          </div>

        </div>
      </Card>
    </div>
  );
};

export default ProductCard;