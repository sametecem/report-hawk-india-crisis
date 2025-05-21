
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
  ResponsiveContainer,
  ReferenceLine,
  ReferenceArea
} from 'recharts';
import { sentimentData } from '@/data/reportData';
import { tweetVolumeData } from '@/data/reportData';
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card';
import { ExternalLink, AlertCircle, TrendingUp } from 'lucide-react';
import TweetCard from '@/components/TweetCard';
import { Badge } from '@/components/ui/badge';

// Peak days data
const peakDaysData = [
  {
    date: "8 Mayıs",
    title: "Boykot Çağrısı Patlıyor",
    description: "#BoycottTurkey / #BoycottTurkishAirlines etiketi Hindistan tarafında ilk kez büyük kitleye yayılıyor. Çağrıların çoğu Pakistan-Türkiye yakınlaşmasına tepki.",
    tweets: [
      {
        id: "1920890636913328153",
        text: "🚨 Not a single Indian flight-booking app is letting you book Turkey… Indians should boycott Turkey and Azerbaijan.",
        stats: "9.252 ❤ · 2.649 RT · 125K görüntüleme"
      },
      {
        id: "1921147041190217791",
        text: "Share max so Turkey becomes an abuse for every Indian! Boycott Turkey for tourism, boycott Turkish Airlines for travel!",
        stats: "434 ❤ · 233 RT"
      }
    ],
    color: "#ef4444",
    position: { x: 9 } // index position in tweetVolumeData
  },
  {
    date: "10 Mayıs",
    title: "Volume Piki (Ama Düşük Etkileşim)",
    description: "Tweet sayısı en yüksek gün (225), fakat içerikler çoğunlukla \"copy-paste\" boykot mesajları → etkileşim görece düşük.",
    tweets: [
      {
        id: "1920148321600358407",
        text: "Economic boycott of Pakistan supporters starts in India… Turkish Airlines #तुर्की_बहिष्कार #Turkiye",
        stats: "355 ❤ · 201 RT"
      }
    ],
    color: "#f97316",
    position: { x: 10 }
  },
  {
    date: "13 Mayıs",
    title: "Etkileşim Patlaması",
    description: "Medyada \"Hindistanlı turistler Türkiye-Azerbaycan'da yılda 6.000 cr ₹ harcıyor\" haberi yayılıyor; boykot savunucuları rakamı büyütüp paylaşıyor. 51K ❤ + 15K RT, rapordaki en büyük interaction.",
    tweets: [
      {
        id: "1922291949068845502",
        text: "🚨 Indian travellers spent nearly ₹6000 crore on tourism in Turkey & Azerbaijan in 2024. Let's keep our money for friends!",
        stats: "13.757 ❤ · 3.784 RT · 185K görüntüleme"
      }
    ],
    color: "#dc2626",
    position: { x: 13 },
    isHighlight: true
  },
  {
    date: "1 Mayıs",
    title: "\"Mini Viral\" (Yüksek ORAN)",
    description: "Sadece 4 tweet atılıyor ama toplam 1.330 ❤ + 478 RT → en yüksek \"etkileşim / tweet\" oranı.",
    tweets: [
      {
        id: "1920918289703391251",
        text: "@ANI Boycott Turkish Airlines, flights & dramas in our country.",
        stats: "307 ❤ · 72 RT"
      }
    ],
    color: "#8b5cf6",
    position: { x: 7 }
  }
];

const DailyTrendsSlide = () => {
  const volumeChartData = React.useMemo(() => {
    return tweetVolumeData.map((item) => ({
      ...item,
      // Add isPeakDay property to the data points that match our peak days
      isPeakDay: peakDaysData.some(peak => peak.date === item.name)
    }));
  }, []);

  return (
    <Slide title="3. Günlük ve Haftalık Detaylı Trendler" bgColor="bg-gradient-to-br from-white via-indigo-50 to-indigo-100">
      <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm mb-6">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <h3 className="text-xl font-bold text-gray-800">Dönemsel Hacim ve Zirve Günler</h3>
        </div>

        <div className="h-80 mb-6">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={volumeChartData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip 
                formatter={(value) => [`${value} tweet`, "Hacim"]}
                labelFormatter={(label) => `Tarih: ${label}`}
                contentStyle={{
                  backgroundColor: "white",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: "none"
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="tweets" 
                stroke="#4f46e5" 
                strokeWidth={2}
                dot={(props) => {
                  const { cx, cy, payload } = props;
                  const isPeakDay = payload.isPeakDay;
                  
                  return isPeakDay ? (
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r={6} 
                      fill="#4f46e5" 
                      stroke="white" 
                      strokeWidth={2} 
                    />
                  ) : (
                    <circle 
                      cx={cx} 
                      cy={cy} 
                      r={3} 
                      fill="#4f46e5" 
                    />
                  );
                }}
                activeDot={{ r: 8 }}
                name="Tweet Hacmi"
              />
              
              {/* Add reference lines for the peak days */}
              {peakDaysData.map((peak, index) => (
                <ReferenceLine 
                  key={index}
                  x={peak.date} 
                  stroke={peak.color} 
                  strokeDasharray="3 3"
                  strokeWidth={2}
                  label={{ 
                    value: peak.title, 
                    position: 'insideTopRight',
                    fill: peak.color,
                    fontSize: 12,
                    fontWeight: 'bold'
                  }}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        {/* Peak Days Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {peakDaysData.map((peak, index) => (
            <Card 
              key={index} 
              className={`p-4 ${peak.isHighlight ? 'border-2 border-red-500' : ''}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: peak.color }}
                  ></div>
                  <h4 className="font-bold text-gray-800">{peak.date} — {peak.title}</h4>
                </div>
                {peak.isHighlight && (
                  <Badge variant="destructive" className="text-xs">Rekor Etkileşim</Badge>
                )}
              </div>
              
              <p className="text-sm text-gray-600 mb-3">{peak.description}</p>
              
              <div className="space-y-3">
                {peak.tweets.map((tweet, tweetIndex) => (
                  <HoverCard key={tweetIndex}>
                    <HoverCardTrigger asChild>
                      <div className={`
                        p-3 rounded-lg border cursor-pointer 
                        ${peak.isHighlight ? 'bg-red-50 border-red-200' : 'bg-gray-50 border-gray-200'}
                        hover:shadow-md transition-shadow
                      `}>
                        <div className="flex justify-between items-start">
                          <p className="text-sm font-medium">Tweet ID: {tweet.id}</p>
                          <span className="text-xs text-gray-500">{tweet.stats}</span>
                        </div>
                        <p className="text-sm mt-1 line-clamp-2">{tweet.text}</p>
                        <div className="flex justify-end mt-2">
                          <a 
                            href={`https://twitter.com/x/status/${tweet.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs text-blue-500 hover:text-blue-700 flex items-center gap-1"
                          >
                            <span>Twitter'da Görüntüle</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </HoverCardTrigger>
                    <HoverCardContent className="w-80 p-0">
                      <div className="p-4">
                        <h5 className="text-sm font-semibold text-gray-900 mb-2">
                          Tweet Detayı
                        </h5>
                        <p className="text-sm text-gray-700 mb-3">{tweet.text}</p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{tweet.stats}</span>
                          <a 
                            href={`https://twitter.com/x/status/${tweet.id}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 flex items-center gap-1"
                          >
                            <span>Tweeti Görüntüle</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                      </div>
                    </HoverCardContent>
                  </HoverCard>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </Card>

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
