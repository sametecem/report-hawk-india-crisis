
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import TweetVolumeChart from '@/components/daily-trends/TweetVolumeChart';
import SentimentScoreChart from '@/components/daily-trends/SentimentScoreChart';
import { peakDaysData } from '@/data/peakDaysData';
import TopMentionedAccounts from '@/components/daily-trends/TopMentionedAccounts';

const DailyTrendsSlide = () => {
  return (
    <Slide title="3. Günlük ve Haftalık Detaylı Trendler" bgColor="bg-gradient-to-br from-white via-indigo-50 to-indigo-100">
      <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm mb-8 relative">
        <TweetVolumeChart peakDaysData={peakDaysData} />
      </Card>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm relative">
          <SentimentScoreChart />
        </Card>
        
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm relative">
          <TopMentionedAccounts />
        </Card>
      </div>
    </Slide>
  );
};

export default DailyTrendsSlide;
