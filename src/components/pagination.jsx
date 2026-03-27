import { LeftArrow } from '../Icons/leftArrow';
import { RightArrow } from '../Icons/rightArrow';

export const Pagination = ({ totalPages, currentPage, pageOnChange }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const handlePrevious = () => {
    if (currentPage > 1) {
      pageOnChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      pageOnChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-end items-center gap-4 md:gap-6 mt-6 text-[#1814F3] text-[14px] font-medium">
      {/* Previous */}
      <button
        onClick={handlePrevious}
        disabled={currentPage === 1}
        className="flex items-center gap-2 disabled:opacity-40"
      >
        <LeftArrow />
        <span>Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-3">
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => pageOnChange(page)}
            className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
              currentPage === page
                ? 'bg-[#1814F3] text-white'
                : 'hover:bg-[#f3f4ff]'
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      {/* Next */}
      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className="flex items-center gap-2 disabled:opacity-40"
      >
        <span>Next</span>
        <RightArrow />
      </button>
    </div>
  );
};
