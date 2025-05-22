
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Table from '@/components/Table';
import { Users } from 'lucide-react';
import { formatNumber } from './youtubeAnalysisData';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

interface ChannelData {
  name: string;
  subscribers: number;
  videos: number;
  totalViews: number;
  profileImg?: string;
  channelLink?: string;
}

interface ChannelsTableProps {
  channels: ChannelData[];
}

const ChannelsTable: React.FC<ChannelsTableProps> = ({ channels }) => {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <Users size={18} className="mr-2 text-blue-500" /> En Popüler Kanallar (Abone Sayısı)
        </h3>
        <div className="overflow-x-auto">
          <Table
            headers={["Kanal", "Abone", "Video", "İzlenme"]}
            rows={channels.map(channel => [
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage 
                    src={channel.profileImg || `https://source.unsplash.com/random/100x100/?channel,profile`} 
                    alt={channel.name} 
                  />
                  <AvatarFallback>{channel.name.substring(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                {channel.channelLink ? (
                  <a 
                    href={channel.channelLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-blue-500 hover:underline transition-colors"
                  >
                    {channel.name}
                  </a>
                ) : (
                  <span>{channel.name}</span>
                )}
              </div>,
              formatNumber(channel.subscribers),
              channel.videos,
              formatNumber(channel.totalViews),
            ])}
            compact={true}
            striped={true}
            highlightFirstColumn={true}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default ChannelsTable;
