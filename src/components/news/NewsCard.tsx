
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Globe, FileText } from 'lucide-react';
import Image from '@/components/ui/Image';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  source: string;
  summary: string;
  url: string;
  imageUrl: string;
}

const NewsCard = ({ news }: { news: NewsItem }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-40 w-full">
        <Image 
          src={`${news.imageUrl}?w=600&auto=format&fit=crop&q=80`} 
          alt={news.title}
          className="w-full h-full object-cover" 
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg font-bold line-clamp-2">{news.title}</CardTitle>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
          <Calendar className="h-3 w-3" />
          <span>{news.date}</span>
          <Globe className="h-3 w-3 ml-2" />
          <span>{news.source}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <CardDescription className="line-clamp-3 text-sm text-gray-600 mb-3">
          {news.summary}
        </CardDescription>
        <a 
          href={news.url} 
          className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-800"
        >
          <FileText className="mr-1 h-3 w-3" />
          Haberi Oku
        </a>
      </CardContent>
    </Card>
  );
};

export default NewsCard;
