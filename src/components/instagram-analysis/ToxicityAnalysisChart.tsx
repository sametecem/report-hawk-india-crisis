
import React, { useRef } from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toxicityData } from '@/data/instagramCommentAnalysisData';
import DownloadButton from '@/components/DownloadButton';

const ToxicityAnalysisChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Toksisite Analizi</CardTitle>
        <CardDescription>
          Yorumlardaki toksisite oranı
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <DownloadButton targetRef={chartRef} filename="toksisite-analizi" />
        <div ref={chartRef} className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={toxicityData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={130}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {toxicityData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `%${value}`} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ToxicityAnalysisChart;
