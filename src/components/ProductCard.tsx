'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Product } from '@/types';
import { UI_TEXT } from '@/constants';
import Card from './ui/Card';
import Button from './ui/Button';

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

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  return (
    <div onClick={handleNavigation} className={`block cursor-pointer ${className}`}>
      <Card variant="outlined" padding="none" hover className="h-full overflow-hidden">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={'/hourse.webp'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
    
          
          {/* Out of Stock Overlay */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold text-lg">
                {UI_TEXT.PRODUCT.OUT_OF_STOCK}
              </span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* <Card.Title className="text-base mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {product.name}
          </Card.Title> */}
          
          <Card.Description className="text-sm mb-3 line-clamp-1">
            {product.description}
          </Card.Description>


          {/* Price */}
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
            </div>
            
            {onAddToCart && (
              <Button
                variant="primary"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  onAddToCart(product);
                }}
                disabled={!product.inStock}
              >
                {UI_TEXT.PRODUCT.ADD_TO_CART}
              </Button>
            )}
          </div>

        </div>
      </Card>
    </div>
  );
};

export default ProductCard;