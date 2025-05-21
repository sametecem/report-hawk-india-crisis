
import React from 'react';
import Slide from '@/components/Slide';
import Table from '@/components/Table';
import { Card } from '@/components/ui/card';
import { 
  PieChart,
  Pie, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { emotionData, tweetVolumeData } from '@/data/reportData';

const GeneralStatsSlide = () => {
  return (
    <Slide title="2. Genel İstatistikler ve Hacimsel Veriler" bgColor="bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Toplam İçerik ve Etkileşim</h3>
          <Table
            headers={["Metrik", "Değer"]}
            rows={[
              ["Tweet", "1.266"],
              ["Beğeni", "96.570"],
              ["Retweet", "26.780"],
              ["Yanıt", "3.838"],
              ["Görüntülenme", "2.181.307"],
            ]}
            className="mt-2"
          />
        </Card>

        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">İçerik Türüne Göre Duygu Dağılımı</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={emotionData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                >
                  {emotionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => `${value}%`} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 space-y-2">
            <p className="font-medium">Negatif: <span className="font-bold text-red-600">1.173 tweet (%92,6)</span></p>
            <p className="font-medium">Nötr: <span className="font-bold text-gray-600">90 tweet (%7,1)</span></p>
            <p className="font-medium">Pozitif: <span className="font-bold text-green-600">3 tweet (%0,3)</span></p>
          </div>
        </Card>

        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Dönemsel Hacim ve Zirve Günler</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={tweetVolumeData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="tweets" stroke="#3b82f6" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="font-medium text-blue-800">En yoğun gün: <span className="font-bold">10 Mayıs 2025 (Zirve)</span></p>
              <p className="text-sm text-blue-700">225 tweet, 453 beğeni, 215 RT, 40.076 gösterim</p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <p className="font-medium text-purple-800">En yüksek etkileşim: <span className="font-bold">13 Mayıs 2025</span></p>
              <p className="text-sm text-purple-700">175 tweet, 51.062 beğeni, 14.956 RT, 1.093.424 gösterim</p>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default GeneralStatsSlide;
