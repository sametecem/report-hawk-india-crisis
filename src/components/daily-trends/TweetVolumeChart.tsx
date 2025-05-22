
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
    return tweetVolumeData.map((item) => {
      // Check if this date is a peak day
      const peakDay = peakDaysData.find(peak => peak.date === item.name);
      
      return {
        ...item,
        isPeakDay: !!peakDay,
        color: peakDay ? peakDay.color : "#4f46e5",
        // Add peak day info for tooltip
        peakInfo: peakDay ? peakDay.title : null
      };
    });
  }, [peakDaysData]);

  // Group data into smaller chunks for better display
  const groupedChartData = [];
  const chunkSize = 7; // Show 7 days per group
  
  for (let i = 0; i < volumeChartData.length; i += chunkSize) {
    groupedChartData.push(volumeChartData.slice(i, i + chunkSize));
  }

  return (
    <div ref={volumeChartRef}>
      <DownloadButton targetRef={volumeChartRef} filename="hacim-ve-zirve-gunler" className="absolute top-2 right-2" />
      <div className="flex items-center gap-2 mb-4">
        <TrendingUp className="w-5 h-5 text-indigo-600" />
        <h3 className="text-xl font-bold text-gray-800">Dönemsel Hacim ve Zirve Günler</h3>
      </div>

      {groupedChartData.map((chartGroup, groupIndex) => (
        <div key={groupIndex} className="mb-6">
          <h4 className="text-sm font-medium text-gray-600 mb-2">
            {chartGroup[0].name} - {chartGroup[chartGroup.length - 1].name}
          </h4>
          <div className="h-60">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartGroup}
                margin={{ top: 20, right: 30, left: 20, bottom: 30 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={70}
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value, name, props) => {
                    return [`${value} tweet`, "Hacim"];
                  }}
                  labelFormatter={(label) => `Tarih: ${label}`}
                  contentStyle={{
                    backgroundColor: "white",
                    borderRadius: "8px",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                    border: "none"
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="tweets" 
                  name="Tweet Hacmi"
                >
                  {chartGroup.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={entry.color} 
                      stroke={entry.isPeakDay ? "#ffffff" : entry.color}
                      strokeWidth={entry.isPeakDay ? 2 : 0}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Peak Day Labels */}
          <div className="flex flex-wrap gap-2 mt-2">
            {chartGroup
              .filter(day => day.isPeakDay)
              .map((peakDay, index) => (
                <div 
                  key={index}
                  className="inline-flex items-center text-xs font-medium px-2 py-1 rounded-full" 
                  style={{
                    backgroundColor: `${peakDay.color}20`,
                    color: peakDay.color,
                    border: `1px solid ${peakDay.color}`
                  }}
                >
                  {peakDay.name}: {peakDay.peakInfo}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TweetVolumeChart;
