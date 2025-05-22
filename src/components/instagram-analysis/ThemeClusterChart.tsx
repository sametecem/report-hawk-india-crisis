
import React, { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { themeClusterData } from '@/data/instagramCommentAnalysisData';
import DownloadButton from '@/components/DownloadButton';

const ThemeClusterChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Tema Kümeleme</CardTitle>
        <CardDescription>
          Yorumlarda tespit edilen ana temalar
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <DownloadButton targetRef={chartRef} filename="tema-kumeleme" />
        <div ref={chartRef} className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={themeClusterData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
              <Tooltip formatter={(value) => `${value} yorum`} />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Yorum Sayısı" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default ThemeClusterChart;
