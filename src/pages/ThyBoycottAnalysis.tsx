
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { Card } from '@/components/ui/card';

// Mock data for the charts
const hourlyData = [
  { hour: '00:00', commentCount: 5, engagement: 15 },
  { hour: '01:00', commentCount: 3, engagement: 10 },
  { hour: '02:00', commentCount: 2, engagement: 8 },
  { hour: '03:00', commentCount: 1, engagement: 5 },
  { hour: '04:00', commentCount: 1, engagement: 3 },
  { hour: '05:00', commentCount: 2, engagement: 7 },
  { hour: '06:00', commentCount: 8, engagement: 20 },
  { hour: '07:00', commentCount: 15, engagement: 35 },
  { hour: '08:00', commentCount: 25, engagement: 55 },
  { hour: '09:00', commentCount: 30, engagement: 70 },
  { hour: '10:00', commentCount: 28, engagement: 65 },
  { hour: '11:00', commentCount: 35, engagement: 80 },
  { hour: '12:00', commentCount: 40, engagement: 95 },
  { hour: '13:00', commentCount: 38, engagement: 90 },
  { hour: '14:00', commentCount: 42, engagement: 100 },
  { hour: '15:00', commentCount: 45, engagement: 110 },
  { hour: '16:00', commentCount: 48, engagement: 115 },
  { hour: '17:00', commentCount: 50, engagement: 120 },
  { hour: '18:00', commentCount: 47, engagement: 115 },
  { hour: '19:00', commentCount: 45, engagement: 105 },
  { hour: '20:00', commentCount: 40, engagement: 95 },
  { hour: '21:00', commentCount: 35, engagement: 85 },
  { hour: '22:00', commentCount: 25, engagement: 65 },
  { hour: '23:00', commentCount: 15, engagement: 45 },
];

const dailyData = [
  { date: '15 May', commentCount: 245, engagement: 580 },
  { date: '16 May', commentCount: 285, engagement: 620 },
  { date: '17 May', commentCount: 312, engagement: 700 },
  { date: '18 May', commentCount: 456, engagement: 1020 },
  { date: '19 May', commentCount: 865, engagement: 1950 },
  { date: '20 May', commentCount: 1245, engagement: 3200 },
  { date: '21 May', commentCount: 2150, engagement: 5400 },
  { date: '22 May', commentCount: 1850, engagement: 4800 },
  { date: '23 May', commentCount: 1250, engagement: 3500 },
  { date: '24 May', commentCount: 950, engagement: 2800 },
  { date: '25 May', commentCount: 720, engagement: 2100 },
];

const hashtagData = [
  { name: '#THYboycott', count: 12500 },
  { name: '#BoycottTHY', count: 10200 },
  { name: '#SupportPalestine', count: 8700 },
  { name: '#TurkishAirlines', count: 7500 },
  { name: '#FreePalestine', count: 6500 },
  { name: '#StopIsrael', count: 5800 },
  { name: '#NoToTHY', count: 4700 },
  { name: '#THYfail', count: 3500 },
  { name: '#BoycottFlights', count: 2900 },
];

const countryData = [
  { name: 'Turkey', count: 28500 },
  { name: 'Pakistan', count: 22700 },
  { name: 'Egypt', count: 19800 },
  { name: 'Saudi Arabia', count: 17300 },
  { name: 'Indonesia', count: 15200 },
  { name: 'Malaysia', count: 13500 },
  { name: 'Qatar', count: 11800 },
  { name: 'UAE', count: 9700 },
  { name: 'Jordan', count: 8500 },
  { name: 'India', count: 6800 },
];

const ThyBoycottAnalysis = () => {
  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-2">THY Boykot Analizi</h1>
        <p className="text-xl text-gray-600 mb-8">
          24 Mayıs 2023 - 30 Mayıs 2023 tarihleri arası sosyal medya verileri
        </p>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 shadow-md">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Toplam Tweet</h3>
            <p className="text-3xl font-bold">125,742</p>
            <p className="text-emerald-500 text-sm font-medium mt-2">+428% son hafta</p>
          </Card>
          <Card className="p-6 shadow-md">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Toplam Etkileşim</h3>
            <p className="text-3xl font-bold">3.2M</p>
            <p className="text-emerald-500 text-sm font-medium mt-2">+512% son hafta</p>
          </Card>
          <Card className="p-6 shadow-md">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Toplam Hesap</h3>
            <p className="text-3xl font-bold">32,568</p>
            <p className="text-emerald-500 text-sm font-medium mt-2">+187% son hafta</p>
          </Card>
          <Card className="p-6 shadow-md">
            <h3 className="text-gray-500 text-sm font-medium mb-2">Tahmini Erişim</h3>
            <p className="text-3xl font-bold">46.5M</p>
            <p className="text-emerald-500 text-sm font-medium mt-2">+642% son hafta</p>
          </Card>
        </div>

        {/* Hourly Activity Chart */}
        <Card className="p-6 shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6">Saatlik Aktivite</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={hourlyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip formatter={(value: number) => [value, 'Yorum Sayısı']} />
              <Legend />
              <Bar 
                dataKey="commentCount" 
                name="Yorum/Dakika" 
                fill={(data: any) => {
                  return data.commentCount > 20 ? "#ef4444" : "#3b82f6";
                }}
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Daily Trend Chart */}
        <Card className="p-6 shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6">Günlük Trend</h2>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={dailyData} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value: number) => [value, 'Yorum Sayısı']} />
              <Legend />
              <Area type="monotone" dataKey="commentCount" name="Yorum Sayısı" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
              <Area type="monotone" dataKey="engagement" name="Etkileşim" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Top Hashtags */}
        <Card className="p-6 shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6">Popüler Hashtagler</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={hashtagData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip formatter={(value: number) => [value, 'Kullanım Sayısı']} />
              <Legend />
              <Bar 
                dataKey="count" 
                name="Kullanım Sayısı" 
                fill="#8884d8" 
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Countries Distribution */}
        <Card className="p-6 shadow-md mb-8">
          <h2 className="text-2xl font-bold mb-6">Ülkelere Göre Dağılım</h2>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={countryData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={80} />
              <Tooltip formatter={(value: number) => [value, 'Tweet Sayısı']} />
              <Legend />
              <Bar 
                dataKey="count" 
                name="Tweet Sayısı" 
                fill="#f97316" 
                radius={[0, 4, 4, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Conclusion */}
        <Card className="p-6 shadow-md">
          <h2 className="text-2xl font-bold mb-4">Özet Değerlendirme</h2>
          <p className="text-gray-700 mb-4">
            24-30 Mayıs 2023 tarihleri arasında THY boykot kampanyası sosyal medyada yüksek bir ivme kazandı. 
            Özellikle 21 Mayıs günü zirve yapan etkileşimler, sonraki günlerde kısmi bir düşüş gösterse de normal 
            seviyelerin çok üzerinde kalmaya devam ediyor.
          </p>
          <p className="text-gray-700 mb-4">
            Kampanyanın en aktif olduğu ülkeler Türkiye, Pakistan ve Mısır olarak öne çıkıyor. 
            Kampanyayı destekleyen içerikler özellikle 12:00-18:00 saatleri arasında yoğunlaşıyor.
          </p>
          <p className="text-gray-700 mb-4">
            En sık kullanılan hashtagler #THYboycott ve #BoycottTHY olurken, bunları Filistin'i destekleyen hashtagler takip ediyor.
            Kullanıcıların %78'i mobil cihazlardan katılıyor ve içeriklerin %62'si görsel içerik barındırıyor.
          </p>
          <p className="text-gray-700">
            Boykot çağrılarının marka imajı üzerindeki tahmini etkisi orta-yüksek seviyede değerlendiriliyor. 
            Krizin yönetimi için proaktif iletişim stratejilerinin geliştirilmesi ve özellikle uluslararası paydaşlara 
            yönelik şeffaf bilgilendirme öneriliyor.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default ThyBoycottAnalysis;
