import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { UI_TEXT, APP_CONSTANTS } from '@/constants';
import { theme } from '@/styles/theme';
import Button from './ui/Button';
import Input from './ui/Input';

interface HeaderProps {
  onSearch?: (query: string) => void;
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
  cartItemCount = 0,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if user has scrolled to the hero overlay section
      const heroSection = document.querySelector('[data-hero-overlay]');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        // Show categories when the overlay section is at or above the viewport top
        setShowCategories(heroRect.top <= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleSearchInputChange = (value: string) => {
    setSearchQuery(value);
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div className="h-8 w-8 bg-rose-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900">
                {APP_CONSTANTS.APP_NAME}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Show when categories are hidden */}
          {!showCategories && (
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {UI_TEXT.NAV.HOME}
              </Link>
              <Link
                href="/collections"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {UI_TEXT.NAV.COLLECTIONS}
              </Link>
              <Link
                href="/about"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {UI_TEXT.NAV.ABOUT}
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
              >
                {UI_TEXT.NAV.CONTACT}
              </Link>
            </nav>
          )}

          {/* Category Navigation - Show when scrolled */}
          {showCategories && (
            <nav className="hidden md:flex space-x-6">
              {[
                'Wall Decor',
                'Paintings',
                'Mirrors', 
                'Clocks',
                'Lighting',
                'Shelfs',
                'Chairs',
                'Tables'
              ].map((category) => (
                <Link 
                  key={category} 
                  href={`/collections?category=${category.toLowerCase().replace(' ', '-')}`}
                  className="transition-colors duration-200 py-2 px-3 rounded-lg text-sm font-medium"
                  style={{ 
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                  onMouseEnter={(e: React.MouseEvent<Element>) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = theme.colors.primary[400];
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.colors.primary[50];
                  }}
                  onMouseLeave={(e: React.MouseEvent<Element>) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = theme.colors.text.secondary;
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                  }}
                >
                  {category}
                </Link>
              ))}
            </nav>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile search */}
              <div className="lg:hidden px-3 py-2">
                <form onSubmit={handleSearch}>
                  <Input
                    type="search"
                    placeholder={`${UI_TEXT.NAV.SEARCH} products...`}
                    value={searchQuery}
                    onChange={handleSearchInputChange}
                  />
                </form>
              </div>

              {/* Mobile navigation links - Show main nav when categories are hidden */}
              {!showCategories && (
                <>
                  <Link
                    href="/"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {UI_TEXT.NAV.HOME}
                  </Link>
                  <Link
                    href="/collections"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {UI_TEXT.NAV.COLLECTIONS}
                  </Link>
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {UI_TEXT.NAV.ABOUT}
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {UI_TEXT.NAV.CONTACT}
                  </Link>
                </>
              )}

              {/* Mobile category navigation - Show when scrolled */}
              {showCategories && (
                <>
                  {[
                    'Wall Decor',
                    'Paintings',
                    'Mirrors', 
                    'Clocks',
                    'Lighting',
                    'Shelfs',
                    'Chairs',
                    'Tables'
                  ].map((category) => (
                    <Link 
                      key={category} 
                      href={`/collections?category=${category.toLowerCase().replace(' ', '-')}`}
                      className="block px-3 py-2 text-base font-medium rounded-md"
                      style={{ 
                        color: theme.colors.text.secondary,
                        fontFamily: theme.typography.fontFamily.sans.join(', ')
                      }}
                      onClick={() => setIsMobileMenuOpen(false)}
                      onMouseEnter={(e: React.MouseEvent<Element>) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = theme.colors.primary[400];
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.colors.primary[50];
                      }}
                      onMouseLeave={(e: React.MouseEvent<Element>) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = theme.colors.text.secondary;
                        (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                      }}
                    >
                      {category}
                    </Link>
                  ))}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;