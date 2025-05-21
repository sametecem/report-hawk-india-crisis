
import React from 'react';
import Slide from '@/components/Slide';
import Table from '@/components/Table';
import { Card } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Eye, Twitter } from 'lucide-react';
import { mostRTTweets } from '@/data/reportData';

const MostViewedTweetsSlide = () => {
  return (
    <Slide title="9. En Çok Görüntülenen Tweetler" bgColor="bg-gradient-to-br from-white via-amber-50 to-amber-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="w-5 h-5 text-amber-600" /> 
            <h3 className="text-xl font-bold text-gray-800">En Çok Görüntülenen Tweetler</h3>
          </div>
          
          <Table
            headers={["Tweet", "Görüntülenme", "Etkileşim", "Link"]}
            rows={mostRTTweets.map((tweet, index) => [
              <div className="max-w-md truncate">
                {tweet.text.substring(0, 80)}...
              </div>,
              <span className="font-semibold text-amber-700">{new Intl.NumberFormat('tr-TR').format(tweet.views)}</span>,
              <div className="text-sm">
                <span className="text-rose-500 mr-2">❤️ {new Intl.NumberFormat('tr-TR').format(tweet.likes)}</span>
                <span className="text-green-500">🔄 {new Intl.NumberFormat('tr-TR').format(tweet.rt)}</span>
              </div>,
              <a 
                href={`https://twitter.com/x/status/${tweet.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700 inline-flex items-center"
              >
                <Twitter className="h-4 w-4 mr-1" />
                <span>İncele</span>
              </a>
            ])}
            className="mt-2"
          />
        </Card>
      
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={mostRTTweets.map((tweet, index) => ({
                  name: `Tweet ${index + 1}`,
                  views: tweet.views,
                  likes: tweet.likes,
                  retweets: tweet.rt
                }))}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value, name) => {
                    return [new Intl.NumberFormat('tr-TR').format(value), 
                      name === "views" ? "Görüntülenme" : 
                      name === "likes" ? "Beğeni" : "Retweet"
                    ];
                  }}
                />
                <Legend 
                  formatter={(value) => {
                    return value === "views" ? "Görüntülenme" : 
                            value === "likes" ? "Beğeni" : "Retweet";
                  }}
                />
                <Bar dataKey="views" fill="#f59e0b" />
                <Bar dataKey="likes" fill="#ef4444" />
                <Bar dataKey="retweets" fill="#10b981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-3 text-center text-sm text-gray-500">
            Tweet bazlı etkileşim ve görüntülenme karşılaştırması
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default MostViewedTweetsSlide;
