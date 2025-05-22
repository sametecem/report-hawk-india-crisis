
import React from 'react';
import DailyCommentsCard from '@/components/thy-boycott/DailyCommentsCard';
import HashtagsCard from '@/components/thy-boycott/HashtagsCard';
import PopularCommentsCard from '@/components/thy-boycott/PopularCommentsCard';
import SentimentAnalysisCard from '@/components/thy-boycott/SentimentAnalysisCard';
import Navigation from '@/components/Navigation';
import { 
  dailyCommentsData,
  sentimentData,
  hashtagsData,
  popularCommentsData
} from '@/components/thy-boycott/mockData';

export default function ThyBoycottAnalysis() {
  return (
    <div className="container mx-auto p-4">
      <Navigation />
      <h1 className="text-3xl font-bold mb-6 text-center">THY Boykot Analizi</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DailyCommentsCard dailyCommentsData={dailyCommentsData} />
        <SentimentAnalysisCard sentimentData={sentimentData} />
        <HashtagsCard hashtagsData={hashtagsData} />
        <PopularCommentsCard popularCommentsData={popularCommentsData} />
      </div>
    </div>
  );
}
