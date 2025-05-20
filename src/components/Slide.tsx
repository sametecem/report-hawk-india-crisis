
import React from 'react';
import { cn } from '@/lib/utils';

interface SlideProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  bgColor?: string;
}

const Slide = ({ children, className, title, bgColor = "bg-white" }: SlideProps) => {
  return (
    <div className={cn("h-full w-full flex flex-col relative overflow-hidden", bgColor, className)}>
      {/* Enhanced decorative elements for visual interest */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-blue-100/30 to-transparent rounded-full -mr-32 -mt-32 blur-2xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-purple-100/20 to-transparent rounded-full -ml-32 -mb-32 blur-2xl"></div>
      <div className="absolute top-1/4 left-1/3 w-40 h-40 bg-gradient-to-tr from-cyan-100/10 to-transparent rounded-full blur-xl opacity-70"></div>
      
      <div className="w-full max-w-6xl mx-auto h-full overflow-y-auto py-8 px-6 md:px-10 relative z-10">
        {title && (
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-gray-800 border-b pb-3 relative">
            {title}
            <span className="absolute -bottom-0.5 left-0 w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></span>
          </h2>
        )}
        <div className="flex-1 overflow-y-auto pr-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slide;
