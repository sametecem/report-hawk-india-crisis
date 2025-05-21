
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import { wordCloudData } from '@/data/reportData';

const WordCloudSlide = () => {
  return (
    <Slide title="10. Kelime Bulutu ve Öne Çıkan İfadeler" bgColor="bg-gradient-to-br from-white via-blue-50 to-violet-100">
      <div className="grid grid-cols-1 gap-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Sık Kullanılan Kelimeler (İlk 50)</h3>
          <div className="flex flex-wrap gap-2 justify-center p-6">
            {wordCloudData.map((word, index) => {
              // Extract the count from the word string
              const match = word.match(/\(([^)]+)\)/);
              const count = match ? parseInt(match[1].replace('.', '')) : 0;
              
              // Calculate font size based on count (higher count = larger text)
              const fontSize = Math.max(Math.min(count / 50 + 0.8, 2.5), 0.8);
              
              // Color based on position in the array
              const getColor = () => {
                if (index < 5) return "text-red-600";
                if (index < 10) return "text-blue-600";
                if (index < 15) return "text-purple-600";
                if (index < 20) return "text-green-600";
                if (index < 25) return "text-orange-500";
                if (index < 30) return "text-cyan-600";
                return "text-gray-600";
              };
              
              return (
                <span 
                  key={index} 
                  className={`${getColor()} font-medium px-2 py-1`}
                  style={{ fontSize: `${fontSize}rem` }}
                >
                  {word}
                </span>
              );
            })}
          </div>
        </Card>
        
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kelime Grupları ve Yaygın İfadeler</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 rounded-lg p-4">
              <h4 className="font-semibold text-blue-800 mb-2">Havayolları ve İşbirlikleri</h4>
              <p className="text-blue-700">turkish, airlines, indigo, code, indiago, airindia, flights</p>
            </div>
            <div className="bg-red-50 rounded-lg p-4">
              <h4 className="font-semibold text-red-800 mb-2">Boykot ve Eylem Çağrıları</h4>
              <p className="text-red-700">boycott, ban, suspend, remove, cancel, boycott­turkey, boycott­turkishairlines</p>
            </div>
            <div className="bg-amber-50 rounded-lg p-4">
              <h4 className="font-semibold text-amber-800 mb-2">Finansal ve Ekonomik İfadeler</h4>
              <p className="text-amber-700">economic, revenue, crore, money, losses, trade, billion, market</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">Seyahat ve Turizm İfadeleri</h4>
              <p className="text-green-700">travel, tourism, travelers, booking, flights­to­turkey</p>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default WordCloudSlide;
