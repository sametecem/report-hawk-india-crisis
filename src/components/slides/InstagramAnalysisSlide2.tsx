
import React, { useRef } from 'react';
import Slide from '@/components/Slide';
import DailyVolumeChart from '@/components/instagram-analysis/DailyVolumeChart';
import SentimentChart from '@/components/instagram-analysis/SentimentChart';
import EmotionDistributionChart from '@/components/instagram-analysis/EmotionDistributionChart';
import ThemeClusterChart from '@/components/instagram-analysis/ThemeClusterChart';
import PostNegativeRatioChart from '@/components/instagram-analysis/PostNegativeRatioChart';
import ToxicityAnalysisChart from '@/components/instagram-analysis/ToxicityAnalysisChart';
import DownloadButton from '@/components/DownloadButton';

const InstagramAnalysisSlide2 = () => {
  const slideContentRef = useRef<HTMLDivElement>(null);
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);
  const row3Ref = useRef<HTMLDivElement>(null);

  return (
    <Slide
      title="Instagram Yorum Analizi Detayları"
      subtitle="1-10 Mayıs 2023 tarihlerinde Instagram'daki THY boykot yorumlarının detaylı analizi"
      contentClassName="overflow-y-auto relative"
    >
      <DownloadButton 
        targetRef={slideContentRef} 
        filename="instagram-yorum-analizi-detaylari" 
        className="absolute top-0 right-0 z-10" 
      />
      
      <div className="space-y-6 bg-white" ref={slideContentRef}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 relative bg-white" ref={row1Ref}>
          <DownloadButton 
            targetRef={row1Ref} 
            filename="hacim-ve-duygu-analizi" 
            className="absolute top-0 right-0 z-10" 
            variant="outline" 
            size="sm" 
          />
          <DailyVolumeChart />
          <SentimentChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6 relative bg-white" ref={row2Ref}>
          <DownloadButton 
            targetRef={row2Ref} 
            filename="duygu-ve-tema-analizi" 
            className="absolute top-0 right-0 z-10" 
            variant="outline" 
            size="sm" 
          />
          <EmotionDistributionChart />
          <ThemeClusterChart />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 relative bg-white" ref={row3Ref}>
          <DownloadButton 
            targetRef={row3Ref} 
            filename="post-ve-toksisite-analizi" 
            className="absolute top-0 right-0 z-10" 
            variant="outline" 
            size="sm" 
          />
          <PostNegativeRatioChart />
          <ToxicityAnalysisChart />
        </div>
      </div>
    </Slide>
  );
};

export default InstagramAnalysisSlide2;
