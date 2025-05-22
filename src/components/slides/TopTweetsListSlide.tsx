
import React, { useRef } from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import { ExternalLink, MessageCircle, Heart, Eye, RefreshCw, Download } from 'lucide-react';
import { mostRetweetedTweets, mostLikedTweets, mostViewedTweets } from '@/data/reportData';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from '@/components/ui/badge';
import DownloadButton from '@/components/DownloadButton';
import { Button } from '@/components/ui/button';

const TopTweetsListSlide = () => {
  const retweetsRef = useRef<HTMLDivElement>(null);
  const likesRef = useRef<HTMLDivElement>(null);
  const viewsRef = useRef<HTMLDivElement>(null);

  // Function to convert tweets data to CSV
  const downloadAsCSV = (data: any[], filename: string) => {
    // Create CSV header row
    const headers = ["ID", "Text", "RT", "Likes", "Views", "Author", "Handle"];
    
    // Convert data to CSV rows
    const csvRows = [
      headers.join(','),
      ...data.map(tweet => [
        `"${tweet.id}"`,
        `"${tweet.text.replace(/"/g, '""')}"`,
        tweet.rt,
        tweet.likes,
        tweet.views,
        `"${tweet.author || ''}"`,
        `"${tweet.handle || ''}"`
      ].join(','))
    ];
    
    // Join rows with newlines
    const csvString = csvRows.join('\n');
    
    // Create blob and download
    const blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `${filename}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Slide 
      title="6. En Çok Etkileşim Alan Tweetler" 
      subtitle="Retweet, Beğeni ve Görüntülenme bazında en popüler içerikler"
      bgColor="bg-gradient-to-br from-white via-amber-50 to-amber-100"
    >
      <Tabs defaultValue="retweets" className="w-full">
        <TabsList className="w-full mb-4 bg-amber-50/50 p-1">
          <TabsTrigger value="retweets" className="flex items-center gap-1 data-[state=active]:bg-amber-100">
            <RefreshCw className="w-4 h-4" />
            <span>En Çok RT Alan</span>
          </TabsTrigger>
          <TabsTrigger value="likes" className="flex items-center gap-1 data-[state=active]:bg-rose-100">
            <Heart className="w-4 h-4" />
            <span>En Çok Beğenilen</span>
          </TabsTrigger>
          <TabsTrigger value="views" className="flex items-center gap-1 data-[state=active]:bg-blue-100">
            <Eye className="w-4 h-4" />
            <span>En Çok Görüntülenen</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="retweets" className="max-h-[calc(100vh-250px)] overflow-y-auto pr-1 relative">
          <div className="flex gap-2 absolute top-0 right-0 z-10">
            <DownloadButton 
              targetRef={retweetsRef} 
              filename="en-cok-rt-alan-tweetler" 
              className="mb-2" 
            />
            <Button 
              size="sm" 
              variant="outline" 
              className="mb-2"
              onClick={() => downloadAsCSV(mostRetweetedTweets.slice(0, 10), 'en-cok-rt-alan-tweetler')}
            >
              <Download className="h-4 w-4 mr-1" /> CSV
            </Button>
          </div>
          <div ref={retweetsRef} className="space-y-3 pt-10">
            {mostRetweetedTweets.slice(0, 10).map((tweet, index) => (
              <TweetListItem 
                key={index}
                tweet={tweet}
                index={index}
                highlightColor="amber"
                metric="rt"
                metricLabel="RT"
                metricIcon={<RefreshCw className="w-4 h-4 text-green-600" />}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="likes" className="max-h-[calc(100vh-250px)] overflow-y-auto pr-1 relative">
          <div className="flex gap-2 absolute top-0 right-0 z-10">
            <DownloadButton 
              targetRef={likesRef} 
              filename="en-cok-begenilen-tweetler" 
              className="mb-2" 
            />
            <Button 
              size="sm" 
              variant="outline" 
              className="mb-2"
              onClick={() => downloadAsCSV(mostLikedTweets.slice(0, 10), 'en-cok-begenilen-tweetler')}
            >
              <Download className="h-4 w-4 mr-1" /> CSV
            </Button>
          </div>
          <div ref={likesRef} className="space-y-3 pt-10">
            {mostLikedTweets.slice(0, 10).map((tweet, index) => (
              <TweetListItem 
                key={index}
                tweet={tweet}
                index={index}
                highlightColor="rose"
                metric="likes"
                metricLabel="Beğeni"
                metricIcon={<Heart className="w-4 h-4 text-rose-600" />}
              />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="views" className="max-h-[calc(100vh-250px)] overflow-y-auto pr-1 relative">
          <div className="flex gap-2 absolute top-0 right-0 z-10">
            <DownloadButton 
              targetRef={viewsRef} 
              filename="en-cok-goruntulenen-tweetler" 
              className="mb-2" 
            />
            <Button 
              size="sm" 
              variant="outline" 
              className="mb-2"
              onClick={() => downloadAsCSV(mostViewedTweets.slice(0, 10), 'en-cok-goruntulenen-tweetler')}
            >
              <Download className="h-4 w-4 mr-1" /> CSV
            </Button>
          </div>
          <div ref={viewsRef} className="space-y-3 pt-10">
            {mostViewedTweets.slice(0, 10).map((tweet, index) => (
              <TweetListItem 
                key={index}
                tweet={tweet}
                index={index}
                highlightColor="blue"
                metric="views"
                metricLabel="Görüntülenme"
                metricIcon={<Eye className="w-4 h-4 text-blue-600" />}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Slide>
  );
};

interface TweetListItemProps {
  tweet: typeof mostRetweetedTweets[0];
  index: number;
  highlightColor: 'amber' | 'rose' | 'blue';
  metric: 'rt' | 'likes' | 'views';
  metricLabel: string;
  metricIcon: React.ReactNode;
}

const TweetListItem = ({ tweet, index, highlightColor, metric, metricLabel, metricIcon }: TweetListItemProps) => {
  const borderColor = {
    amber: "border-amber-400",
    rose: "border-rose-400",
    blue: "border-blue-400"
  }[highlightColor];
  
  const bgColor = {
    amber: index === 0 ? "bg-amber-100" : "bg-white/90",
    rose: index === 0 ? "bg-rose-100/50" : "bg-white/90",
    blue: index === 0 ? "bg-blue-100/50" : "bg-white/90"
  }[highlightColor];
  
  const metricValue = tweet[metric];
  
  return (
    <Card className={`p-3 shadow-sm ${bgColor} backdrop-blur-sm border-l-4 ${borderColor} transition-all hover:shadow-md`}>
      <div className="flex items-start gap-2">
        <div className={`
          shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold
          ${highlightColor === 'amber' ? 'bg-amber-500' : highlightColor === 'rose' ? 'bg-rose-500' : 'bg-blue-500'}
        `}>
          {index + 1}
        </div>
        
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <div className="text-sm font-bold text-gray-700 mb-1">
              ID: {tweet.id}
              {index === 0 && (
                <Badge variant="outline" className={`ml-2 ${
                  highlightColor === 'amber' ? 'bg-amber-100 text-amber-700' : 
                  highlightColor === 'rose' ? 'bg-rose-100 text-rose-700' : 
                  'bg-blue-100 text-blue-700'
                }`}>
                  #{1} En Yüksek {metricLabel}
                </Badge>
              )}
            </div>
            
            <div className="flex items-center gap-1 text-sm font-semibold">
              {metricIcon}
              <span className={`
                ${highlightColor === 'amber' ? 'text-amber-700' : 
                  highlightColor === 'rose' ? 'text-rose-700' : 'text-blue-700'}
              `}>
                {new Intl.NumberFormat('tr-TR').format(metricValue as number)}
              </span>
            </div>
          </div>
          
          <p className="text-sm text-gray-700 mt-1 mb-2">{tweet.text}</p>
          
          <div className="flex justify-between items-center mt-2 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1">
                <RefreshCw className="w-3 h-3" />
                {new Intl.NumberFormat('tr-TR').format(tweet.rt)}
              </span>
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {new Intl.NumberFormat('tr-TR').format(tweet.likes)}
              </span>
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {new Intl.NumberFormat('tr-TR').format(tweet.views)}
              </span>
            </div>
            
            <a 
              href={`https://twitter.com/i/web/status/${tweet.id}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
            >
              <ExternalLink className="w-3 h-3" />
              <span>İncele</span>
            </a>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TopTweetsListSlide;
