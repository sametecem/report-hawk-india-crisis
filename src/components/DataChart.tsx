
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { cn } from '@/lib/utils';

interface DataChartProps {
  data: Array<Record<string, any>>;
  dataKey: string;
  xAxisKey: string;
  barColor?: string;
  className?: string;
  title?: string;
}

const CHART_COLORS = ['#3b82f6', '#8b5cf6', '#ec4899', '#ef4444', '#f97316', '#eab308'];

const DataChart = ({ 
  data, 
  dataKey, 
  xAxisKey, 
  barColor = "#3b82f6", 
  className,
  title
}: DataChartProps) => {
  return (
    <div className={cn("w-full flex flex-col rounded-xl shadow-md bg-white p-5", className)}>
      {title && (
        <h3 className="text-xl font-semibold mb-4 text-gray-700 flex items-center">
          <span className="w-2 h-6 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full mr-2"></span>
          {title}
        </h3>
      )}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 15,
            }}
            barSize={40}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis 
              dataKey={xAxisKey} 
              axisLine={false} 
              tickLine={false}
              tick={{ fill: '#666', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#666', fontSize: 12 }}
            />
            <Tooltip 
              cursor={{ fill: 'rgba(0, 0, 0, 0.05)' }}
              contentStyle={{ 
                backgroundColor: 'white', 
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                border: 'none'
              }}
            />
            <Legend wrapperStyle={{ marginTop: 10 }} />
            <Bar 
              dataKey={dataKey} 
              radius={[4, 4, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`}
                  fill={barColor || CHART_COLORS[index % CHART_COLORS.length]} 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataChart;
