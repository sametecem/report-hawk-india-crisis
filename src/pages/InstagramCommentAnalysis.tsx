
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { generateCommentData } from '@/data/instagramCommentsData';
import { formatNumber } from "@/utils/formatting";

// Import refactored components
import SummaryCards from "@/components/instagram-analysis/SummaryCards";
import DailyTab from "@/components/instagram-analysis/DailyTab";
import SentimentTab from "@/components/instagram-analysis/SentimentTab";
import TopicsTab from "@/components/instagram-analysis/TopicsTab";
import EngagementTab from "@/components/instagram-analysis/EngagementTab";
import PersonasTab from "@/components/instagram-analysis/PersonasTab";

const InstagramCommentAnalysis = () => {
  const [activeTab, setActiveTab] = useState("daily");
  const commentData = generateCommentData();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50 p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Instagram Yorum Analizi</h1>
          <p className="text-gray-600 text-lg">Türk Hava Yolları Sosyal Medya Krizi | Boykot Dönemi İnceleme Raporu</p>
        </header>
        
        <SummaryCards 
          metrics={commentData.metrics} 
          formatNumber={formatNumber} 
        />
        
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
            <DailyTab 
              dailyVolume={commentData.dailyVolume}
              peakDays={commentData.peakDays}
              hourlySpeed={commentData.hourlySpeed}
              formatNumber={formatNumber}
            />
          </TabsContent>
          
          {/* Sentiment Analysis Tab */}
          <TabsContent value="sentiment" className="space-y-6">
            <SentimentTab 
              sentimentCurve={commentData.sentimentCurve}
              sentimentDistribution={commentData.sentimentDistribution}
              toxicityByHour={commentData.toxicityByHour}
              metrics={commentData.metrics}
              formatNumber={formatNumber}
            />
          </TabsContent>
          
          {/* Topics Analysis Tab */}
          <TabsContent value="topics" className="space-y-6">
            <TopicsTab 
              topics={commentData.topics}
              metrics={commentData.metrics}
              topCTAPhrases={commentData.topCTAPhrases}
              ctaByHour={commentData.ctaByHour}
              formatNumber={formatNumber}
            />
          </TabsContent>
          
          {/* Engagement Analysis Tab */}
          <TabsContent value="engagement" className="space-y-6">
            <EngagementTab 
              postBoycottIntensity={commentData.postBoycottIntensity}
              topComments={commentData.topComments}
              languageDistribution={commentData.languageDistribution}
              formatNumber={formatNumber}
            />
          </TabsContent>
          
          {/* User Personas Tab */}
          <TabsContent value="personas" className="space-y-6">
            <PersonasTab 
              userPersonas={commentData.userPersonas}
              userActivityPatterns={commentData.userActivityPatterns}
              formatNumber={formatNumber}
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InstagramCommentAnalysis;
