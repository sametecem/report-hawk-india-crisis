
import React from 'react';
import Slide from '@/components/Slide';
import { Card, CardContent } from '@/components/ui/card';
import Table from '@/components/Table';
import { Play, Youtube } from 'lucide-react';

// Summary data
const summaryData = {
  videoCount: 245,
  totalViews: 12843500,
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
  { date: '12 Nis', uploads: 18, views: 923000 },
  { date: '13 Nis', uploads: 24, views: 1245000 },
  { date: '14 Nis', uploads: 42, views: 2187000 },
  { date: '15 Nis', uploads: 65, views: 3420000 },
  { date: '16 Nis', uploads: 38, views: 1876000 },
  { date: '17 Nis', uploads: 29, views: 1493000 },
  { date: '18 Nis', uploads: 17, views: 842000 },
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
        <div className="grid grid-cols-3 gap-4">
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {formatNumber(summaryData.videoCount)}
                </div>
                <div className="text-sm text-gray-500 text-center">Video Adedi</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {formatNumber(summaryData.totalViews)}
                </div>
                <div className="text-sm text-gray-500 text-center">Toplam İzlenme</div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <div className="flex flex-col items-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">
                  {summaryData.avgLikesPer1000Views}
                </div>
                <div className="text-sm text-gray-500 text-center">
                  Ort. Beğeni / 1.000 İzlenme
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* 2. Top 10 Videos */}
        <Card className="bg-white shadow-md overflow-hidden">
          <CardContent className="p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <Youtube size={18} className="mr-2" /> En Popüler Videolar
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

        {/* 3. Channel Data and 4. Time Codes (Two Columns) */}
        <div className="grid grid-cols-2 gap-4">
          {/* Channel Data */}
          <Card className="bg-white shadow-md">
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4 flex items-center">
                <Youtube size={18} className="mr-2" /> Kanal Etkisi
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
              <h3 className="font-semibold text-lg mb-4">Zaman Kodu Listesi (Markaya Referans)</h3>
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
                            className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-md hover:bg-blue-200 cursor-pointer"
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
      </div>
    </Slide>
  );
};

export default YouTubeAnalysisSlide;
