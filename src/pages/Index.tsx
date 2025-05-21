import React from 'react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">Sosyal Medya Analizi</h1>
          <p className="text-xl text-gray-600">Türkiye Havayolları Markanızın Sosyal Medya Performansı</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Twitter Analizi</h2>
            <p className="text-gray-600 mb-6">
              Twitter üzerindeki marka performansı ve kriz analizi
            </p>
            <Link
              to="/twitter-report"
              className="inline-block py-3 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Twitter Raporu
            </Link>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Instagram Yorum Analizi</h2>
            <p className="text-gray-600 mb-6">
              Instagram gönderilerindeki yorumların detaylı inceleme raporu
            </p>
            <Link
              to="/instagram-comments"
              className="inline-block py-3 px-6 bg-violet-600 hover:bg-violet-700 text-white font-medium rounded-lg transition-colors"
            >
              Instagram Raporu
            </Link>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">THY Boycott Analizi</h2>
          <p className="text-gray-600 mb-6">
            Türk Hava Yolları Hindistan Krizi ve Boykot Analiz Raporu
          </p>
          <Link
            to="/thy-boycott"
            className="inline-block py-3 px-6 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
          >
            Boykot Analiz Raporu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
