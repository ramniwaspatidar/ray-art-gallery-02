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
import ApiService from '@/services/ApiService';

const INR_FORMATTER = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
});

const ProductDetailsPage: React.FC = () => {
  const params = useParams();
  const productId = params?.id as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (!productId) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await ApiService.getProduct(productId);
        setProduct(data);
      } catch (err) {
        console.error('Failed to fetch product:', err);
        setError(UI_TEXT.PRODUCT_DETAILS.FAILED_TO_LOAD);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const discountPercentage = useMemo(() => {
    if (!product?.originalPrice) return 0;
    const price = parseFloat(product.price);
    const original = parseFloat(product.originalPrice);
    return Math.round(((original - price) / original) * 100);
  }, [product?.originalPrice, product?.price]);

  const formatPrice = useCallback((price: string | number) => {
    const p = typeof price === 'string' ? parseFloat(price) : price;
    return INR_FORMATTER.format(p);
  }, []);

  const handleAddToCart = useCallback(() => {
    if (!product) return;
    console.log('Add to cart:', { product, quantity });
    toast.success(`Added "${product.name}" to cart!`);
  }, [product, quantity]);

  const handleBuyNow = useCallback(() => {
    if (!product) return;
    console.log('Buy now:', { product, quantity });
    toast.success(`Proceeding to checkout for "${product.name}"`);
  }, [product, quantity]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-500"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {UI_TEXT.PRODUCT_DETAILS.SOMETHING_WENT_WRONG}
          </h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <Link
            href="/"
            className="text-teal-600 font-semibold hover:underline"
          >
            {UI_TEXT.PRODUCT_DETAILS.GO_BACK_HOME}
          </Link>
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
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            {UI_TEXT.PRODUCT_DETAILS.PRODUCT_NOT_FOUND}
          </h1>
          <p className="text-gray-600 mb-8">
            {UI_TEXT.PRODUCT_DETAILS.PRODUCT_NOT_FOUND_DESC}
          </p>
          <Link
            href="/"
            className="text-teal-600 font-semibold hover:underline"
          >
            {UI_TEXT.PRODUCT_DETAILS.GO_BACK_HOME}
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 lg:gap-8">
          {/* Product Image */}
          <div>
            <div className="relative w-full aspect-square overflow-hidden rounded-lg bg-gray-100">
              <Image
                src={product.imageUrl || '/api/placeholder/400/400'}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 66vw"
                priority
              />

              {discountPercentage > 0 && (
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-teal-500 text-white px-2.5 py-1 rounded-md text-xs sm:text-sm font-bold uppercase tracking-wide shadow-lg">
                  {UI_TEXT.PRODUCT_DETAILS.SALE}
                </div>
              )}
            </div>

            {/* Description Below Image - visible on desktop only */}
            <div className="hidden lg:block bg-white py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {UI_TEXT.PRODUCT_DETAILS.DESCRIPTION}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-5 sm:space-y-6">
            {/* Product Title */}
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                <span className="text-2xl sm:text-3xl font-bold text-emerald-600">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-lg sm:text-xl text-gray-500 line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-teal-100 text-teal-800 px-2 py-1 rounded-md text-xs sm:text-sm font-semibold">
                      Save {discountPercentage}%
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-3 sm:gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handleAddToCart}
                disabled={false}
                className="w-full"
              >
                {UI_TEXT.PRODUCT.ADD_TO_CART}
              </Button>

              {/* Order on WhatsApp Button */}
              <a
                href={`https://wa.me/919876543210?text=${encodeURIComponent(UI_TEXT.PRODUCT_DETAILS.WHATSAPP_MESSAGE)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span>{UI_TEXT.PRODUCT_DETAILS.ORDER_ON_WHATSAPP}</span>
              </a>
            </div>

            {/* Description - visible on mobile only */}
            <div className="lg:hidden border-t border-gray-200 pt-5">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {UI_TEXT.PRODUCT_DETAILS.DESCRIPTION}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Feature And Details */}
            <div className="border-t border-gray-200 pt-5 sm:pt-6">
              <div className="flex items-center mb-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <h3 className="text-base sm:text-lg font-semibold text-gray-900">
                    {UI_TEXT.PRODUCT_DETAILS.FEATURE_AND_DETAILS}
                  </h3>
                </div>
              </div>
              
              <ul className="space-y-2.5 sm:space-y-3 text-gray-700 text-sm">
                {UI_TEXT.PRODUCT_DETAILS.FEATURE_DETAILS_LIST.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="mr-2 mt-0.5 shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
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
