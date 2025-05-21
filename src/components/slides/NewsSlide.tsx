
import React from 'react';
import Slide from '@/components/Slide';
import NewsHeader from '@/components/news/NewsHeader';
import DailyNewsChart from '@/components/news/DailyNewsChart';
import WordCloud from '@/components/news/WordCloud';
import SentimentAnalysisChart from '@/components/news/SentimentAnalysisChart';
import NewsCard from '@/components/news/NewsCard';
import { newsData, dailyNewsData, sentimentData, wordCloudData } from '@/data/newsData';

const NewsSlide = () => {
  return (
    <Slide
      title="Güncel Haberler Özeti"
      subtitle="Teknoloji ve sosyal medya alanındaki en son gelişmeler"
      contentClassName="overflow-y-auto"
    >
      <div className="space-y-6">
        <NewsHeader totalNews={newsData.length} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SentimentAnalysisChart data={sentimentData} />
          <WordCloud data={wordCloudData} />
        </div>

        <DailyNewsChart data={dailyNewsData} />

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Öne Çıkan Haberler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsData.slice(0, 4).map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </Slide>
  );
};

export default NewsSlide;
