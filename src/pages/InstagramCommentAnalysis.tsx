import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import DailyVolumeChart from '@/components/instagram-analysis/DailyVolumeChart';
import SentimentChart from '@/components/instagram-analysis/SentimentChart';
import EmotionDistributionChart from '@/components/instagram-analysis/EmotionDistributionChart';
import ThemeClusterChart from '@/components/instagram-analysis/ThemeClusterChart';
import TopCommentsCard from '@/components/instagram-analysis/TopCommentsCard';
import UserPersonaChart from '@/components/instagram-analysis/UserPersonaChart';
import LanguageDistributionChart from '@/components/instagram-analysis/LanguageDistributionChart';
import CTAHourlyChart from '@/components/instagram-analysis/CTAHourlyChart';
import Navigation from '@/components/Navigation';

const InstagramCommentAnalysis = () => {
  return (
    <div className="container mx-auto p-6">
      <Navigation />
      <h1 className="text-3xl font-bold mb-6 text-center">Instagram Yorum Analizi</h1>
      
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="mb-6 grid grid-cols-4 w-full max-w-2xl mx-auto">
          <TabsTrigger value="overview">Genel Bakış</TabsTrigger>
          <TabsTrigger value="sentiment">Duygu Analizi</TabsTrigger>
          <TabsTrigger value="comments">Yorumlar</TabsTrigger>
          <TabsTrigger value="demographics">Demografik</TabsTrigger>
        </TabsList>
        
        <TabsContent value="overview">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <p className="text-gray-600 mb-6">
              1-10 Mayıs 2023 tarihlerinde Instagram&apos;daki THY boykot yorumlarının analizi
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Günlük Yorum Hacmi & Zirveler */}
              <DailyVolumeChart />

              {/* Duygu Eğrisi */}
              <SentimentChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Duygu Dağılımı */}
              <EmotionDistributionChart />

              {/* Tema Kümeleme */}
              <ThemeClusterChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Post Bazlı Boykot Yoğunluğu */}
              <PostNegativeRatioChart />

              {/* CTA Saatlik Dağılımı */}
              <CTAHourlyChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              {/* Dil Dağılımı */}
              <LanguageDistributionChart />

              {/* Kullanıcı Persona Dağılımı */}
              <UserPersonaChart />
            </div>

            <div className="grid grid-cols-1 gap-8">
              {/* Toksisite Oranı */}
              <ToxicityAnalysisChart />
            </div>
          </div>
        </TabsContent>

        <TabsContent value="sentiment">
          {/* Sentiment Analysis */}
        </TabsContent>

        <TabsContent value="comments">
          {/* Top Comments */}
          <TopCommentsCard />
        </TabsContent>

        <TabsContent value="demographics">
          {/* Demographic Analysis */}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default InstagramCommentAnalysis;
