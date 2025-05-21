
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { mentionedAccounts, activeAccounts } from '@/data/reportData';

const AccountAnalysisSlide = () => {
  return (
    <Slide title="7. Hesap ve Etkileşim Analizi" bgColor="bg-gradient-to-br from-white via-green-50 to-green-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Sık Bahsedilen 10 Hesap</h3>
          <div className="space-y-3">
            {mentionedAccounts.map((account, index) => (
              <div key={index} className="flex items-center justify-between">
                <a 
                  href={`https://twitter.com/${account.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  {account} <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <span className={`px-2 py-1 rounded text-xs ${
                  index < 3 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                }`}>
                  {index < 3 ? 'Yüksek Etkileşim' : 'Sık Bahsedilen'}
                </span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Çok Tweet Atan 10 Hesap</h3>
          <div className="space-y-2">
            {activeAccounts.map((account, index) => (
              <div key={index} className="flex items-center justify-between">
                <a 
                  href={`https://twitter.com/${account.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800"
                >
                  @{account.name} <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <span className="font-medium">{account.count} tweet</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kullanıcı İstatistikleri</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Tekil Tweet Atan Kullanıcı</h4>
              <p className="text-3xl font-bold text-green-700">512</p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2">En Aktif Kullanıcının Tweet Sayısı</h4>
              <p className="text-3xl font-bold text-blue-700">53</p>
              <p className="text-sm text-blue-600">(@smartyevans)</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2">Ortalama Kullanıcı Başına Tweet</h4>
              <p className="text-3xl font-bold text-purple-700">2.47</p>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default AccountAnalysisSlide;
