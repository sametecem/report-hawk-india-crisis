
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThyBoycottAnalysis from "./pages/ThyBoycottAnalysis";
import InstagramCommentAnalysis from "./pages/InstagramCommentAnalysis";
import NewsPage from "./pages/NewsPage";
import PdfExport from "./pages/PdfExport";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/thy-boycott-analysis" element={<ThyBoycottAnalysis />} />
          <Route path="/instagram-comment-analysis" element={<InstagramCommentAnalysis />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/pdf" element={<PdfExport />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
