
import React from 'react';
import html2canvas from 'html2canvas';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface DownloadButtonProps {
  targetRef: React.RefObject<HTMLElement>;
  filename: string;
  className?: string;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  targetRef, 
  filename, 
  className = "absolute top-2 right-2",
  variant = "ghost",
  size = "sm"
}) => {
  const downloadAsImage = () => {
    if (targetRef.current) {
      const targetElement = targetRef.current;
      
      // Get background styles from the element and its parents
      const computedStyle = getComputedStyle(targetElement);
      const backgroundColor = computedStyle.backgroundColor;
      const backgroundImage = computedStyle.backgroundImage;
      
      html2canvas(targetElement, { 
        backgroundColor: backgroundColor !== 'rgba(0, 0, 0, 0)' ? backgroundColor : 'white',
        scale: 2, // Higher scale for better quality
        logging: false,
        useCORS: true, // Allow images from other domains
        allowTaint: true,
        // Capture any background gradients or images
        onclone: (document, element) => {
          if (backgroundImage !== 'none') {
            element.style.backgroundImage = backgroundImage;
          }
        }
      }).then(canvas => {
        const image = canvas.toDataURL('image/png');
        const link = document.createElement('a');
        link.download = `${filename}.png`;
        link.href = image;
        link.click();
      });
    }
  };

  return (
    <Button 
      variant={variant} 
      size={size} 
      className={className} 
      onClick={downloadAsImage}
    >
      <Download className="h-4 w-4 mr-1" /> İndir
    </Button>
  );
};

export default DownloadButton;
