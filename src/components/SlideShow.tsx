
import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlideShowProps {
  children: React.ReactNode[];
  className?: string;
}

const SlideShow = ({ children, className }: SlideShowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);
  const slideShowRef = useRef<HTMLDivElement>(null);
  const [touchStartY, setTouchStartY] = useState(0);
  const [touchStartX, setTouchStartX] = useState(0);
  
  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'Space') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowDown') {
        nextSlide();
      } else if (e.key === 'ArrowUp') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  // Touch navigation
  useEffect(() => {
    const handleTouchStart = (e: TouchEvent) => {
      setTouchStartY(e.touches[0].clientY);
      setTouchStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: TouchEvent) => {
      const touchEndY = e.changedTouches[0].clientY;
      const touchEndX = e.changedTouches[0].clientX;
      const yDiff = touchStartY - touchEndY;
      const xDiff = touchStartX - touchEndX;
      
      // Determine if the swipe is primarily horizontal or vertical
      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        // Horizontal swipe
        if (xDiff > 50) {
          nextSlide(); // Swipe left = next slide
        } else if (xDiff < -50) {
          prevSlide(); // Swipe right = prev slide
        }
      } else {
        // Vertical swipe
        if (yDiff > 50) {
          nextSlide(); // Swipe up = next slide
        } else if (yDiff < -50) {
          prevSlide(); // Swipe down = prev slide
        }
      }
    };

    const currentRef = slideShowRef.current;
    if (currentRef) {
      currentRef.addEventListener('touchstart', handleTouchStart, { passive: true });
      currentRef.addEventListener('touchend', handleTouchEnd, { passive: true });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('touchstart', handleTouchStart);
        currentRef.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [touchStartY, touchStartX, currentSlide, totalSlides]);

  return (
    <div 
      ref={slideShowRef}
      className={cn("relative w-full h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100", className)}
    >
      {/* Modern decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-200/20 to-transparent rounded-full -mr-20 -mb-20 blur-xl"></div>
      
      {/* Current slide */}
      <div className="w-full h-full transition-all duration-500 ease-in-out overflow-hidden">
        {React.Children.toArray(children)[currentSlide]}
      </div>
      
      {/* Progress indicator - optimize for mobile */}
      <div className="absolute top-2 md:top-4 left-0 right-0 flex justify-center z-20 px-2">
        <div className="bg-white/80 backdrop-blur-sm px-2 md:px-3 py-1 rounded-full shadow-md flex items-center gap-0.5 md:gap-1 overflow-x-auto max-w-full">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-1.5 md:w-2 h-1.5 md:h-2 rounded-full transition-all ${
                i === currentSlide 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-3 md:w-4' 
                  : 'bg-gray-300'
              } flex-shrink-0`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Navigation controls - fixed position for mobile stability */}
      <div className="fixed bottom-3 md:bottom-5 left-0 right-0 flex justify-center items-center gap-2 md:gap-4 z-30">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className={cn(
            "p-2 md:p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95", 
            currentSlide === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </button>
        
        <div className="text-xs md:text-sm font-medium text-gray-700 bg-white/90 backdrop-blur-sm px-3 md:px-4 py-1.5 md:py-2 rounded-full shadow-lg">
          {currentSlide + 1} / {totalSlides}
        </div>
        
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === totalSlides - 1}
          className={cn(
            "p-2 md:p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95", 
            currentSlide === totalSlides - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100"
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
