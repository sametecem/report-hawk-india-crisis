
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import Image from '@/components/ui/Image';

const GeographicDistributionSlide = () => {
  return (
    <Slide title="Appendix: Coğrafi Dağılım Analizi" bgColor="bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Global Etkileşim Haritası</h3>
          <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center mb-4">
            <Image 
              src="/placeholder.svg" 
              alt="Global Etkileşim Haritası" 
              width={800} 
              height={400} 
              className="rounded-lg object-cover"
            />
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <p className="text-sm text-blue-800 font-medium">Hindistan</p>
              <p className="text-xl font-bold text-blue-700">68.4%</p>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <p className="text-sm text-green-800 font-medium">Pakistan</p>
              <p className="text-xl font-bold text-green-700">14.1%</p>
            </div>
            <div className="bg-amber-50 p-3 rounded-lg">
              <p className="text-sm text-amber-800 font-medium">Türkiye</p>
              <p className="text-xl font-bold text-amber-700">9.2%</p>
            </div>
            <div className="bg-purple-50 p-3 rounded-lg">
              <p className="text-sm text-purple-800 font-medium">Diğer</p>
              <p className="text-xl font-bold text-purple-700">8.3%</p>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Bölgesel Dağılım</h3>
          <div className="space-y-4 mt-2">
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                    Delhi
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-blue-600">
                    31%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-200">
                <div style={{ width: "31%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"></div>
              </div>
            </div>
            
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-green-600 bg-green-200">
                    Mumbai
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-green-600">
                    24%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-green-200">
                <div style={{ width: "24%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"></div>
              </div>
            </div>
            
            <div className="relative pt-1">
              <div className="flex mb-2 items-center justify-between">
                <div>
                  <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-amber-600 bg-amber-200">
                    İslamabad
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-xs font-semibold inline-block text-amber-600">
                    16%
                  </span>
                </div>
              </div>
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-amber-200">
                <div style={{ width: "16%" }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-amber-500"></div>
              </div>
            </div>
          </div>
        </Card>
        
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Dil Analizi</h3>
          <div className="space-y-4 mt-2">
            <div className="flex items-center justify-between">
              <span className="font-medium">İngilizce</span>
              <span className="font-bold text-blue-600">64.2%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Hindi</span>
              <span className="font-bold text-green-600">22.7%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Urduca</span>
              <span className="font-bold text-amber-600">7.8%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Türkçe</span>
              <span className="font-bold text-purple-600">4.5%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-medium">Diğer</span>
              <span className="font-bold text-gray-600">0.8%</span>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default GeographicDistributionSlide;
