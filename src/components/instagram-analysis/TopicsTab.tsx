
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { PieChart, Pie, BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Line } from 'recharts';
import { Database, PieChart as PieChartIcon, Flag } from 'lucide-react';

interface TopicsTabProps {
  topics: any[];
  metrics: {
    ctaPercentage: number;
    ctaCount: number;
  };
  topCTAPhrases: any[];
  ctaByHour: any[];
  formatNumber: (num: number) => string;
}

const TopicsTab: React.FC<TopicsTabProps> = ({ topics, metrics, topCTAPhrases, ctaByHour, formatNumber }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Theme Clustering */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Database className="h-5 w-5 text-emerald-500" />
            Tema Kümeleme (BERTopic)
          </CardTitle>
          <CardDescription>
            Yorumlardan çıkarılan ana temalar ve dağılımları
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {topics.map((topic, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-emerald-50 p-4 rounded-xl shadow-sm border border-emerald-100"
              >
                <h4 className="font-semibold text-emerald-700 mb-2">{topic.name}</h4>
                <p className="text-gray-500 text-xs mb-3">Toplam: {formatNumber(topic.commentCount)} yorum</p>
                <div className="space-y-1">
                  {topic.keywords.map((keyword, kidx) => (
                    <span 
                      key={kidx} 
                      className="inline-block mr-2 mb-2 px-2 py-1 text-xs bg-white rounded-full shadow-sm border border-emerald-100"
                    >
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Topic Distribution Chart */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <PieChartIcon className="h-5 w-5 text-emerald-500" />
            Tema Dağılımı
          </CardTitle>
          <CardDescription>
            Ana temaların yüzdesel dağılımı
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={topics}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#10b981"
                  dataKey="commentCount"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {topics.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={entry.color || `hsl(${150 + index * 30}, 70%, 50%)`} 
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value, name) => [formatNumber(Number(value)), name]}
                  itemStyle={{ color: "#333" }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* CTA Detection */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flag className="h-5 w-5 text-red-500" />
            Eylem Çağrısı (CTA) Tespiti
          </CardTitle>
          <CardDescription>
            "Boykot edin", "İptal edin" gibi eylem çağrısı içeren yorumlar ve saatlik dağılımı
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <div className="bg-red-50 p-4 rounded-xl border border-red-100">
                <h4 className="font-semibold text-red-700 mb-2">CTA İçeren Yorumlar</h4>
                <p className="text-3xl font-bold text-red-600">{metrics.ctaPercentage}%</p>
                <p className="text-gray-500 text-sm mt-2">Toplam {formatNumber(metrics.ctaCount)} yorum</p>
                
                <div className="mt-4">
                  <h5 className="font-medium text-sm text-red-700 mb-2">En Sık Kullanılan CTA'lar:</h5>
                  <div className="space-y-1">
                    {topCTAPhrases.map((cta, index) => (
                      <div key={index} className="flex justify-between items-center text-sm">
                        <span className="text-gray-700">{cta.phrase}</span>
                        <span className="text-gray-500">{cta.count}x</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={ctaByHour}
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
                      formatter={(value: any, name) => [value, name === "ctaCount" ? "CTA İçeren Yorum Sayısı" : "CTA Oranı (%)"]}
                    />
                    <Legend />
                    <Bar
                      dataKey="ctaCount"
                      name="CTA İçeren Yorum Sayısı"
                      fill="#ef4444"
                      radius={[4, 4, 0, 0]}
                    />
                    <Line
                      type="monotone"
                      dataKey="ctaPercentage"
                      name="CTA Oranı (%)"
                      stroke="#f97316"
                      strokeWidth={2}
                      dot={{ r: 4 }}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TopicsTab;
