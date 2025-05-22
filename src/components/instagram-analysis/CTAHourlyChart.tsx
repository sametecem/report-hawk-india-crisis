
import React, { useRef } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ctaHourlyData } from '@/data/instagramCommentAnalysisData';
import DownloadButton from '@/components/DownloadButton';

const CTAHourlyChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">CTA Saatlik Dağılımı</CardTitle>
        <CardDescription>
          Eylem çağrısı içeren yorumların saatlik dağılımı
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <DownloadButton targetRef={chartRef} filename="cta-saatlik-dagilimi" />
        <div ref={chartRef} className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={ctaHourlyData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip formatter={(value) => `${value} yorum`} />
              <Line type="monotone" dataKey="count" stroke="#f59e0b" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default CTAHourlyChart;
