
import React from 'react';
import Slide from '@/components/Slide';
import SummaryCards from './youtube-analysis/SummaryCards';
import DailyEngagementChart from './youtube-analysis/DailyEngagementChart';
import PopularVideosTable from './youtube-analysis/PopularVideosTable';
import ChannelsTable from './youtube-analysis/ChannelsTable';
import InteractionChart from './youtube-analysis/InteractionChart';
import { 
  summaryData, 
  dailyData, 
  topVideos, 
  channelData, 
  interactionData 
} from './youtube-analysis/youtubeAnalysisData';

const YouTubeAnalysisSlide = () => {
  return (
    <Slide title="YouTube Etkisi Analizi" subtitle="THY Boykot Konulu Video Analizi">
      <div className="grid grid-cols-1 gap-6">
        {/* 1. Summary section */}
        <SummaryCards 
          videoCount={summaryData.videoCount}
          totalViews={summaryData.totalViews}
          totalComments={summaryData.totalComments}
          avgLikesPer1000Views={summaryData.avgLikesPer1000Views}
        />
        
        {/* 2. Daily Views & Interactions Chart */}
        <DailyEngagementChart data={dailyData} />

        {/* 3. Top Videos */}
        <PopularVideosTable videos={topVideos} />

        {/* 4. Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Channel Data */}
          <ChannelsTable channels={channelData} />

          {/* Interaction Types Breakdown */}
          <InteractionChart data={interactionData} />
        </div>
      </div>
    </Slide>
  );
};

export default YouTubeAnalysisSlide;
