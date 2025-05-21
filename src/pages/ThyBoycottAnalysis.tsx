
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, Area, AreaChart, Line, LineChart, PieChart, Pie, Cell 
} from 'recharts';
import { 
  Card, CardContent, CardDescription, CardFooter, 
  CardHeader, CardTitle 
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

const ThyBoycottAnalysis = () => {
  // Sample data for Instagram Comment Sentiment Analysis
  const sentimentData = [
    { name: 'Olumlu', value: 30, color: '#3b82f6' },
    { name: 'Olumsuz', value: 70, color: '#ef4444' },
  ];

  // Sample data for Daily Instagram Comments
  const dailyCommentsData = [
    { date: '1 Mayıs', comments: 120 },
    { date: '2 Mayıs', comments: 145 },
    { date: '3 Mayıs', comments: 230 },
    { date: '4 Mayıs', comments: 380 },
    { date: '5 Mayıs', comments: 490 },
    { date: '6 Mayıs', comments: 520 },
    { date: '7 Mayıs', comments: 650 },
    { date: '8 Mayıs', comments: 780 },
  ];

  // Sample data for Top Comment Hashtags
  const hashtagsData = [
    { name: '#ThyBoykot', count: 342 },
    { name: '#BoykotEt', count: 287 },
    { name: '#DestekOl', count: 245 },
    { name: '#Filistin', count: 203 },
    { name: '#Gazze', count: 198 },
  ];

  // Sample data for Popular Comments data
  const popularCommentsData = [
    { 
      username: 'user123', 
      comment: 'THY'nin bu kararını şiddetle kınıyorum. #ThyBoykot', 
      likes: 1245, 
      date: '6 Mayıs' 
    },
    { 
      username: 'activist88', 
      comment: 'Hepimiz destek olmalıyız. #BoykotEt #Filistin', 
      likes: 982, 
      date: '7 Mayıs' 
    },
    { 
      username: 'freedom_fighter', 
      comment: 'Bu karar kabul edilemez. Hepimiz sesimizi yükseltmeliyiz!', 
      likes: 876, 
      date: '7 Mayıs' 
    },
    { 
      username: 'peace_now', 
      comment: 'Gazze için ayağa kalkın. #Gazze #DestekOl', 
      likes: 754, 
      date: '6 Mayıs' 
    },
    { 
      username: 'solidarity2023', 
      comment: 'Boykot hareketine katılın. Sesimizi duyuralım. #ThyBoykot', 
      likes: 621, 
      date: '8 Mayıs' 
    },
  ];

  const COLORS = ['#3b82f6', '#ef4444', '#10b981', '#f59e0b', '#8b5cf6'];

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">THY Boykot Analizi</h1>
        <p className="text-gray-600 mb-6">
          1-8 Mayıs 2023 tarihlerinde Instagram'daki THY boykot çağrılarının analizi
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Instagram Comment Sentiment Analysis */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Yorum Duygu Analizi</CardTitle>
              <CardDescription>
                Instagram'daki THY ile ilgili yorumların duygu analizi
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sentimentData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={130}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {sentimentData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value} yorum`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Daily Instagram Comments */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Günlük Instagram Yorum Sayısı</CardTitle>
              <CardDescription>
                THY ile ilgili günlük Instagram yorum sayıları
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={dailyCommentsData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value} yorum`} />
                    <Area type="monotone" dataKey="comments" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Top Comment Hashtags */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Popüler Hashtagler</CardTitle>
              <CardDescription>
                THY boykot yorumlarında en çok kullanılan hashtagler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={hashtagsData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis type="category" dataKey="name" />
                    <Tooltip formatter={(value) => `${value} kez kullanıldı`} />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" name="Kullanım Sayısı" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Popular Comments */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Popüler Yorumlar</CardTitle>
              <CardDescription>
                En çok beğeni alan yorumlar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 overflow-auto">
                <ul className="space-y-4">
                  {popularCommentsData.map((item, index) => (
                    <li key={index} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex justify-between mb-1">
                        <span className="font-bold text-blue-600">@{item.username}</span>
                        <span className="text-gray-500 text-sm">{item.date}</span>
                      </div>
                      <p className="text-gray-700 mb-1">{item.comment}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span>{item.likes} beğeni</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThyBoycottAnalysis;
