
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import SummaryCards from '@/components/slides/youtube-analysis/SummaryCards';
import DailyEngagementChart from '@/components/slides/youtube-analysis/DailyEngagementChart';
import InteractionChart from '@/components/slides/youtube-analysis/InteractionChart';
import ChannelsTable from '@/components/slides/youtube-analysis/ChannelsTable';
import PopularVideosTable from '@/components/slides/youtube-analysis/PopularVideosTable';
import TimeCodeVideos from '@/components/slides/youtube-analysis/TimeCodeVideos';
import { youtubeData } from '@/components/slides/youtube-analysis/youtubeAnalysisData';

const YouTubeAnalysisSlide = () => {
  const timeCodedVideos = [
    { id: "7ewJxa5qcSw", timestamp: 16, url: "https://youtu.be/7ewJxa5qcSw?feature=shared&t=16" },
    { id: "9qxSxMiG2I8", timestamp: 188, url: "https://youtu.be/9qxSxMiG2I8?feature=shared&t=188" },
    { id: "YpiBq3CK-C0", timestamp: 144, url: "https://youtu.be/YpiBq3CK-C0?feature=shared&t=144" },
    { id: "Rlsh4qf4DiU", timestamp: 16, url: "https://youtu.be/Rlsh4qf4DiU?feature=shared&t=16" },
    { id: "P88S6EjJDcw", timestamp: 60, url: "https://youtu.be/P88S6EjJDcw?feature=shared&t=60" },
    { id: "nBXJxU7U6MY", timestamp: 8, url: "https://youtu.be/nBXJxU7U6MY?feature=shared&t=8" },
    { id: "wnlJZ5FtE0M", timestamp: 170, url: "https://youtu.be/wnlJZ5FtE0M?feature=shared&t=170" },
    { id: "nBXJxU7U6MY", timestamp: 8, url: "https://youtu.be/nBXJxU7U6MY?feature=shared&t=8" },
    { id: "WOlKwTpF57A", timestamp: 14, url: "https://youtu.be/WOlKwTpF57A?feature=shared&t=14" }
  ];

  return (
    <Slide title="10. YouTube Video Analizi" bgColor="bg-gradient-to-br from-white via-red-50 to-red-100">
      <div className="space-y-6">
        <SummaryCards data={youtubeData.summary} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-4 bg-white/90 backdrop-blur-sm">
            <DailyEngagementChart data={youtubeData.dailyEngagement} />
          </Card>
          
          <Card className="p-4 bg-white/90 backdrop-blur-sm">
            <InteractionChart data={youtubeData.interactionData} />
          </Card>
        </div>
        
        <TimeCodeVideos videos={timeCodedVideos} />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="p-4 bg-white/90 backdrop-blur-sm">
            <ChannelsTable channels={youtubeData.channels} />
          </Card>
          
          <Card className="p-4 bg-white/90 backdrop-blur-sm">
            <PopularVideosTable videos={youtubeData.popularVideos} />
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default YouTubeAnalysisSlide;
