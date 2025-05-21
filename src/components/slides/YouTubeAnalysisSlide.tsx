
import React from 'react';
import Slide from '@/components/Slide';
import { Card, CardContent } from '@/components/ui/card';
import Table from '@/components/Table';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { Play, Youtube, BarChart2, MessageSquare, TrendingUp } from 'lucide-react';

// Summary data
const summaryData = {
  videoCount: 245,
  totalViews: 12843500,
  totalComments: 67450,
  avgLikesPer1000Views: 48.3,
};

// Top 10 popular videos
const topVideos = [
  {
    id: '1',
    thumbnail: 'https://i.imgur.com/JVQEPBp.jpg',
    title: 'THY Boykot Süreci: Neler Yaşandı?',
    channel: 'Havacılık Dünyası',
    publishDate: '14 Nis 2023',
    views: 1243000,
    likes: 45600,
    comments: 12300,
  },
  {
    id: '2',
    thumbnail: 'https://i.imgur.com/gE3SFmt.jpg',
    title: 'Turkish Airlines İsrail Uçuşları Durduruldu mu?',
    channel: 'Gündem Analiz',
    publishDate: '16 Nis 2023',
    views: 987000,
    likes: 34700,
    comments: 8240,
  },
  {
    id: '3',
    thumbnail: 'https://i.imgur.com/zRCB5v0.jpg',
    title: 'THY Boykotu Havacılık Sektörünü Nasıl Etkiledi?',
    channel: 'Ekonomi Haberleri',
    publishDate: '18 Nis 2023',
    views: 764000,
    likes: 28900,
    comments: 6430,
  },
  {
    id: '4',
    thumbnail: 'https://i.imgur.com/B4f9MAu.jpg',
    title: "CEO Açıkladı: THY'nin Yeni Rotaları ve Stratejisi",
    channel: 'Havacılık Dünyası',
    publishDate: '21 Nis 2023',
    views: 685000,
    likes: 24300,
    comments: 5120,
  },
  {
    id: '5',
    thumbnail: 'https://i.imgur.com/XCDsXYQ.jpg',
    title: 'Turkish Airlines Boykot Çağrıları ve Şirket Tepkisi',
    channel: 'Haber Merkezi',
    publishDate: '15 Nis 2023',
    views: 542000,
    likes: 19800,
    comments: 4370,
  },
  {
    id: '6',
    thumbnail: 'https://i.imgur.com/d3TfBEX.jpg',
    title: 'THY İsrail Seferleri Hakkında Bilmeniz Gerekenler',
    channel: 'Uçuş Bilgileri',
    publishDate: '17 Nis 2023',
    views: 498000,
    likes: 17600,
    comments: 3850,
  },
];

// Channel data
const channelData = [
  { name: 'Havacılık Dünyası', subscribers: 1240000, videos: 24, totalViews: 4320000 },
  { name: 'Gündem Analiz', subscribers: 980000, videos: 18, totalViews: 2850000 },
  { name: 'Ekonomi Haberleri', subscribers: 875000, videos: 12, totalViews: 1980000 },
  { name: 'Haber Merkezi', subscribers: 720000, videos: 15, totalViews: 1640000 },
  { name: 'Uçuş Bilgileri', subscribers: 510000, videos: 8, totalViews: 920000 },
];

// Daily upload data
const dailyData = [
  { date: '12 Nis', uploads: 18, views: 923000, interactions: 53200 },
  { date: '13 Nis', uploads: 24, views: 1245000, interactions: 78900 },
  { date: '14 Nis', uploads: 42, views: 2187000, interactions: 142600 },
  { date: '15 Nis', uploads: 65, views: 3420000, interactions: 215800 },
  { date: '16 Nis', uploads: 38, views: 1876000, interactions: 124300 },
  { date: '17 Nis', uploads: 29, views: 1493000, interactions: 96500 },
  { date: '18 Nis', uploads: 17, views: 842000, interactions: 52400 },
];

// Interaction data (likes, comments, shares)
const interactionData = [
  { type: 'Beğeni', count: 246800 },
  { type: 'Yorum', count: 67450 },
  { type: 'Paylaşım', count: 34200 },
];

// Time codes for brand mentions
const timeCodeData = [
  {
    videoTitle: 'THY Boykot Süreci: Neler Yaşandı?',
    thumbnail: 'https://i.imgur.com/JVQEPBp.jpg',
    timeCodes: ['00:41', '01:57', '03:24', '05:12', '08:37'],
  },
  {
    videoTitle: 'Turkish Airlines İsrail Uçuşları Durduruldu mu?',
    thumbnail: 'https://i.imgur.com/gE3SFmt.jpg',
    timeCodes: ['00:23', '02:45', '04:19', '07:36'],
  },
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
        <div className="grid grid-cols-4 gap-4">
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
            <Table
              headers={["Video", "Kanal", "Yayın Tarihi", "İzlenme", "Beğeni", "Yorum"]}
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
                video.publishDate,
                formatNumber(video.views),
                formatNumber(video.likes),
                formatNumber(video.comments),
              ])}
              compact={true}
            />
          </CardContent>
        </Card>

        {/* 4. Two Column Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Channel Data */}
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Youtube size={18} className="mr-2 text-red-500" /> Kanal Etkisi
              </h3>
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
              />
            </CardContent>
          </Card>

          {/* Time Codes */}
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <MessageSquare size={18} className="mr-2 text-blue-500" /> 
                Zaman Kodu Listesi (Markaya Referans)
              </h3>
              <div className="space-y-4">
                {timeCodeData.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <div className="relative w-24 h-16 flex-shrink-0">
                      <img
                        src={item.thumbnail}
                        alt={item.videoTitle}
                        className="object-cover rounded-sm w-full h-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <Play size={16} className="text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium line-clamp-1 mb-1">{item.videoTitle}</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.timeCodes.map((time, tIndex) => (
                          <span 
                            key={tIndex}
                            className="bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-md hover:bg-indigo-200 cursor-pointer transition-colors"
                          >
                            {time}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 5. Interaction Types Breakdown */}
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
    </Slide>
  );
};

export default YouTubeAnalysisSlide;
