
import React, { useRef } from 'react';
import Slide from '@/components/Slide';
import SummaryCards from './youtube-analysis/SummaryCards';
import DailyEngagementChart from './youtube-analysis/DailyEngagementChart';
import PopularVideosTable from './youtube-analysis/PopularVideosTable';
import ChannelsTable from './youtube-analysis/ChannelsTable';
import InteractionChart from './youtube-analysis/InteractionChart';
import TimeCodeVideos from './youtube-analysis/TimeCodeVideos';
import DownloadButton from '@/components/DownloadButton';
import { 
  summaryData, 
  dailyData, 
  topVideos, 
  channelData, 
  interactionData,
  timeCodeVideos
} from './youtube-analysis/youtubeAnalysisData';

const YouTubeAnalysisSlide = () => {
  const summaryRef = useRef<HTMLDivElement>(null);
  const dailyChartRef = useRef<HTMLDivElement>(null);
  const topVideosRef = useRef<HTMLDivElement>(null);
  const channelsRef = useRef<HTMLDivElement>(null);
  const interactionRef = useRef<HTMLDivElement>(null);
  const timeCodeRef = useRef<HTMLDivElement>(null);

  return (
    <Slide title="YouTube Etkisi Analizi" subtitle="THY Boykot Konulu Video Analizi">
      <div className="grid grid-cols-1 gap-6">
        {/* 1. Summary section */}
        <div ref={summaryRef} className="relative">
          <SummaryCards 
            videoCount={summaryData.videoCount}
            totalViews={summaryData.totalViews}
            totalComments={summaryData.totalComments}
            totalLikes={summaryData.totalLikes}
            totalSubscribers={97581745}
          />
          <DownloadButton targetRef={summaryRef} filename="youtube-summary" />
        </div>
        
        {/* 2. Daily Views & Interactions Chart */}
        <div ref={dailyChartRef} className="relative">
          <DailyEngagementChart data={dailyData} />
          <DownloadButton targetRef={dailyChartRef} filename="youtube-daily-engagement" />
        </div>

        {/* 3. Time Code Videos */}
        <div ref={timeCodeRef} className="relative">
          <TimeCodeVideos videos={timeCodeVideos} />
          <DownloadButton targetRef={timeCodeRef} filename="youtube-timecodes" />
        </div>

        {/* 4. Top Videos */}
        <div ref={topVideosRef} className="relative">
          <PopularVideosTable videos={topVideos} />
          <DownloadButton targetRef={topVideosRef} filename="youtube-popular-videos" />
        </div>

        {/* 5. Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Channel Data */}
          <div ref={channelsRef} className="relative">
            <ChannelsTable channels={channelData} />
            <DownloadButton targetRef={channelsRef} filename="youtube-channels" />
          </div>

          {/* Interaction Types Breakdown */}
          <div ref={interactionRef} className="relative">
            <InteractionChart data={interactionData} />
            <DownloadButton targetRef={interactionRef} filename="youtube-interactions" />
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default YouTubeAnalysisSlide;
