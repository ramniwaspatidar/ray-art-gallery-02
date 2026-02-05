import React, { useState } from 'react';
import { FilterOptions, SortOption } from '@/types';
import { UI_TEXT, SORT_OPTIONS, FILTER_OPTIONS } from '@/constants';
import Button from './ui/Button';
import Input from './ui/Input';

interface ProductFilterProps {
  filters: FilterOptions;
  sortBy: SortOption;
  onFiltersChange: (filters: FilterOptions) => void;
  onSortChange: (sort: SortOption) => void;
  onClearFilters: () => void;
  className?: string;
}

const ProductFilter: React.FC<ProductFilterProps> = ({
  filters,
  sortBy,
  onFiltersChange,
  onSortChange,
  onClearFilters,
  className = '',
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handlePriceRangeChange = (min: number, max: number) => {
    onFiltersChange({
      ...filters,
      priceRange: { min, max },
    });
  };

  const handleCategoryChange = (category: string, checked: boolean) => {
    const updatedCategories = checked
      ? [...filters.categories, category]
      : filters.categories.filter(c => c !== category);
    
    onFiltersChange({
      ...filters,
      categories: updatedCategories,
    });
  };

  const handleSizeChange = (size: string, checked: boolean) => {
    const updatedSizes = checked
      ? [...filters.sizes, size]
      : filters.sizes.filter(s => s !== size);
    
    onFiltersChange({
      ...filters,
      sizes: updatedSizes,
    });
  };

  const handleColorChange = (color: string, checked: boolean) => {
    const updatedColors = checked
      ? [...filters.colors, color]
      : filters.colors.filter(c => c !== color);
    
    onFiltersChange({
      ...filters,
      colors: updatedColors,
    });
  };

  const handleMaterialChange = (material: string, checked: boolean) => {
    const updatedMaterials = checked
      ? [...filters.materials, material]
      : filters.materials.filter(m => m !== material);
    
    onFiltersChange({
      ...filters,
      materials: updatedMaterials,
    });
  };

  const hasActiveFilters = 
    filters.categories.length > 0 ||
    filters.sizes.length > 0 ||
    filters.colors.length > 0 ||
    filters.materials.length > 0 ||
    filters.priceRange.min > 0 ||
    filters.priceRange.max < Infinity;

  return (
    <div className={`bg-white border border-gray-200 rounded-lg ${className}`}>
      {/* Mobile Filter Toggle */}
      <div className="lg:hidden p-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-medium text-gray-900">
            {UI_TEXT.GALLERY.FILTER_BY}
          </h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
      </div>

      {/* Filter Content */}
      <div className={`${isOpen ? 'block' : 'hidden'} lg:block`}>
        {/* Search */}
        <div className="p-4 border-b border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Search Products
          </label>
          <Input
            type="search"
            placeholder="Search by name or description..."
            value={searchQuery}
            onChange={setSearchQuery}
          />
        </div>

        {/* Sort */}
        <div className="p-4 border-b border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {UI_TEXT.GALLERY.SORT_BY}
          </label>
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value as SortOption)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {SORT_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Price Range */}
        <div className="p-4 border-b border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Price Range
          </label>
          <div className="space-y-2">
            {FILTER_OPTIONS.PRICE_RANGES.map((range, index) => (
              <label key={index} className="flex items-center">
                <input
                  type="radio"
                  name="priceRange"
                  checked={
                    filters.priceRange.min === range.min &&
                    filters.priceRange.max === range.max
                  }
                  onChange={() => handlePriceRangeChange(range.min, range.max)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="ml-2 text-sm text-gray-700">{range.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Sizes */}
        <div className="p-4 border-b border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Size
          </label>
          <div className="space-y-2">
            {FILTER_OPTIONS.SIZES.map((size) => (
              <label key={size} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.sizes.includes(size)}
                  onChange={(e) => handleSizeChange(size, e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{size}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Colors */}
        <div className="p-4 border-b border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Color
          </label>
          <div className="space-y-2">
            {FILTER_OPTIONS.COLORS.map((color) => (
              <label key={color} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.colors.includes(color)}
                  onChange={(e) => handleColorChange(color, e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{color}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Materials */}
        <div className="p-4 border-b border-gray-200">
          <label className="block text-sm font-medium text-gray-700 mb-3">
            Material
          </label>
          <div className="space-y-2">
            {FILTER_OPTIONS.MATERIALS.map((material) => (
              <label key={material} className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.materials.includes(material)}
                  onChange={(e) => handleMaterialChange(material, e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700">{material}</span>
              </label>
            ))}
          </div>
        </div>

        {/* In Stock Filter */}
        <div className="p-4 border-b border-gray-200">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={filters.inStock || false}
              onChange={(e) => onFiltersChange({
                ...filters,
                inStock: e.target.checked,
              })}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-700">
              {UI_TEXT.PRODUCT.IN_STOCK} only
            </span>
          </label>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <div className="p-4">
            <Button
              variant="outline"
              size="sm"
              onClick={onClearFilters}
              className="w-full"
            >
              Clear All Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;