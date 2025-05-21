
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';

const GeographicDistributionSlide = () => {
  return (
    <Slide title="12. Appendix: Coğrafi ve Demografik Dağılım" bgColor="bg-gradient-to-br from-white via-teal-50 to-teal-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">Coğrafi Dağılım (Tweet Hacmine Göre)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
              <h4 className="font-bold text-teal-800 mb-2">Top 3 Şehir</h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Mumbai:</span>
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm">%38</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Delhi:</span>
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm">%26</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Bangalore:</span>
                  <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm">%11</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-100">
              <h4 className="font-bold text-indigo-800 mb-2">Top 3 Eyalet</h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Maharashtra:</span>
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">%42</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Delhi (NCR):</span>
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">%28</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Karnataka:</span>
                  <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">%13</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
            <h4 className="font-bold text-blue-800 mb-2">Bölgesel Dağılım</h4>
            <ul className="space-y-3">
              <li className="flex justify-between items-center">
                <span className="font-medium">Batı Bölgesi:</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">%45</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium">Kuzey Bölgesi:</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">%31</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium">Güney Bölgesi:</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">%18</span>
              </li>
              <li className="flex justify-between items-center">
                <span className="font-medium">Doğu Bölgesi:</span>
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">%6</span>
              </li>
            </ul>
          </div>
        </Card>

        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Tahmini Demografik Analiz</h3>
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Yaş Dağılımı (Tahmin)</h4>
              <div className="space-y-3">
                {[
                  { age: "18-24", percent: 18, color: "bg-pink-500" },
                  { age: "25-34", percent: 42, color: "bg-purple-500" },
                  { age: "35-44", percent: 26, color: "bg-indigo-500" },
                  { age: "45-54", percent: 11, color: "bg-blue-500" },
                  { age: "55+", percent: 3, color: "bg-cyan-500" }
                ].map((item, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium text-gray-700">{item.age}</span>
                      <span className="font-bold text-gray-800">%{item.percent}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className={`h-2 rounded-full ${item.color}`} style={{width: `${item.percent}%`}}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-700 mb-3">Cinsiyet Dağılımı (Tahmin)</h4>
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 rounded-lg p-3 flex-1 text-center">
                  <div className="text-2xl font-bold text-blue-700">%73</div>
                  <div className="text-sm text-blue-600">Erkek</div>
                </div>
                <div className="bg-pink-100 rounded-lg p-3 flex-1 text-center">
                  <div className="text-2xl font-bold text-pink-700">%27</div>
                  <div className="text-sm text-pink-600">Kadın</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
            <h4 className="font-bold text-teal-800 mb-2">Not:</h4>
            <p className="text-teal-700 text-sm">
              Demografik ve coğrafi veriler, kullanıcı profillerindeki bilgiler ve makine öğrenimi modelleri kullanılarak tahmin edilmiştir. Kesin değil, yaklaşık değerlerdir.
            </p>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default GeographicDistributionSlide;
