
import React, { useRef } from 'react';
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
  Cell
} from "recharts";
import { Eye, Twitter, BarChart3 } from 'lucide-react';
import { mostViewedTweets, mostRetweetedTweets, mostLikedTweets } from '@/data/reportData';
import DownloadButton from '@/components/DownloadButton';

const MostViewedTweetsSlide = () => {
  const tweetTableRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  
  const chartData = mostViewedTweets.slice(0, 10).map((tweet, index) => ({
    name: `Tweet ${index + 1}`,
    views: tweet.views,
    likes: tweet.likes,
    retweets: tweet.rt
  }));

  return (
    <Slide 
      title="9. En Çok Görüntülenen Tweetler" 
      subtitle="Görüntülenme, beğeni ve retweet sayıları bazında karşılaştırma"
      bgColor="bg-gradient-to-br from-white via-amber-50 to-amber-100"
    >
      <div className="grid grid-cols-1 gap-4 md:gap-6">
        <Card className="p-3 md:p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2 relative overflow-x-hidden">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <Eye className="w-4 h-4 md:w-5 md:h-5 text-amber-600" /> 
            <h3 className="text-lg md:text-xl font-bold text-gray-800">En Çok Görüntülenen 10 Tweet</h3>
          </div>
          
          <DownloadButton targetRef={tweetTableRef} filename="en-cok-goruntulenen-tweetler" />
          
          <div ref={tweetTableRef} className="overflow-x-auto">
            <Table
              headers={["Sıra", "Tweet", "Görüntülenme", "Etkileşim", "Link"]}
              rows={mostViewedTweets.slice(0, 10).map((tweet, index) => [
                <span className={`font-bold ${index === 0 ? "text-amber-600" : ""}`}>{index + 1}</span>,
                <div className="max-w-[150px] md:max-w-md truncate">
                  {tweet.text.substring(0, 80)}...
                </div>,
                <span className={`font-semibold ${index === 0 ? "text-amber-700 text-base md:text-lg" : "text-gray-700"}`}>
                  {new Intl.NumberFormat('tr-TR').format(tweet.views)}
                </span>,
                <div className="text-xs md:text-sm whitespace-nowrap">
                  <span className="text-rose-500 mr-2">❤️ {new Intl.NumberFormat('tr-TR').format(tweet.likes)}</span>
                  <span className="text-green-500">🔄 {new Intl.NumberFormat('tr-TR').format(tweet.rt)}</span>
                </div>,
                <a 
                  href={`https://twitter.com/x/status/${tweet.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:text-blue-700 inline-flex items-center text-xs md:text-sm whitespace-nowrap"
                >
                  <Twitter className="h-3 w-3 md:h-4 md:w-4 mr-1" />
                  <span>İncele</span>
                </a>
              ])}
              className="mt-2 w-full"
              highlightFirstColumn={true}
              hoverEffect={true}
            />
          </div>
        </Card>
      
        <Card className="p-3 md:p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2 relative">
          <div className="flex items-center gap-2 mb-3 md:mb-4">
            <BarChart3 className="w-4 h-4 md:w-5 md:h-5 text-amber-600" /> 
            <h3 className="text-lg md:text-xl font-bold text-gray-800">Görüntülenme ve Etkileşim Karşılaştırması</h3>
          </div>
          
          <DownloadButton targetRef={chartRef} filename="goruntuleme-etkilesim-karsilastirmasi" />
          
          <div ref={chartRef} className="h-60 md:h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 20, left: 10, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                  dataKey="name" 
                  tick={{ fontSize: window.innerWidth < 768 ? 10 : 12 }}
                  interval={window.innerWidth < 768 ? 1 : 0}
                />
                <YAxis 
                  tick={{ fontSize: window.innerWidth < 768 ? 10 : 12 }}
                  width={40}
                />
                <Tooltip 
                  formatter={(value) => {
                    return [new Intl.NumberFormat('tr-TR').format(value as number), ""];
                  }}
                  labelFormatter={(name) => {
                    const index = parseInt(name.split(" ")[1]) - 1;
                    return `Tweet ${index + 1}: ${mostViewedTweets[index].text.substring(0, 30)}...`;
                  }}
                  contentStyle={{ fontSize: window.innerWidth < 768 ? 10 : 12 }}
                />
                <Legend 
                  formatter={(value) => {
                    return value === "views" ? "Görüntülenme" : 
                           value === "likes" ? "Beğeni" : "Retweet";
                  }}
                  wrapperStyle={{ fontSize: window.innerWidth < 768 ? 10 : 12 }}
                />
                <Bar dataKey="views" fill="#f59e0b" name="views">
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? "#d97706" : "#f59e0b"} />
                  ))}
                </Bar>
                <Bar dataKey="likes" fill="#ef4444" name="likes" />
                <Bar dataKey="retweets" fill="#10b981" name="retweets" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <DownloadButton targetRef={statsRef} filename="en-yuksek-etkilesim-istatistikleri" className="absolute top-2 right-2 md:right-24" />
          
          <div ref={statsRef} className="mt-4 md:mt-5 grid grid-cols-3 gap-2 md:gap-4">
            <div className="bg-amber-50 p-2 md:p-3 rounded-lg text-center">
              <h4 className="font-medium text-amber-800 text-xs md:text-sm mb-1">En Yüksek Görüntülenme</h4>
              <div className="text-lg md:text-xl font-bold text-amber-700">
                {new Intl.NumberFormat('tr-TR').format(mostViewedTweets[0].views)}
              </div>
            </div>
            <div className="bg-rose-50 p-2 md:p-3 rounded-lg text-center">
              <h4 className="font-medium text-rose-800 text-xs md:text-sm mb-1">En Yüksek Beğeni</h4>
              <div className="text-lg md:text-xl font-bold text-rose-700">
                {new Intl.NumberFormat('tr-TR').format(mostLikedTweets[0].likes)}
              </div>
            </div>
            <div className="bg-emerald-50 p-2 md:p-3 rounded-lg text-center">
              <h4 className="font-medium text-emerald-800 text-xs md:text-sm mb-1">En Yüksek Retweet</h4>
              <div className="text-lg md:text-xl font-bold text-emerald-700">
                {new Intl.NumberFormat('tr-TR').format(mostRetweetedTweets[0].rt)}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default MostViewedTweetsSlide;
