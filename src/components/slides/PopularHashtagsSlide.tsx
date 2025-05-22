
import React, { useRef } from 'react';
import Slide from '@/components/Slide';
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
import { ExternalLink } from 'lucide-react';
import { hashtagData } from '@/data/reportData';
import DownloadButton from '@/components/DownloadButton';

const PopularHashtagsSlide = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const hashtagsRef = useRef<HTMLDivElement>(null);

  return (
    <Slide title="8. En Popüler Hashtagler" bgColor="bg-gradient-to-br from-white via-cyan-50 to-cyan-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2 relative">
          <DownloadButton targetRef={chartRef} filename="popüler-hashtagler-grafik" />
          <div ref={chartRef} className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart 
                data={hashtagData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count">
                  {hashtagData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
        
        <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4 relative">
          <DownloadButton targetRef={hashtagsRef} filename="popüler-hashtagler-liste" className="absolute top-0 right-0 z-10" />
          <div ref={hashtagsRef} className="md:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { tag: "#indigo", count: 130, color: "bg-blue-500" },
              { tag: "#boycottturkey", count: 112, color: "bg-red-500" },
              { tag: "#boycottturkishairlines", count: 49, color: "bg-pink-500" },
              { tag: "#turkishairlines", count: 46, color: "bg-purple-500" },
              { tag: "#boycott", count: 46, color: "bg-orange-500" },
              { tag: "#turkey", count: 35, color: "bg-amber-500" },
              { tag: "#operationsindoor", count: 24, color: "bg-green-500" },
              { tag: "#boycottazerbaijan", count: 13, color: "bg-teal-500" },
              { tag: "#pakistan", count: 9, color: "bg-yellow-500" },
              { tag: "#airindia", count: 2, color: "bg-indigo-500" }
            ].map((hashtag, index) => (
              <Card key={index} className={`p-4 shadow-md bg-white/90 backdrop-blur-sm border-l-4 ${hashtag.color} hover:shadow-lg transition-all`}>
                <div className="flex justify-between items-center">
                  <a 
                    href={`https://twitter.com/hashtag/${hashtag.tag.replace('#', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-bold text-gray-800 hover:text-blue-600"
                  >
                    {hashtag.tag} <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <div className={`${hashtag.color} text-white px-3 py-1 rounded-full text-sm`}>
                    {hashtag.count} içerik
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default PopularHashtagsSlide;
