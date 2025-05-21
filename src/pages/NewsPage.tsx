
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Calendar, Globe, FileText } from 'lucide-react';
import Image from '@/components/ui/Image';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

interface NewsItem {
  id: number;
  title: string;
  date: string;
  source: string;
  summary: string;
  url: string;
  imageUrl: string;
}

// Örnek haberler
const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Yapay Zeka Alanında Son Gelişmeler",
    date: "22 Mayıs 2025",
    source: "techhaber.com",
    summary: "Yapay zeka teknolojileri son bir yılda hızla gelişiyor. Yeni modeller insan benzeri yetenekler sergiliyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    id: 2,
    title: "Türkiye'nin Sosyal Medya Kullanımı Arttı",
    date: "21 Mayıs 2025",
    source: "dijitalanaliz.org",
    summary: "Türkiye'de sosyal medya kullanıcı sayısı son 6 ayda %15 artış gösterdi, Instagram ve Twitter başı çekiyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 3,
    title: "Siber Güvenlik Tehditleri 2025",
    date: "20 Mayıs 2025",
    source: "guvenlikhaber.net",
    summary: "2025'in ilk çeyreğinde fidye yazılımı saldırıları %30 artış gösterdi. Uzmanlar şirketleri önlem almaya çağırıyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 4,
    title: "Yazılım Geliştiriciler İçin Yeni Trendler",
    date: "19 Mayıs 2025",
    source: "yazilimdunyasi.com",
    summary: "Modern yazılım geliştirme trendleri arasında mikroservisler ve sunucusuz mimari ön plana çıkıyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 5,
    title: "Veri Analizi Sektöründe İş Fırsatları",
    date: "18 Mayıs 2025",
    source: "kariyerteknoloji.com",
    summary: "Veri bilimi ve analitik alanında uzman arayanların sayısı son bir yılda iki katına çıktı.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 6,
    title: "E-ticaret Platformlarında Yeni Teknolojiler",
    date: "17 Mayıs 2025",
    source: "eticarethaber.com",
    summary: "Online alışveriş siteleri yapay zeka destekli kişiselleştirme özellikleriyle müşteri deneyimini artırıyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

// Günlük haber sayısı verisi
const dailyNewsData = [
  { day: "Pzt", count: 15 },
  { day: "Sal", count: 22 },
  { day: "Çar", count: 18 },
  { day: "Per", count: 25 },
  { day: "Cum", count: 30 },
  { day: "Cmt", count: 12 },
  { day: "Paz", count: 8 }
];

// Duygu analizi verileri
const sentimentData = [
  { name: "Pozitif", value: 45, color: "#22c55e" },
  { name: "Nötr", value: 30, color: "#9ca3af" },
  { name: "Negatif", value: 25, color: "#ef4444" }
];

// Kelime bulutu için örnek veriler
const wordCloudData = [
  { text: "Teknoloji", size: 40 },
  { text: "Yapay Zeka", size: 35 },
  { text: "Sosyal Medya", size: 30 },
  { text: "Siber Güvenlik", size: 25 },
  { text: "Veri Analizi", size: 25 },
  { text: "Yazılım", size: 20 },
  { text: "Blockchain", size: 18 },
  { text: "İnovasyon", size: 18 },
  { text: "Bulut", size: 15 },
  { text: "Mobil", size: 15 },
  { text: "Otomasyon", size: 15 },
  { text: "Metaverse", size: 12 },
  { text: "NFT", size: 12 },
  { text: "Kripto", size: 10 },
  { text: "E-ticaret", size: 10 }
];

const NewsCard = ({ news }: { news: NewsItem }) => {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-40 w-full">
        <Image 
          src={`${news.imageUrl}?w=600&auto=format&fit=crop&q=80`} 
          alt={news.title}
          className="w-full h-full object-cover" 
        />
      </div>
      <CardHeader className="p-4 pb-0">
        <CardTitle className="text-lg font-bold line-clamp-2">{news.title}</CardTitle>
        <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
          <Calendar className="h-3 w-3" />
          <span>{news.date}</span>
          <Globe className="h-3 w-3 ml-2" />
          <span>{news.source}</span>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <CardDescription className="line-clamp-3 text-sm text-gray-600 mb-3">
          {news.summary}
        </CardDescription>
        <a 
          href={news.url} 
          className="inline-flex items-center text-xs font-medium text-blue-600 hover:text-blue-800"
        >
          <FileText className="mr-1 h-3 w-3" />
          Haberi Oku
        </a>
      </CardContent>
    </Card>
  );
};

// Kelime bulutu bileşeni
const WordCloud = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Popüler Kelimeler</h2>
      <div className="flex flex-wrap justify-center p-4">
        {wordCloudData.map((word, index) => {
          // Boyuta göre renk belirleme
          const getColor = () => {
            if (word.size > 30) return "text-blue-600";
            if (word.size > 20) return "text-purple-600";
            if (word.size > 15) return "text-green-600";
            return "text-gray-600";
          };
          
          return (
            <span 
              key={index} 
              className={`${getColor()} font-medium px-3 py-2`}
              style={{ fontSize: `${word.size / 10 + 0.8}rem` }}
            >
              {word.text}
            </span>
          );
        })}
      </div>
    </div>
  );
};

// Duygu analizi grafiği bileşeni
const SentimentAnalysisChart = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Haber Duygu Analizi</CardTitle>
        <CardDescription>Haberlerin duygu dağılımı</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={sentimentData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {sentimentData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => `${value}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};

const NewsPage = () => {
  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <div className="flex flex-wrap justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-2">Güncel Haberler</h1>
            <p className="text-gray-600">
              Teknoloji ve sosyal medya alanındaki en son gelişmeler
            </p>
          </div>
          <Card className="p-4 bg-blue-50 border-blue-200 w-full lg:w-auto mt-4 lg:mt-0">
            <div className="flex items-center gap-3">
              <div className="text-4xl font-bold text-blue-600">{newsData.length}</div>
              <div className="text-sm text-gray-600">
                <div className="font-medium">Güncel Haber</div>
                <div>Son 7 gün içinde</div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mb-10">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">Günlük Haber Sayısı</h2>
          <div className="w-full h-64 bg-gray-50 rounded-lg border p-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyNewsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="day" stroke="#888" />
                <YAxis stroke="#888" />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="count" 
                  name="Haber Sayısı" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <SentimentAnalysisChart />
          <WordCloud />
        </div>

        <h2 className="text-xl font-semibold text-gray-700 mb-4">Öne Çıkan Haberler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {newsData.map(news => (
            <NewsCard key={news.id} news={news} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
