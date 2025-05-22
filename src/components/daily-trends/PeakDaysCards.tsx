
import React, { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink } from 'lucide-react';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import DownloadButton from '@/components/DownloadButton';
import { PeakDayData } from '@/types/dailyTrends';

interface PeakDaysCardsProps {
  peakDaysData: PeakDayData[];
}

const PeakDaysCards: React.FC<PeakDaysCardsProps> = ({ peakDaysData }) => {
  const peakDaysRef = useRef<HTMLDivElement>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative" ref={peakDaysRef}>
      <DownloadButton 
        targetRef={peakDaysRef} 
        filename="zirve-gunler" 
        className="absolute -top-10 right-0 z-10" 
        variant="outline"
        size="sm" 
      />
      {peakDaysData.map((peak, index) => (
        <Card 
          key={index} 
          className={`p-4 ${peak.isHighlight ? 'border-2 border-red-500' : ''}`}
        >
          <div className="flex justify-between items-start mb-2">
            <div className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: peak.color }}
              ></div>
              <h4 className="font-bold text-gray-800">{peak.date} — {peak.title}</h4>
            </div>
            {peak.isHighlight && (
              <Badge variant="destructive" className="text-xs">Rekor Etkileşim</Badge>
            )}
          </div>
          
          <p className="text-sm text-gray-600 mb-3">{peak.description}</p>
          
          <div className="space-y-3">
            {peak.tweets.map((tweet, tweetIndex) => (
              <HoverCard key={tweetIndex}>
                <HoverCardTrigger asChild>
                  <div className={`
                    p-3 rounded-lg border cursor-pointer 
                    ${peak.isHighlight ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}
                    hover:shadow-md transition-shadow
                  `}>
                    <div className="flex justify-between items-start">
                      <p className="text-sm font-medium">Tweet ID: {tweet.id}</p>
                      <span className="text-xs text-gray-500">{tweet.stats}</span>
                    </div>
                    <p className="text-sm mt-1 line-clamp-2">{tweet.text}</p>
                    <div className="flex justify-end mt-2">
                      <a 
                        href={`https://twitter.com/x/status/${tweet.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-1"
                      >
                        <span>Twitter'da Görüntüle</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-0">
                  <div className="p-4">
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">
                      Tweet Detayı
                    </h5>
                    <p className="text-sm text-gray-700 mb-3">{tweet.text}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{tweet.stats}</span>
                      <a 
                        href={`https://twitter.com/x/status/${tweet.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                      >
                        <span>Tweeti Görüntüle</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
};

export default PeakDaysCards;
