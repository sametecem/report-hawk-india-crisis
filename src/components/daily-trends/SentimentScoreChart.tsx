
import React, { useRef } from 'react';
import { 
  BarChart,
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  Cell,
  ReferenceLine,
} from 'recharts';
import { sentimentData } from '@/data/reportData';
import DownloadButton from '@/components/DownloadButton';

const SentimentScoreChart: React.FC = () => {
  const sentimentChartRef = useRef<HTMLDivElement>(null);

  // Add colors based on sentiment values
  const processedData = sentimentData.map(item => ({
    ...item,
    color: item.score < 0 ? '#ef4444' : '#22c55e'
  }));

  return (
    <div className="mt-2 md:mt-4 relative" ref={sentimentChartRef}>
      <DownloadButton 
        targetRef={sentimentChartRef} 
        filename="duygu-skoru-trendi" 
        className="absolute top-0 right-0" 
        variant="outline"
        size="sm" 
      />
      <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-4 text-gray-800">Duygu Skoru Trendi (8-15 Mayıs)</h3>
      <div className="h-52 md:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={processedData}
            margin={{ top: 20, right: 25, left: 10, bottom: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={0} 
              textAnchor="middle"
              height={50}
              tick={{ fontSize: window.innerWidth < 768 ? 10 : 12 }}
              interval={window.innerWidth < 768 ? 1 : 0}
            />
            <YAxis 
              domain={[-1, 0.5]} 
              tick={{ fontSize: window.innerWidth < 768 ? 10 : 12 }}
              width={30}
            />
            <Tooltip 
              formatter={(value: any) => [`${Number(value).toFixed(2)}`, "Duygu Skoru"]}
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "none",
                fontSize: window.innerWidth < 768 ? 10 : 12
              }}
            />
            <Legend wrapperStyle={{ fontSize: window.innerWidth < 768 ? 10 : 12 }} />
            <ReferenceLine y={0} stroke="#666" strokeDasharray="3 3" />
            <Bar 
              dataKey="score" 
              name="Duygu Skoru"
            >
              {processedData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={entry.color} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 text-xs md:text-sm text-gray-500">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 md:w-3 h-2 md:h-3 bg-red-500 rounded-full"></span>
          <span>Negatif Duygu (0'ın altı)</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-block w-2 md:w-3 h-2 md:h-3 bg-green-500 rounded-full"></span>
          <span>Pozitif Duygu (0'ın üstü)</span>
        </div>
      </div>
    </div>
  );
};

export default SentimentScoreChart;
