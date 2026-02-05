import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  const discountPercentage = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  return (
    <Link href={`/products/${product.id}`} className={`block ${className}`}>
      <Card variant="outlined" padding="none" hover className="h-full overflow-hidden">
        {/* Product Image */}
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.images[0] || '/placeholder-product.jpg'}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          
          {/* Sale Badge - VibeCrafts Style */}
          {discountPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-rose-400 text-white px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wide shadow-lg">
              SALE
            </div>
          )}
          
          {/* Featured Badge */}
          {product.featured && (
            <div className="absolute top-3 right-3 bg-orange-300 text-white px-2 py-1 rounded-md text-xs font-semibold">
              Featured
            </div>
          )}
          
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
          <Card.Title className="text-base mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
            {product.name}
          </Card.Title>
          
          <Card.Description className="text-sm mb-3 line-clamp-2">
            {product.description}
          </Card.Description>

          {/* Rating */}
          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(product.rating)
                      ? 'text-yellow-400'
                      : 'text-gray-300'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-1 text-sm text-gray-600">
                ({product.reviewCount})
              </span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-wrap gap-1 mb-4">
            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              {product.size}
            </span>
            <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              {product.material}
            </span>
            {product.color.slice(0, 2).map((color, index) => (
              <span
                key={index}
                className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
              >
                {color}
              </span>
            ))}
            {product.color.length > 2 && (
              <span className="inline-block bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                +{product.color.length - 2} more
              </span>
            )}
          </div>

          {/* Add to Cart Button */}
          <Button
            variant="primary"
            size="sm"
            className="w-full"
            disabled={!product.inStock}
            onClick={handleAddToCart}
          >
            {product.inStock ? UI_TEXT.PRODUCT.ADD_TO_CART : UI_TEXT.PRODUCT.OUT_OF_STOCK}
          </Button>
        </div>
      </Card>
    </Link>
  );
};

export default ProductCard;