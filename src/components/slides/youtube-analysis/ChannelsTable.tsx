
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Table from '@/components/Table';
import { Users } from 'lucide-react';
import { formatNumber } from './youtubeAnalysisData';

interface ChannelData {
  name: string;
  subscribers: number;
  videos: number;
  totalViews: number;
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
              channel.name,
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
