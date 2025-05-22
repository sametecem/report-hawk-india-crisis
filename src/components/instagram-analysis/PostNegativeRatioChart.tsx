
import React, { useRef } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { postNegativeRatioData } from '@/data/instagramCommentAnalysisData';
import DownloadButton from '@/components/DownloadButton';

const PostNegativeRatioChart = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Post Bazlı Boykot Yoğunluğu</CardTitle>
        <CardDescription>
          En çok negatif yorum alan paylaşımlar ve oranları
        </CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <DownloadButton targetRef={chartRef} filename="post-bazli-boykot-yogunlugu" />
        <div ref={chartRef} className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={postNegativeRatioData}
              margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="post" />
              <YAxis />
              <Tooltip formatter={(value, name) => [
                name === "total" ? `${value} yorum` : `%${value}`,
                name === "total" ? "Toplam Yorum" : "Negatif Oran"
              ]} />
              <Legend />
              <Bar dataKey="total" fill="#9ca3af" name="Toplam Yorum" />
              <Bar dataKey="negativeRatio" fill="#ef4444" name="Negatif Oran (%)" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default PostNegativeRatioChart;
