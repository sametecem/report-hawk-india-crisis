
import React from "react";
import Slide from "@/components/Slide";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Newspaper } from "lucide-react";

const NewsSlide = () => {
  return (
    <Slide className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center">
        <div className="inline-flex items-center justify-center p-4 bg-blue-100 rounded-full mb-8">
          <Newspaper className="w-8 h-8 text-blue-600" />
        </div>
        <h2 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">
          Güncel Haberler
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Teknoloji ve sosyal medya alanındaki son gelişmeleri takip edin. En güncel haberler ve analizler.
        </p>
        <Button asChild className="text-base px-8 py-6" size="lg">
          <Link to="/news">
            Haberleri Görüntüle
          </Link>
        </Button>
      </div>
    </Slide>
  );
};

export default NewsSlide;
