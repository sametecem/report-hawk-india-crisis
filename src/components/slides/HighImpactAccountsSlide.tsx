
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const HighImpactAccountsSlide = () => {
  return (
    <Slide title="13. Appendix: Etki Gücü En Yüksek Hesaplar" bgColor="bg-gradient-to-br from-white via-orange-50 to-orange-100">
      <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Etki Katsayısı (Takipçi x Etkileşim) En Yüksek 5 Kişi</h3>
        <div className="space-y-6 mt-4">
          {[
            { 
              name: "@TwitterUser1", 
              followers: "144.622", 
              engagement: "92.413", 
              impact: "13.365.134.486", 
              color: "bg-gradient-to-r from-orange-400 to-red-500" 
            },
            { 
              name: "@TwitterUser2", 
              followers: "68.935", 
              engagement: "33.814", 
              impact: "2.330.911.890", 
              color: "bg-gradient-to-r from-orange-400 to-amber-500" 
            },
            { 
              name: "@TwitterUser3", 
              followers: "46.371", 
              engagement: "7.294", 
              impact: "338.231.174", 
              color: "bg-gradient-to-r from-amber-400 to-yellow-500" 
            },
            { 
              name: "@TwitterUser4", 
              followers: "32.813", 
              engagement: "5.291", 
              impact: "173.613.683", 
              color: "bg-gradient-to-r from-yellow-400 to-lime-500" 
            },
            { 
              name: "@TwitterUser5", 
              followers: "20.613", 
              engagement: "3.146", 
              impact: "64.846.498", 
              color: "bg-gradient-to-r from-green-400 to-emerald-500" 
            }
          ].map((account, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
              <div className={`h-2 ${account.color}`}></div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`${account.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl`}>{index + 1}</div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                      {account.name}
                      <a 
                        href={`https://twitter.com/${account.name.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600">{account.followers} takipçi</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm text-orange-700 font-medium">Toplam Etkileşim</p>
                    <p className="text-lg font-bold text-orange-800">{account.engagement}</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-sm text-red-700 font-medium">Etki Katsayısı</p>
                    <p className="text-lg font-bold text-red-800">{account.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </Slide>
  );
};

export default HighImpactAccountsSlide;
