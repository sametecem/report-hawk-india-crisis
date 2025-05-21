
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { mostRTTweets } from '@/data/reportData';

const TopTweetsListSlide = () => {
  return (
    <Slide title="6. En Çok Etkileşim Alan 10 Tweet" bgColor="bg-gradient-to-br from-white via-amber-50 to-amber-100">
      <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
        {mostRTTweets.map((tweet, index) => (
          <Card key={index} className="p-4 shadow-md bg-white/90 backdrop-blur-sm border-l-4 border-amber-400 transition-all hover:shadow-lg">
            <div className="flex items-start gap-3">
              <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm shrink-0">{index + 1}</div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                    Tweet #{index + 1}
                    <a 
                      href={`https://twitter.com/i/web/status/${tweet.id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <div className="text-xs text-gray-500 flex flex-wrap justify-end">
                    <span className="mx-1">❤️ {tweet.likes}</span>
                    <span className="mx-1">🔄 {tweet.rt}</span>
                    <span className="mx-1">👁️ {tweet.views}</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700 text-sm">{tweet.text}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </Slide>
  );
};

export default TopTweetsListSlide;
