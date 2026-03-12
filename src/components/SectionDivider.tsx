import React from 'react';

const SectionDivider = () => {
  return (
    <div className="w-full py-1 bg-luxury-ivory overflow-x-hidden">
      <div className="flex items-center justify-center">
        <div className="flex items-center gap-3">
          <div className="w-16 sm:w-24 h-px bg-luxury-gold"></div>

          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-luxury-gold flex-shrink-0"
          >
            <path
              d="M0 8L8 0L16 8L8 16L0 8Z"
              fill="currentColor"
            />
          </svg>

          <div className="w-2 h-2 rounded-full bg-luxury-gold flex-shrink-0"></div>

          <svg
            width="12"
            height="12"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-luxury-gold flex-shrink-0"
          >
            <path
              d="M0 8L8 0L16 8L8 16L0 8Z"
              fill="currentColor"
            />
          </svg>

          <div className="w-16 sm:w-24 h-px bg-luxury-gold"></div>
        </div>
      </div>
    </div>
  );
};

export default SectionDivider;
