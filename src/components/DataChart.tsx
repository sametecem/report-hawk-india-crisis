
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { cn } from '@/lib/utils';

interface DataChartProps {
  data: Array<Record<string, any>>;
  dataKey: string;
  xAxisKey: string;
  barColor?: string;
  className?: string;
  title?: string;
}

const DataChart = ({ 
  data, 
  dataKey, 
  xAxisKey, 
  barColor = "#3b82f6", 
  className,
  title
}: DataChartProps) => {
  return (
    <div className={cn("w-full flex flex-col", className)}>
      {title && <h3 className="text-xl font-semibold mb-4 text-gray-700">{title}</h3>}
      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={xAxisKey} />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey={dataKey} fill={barColor} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DataChart;
