
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface HashtagData {
  name: string;
  count: number;
}

interface HashtagsCardProps {
  hashtagsData: HashtagData[];
}

const HashtagsCard = ({ hashtagsData }: HashtagsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Popüler Hashtagler</CardTitle>
        <CardDescription>
          THY boykot yorumlarında en çok kullanılan hashtagler
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              layout="vertical"
              data={hashtagsData}
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
              <Tooltip formatter={(value) => `${value} kez kullanıldı`} />
              <Legend />
              <Bar dataKey="count" fill="#8884d8" name="Kullanım Sayısı" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default HashtagsCard;
