'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import toast from 'react-hot-toast';

import { Product } from '@/types';
import { APP_CONSTANTS, UI_TEXT } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

const mockProducts: Record<string, Product> = {
  '1': {
    id: '1',
    name: 'Modern Abstract Wall Art',
    description:
      'Beautiful modern abstract painting perfect for contemporary spaces. This stunning piece features vibrant colors and geometric patterns that will transform any room into a sophisticated living space.',
    price: 2499,
    originalPrice: 3499,
    images: [
      '/hourse.webp',
      '/hourse.webp',
      '/hourse.webp',
      '/hourse.webp',
    ],
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
  '3': {
    id: '3',
    name: 'Minimalist Metal Wall Clock',
    description:
      'Sleek minimalist wall clock with metal finish. Perfect for modern homes and offices. Features silent movement and easy installation.',
    price: 899,
    originalPrice: 1299,
    images: [
      '/hourse.webp',
      '/hourse.webp',
      '/hourse.webp',
    ],
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
  '6': {
    id: '6',
    name: 'Geometric Wall Decal',
    description:
      'Modern geometric pattern wall decal for contemporary spaces. Easy to apply and remove without damaging walls. Perfect for renters and homeowners alike.',
    price: 599,
    images: ['/hourse.webp', '/hourse.webp'],
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
};

const INR_FORMATTER = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

const ProductDetailsPage: React.FC = () => {
  const params = useParams();
  const productId = params?.id as string;
  const product = useMemo(() => mockProducts[productId] ?? null, [productId]);

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const quantity = 1; // Always 1

  useEffect(() => {
    if (!product) return;

    setSelectedImageIndex(0);
    setSelectedColor(product.color?.[0] ?? '');
  }, [product]);

  const discountPercentage = useMemo(() => {
    if (!product?.originalPrice) return 0;
    return Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
  }, [product?.originalPrice, product?.price]);

  const formatPrice = useCallback((price: number) => {
    return INR_FORMATTER.format(price);
  }, []);



  const handleAddToCart = useCallback(() => {
    if (!product) return;

    console.log('Add to cart:', { product, selectedColor, quantity });
    toast.success(`Added "${product.name}" to cart!`);
  }, [product, quantity, selectedColor]);

  const handleBuyNow = useCallback(() => {
    if (!product) return;

    console.log('Buy now:', { product, selectedColor, quantity });
    toast.success(`Proceeding to checkout for "${product.name}"`);
  }, [product, quantity, selectedColor]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link
            href="/"
            className="text-rose-600 font-semibold hover:underline"
          >
            Go back home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w mx-auto px-4 sm:px-6 lg:px-8 py-8">
     
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="flex gap-4">
              {/* Thumbnail Images - Left Side */}
              <div className="flex flex-col gap-2 w-20">
                {product.images.map((image, index) => (
                  <button
                    key={image + index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-colors ${
                      selectedImageIndex === index
                        ? 'border-rose-600'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>

              {/* Main Image - Right Side */}
              <div className="relative flex-1 aspect-square overflow-hidden rounded-lg bg-gray-100">
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />

                {discountPercentage > 0 && (
                  <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wide shadow-lg">
                    SALE
                  </div>
                )}
              </div>
            </div>

            {/* Description Below Image */}
            <div className="bg-white py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Description
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* You may also like */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                You may also like
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  {
                    id: '1',
                    name: 'Beautiful Design Batman Shaped Wooden Wall Shelf',
                    image: '/hourse.webp',
                    price: 1799,
                    originalPrice: 4499,
                    rating: 4,
                    reviews: 3,
                  },
                  {
                    id: '2',
                    name: 'Modern Criss Cross Designer Dark Walnut Planter Stand',
                    image: '/hourse.webp',
                    price: 4449,
                    originalPrice: 10499,
                    rating: 5,
                    reviews: 5,
                  },
                  {
                    id: '3',
                    name: 'Moon Shape Designer Wooden Wall Shelf / Book Shelf',
                    image: '/hourse.webp',
                    price: 3999,
                    originalPrice: 6999,
                    rating: 4,
                    reviews: 4,
                  },
                  {
                    id: '4',
                    name: 'Moon Shape Designer Wooden Wall Shelf / Book Shelf',
                    image: '/hourse.webp',
                    price: 3999,
                    originalPrice: 6999,
                    rating: 5,
                    reviews: 6,
                  },
                ].map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    href={`/products/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                      {/* Product Image */}
                      <div className="relative aspect-square bg-gray-100">
                        <Image
                          src={relatedProduct.image}
                          alt={relatedProduct.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 50vw, 25vw"
                        />
                      </div>
                      
                      {/* Product Info */}
                      <div className="p-3">
                        <h4 className="text-sm text-gray-900 mb-2 line-clamp-2 min-h-[2.5rem]">
                          {relatedProduct.name}
                        </h4>
                        
                        {/* Rating */}
                        <div className="flex items-center mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3 h-3 ${
                                i < relatedProduct.rating
                                  ? 'text-yellow-400'
                                  : 'text-gray-300'
                              }`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-1 text-xs text-gray-600">
                            {relatedProduct.reviews} reviews
                          </span>
                        </div>
                        
                        {/* Price */}
                        <div className="flex items-center space-x-2">
                          <span className="text-base font-bold text-gray-900">
                            ₹{relatedProduct.price.toLocaleString('en-IN')} INR
                          </span>
                          <span className="text-xs text-gray-500 line-through">
                            ₹{relatedProduct.originalPrice.toLocaleString('en-IN')} INR
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>

            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-emerald-600">
                  {formatPrice(product.price)}
                </span>

                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-rose-100 text-rose-800 px-2 py-1 rounded-md text-sm font-semibold">
                      Save {discountPercentage}%
                    </span>
                  </>
                )}
              </div>

            </div>
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className="flex-1"
              >
                {product.inStock ? UI_TEXT.PRODUCT.ADD_TO_CART : UI_TEXT.PRODUCT.OUT_OF_STOCK}
              </Button>
            </div>
            {/* Order on WhatsApp Button */}
            <a
              href="https://wa.me/919876543210?text=I'm interested in this product"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors block"
            >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>Order on WhatsApp</span>
            </a>

            {/* Feature And Details */}
            <div className="border-t border-gray-200 pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-lg font-semibold text-gray-900">
                    Feature And Details
                  </h3>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-700 text-sm">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Size : Please Refer Image for Dimensions.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>The elegant Wood Wall Shelf can also be gifted to your loved ones, gift for your relative and friends.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wall Shelf will create a special ambience for you, an ideal Shelf decoration sign for hanging on the wall of your bedroom, club, restaurant, Outlet, ceiling lights, bistro, Waterfall, dance hall, baby room, and bedroom.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Easy to Clean, CARE GUIDE Wipe clean with a soft, damp cloth when needed.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Ready to hang, hooks provided in the package for easy installation.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Made by Local Artisans of India #MADE IN INDIA #</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Wrapped in soft paper and packed with bubble wrap and card board box for reaching you safely.</span>
                </li>
              </ul>
            </div>



          </div>

        </div>
      

      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
