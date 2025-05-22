
import React, { useRef } from 'react';
import DownloadButton from '@/components/DownloadButton';

interface WordCloudItem {
  text: string;
  size: number;
}

const WordCloud = ({ data }: { data: WordCloudItem[] }) => {
  const cloudRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 relative">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">Popüler Kelimeler</h2>
      <DownloadButton targetRef={cloudRef} filename="populer-kelimeler" className="absolute top-2 right-2" />
      <div ref={cloudRef} className="flex flex-wrap justify-center p-4">
        {data.map((word, index) => {
          // Boyuta göre renk belirleme
          const getColor = () => {
            if (word.size > 30) return "text-blue-600";
            if (word.size > 20) return "text-purple-600";
            if (word.size > 15) return "text-green-600";
            return "text-gray-600";
          };
          
          return (
            <span 
              key={index} 
              className={`${getColor()} font-medium px-3 py-2 hover:scale-110 transition-transform`}
              style={{ fontSize: `${word.size / 10 + 0.8}rem` }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default WordCloud;
