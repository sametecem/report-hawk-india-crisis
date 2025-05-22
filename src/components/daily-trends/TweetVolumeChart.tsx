
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
  LabelList
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

  // Simplify data structure - use a single array with peak indicators
  const volumeChartData = tweetVolumeData.map((item) => {
    const peakDay = peakDaysData.find(peak => peak.date === item.name);
    return {
      ...item,
      isPeakDay: !!peakDay,
      color: peakDay ? peakDay.color : "#4f46e5",
      peakInfo: peakDay ? peakDay.title : null,
      peakDescription: peakDay ? peakDay.description : null
    };
  });

  // Custom tooltip to display peak day information
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-md shadow-md border border-gray-200">
          <p className="font-bold">{label}</p>
          <p className="text-sm">{data.tweets} tweet</p>
          
          {data.isPeakDay && (
            <div className="mt-2 border-t pt-2">
              <p className="font-bold text-sm" style={{ color: data.color }}>{data.peakInfo}</p>
              <p className="text-xs mt-1 max-w-[250px]">{data.peakDescription}</p>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // Create labels for peak days that will be displayed above the bars
  const renderCustomizedPeakLabels = (props: any) => {
    const { x, y, value, width, height, index } = props;
    const data = volumeChartData[index];
    
    if (!data.isPeakDay) return null;
    
    return (
      <g>
        <text
          x={x + width / 2}
          y={y - 10}
          textAnchor="middle"
          fill={data.color}
          fontWeight="bold"
          fontSize={12}
        >
          {data.peakInfo}
        </text>
      </g>
    );
  };

  return (
    <div ref={volumeChartRef}>
      <DownloadButton targetRef={volumeChartRef} filename="hacim-ve-zirve-gunler" className="absolute top-2 right-2" />
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl font-bold text-gray-800">Tweet Hacmi ve Önemli Günler</h3>
      </div>

      <div className="mt-4">
        <div className="h-80"> {/* Increased height for better visibility */}
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={volumeChartData}
              margin={{ top: 40, right: 30, left: 20, bottom: 60 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                dataKey="name" 
                angle={0}
                textAnchor="middle"
                height={60}
                tick={{ fontSize: 12 }}
                interval={0}
              />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Legend />
              <Bar 
                dataKey="tweets" 
                name="Tweet Hacmi"
              >
                {volumeChartData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`}
                    fill={entry.color} 
                    stroke={entry.isPeakDay ? "#ffffff" : entry.color}
                    strokeWidth={entry.isPeakDay ? 2 : 0}
                  />
                ))}
                <LabelList dataKey="peakInfo" content={renderCustomizedPeakLabels} />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {peakDaysData.map((peak, index) => (
          <div 
            key={index}
            className="p-3 rounded-lg"
            style={{ 
              backgroundColor: `${peak.color}20`, 
              borderLeft: `4px solid ${peak.color}`
            }}
          >
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: peak.color }}
              ></div>
              <span className="font-bold text-sm">{peak.date}: {peak.title}</span>
            </div>
            <p className="text-xs mt-1 pl-5">{peak.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TweetVolumeChart;
