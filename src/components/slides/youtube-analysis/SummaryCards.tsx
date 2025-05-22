
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart2, MessageSquare, TrendingUp, Youtube } from 'lucide-react';
import { formatNumber } from './youtubeAnalysisData';

interface SummaryCardsProps {
  videoCount: number;
  totalViews: number;
  totalComments: number;
  avgLikesPer1000Views: number;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({
  videoCount,
  totalViews,
  totalComments,
  avgLikesPer1000Views,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-md border-blue-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-2 text-blue-400 opacity-20">
          <Youtube size={40} />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col">
            <div className="text-sm text-blue-600 font-medium mb-1">Video Adedi</div>
            <div className="text-2xl font-bold text-blue-800">
              {formatNumber(videoCount)}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-md border-purple-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-2 text-purple-400 opacity-20">
          <TrendingUp size={40} />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col">
            <div className="text-sm text-purple-600 font-medium mb-1">Toplam İzlenme</div>
            <div className="text-2xl font-bold text-purple-800">
              {formatNumber(totalViews)}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-md border-indigo-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-2 text-indigo-400 opacity-20">
          <MessageSquare size={40} />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col">
            <div className="text-sm text-indigo-600 font-medium mb-1">Toplam Yorum</div>
            <div className="text-2xl font-bold text-indigo-800">
              {formatNumber(totalComments)}
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 shadow-md border-cyan-200 overflow-hidden relative">
        <div className="absolute top-0 right-0 p-2 text-cyan-400 opacity-20">
          <BarChart2 size={40} />
        </div>
        <CardContent className="p-6">
          <div className="flex flex-col">
            <div className="text-sm text-cyan-600 font-medium mb-1">Beğeni / 1.000 İzlenme</div>
            <div className="text-2xl font-bold text-cyan-800">
              {avgLikesPer1000Views}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
