
import React, { useRef } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import { Share } from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';

const TweetInteractionChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  // Tweet etkileşim verileri
  const interactionData = [
    { date: '8 May', likes: 2456, retweets: 879, replies: 124 },
    { date: '9 May', likes: 3720, retweets: 1240, replies: 256 },
    { date: '10 May', likes: 18450, retweets: 5680, replies: 782 },
    { date: '11 May', likes: 8950, retweets: 3250, replies: 410 },
    { date: '12 May', likes: 7840, retweets: 2190, replies: 365 },
    { date: '13 May', likes: 51062, retweets: 14956, replies: 1835 },
    { date: '14 May', likes: 2340, retweets: 780, replies: 220 },
    { date: '15 May', likes: 1752, retweets: 540, replies: 86 }
  ];

  return (
    <div className="relative" ref={chartRef}>
      <DownloadButton 
        targetRef={chartRef} 
        filename="gunluk-etkilesim-verileri" 
        className="absolute top-0 right-0 z-10" 
      />
      
      <div className="flex items-center gap-2 mb-4">
        <Share className="w-5 h-5 text-indigo-600" />
        <h3 className="text-lg md:text-xl font-bold text-gray-800">Tweet Etkileşim İstatistikleri</h3>
      </div>
      
      <div className="h-64 md:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={interactionData}
            margin={{ top: 5, right: 30, left: 10, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="date" 
              tick={{ fontSize: 11 }}
              interval={window.innerWidth < 768 ? 1 : 0}
            />
            <YAxis 
              tick={{ fontSize: 11 }}
              width={40}
            />
            <Tooltip />
            <Legend 
              wrapperStyle={{ fontSize: 12, paddingTop: 10 }}
            />
            <Bar dataKey="likes" name="Beğeni" fill="#EF4444" />
            <Bar dataKey="retweets" name="Retweet" fill="#10B981" />
            <Bar dataKey="replies" name="Yanıt" fill="#3B82F6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 text-sm text-gray-600">
        <p>13 Mayıs tarihinde en yüksek etkileşim görülmüştür (51.062 beğeni, 14.956 retweet).</p>
      </div>
    </div>
  );
};

export default TweetInteractionChart;
