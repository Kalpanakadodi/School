import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Tag } from 'lucide-react';

export default function Lightbox({ images, currentIndex, onClose, onPrev, onNext }) {
  const currentImage = images[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose, onPrev, onNext]);

  if (!currentImage) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8 animate-fadeIn"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 bg-black/40 px-3 py-1.5 rounded-full text-xs font-medium">
          <Tag className="w-3.5 h-3.5 text-gray-300" />
          <span>{currentImage.category}</span>
          <span className="text-gray-400">|</span>
          <span>{currentIndex + 1} of {images.length}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
          title="Close Lightbox (Esc)"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Prev Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="absolute left-3 md:left-6 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white transition-all transform hover:scale-110 z-10 focus:outline-none"
          title="Previous Image (Left Arrow)"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>
      )}

      {/* Main Image Container */}
      <div
        className="max-w-5xl max-h-[85vh] flex flex-col items-center justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={currentImage.imageUrl}
          alt={currentImage.title}
          className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-gray-700 select-none"
        />

        {/* Caption */}
        <div className="mt-3 text-center text-white max-w-2xl px-4">
          <h3 className="text-base md:text-lg font-semibold tracking-wide">
            {currentImage.title}
          </h3>
          {currentImage.description && (
            <p className="text-xs md:text-sm text-gray-300 mt-1 line-clamp-2">
              {currentImage.description}
            </p>
          )}
        </div>
      </div>

      {/* Next Button */}
      {images.length > 1 && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="absolute right-3 md:right-6 p-3 rounded-full bg-black/40 hover:bg-white/20 text-white transition-all transform hover:scale-110 z-10 focus:outline-none"
          title="Next Image (Right Arrow)"
        >
          <ChevronRight className="w-7 h-7" />
        </button>
      )}
    </div>
  );
}
