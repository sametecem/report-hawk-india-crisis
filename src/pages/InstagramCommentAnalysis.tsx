
import React, { useState } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, LineChart, Line, AreaChart, Area, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ComposedChart } from 'recharts';
import { Calendar, BarChart2, PieChart as PieChartIcon, Users, Search, Link, Clock, Flag, Database, MessageSquare, CircleUser } from 'lucide-react';
import Image from '@/components/ui/Image';
import { generateCommentData } from '@/data/instagramCommentsData';

const InstagramCommentAnalysis = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const commentData = generateCommentData();
  
  const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('tr-TR').format(num);
  };

  const getFormattedDate = (dateStr: string) => {
    const date = new Date(dateStr);
    return new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' }).format(date);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Instagram Yorum Analizi</h1>
          <p className="text-gray-600 text-lg">Türk Hava Yolları Sosyal Medya Krizi | Boykot Dönemi İnceleme Raporu</p>
        </header>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Summary Cards */}
          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <MessageSquare className="h-6 w-6 text-violet-500" />
                <h3 className="text-xl font-bold text-gray-800">Toplam Yorum</h3>
              </div>
              <p className="text-4xl font-bold text-violet-600">{formatNumber(commentData.metrics.totalComments)}</p>
              <p className="text-sm text-gray-500 mt-2">5-18 Mayıs 2025 dönemi</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="h-6 w-6 text-indigo-500" />
                <h3 className="text-xl font-bold text-gray-800">Yorum Yapan</h3>
              </div>
              <p className="text-4xl font-bold text-indigo-600">{formatNumber(commentData.metrics.uniqueUsers)}</p>
              <p className="text-sm text-gray-500 mt-2">Tekil kullanıcı sayısı</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 mb-4">
                <Flag className="h-6 w-6 text-red-500" />
                <h3 className="text-xl font-bold text-gray-800">Boykot Çağrısı</h3>
              </div>
              <p className="text-4xl font-bold text-red-600">{commentData.metrics.boycottPercentage}%</p>
              <p className="text-sm text-gray-500 mt-2">Yorumlarda boycott içeren oran</p>
            </CardContent>
          </Card>
        </div>
        
        <Tabs defaultValue="daily" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-5 sm:w-[600px] mb-6">
            <TabsTrigger value="daily">Günlük Analiz</TabsTrigger>
            <TabsTrigger value="sentiment">Duygu Analizi</TabsTrigger>
            <TabsTrigger value="topics">Temalar</TabsTrigger>
            <TabsTrigger value="engagement">Etkileşim</TabsTrigger>
            <TabsTrigger value="personas">Kullanıcılar</TabsTrigger>
          </TabsList>
          
          {/* Daily Volume Tab */}
          <TabsContent value="daily" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Daily Comment Volume Chart */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    Günlük Yorum Hacmi ve Zirveler
                  </CardTitle>
                  <CardDescription>
                    5-18 Mayıs 2025 dönemi boyunca günlük yorum sayıları ve zirve günler
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={commentData.dailyVolume}
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
                                  <p className="font-medium mb-1">{data.date}</p>
                                  <p className="text-violet-600">Yorum Sayısı: {formatNumber(data.comments)}</p>
                                  {data.isPeak && (
                                    <p className="text-red-600 font-semibold mt-1">🚨 Zirve Gün!</p>
                                  )}
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Area 
                          type="monotone" 
                          dataKey="comments" 
                          name="Yorum Sayısı" 
                          stroke="#8b5cf6" 
                          fill="url(#colorComments)" 
                          strokeWidth={2}
                        />
                        <defs>
                          <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                            <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                          </linearGradient>
                        </defs>
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Peak Days Data */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5 text-red-500" />
                    Zirve Günler
                  </CardTitle>
                  <CardDescription>
                    Ortalama yorum sayısının 2 katı ve üzerinde yorum alan günler
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Tarih</th>
                          <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Yorum Sayısı</th>
                          <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Negatif %</th>
                        </tr>
                      </thead>
                      <tbody>
                        {commentData.peakDays.map((day, index) => (
                          <tr key={index} className={index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                            <td className="py-3 px-4 text-sm text-gray-800 font-medium">{day.date}</td>
                            <td className="py-3 px-4 text-right text-sm font-medium text-violet-600">{formatNumber(day.comments)}</td>
                            <td className="py-3 px-4 text-right text-sm text-red-600">{day.negativePercentage}%</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </CardContent>
              </Card>
              
              {/* Hourly Speed Alert */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-amber-500" />
                    Saatlik Hız Alarmı
                  </CardTitle>
                  <CardDescription>
                    Dakikada 5+ yorum alan zaman dilimleri
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={commentData.hourlySpeed}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                        barSize={12}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                          dataKey="hour"
                          tick={{ fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
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
                                  <p className="font-medium mb-1">Saat: {data.hour}</p>
                                  <p className="text-amber-600">Yorum/Dakika: {data.commentsPerMinute}</p>
                                  <p className="text-gray-600">Tarih: {data.date}</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Bar
                          dataKey="commentsPerMinute"
                          name="Yorum/Dakika"
                          fill="#f59e0b"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Sentiment Analysis Tab */}
          <TabsContent value="sentiment" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Sentiment Curve */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <LineChart className="h-5 w-5 text-blue-500" />
                    Duygu Eğrisi
                  </CardTitle>
                  <CardDescription>
                    Yorumların günlük ortalama duygu skoru değişimi (-1: Çok negatif, +1: Çok pozitif)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={commentData.sentimentCurve}
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
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 11 }}
                          width={40}
                          domain={[-1, 1]}
                          ticks={[-1, -0.5, 0, 0.5, 1]}
                        />
                        <Tooltip
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              let sentimentText = "Nötr";
                              let sentimentColor = "text-gray-600";
                              
                              if (data.sentimentScore <= -0.5) {
                                sentimentText = "Çok Negatif";
                                sentimentColor = "text-red-600";
                              } else if (data.sentimentScore < 0) {
                                sentimentText = "Negatif";
                                sentimentColor = "text-orange-600";
                              } else if (data.sentimentScore > 0.5) {
                                sentimentText = "Çok Pozitif";
                                sentimentColor = "text-green-600";
                              } else if (data.sentimentScore > 0) {
                                sentimentText = "Pozitif";
                                sentimentColor = "text-emerald-600";
                              }
                              
                              return (
                                <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
                                  <p className="font-medium mb-1">{data.date}</p>
                                  <p className={sentimentColor}>Duygu Skoru: {data.sentimentScore.toFixed(2)} ({sentimentText})</p>
                                  <p className="text-gray-600 mt-1">Yorum Sayısı: {formatNumber(data.commentCount)}</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Line
                          type="monotone"
                          dataKey="sentimentScore"
                          name="Duygu Skoru"
                          stroke="#3b82f6"
                          strokeWidth={3}
                          dot={{ r: 4, strokeWidth: 2 }}
                          activeDot={{ r: 6, strokeWidth: 2 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="baseline"
                          name="Nötr Çizgisi"
                          stroke="#94a3b8"
                          strokeWidth={1}
                          strokeDasharray="5 5"
                          dot={false}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Sentiment Distribution */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChartIcon className="h-5 w-5 text-indigo-500" />
                    Duygu Dağılımı
                  </CardTitle>
                  <CardDescription>
                    Yorumların duygu analizi sonuçlarına göre dağılımı
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={commentData.sentimentDistribution}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                        >
                          {commentData.sentimentDistribution.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip
                          formatter={(value, name) => [formatNumber(value), name]}
                          itemStyle={{ color: "#333" }}
                        />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Toxicity Filter */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flag className="h-5 w-5 text-red-500" />
                    Toksisite & Hakaret Filtresi
                  </CardTitle>
                  <CardDescription>
                    Toksik içerik oranı ve saatlik dağılım (Perspective API {">"} 0.8)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-center mb-4">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-red-600">{commentData.metrics.toxicPercentage}%</p>
                      <p className="text-gray-600 text-sm mt-1">Toksik İçerik Oranı</p>
                    </div>
                  </div>
                  <div className="h-48">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={commentData.toxicityByHour}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                          dataKey="hour"
                          tick={{ fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 11 }}
                          width={40}
                        />
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Toksisite"]}
                        />
                        <Bar
                          dataKey="toxicityPercentage"
                          name="Toksisite %"
                          fill="#ef4444"
                          radius={[4, 4, 0, 0]}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Topics Analysis Tab */}
          <TabsContent value="topics" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Theme Clustering */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Database className="h-5 w-5 text-emerald-500" />
                    Tema Kümeleme (BERTopic)
                  </CardTitle>
                  <CardDescription>
                    Yorumlardan çıkarılan ana temalar ve dağılımları
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {commentData.topics.map((topic, index) => (
                      <div 
                        key={index} 
                        className="bg-gradient-to-br from-white to-emerald-50 p-4 rounded-xl shadow-sm border border-emerald-100"
                      >
                        <h4 className="font-semibold text-emerald-700 mb-2">{topic.name}</h4>
                        <p className="text-gray-500 text-xs mb-3">Toplam: {formatNumber(topic.commentCount)} yorum</p>
                        <div className="space-y-1">
                          {topic.keywords.map((keyword, kidx) => (
                            <span 
                              key={kidx} 
                              className="inline-block mr-2 mb-2 px-2 py-1 text-xs bg-white rounded-full shadow-sm border border-emerald-100"
                            >
                              {keyword}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Topic Distribution Chart */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <PieChartIcon className="h-5 w-5 text-emerald-500" />
                    Tema Dağılımı
                  </CardTitle>
                  <CardDescription>
                    Ana temaların yüzdesel dağılımı
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={commentData.topics}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          outerRadius={80}
                          fill="#10b981"
                          dataKey="commentCount"
                          nameKey="name"
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                        >
                          {commentData.topics.map((entry, index) => (
                            <Cell 
                              key={`cell-${index}`} 
                              fill={entry.color || `hsl(${150 + index * 30}, 70%, 50%)`} 
                            />
                          ))}
                        </Pie>
                        <Tooltip 
                          formatter={(value, name) => [formatNumber(value), name]}
                          itemStyle={{ color: "#333" }}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* CTA Detection */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flag className="h-5 w-5 text-red-500" />
                    Eylem Çağrısı (CTA) Tespiti
                  </CardTitle>
                  <CardDescription>
                    "Boykot edin", "İptal edin" gibi eylem çağrısı içeren yorumlar ve saatlik dağılımı
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                    <div className="lg:col-span-1">
                      <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                        <h4 className="font-semibold text-red-700 mb-2">CTA İçeren Yorumlar</h4>
                        <p className="text-3xl font-bold text-red-600">{commentData.metrics.ctaPercentage}%</p>
                        <p className="text-gray-500 text-sm mt-2">Toplam {formatNumber(commentData.metrics.ctaCount)} yorum</p>
                        
                        <div className="mt-4">
                          <h5 className="font-medium text-sm text-red-700 mb-2">En Sık Kullanılan CTA'lar:</h5>
                          <div className="space-y-1">
                            {commentData.topCTAPhrases.map((cta, index) => (
                              <div key={index} className="flex justify-between items-center text-sm">
                                <span className="text-gray-700">{cta.phrase}</span>
                                <span className="text-gray-500">{cta.count}x</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-3">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <BarChart
                            data={commentData.ctaByHour}
                            margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                          >
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                            <XAxis
                              dataKey="hour"
                              tick={{ fontSize: 11 }}
                              axisLine={false}
                              tickLine={false}
                            />
                            <YAxis
                              axisLine={false}
                              tickLine={false}
                              tick={{ fontSize: 11 }}
                              width={40}
                            />
                            <Tooltip
                              formatter={(value, name) => [value, name === "ctaCount" ? "CTA İçeren Yorum Sayısı" : "CTA Oranı (%)"]}
                            />
                            <Legend />
                            <Bar
                              dataKey="ctaCount"
                              name="CTA İçeren Yorum Sayısı"
                              fill="#ef4444"
                              radius={[4, 4, 0, 0]}
                            />
                            <Line
                              type="monotone"
                              dataKey="ctaPercentage"
                              name="CTA Oranı (%)"
                              stroke="#f97316"
                              strokeWidth={2}
                              dot={{ r: 4 }}
                            />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* Engagement Analysis Tab */}
          <TabsContent value="engagement" className="space-y-6">
            <div className="grid grid-cols-1 gap-6">
              {/* Post Based Boycot Intensity */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart2 className="h-5 w-5 text-blue-500" />
                    Post Bazlı Boykot Yoğunluğu
                  </CardTitle>
                  <CardDescription>
                    Her gönderi için toplam yorum ve negatif yorum oranı
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <ComposedChart
                        data={commentData.postBoycottIntensity}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                          dataKey="postId"
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
                          tickFormatter={(value) => `${value}%`}
                        />
                        <Tooltip 
                          content={({ active, payload, label }) => {
                            if (active && payload && payload.length) {
                              const data = payload[0].payload;
                              return (
                                <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
                                  <p className="font-medium mb-1">Post #{data.postId}</p>
                                  <p className="text-gray-700">{data.postDescription}</p>
                                  <p className="text-blue-600 mt-1">Yorum: {formatNumber(data.totalComments)}</p>
                                  <p className="text-red-600">Negatif: {data.negativePercentage}%</p>
                                </div>
                              );
                            }
                            return null;
                          }}
                        />
                        <Legend />
                        <Bar
                          yAxisId="left"
                          dataKey="totalComments"
                          name="Toplam Yorum"
                          fill="#3b82f6"
                          radius={[4, 4, 0, 0]}
                          barSize={20}
                        />
                        <Line
                          yAxisId="right"
                          type="monotone"
                          dataKey="negativePercentage"
                          name="Negatif Yorum Oranı (%)"
                          stroke="#ef4444"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                        />
                      </ComposedChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* Top Comments */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageSquare className="h-5 w-5 text-indigo-500" />
                    En Çok Etkileşim Alan Yorumlar
                  </CardTitle>
                  <CardDescription>
                    Yorum uzunluğu ve alıntı sayısına göre "etki" skoru en yüksek yorumlar
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {commentData.topComments.slice(0, 6).map((comment, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 p-4 flex flex-col">
                        <div className="flex items-center gap-3 mb-3">
                          <Avatar>
                            <AvatarImage src={comment.userProfilePic} alt={comment.username} />
                            <AvatarFallback>{comment.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-gray-800">@{comment.username}</p>
                            <p className="text-xs text-gray-500">{comment.date}</p>
                          </div>
                        </div>
                        <p className="text-gray-700 text-sm mb-3 flex-1">{comment.text}</p>
                        <div className="flex items-center justify-between mt-2">
                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">Etki: {comment.impactScore}</span>
                          </div>
                          {comment.postLink && (
                            <a 
                              href={comment.postLink} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="inline-flex hover:text-blue-600 text-blue-500"
                            >
                              <Link className="h-4 w-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Language Distribution */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-violet-500" />
                    Dil Dağılımı
                  </CardTitle>
                  <CardDescription>
                    Yorumların dil bazlı analizi (langid algoritması ile tespit)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-1">
                      <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                          <PieChart>
                            <Pie
                              data={commentData.languageDistribution}
                              cx="50%"
                              cy="50%"
                              labelLine={false}
                              outerRadius={80}
                              fill="#8884d8"
                              dataKey="percentage"
                              nameKey="language"
                              label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                            >
                              {commentData.languageDistribution.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                              ))}
                            </Pie>
                            <Tooltip
                              formatter={(value) => [`${value}%`, "Yüzde"]}
                            />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                    
                    <div className="lg:col-span-2">
                      <div className="overflow-x-auto">
                        <table className="w-full">
                          <thead>
                            <tr className="border-b border-gray-200">
                              <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Dil</th>
                              <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Yorum Sayısı</th>
                              <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Oran</th>
                              <th className="text-center py-3 px-4 text-sm font-medium text-gray-600">Örnek</th>
                            </tr>
                          </thead>
                          <tbody>
                            {commentData.languageDistribution.map((lang, index) => (
                              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                                <td className="py-3 px-4 text-sm text-gray-800 font-medium">{lang.language}</td>
                                <td className="py-3 px-4 text-right text-sm font-medium text-violet-600">{formatNumber(lang.commentCount)}</td>
                                <td className="py-3 px-4 text-right text-sm">{lang.percentage}%</td>
                                <td className="py-3 px-4 text-center text-sm text-gray-500 italic">{lang.example}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          {/* User Personas Tab */}
          <TabsContent value="personas" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* User Persona Types */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-3">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CircleUser className="h-5 w-5 text-indigo-500" />
                    Kullanıcı Personaları
                  </CardTitle>
                  <CardDescription>
                    Profil fotoğrafı tipine göre kullanıcı grupları ve davranış analizi
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {commentData.userPersonas.map((persona, index) => (
                      <div 
                        key={index} 
                        className="bg-white border rounded-xl shadow-sm overflow-hidden"
                      >
                        <div className="p-4 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-12 w-12">
                              <AvatarImage src={persona.sampleProfilePic} alt={persona.type} />
                              <AvatarFallback>{persona.type.slice(0, 2).toUpperCase()}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h4 className="font-semibold text-gray-800">{persona.type}</h4>
                              <p className="text-sm text-gray-500">{persona.percentage}% kullanıcı</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="px-4 py-3 bg-gray-50">
                          <h5 className="text-sm font-medium text-gray-700 mb-2">Karakteristikler:</h5>
                          <ul className="text-xs text-gray-600 space-y-1">
                            {persona.characteristics.map((char, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2"></span>
                                {char}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="p-4 border-t border-gray-100">
                          <h5 className="text-sm font-medium text-gray-700 mb-2">Örnek Yorum:</h5>
                          <p className="text-xs text-gray-600 italic">"{persona.sampleComment}"</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* User Activity Patterns */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-500" />
                    Kullanıcı Aktivite Desenleri
                  </CardTitle>
                  <CardDescription>
                    Farklı persona tiplerinin yorum aktivite paterni
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart
                        data={commentData.userActivityPatterns}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis
                          dataKey="hour"
                          tick={{ fontSize: 11 }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 11 }}
                          width={40}
                        />
                        <Tooltip />
                        <Legend />
                        <Line
                          type="monotone"
                          dataKey="realPhoto"
                          name="Gerçek Fotoğraflı"
                          stroke="#3b82f6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="memePhoto"
                          name="Meme/Logo Kullanıcılar"
                          stroke="#8b5cf6"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                        />
                        <Line
                          type="monotone"
                          dataKey="anonymous"
                          name="Anonim/Boş Profil"
                          stroke="#ef4444"
                          strokeWidth={2}
                          dot={{ r: 4 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
              
              {/* User Negativity Analysis */}
              <Card className="shadow-md bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Flag className="h-5 w-5 text-red-500" />
                    Negativite Analizi
                  </CardTitle>
                  <CardDescription>
                    Persona tiplerinin negativite oranları
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={commentData.userPersonas}
                        margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                        layout="vertical"
                      >
                        <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                        <XAxis
                          type="number"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 11 }}
                          domain={[0, 100]}
                          tickFormatter={(value) => `${value}%`}
                        />
                        <YAxis
                          dataKey="type"
                          type="category"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 11 }}
                          width={140}
                        />
                        <Tooltip
                          formatter={(value) => [`${value}%`, "Negatif Yorum Oranı"]}
                        />
                        <Legend />
                        <Bar
                          dataKey="negativityPercentage"
                          name="Negatif Yorum Oranı"
                          fill="#ef4444"
                          radius={[0, 4, 4, 0]}
                          barSize={20}
                        />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InstagramCommentAnalysis;

