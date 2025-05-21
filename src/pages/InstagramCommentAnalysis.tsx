
import React from 'react';
import DailyVolumeChart from '@/components/instagram-analysis/DailyVolumeChart';
import SentimentChart from '@/components/instagram-analysis/SentimentChart';
import EmotionDistributionChart from '@/components/instagram-analysis/EmotionDistributionChart';
import ThemeClusterChart from '@/components/instagram-analysis/ThemeClusterChart';
import PostNegativeRatioChart from '@/components/instagram-analysis/PostNegativeRatioChart';
import CTAHourlyChart from '@/components/instagram-analysis/CTAHourlyChart';
import LanguageDistributionChart from '@/components/instagram-analysis/LanguageDistributionChart';
import UserPersonaChart from '@/components/instagram-analysis/UserPersonaChart';
import ToxicityAnalysisChart from '@/components/instagram-analysis/ToxicityAnalysisChart';
import TopCommentsCard from '@/components/instagram-analysis/TopCommentsCard';

const InstagramCommentAnalysis = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Instagram Yorum Analizi</h1>
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Toksisite Oranı */}
          <ToxicityAnalysisChart />

          {/* En Etkileşimli Yorumlar */}
          <TopCommentsCard />
        </div>
      </div>
    </div>
  );
};

export default InstagramCommentAnalysis;
