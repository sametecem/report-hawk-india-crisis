
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface CommentData {
  username: string;
  comment: string;
  likes: number;
  date: string;
}

interface PopularCommentsCardProps {
  popularCommentsData: CommentData[];
}

const PopularCommentsCard = ({ popularCommentsData }: PopularCommentsCardProps) => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Popüler Yorumlar</CardTitle>
        <CardDescription>
          En çok beğeni alan yorumlar
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-80 overflow-auto">
          <ul className="space-y-4">
            {popularCommentsData.map((item, index) => (
              <li key={index} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex justify-between mb-1">
                  <span className="font-bold text-blue-600">@{item.username}</span>
                  <span className="text-gray-500 text-sm">{item.date}</span>
                </div>
                <p className="text-gray-700 mb-1">{item.comment}</p>
                <div className="flex items-center text-gray-500 text-sm">
                  <span>{item.likes} beğeni</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PopularCommentsCard;
