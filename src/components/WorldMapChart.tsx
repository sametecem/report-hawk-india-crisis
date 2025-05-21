
import React from 'react';
import { ResponsiveContainer, ComposedChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell } from 'recharts';

// Map data representing country interactions
const mapData = [
  { country: 'Hindistan', value: 68.4, color: '#3b82f6' },
  { country: 'Pakistan', value: 14.1, color: '#22c55e' },
  { country: 'Türkiye', value: 9.2, color: '#f59e0b' },
  { country: 'ABD', value: 3.5, color: '#8b5cf6' },
  { country: 'Birleşik Krallık', value: 2.2, color: '#ec4899' },
  { country: 'Diğer', value: 2.6, color: '#9ca3af' }
];

interface WorldMapChartProps {
  className?: string;
}

const WorldMapChart = ({ className }: WorldMapChartProps) => {
  return (
    <div className={className}>
      <div className="mb-6 flex items-center justify-center">
        <div className="relative w-full aspect-[16/9] bg-blue-50 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-[url('/world-map-bg.svg')] bg-no-repeat bg-center bg-contain opacity-20"></div>
          <ResponsiveContainer width="100%" height="100%">
            <ComposedChart
              layout="vertical"
              data={mapData}
              margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} horizontal={false} />
              <XAxis type="number" domain={[0, 100]} tickFormatter={(value) => `${value}%`} />
              <YAxis dataKey="country" type="category" scale="band" width={90} />
              <Tooltip
                formatter={(value) => [`${value}%`, 'Etkileşim']}
                contentStyle={{ 
                  backgroundColor: 'white', 
                  borderRadius: '8px',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                  border: 'none'
                }}
              />
              <Legend />
              <Bar dataKey="value" name="Etkileşim Yüzdesi" radius={[0, 4, 4, 0]}>
                {mapData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Bar>
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default WorldMapChart;
