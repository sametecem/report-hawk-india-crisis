
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
  ReferenceLine,
} from 'recharts';
import { TrendingUp } from 'lucide-react';
import { tweetVolumeData } from '@/data/reportData';
import DownloadButton from '@/components/DownloadButton';
import { PeakDayData } from '@/types/dailyTrends';

interface TweetVolumeChartProps {
  peakDaysData: PeakDayData[];
}

const TweetVolumeChart: React.FC<TweetVolumeChartProps> = ({ peakDaysData }) => {
  const volumeChartRef = useRef<HTMLDivElement>(null);

  const volumeChartData = React.useMemo(() => {
    return tweetVolumeData.map((item) => ({
      ...item,
      // Add isPeakDay property to the data points that match our peak days
      isPeakDay: peakDaysData.some(peak => peak.date === item.name)
    }));
  }, [peakDaysData]);

  return (
    <div ref={volumeChartRef}>
      <DownloadButton targetRef={volumeChartRef} filename="hacim-ve-zirve-gunler" className="absolute top-2 right-2" />
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl font-bold text-gray-800">Dönemsel Hacim ve Zirve Günler</h3>
      </div>

      <div className="h-80 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={volumeChartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis 
              dataKey="name" 
              angle={-45}
              textAnchor="end"
              height={70}
              minTickGap={-200}
              tick={{fontSize: 12}}
            />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`${value} tweet`, "Hacim"]}
              labelFormatter={(label) => `Tarih: ${label}`}
              contentStyle={{
                backgroundColor: "white",
                borderRadius: "8px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                border: "none"
              }}
            />
            <Legend />
            <Line 
              type="monotone" 
              dataKey="tweets" 
              stroke="#4f46e5" 
              strokeWidth={2}
              dot={(props) => {
                const { cx, cy, payload } = props;
                const isPeakDay = payload.isPeakDay;
                
                return isPeakDay ? (
                  <circle 
                    cx={cx} 
                    cy={cy} 
                    r={6} 
                    fill="#4f46e5" 
                    stroke="white" 
                    strokeWidth={2} 
                  />
                ) : (
                  <circle 
                    cx={cx} 
                    cy={cy} 
                    r={3} 
                    fill="#4f46e5" 
                  />
                );
              }}
              activeDot={{ r: 8 }}
              name="Tweet Hacmi"
            />
            
            {/* Add reference lines for the peak days */}
            {peakDaysData.map((peak, index) => (
              <ReferenceLine 
                key={index}
                x={peak.date} 
                stroke={peak.color} 
                strokeDasharray="3 3"
                strokeWidth={2}
                label={{ 
                  value: peak.title, 
                  position: 'insideTopRight',
                  fill: peak.color,
                  fontSize: 12,
                  fontWeight: 'bold'
                }}
              />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TweetVolumeChart;
