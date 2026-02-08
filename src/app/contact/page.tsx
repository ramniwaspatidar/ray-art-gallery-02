'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { theme } from '@/styles/theme';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    contactNumber: '',
    email: '',
    comment: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log('Form Submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 1000));
    alert('Query sent successfully! We will get back to you soon.');
    setFormData({ name: '', contactNumber: '', email: '', comment: '' });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow relative overflow-hidden">
        {/* Background Blobs (Similar to Home Page) */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 bg-orange-50/30">
             <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-rose-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" />
             <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] bg-orange-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '1s' }} />
             <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-pink-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
            
            {/* Split Layout Card */}
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
                
                {/* Left Side: Artistic/Info */}
                <div 
                    className="md:w-5/12 p-10 md:p-14 text-white flex flex-col justify-between relative"
                    style={{ background: 'linear-gradient(135deg, #f472b6 0%, #fb923c 100%)' }}
                >
                    {/* Decorative Pattern Overlay */}
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '30px 30px' }}></div>

                    <div className="relative z-10">
                        <h1 
                            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
                            style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
                        >
                            Let's Craft Something Beautiful
                        </h1>
                        <p className="text-lg text-white/90 leading-relaxed font-light">
                            Whether you need a custom mandala, have a question about our resin art, or just want to say hello - we're here to help you transform your space.
                        </p>
                    </div>

                    <div className="relative z-10 space-y-6 mt-12">
                        {/* Contact Details */}
                         <div className="flex items-start space-x-4">
                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold">Email Us</h3>
                                <p className="text-sm text-white/80">contact@rayartgallery.com</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                            </div>
                            <div>
                                <h3 className="text-base font-semibold">Call Us</h3>
                                <p className="text-sm text-white/80">+91 98765 43210</p>
                            </div>
                        </div>

                        
                    </div>
                </div>

                {/* Right Side: Form */}
                <div className="md:w-7/12 p-8 md:p-14 bg-white">
                    <h2 
                        className="text-2xl md:text-3xl font-bold text-gray-800 mb-8"
                         style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
                    >
                        Send us a message
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Name</label>
                                <Input
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="John Doe"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="bg-gray-50 border-gray-200 focus:bg-white text-gray-900"
                                />
                            </div>
                            <div>
                                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Phone</label>
                                <Input
                                    id="contactNumber"
                                    name="contactNumber"
                                    type="tel"
                                    required
                                    placeholder="+91..."
                                    value={formData.contactNumber}
                                    onChange={handleChange}
                                    className="bg-gray-50 border-gray-200 focus:bg-white text-gray-900"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Email</label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                required
                                placeholder="john@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                className="bg-gray-50 border-gray-200 focus:bg-white text-gray-900"
                            />
                        </div>

                        <div>
                            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 mb-1 ml-1">Message</label>
                            <textarea
                                id="comment"
                                name="comment"
                                rows={5}
                                required
                                placeholder="Tell us about your requirements..."
                                value={formData.comment}
                                onChange={handleChange}
                                className="block w-full rounded-lg border-gray-200 bg-gray-50 focus:bg-white shadow-sm focus:border-rose-300 focus:ring focus:ring-rose-200 focus:ring-opacity-50 sm:text-sm p-4 transition-all text-gray-900"
                            />
                        </div>

                        <div className="pt-4">
                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                loading={isSubmitting}
                                className="w-full md:w-auto min-w-[200px] shadow-lg hover:shadow-rose-300/50"
                            >
                                Send Message
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
