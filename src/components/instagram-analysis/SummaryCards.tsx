
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { MessageSquare, Users, Flag } from 'lucide-react';

interface SummaryCardsProps {
  metrics: {
    totalComments: number;
    uniqueUsers: number;
    boycottPercentage: number;
  };
  formatNumber: (num: number) => string;
}

const SummaryCards: React.FC<SummaryCardsProps> = ({ metrics, formatNumber }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <MessageSquare className="h-6 w-6 text-violet-500" />
            <h3 className="text-xl font-bold text-gray-800">Toplam Yorum</h3>
          </div>
          <p className="text-4xl font-bold text-violet-600">{formatNumber(metrics.totalComments)}</p>
          <p className="text-sm text-gray-500 mt-2">5-18 Mayıs 2025 dönemi</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-indigo-500" />
            <h3 className="text-xl font-bold text-gray-800">Yorum Yapan</h3>
          </div>
          <p className="text-4xl font-bold text-indigo-600">{formatNumber(metrics.uniqueUsers)}</p>
          <p className="text-sm text-gray-500 mt-2">Tekil kullanıcı sayısı</p>
        </CardContent>
      </Card>
      
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <Flag className="h-6 w-6 text-red-500" />
            <h3 className="text-xl font-bold text-gray-800">Boykot Çağrısı</h3>
          </div>
          <p className="text-4xl font-bold text-red-600">{metrics.boycottPercentage}%</p>
          <p className="text-sm text-gray-500 mt-2">Yorumlarda boycott içeren oran</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SummaryCards;
