import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from 'react-hot-toast';
import "./globals.css";
import { APP_CONSTANTS } from "@/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: APP_CONSTANTS.APP_NAME,
  description: APP_CONSTANTS.APP_DESCRIPTION,
  keywords: "wall decor, home decor, art, mirrors, clocks, frames, interior design",
  authors: [{ name: APP_CONSTANTS.APP_NAME }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: APP_CONSTANTS.APP_NAME,
    description: APP_CONSTANTS.APP_DESCRIPTION,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_CONSTANTS.APP_NAME,
    description: APP_CONSTANTS.APP_DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-gray-50 text-gray-900">
        <Toaster position="top-right" />
        {children}
      </body>
    </html>
  );
}
