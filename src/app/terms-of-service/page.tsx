'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { theme } from '@/styles/theme';
import { APP_CONSTANTS } from '@/constants';

const TermsOfServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
          style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
        >
          Terms of Service
        </h1>

        <div className="prose prose-lg text-gray-600">

          {/* 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              1. Acceptance of Terms
            </h2>
            <p>
This website is operated by {APP_CONSTANTS.APP_NAME}. Throughout the site, the terms “we”, “us”, and “our” refer to the Art Gallery. We offer this website, including all artworks, exhibitions, information, and services, subject to your acceptance of these Terms of Service.
By accessing our website, viewing artworks, submitting inquiries, or purchasing artwork, you agree to be bound by these Terms.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              2. Use of Website
            </h2>
            <p>
              This website is intended for viewing, purchasing, and inquiring about artworks.
              You agree to use the site only for lawful purposes and in compliance with all
              applicable laws.
            </p>
          </section>

          {/* 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              3. Artworks & Intellectual Property
            </h2>
            <p>
              All artworks, images, text, and content displayed on {APP_CONSTANTS.APP_NAME}
              are protected by copyright and intellectual property laws. Artworks remain the
              intellectual property of the respective artists. Reproduction or commercial use
              without written permission is prohibited.
            </p>
          </section>

          {/* 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              4. Artwork Display & Accuracy
            </h2>
            <p>
              We make every effort to display artworks accurately. However, colors, textures,
              or dimensions may vary slightly due to screen settings or photography.
              Descriptions are provided for reference only.
            </p>
          </section>

          {/* 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              5. Pricing & Availability
            </h2>
            <p>
              Artwork prices and availability are subject to change without notice.
              Many artworks are unique or limited edition and may sell out at any time.
            </p>
          </section>

          {/* 6 */}
          {/* <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              6. Orders & Payments
            </h2>
            <p>
              We reserve the right to accept, refuse, or cancel any order.
              Buyers must provide accurate billing and contact information.
              Payments are processed securely through third-party payment providers.
            </p>
          </section> */}

          {/* 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              6. User Feedback & Content
            </h2>
            <p>
              Any feedback, reviews, or suggestions submitted may be used for promotional
              or operational purposes. Users must not submit unlawful or copyrighted content.
            </p>
          </section>

          {/* 7 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              7. Disclaimer & Limitation of Liability
            </h2>
            <p>
              All materials and artworks are provided on an “as is” basis.
              {APP_CONSTANTS.APP_NAME} is not liable for indirect, incidental,
              or consequential damages arising from the use of this website.
            </p>
          </section>


          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              9. Changes to Terms
            </h2>
            <p>
              We reserve the right to update these Terms at any time.
              Continued use of the website constitutes acceptance of the updated Terms.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsOfServicePage;
