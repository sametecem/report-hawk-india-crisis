
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import SummaryCards from '@/components/slides/youtube-analysis/SummaryCards';
import DailyEngagementChart from '@/components/slides/youtube-analysis/DailyEngagementChart';
import InteractionChart from '@/components/slides/youtube-analysis/InteractionChart';
import ChannelsTable from '@/components/slides/youtube-analysis/ChannelsTable';
import PopularVideosTable from '@/components/slides/youtube-analysis/PopularVideosTable';
import TimeCodeVideos from '@/components/slides/youtube-analysis/TimeCodeVideos';
import { summaryData, dailyData, interactionData, channelData, topVideos, timeCodeVideos } from '@/components/slides/youtube-analysis/youtubeAnalysisData';

const YouTubeAnalysisSlide = () => {
  return (
    <Slide title="10. YouTube Video Analizi" bgColor="bg-gradient-to-br from-white via-red-50 to-red-100">
      <div className="space-y-6">
        <SummaryCards 
          videoCount={summaryData.videoCount}
          totalViews={summaryData.totalViews}
          totalComments={summaryData.totalComments}
          totalLikes={summaryData.totalLikes}
          totalSubscribers={summaryData.totalSubscribers}
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-4 bg-white/90 backdrop-blur-sm">
            <DailyEngagementChart data={dailyData} />
          </Card>
          
          <Card className="p-4 bg-white/90 backdrop-blur-sm">
            <InteractionChart data={interactionData} />
          </Card>
        </div>
        
        <TimeCodeVideos videos={timeCodeVideos} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-4 bg-white/90 backdrop-blur-sm">
            <ChannelsTable channels={channelData} />
          </Card>
          
          <Card className="p-4 bg-white/90 backdrop-blur-sm">
            <PopularVideosTable videos={topVideos} />
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default YouTubeAnalysisSlide;
