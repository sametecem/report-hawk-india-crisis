
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

const HighImpactAccountsSlide = () => {
  return (
    <Slide title="Appendix: Etki Gücü En Yüksek Hesaplar" bgColor="bg-gradient-to-br from-white via-orange-50 to-orange-100">
      <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
        <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Etki Katsayısı En Yüksek 10 Hesap</h3>
        <div className="space-y-6 mt-4">
          {[
            { 
              name: "@Kisna179", 
              followers: "177", 
              views: "5.686", 
              impact: "32 ×", 
              color: "bg-gradient-to-r from-orange-400 to-red-500" 
            },
            { 
              name: "@gogoi51422", 
              followers: "533", 
              views: "16.978", 
              impact: "31,9 ×", 
              color: "bg-gradient-to-r from-orange-400 to-amber-500" 
            },
            { 
              name: "@biyatchwhatup", 
              followers: "256", 
              views: "6.110", 
              impact: "23,9 ×", 
              color: "bg-gradient-to-r from-amber-400 to-yellow-500" 
            },
            { 
              name: "@prawasitv", 
              followers: "1.575", 
              views: "30.448", 
              impact: "19,3 ×", 
              color: "bg-gradient-to-r from-yellow-400 to-lime-500" 
            },
            { 
              name: "@smartyevans", 
              followers: "130", 
              views: "2.371", 
              impact: "18,2 ×", 
              color: "bg-gradient-to-r from-green-400 to-emerald-500" 
            },
            { 
              name: "@RepublicHindu5", 
              followers: "355", 
              views: "6.103", 
              impact: "17,2 ×", 
              color: "bg-gradient-to-r from-emerald-400 to-teal-500" 
            },
            { 
              name: "@RJainaviation", 
              followers: "673", 
              views: "9.060", 
              impact: "13,5 ×", 
              color: "bg-gradient-to-r from-teal-400 to-cyan-500" 
            },
            { 
              name: "@pande_krish", 
              followers: "181", 
              views: "2.192", 
              impact: "12,1 ×", 
              color: "bg-gradient-to-r from-cyan-400 to-blue-500" 
            },
            { 
              name: "@CHANDANIMAYANK", 
              followers: "117", 
              views: "1.392", 
              impact: "11,9 ×", 
              color: "bg-gradient-to-r from-blue-400 to-indigo-500" 
            },
            { 
              name: "@seetharamankc", 
              followers: "633", 
              views: "7.486", 
              impact: "11,8 ×", 
              color: "bg-gradient-to-r from-indigo-400 to-purple-500" 
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
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-700 font-medium">Toplam Gösterim</p>
                    <p className="text-lg font-bold text-blue-800">{account.views}</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-sm text-purple-700 font-medium">Etki Katsayısı</p>
                    <p className="text-lg font-bold text-purple-800">{account.impact}</p>
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
