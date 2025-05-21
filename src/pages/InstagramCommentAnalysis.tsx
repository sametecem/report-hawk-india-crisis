
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, 
  Legend, ResponsiveContainer, Area, AreaChart, LineChart, Line, PieChart, Pie, Cell 
} from 'recharts';
import { 
  Card, CardContent, CardDescription, CardHeader, CardTitle 
} from "@/components/ui/card";

const InstagramCommentAnalysis = () => {
  // Günlük Yorum Hacmi & Zirveler
  const dailyVolumeData = [
    { date: '1 Mayıs', comments: 120 },
    { date: '2 Mayıs', comments: 145 },
    { date: '3 Mayıs', comments: 230 },
    { date: '4 Mayıs', comments: 380 },
    { date: '5 Mayıs', comments: 490 },
    { date: '6 Mayıs', comments: 620 },
    { date: '7 Mayıs', comments: 850 },
    { date: '8 Mayıs', comments: 780 },
    { date: '9 Mayıs', comments: 530 },
    { date: '10 Mayıs', comments: 320 },
  ];

  // Duygu Eğrisi (VADER / mBERT compound)
  const sentimentData = [
    { date: '1 Mayıs', score: -0.45 },
    { date: '2 Mayıs', score: -0.38 },
    { date: '3 Mayıs', score: -0.52 },
    { date: '4 Mayıs', score: -0.65 },
    { date: '5 Mayıs', score: -0.72 },
    { date: '6 Mayıs', score: -0.68 },
    { date: '7 Mayıs', score: -0.75 },
    { date: '8 Mayıs', score: -0.71 },
    { date: '9 Mayıs', score: -0.58 },
    { date: '10 Mayıs', score: -0.42 },
  ];

  // Duygu Dağılımı
  const emotionDistData = [
    { name: 'Negatif', value: 72, color: '#ef4444' },
    { name: 'Nötr', value: 23, color: '#9ca3af' },
    { name: 'Pozitif', value: 5, color: '#10b981' },
  ];

  // Tema Kümeleme
  const themeClusterData = [
    { name: 'Boykot Çağrıları', count: 342 },
    { name: 'Filistin Dayanışması', count: 287 },
    { name: 'Şirket Eleştirisi', count: 245 },
    { name: 'Politik Tepki', count: 203 },
    { name: 'Alternatif Öneri', count: 112 },
  ];

  // Post Bazlı Boykot Yoğunluğu
  const postNegativeRatioData = [
    { post: 'Post #1', total: 450, negativeRatio: 82 },
    { post: 'Post #2', total: 380, negativeRatio: 75 },
    { post: 'Post #3', total: 520, negativeRatio: 88 },
    { post: 'Post #4', total: 310, negativeRatio: 68 },
    { post: 'Post #5', total: 290, negativeRatio: 72 },
  ];

  // Dil Dağılımı
  const languageData = [
    { name: 'Türkçe', value: 58, color: '#3b82f6' },
    { name: 'İngilizce', value: 24, color: '#8b5cf6' },
    { name: 'Hintçe', value: 12, color: '#f59e0b' },
    { name: 'Diğer', value: 6, color: '#9ca3af' },
  ];

  // Kullanıcı Persona Dağılımı
  const personaData = [
    { name: 'Gerçek Fotoğraf', value: 45, color: '#10b981' },
    { name: 'Meme/Görsel', value: 32, color: '#f59e0b' },
    { name: 'Anonim/Logo', value: 23, color: '#8b5cf6' },
  ];

  // En Etkileşimli Yorumlar
  const topComments = [
    { 
      username: 'activist23', 
      comment: "THY'nin bu kararını şiddetle kınıyorum. #ThyBoykot", 
      impact: 245, 
      date: '6 Mayıs' 
    },
    { 
      username: 'solidarity88', 
      comment: "Hepimiz destek olmalıyız. #BoykotEt #Filistin", 
      impact: 182, 
      date: '7 Mayıs' 
    },
    { 
      username: 'freedom_fighter', 
      comment: "Bu karar kabul edilemez. Hepimiz sesimizi yükseltmeliyiz!", 
      impact: 176, 
      date: '7 Mayıs' 
    },
    { 
      username: 'peace_now', 
      comment: "Gazze için ayağa kalkın. #Gazze #DestekOl", 
      impact: 154, 
      date: '6 Mayıs' 
    },
    { 
      username: 'solidarity2023', 
      comment: "Boykot hareketine katılın. Sesimizi duyuralım. #ThyBoykot", 
      impact: 121, 
      date: '8 Mayıs' 
    },
  ];

  // CTA Içeren Yorumlar Saatlik Dağılım
  const ctaHourlyData = [
    { hour: '00:00', count: 12 },
    { hour: '01:00', count: 8 },
    { hour: '02:00', count: 5 },
    { hour: '03:00', count: 3 },
    { hour: '04:00', count: 2 },
    { hour: '05:00', count: 4 },
    { hour: '06:00', count: 7 },
    { hour: '07:00', count: 15 },
    { hour: '08:00', count: 24 },
    { hour: '09:00', count: 38 },
    { hour: '10:00', count: 45 },
    { hour: '11:00', count: 52 },
    { hour: '12:00', count: 58 },
    { hour: '13:00', count: 64 },
    { hour: '14:00', count: 72 },
    { hour: '15:00', count: 85 },
    { hour: '16:00', count: 96 },
    { hour: '17:00', count: 104 },
    { hour: '18:00', count: 98 },
    { hour: '19:00', count: 86 },
    { hour: '20:00', count: 75 },
    { hour: '21:00', count: 58 },
    { hour: '22:00', count: 43 },
    { hour: '23:00', count: 25 },
  ];

  // Toksisite Oranı
  const toxicityData = [
    { name: 'Toksik', value: 28, color: '#ef4444' },
    { name: 'Normal', value: 72, color: '#10b981' },
  ];

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Instagram Yorum Analizi</h1>
        <p className="text-gray-600 mb-6">
          1-10 Mayıs 2023 tarihlerinde Instagram&apos;daki THY boykot yorumlarının analizi
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Günlük Yorum Hacmi & Zirveler */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Günlük Yorum Hacmi</CardTitle>
              <CardDescription>
                Instagram&apos;da THY ile ilgili günlük yorum sayıları ve zirveler
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={dailyVolumeData}
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

          {/* Duygu Eğrisi */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Duygu Eğrisi</CardTitle>
              <CardDescription>
                Günlük ortalama duygu skoru (-1 çok negatif, +1 çok pozitif)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={sentimentData}
                    margin={{
                      top: 10,
                      right: 30,
                      left: 0,
                      bottom: 0,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis domain={[-1, 1]} />
                    <Tooltip formatter={(value) => `Skor: ${value.toFixed(2)}`} />
                    <Line type="monotone" dataKey="score" stroke="#ef4444" dot={{ r: 4 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Duygu Dağılımı */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Duygu Dağılımı</CardTitle>
              <CardDescription>
                Yorumların pozitif/nötr/negatif dağılımı
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={emotionDistData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={130}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {emotionDistData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `%${value}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Tema Kümeleme */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Tema Kümeleme</CardTitle>
              <CardDescription>
                Yorumlarda tespit edilen ana temalar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    layout="vertical"
                    data={themeClusterData}
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
                    <Tooltip formatter={(value) => `${value} yorum`} />
                    <Legend />
                    <Bar dataKey="count" fill="#8884d8" name="Yorum Sayısı" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Post Bazlı Boykot Yoğunluğu */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Post Bazlı Boykot Yoğunluğu</CardTitle>
              <CardDescription>
                En çok negatif yorum alan paylaşımlar ve oranları
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={postNegativeRatioData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="post" />
                    <YAxis />
                    <Tooltip formatter={(value, name) => [
                      name === "total" ? `${value} yorum` : `%${value}`,
                      name === "total" ? "Toplam Yorum" : "Negatif Oran"
                    ]} />
                    <Legend />
                    <Bar dataKey="total" fill="#9ca3af" name="Toplam Yorum" />
                    <Bar dataKey="negativeRatio" fill="#ef4444" name="Negatif Oran (%)" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* CTA Saatlik Dağılımı */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">CTA Saatlik Dağılımı</CardTitle>
              <CardDescription>
                Eylem çağrısı içeren yorumların saatlik dağılımı
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={ctaHourlyData}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value} yorum`} />
                    <Line type="monotone" dataKey="count" stroke="#f59e0b" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Dil Dağılımı */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Dil Dağılımı</CardTitle>
              <CardDescription>
                Yorumlarda kullanılan dillerin dağılımı
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={languageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={130}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {languageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `%${value}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Kullanıcı Persona Dağılımı */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Kullanıcı Persona Dağılımı</CardTitle>
              <CardDescription>
                Yorum yapan kullanıcıların profil tipi dağılımı
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={personaData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={130}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {personaData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `%${value}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Toksisite Oranı */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">Toksisite Analizi</CardTitle>
              <CardDescription>
                Yorumlardaki toksisite oranı
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={toxicityData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={130}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    >
                      {toxicityData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `%${value}`} />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* En Etkileşimli Yorumlar */}
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-xl font-bold">En Etkileşimli Yorumlar</CardTitle>
              <CardDescription>
                En çok etki yaratan yorumlar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-80 overflow-auto">
                <ul className="space-y-4">
                  {topComments.map((item, index) => (
                    <li key={index} className="border-b border-gray-100 pb-4 last:border-0">
                      <div className="flex justify-between mb-1">
                        <span className="font-bold text-blue-600">@{item.username}</span>
                        <span className="text-gray-500 text-sm">{item.date}</span>
                      </div>
                      <p className="text-gray-700 mb-1">{item.comment}</p>
                      <div className="flex items-center text-gray-500 text-sm">
                        <span>Etki puanı: {item.impact}</span>
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

export default InstagramCommentAnalysis;
