
import React from 'react';
import Slide from '@/components/Slide';
import Table from '@/components/Table';
import { Card } from '@/components/ui/card';
import { 
  LineChart,
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer
} from 'recharts';
import { sentimentData } from '@/data/reportData';

const DailyTrendsSlide = () => {
  return (
    <Slide title="3. Günlük ve Haftalık Detaylı Trendler" bgColor="bg-gradient-to-br from-white via-indigo-50 to-indigo-100">
      <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
        <div className="overflow-x-auto">
          <Table
            headers={["Tarih", "Tweet", "Beğeni", "RT", "Yanıt", "Görüntülenme", "Ortalama Duygu"]}
            rows={[
              ["23 Nisan", "2", "0", "0", "0", "144", "-0,02"],
              ["24 Nisan", "3", "4", "0", "0", "323", "0,00"],
              ["25 Nisan", "4", "0", "0", "0", "316", "0,45"],
              ["26 Nisan", "2", "0", "0", "0", "68", "0,10"],
              ["28 Nisan", "19", "4", "4", "0", "2.659", "-0,03"],
              ["29 Nisan", "33", "5", "2", "1", "2.829", "-0,09"],
              ["30 Nisan", "27", "4", "5", "1", "2.557", "-0,11"],
              ["1 Mayıs", "4", "1.330", "478", "60", "12.160", "0,25"],
              ["3 Mayıs", "24", "31", "11", "2", "2.323", "-0,10"],
              ["8 Mayıs", "213", "9.938", "2.698", "148", "133.500", "-0,88"],
              ["10 Mayıs", "225", "453", "215", "40", "40.076", "0,07"],
              ["11 Mayıs", "29", "62", "22", "5", "5.632", "0,15"],
              ["12 Mayıs", "48", "1.157", "491", "86", "61.464", "0,04"],
              ["13 Mayıs", "175", "51.062", "14.956", "2.475", "1.093.424", "0,10"],
              ["14 Mayıs", "91", "1.251", "454", "78", "72.973", "-0,04"],
              ["15 Mayıs", "35", "316", "104", "12", "6.202", "-0,29"],
              ["16 Mayıs", "48", "190", "63", "14", "8.921", "-0,19"],
              ["17 Mayıs", "34", "202", "56", "13", "8.991", "-0,22"],
              ["18 Mayıs", "5", "1", "1", "1", "401", "-0,95"],
              ["19 Mayıs", "15", "11", "7", "2", "1.450", "-0,35"],
              ["20 Mayıs", "8", "2", "1", "1", "109", "-0,67"],
              ["21 Mayıs", "10", "0", "1", "0", "173", "-0,41"],
            ]}
            className="mt-2"
          />
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4 text-gray-800">Duygu Skoru Trendi (8-15 Mayıs)</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={sentimentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis domain={[-1, 0.5]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </Card>
    </Slide>
  );
};

export default DailyTrendsSlide;
