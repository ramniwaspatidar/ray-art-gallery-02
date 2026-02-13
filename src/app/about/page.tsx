'use client';

import React from 'react';
import Image from 'next/image';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { theme } from '@/styles/theme';
import { APP_CONSTANTS } from '@/constants';

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow relative overflow-hidden">
        {/* Background Blobs (Consistent with Home/Contact) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-orange-50/30">
             <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
             <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
             <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            
            {/* Hero Section */}
            <div className="text-center mb-20">
                <h1 
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight text-gray-900"
                    style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
                >
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-orange-400">{APP_CONSTANTS.APP_NAME}</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Where passion meets creativity. We believe that art is not just decoration, but a reflection of your soul and story.
                </p>
            </div>

            {/* Our Story Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24">
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <Image
                      src="/header-logo-2.png"
                      alt={APP_CONSTANTS.APP_NAME}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>
                <div>
                    <h2 
                        className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                        style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
                    >
                        Our Story
                    </h2>
                    <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                        <p>
                            Born from a deep-seated passion for colors and intricate patterns, {APP_CONSTANTS.APP_NAME} started as a small dream in a cozy studio corner. What began as a personal journey of exploring Mandala and Resin art quickly blossomed into a mission to share beauty with the world.
                        </p>
                        <p>
                            We specialize in handcrafted artistry that speaks a language of elegance and warmth. From the precise geometry of Mandalas to the fluid, organic beauty of Resin and the reflective charm of Mirror art, every piece is created with love and meticulous attention to detail.
                        </p>
                        <p>
                            Our goal is simple: to transform your spaces into living galleries that inspire joy and tranquility every single day.
                        </p>
                    </div>
                </div>
            </div>

            {/* Mission & Values */}
            <div className="bg-white/60 backdrop-blur-md rounded-3xl p-10 md:p-16 shadow-xl mb-24 border border-rose-100">
                <div className="text-center mb-12">
                    <h2 
                        className="text-3xl md:text-4xl font-bold mb-4 text-gray-800"
                        style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
                    >
                        What Drives Us
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-6 text-rose-500 text-2xl">
                            ✨
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Handcrafted Excellence</h3>
                        <p className="text-gray-600">Every stroke, pour, and placement is done by hand, ensuring that no two pieces are exactly alike.</p>
                    </div>
                    <div className="p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6 text-orange-500 text-2xl">
                            🎨
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Unique Designs</h3>
                        <p className="text-gray-600">We blend traditional techniques with modern aesthetics to create timeless masterpieces for your home.</p>
                    </div>
                    <div className="p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                        <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6 text-pink-500 text-2xl">
                            💖
                        </div>
                        <h3 className="text-xl font-bold mb-3 text-gray-900">Made with Love</h3>
                        <p className="text-gray-600">Art is personal. We pour our heart and soul into every creation to ensure it brings positive energy to your space.</p>
                    </div>
                </div>
            </div>

            {/* Meet the Artist / Call to Action */}
            <div className="text-center relative">
                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] h-[120%] bg-gradient-to-r from-rose-50 to-orange-50 -z-10 rounded-[3rem] opacity-50 blur-3xl" />
                <h2 
                    className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
                    style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
                >
                    Ready to Transform Your Space?
                </h2>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                    Explore our collection or reach out for a custom commission that perfectly matches your vision.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href="/products" 
                        className="px-8 py-3 bg-rose-400 text-white rounded-full font-medium shadow-lg hover:bg-rose-500 hover:shadow-rose-300/50 transition-all transform hover:-translate-y-1"
                    >
                        View Collection
                    </a>
                    <a 
                        href="/contact" 
                        className="px-8 py-3 bg-white text-rose-500 border-2 border-rose-200 rounded-full font-medium hover:bg-rose-50 transition-all transform hover:-translate-y-1"
                    >
                        Get in Touch
                    </a>
                </div>
            </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;
