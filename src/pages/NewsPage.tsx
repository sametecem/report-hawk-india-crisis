import React, { useState } from 'react';
import { Search, Calendar, AlertTriangle, BookOpen } from 'lucide-react';
import NewsCard from '@/components/news/NewsCard';
import DailyNewsChart from '@/components/news/DailyNewsChart';
import WordCloud from '@/components/news/WordCloud';
import SentimentAnalysisChart from '@/components/news/SentimentAnalysisChart';
import { newsData, dailyNewsData, sentimentData, wordCloudData } from '@/data/newsData';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Navigation from '@/components/Navigation';

const NewsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter news based on search term
  const filteredNews = newsData.filter(news => 
    news.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    news.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    news.source.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      <Navigation />
      {/* Hero section with search */}
      <div className="bg-gradient-to-r from-red-600 to-red-700 text-white py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Türk Havayolları Boykot Haberleri</h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-xl">
            Türkiye-Hindistan ilişkileri ve boykot çağrılarına dair son gelişmeler
          </p>
          
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Haberlerde ara..."
              className="pl-10 py-6 w-full rounded-xl bg-white/90 text-gray-800 focus:ring-2 ring-red-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="mt-6 flex items-center text-sm text-red-200">
            <Calendar className="mr-2 h-4 w-4" /> Son güncelleme: 22 Mayıs 2025
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl px-6 py-12">
        {/* Statistics cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Toplam Haber</p>
                <p className="text-3xl font-bold text-gray-800">81</p>
              </div>
              <div className="bg-blue-100 p-3 rounded-full">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Bu Hafta</p>
                <p className="text-3xl font-bold text-gray-800">43</p>
              </div>
              <div className="bg-purple-100 p-3 rounded-full">
                <Calendar className="h-6 w-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 mb-1">Negatif İçerik</p>
                <p className="text-3xl font-bold text-red-600">95%</p>
              </div>
              <div className="bg-red-100 p-3 rounded-full">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>

        {/* Content Tabs */}
        <Tabs defaultValue="all-news" className="mb-12">
          <TabsList className="mb-8 bg-red-50 p-1 rounded-lg">
            <TabsTrigger value="all-news" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Tüm Haberler
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Analitik
            </TabsTrigger>
            <TabsTrigger value="daily-data" className="data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Günlük Veriler
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="all-news">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BookOpen className="mr-2 h-5 w-5 text-red-600" />
              Öne Çıkan Haberler
            </h2>
            
            {searchTerm && filteredNews.length === 0 ? (
              <div className="text-center py-16 bg-gray-50 rounded-xl">
                <p className="text-gray-600">Arama sonucu bulunamadı.</p>
                <p className="text-gray-500 text-sm mt-2">Lütfen farklı arama terimleriyle tekrar deneyin.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {(searchTerm ? filteredNews : newsData).map(news => (
                  <NewsCard key={news.id} news={news} />
                ))}
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="space-y-12">
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Günlük Haber Sayısı</h3>
                <DailyNewsChart data={dailyNewsData} />
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Duygu Analizi</h3>
                  <SentimentAnalysisChart data={sentimentData} />
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Popüler Kelimeler</h3>
                  <WordCloud data={wordCloudData} />
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="daily-data">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Günlük Haber İstatistikleri</h2>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-semibold">Tarih</TableHead>
                      <TableHead className="text-right font-semibold">Haber Sayısı</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {dailyNewsData.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell className="font-medium">{item.day}</TableCell>
                        <TableCell className="text-right">{item.count}</TableCell>
                      </TableRow>
                    ))}
                    <TableRow className="bg-gray-50">
                      <TableCell className="font-bold">Toplam</TableCell>
                      <TableCell className="text-right font-bold">
                        {dailyNewsData.reduce((sum, item) => sum + item.count, 0)}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default NewsPage;
