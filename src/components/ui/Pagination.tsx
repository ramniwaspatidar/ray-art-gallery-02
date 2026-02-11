import React from 'react';
import Button from '@/components/ui/Button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
  hasMore?: boolean;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = '',
  hasMore = false,
}) => {
  if (totalPages <= 1 && !hasMore) return null;

  const handlePageChange = (page: number) => {
    if (page >= 1 && (totalPages === 0 || page <= totalPages)) {
      onPageChange(page);
    }
  };

  return (
    <div className={`flex justify-center items-center space-x-2 ${className}`}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3"
      >
        <span className="sr-only">Previous</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Button>

      <span className="text-sm font-medium text-gray-700">
        Page {currentPage} {totalPages > 0 && `of ${totalPages}`}
      </span>

      <Button
        variant="outline"
        size="sm"
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={totalPages > 0 && currentPage >= totalPages && !hasMore}
        className="px-3"
      >
        <span className="sr-only">Next</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Button>
    </div>
  );
};

export default Pagination;
