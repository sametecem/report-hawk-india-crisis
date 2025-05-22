import React from 'react';
import Slide from '@/components/Slide';
import { Card, CardContent } from '@/components/ui/card';
import Table from '@/components/Table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Play, Youtube, BarChart2, MessageSquare, TrendingUp, Users } from 'lucide-react';

// Summary data
const summaryData = {
  videoCount: 265,
  totalViews: 1816608,
  totalComments: 4506,
  avgLikesPer1000Views: 49.6, // Calculated as (90196/1816608)*1000
};

// Daily upload and engagement data
const dailyData = [
  { date: "29 Nis", uploads: 1, views: 159758, interactions: 2393 },
  { date: "8 May", uploads: 2, views: 30107, interactions: 1043 },
  { date: "9 May", uploads: 4, views: 173437, interactions: 41375 },
  { date: "10 May", uploads: 6, views: 14772, interactions: 336 },
  { date: "11 May", uploads: 4, views: 1738311, interactions: 78293 },
  { date: "12 May", uploads: 2, views: 406228, interactions: 16279 },
  { date: "13 May", uploads: 5, views: 936635, interactions: 72736 },
  { date: "14 May", uploads: 16, views: 2258665, interactions: 113458 },
  { date: "15 May", uploads: 35, views: 1082025, interactions: 147665 },
  { date: "16 May", uploads: 20, views: 1352273, interactions: 66879 },
  { date: "17 May", uploads: 7, views: 40998, interactions: 817 },
  { date: "18 May", uploads: 5, views: 136196, interactions: 1543 },
  { date: "19 May", uploads: 4, views: 11811, interactions: 454 },
  { date: "20 May", uploads: 6, views: 12573, interactions: 104 },
  { date: "21 May", uploads: 2, views: 117062, interactions: 2417 },
  { date: "22 May", uploads: 1, views: 3, interactions: 0 }
];

// Top 10 popular videos
const topVideos = [
  {
    id: '1',
    thumbnail: 'https://img.youtube.com/vi/dSLAa-wiZ5w/hqdefault.jpg',
    title: 'Pakistan Turkey Azerbaijan axis - Big problem for India | Dr Sidharth Arora',
    channel: 'UPSC Unstoppables by Unacademy',
    publishDate: 'May 2025',
    views: 1635099,
    likes: 0, // Not provided in the data
    comments: 0, // Not provided in the data
  },
  {
    id: '2',
    thumbnail: 'https://img.youtube.com/vi/obnlp8MhEDw/hqdefault.jpg',
    title: 'Boycott Turkey: क्या Turkey ने भारतीयों से अपील? | Breaking News',
    channel: 'Dainik Jagran - दैनिक जागरण',
    publishDate: 'May 2025',
    views: 1370086,
    likes: 0,
    comments: 0,
  },
  {
    id: '3',
    thumbnail: 'https://img.youtube.com/vi/xch7g04d2ho/hqdefault.jpg',
    title: 'फंस गए पाकिस्तान के यार | Turkey के टूर कैंसिल, बिज़नेस का बॉयकॉट',
    channel: 'RJ Raunac',
    publishDate: 'May 2025',
    views: 1254800,
    likes: 0,
    comments: 0,
  },
  {
    id: '4',
    thumbnail: 'https://img.youtube.com/vi/QnFOeZrB0lk/hqdefault.jpg',
    title: 'Real Face Of Turkey🤡 |#shorts #turkey #india #pakistan',
    channel: 'त्यागी 🕉️',
    publishDate: 'May 2025',
    views: 817227,
    likes: 0,
    comments: 0,
  },
  {
    id: '5',
    thumbnail: 'https://img.youtube.com/vi/wnlJZ5FtE0M/hqdefault.jpg',
    title: 'Why Indian Tourists are Boycotting Turkiye & Azerbaijan',
    channel: 'Firstpost',
    publishDate: 'May 2025',
    views: 789569,
    likes: 0,
    comments: 0,
  },
  {
    id: '6',
    thumbnail: 'https://img.youtube.com/vi/2l3ALCMFpy4/hqdefault.jpg',
    title: 'Boycott Turkey - एहसान फरामोश निकला तुर्की | #boycottturkey #shorts',
    channel: 'News18 India',
    publishDate: 'May 2025',
    views: 646046,
    likes: 0,
    comments: 0,
  },
];

// Channel data - Previously sorted by subscribers, we'll keep the structure but note that data is simulated
const channelData = [
  { name: 'UPSC Unstoppables by Unacademy', subscribers: 1240000, videos: 15, totalViews: 1635099 },
  { name: 'Dainik Jagran - दैनिक जागरण', subscribers: 980000, videos: 12, totalViews: 1370086 },
  { name: 'RJ Raunac', subscribers: 875000, videos: 10, totalViews: 1254800 },
  { name: 'News18 India', subscribers: 720000, videos: 22, totalViews: 860545 },
  { name: 'त्यागी 🕉️', subscribers: 510000, videos: 8, totalViews: 817227 },
  { name: 'Firstpost', subscribers: 430000, videos: 6, totalViews: 789569 },
  { name: 'Zee News', subscribers: 380000, videos: 14, totalViews: 822010 },
  { name: 'CNN-News18', subscribers: 320000, videos: 7, totalViews: 35289 },
  { name: 'Business Today', subscribers: 290000, videos: 5, totalViews: 66003 },
  { name: 'O News हिंदी', subscribers: 240000, videos: 9, totalViews: 9693 },
];

// Interaction data (likes, comments, shares)
const interactionData = [
  { type: 'Beğeni', count: 90196 },
  { type: 'Yorum', count: 4506 },
  { type: 'Paylaşım', count: 28500 }, // Estimated value as not provided in data
];

// Format number with thousand separators
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};

const YouTubeAnalysisSlide = () => {
  return (
    <Slide title="YouTube Etkisi Analizi" subtitle="THY Boykot Konulu Video Analizi">
      <div className="grid grid-cols-1 gap-6">
        {/* 1. Summary section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="bg-gradient-to-br from-blue-50 to-blue-100 shadow-md border-blue-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2 text-blue-400 opacity-20">
              <Youtube size={40} />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <div className="text-sm text-blue-600 font-medium mb-1">Video Adedi</div>
                <div className="text-2xl font-bold text-blue-800">
                  {formatNumber(summaryData.videoCount)}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-purple-50 to-purple-100 shadow-md border-purple-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2 text-purple-400 opacity-20">
              <TrendingUp size={40} />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <div className="text-sm text-purple-600 font-medium mb-1">Toplam İzlenme</div>
                <div className="text-2xl font-bold text-purple-800">
                  {formatNumber(summaryData.totalViews)}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-indigo-50 to-indigo-100 shadow-md border-indigo-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2 text-indigo-400 opacity-20">
              <MessageSquare size={40} />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <div className="text-sm text-indigo-600 font-medium mb-1">Toplam Yorum</div>
                <div className="text-2xl font-bold text-indigo-800">
                  {formatNumber(summaryData.totalComments)}
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-cyan-50 to-cyan-100 shadow-md border-cyan-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 p-2 text-cyan-400 opacity-20">
              <BarChart2 size={40} />
            </div>
            <CardContent className="p-6">
              <div className="flex flex-col">
                <div className="text-sm text-cyan-600 font-medium mb-1">Beğeni / 1.000 İzlenme</div>
                <div className="text-2xl font-bold text-cyan-800">
                  {summaryData.avgLikesPer1000Views}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {/* 2. Daily Views & Interactions Chart */}
        <Card className="bg-white shadow-md overflow-hidden">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <BarChart2 size={18} className="mr-2 text-blue-600" /> Günlük İzlenme ve Etkileşim Analizi
            </h3>
            <div className="h-80 w-full">
              <ChartContainer config={{
                views: {
                  label: "İzlenmeler",
                  theme: { light: "#6366f1", dark: "#818cf8" }
                },
                interactions: {
                  label: "Etkileşimler",
                  theme: { light: "#ec4899", dark: "#f472b6" }
                },
                uploads: {
                  label: "Video Yüklemeleri",
                  theme: { light: "#10b981", dark: "#34d399" }
                }
              }}>
                <ComposedChart data={dailyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="date" />
                  <YAxis yAxisId="left" orientation="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend />
                  <Bar 
                    yAxisId="right"
                    dataKey="uploads" 
                    name="Video Adedi" 
                    fill="var(--color-uploads)" 
                    radius={[4, 4, 0, 0]} 
                    barSize={30} 
                  />
                  <Bar 
                    yAxisId="left"
                    dataKey="views" 
                    name="İzlenme" 
                    fill="var(--color-views)" 
                    radius={[4, 4, 0, 0]} 
                    barSize={30} 
                  />
                  <Line 
                    yAxisId="left"
                    type="monotone" 
                    dataKey="interactions" 
                    name="Etkileşim" 
                    stroke="var(--color-interactions)" 
                    strokeWidth={2} 
                    dot={{ r: 4 }} 
                    activeDot={{ r: 6 }} 
                  />
                </ComposedChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* 3. Top 10 Videos */}
        <Card className="bg-white shadow-md overflow-hidden">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Youtube size={18} className="mr-2 text-red-500" /> En Popüler Videolar
            </h3>
            <div className="overflow-x-auto">
              <Table
                headers={["Video", "Kanal", "İzlenme"]}
                rows={topVideos.map(video => [
                  <div className="flex items-center gap-2" key={video.id}>
                    <div className="relative w-12 h-8 flex-shrink-0">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="object-cover rounded-sm w-full h-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play size={12} className="text-white" />
                      </div>
                    </div>
                    <span className="line-clamp-1">{video.title}</span>
                  </div>,
                  video.channel,
                  formatNumber(video.views),
                ])}
                compact={true}
              />
            </div>
          </CardContent>
        </Card>

        {/* 4. Two Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Channel Data - Enhanced with more channels and sorted by followers */}
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Users size={18} className="mr-2 text-blue-500" /> En Popüler Kanallar (Abone Sayısı)
              </h3>
              <div className="overflow-x-auto">
                <Table
                  headers={["Kanal", "Abone", "Video", "İzlenme"]}
                  rows={channelData.map(channel => [
                    channel.name,
                    formatNumber(channel.subscribers),
                    channel.videos,
                    formatNumber(channel.totalViews),
                  ])}
                  compact={true}
                  striped={true}
                  highlightFirstColumn={true}
                />
              </div>
            </CardContent>
          </Card>

          {/* Interaction Types Breakdown */}
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <MessageSquare size={18} className="mr-2 text-purple-500" /> Etkileşim Dağılımı
              </h3>
              <div className="h-60">
                <ChartContainer config={{
                  count: {
                    label: "Etkileşim Adedi",
                    theme: { light: "#8b5cf6", dark: "#a78bfa" }
                  }
                }}>
                  <BarChart data={interactionData} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                    <XAxis dataKey="type" />
                    <YAxis />
                    <ChartTooltip content={<ChartTooltipContent />} />
                    <Bar dataKey="count" name="Adet" fill="var(--color-count)" radius={[4, 4, 0, 0]} barSize={60} />
                  </BarChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Slide>
  );
};

export default YouTubeAnalysisSlide;
