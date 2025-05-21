
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { topComments } from '@/data/instagramCommentAnalysisData';
import { MessageSquare } from 'lucide-react';

const TopCommentsCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-500" />
          <CardTitle className="text-xl font-bold">En Etkileşimli Yorumlar</CardTitle>
        </div>
        <CardDescription>
          En çok etki yaratan yorumlar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 overflow-auto">
          <ul className="space-y-4">
            {topComments.map((item, index) => (
              <li key={index} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-blue-600">@{item.username}</span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <p className="text-gray-700 mb-1">{item.comment}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span>Etki puanı: {item.impact}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default TopCommentsCard;
