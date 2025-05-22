
import React from 'react';
import { Link } from 'react-router-dom';
import { FileDown, Home, BarChart2, Instagram, Newspaper } from 'lucide-react';

const Navigation = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-white/80 backdrop-blur-md rounded-full shadow-lg px-2 py-1 flex items-center space-x-1">
        <Link 
          to="/"
          className="p-2 hover:bg-blue-100 rounded-full transition-colors" 
          title="Ana Sayfa"
        >
          <Home className="w-5 h-5 text-blue-600" />
        </Link>
        <Link 
          to="/thy-boycott-analysis"
          className="p-2 hover:bg-blue-100 rounded-full transition-colors" 
          title="THY Boykot Analizi"
        >
          <BarChart2 className="w-5 h-5 text-blue-600" />
        </Link>
        <Link 
          to="/instagram-comment-analysis"
          className="p-2 hover:bg-blue-100 rounded-full transition-colors" 
          title="Instagram Yorum Analizi"
        >
          <Instagram className="w-5 h-5 text-blue-600" />
        </Link>
        <Link 
          to="/news"
          className="p-2 hover:bg-blue-100 rounded-full transition-colors" 
          title="Haberler"
        >
          <Newspaper className="w-5 h-5 text-blue-600" />
        </Link>
        <Link 
          to="/pdf"
          className="p-2 hover:bg-red-100 rounded-full transition-colors" 
          title="PDF Oluştur"
        >
          <FileDown className="w-5 h-5 text-red-600" />
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
