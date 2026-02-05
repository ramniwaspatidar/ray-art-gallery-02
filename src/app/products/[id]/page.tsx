'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { Product } from '@/types';
import { UI_TEXT, APP_CONSTANTS } from '@/constants';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

// Mock product data - in real app, this would come from API
const mockProducts: Record<string, Product> = {
  '1': {
    id: '1',
    name: 'Modern Abstract Wall Art',
    description: 'Beautiful modern abstract painting perfect for contemporary spaces. This stunning piece features vibrant colors and geometric patterns that will transform any room into a sophisticated living space.',
    price: 2499,
    originalPrice: 3499,
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
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
    description: 'Sleek minimalist wall clock with metal finish. Perfect for modern homes and offices. Features silent movement and easy installation.',
    price: 899,
    originalPrice: 1299,
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
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
    description: 'Modern geometric pattern wall decal for contemporary spaces. Easy to apply and remove without damaging walls. Perfect for renters and homeowners alike.',
    price: 599,
    images: [
      '/api/placeholder/600/600',
      '/api/placeholder/600/600'
    ],
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

const ProductDetailsPage: React.FC = () => {
  const params = useParams();
  const productId = params.id as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      const foundProduct = mockProducts[productId];
      if (foundProduct) {
        setProduct(foundProduct);
        setSelectedColor(foundProduct.color[0]);
      }
      setLoading(false);
    };

    fetchProduct();
  }, [productId]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
    }).format(price);
  };

  const discountPercentage = product?.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  const handleAddToCart = () => {
    if (product) {
      console.log('Add to cart:', { product, selectedColor, quantity });
      alert(`Added "${product.name}" to cart!`);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      console.log('Buy now:', { product, selectedColor, quantity });
      alert(`Proceeding to checkout for "${product.name}"`);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="grid grid-cols-4 gap-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="aspect-square bg-gray-200 rounded-lg"></div>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="h-8 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-6 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/collections">
            <Button>Browse Collections</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Promotional Banner */}
      <div className="bg-gradient-to-r from-emerald-700 to-emerald-600 text-white text-center py-3 px-4">
        <p className="text-sm font-medium">
          🚚 EXPRESS DELIVERY AND EXTRA 10% OFF ON PRE-PAID ORDERS
        </p>
      </div>

      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-rose-600">Home</Link>
          <span>/</span>
          <Link href="/collections" className="hover:text-rose-600">Collections</Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {discountPercentage > 0 && (
                <div className="absolute top-4 left-4 bg-rose-400 text-white px-3 py-1 rounded-md text-sm font-bold uppercase tracking-wide shadow-lg">
                  SALE
                </div>
              )}
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
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
                    sizes="150px"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
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
                  <span className="ml-2 text-sm text-gray-600">
                    ({product.rating}) | {product.reviewCount} reviews
                  </span>
                </div>
              </div>
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
              
              {/* Payment Options */}
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-2 py-1 rounded text-xs font-semibold">
                    PREPAID
                  </div>
                  <span className="text-gray-600">Extra 10% off on prepaid orders</span>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 text-sm">
                <div className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                  💰 CASH ON DELIVERY
                </div>
                <span className="text-gray-600">{formatPrice(product.price + 50)} (₹50 extra)</span>
              </div>
            </div>

            {/* Color Selection */}
            {product.color.length > 1 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                <div className="flex items-center space-x-3">
                  {product.color.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg border-2 transition-colors ${
                        selectedColor === color
                          ? 'border-rose-400 bg-rose-50 text-rose-400'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-12 text-center font-semibold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Delivery Check */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Check delivery timeline</h3>
              <div className="flex items-center space-x-2">
                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Enter PIN code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent"
                  />
                  <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <Button variant="outline" className="px-6">Check</Button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button
                onClick={handleBuyNow}
                size="lg"
                className="w-full bg-rose-400 hover:bg-rose-500 text-white py-4 text-lg font-semibold"
                disabled={!product.inStock}
              >
                🛒 BUY IT NOW
              </Button>
              
              <Button
                onClick={handleAddToCart}
                variant="outline"
                size="lg"
                className="w-full border-rose-400 text-rose-400 hover:bg-rose-50 py-4 text-lg font-semibold"
                disabled={!product.inStock}
              >
                Add to Cart
              </Button>
            </div>

            {/* VibeCrafts Promise */}
            <Card className="bg-gradient-to-r from-emerald-50 to-teal-50 border-emerald-200">
              <Card.Body className="p-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                  {APP_CONSTANTS.APP_NAME} Promise
                </h3>
                <p className="text-emerald-700 mb-4">Gorgeous homes, trusted by many.</p>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-emerald-700">Quality Checked & Assured</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-pink-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <span className="text-emerald-700">Curated for Your Style</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-orange-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
                      </svg>
                    </div>
                    <span className="text-emerald-700">Hassle-Free Returns</span>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-rose-100 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-rose-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                      </svg>
                    </div>
                    <span className="text-emerald-700">Reliable shipping</span>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>

        {/* Product Description */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-rose-600 py-4 px-1 text-sm font-medium text-rose-600">
                Description
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Specifications
              </button>
              <button className="border-b-2 border-transparent py-4 px-1 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Reviews ({product.reviewCount})
              </button>
            </nav>
          </div>
          
          <div className="py-8">
            <div className="prose max-w-none">
              <p className="text-gray-700 text-lg leading-relaxed">
                {product.description}
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                  <dl className="space-y-3">
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Material:</dt>
                      <dd className="text-gray-900 font-medium">{product.material}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Dimensions:</dt>
                      <dd className="text-gray-900 font-medium">
                        {product.dimensions?.width} x {product.dimensions?.height} {product.dimensions?.unit}
                      </dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Size:</dt>
                      <dd className="text-gray-900 font-medium">{product.size}</dd>
                    </div>
                    <div className="flex justify-between">
                      <dt className="text-gray-600">Category:</dt>
                      <dd className="text-gray-900 font-medium capitalize">{product.category.replace('-', ' ')}</dd>
                    </div>
                  </dl>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Care Instructions</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Clean with a soft, dry cloth</li>
                    <li>• Avoid direct sunlight for extended periods</li>
                    <li>• Handle with care during installation</li>
                    <li>• Store in a cool, dry place when not in use</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Frequently Bought Together */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Frequently bought together</h2>
          <div className="bg-gray-50 rounded-lg p-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <Image
                  src="/api/placeholder/100/100"
                  alt="Complementary product"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900">Beautiful Modern Design Wooden Ceiling...</h3>
                <div className="flex items-center space-x-2 mt-1">
                  <span className="text-lg font-bold text-gray-900">₹3044.75</span>
                  <span className="text-sm text-gray-500 line-through">₹3599.00</span>
                </div>
              </div>
              <button className="w-8 h-8 bg-white rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailsPage;