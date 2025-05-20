
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SlideShowProps {
  children: React.ReactNode[];
  className?: string;
}

const SlideShow = ({ children, className }: SlideShowProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = React.Children.count(children);

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
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  return (
    <div className={cn("relative w-full h-screen overflow-hidden bg-gradient-to-b from-slate-50 to-slate-100", className)}>
      {/* Current slide */}
      <div className="absolute inset-0 transition-all duration-500 ease-in-out">
        {React.Children.toArray(children)[currentSlide]}
      </div>
      
      {/* Navigation controls */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-4 z-10">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className={cn(
            "p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all", 
            currentSlide === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 text-gray-700" />
        </button>
        
        <div className="text-sm font-medium text-gray-700 bg-white/80 px-3 py-1 rounded-full shadow-md">
          {currentSlide + 1} / {totalSlides}
        </div>
        
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === totalSlides - 1}
          className={cn(
            "p-2 rounded-full bg-white/80 shadow-md hover:bg-white transition-all", 
            currentSlide === totalSlides - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100"
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
