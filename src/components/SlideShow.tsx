
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
      {/* Modern decorative elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-200/20 to-transparent rounded-full -mr-20 -mb-20 blur-xl"></div>
      
      {/* Current slide */}
      <div className="absolute inset-0 transition-all duration-500 ease-in-out">
        {React.Children.toArray(children)[currentSlide]}
      </div>
      
      {/* Progress indicator */}
      <div className="absolute top-4 left-0 right-0 flex justify-center">
        <div className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full shadow-md flex items-center gap-1">
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentSlide 
                  ? 'bg-gradient-to-r from-blue-500 to-purple-500 w-4' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
      
      {/* Navigation controls */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center items-center gap-4 z-10">
        <button 
          onClick={prevSlide} 
          disabled={currentSlide === 0}
          className={cn(
            "p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95", 
            currentSlide === 0 ? "opacity-30 cursor-not-allowed" : "opacity-100"
          )}
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        
        <div className="text-sm font-medium text-gray-700 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
          {currentSlide + 1} / {totalSlides}
        </div>
        
        <button 
          onClick={nextSlide} 
          disabled={currentSlide === totalSlides - 1}
          className={cn(
            "p-3 rounded-full bg-white/90 backdrop-blur-sm shadow-lg hover:bg-white transition-all transform hover:scale-105 active:scale-95", 
            currentSlide === totalSlides - 1 ? "opacity-30 cursor-not-allowed" : "opacity-100"
          )}
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
