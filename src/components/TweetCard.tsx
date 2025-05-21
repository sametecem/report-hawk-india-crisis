
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, Share } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TweetCardProps {
  id: string;
  content: string;
  likes?: number;
  retweets?: number;
  views?: number;
  isPopular?: boolean;
  className?: string;
}

const formatNumber = (num: number): string => {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return num.toString();
};

const TweetCard = ({ 
  id, 
  content, 
  likes = 0, 
  retweets = 0, 
  views = 0,
  isPopular = false,
  className 
}: TweetCardProps) => {
  const tweetUrl = `https://twitter.com/x/status/${id}`;
  
  return (
    <Card className={cn(
      "overflow-hidden transition-all hover:shadow-md", 
      isPopular ? "border-l-4 border-l-blue-500" : "",
      className
    )}>
      <CardContent className="p-4">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center text-gray-500">
            <span className="text-xs">@user</span>
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-700">Twitter User</span>
                <span className="text-gray-400 text-sm">@user</span>
              </div>
              {isPopular && (
                <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                  Popular
                </Badge>
              )}
            </div>
            <p className="text-gray-800 mb-3">{content}</p>
            <a 
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline text-sm"
            >
              View tweet
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-4 py-2 flex items-center justify-between text-gray-600 border-t">
        <div className="flex items-center gap-2">
          <Heart className="w-4 h-4 text-rose-500" />
          <span className="text-sm">{formatNumber(likes)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Share className="w-4 h-4 text-emerald-500" />
          <span className="text-sm">{formatNumber(retweets)}</span>
        </div>
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-blue-500" />
          <span className="text-sm">{formatNumber(views)}</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default TweetCard;
