
import React from 'react';
import Slide from '@/components/Slide';

const CoverSlide = () => {
  return (
    <Slide bgColor="bg-gradient-to-br from-white via-blue-50 to-indigo-100">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-blue-100 max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
            THY Hindistan Krizi Monitoring Raporu
          </h1>
          <div className="space-y-4">
            <p className="text-lg md:text-xl text-gray-700">
              <span className="font-medium">Rapor Dönemi:</span> 23 Nisan 2025 – 21 Mayıs 2025
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              <span className="font-medium">Hazırlayan:</span> AI Monitoring | Data Analiz Ekibi
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              <span className="font-medium">Kapsam:</span> Twitter (1.266 özgün içerik)
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              <span className="font-medium">Hazırlanma Tarihi:</span> 21 Mayıs 2025
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
};

export default CoverSlide;
