
import React, { useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { sentimentData } from '@/data/instagramCommentAnalysisData';
import DownloadButton from '@/components/DownloadButton';

const SentimentChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Duygu Eğrisi</CardTitle>
        <CardDescription>
          Günlük ortalama duygu skoru (-1 çok negatif, +1 çok pozitif)
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <DownloadButton targetRef={chartRef} filename="duygu-egrisi" />
        <div ref={chartRef} className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={sentimentData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis domain={[-1, 1]} />
              <Tooltip 
                formatter={(value) => {
                  if (typeof value === 'number') {
                    return `Skor: ${value.toFixed(2)}`;
                  }
                  return `Skor: ${value}`;
                }} 
              />
              <Line type="monotone" dataKey="score" stroke="#ef4444" dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentChart;
