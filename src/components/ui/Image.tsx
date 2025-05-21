
import React from 'react';
import { cn } from '@/lib/utils';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  aspectRatio?: 'square' | '16:9' | '4:3' | '1:1';
  objectFit?: 'cover' | 'contain' | 'fill';
}

const Image = ({ 
  src, 
  alt, 
  className, 
  aspectRatio,
  objectFit = 'cover',
  ...props 
}: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt || "Image"}
      className={cn(
        "max-w-full",
        objectFit === 'cover' && "object-cover",
        objectFit === 'contain' && "object-contain",
        objectFit === 'fill' && "object-fill",
        aspectRatio === 'square' && "aspect-square",
        aspectRatio === '16:9' && "aspect-video",
        aspectRatio === '4:3' && "aspect-4/3",
        aspectRatio === '1:1' && "aspect-square",
        className
      )}
      {...props}
    />
  );
};

export default Image;
