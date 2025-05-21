
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { LineChart, Line, PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { LineChart as LineChartIcon, PieChart as PieChartIcon, Flag } from 'lucide-react';

interface SentimentTabProps {
  sentimentCurve: any[];
  sentimentDistribution: any[];
  toxicityByHour: any[];
  metrics: {
    toxicPercentage: number;
  };
  formatNumber: (num: number) => string;
}

const SentimentTab: React.FC<SentimentTabProps> = ({ sentimentCurve, sentimentDistribution, toxicityByHour, metrics, formatNumber }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Sentiment Curve */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <LineChartIcon className="h-5 w-5 text-blue-500" />
            Duygu Eğrisi
          </CardTitle>
          <CardDescription>
            Yorumların günlük ortalama duygu skoru değişimi (-1: Çok negatif, +1: Çok pozitif)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={sentimentCurve}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis
                  dataKey="date"
                  tick={{ fontSize: 11 }}
                  angle={-45}
                  textAnchor="end"
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  width={40}
                  domain={[-1, 1]}
                  ticks={[-1, -0.5, 0, 0.5, 1]}
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      let sentimentText = "Nötr";
                      let sentimentColor = "text-gray-600";
                      
                      if (data.sentimentScore <= -0.5) {
                        sentimentText = "Çok Negatif";
                        sentimentColor = "text-red-600";
                      } else if (data.sentimentScore < 0) {
                        sentimentText = "Negatif";
                        sentimentColor = "text-orange-600";
                      } else if (data.sentimentScore > 0.5) {
                        sentimentText = "Çok Pozitif";
                        sentimentColor = "text-green-600";
                      } else if (data.sentimentScore > 0) {
                        sentimentText = "Pozitif";
                        sentimentColor = "text-emerald-600";
                      }
                      
                      return (
                        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
                          <p className="font-medium mb-1">{data.date}</p>
                          <p className={sentimentColor}>Duygu Skoru: {data.sentimentScore.toFixed(2)} ({sentimentText})</p>
                          <p className="text-gray-600 mt-1">Yorum Sayısı: {formatNumber(data.commentCount)}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="sentimentScore"
                  name="Duygu Skoru"
                  stroke="#3b82f6"
                  strokeWidth={3}
                  dot={{ r: 4, strokeWidth: 2 }}
                  activeDot={{ r: 6, strokeWidth: 2 }}
                />
                <Line
                  type="monotone"
                  dataKey="baseline"
                  name="Nötr Çizgisi"
                  stroke="#94a3b8"
                  strokeWidth={1}
                  strokeDasharray="5 5"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Sentiment Distribution */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChartIcon className="h-5 w-5 text-indigo-500" />
            Duygu Dağılımı
          </CardTitle>
          <CardDescription>
            Yorumların duygu analizi sonuçlarına göre dağılımı
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {sentimentDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  formatter={(value: any) => [formatNumber(Number(value)), "Yorum"]}
                  itemStyle={{ color: "#333" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Toxicity Filter */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flag className="h-5 w-5 text-red-500" />
            Toksisite & Hakaret Filtresi
          </CardTitle>
          <CardDescription>
            Toksik içerik oranı ve saatlik dağılım (Perspective API {">"}{">"} 0.8)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center mb-4">
            <div className="text-center">
              <p className="text-4xl font-bold text-red-600">{metrics.toxicPercentage}%</p>
              <p className="text-gray-600 text-sm mt-1">Toksik İçerik Oranı</p>
            </div>
          </div>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={toxicityByHour}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis
                  dataKey="hour"
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  width={40}
                />
                <Tooltip
                  formatter={(value: any) => [`${Number(value)}%`, "Toksisite"]}
                />
                <Bar
                  dataKey="toxicityPercentage"
                  name="Toksisite %"
                  fill="#ef4444"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SentimentTab;
