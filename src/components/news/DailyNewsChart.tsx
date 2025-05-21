
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface DailyNewsDataItem {
  day: string;
  count: number;
}

const DailyNewsChart = ({ data }: { data: DailyNewsDataItem[] }) => {
  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Günlük Haber Sayısı</h2>
      <div className="w-full h-64 bg-gray-50 rounded-lg border p-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis dataKey="day" stroke="#888" />
            <YAxis stroke="#888" />
            <Tooltip />
            <Line 
              type="monotone" 
              dataKey="count" 
              name="Haber Sayısı" 
              stroke="#3b82f6" 
              strokeWidth={2} 
              activeDot={{ r: 6 }} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyNewsChart;
