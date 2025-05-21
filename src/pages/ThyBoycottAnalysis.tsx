
import React from 'react';
import { 
  sentimentData, 
  dailyCommentsData, 
  hashtagsData, 
  popularCommentsData 
} from '../components/thy-boycott/mockData';
import SentimentAnalysisCard from '../components/thy-boycott/SentimentAnalysisCard';
import DailyCommentsCard from '../components/thy-boycott/DailyCommentsCard';
import HashtagsCard from '../components/thy-boycott/HashtagsCard';
import PopularCommentsCard from '../components/thy-boycott/PopularCommentsCard';

const ThyBoycottAnalysis = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">THY Boykot Analizi</h1>
        <p className="text-gray-600 mb-6">
          1-8 Mayıs 2023 tarihlerinde Instagram&apos;daki THY boykot çağrılarının analizi
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <SentimentAnalysisCard sentimentData={sentimentData} />
          <DailyCommentsCard dailyCommentsData={dailyCommentsData} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <HashtagsCard hashtagsData={hashtagsData} />
          <PopularCommentsCard popularCommentsData={popularCommentsData} />
        </div>
      </div>
    </div>
  );
};

export default ThyBoycottAnalysis;
