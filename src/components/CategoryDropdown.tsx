import React from 'react';
import Link from 'next/link';
import { theme } from '@/styles/theme';

interface Subcategory {
  name: string;
  slug: string;
  image: string;
}

interface CategoryDropdownProps {
  categorySlug: string;
  subcategories: Subcategory[];
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  categorySlug,
  subcategories,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div 
      className="absolute top-full left-1/2 transform -translate-x-1/2 pt-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ zIndex: 50 }}
    >
      <div 
        className="rounded-2xl overflow-hidden animate-dropdown-appear"
        style={{ 
          backgroundColor: theme.colors.background.primary,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)',
          width: 'max-content',
          maxWidth: '90vw'
        }}
      >
        <div className="p-6 md:p-8">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4 md:gap-6">
            {subcategories.map((subcategory) => (
              <Link
                key={subcategory.slug}
                href={`/collections?category=${categorySlug}&subcategory=${subcategory.slug}`}
                className="group flex flex-col items-center text-center"
              >
                {/* Image Container */}
                <div 
                  className="w-20 h-20 md:w-24 md:h-24 rounded-xl mb-2 md:mb-3 overflow-hidden transition-all duration-300 ease-out group-hover:shadow-lg"
                  style={{ 
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
                  }}
                >
                  <img 
                    src={subcategory.image} 
                    alt={subcategory.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                </div>
                
                {/* Name */}
                <span 
                  className="text-xs font-medium transition-all duration-200 ease-out px-1"
                  style={{ 
                    color: theme.colors.text.secondary,
                    fontFamily: theme.typography.fontFamily.sans.join(', ')
                  }}
                  onMouseEnter={(e: React.MouseEvent<Element>) => {
                    (e.currentTarget as HTMLSpanElement).style.color = theme.colors.primary[500];
                    (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e: React.MouseEvent<Element>) => {
                    (e.currentTarget as HTMLSpanElement).style.color = theme.colors.text.secondary;
                    (e.currentTarget as HTMLSpanElement).style.transform = 'translateY(0)';
                  }}
                >
                  {subcategory.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryDropdown;
