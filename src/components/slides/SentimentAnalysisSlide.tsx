
import React, { useRef } from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import { 
  PieChart,
  Pie,
  ResponsiveContainer,
  Cell,
  Tooltip,
  Legend
} from 'recharts';
import { categoryData, wordCloudData } from '@/data/reportData';
import DownloadButton from '@/components/DownloadButton';

const SentimentAnalysisSlide = () => {
  const sentimentTrendsRef = useRef<HTMLDivElement>(null);
  const keywordsRef = useRef<HTMLDivElement>(null);
  const categoryChartRef = useRef<HTMLDivElement>(null);

  return (
    <Slide title="4. Duygu Analizi ve Temalar" bgColor="bg-gradient-to-br from-white via-purple-50 to-purple-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm relative">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Genel Duygu Trendleri</h3>
          <DownloadButton targetRef={sentimentTrendsRef} filename="genel-duygu-trendleri" />
          <div ref={sentimentTrendsRef}>
            <ul className="list-disc pl-6 space-y-3">
              <li>Ortalama duygu skoru dönem genelinde <span className="font-semibold text-amber-600">yüksek negatif (-0,08)</span></li>
              <li>10 Mayıs öncesi artan tweet hacmi, 13 Mayıs'ta etkileşim patlamasına (51 k beğeni) rağmen duygu skorunu pozitife döndürmedi</li>
              <li>Olumlu örnek oranı %0,3; nötr oranı %7,1 ile düşük kalırken negatif içerik %92,6 ile baskın</li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm relative">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Sık Geçen Anahtar Kelimeler</h3>
          <DownloadButton targetRef={keywordsRef} filename="anahtar-kelimeler" />
          <div ref={keywordsRef}>
            <div className="flex flex-wrap gap-2">
              {wordCloudData.slice(0, 15).map((word, index) => (
                <span 
                  key={index} 
                  className={`text-sm md:text-base rounded-full px-3 py-1 ${
                    index < 5 ? 'bg-blue-100 text-blue-800' : 
                    index < 10 ? 'bg-indigo-100 text-indigo-800' : 
                    'bg-purple-100 text-purple-800'
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-600 italic">En sık kullanılan 30 kelimeden ilk 15'i gösterilmektedir.</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2 relative">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kategorize Edilmiş İçerik Sınıflandırması</h3>
          <DownloadButton targetRef={categoryChartRef} filename="icerik-siniflandirmasi" />
          <div ref={categoryChartRef} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  label={({ name, value }) => `${name}: %${value}`}
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `%${value}`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <p className="font-medium text-gray-800">
              İçeriklerin %95,3'ü boykot çağrısı kategorisinde yer almaktadır.
            </p>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default SentimentAnalysisSlide;
