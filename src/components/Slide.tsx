
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
    <div className={cn("h-full w-full flex flex-col", bgColor, className)}>
      <div className="w-full max-w-5xl mx-auto h-full overflow-y-auto py-8 px-6 md:px-10">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b pb-3">
            {title}
          </h2>
        )}
        <div className="flex-1">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Slide;
