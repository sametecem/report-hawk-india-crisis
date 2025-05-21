
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface DailyCommentsData {
  date: string;
  comments: number;
}

interface DailyCommentsCardProps {
  dailyCommentsData: DailyCommentsData[];
}

const DailyCommentsCard = ({ dailyCommentsData }: DailyCommentsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Günlük Instagram Yorum Sayısı</CardTitle>
        <CardDescription>
          THY ile ilgili günlük Instagram yorum sayıları
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={dailyCommentsData}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value) => `${value} yorum`} />
              <Area type="monotone" dataKey="comments" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default DailyCommentsCard;
