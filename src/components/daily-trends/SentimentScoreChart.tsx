
import React, { useRef } from 'react';
import { 
  LineChart,
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { sentimentData } from '@/data/reportData';
import DownloadButton from '@/components/DownloadButton';

const SentimentScoreChart: React.FC = () => {
  const sentimentChartRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mt-8 relative" ref={sentimentChartRef}>
      <DownloadButton 
        targetRef={sentimentChartRef} 
        filename="duygu-skoru-trendi" 
        className="absolute top-0 right-0" 
        variant="outline"
        size="sm" 
      />
      <h3 className="text-xl font-bold mb-4 text-gray-800">Duygu Skoru Trendi (8-15 Mayıs)</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={sentimentData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="name" />
            <YAxis domain={[-1, 0.5]} />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="score" stroke="#ef4444" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SentimentScoreChart;
