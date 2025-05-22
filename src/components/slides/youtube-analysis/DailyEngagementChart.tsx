
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { BarChart2 } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface DailyEngagementChartProps {
  data: Array<{
    date: string;
    uploads: number;
    views: number;
    interactions: number;
  }>;
}

const DailyEngagementChart: React.FC<DailyEngagementChartProps> = ({ data }) => {
  return (
    <Card className="bg-white shadow-md overflow-hidden">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <BarChart2 size={18} className="mr-2 text-blue-600" /> Günlük İzlenme ve Etkileşim Analizi
        </h3>
        <div className="h-80 w-full">
          <ChartContainer config={{
            views: {
              label: "İzlenmeler",
              theme: { light: "#6366f1", dark: "#818cf8" }
            },
            interactions: {
              label: "Etkileşimler",
              theme: { light: "#ec4899", dark: "#f472b6" }
            },
            uploads: {
              label: "Video Yüklemeleri",
              theme: { light: "#10b981", dark: "#34d399" }
            }
          }}>
            <ComposedChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="date" />
              <YAxis yAxisId="left" orientation="left" />
              <YAxis yAxisId="right" orientation="right" />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Legend />
              <Bar 
                yAxisId="right"
                dataKey="uploads" 
                name="Video Adedi" 
                fill="var(--color-uploads)" 
                radius={[4, 4, 0, 0]} 
                barSize={30} 
              />
              <Bar 
                yAxisId="left"
                dataKey="views" 
                name="İzlenme" 
                fill="var(--color-views)" 
                radius={[4, 4, 0, 0]} 
                barSize={30} 
              />
              <Line 
                yAxisId="left"
                type="monotone" 
                dataKey="interactions" 
                name="Etkileşim" 
                stroke="var(--color-interactions)" 
                strokeWidth={2} 
                dot={{ r: 4 }} 
                activeDot={{ r: 6 }} 
              />
            </ComposedChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyEngagementChart;
