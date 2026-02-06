import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { UI_TEXT, APP_CONSTANTS } from '@/constants';
import { theme } from '@/styles/theme';

interface HeaderProps {
  onSearch?: (query: string) => void;
  cartItemCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  onSearch,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showCategories, setShowCategories] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // Category data with subcategories
  const categories = [
    {
      name: 'Mandala',
      slug: 'mandala',
      subcategories: [
        { name: 'Wall Mandala', slug: 'wall-mandala' },
        { name: 'Table Mandala', slug: 'table-mandala' },
        { name: 'Hanging Mandala', slug: 'hanging-mandala' },
        { name: 'Mandala Coasters', slug: 'mandala-coasters' },
        { name: 'Custom Mandala', slug: 'custom-mandala' },
      ]
    },
    {
      name: 'Resin',
      slug: 'resin',
      subcategories: [
        { name: 'Resin Clocks', slug: 'resin-clocks' },
        { name: 'Resin Trays', slug: 'resin-trays' },
        { name: 'Resin Coasters', slug: 'resin-coasters' },
        { name: 'Resin Keychains', slug: 'resin-keychains' },
        { name: 'Resin Art', slug: 'resin-art' },
      ]
    },
    {
      name: 'Lippan',
      slug: 'lippan',
      subcategories: [
        { name: 'Lippan Wall Art', slug: 'lippan-wall-art' },
        { name: 'Lippan Mirrors', slug: 'lippan-mirrors' },
        { name: 'Lippan Clocks', slug: 'lippan-clocks' },
        { name: 'Lippan Frames', slug: 'lippan-frames' },
        { name: 'Custom Lippan', slug: 'custom-lippan' },
      ]
    },
  ];

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


  return (
    <header 
      className="shadow-sm border-b sticky top-0 z-50"
      style={{ 
        backgroundColor: theme.components.header.background,
        borderColor: theme.colors.border.primary
      }}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <div 
                className="h-8 w-8 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: theme.components.header.logo }}
              >
                <span 
                  className="font-bold text-lg"
                  style={{ 
                    color: theme.colors.text.inverse,
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                >
                  R
                </span>
              </div>
              <span 
                className="ml-2 text-xl font-bold"
                style={{ 
                  color: theme.colors.text.primary,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
              >
                {APP_CONSTANTS.APP_NAME}
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Show when categories are hidden */}
          {!showCategories && (
            <nav className="hidden md:flex space-x-8 ml-20">
              <Link
                href="/"
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ 
                  color: theme.components.header.text,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
                onMouseEnter={(e: React.MouseEvent<Element>) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.textHover;
                }}
                onMouseLeave={(e: React.MouseEvent<Element>) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.text;
                }}
              >
                {UI_TEXT.NAV.HOME}
              </Link>
             
              <Link
                href="/about"
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ 
                  color: theme.components.header.text,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
                onMouseEnter={(e: React.MouseEvent<Element>) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.textHover;
                }}
                onMouseLeave={(e: React.MouseEvent<Element>) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.text;
                }}
              >
                {UI_TEXT.NAV.ABOUT}
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 text-sm font-medium transition-colors"
                style={{ 
                  color: theme.components.header.text,
                  fontFamily: theme.typography.fontFamily.sans.join(', ')
                }}
                onMouseEnter={(e: React.MouseEvent<Element>) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.textHover;
                }}
                onMouseLeave={(e: React.MouseEvent<Element>) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.text;
                }}
              >
                {UI_TEXT.NAV.CONTACT}
              </Link>
            </nav>
          )}

          {/* Category Navigation - Show when scrolled */}
          {showCategories && (
            <nav className="hidden md:flex space-x-6 ml-20">
              {categories.map((category) => (
                <div 
                  key={category.slug}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(category.slug)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link 
                    href={`/collections?category=${category.slug}`}
                    className="transition-colors duration-200 py-2 px-3 rounded-lg text-sm font-medium inline-flex items-center"
                    style={{ 
                      color: activeDropdown === category.slug ? theme.colors.primary[400] : theme.colors.text.secondary,
                      backgroundColor: activeDropdown === category.slug ? theme.colors.primary[50] : 'transparent',
                      fontFamily: theme.typography.fontFamily.sans.join(', ')
                    }}
                  >
                    {category.name}
                    <svg 
                      className="ml-1 w-4 h-4 transition-transform duration-200" 
                      style={{ transform: activeDropdown === category.slug ? 'rotate(180deg)' : 'rotate(0deg)' }}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </Link>

                  {/* Dropdown Menu */}
                  {activeDropdown === category.slug && (
                    <div 
                      className="absolute top-full left-0 mt-2 w-56 rounded-lg shadow-xl border animate-fade-slide-up"
                      style={{ 
                        backgroundColor: theme.colors.background.primary,
                        borderColor: theme.colors.border.primary,
                        zIndex: 50
                      }}
                    >
                      <div className="py-2">
                        {category.subcategories.map((subcategory) => (
                          <Link
                            key={subcategory.slug}
                            href={`/collections?category=${category.slug}&subcategory=${subcategory.slug}`}
                            className="block px-4 py-2 text-sm transition-colors duration-150"
                            style={{ 
                              color: theme.colors.text.secondary,
                              fontFamily: theme.typography.fontFamily.sans.join(', ')
                            }}
                            onMouseEnter={(e: React.MouseEvent<Element>) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.colors.primary[50];
                              (e.currentTarget as HTMLAnchorElement).style.color = theme.colors.primary[400];
                            }}
                            onMouseLeave={(e: React.MouseEvent<Element>) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                              (e.currentTarget as HTMLAnchorElement).style.color = theme.colors.text.secondary;
                            }}
                          >
                            {subcategory.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>
          )}

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-inset"
              style={{ 
                color: theme.colors.text.tertiary,
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e: React.MouseEvent<Element>) => {
                (e.currentTarget as HTMLButtonElement).style.color = theme.colors.text.secondary;
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = theme.colors.neutral[100];
              }}
              onMouseLeave={(e: React.MouseEvent<Element>) => {
                (e.currentTarget as HTMLButtonElement).style.color = theme.colors.text.tertiary;
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'transparent';
              }}
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
          <div 
            className="md:hidden border-t"
            style={{ borderColor: theme.colors.border.primary }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
        

              {/* Mobile navigation links - Show main nav when categories are hidden */}
              {!showCategories && (
                <>
                  <Link
                    href="/"
                    className="block px-3 py-2 text-base font-medium rounded-md transition-colors"
                    style={{ 
                      color: theme.components.header.text,
                      fontFamily: theme.typography.fontFamily.sans.join(', ')
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={(e: React.MouseEvent<Element>) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.textHover;
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.colors.neutral[50];
                    }}
                    onMouseLeave={(e: React.MouseEvent<Element>) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.text;
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    {UI_TEXT.NAV.HOME}
                  </Link>
                  
                  <Link
                    href="/about"
                    className="block px-3 py-2 text-base font-medium rounded-md transition-colors"
                    style={{ 
                      color: theme.components.header.text,
                      fontFamily: theme.typography.fontFamily.sans.join(', ')
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={(e: React.MouseEvent<Element>) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.textHover;
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.colors.neutral[50];
                    }}
                    onMouseLeave={(e: React.MouseEvent<Element>) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.text;
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    {UI_TEXT.NAV.ABOUT}
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-3 py-2 text-base font-medium rounded-md transition-colors"
                    style={{ 
                      color: theme.components.header.text,
                      fontFamily: theme.typography.fontFamily.sans.join(', ')
                    }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    onMouseEnter={(e: React.MouseEvent<Element>) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.textHover;
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = theme.colors.neutral[50];
                    }}
                    onMouseLeave={(e: React.MouseEvent<Element>) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = theme.components.header.text;
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                    }}
                  >
                    {UI_TEXT.NAV.CONTACT}
                  </Link>
                </>
              )}

              {/* Mobile category navigation - Show when scrolled */}
              {showCategories && (
                <>
                  {categories.map((category) => (
                    <div key={category.slug}>
                      <Link 
                        href={`/collections?category=${category.slug}`}
                        className="block px-3 py-2 text-base font-medium rounded-md"
                        style={{ 
                          color: theme.colors.text.primary,
                          fontFamily: theme.typography.fontFamily.sans.join(', ')
                        }}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {category.name}
                      </Link>
                      {/* Subcategories */}
                      <div className="pl-4">
                        {category.subcategories.map((subcategory) => (
                          <Link
                            key={subcategory.slug}
                            href={`/collections?category=${category.slug}&subcategory=${subcategory.slug}`}
                            className="block px-3 py-1.5 text-sm rounded-md"
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
                            {subcategory.name}
                          </Link>
                        ))}
                      </div>
                    </div>
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