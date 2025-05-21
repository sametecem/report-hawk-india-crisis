
import React from 'react';
import Slide from '@/components/Slide';
import DailyVolumeChart from '@/components/instagram-analysis/DailyVolumeChart';
import SentimentChart from '@/components/instagram-analysis/SentimentChart';
import EmotionDistributionChart from '@/components/instagram-analysis/EmotionDistributionChart';
import ThemeClusterChart from '@/components/instagram-analysis/ThemeClusterChart';
import PostNegativeRatioChart from '@/components/instagram-analysis/PostNegativeRatioChart';
import ToxicityAnalysisChart from '@/components/instagram-analysis/ToxicityAnalysisChart';

const InstagramAnalysisSlide2 = () => {
  return (
    <Slide
      title="Instagram Yorum Analizi Detayları"
      subtitle="1-10 Mayıs 2023 tarihlerinde Instagram'daki THY boykot yorumlarının detaylı analizi"
      contentClassName="overflow-y-auto"
    >
      <div className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <DailyVolumeChart />
          <SentimentChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <EmotionDistributionChart />
          <ThemeClusterChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <PostNegativeRatioChart />
          <ToxicityAnalysisChart />
        </div>
      </div>
    </Slide>
  );
};

export default InstagramAnalysisSlide2;
