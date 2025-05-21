
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AreaChart, Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Calendar, BarChart2, PieChart as PieChartIcon, MessageSquare, Users, Clock, Flag, Search } from 'lucide-react';
import { formatNumber } from '@/utils/formatting';

const ThyBoycottAnalysis = () => {
  // Güncel tarih ve saat
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString('tr-TR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  // Tab state
  const [activeTab, setActiveTab] = useState("overview");

  // Örnek Veri - Gerçek uygulamada API'den veya state'ten gelecektir
  const dailyCommentVolumeData = [
    { date: "May 7", comments: 250, isPeak: false },
    { date: "May 8", comments: 280, isPeak: false },
    { date: "May 9", comments: 780, isPeak: false },
    { date: "May 10", comments: 777, isPeak: true },
    { date: "May 11", comments: 430, isPeak: false },
    { date: "May 12", comments: 350, isPeak: false },
    { date: "May 13", comments: 310, isPeak: false },
    { date: "May 14", comments: 480, isPeak: false },
    { date: "May 15", comments: 1087, isPeak: true },
    { date: "May 16", comments: 580, isPeak: false },
    { date: "May 17", comments: 350, isPeak: false },
    { date: "May 18", comments: 410, isPeak: false },
    { date: "May 19", comments: 848, isPeak: true },
    { date: "May 20", comments: 510, isPeak: false },
    { date: "May 21", comments: 320, isPeak: false },
  ];

  const peakDays = [
    { date: "May 10", comments: 777, negativePercentage: 88.5 },
    { date: "May 15", comments: 1087, negativePercentage: 91.2 },
    { date: "May 19", comments: 848, negativePercentage: 85.7 },
  ];

  const sentimentData = [
    { date: "May 7", sentimentScore: -0.1, commentCount: 250, baseline: 0 },
    { date: "May 8", sentimentScore: -0.15, commentCount: 280, baseline: 0 },
    { date: "May 9", sentimentScore: -0.05, commentCount: 780, baseline: 0 },
    { date: "May 10", sentimentScore: -0.25, commentCount: 777, baseline: 0 },
    { date: "May 11", sentimentScore: -0.18, commentCount: 430, baseline: 0 },
    { date: "May 12", sentimentScore: -0.22, commentCount: 350, baseline: 0 },
    { date: "May 13", sentimentScore: -0.28, commentCount: 310, baseline: 0 },
    { date: "May 14", sentimentScore: -0.35, commentCount: 480, baseline: 0 },
    { date: "May 15", sentimentScore: -0.52, commentCount: 1087, baseline: 0 },
    { date: "May 16", sentimentScore: -0.38, commentCount: 580, baseline: 0 },
    { date: "May 17", sentimentScore: -0.28, commentCount: 350, baseline: 0 },
    { date: "May 18", sentimentScore: -0.42, commentCount: 410, baseline: 0 },
    { date: "May 19", sentimentScore: -0.39, commentCount: 848, baseline: 0 },
    { date: "May 20", sentimentScore: -0.44, commentCount: 510, baseline: 0 },
    { date: "May 21", sentimentScore: -0.48, commentCount: 320, baseline: 0 },
  ];

  const sentimentDistributionData = [
    { name: "Negative", value: 68.7, color: "#e74c3c" },
    { name: "Neutral", value: 25.6, color: "#95a5a6" },
    { name: "Positive", value: 5.6, color: "#2ecc71" },
  ];

  const topicClusteringData = [
    { name: "Flight Cancellations", value: 128, score: -0.72, color: "#e67e22" },
    { name: "Customer Service Issues", value: 97, score: -0.65, color: "#f39c12" },
    { name: "Political Statements", value: 76, score: -0.81, color: "#f1c40f" },
    { name: "Refund Problems", value: 64, score: -0.58, color: "#badc58" },
    { name: "Alternative Airlines", value: 45, score: -0.3, color: "#78e08f" },
    { name: "Corporate Responsibility", value: 38, score: -0.42, color: "#3498db" },
  ];

  const toxicityHeatmapData = [
    { day: "Sun", hour0: 0.2, hour3: 0.3, hour6: 0.2, hour9: 0.4, hour12: 0.3, hour15: 0.5, hour18: 0.7, hour21: 0.8 },
    { day: "Mon", hour0: 0.3, hour3: 0.4, hour6: 0.3, hour9: 0.3, hour12: 0.4, hour15: 0.6, hour18: 0.8, hour21: 0.9 },
    { day: "Tue", hour0: 0.4, hour3: 0.3, hour6: 0.2, hour9: 0.4, hour12: 0.5, hour15: 0.7, hour18: 0.9, hour21: 0.9 },
    { day: "Wed", hour0: 0.3, hour3: 0.2, hour6: 0.3, hour9: 0.5, hour12: 0.6, hour15: 0.8, hour18: 0.9, hour21: 0.8 },
    { day: "Thu", hour0: 0.4, hour3: 0.3, hour6: 0.4, hour9: 0.5, hour12: 0.5, hour15: 0.7, hour18: 0.8, hour21: 0.9 },
    { day: "Fri", hour0: 0.5, hour3: 0.3, hour6: 0.2, hour9: 0.4, hour12: 0.6, hour15: 0.7, hour18: 0.9, hour21: 0.9 },
    { day: "Sat", hour0: 0.3, hour3: 0.2, hour6: 0.2, hour9: 0.3, hour12: 0.4, hour15: 0.5, hour18: 0.7, hour21: 0.8 },
  ];

  const postBoycottIntensityData = [
    { postId: "1", totalComments: 220, negativePercentage: 49.5, postDescription: "Corporate Announcement" },
    { postId: "2", totalComments: 180, negativePercentage: 74.1, postDescription: "New Routes" },
    { postId: "3", totalComments: 150, negativePercentage: 65.3, postDescription: "Customer Photos" },
    { postId: "4", totalComments: 195, negativePercentage: 72.8, postDescription: "Sale Announcement" },
    { postId: "5", totalComments: 310, negativePercentage: 64.1, postDescription: "New Aircraft" },
    { postId: "6", totalComments: 363, negativePercentage: 89.5, postDescription: "CEO Statement" },
    { postId: "7", totalComments: 240, negativePercentage: 71.2, postDescription: "Flight Attendants" },
    { postId: "8", totalComments: 315, negativePercentage: 85.9, postDescription: "Partnership News" },
    { postId: "9", totalComments: 185, negativePercentage: 72.5, postDescription: "Flight Experience" },
    { postId: "10", totalComments: 506, negativePercentage: 88.0, postDescription: "Corporate Message" },
  ];

  const ctaDetectionData = [
    { day: "May 7", ctaCount: 45 },
    { day: "May 8", ctaCount: 75 },
    { day: "May 9", ctaCount: 85 },
    { day: "May 10", ctaCount: 350 },
    { day: "May 11", ctaCount: 70 },
    { day: "May 12", ctaCount: 90 },
    { day: "May 13", ctaCount: 80 },
    { day: "May 14", ctaCount: 95 },
    { day: "May 15", ctaCount: 480 },
    { day: "May 16", ctaCount: 60 },
    { day: "May 17", ctaCount: 75 },
    { day: "May 18", ctaCount: 85 },
    { day: "May 19", ctaCount: 320 },
    { day: "May 20", ctaCount: 65 },
    { day: "May 21", ctaCount: 75 },
  ];

  const languageDistributionData = [
    { name: "Hindi", value: 45, color: "#8e44ad" },
    { name: "English", value: 32, color: "#3498db" },
    { name: "Turkish", value: 15, color: "#e74c3c" },
    { name: "Other", value: 8, color: "#95a5a6" },
  ];

  const hourlyVelocityData = Array.from({ length: 24 }, (_, hour) => ({
    hour: `${hour.toString().padStart(2, '0')}:00`,
    commentCount: Math.floor(Math.random() * 20) + (hour >= 18 && hour <= 21 ? 10 : 5)
  }));

  hourlyVelocityData[18].commentCount = 29; // 18:00 saati için özel değer
  hourlyVelocityData[21].commentCount = 22; // 21:00 saati için özel değer

  const ctaPhrases = [
    { phrase: "boycott immediately", count: 245 },
    { phrase: "cancel your tickets", count: 187 },
    { phrase: "spread the word", count: 134 },
    { phrase: "stop flying with", count: 98 },
  ];

  // Kullanıcı personaları
  const userPersonas = [
    {
      type: "Real Photo",
      percentage: 55,
      examples: 12,
      insights: [
        "More measured criticism, personal stories",
        "Lower toxicity score overall",
        "More detailed arguments"
      ]
    },
    {
      type: "Meme/Political",
      percentage: 25,
      examples: 8,
      insights: [
        "Higher toxicity, more call-to-actions",
        "More likely to use hashtags",
        "More emotional language"
      ]
    },
    {
      type: "Anonymous",
      percentage: 20,
      examples: 6,
      insights: [
        "More extreme statements, higher boycott usage",
        "Shortest comments on average",
        "Higher probability of offensive language"
      ]
    }
  ];

  // En çok etkileşimli yorumlar
  const topEngagementComments = [
    {
      username: "user583",
      date: "May 19",
      engagementScore: 79,
      comment: "We will never fly with Turkish Airlines again! #Boycott",
      tags: ["Boycott", "High Impact"]
    },
    {
      username: "aviator22",
      date: "May 15",
      engagementScore: 64,
      comment: "Canceled all future bookings with THY. Moving to @IndiGo6E for all my travels. #BoycottTurkishAirlines",
      tags: ["Cancellation", "Alternative Airline"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-800">THY Boycott Analysis</h1>
            <p className="text-gray-600">Instagram yorum analizi - Türk Hava Yolları Hindistan çatışması</p>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              <span className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></span>
              <span className="text-sm text-gray-600">Canlı İzleme</span>
            </div>
            <span className="text-sm text-gray-500">Güncelleme: {formattedDate}</span>
          </div>
        </header>

        {/* Navigation Tabs */}
        <Tabs defaultValue="overview" className="mb-8" onValueChange={setActiveTab}>
          <TabsList className="grid grid-cols-4 w-full md:w-auto">
            <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
            <TabsTrigger value="comments">Yorumlar</TabsTrigger>
            <TabsTrigger value="reports">Raporlar</TabsTrigger>
            <TabsTrigger value="settings">Ayarlar</TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Overview Tab Content */}
        <TabsContent value="overview" className="space-y-6">
          {/* Üst Sıra Dashboard Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Daily Comment Volume */}
            <Card className="shadow-md bg-white/90 backdrop-blur-sm md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  Daily Comment Volume
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                      data={dailyCommentVolumeData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <defs>
                        <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                          <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis
                        dataKey="date"
                        tick={{ fontSize: 10 }}
                        angle={-45}
                        textAnchor="end"
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                        width={30}
                      />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="comments"
                        stroke="#3b82f6"
                        fillOpacity={1}
                        fill="url(#colorComments)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-sm mb-2">Zirve Günler:</h4>
                  <div className="flex flex-wrap gap-2">
                    {peakDays.map((day, index) => (
                      <div key={index} className="inline-flex px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                        {day.date}: {formatNumber(day.comments)} yorum
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Sentiment Analysis */}
            <Card className="shadow-md bg-white/90 backdrop-blur-sm md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-blue-500" />
                  Sentiment Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={sentimentData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis
                        dataKey="date"
                        tick={{ fontSize: 10 }}
                        angle={-45}
                        textAnchor="end"
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                        width={30}
                        domain={[-1, 1]}
                        ticks={[-1, -0.5, 0, 0.5, 1]}
                      />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="sentimentScore"
                        name="Duygu Skoru"
                        stroke="#3b82f6"
                        strokeWidth={2}
                      />
                      <Line
                        type="monotone"
                        dataKey="baseline"
                        name="Nötr Çizgisi"
                        stroke="#94a3b8"
                        strokeWidth={1}
                        strokeDasharray="5 5"
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <h4 className="font-medium text-sm mb-2">Ortalama Duygu:</h4>
                  <div className="px-3 py-2 bg-red-100 text-red-800 rounded-md font-medium">
                    Negatif: -0.31
                  </div>

                  <h4 className="font-medium text-sm mt-4 mb-1">Duygu Dağılımı:</h4>
                  <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                    <div className="flex">
                      <div className="bg-red-500 h-6" style={{ width: '68.7%' }}></div>
                      <div className="bg-gray-400 h-6" style={{ width: '25.6%' }}></div>
                      <div className="bg-green-500 h-6" style={{ width: '5.6%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs mt-1">
                    <span className="text-red-600">Negatif: 68.7%</span>
                    <span className="text-gray-600">Nötr: 25.6%</span>
                    <span className="text-green-600">Pozitif: 5.6%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Topic Clustering */}
            <Card className="shadow-md bg-white/90 backdrop-blur-sm md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChartIcon className="h-5 w-5 text-blue-500" />
                  Topic Clustering
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={topicClusteringData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {topicClusteringData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => formatNumber(value)} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 space-y-1.5">
                  {topicClusteringData.slice(0, 4).map((topic, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center">
                        <span 
                          className="inline-block w-3 h-3 mr-2 rounded-sm" 
                          style={{ backgroundColor: topic.color }}
                        ></span>
                        <span>{topic.name}</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span>{formatNumber(topic.value)}</span>
                        <span className="text-red-600">{topic.score}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Orta Sıra Dashboard Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Toxicity Heatmap */}
            <Card className="shadow-md bg-white/90 backdrop-blur-sm md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-red-500" />
                  Toxicity Heatmap
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="overflow-x-auto">
                  <div className="w-full min-w-[400px]">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="flex-1"></div>
                      {[0, 3, 6, 9, 12, 15, 18, 21].map((hour) => (
                        <div key={hour} className="w-8 text-center text-xs font-medium text-gray-600">
                          {hour}
                        </div>
                      ))}
                    </div>
                    
                    {toxicityHeatmapData.map((row, rowIndex) => (
                      <div key={rowIndex} className="flex items-center space-x-2 mb-1">
                        <div className="w-8 text-xs font-medium text-gray-600">{row.day}</div>
                        {Object.entries(row)
                          .filter(([key]) => key.startsWith('hour'))
                          .map(([key, value], cellIndex) => (
                            <div 
                              key={cellIndex}
                              className="w-8 h-8"
                              style={{ 
                                backgroundColor: `rgba(231, 76, 60, ${Number(value)})`,
                                borderRadius: '2px'
                              }}
                            ></div>
                          ))}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-600">Az</span>
                    <div className="w-full mx-2 h-2 bg-gradient-to-r from-red-100 to-red-600 rounded-full"></div>
                    <span className="text-xs text-gray-600">Çok</span>
                  </div>
                  <p className="text-xs text-gray-600 mt-3">
                    Toxicity skoru {'>'} 0.8 olan saatler yüksek alarm olarak sınıflandırılır.
                  </p>
                  <p className="text-xs font-medium text-red-600 mt-1">
                    Kritik saatler: Çarşamba-Cuma akşamları (18:00-22:00)
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Post Boycott Intensity */}
            <Card className="shadow-md bg-white/90 backdrop-blur-sm md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart2 className="h-5 w-5 text-orange-500" />
                  Post Boycott Intensity
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={postBoycottIntensityData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                      barSize={12}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis
                        dataKey="postId"
                        tick={{ fontSize: 10 }}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                        width={30}
                      />
                      <Tooltip />
                      <Bar
                        dataKey="negativePercentage"
                        name="Negatif Oran"
                        fill="#f97316"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2">
                  <h4 className="font-medium text-sm mb-2">En Yüksek Negatif Gönderiler:</h4>
                  <div className="space-y-2">
                    {postBoycottIntensityData
                      .sort((a, b) => b.negativePercentage - a.negativePercentage)
                      .slice(0, 3)
                      .map((post, index) => (
                        <div key={index} className="flex justify-between items-center text-sm">
                          <span>Post #{post.postId} - {post.postDescription}</span>
                          <span className="font-medium text-red-600">{post.negativePercentage}% negatif</span>
                        </div>
                      ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Call-to-Action Detection */}
            <Card className="shadow-md bg-white/90 backdrop-blur-sm md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Flag className="h-5 w-5 text-red-500" />
                  Call-to-Action Detection
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={ctaDetectionData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis
                        dataKey="day"
                        tick={{ fontSize: 10 }}
                        angle={-45}
                        textAnchor="end"
                        axisLine={false}
                        tickLine={false}
                        dy={10}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                        width={30}
                      />
                      <Tooltip formatter={(value) => formatNumber(value)} />
                      <Bar
                        dataKey="ctaCount"
                        name="CTA Sayısı"
                        fill="#ef4444"
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <h4 className="font-medium">Ortalama CTA Oranı:</h4>
                    <span className="px-2 py-1 bg-red-100 text-red-800 rounded-md font-medium">30.5%</span>
                  </div>
                  <div className="flex items-center justify-between text-sm mb-3">
                    <h4 className="font-medium">En Yüksek CTA Günü:</h4>
                    <div className="flex items-center gap-2">
                      <span>May 10</span>
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded-md font-medium">47.0%</span>
                    </div>
                  </div>
                  <h4 className="font-medium text-xs mb-1">En sık kullanılan CTA ifadeleri:</h4>
                  <ul className="text-xs space-y-1">
                    {ctaPhrases.map((phrase, index) => (
                      <li key={index} className="flex items-center">
                        <span className="inline-block w-1 h-1 rounded-full bg-red-500 mr-2"></span>
                        "{phrase.phrase}"
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Alt Sıra Dashboard Kartları */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Language Distribution */}
            <Card className="shadow-md bg-white/90 backdrop-blur-sm md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-purple-500" />
                  Language Distribution
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={languageDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {languageDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {languageDistributionData.map((lang, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span 
                        className="inline-block w-3 h-3 rounded-sm" 
                        style={{ backgroundColor: lang.color }}
                      ></span>
                      <span className="text-sm">{lang.name}: {lang.value}%</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* User Persona Analysis */}
            <Card className="shadow-md bg-white/90 backdrop-blur-sm md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-indigo-500" />
                  User Persona Analysis
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="grid grid-cols-3 gap-2">
                  {userPersonas.map((persona, index) => (
                    <div key={index} className="border rounded-lg p-3 bg-white">
                      <div className="flex flex-col items-center mb-2">
                        <div className={`w-12 h-12 rounded-full ${
                          index === 0 ? 'bg-gradient-to-br from-gray-700 to-gray-900' :
                          index === 1 ? 'bg-gradient-to-br from-orange-400 to-orange-600' :
                          'bg-gradient-to-br from-gray-400 to-gray-500'
                        } flex items-center justify-center text-white mb-2`}>
                          {index === 0 ? 'REAL' : index === 1 ? 'MEME' : 'ANON'}
                        </div>
                        <h4 className="text-sm font-medium">{persona.type}</h4>
                        <p className="text-xs text-gray-500">{persona.percentage}%</p>
                      </div>
                      <p className="text-xs text-gray-600 text-center">{persona.examples} örnekler</p>
                    </div>
                  ))}
                </div>
                <div className="mt-4">
                  <h4 className="text-sm font-medium mb-1">Temel Bulgular:</h4>
                  <ul className="text-xs space-y-2">
                    {userPersonas.map((persona, index) => (
                      <li key={index} className="border-t pt-2">
                        <span className="font-medium text-gray-700">{persona.type}:</span> {persona.insights[0]}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Hourly Velocity Monitor */}
            <Card className="shadow-md bg-white/90 backdrop-blur-sm md:col-span-1 lg:col-span-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-blue-500" />
                  Hourly Velocity Monitor
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={hourlyVelocityData}
                      margin={{ top: 10, right: 10, left: 0, bottom: 20 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis
                        dataKey="hour"
                        tick={{ fontSize: 9 }}
                        interval={3}
                        axisLine={false}
                        tickLine={false}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 10 }}
                        width={30}
                      />
                      <Tooltip 
                        formatter={(value) => [`${value} yorum/dk`, "Hız"]}
                        labelFormatter={(value) => `Saat: ${value}`}
                      />
                      <Bar
                        dataKey="commentCount"
                        name="Yorum/Dakika"
                        fill={(data) => data.commentCount > 20 ? "#ef4444" : "#3b82f6"}
                        radius={[4, 4, 0, 0]}
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2">
                  <h4 className="text-sm font-medium mb-2">Alarm Saatleri:</h4>
                  <div className="flex flex-wrap gap-2">
                    <div className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                      18:00: 29/dk
                    </div>
                    <div className="px-3 py-1 bg-red-100 text-red-800 text-xs font-medium rounded-full">
                      21:00: 22/dk
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-3">
                    Alarm eşiği: {'>'}20 yorum/dk
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Top Engagement Comments */}
          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5 text-indigo-500" />
                Top Engagement Comments
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-4">
                {topEngagementComments.map((comment, index) => (
                  <div key={index} className="border rounded-lg p-4 bg-white">
                    <div className="flex items-start gap-3">
                      <div className="bg-indigo-100 rounded-full w-10 h-10 flex items-center justify-center">
                        <Users className="h-5 w-5 text-indigo-600" />
                      </div>
                      <div className="flex-grow">
                        <div className="flex items-center justify-between mb-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-medium text-gray-800">@{comment.username}</h4>
                            <span className="text-xs text-gray-500">{comment.date}</span>
                          </div>
                          <div className="flex items-center bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded-full text-xs">
                            <span>{comment.engagementScore}</span>
                          </div>
                        </div>
                        <p className="text-gray-700">{comment.comment}</p>
                        <div className="flex gap-2 mt-3">
                          {comment.tags.map((tag, tagIndex) => (
                            <span
                              key={tagIndex}
                              className={`text-xs px-2 py-1 rounded-full ${
                                tag === 'Boycott' ? 'bg-red-100 text-red-800' :
                                tag === 'High Impact' ? 'bg-gray-100 text-gray-800' :
                                tag === 'Cancellation' ? 'bg-orange-100 text-orange-800' :
                                'bg-blue-100 text-blue-800'
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Comments Tab Content - Bu bölüm sadece bir yer tutucu olarak eklenmiştir */}
        <TabsContent value="comments">
          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <p className="text-gray-600">Yorumlar sekmesi içeriği henüz eklenmemiştir.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Reports Tab Content - Bu bölüm sadece bir yer tutucu olarak eklenmiştir */}
        <TabsContent value="reports">
          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <p className="text-gray-600">Raporlar sekmesi içeriği henüz eklenmemiştir.</p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Settings Tab Content - Bu bölüm sadece bir yer tutucu olarak eklenmiştir */}
        <TabsContent value="settings">
          <Card className="shadow-md bg-white/90 backdrop-blur-sm">
            <CardContent className="p-6">
              <p className="text-gray-600">Ayarlar sekmesi içeriği henüz eklenmemiştir.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </div>
    </div>
  );
};

export default ThyBoycottAnalysis;
