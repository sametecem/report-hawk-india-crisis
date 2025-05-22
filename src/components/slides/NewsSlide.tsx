
import React from 'react';
import Slide from '@/components/Slide';
import { BookOpen, Calendar, AlertTriangle } from 'lucide-react';
import { newsData, dailyNewsData, sentimentData, wordCloudData } from '@/data/newsData';
import NewsCard from '@/components/news/NewsCard';
import DailyNewsChart from '@/components/news/DailyNewsChart';
import SentimentAnalysisChart from '@/components/news/SentimentAnalysisChart';

const NewsSlide = () => {
  return (
    <Slide
      title="Güncel Haberler Özeti"
      subtitle="Türkiye-Hindistan ilişkileri ve boykot çağrıları hakkında en son gelişmeler"
      contentClassName="overflow-y-auto"
      bgColor="bg-gradient-to-br from-white via-red-50 to-red-100"
    >
      <div className="space-y-6">
        {/* Statistics row */}
        <div className="grid grid-cols-3 gap-4 mb-2">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Toplam Haber</p>
                <p className="text-xl font-bold text-gray-800">81</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-full">
                <Calendar className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Bu Hafta</p>
                <p className="text-xl font-bold text-gray-800">43</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-full">
                <AlertTriangle className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Negatif İçerik</p>
                <p className="text-xl font-bold text-red-600">{sentimentData.find(item => item.name === "Negatif")?.value}%</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Charts row */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Günlük Haber Sayısı</h3>
            <div className="h-48">
              <DailyNewsChart data={dailyNewsData} />
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-4 border border-gray-100">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Duygu Analizi</h3>
            <div className="h-48">
              <SentimentAnalysisChart data={sentimentData} />
            </div>
          </div>
        </div>

        {/* News cards */}
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
            <BookOpen className="mr-2 h-4 w-4 text-blue-600" />
            Öne Çıkan Haberler
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {newsData.slice(0, 4).map(news => (
              <NewsCard key={news.id} news={news} />
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default NewsSlide;
