
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Table from '@/components/Table';
import { Play, Video } from 'lucide-react';
import { formatNumber } from './youtubeAnalysisData';

interface VideoData {
  id: string;
  thumbnail: string;
  title: string;
  channel: string;
  publishDate: string;
  views: number;
  likes: number;
  comments: number;
}

interface PopularVideosTableProps {
  videos: VideoData[];
}

const PopularVideosTable: React.FC<PopularVideosTableProps> = ({ videos }) => {
  const openYouTubeVideo = (videoId: string) => {
    window.open(`https://www.youtube.com/watch?v=${videoId}`, '_blank');
  };

  return (
    <Card className="bg-white shadow-md overflow-hidden">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <Video size={18} className="mr-2 text-red-500" /> En Popüler Videolar
        </h3>
        <div className="overflow-x-auto">
          <Table
            headers={["Video", "Kanal", "İzlenme"]}
            rows={videos.map(video => [
              <div 
                className="flex items-center gap-2 cursor-pointer hover:text-blue-600 transition-colors" 
                key={video.id}
                onClick={() => openYouTubeVideo(video.id)}
              >
                <div className="relative w-12 h-8 flex-shrink-0 group">
                  <img 
                    src={video.thumbnail} 
                    alt={video.title}
                    className="object-cover rounded-sm w-full h-full"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-colors">
                    <Play size={12} className="text-white" />
                  </div>
                </div>
                <span className="line-clamp-1 underline">{video.title}</span>
              </div>,
              <span 
                className="cursor-pointer hover:text-blue-600 transition-colors" 
                onClick={() => window.open(`https://www.youtube.com/channel/${video.id}`, '_blank')}
              >
                {video.channel}
              </span>,
              formatNumber(video.views),
            ])}
            compact={true}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularVideosTable;
