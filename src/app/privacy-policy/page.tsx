'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { theme } from '@/styles/theme';
import { APP_CONSTANTS } from '@/constants';

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
          style={{ fontFamily: theme.typography.fontFamily.serif.join(', ') }}
        >
          Privacy Policy
        </h1>

        <div className="prose prose-lg text-gray-600">
          {/* <p className="mb-6">Last updated: {new Date().toLocaleDateString()}</p> */}

          {/* 1 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              1. Our Approach to Security
            </h2>
            <p>
              {APP_CONSTANTS.APP_NAME} uses industry-standard security measures to
              protect personal information and ensure safe online interactions.
              Payment details are processed securely through trusted third-party
              payment providers, and we do not store sensitive card information.
            </p>
          </section>

          {/* 2 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              2. Information We Collect
            </h2>
            <p>
              We may collect personal information when you browse our gallery,
              inquire about artworks, attend exhibitions, or make a purchase.
              This may include:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Name, email address, phone number</li>
              <li>Billing and shipping address</li>
              <li>Artwork inquiries, order history, and transaction details</li>
              <li>Emails or messages sent to us</li>
              <li>Technical data such as IP address, browser type, and session information</li>
            </ul>
          </section>

          {/* 3 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              3. How We Use Your Information
            </h2>
            <p>
              We use your information only to support gallery services, including:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Processing artwork purchases and deliveries</li>
              <li>Responding to inquiries about artworks, artists, or exhibitions</li>
              <li>Sharing order updates and service-related notifications</li>
              <li>Sending optional updates about new artworks or exhibitions (opt-out available)</li>
              <li>Improving website performance and user experience</li>
              <li>Complying with legal or regulatory requirements</li>
            </ul>
          </section>

          {/* 4 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              4. Sharing of Information
            </h2>
            <p>
              We do not sell or trade your personal information. Your data may be
              shared only with trusted service providers involved in payments,
              shipping, website operations, or when required by law.
            </p>
          </section>

          {/* 5 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              5. Cookies & Log Files
            </h2>
            <p>
              Like most websites, {APP_CONSTANTS.APP_NAME} uses cookies and log files
              to enhance user experience, remember preferences, and analyze website
              traffic. Cookies do not store personally identifiable information.
              You may manage cookies through your browser settings.
            </p>
          </section>

          {/* 6 */}
          <section className="mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              6. User Consent & Rights
            </h2>
            <p>
              By using this website, submitting inquiries, or purchasing artworks,
              you consent to this Privacy Policy. You may request access, correction,
              or deletion of your personal information and unsubscribe from
              non-essential communications at any time.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              7. Policy Updates & Contact
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Continued use of
              the website indicates acceptance of the updated policy.
              For any questions, please contact us via the details provided on the website.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
