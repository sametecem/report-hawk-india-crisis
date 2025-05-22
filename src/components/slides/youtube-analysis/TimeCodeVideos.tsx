
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, ExternalLink, PlayCircle } from 'lucide-react';
import Image from '@/components/ui/Image';

interface TimeCodeVideo {
  id: string;
  timestamp: number;
  url: string;
}

interface TimeCodeVideosProps {
  videos: TimeCodeVideo[];
}

const formatTime = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

const TimeCodeVideos: React.FC<TimeCodeVideosProps> = ({ videos }) => {
  const getThumbnailUrl = (videoId: string): string => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  const openVideoAtTimestamp = (url: string): void => {
    window.open(url, '_blank');
  };

  return (
    <Card className="bg-white shadow-md overflow-hidden">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <Clock size={18} className="mr-2 text-red-500" /> Önemli Video Anları
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {videos.map((video, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg border border-gray-200 shadow-sm transition-all hover:shadow-md cursor-pointer"
              onClick={() => openVideoAtTimestamp(video.url)}
            >
              <div className="group relative aspect-video w-full overflow-hidden bg-gray-100">
                <Image 
                  src={getThumbnailUrl(video.id)} 
                  alt={`Video ${index + 1}`} 
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded-md flex items-center">
                  <Clock size={12} className="mr-1" />
                  {formatTime(video.timestamp)}
                </div>
              </div>
              <div className="flex items-center justify-between p-3 bg-gradient-to-r from-red-500/10 to-red-500/5">
                <span className="text-sm font-medium">Video {index + 1}</span>
                <ExternalLink size={14} className="text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default TimeCodeVideos;
