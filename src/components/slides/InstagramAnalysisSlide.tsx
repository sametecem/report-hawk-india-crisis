
import React, { useState, useEffect } from 'react';
import Slide from '@/components/Slide';
import { Card, CardContent } from '@/components/ui/card';
import { Table } from '@/components/ui/table';
import { Instagram, Calendar, BarChart2, Users, SortAsc, SortDesc, Link, BarChart, FileBarChart, Image as ImageIcon } from 'lucide-react';
import { instagramData, topPostsByLikes, hashtagData, instagramMetrics, topAccountsByFollowers } from '@/data/instagramData';
import Image from '@/components/ui/Image';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';
import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line, ComposedChart } from 'recharts';
import DataChart from '@/components/DataChart';

const InstagramAnalysisSlide = () => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sortedPosts = [...topPostsByLikes].sort((a, b) => 
    sortDirection === 'desc' ? b.likeCount - a.likeCount : a.likeCount - b.likeCount
  );

  const toggleSortDirection = () => {
    setSortDirection(prev => prev === 'desc' ? 'asc' : 'desc');
  };

  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('tr-TR').format(num);
  };

  const getFormattedDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' }).format(date);
  };

  // Popular content images
  const popularImages = [
    "https://i.ibb.co/4RLyNB7W/497979963-18069234425505656-689915507547684381-n.jpg",
    "https://i.ibb.co/Swt0L0vs/2.jpg",
    "https://i.ibb.co/DPxF0s7M/3.jpg",
    "https://i.ibb.co/Xfz1JdGB/7.jpg",
    "https://i.ibb.co/SXRP30zZ/8.jpg"
  ];

  // Rotate through images automatically
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % popularImages.length);
    }, 5000); // Change image every 5 seconds
    
    return () => clearInterval(timer);
  }, []);

  // Manually change image
  const changeImage = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentImageIndex(prev => (prev + 1) % popularImages.length);
    } else {
      setCurrentImageIndex(prev => (prev - 1 + popularImages.length) % popularImages.length);
    }
  };

  // Prepare data for charts
  const chartData = instagramData.map(item => ({
    date: getFormattedDate(item.date),
    rawDate: item.date,
    posts: item.posts,
    likes: item.likes,
    comments: item.comments,
    plays: item.plays,
    er: item.er,
  })).filter(item => item.posts > 0);

  return (
    <Slide 
      title="Instagram Analizi"
      subtitle="Türk Hava Yolları Sosyal Medya Krizi"
      bgColor="bg-gradient-to-br from-white via-slate-50 to-blue-50"
      contentClassName="space-y-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Summary Card */}
        <Card className="shadow-md bg-white/90 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Instagram className="h-6 w-6 text-purple-500" />
              <h3 className="text-xl font-bold text-gray-800">Instagram Özet</h3>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-purple-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Toplam Gönderiler</p>
                <p className="text-2xl font-bold text-purple-700">{formatNumber(instagramMetrics.totalPosts)}</p>
              </div>
              <div className="bg-pink-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Toplam Beğeniler</p>
                <p className="text-2xl font-bold text-pink-600">{formatNumber(instagramMetrics.totalLikes)}</p>
              </div>
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Toplam Yorumlar</p>
                <p className="text-2xl font-bold text-blue-600">{formatNumber(instagramMetrics.totalComments)}</p>
              </div>
              <div className="bg-amber-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Toplam İzlenmeler</p>
                <p className="text-2xl font-bold text-amber-600">{formatNumber(instagramMetrics.totalPlays)}</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Ortalama Etkileşim Oranı</p>
                <p className="text-2xl font-bold text-green-600">%{instagramMetrics.avgEr}</p>
              </div>
              <div className="bg-indigo-50 p-3 rounded-lg">
                <p className="text-sm text-gray-600">Toplam Takipçi</p>
                <p className="text-2xl font-bold text-indigo-600">{formatNumber(instagramMetrics.totalFollowers)}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Top Accounts by Followers */}
        <Card className="shadow-md bg-white/90 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Users className="h-5 w-5 text-blue-500" />
              <h3 className="text-xl font-bold text-gray-800">En Çok Takipçisi Olan Hesaplar</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-2 px-3 text-xs font-medium text-gray-600">Sıra</th>
                    <th className="text-left py-2 px-3 text-xs font-medium text-gray-600">Kullanıcı</th>
                    <th className="text-right py-2 px-3 text-xs font-medium text-gray-600">Takipçiler</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {topAccountsByFollowers.map((account, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                      <td className="py-1.5 px-3">{index + 1}</td>
                      <td className="py-1.5 px-3 text-blue-600">@{account.username}</td>
                      <td className="py-1.5 px-3 text-right">{formatNumber(account.followerCount)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Post with Image */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <ImageIcon className="h-5 w-5 text-pink-500" />
            <h3 className="text-xl font-bold text-gray-800">Popüler Gönderiler</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col space-y-3">
              <div className="relative overflow-hidden rounded-lg border border-gray-200 aspect-square">
                {/* Image carousel */}
                <img 
                  src={popularImages[currentImageIndex]}
                  alt={`Popüler gönderi ${currentImageIndex + 1}`} 
                  className="w-full h-full object-cover transition-opacity duration-500"
                  onError={(e) => {
                    e.currentTarget.src = "https://placehold.co/400x400/f9fafb/a1a1aa?text=Resim+Yüklenemedi";
                  }}
                />
                
                {/* Navigation buttons */}
                <div className="absolute inset-0 flex items-center justify-between px-2">
                  <button 
                    onClick={() => changeImage('prev')}
                    className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 backdrop-blur-sm transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button 
                    onClick={() => changeImage('next')}
                    className="bg-black/30 hover:bg-black/50 text-white rounded-full p-1.5 backdrop-blur-sm transition-all"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
                
                {/* Image indicators */}
                <div className="absolute bottom-2 left-0 right-0 flex justify-center space-x-2">
                  {popularImages.map((_, index) => (
                    <button 
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                      }`}
                      aria-label={`Go to image ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <p className="font-semibold text-gray-700">@{sortedPosts[currentImageIndex]?.username || sortedPosts[0]?.username}</p>
                <p className="text-gray-500 text-sm">{sortedPosts[currentImageIndex]?.date || sortedPosts[0]?.date}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-pink-600 font-medium">{formatNumber(sortedPosts[currentImageIndex]?.likeCount || sortedPosts[0]?.likeCount || 0)} beğeni</span>
                  <span className="text-blue-600">{formatNumber(sortedPosts[currentImageIndex]?.commentCount || sortedPosts[0]?.commentCount || 0)} yorum</span>
                </div>
                <a 
                  href={sortedPosts[currentImageIndex]?.instagramLink || sortedPosts[0]?.instagramLink} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 text-xs text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <Link className="h-3 w-3" /> Gönderiye Git
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-medium text-gray-800 mb-2">Diğer Popüler Gönderiler</h4>
              <div className="space-y-3">
                {sortedPosts.slice(0, 5).map((post, index) => (
                  <div key={index} className="flex justify-between border-b border-gray-100 pb-2">
                    <span className="text-blue-600">@{post.username}</span>
                    <span className="text-pink-600 font-medium">{formatNumber(post.likeCount)} beğeni</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Daily Metrics Chart */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <FileBarChart className="h-6 w-6 text-indigo-500" />
            <h3 className="text-xl font-bold text-gray-800">Günlük Instagram Metrikleri</h3>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart 
                data={chartData} 
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis 
                  dataKey="date" 
                  tick={{ fontSize: 11 }}
                  angle={-45}
                  textAnchor="end"
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <YAxis 
                  yAxisId="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  width={40}
                />
                <YAxis 
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  width={40}
                />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
                          <p className="font-medium mb-1">{label}</p>
                          <p className="text-pink-600">Beğeniler: {formatNumber(data.likes || 0)}</p>
                          <p className="text-blue-600">Yorumlar: {formatNumber(data.comments || 0)}</p>
                          <p className="text-purple-600">Gönderiler: {formatNumber(data.posts || 0)}</p>
                          <p className="text-amber-600">İzlenmeler: {formatNumber(data.plays || 0)}</p>
                          {data.er > 0 && <p className="text-green-600">ER: %{data.er}</p>}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                <Bar 
                  yAxisId="left" 
                  dataKey="posts" 
                  name="Gönderiler" 
                  fill="#8b5cf6" 
                  radius={[4, 4, 0, 0]} 
                  barSize={6}
                />
                <Bar 
                  yAxisId="left" 
                  dataKey="likes" 
                  name="Beğeniler" 
                  fill="#ec4899" 
                  radius={[4, 4, 0, 0]} 
                  barSize={20} 
                />
                <Bar 
                  yAxisId="left" 
                  dataKey="comments" 
                  name="Yorumlar" 
                  fill="#3b82f6" 
                  radius={[4, 4, 0, 0]} 
                  barSize={12} 
                />
                <Line 
                  yAxisId="right" 
                  type="monotone" 
                  dataKey="plays" 
                  name="İzlenmeler" 
                  stroke="#f59e0b" 
                  strokeWidth={2} 
                  dot={{ r: 4 }} 
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Top Posts Table */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-indigo-500" />
              <h3 className="text-xl font-bold text-gray-800">En Çok Beğeni Alan Gönderiler</h3>
            </div>
            <button 
              onClick={toggleSortDirection}
              className="flex items-center gap-1 text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-full transition-all"
            >
              {sortDirection === 'desc' ? (
                <>
                  <SortDesc className="h-3.5 w-3.5" /> Azalan
                </>
              ) : (
                <>
                  <SortAsc className="h-3.5 w-3.5" /> Artan
                </>
              )}
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Kullanıcı</th>
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Tarih</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Beğeni</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Yorum</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">İzlenme</th>
                  <th className="text-center py-3 px-4 text-sm font-medium text-gray-600">Link</th>
                </tr>
              </thead>
              <tbody>
                {sortedPosts.map((post, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                    <td className="py-3 px-4 text-sm text-gray-800">
                      @{post.username}
                    </td>
                    <td className="py-3 px-4 text-sm text-gray-600">{post.date}</td>
                    <td className="py-3 px-4 text-right text-sm font-medium text-pink-600">{formatNumber(post.likeCount)}</td>
                    <td className="py-3 px-4 text-right text-sm text-gray-600">{formatNumber(post.commentCount)}</td>
                    <td className="py-3 px-4 text-right text-sm text-gray-600">{formatNumber(post.playCount)}</td>
                    <td className="py-3 px-4 text-center">
                      <a 
                        href={post.instagramLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex hover:text-blue-600 text-blue-500"
                      >
                        <Link className="h-4 w-4" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Hashtags */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex items-center gap-3 mb-4">
            <BarChart2 className="h-5 w-5 text-green-500" />
            <h3 className="text-xl font-bold text-gray-800">En Popüler Hashtagler</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {hashtagData.map((tag, index) => (
              <div 
                key={index}
                className={`
                  px-3 py-1.5 rounded-full text-sm
                  ${index < 3 ? 'bg-blue-100 text-blue-700' : 
                    index < 7 ? 'bg-indigo-100 text-indigo-700' :
                    index < 12 ? 'bg-purple-100 text-purple-700' :
                    'bg-gray-100 text-gray-700'}
                `}
              >
                #{tag.name} ({tag.count})
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </Slide>
  );
};

export default InstagramAnalysisSlide;
