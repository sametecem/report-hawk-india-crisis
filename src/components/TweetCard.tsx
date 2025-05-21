
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Eye, Heart, MessageCircle, Share, Twitter, MoreHorizontal, BookmarkPlus, Verified } from 'lucide-react';
import { cn } from '@/lib/utils';
import { formatDistanceToNow } from 'date-fns';

interface TweetCardProps {
  id: string;
  content: string;
  likes?: number;
  retweets?: number;
  views?: number;
  replies?: number;
  isPopular?: boolean;
  className?: string;
  author?: string;
  handle?: string;
  avatar?: string;
  timestamp?: Date;
  verified?: boolean;
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
  replies = 0,
  isPopular = false,
  className,
  author = "Twitter User",
  handle = "user",
  avatar,
  timestamp = new Date(),
  verified = false
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
          <div className={cn(
            "w-10 h-10 rounded-full flex items-center justify-center text-white text-sm overflow-hidden",
            !avatar && "bg-gradient-to-br from-blue-500 to-purple-600"
          )}>
            {avatar ? (
              <img src={avatar} alt={author} className="w-full h-full object-cover" />
            ) : (
              author.charAt(0).toUpperCase()
            )}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="font-semibold text-gray-800">{author}</span>
                {verified && <Verified className="w-4 h-4 text-blue-500" />}
                <span className="text-gray-500 text-sm">@{handle}</span>
                <span className="text-gray-400 text-xs">· {formatDistanceToNow(timestamp, { addSuffix: true })}</span>
              </div>
              <div className="flex gap-1">
                {isPopular && (
                  <Badge variant="outline" className="bg-blue-50 text-blue-600 border-blue-200">
                    Popular
                  </Badge>
                )}
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </div>
            </div>
            <p className="text-gray-800 mb-3 whitespace-pre-line">{content}</p>
            <a 
              href={tweetUrl}
              target="_blank"
              rel="noopener noreferrer" 
              className="text-blue-500 hover:underline text-sm flex items-center gap-1"
            >
              <Twitter className="w-4 h-4" />
              View on Twitter
            </a>
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-gray-50 px-4 py-3 flex items-center justify-between text-gray-600 border-t">
        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
          <MessageCircle className="w-4 h-4" />
          <span className="text-sm">{formatNumber(replies)}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-green-500 transition-colors">
          <Share className="w-4 h-4" />
          <span className="text-sm">{formatNumber(retweets)}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-rose-500 transition-colors">
          <Heart className="w-4 h-4" />
          <span className="text-sm">{formatNumber(likes)}</span>
        </button>
        <button className="flex items-center gap-2 hover:text-blue-500 transition-colors">
          <Eye className="w-4 h-4" />
          <span className="text-sm">{formatNumber(views)}</span>
        </button>
        <button className="text-gray-400 hover:text-blue-500 transition-colors">
          <BookmarkPlus className="w-4 h-4" />
        </button>
      </CardFooter>
    </Card>
  );
};

export default TweetCard;
