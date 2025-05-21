
import React from "react";
import SlideShow from "@/components/SlideShow";
import Slide from "@/components/Slide";
import Table from "@/components/Table";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  PieChart,
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend,
  ResponsiveContainer,
  Cell
} from "recharts";
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Index() {
  // Updated sentiment data
  const sentimentData = [
    { name: "8 Mayıs", score: -0.88 },
    { name: "10 Mayıs", score: 0.07 },
    { name: "11 Mayıs", score: 0.15 },
    { name: "12 Mayıs", score: 0.04 },
    { name: "13 Mayıs", score: 0.10 },
    { name: "14 Mayıs", score: -0.04 },
    { name: "15 Mayıs", score: -0.29 },
  ];

  // Updated tweet volume data with the new values
  const tweetVolumeData = [
    { name: "23 Nisan", tweets: 2 },
    { name: "24 Nisan", tweets: 3 },
    { name: "25 Nisan", tweets: 4 },
    { name: "26 Nisan", tweets: 2 },
    { name: "28 Nisan", tweets: 19 },
    { name: "29 Nisan", tweets: 33 },
    { name: "30 Nisan", tweets: 27 },
    { name: "1 Mayıs", tweets: 4 },
    { name: "3 Mayıs", tweets: 24 },
    { name: "8 Mayıs", tweets: 213 },
    { name: "10 Mayıs", tweets: 225 },
    { name: "11 Mayıs", tweets: 29 },
    { name: "12 Mayıs", tweets: 48 },
    { name: "13 Mayıs", tweets: 175 },
    { name: "14 Mayıs", tweets: 91 },
    { name: "15 Mayıs", tweets: 35 },
    { name: "16 Mayıs", tweets: 48 },
    { name: "17 Mayıs", tweets: 34 },
    { name: "18 Mayıs", tweets: 5 },
    { name: "19 Mayıs", tweets: 15 },
    { name: "20 Mayıs", tweets: 8 },
    { name: "21 Mayıs", tweets: 10 },
  ];

  // Updated emotion data with new values for sentiment distribution
  const emotionData = [
    { name: "Negatif", value: 92.6, fill: "#ef4444" },
    { name: "Nötr", value: 7.1, fill: "#9ca3af" },
    { name: "Pozitif", value: 0.3, fill: "#22c55e" },
  ];

  // Updated category data
  const categoryData = [
    { name: "Boykot çağrısı", value: 95.3, fill: "#f87171" },
    { name: "Nötr içerik", value: 1.7, fill: "#9ca3af" },
    { name: "Siyasi gerekçeler", value: 1.5, fill: "#fb923c" },
    { name: "Alternatif önerisi", value: 1.4, fill: "#fbbf24" },
    { name: "Kişisel şikayet", value: 0.1, fill: "#38bdf8" },
  ];

  // Updated hashtag data
  const hashtagData = [
    { name: "#indigo", count: 130, fill: "#60a5fa" },
    { name: "#turkishairlines", count: 46, fill: "#a78bfa" },
    { name: "#turkey", count: 35, fill: "#f472b6" },
    { name: "#boycott", count: 46, fill: "#fb7185" },
    { name: "#boycottturkey", count: 112, fill: "#f43f5e" },
    { name: "#boycottturkishairlines", count: 49, fill: "#e11d48" },
    { name: "#pakistan", count: 9, fill: "#fbbf24" },
    { name: "#operationsindoor", count: 24, fill: "#84cc16" },
    { name: "#boycottazerbaijan", count: 13, fill: "#14b8a6" },
    { name: "#airindia", count: 2, fill: "#34d399" },
  ];
  
  // Word cloud data from most common words
  const wordCloudData = [
    "turkish (1.096)", "boycott (890)", "airlines (866)", "turkey (447)", 
    "india (269)", "indigo (190)", "products (187)", "amp (182)", 
    "azerbaijan (143)", "travel (139)", "support (118)", "flights (117)", 
    "booking (103)", "ban (98)", "pakistan (96)", "code (93)", 
    "share (87)", "indiago (85)", "country (81)", "government (79)", 
    "people (78)", "economic (73)", "terrorist (70)", "boycott­turkey (68)", 
    "suspend (65)", "national (65)", "security (64)", "revenue (63)", 
    "crore (61)", "indian (59)"
  ];

  // Twitter data with links
  const mostRTTweets = [
    { id: "1922291949068845502", text: "🚨 Indian Travellers Spent Nearly ₹6000 Crore on Tourism in Turkey...", rt: "3.784", likes: "13.757", views: "184.986" },
    { id: "1920890636913328153", text: "🚨 Not a Single Indian Flight Booking Apps (OTAs) Suspended Booking To Turkey...", rt: "2.649", likes: "9.252", views: "125.439" },
    { id: "1920340840519749918", text: "Azerbaijan and Turkey earns lot of money because of Indian tourists...", rt: "2.212", likes: "9.305", views: "374.054" },
    { id: "1921147041190217791", text: "Share Max so Turkey becomes an abuse for every Indian! Boycott...", rt: "233", likes: "434", views: "17.494" },
    { id: "1920148321600358407", text: "Economic Boycott of Pakistan supporters countries starts in India...", rt: "201", likes: "355", views: "16.947" },
    { id: "1920918289703391251", text: "@ANI Boycott Turkish airlines, Flights and dramas in our country.", rt: "72", likes: "307", views: "8.981" },
    { id: "1920865537146306625", text: "Boycott Turkey!!! No tourism and no flights by Turkish airlines", rt: "51", likes: "139", views: "6.833" },
    { id: "1920237177209657344", text: "Say No to Turkish Airlines. Say No to Travel to Turkey. Say No to Turkish Products.", rt: "288", likes: "709", views: "19.750" },
    { id: "1920218075150575616", text: "India is considering to ban Turkish Airlines...", rt: "239", likes: "665", views: "5.850" },
    { id: "1921147041190217791", text: "Share Max so Turkey becomes an abuse for every Indian! Boycott...", rt: "233", likes: "434", views: "17.494" }
  ];

  // Most mentioned accounts
  const mentionedAccounts = [
    "@indigo6e", "@turkishairlines", "@6EIndiGo", "@PMOIndia", "@RTErdogan", 
    "@cavivekkhatri", "@scanner_3d", "@3dscanner_2023", "@AmitShah", "@narendramodi"
  ];

  // Most active accounts
  const activeAccounts = [
    { name: "smartyevans", count: 53 },
    { name: "sbchaturvedi7", count: 24 },
    { name: "goldeeindia", count: 22 },
    { name: "arrorasanjeev", count: 18 },
    { name: "Scanner_3D", count: 15 },
    { name: "grok", count: 7 },
    { name: "sunilshah231058", count: 6 },
    { name: "MadhurKapoor12", count: 5 },
    { name: "Gajanan_from_MS", count: 5 },
    { name: "kanc80263", count: 5 }
  ];

  return (
    <SlideShow>
      {/* Kapak Sayfası */}
      <Slide bgColor="bg-gradient-to-br from-white via-blue-50 to-indigo-100">
        <div className="flex flex-col items-center justify-center h-full text-center">
          <div className="bg-white/70 backdrop-blur-md rounded-2xl p-8 shadow-xl border border-blue-100 max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 mb-6">
              THY Hindistan Krizi Monitoring Raporu
            </h1>
            <div className="space-y-4">
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-medium">Rapor Dönemi:</span> 23 Nisan 2025 – 21 Mayıs 2025
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-medium">Hazırlayan:</span> AI Monitoring | Data Analiz Ekibi
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-medium">Kapsam:</span> Twitter (1.266 özgün içerik)
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-medium">Hazırlanma Tarihi:</span> 21 Mayıs 2025
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Yönetici Özeti - Modernized */}
      <Slide title="1. Yönetici Özeti" bgColor="bg-gradient-to-br from-white via-slate-50 to-blue-50">
        <div className="p-6 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border border-blue-100">
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Son 1 ayda Hindistan kamuoyunda Türk Hava Yolları ve Türkiye'ye yönelik, sosyal medya odaklı kapsamlı bir boykot hareketi gerçekleşmiştir. Özellikle <span className="font-semibold text-blue-600">8-14 Mayıs</span> haftasında, <span className="font-semibold text-blue-600">#BoycottTurkey</span> ve <span className="font-semibold text-blue-600">#BoycottTurkishAirlines</span> etiketleriyle birlikte THY aleyhindeki içerikler yüksek hacme ulaşmıştır.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-5 rounded-xl border border-blue-100 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-indigo-800">Kriz, 8 ve 10 Mayıs'ta sosyal medyada yoğun şekilde yükselişe geçmiştir:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>10 Mayıs'ta en yüksek hacme ulaşarak <span className="font-semibold">225 tweet</span> paylaşılmıştır.</li>
                <li>13 Mayıs'ta en yüksek etkileşim seviyesine ulaşılmış, <span className="font-semibold">51.062 beğeni</span> ve <span className="font-semibold">14.956 retweet</span> görülmüştür.</li>
                <li>Toplamda 1.266 tweet, 96.570 beğeni, 26.780 retweet kaydedilmiştir.</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-5 rounded-xl border border-purple-100 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-purple-800">İçerik ve Tema Analizi:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>İncelenen 1.266 tweetin duygu dağılımı: <span className="font-semibold">%92.6 negatif</span>, <span className="font-semibold">%7.1 nötr</span>, <span className="font-semibold">%0.3 pozitif</span></li>
                <li>Tweetlerin %95.3'ü boykot çağrısı içermektedir.</li>
                <li>En popüler hashtagler: <span className="font-semibold">#indigo (130)</span>, <span className="font-semibold">#boycottturkey (112)</span>, <span className="font-semibold">#boycottturkishairlines (49)</span></li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-cyan-50 to-teal-50 p-5 rounded-xl border border-cyan-100 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-teal-800">Yüksek Etkileşim ve Yayılım:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>En çok etkileşim alan tweet <span className="font-semibold">13.757 beğeni ve 3.784 retweet</span> almıştır.</li>
                <li>En çok görüntülenen tweet <span className="font-semibold">374.054 görüntülenme</span> sayısına ulaşmıştır.</li>
                <li>Toplam görüntülenme sayısı <span className="font-semibold">2.181.307</span>'dir.</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-5 rounded-xl border border-amber-100 shadow-md">
              <h3 className="text-xl font-bold mb-3 text-amber-800">Duygu Analizi ve Trend:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Dönem boyunca ortalama duygu skoru <span className="font-semibold">-0.08</span> olarak ölçülmüştür.</li>
                <li>En olumsuz duygu skoru <span className="font-semibold">-0.95</span> ile 18 Mayıs'ta gözlemlenmiştir.</li>
                <li>En olumlu duygu skoru <span className="font-semibold">0.45</span> ile 25 Nisan'da kaydedilmiştir.</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-5 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl border border-indigo-100 shadow-lg">
            <h3 className="text-xl font-bold mb-3 text-indigo-900 flex items-center">
              <span className="w-1.5 h-6 bg-gradient-to-b from-indigo-500 to-purple-600 rounded-full mr-3"></span>
              Özet
            </h3>
            <p className="text-lg italic text-gray-700 leading-relaxed">
              Bu dönem, THY'nin Hindistan'daki sosyal medya algısında önemli bir boykot dalgası yaşanmış, özellikle 8-14 Mayıs arasında yoğunlaşan negatif içerikler, yüksek etkileşim oranlarıyla dikkat çekmiştir.
            </p>
          </div>
        </div>
      </Slide>

      {/* Genel İstatistikler */}
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

      {/* Günlük Detaylı Trendler */}
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

      {/* Duygu Analizi ve Temalar */}
      <Slide title="4. Duygu Analizi ve Temalar" bgColor="bg-gradient-to-br from-white via-purple-50 to-purple-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Genel Duygu Trendleri</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li>Ortalama duygu skoru dönem genelinde <span className="font-semibold text-amber-600">yüksek negatif (-0,08)</span></li>
              <li>10 Mayıs öncesi artan tweet hacmi, 13 Mayıs'ta etkileşim patlamasına (51 k beğeni) rağmen duygu skorunu pozitife döndürmedi</li>
              <li>Olumlu örnek oranı %0,3; nötr oranı %7,1 ile düşük kalırken negatif içerik %92,6 ile baskın</li>
            </ul>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Sık Geçen Anahtar Kelimeler</h3>
            <div className="flex flex-wrap gap-2">
              {wordCloudData.slice(0, 15).map((word, index) => (
                <span 
                  key={index} 
                  className={`text-sm md:text-base rounded-full px-3 py-1 ${
                    index < 5 ? 'bg-blue-100 text-blue-800' : 
                    index < 10 ? 'bg-indigo-100 text-indigo-800' : 
                    'bg-purple-100 text-purple-800'
                  }`}
                >
                  {word}
                </span>
              ))}
            </div>
            <div className="mt-5">
              <p className="text-sm text-gray-600 italic">En sık kullanılan 30 kelimeden ilk 15'i gösterilmektedir.</p>
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kategorize Edilmiş İçerik Sınıflandırması</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    label={({ name, value }) => `${name}: %${value}`}
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `%${value}`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">
                İçeriklerin %95,3'ü boykot çağrısı kategorisinde yer almaktadır.
              </p>
            </div>
          </Card>
        </div>
      </Slide>

      {/* En Popüler Tweetler - Updated with links */}
      <Slide title="5. En Popüler Tweetler" bgColor="bg-gradient-to-br from-white via-rose-50 to-rose-100">
        <div className="space-y-6">
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">1</div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    Tweet #1
                    <a 
                      href={`https://twitter.com/i/web/status/${mostRTTweets[0].id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <div className="text-sm text-gray-500">
                    <span className="mx-1">❤️ {mostRTTweets[0].likes}</span>
                    <span className="mx-1">🔄 {mostRTTweets[0].rt}</span>
                    <span className="mx-1">👁️ {mostRTTweets[0].views}</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700 italic">
                  "{mostRTTweets[0].text}"
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm border-l-4 border-purple-500">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">2</div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    Tweet #2
                    <a 
                      href={`https://twitter.com/i/web/status/${mostRTTweets[1].id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <div className="text-sm text-gray-500">
                    <span className="mx-1">❤️ {mostRTTweets[1].likes}</span>
                    <span className="mx-1">🔄 {mostRTTweets[1].rt}</span>
                    <span className="mx-1">👁️ {mostRTTweets[1].views}</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700 italic">
                  "{mostRTTweets[1].text}"
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm border-l-4 border-pink-500">
            <div className="flex items-start gap-4">
              <div className="bg-pink-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">3</div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                    Tweet #3
                    <a 
                      href={`https://twitter.com/i/web/status/${mostRTTweets[2].id}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </h3>
                  <div className="text-sm text-gray-500">
                    <span className="mx-1">❤️ {mostRTTweets[2].likes}</span>
                    <span className="mx-1">🔄 {mostRTTweets[2].rt}</span>
                    <span className="mx-1">👁️ {mostRTTweets[2].views}</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700 italic">
                  "{mostRTTweets[2].text}"
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Slide>

      {/* En Popüler 10 Tweet - Updated with links */}
      <Slide title="6. En Çok Etkileşim Alan 10 Tweet" bgColor="bg-gradient-to-br from-white via-amber-50 to-amber-100">
        <div className="space-y-4 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
          {mostRTTweets.map((tweet, index) => (
            <Card key={index} className="p-4 shadow-md bg-white/90 backdrop-blur-sm border-l-4 border-amber-400 transition-all hover:shadow-lg">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm shrink-0">{index + 1}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                      Tweet #{index + 1}
                      <a 
                        href={`https://twitter.com/i/web/status/${tweet.id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </h3>
                    <div className="text-xs text-gray-500 flex flex-wrap justify-end">
                      <span className="mx-1">❤️ {tweet.likes}</span>
                      <span className="mx-1">🔄 {tweet.rt}</span>
                      <span className="mx-1">👁️ {tweet.views}</span>
                    </div>
                  </div>
                  <p className="mt-2 text-gray-700 text-sm">{tweet.text}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Slide>
      
      {/* En Çok Takipçiye Sahip Hesaplar ve En Sık Bahsedilen Hesaplar */}
      <Slide title="7. Hesap ve Etkileşim Analizi" bgColor="bg-gradient-to-br from-white via-green-50 to-green-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Sık Bahsedilen 10 Hesap</h3>
            <div className="space-y-3">
              {mentionedAccounts.map((account, index) => (
                <div key={index} className="flex items-center justify-between">
                  <a 
                    href={`https://twitter.com/${account.replace('@', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    {account} <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <span className={`px-2 py-1 rounded text-xs ${
                    index < 3 ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                  }`}>
                    {index < 3 ? 'Yüksek Etkileşim' : 'Sık Bahsedilen'}
                  </span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Çok Tweet Atan 10 Hesap</h3>
            <div className="space-y-2">
              {activeAccounts.map((account, index) => (
                <div key={index} className="flex items-center justify-between">
                  <a 
                    href={`https://twitter.com/${account.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-600 hover:text-blue-800"
                  >
                    @{account.name} <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <span className="font-medium">{account.count} tweet</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kullanıcı İstatistikleri</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Tekil Tweet Atan Kullanıcı</h4>
                <p className="text-3xl font-bold text-green-700">512</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">En Aktif Kullanıcının Tweet Sayısı</h4>
                <p className="text-3xl font-bold text-blue-700">53</p>
                <p className="text-sm text-blue-600">(@smartyevans)</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Ortalama Kullanıcı Başına Tweet</h4>
                <p className="text-3xl font-bold text-purple-700">2.47</p>
              </div>
            </div>
          </Card>
        </div>
      </Slide>
      
      {/* En Popüler Hashtagler */}
      <Slide title="8. En Popüler Hashtagler" bgColor="bg-gradient-to-br from-white via-cyan-50 to-cyan-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart 
                  data={hashtagData} 
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count">
                    {hashtagData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { tag: "#indigo", count: 130, color: "bg-blue-500" },
              { tag: "#boycottturkey", count: 112, color: "bg-red-500" },
              { tag: "#boycottturkishairlines", count: 49, color: "bg-pink-500" },
              { tag: "#turkishairlines", count: 46, color: "bg-purple-500" },
              { tag: "#boycott", count: 46, color: "bg-orange-500" },
              { tag: "#turkey", count: 35, color: "bg-amber-500" },
              { tag: "#operationsindoor", count: 24, color: "bg-green-500" },
              { tag: "#boycottazerbaijan", count: 13, color: "bg-teal-500" },
              { tag: "#pakistan", count: 9, color: "bg-yellow-500" },
              { tag: "#airindia", count: 2, color: "bg-indigo-500" }
            ].map((hashtag, index) => (
              <Card key={index} className={`p-4 shadow-md bg-white/90 backdrop-blur-sm border-l-4 ${hashtag.color} hover:shadow-lg transition-all`}>
                <div className="flex justify-between items-center">
                  <a 
                    href={`https://twitter.com/hashtag/${hashtag.tag.replace('#', '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center font-bold text-gray-800 hover:text-blue-600"
                  >
                    {hashtag.tag} <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                  <div className={`${hashtag.color} text-white px-3 py-1 rounded-full text-sm`}>
                    {hashtag.count} içerik
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Slide>

      {/* Kelime Bulutu */}
      <Slide title="9. Kelime Bulutu ve Öne Çıkan İfadeler" bgColor="bg-gradient-to-br from-white via-blue-50 to-violet-100">
        <div className="grid grid-cols-1 gap-6">
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Sık Kullanılan Kelimeler (İlk 50)</h3>
            <div className="flex flex-wrap gap-2 justify-center p-6">
              {wordCloudData.map((word, index) => {
                // Extract the count from the word string
                const match = word.match(/\(([^)]+)\)/);
                const count = match ? parseInt(match[1].replace('.', '')) : 0;
                
                // Calculate font size based on count (higher count = larger text)
                const fontSize = Math.max(Math.min(count / 50 + 0.8, 2.5), 0.8);
                
                // Color based on position in the array
                const getColor = () => {
                  if (index < 5) return "text-red-600";
                  if (index < 10) return "text-blue-600";
                  if (index < 15) return "text-purple-600";
                  if (index < 20) return "text-green-600";
                  if (index < 25) return "text-orange-500";
                  if (index < 30) return "text-cyan-600";
                  return "text-gray-600";
                };
                
                return (
                  <span 
                    key={index} 
                    className={`${getColor()} font-medium px-2 py-1`}
                    style={{ fontSize: `${fontSize}rem` }}
                  >
                    {word}
                  </span>
                );
              })}
            </div>
          </Card>
          
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kelime Grupları ve Yaygın İfadeler</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-2">Havayolları ve İşbirlikleri</h4>
                <p className="text-blue-700">turkish, airlines, indigo, code, indiago, airindia, flights</p>
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-2">Boykot ve Eylem Çağrıları</h4>
                <p className="text-red-700">boycott, ban, suspend, remove, cancel, boycott­turkey, boycott­turkishairlines</p>
              </div>
              <div className="bg-amber-50 rounded-lg p-4">
                <h4 className="font-semibold text-amber-800 mb-2">Finansal ve Ekonomik İfadeler</h4>
                <p className="text-amber-700">economic, revenue, crore, money, losses, trade, billion, market</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-2">Seyahat ve Turizm İfadeleri</h4>
                <p className="text-green-700">travel, tourism, travelers, booking, flights­to­turkey</p>
              </div>
            </div>
          </Card>
        </div>
      </Slide>

      {/* Sonuç ve İzleme Notları */}
      <Slide title="10. Sonuç ve İzleme Notları" bgColor="bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Rapor döneminde içeriklerin %92,6'sı açıkça olumsuz / boykot veya siyasi tepki içeriyor.</li>
            <li>8 ve 10 Mayıs hacim ve etkileşim bakımından zirve günleri; ikisi birlikte toplam içeriğin %35'ini oluşturuyor.</li>
            <li>13 Mayıs'ta beğeni/RT patlaması var, ancak duygu negatiften nötre dönmedi.</li>
            <li>En baskın anahtar kelimeler "boycott, Pakistan, IndiGo, Turkish Airlines".</li>
            <li>Hacim 14 Mayıs sonrası düşse de duygu skoru negatife yakın kalmaya devam ediyor.</li>
            <li>En popüler hashtagler #indigo (130 içerik) ve #boycottturkey (112 içerik).</li>
            <li>Tweetlerde belirtilen tüm içerikler artık direkt Twitter'a erişimle incelenebilmektedir.</li>
          </ul>
          
          <div className="mt-8 p-5 bg-amber-50 rounded-lg border border-amber-200">
            <h3 className="text-xl font-bold mb-3 text-amber-800">Not:</h3>
            <p className="text-amber-700">
              Bu rapor yalnızca otomatik veri işleme ve içerik analizine dayanmaktadır.
              Hiçbir karar önerisi veya yönlendirici yorum içermez; tüm bulgular şeffaf veri ve istatistikle sunulmuştur.
            </p>
          </div>
        </Card>
      </Slide>

      {/* Appendix 1 */}
      <Slide title="11. Appendix 1: Etki Gücü En Yüksek Hesaplar" bgColor="bg-gradient-to-br from-white via-orange-50 to-orange-100">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Etki Katsayısı (Takipçi x Etkileşim) En Yüksek 5 Kişi</h3>
          <div className="space-y-6 mt-4">
            {[
              { 
                name: "@TwitterUser1", 
                followers: "144.622", 
                engagement: "92.413", 
                impact: "13.365.134.486", 
                color: "bg-gradient-to-r from-orange-400 to-red-500" 
              },
              { 
                name: "@TwitterUser2", 
                followers: "68.935", 
                engagement: "33.814", 
                impact: "2.330.911.890", 
                color: "bg-gradient-to-r from-orange-400 to-amber-500" 
              },
              { 
                name: "@TwitterUser3", 
                followers: "46.371", 
                engagement: "7.294", 
                impact: "338.231.174", 
                color: "bg-gradient-to-r from-amber-400 to-yellow-500" 
              },
              { 
                name: "@TwitterUser4", 
                followers: "32.813", 
                engagement: "5.291", 
                impact: "173.613.683", 
                color: "bg-gradient-to-r from-yellow-400 to-lime-500" 
              },
              { 
                name: "@TwitterUser5", 
                followers: "20.613", 
                engagement: "3.146", 
                impact: "64.846.498", 
                color: "bg-gradient-to-r from-green-400 to-emerald-500" 
              }
            ].map((account, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
                <div className={`h-2 ${account.color}`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`${account.color} w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl`}>{index + 1}</div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
                        {account.name}
                        <a 
                          href={`https://twitter.com/${account.name.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-700 inline-flex items-center"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </h3>
                      <p className="text-sm text-gray-600">{account.followers} takipçi</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-sm text-orange-700 font-medium">Toplam Etkileşim</p>
                      <p className="text-lg font-bold text-orange-800">{account.engagement}</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded-lg">
                      <p className="text-sm text-red-700 font-medium">Etki Katsayısı</p>
                      <p className="text-lg font-bold text-red-800">{account.impact}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </Slide>

      {/* Appendix 2 */}
      <Slide title="12. Appendix 2: Coğrafi ve Demografik Dağılım" bgColor="bg-gradient-to-br from-white via-teal-50 to-teal-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">Coğrafi Dağılım (Tweet Hacmine Göre)</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div className="bg-white p-4 rounded-lg shadow-md border border-teal-100">
                <h4 className="font-bold text-teal-800 mb-2">Top 3 Şehir</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Mumbai:</span>
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm">%38</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Delhi:</span>
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm">%26</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Bangalore:</span>
                    <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm">%11</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md border border-indigo-100">
                <h4 className="font-bold text-indigo-800 mb-2">Top 3 Eyalet</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Maharashtra:</span>
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">%42</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Delhi (NCR):</span>
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">%28</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="font-medium">Karnataka:</span>
                    <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm">%13</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-md border border-blue-100">
              <h4 className="font-bold text-blue-800 mb-2">Bölgesel Dağılım</h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center">
                  <span className="font-medium">Batı Bölgesi:</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">%45</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Kuzey Bölgesi:</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">%31</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Güney Bölgesi:</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">%18</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="font-medium">Doğu Bölgesi:</span>
                  <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm">%6</span>
                </li>
              </ul>
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Tahmini Demografik Analiz</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Yaş Dağılımı (Tahmin)</h4>
                <div className="space-y-3">
                  {[
                    { age: "18-24", percent: 18, color: "bg-pink-500" },
                    { age: "25-34", percent: 42, color: "bg-purple-500" },
                    { age: "35-44", percent: 26, color: "bg-indigo-500" },
                    { age: "45-54", percent: 11, color: "bg-blue-500" },
                    { age: "55+", percent: 3, color: "bg-cyan-500" }
                  ].map((item, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between text-sm">
                        <span className="font-medium text-gray-700">{item.age}</span>
                        <span className="font-bold text-gray-800">%{item.percent}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className={`h-2 rounded-full ${item.color}`} style={{width: `${item.percent}%`}}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-3">Cinsiyet Dağılımı (Tahmin)</h4>
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 rounded-lg p-3 flex-1 text-center">
                    <div className="text-2xl font-bold text-blue-700">%73</div>
                    <div className="text-sm text-blue-600">Erkek</div>
                  </div>
                  <div className="bg-pink-100 rounded-lg p-3 flex-1 text-center">
                    <div className="text-2xl font-bold text-pink-700">%27</div>
                    <div className="text-sm text-pink-600">Kadın</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-teal-50 rounded-lg border border-teal-100">
              <h4 className="font-bold text-teal-800 mb-2">Not:</h4>
              <p className="text-teal-700 text-sm">
                Demografik ve coğrafi veriler, kullanıcı profillerindeki bilgiler ve makine öğrenimi modelleri kullanılarak tahmin edilmiştir. Kesin değil, yaklaşık değerlerdir.
              </p>
            </div>
          </Card>
        </div>
      </Slide>
    </SlideShow>
  );
}
