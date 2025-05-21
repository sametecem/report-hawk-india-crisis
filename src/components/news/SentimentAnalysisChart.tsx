
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent } from '@/components/ui/card';

interface SentimentDataItem {
  name: string;
  value: number;
  color: string;
}

const SentimentAnalysisChart = ({ data }: { data: SentimentDataItem[] }) => {
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-md shadow-md border border-gray-200">
          <p className="font-medium text-sm">{`${payload[0].name}`}</p>
          <p className="font-semibold" style={{ color: payload[0].payload.color }}>
            {`${payload[0].value}%`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius="70%"
            innerRadius="50%"
            fill="#8884d8"
            dataKey="value"
            strokeWidth={2}
            stroke="#ffffff"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            layout="horizontal" 
            verticalAlign="bottom" 
            align="center" 
            formatter={(value) => (
              <span className="text-xs font-medium text-gray-700">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentAnalysisChart;
