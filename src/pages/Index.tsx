
import React from "react";
import SlideShow from "@/components/SlideShow";

// Import refactored slide components
import CoverSlide from "@/components/slides/CoverSlide";
import ExecutiveSummarySlide from "@/components/slides/ExecutiveSummarySlide";
import GeneralStatsSlide from "@/components/slides/GeneralStatsSlide";
import DailyTrendsSlide from "@/components/slides/DailyTrendsSlide";
import SentimentAnalysisSlide from "@/components/slides/SentimentAnalysisSlide";
import PopularTweetsSlide from "@/components/slides/PopularTweetsSlide";
import TopTweetsListSlide from "@/components/slides/TopTweetsListSlide";
import AccountAnalysisSlide from "@/components/slides/AccountAnalysisSlide";
import TopAccountsFollowersSlide from "@/components/slides/TopAccountsFollowersSlide";
import PopularHashtagsSlide from "@/components/slides/PopularHashtagsSlide";
import MostViewedTweetsSlide from "@/components/slides/MostViewedTweetsSlide";
import WordCloudSlide from "@/components/slides/WordCloudSlide";
import ConclusionSlide from "@/components/slides/ConclusionSlide";
import GeographicDistributionSlide from "@/components/slides/GeographicDistributionSlide";
import HighImpactAccountsSlide from "@/components/slides/HighImpactAccountsSlide";
import InstagramAnalysisSlide from "@/components/slides/InstagramAnalysisSlide";
import NewsSlide from "@/components/slides/NewsSlide";
import InstagramAnalysisSlide2 from "@/components/slides/InstagramAnalysisSlide2";

export default function Index() {
  return (
    <SlideShow>
      <CoverSlide />
      <ExecutiveSummarySlide />
      <GeneralStatsSlide />
      <DailyTrendsSlide />
      <SentimentAnalysisSlide />
      <PopularTweetsSlide />
      <TopTweetsListSlide />
      <TopAccountsFollowersSlide />
      <AccountAnalysisSlide />
      <PopularHashtagsSlide />
      <MostViewedTweetsSlide />
      <WordCloudSlide />
      <InstagramAnalysisSlide />
      <InstagramAnalysisSlide2 />
      <NewsSlide />
      <ConclusionSlide />
      <HighImpactAccountsSlide />
      <GeographicDistributionSlide />
    </SlideShow>
  );
}
