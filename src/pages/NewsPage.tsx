
import React from 'react';
import NewsCard from '@/components/news/NewsCard';
import DailyNewsChart from '@/components/news/DailyNewsChart';
import WordCloud from '@/components/news/WordCloud';
import SentimentAnalysisChart from '@/components/news/SentimentAnalysisChart';
import NewsHeader from '@/components/news/NewsHeader';
import { newsData, dailyNewsData, sentimentData, wordCloudData } from '@/data/newsData';

const NewsPage = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <NewsHeader totalNews={newsData.length} />
        
        <DailyNewsChart data={dailyNewsData} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SentimentAnalysisChart data={sentimentData} />
          <WordCloud data={wordCloudData} />
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Öne Çıkan Haberler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsData.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
