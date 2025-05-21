
import React from 'react';
import Slide from '@/components/Slide';
import Table from '@/components/Table';
import { Card } from '@/components/ui/card';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from "recharts";
import { Users, Twitter } from 'lucide-react';
import { topFollowers } from '@/data/reportData';

const TopAccountsFollowersSlide = () => {
  return (
    <Slide 
      title="7. En Çok Takipçisi Olan Hesaplar" 
      subtitle="Raporlama dönemi etkileşimi yüksek hesaplar"
      bgColor="bg-gradient-to-br from-white via-blue-50 to-blue-100"
    >
      <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
        <div className="flex items-center gap-2 mb-4">
          <Users className="w-5 h-5 text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">En Yüksek Takipçili 10 Hesap</h3>
        </div>
        
        <Table
          headers={["Sıra", "Kullanıcı Adı", "İsim", "Takipçi Sayısı", ""]}
          rows={topFollowers.slice(0, 10).map((account, index) => [
            index + 1,
            `@${account.handle}`,
            account.name,
            new Intl.NumberFormat('tr-TR').format(account.followers),
            <a 
              href={`https://twitter.com/${account.handle}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-500 hover:text-blue-700"
            >
              <Twitter className="h-4 w-4 mr-1" />
              <span>Profil</span>
            </a>
          ])}
          highlightFirstColumn={true}
          hoverEffect={true}
        />

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-medium text-blue-900 mb-2">
              En Yüksek Takipçi Sayısı
            </h4>
            <div className="flex items-end gap-2">
              <span className="text-2xl font-bold text-blue-700">
                {new Intl.NumberFormat('tr-TR').format(topFollowers[0].followers)}
              </span>
              <span className="text-blue-600">(@{topFollowers[0].handle})</span>
            </div>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h4 className="font-medium text-indigo-900 mb-2">
              Toplam Potansiyel Erişim (İlk 10)
            </h4>
            <div className="text-2xl font-bold text-indigo-700">
              {new Intl.NumberFormat('tr-TR').format(
                topFollowers.slice(0, 10).reduce((sum, account) => sum + account.followers, 0)
              )}
            </div>
          </div>
        </div>
      </Card>

      <div className="mt-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={topFollowers.slice(0, 10).map(account => ({
                  name: `@${account.handle}`,
                  followers: account.followers
                }))}
                margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                  dataKey="name" 
                  angle={-45} 
                  textAnchor="end"
                  height={80}
                  tick={{ fontSize: 12 }}
                />
                <YAxis />
                <Tooltip 
                  formatter={(value: number) => [`${new Intl.NumberFormat('tr-TR').format(value)} takipçi`, "Takipçi Sayısı"]}
                />
                <Bar dataKey="followers" fill="#3b82f6">
                  {topFollowers.slice(0, 10).map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={index === 0 ? "#2563eb" : index < 3 ? "#3b82f6" : "#60a5fa"} 
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default TopAccountsFollowersSlide;
