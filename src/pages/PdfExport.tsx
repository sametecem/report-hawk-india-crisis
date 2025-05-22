
import React, { useEffect, useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

// Import all slides
import CoverSlide from '@/components/slides/CoverSlide';
import ExecutiveSummarySlide from '@/components/slides/ExecutiveSummarySlide';
import GeneralStatsSlide from '@/components/slides/GeneralStatsSlide';
import DailyTrendsSlide from '@/components/slides/DailyTrendsSlide';
import SentimentAnalysisSlide from '@/components/slides/SentimentAnalysisSlide';
import PopularTweetsSlide from '@/components/slides/PopularTweetsSlide';
import TopTweetsListSlide from '@/components/slides/TopTweetsListSlide';
import AccountAnalysisSlide from '@/components/slides/AccountAnalysisSlide';
import TopAccountsFollowersSlide from '@/components/slides/TopAccountsFollowersSlide';
import PopularHashtagsSlide from '@/components/slides/PopularHashtagsSlide';
import MostViewedTweetsSlide from '@/components/slides/MostViewedTweetsSlide';
import WordCloudSlide from '@/components/slides/WordCloudSlide';
import ConclusionSlide from '@/components/slides/ConclusionSlide';
import GeographicDistributionSlide from '@/components/slides/GeographicDistributionSlide';
import HighImpactAccountsSlide from '@/components/slides/HighImpactAccountsSlide';
import InstagramAnalysisSlide from '@/components/slides/InstagramAnalysisSlide';
import NewsSlide from '@/components/slides/NewsSlide';
import InstagramAnalysisSlide2 from '@/components/slides/InstagramAnalysisSlide2';
import YouTubeAnalysisSlide from '@/components/slides/YouTubeAnalysisSlide';

const PdfExport = () => {
  const [generating, setGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const slidesRef = useRef<(HTMLDivElement | null)[]>([]);
  const { toast } = useToast();

  // Array of all slide components
  const slides = [
    <CoverSlide key="cover" />,
    <ExecutiveSummarySlide key="executive" />,
    <GeneralStatsSlide key="generalStats" />,
    <DailyTrendsSlide key="dailyTrends" />,
    <SentimentAnalysisSlide key="sentimentAnalysis" />,
    <PopularTweetsSlide key="popularTweets" />,
    <TopTweetsListSlide key="topTweetsList" />,
    <TopAccountsFollowersSlide key="topAccounts" />,
    <AccountAnalysisSlide key="accountAnalysis" />,
    <PopularHashtagsSlide key="popularHashtags" />,
    <MostViewedTweetsSlide key="mostViewedTweets" />,
    <WordCloudSlide key="wordCloud" />,
    <InstagramAnalysisSlide key="instagramAnalysis" />,
    <InstagramAnalysisSlide2 key="instagramAnalysis2" />,
    <NewsSlide key="news" />,
    <YouTubeAnalysisSlide key="youtubeAnalysis" />,
    <HighImpactAccountsSlide key="highImpact" />,
    <GeographicDistributionSlide key="geographic" />,
    <ConclusionSlide key="conclusion" />
  ];

  // Set up refs for each slide
  useEffect(() => {
    slidesRef.current = slidesRef.current.slice(0, slides.length);
  }, [slides.length]);

  const generatePDF = async () => {
    setGenerating(true);
    setProgress(0);
    
    try {
      // Create a new PDF document in A4 landscape format
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
      });
      
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      
      // Process each slide
      for (let i = 0; i < slidesRef.current.length; i++) {
        const slideElement = slidesRef.current[i];
        
        if (slideElement) {
          // Convert the slide to canvas
          const canvas = await html2canvas(slideElement, {
            scale: 2, // Higher scale for better quality
            logging: false,
            useCORS: true, // Allow images from other domains
            allowTaint: true
          });
          
          // Add the canvas to the PDF
          const imgData = canvas.toDataURL('image/png');
          if (i > 0) {
            doc.addPage();
          }
          
          // Add the image to fit within the page
          doc.addImage(imgData, 'PNG', 0, 0, width, height, `slide-${i}`, 'FAST');
          
          // Update progress
          setProgress(Math.round(((i + 1) / slides.length) * 100));
        }
      }
      
      // Save the PDF
      doc.save('THY_Hindistan_Krizi_Raporu.pdf');
      
      toast({
        title: "PDF başarıyla oluşturuldu",
        description: "Rapor indiriliyor...",
        duration: 3000,
      });
    } catch (error) {
      console.error("PDF oluşturma hatası:", error);
      
      toast({
        title: "Hata",
        description: "PDF oluşturulurken bir hata oluştu. Lütfen tekrar deneyin.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Card className="p-6 shadow-lg bg-white">
          <h1 className="text-3xl font-bold mb-2 text-gray-800">PDF Rapor Oluştur</h1>
          <p className="text-gray-600 mb-6">
            THY Hindistan Krizi Monitoring Raporu'nu PDF formatında indirmek için aşağıdaki butona tıklayın.
          </p>
          
          <Button 
            onClick={generatePDF} 
            disabled={generating}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg flex items-center"
          >
            {generating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> 
                PDF Oluşturuluyor ({progress}%)
              </>
            ) : (
              'PDF Oluştur ve İndir'
            )}
          </Button>
          
          {generating && (
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full transition-all duration-300" 
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">Lütfen bekleyin... Bu işlem birkaç dakika sürebilir.</p>
            </div>
          )}
        </Card>
      </div>
      
      {/* Hidden slides for PDF generation */}
      <div className="hidden">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            ref={el => slidesRef.current[index] = el} 
            className="w-[1066px] h-[800px] overflow-hidden"
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfExport;
