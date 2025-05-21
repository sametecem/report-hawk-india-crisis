
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AreaChart, BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Bar, Area } from 'recharts';
import { Calendar, BarChart2, Clock } from 'lucide-react';

interface DailyTabProps {
  dailyVolume: any[];
  peakDays: any[];
  hourlySpeed: any[];
  formatNumber: (num: number) => string;
}

const DailyTab: React.FC<DailyTabProps> = ({ dailyVolume, peakDays, hourlySpeed, formatNumber }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="h-5 w-5 text-blue-500" />
            Günlük Yorum Hacmi ve Zirveler
          </CardTitle>
          <CardDescription>
            5-18 Mayıs 2025 dönemi boyunca günlük yorum sayıları ve zirve günler
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart
                data={dailyVolume}
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
                />
                <Tooltip
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
                          <p className="font-medium mb-1">{data.date}</p>
                          <p className="text-violet-600">Yorum Sayısı: {formatNumber(data.comments)}</p>
                          {data.isPeak && (
                            <p className="text-red-600 font-semibold mt-1">🚨 Zirve Gün!</p>
                          )}
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="comments" 
                  name="Yorum Sayısı" 
                  stroke="#8b5cf6" 
                  fill="url(#colorComments)" 
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-red-500" />
            Zirve Günler
          </CardTitle>
          <CardDescription>
            Ortalama yorum sayısının 2 katı ve üzerinde yorum alan günler
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Tarih</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Yorum Sayısı</th>
                  <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Negatif %</th>
                </tr>
              </thead>
              <tbody>
                {peakDays.map((day, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                    <td className="py-3 px-4 text-sm text-gray-800 font-medium">{day.date}</td>
                    <td className="py-3 px-4 text-right text-sm font-medium text-violet-600">{formatNumber(day.comments)}</td>
                    <td className="py-3 px-4 text-right text-sm text-red-600">{day.negativePercentage}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
      
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-500" />
            Saatlik Hız Alarmı
          </CardTitle>
          <CardDescription>
            Dakikada 5+ yorum alan zaman dilimleri
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={hourlySpeed}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                barSize={12}
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
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
                          <p className="font-medium mb-1">Saat: {data.hour}</p>
                          <p className="text-amber-600">Yorum/Dakika: {data.commentsPerMinute}</p>
                          <p className="text-gray-600">Tarih: {data.date}</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Bar
                  dataKey="commentsPerMinute"
                  name="Yorum/Dakika"
                  fill="#f59e0b"
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

export default DailyTab;
