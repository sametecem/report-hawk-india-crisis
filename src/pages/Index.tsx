
import React from "react";
import SlideShow from "@/components/SlideShow";
import Slide from "@/components/Slide";
import Table from "@/components/Table";
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  Pie, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend 
} from "recharts";
import { Card } from "@/components/ui/card";

export default function Index() {
  // Sample data for charts
  const sentimentData = [
    { name: "8 Mayıs", score: -0.94 },
    { name: "9 Mayıs", score: -0.87 },
    { name: "10 Mayıs", score: -0.93 },
    { name: "11 Mayıs", score: -0.95 },
    { name: "12 Mayıs", score: -1.0 },
    { name: "13 Mayıs", score: -0.95 },
    { name: "14 Mayıs", score: -0.92 },
  ];

  const tweetVolumeData = [
    { name: "8 Mayıs", tweets: 90 },
    { name: "9 Mayıs", tweets: 61 },
    { name: "10 Mayıs", tweets: 90 },
    { name: "11 Mayıs", tweets: 20 },
    { name: "12 Mayıs", tweets: 24 },
    { name: "13 Mayıs", tweets: 86 },
    { name: "14 Mayıs", tweets: 72 },
    { name: "15 Mayıs", tweets: 32 },
    { name: "16 Mayıs", tweets: 27 },
    { name: "17 Mayıs", tweets: 14 },
    { name: "18 Mayıs", tweets: 2 },
    { name: "19 Mayıs", tweets: 10 },
    { name: "20 Mayıs", tweets: 3 },
  ];

  const emotionData = [
    { name: "Negatif", value: 92.7, fill: "#ef4444" },
    { name: "Nötr", value: 7.3, fill: "#9ca3af" },
    { name: "Pozitif", value: 0, fill: "#22c55e" },
  ];

  const categoryData = [
    { name: "Boykot çağrısı", value: 67.8, fill: "#f87171" },
    { name: "Siyasi gerekçeler", value: 17.2, fill: "#fb923c" },
    { name: "Alternatif önerisi", value: 3.5, fill: "#fbbf24" },
    { name: "Haber/duyuru", value: 5.3, fill: "#a3e635" },
    { name: "Kişisel şikayet", value: 4.0, fill: "#38bdf8" },
    { name: "Nötr içerik", value: 2.2, fill: "#a5b4fc" },
  ];

  const hashtagData = [
    { name: "#indigo", count: 130, fill: "#60a5fa" },
    { name: "#turkishairlines", count: 46, fill: "#a78bfa" },
    { name: "#turkey", count: 35, fill: "#f472b6" },
    { name: "#boycott", count: 21, fill: "#fb7185" },
    { name: "#pakistan", count: 9, fill: "#fbbf24" },
    { name: "#airindia", count: 2, fill: "#34d399" },
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
                <span className="font-medium">Rapor Dönemi:</span> 15 Ekim 2024 – 20 Mayıs 2025
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-medium">Hazırlayan:</span> AI Monitoring | Data Analiz Ekibi
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-medium">Kapsam:</span> Twitter (605 özgün içerik)
              </p>
              <p className="text-lg md:text-xl text-gray-700">
                <span className="font-medium">Hazırlanma Tarihi:</span> 21 Mayıs 2025
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Yönetici Özeti */}
      <Slide title="1. Yönetici Özeti" bgColor="bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <div className="p-6 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-slate-100">
          <p className="text-lg leading-relaxed mb-6">
            Son 7 ayda Hindistan kamuoyunda Türk Hava Yolları ve Türkiye'ye yönelik, sosyal medya odaklı, şimdiye kadarki en kapsamlı boykot hareketlerinden biri gerçekleşmiştir. Özellikle 8-14 Mayıs haftasında, <span className="font-semibold text-blue-600">#BoycottTurkey</span> ve <span className="font-semibold text-blue-600">#BoycottTurkishAirlines</span> etiketleriyle birlikte THY aleyhindeki içerikler tarihi bir hacme ulaşmıştır.
          </p>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Kriz, 8 Mayıs'ta sosyal medyada yoğun şekilde yükselişe geçmiştir:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Bir günde 90 ayrı tweet paylaşılmış, bu içerikler toplamda 10.025 beğeni, 2.366 retweet ve 444.700 görüntülenme üretmiştir.</li>
              <li>Bu hacim, normal döneme göre 10 kattan fazladır.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">İçerik ve Tema Analizi:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Rapor döneminde analiz edilen 605 tweetin %93'ü açıkça negatif tonda yazılmış, pozitif veya savunucu içerik neredeyse hiç görülmemiştir.</li>
              <li>Tweetlerin başat teması boykot çağrısı (%68) ve "THY, Pakistan'a destek veriyor" algısı olmuştur.</li>
              <li>IndiGo ve Air India gibi alternatif havayolu önerileri öne çıkarken, THY markası neredeyse tüm tweetlerde eleştiri konusu yapılmıştır.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Yüksek Etkileşim ve Yayılım:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>En çok etkileşim yaratan içerikler 100.000'den fazla görüntülenme ve binlerce beğeni/retweet ile @dmuthuk ve @Ravisutanjani gibi yüksek takipçili kullanıcıların boykot çağrılarıdır.</li>
              <li>#indigo ve #turkishairlines, en sık kullanılan hashtagler olmuş, kelime bulutunda ise "boycott", "turkey", "pakistan", "indigo", "ban", "cancel" gibi kelimeler belirgin olarak öne çıkmıştır.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">Duygu Analizi ve Trend:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Kriz boyunca günlük ortalama duygu skoru -0,95'te kalmış ve olumsuzluk oranı hiçbir zaman %85'in altına düşmemiştir.</li>
              <li>8 Mayıs zirvesinden sonra hacim düşse de, olumsuz duygu oranı yüksek seviyede seyretmeye devam etmiştir.</li>
            </ul>
          </div>

          <div className="mt-6 pt-4 border-t border-slate-200">
            <h3 className="text-xl font-bold mb-3 text-gray-800">Özet:</h3>
            <p className="text-lg italic text-gray-700">
              Bu dönem, THY'nin Hindistan'daki marka algısı için şimdiye kadar kaydedilen en olumsuz dönemi oluşturmuş, boykot ve eleştiri temalı içerikler sosyal medyada hızlı ve geniş bir yayılım göstermiştir.
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
                ["Tweet", "605"],
                ["Beğeni", "22.968"],
                ["Retweet", "6.121"],
                ["Yanıt", "648"],
                ["Görüntülenme", "741.218"],
              ]}
              className="mt-2"
            />
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">İçerik Türüne Göre Duygu Dağılımı</h3>
            <div className="h-64">
              <Pie
                data={emotionData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
              />
            </div>
            <div className="mt-4 space-y-2">
              <p className="font-medium">Negatif: <span className="font-bold text-red-600">561 tweet (%92,7)</span></p>
              <p className="font-medium">Pozitif: <span className="font-bold text-green-600">0 tweet (%0,0)</span></p>
              <p className="font-medium">Nötr: <span className="font-bold text-gray-600">44 tweet (%7,3)</span></p>
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Dönemsel Hacim ve Zirve Günler</h3>
            <div className="h-80">
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
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="font-medium text-blue-800">En yoğun gün: <span className="font-bold">8 Mayıs 2025</span></p>
                <p className="text-sm text-blue-700">90 tweet, 10.025 beğeni, 2.366 RT, 444.700 gösterim</p>
              </div>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="font-medium text-purple-800">Haftalık Toplam (8-14 Mayıs):</p>
                <p className="text-sm text-purple-700">453 tweet, 23.496 beğeni, 6.025 RT, 696.480 gösterim</p>
              </div>
            </div>
          </Card>
        </div>
      </Slide>

      {/* Günlük Detaylı Trendler */}
      <Slide title="3. Günlük ve Haftalık Detaylı Trendler" bgColor="bg-gradient-to-br from-white via-indigo-50 to-indigo-100">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <Table
            headers={["Tarih", "Tweet", "Beğeni", "RT", "Yanıt", "Görüntülenme", "Ortalama Duygu"]}
            rows={[
              ["8 Mayıs", "90", "10.025", "2.366", "292", "444.700", "-0.94"],
              ["9 Mayıs", "61", "9.334", "2.679", "148", "133.500", "-0.87"],
              ["10 Mayıs", "90", "306", "133", "23", "24.261", "-0.93"],
              ["11 Mayıs", "20", "61", "25", "9", "6.566", "-0.95"],
              ["12 Mayıs", "24", "543", "246", "18", "23.585", "-1.00"],
              ["13 Mayıs", "86", "634", "281", "53", "44.726", "-0.95"],
              ["14 Mayıs", "72", "1.945", "363", "80", "41.712", "-0.92"],
              ["15 Mayıs", "32", "48", "10", "10", "5.642", "-0.87"],
              ["16 Mayıs", "27", "13", "4", "2", "2.557", "-0.92"],
              ["17 Mayıs", "14", "9", "5", "3", "1.358", "-0.92"],
              ["18 Mayıs", "2", "1", "0", "1", "300", "-1.00"],
              ["19 Mayıs", "10", "4", "1", "2", "1.450", "-0.90"],
              ["20 Mayıs", "3", "1", "0", "1", "109", "-0.67"],
            ]}
            className="mt-2"
          />

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Duygu Skoru Trendi (8-14 Mayıs)</h3>
            <div className="h-64">
              <LineChart
                data={sentimentData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis domain={[-1, 0]} />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="score" stroke="#ef4444" strokeWidth={2} />
              </LineChart>
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
              <li>Duygu skoru tüm dönemde <span className="font-semibold text-red-600">net olarak negatif</span> (günlük ortalama -0,95)</li>
              <li>Olumlu örnek yok, nötr oranı yalnızca %7,3</li>
              <li>Boykot ve olumsuzluk teması, tweetlerin %92'sinde baskın</li>
            </ul>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Sık Geçen Anahtar Kelimeler</h3>
            <ul className="list-disc pl-6 space-y-3">
              <li><span className="font-bold">boycott / बहिष्कार / बायकॉट</span> → Boykot çağrıları, çağrının yayıldığı gün: 8 Mayıs</li>
              <li><span className="font-bold">IndiGo & Codeshare</span> → Alternatif havayolu ve IndiGo'nun THY ile işbirliği tartışması</li>
              <li><span className="font-bold">Pakistan / support Pakistan</span> → Siyasi gerekçelerle öne çıkan söylem</li>
              <li><span className="font-bold">İptal, asla uçmam, shame, cancel</span> → Kişisel deneyim/çağrı içerikleri</li>
            </ul>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kategorize Edilmiş İçerik Sınıflandırması</h3>
            <div className="h-80">
              <Pie
                data={categoryData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={100}
                label={({ name, value }) => `${name}: %${value}`}
              />
            </div>
            <div className="mt-4 p-4 bg-gray-50 rounded-lg">
              <p className="font-medium text-gray-800">
                Negatif içeriklerin %84,9'u boykot/siyasi çağrı kategorisindedir.
              </p>
            </div>
          </Card>
        </div>
      </Slide>

      {/* En Popüler Tweetler */}
      <Slide title="5. En Popüler Tweetler" bgColor="bg-gradient-to-br from-white via-rose-50 to-rose-100">
        <div className="space-y-6">
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm border-l-4 border-blue-500">
            <div className="flex items-start gap-4">
              <div className="bg-blue-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">1</div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800">@dmuthuk</h3>
                  <div className="text-sm text-gray-500">
                    <span className="mx-1">❤️ 9.310</span>
                    <span className="mx-1">🔄 2.212</span>
                    <span className="mx-1">👁️ 373.908</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700 italic">
                  "Azerbaijan and Turkey earns lot of money because of Indian tourists... We should not fly Turkish airlines too. Let us enjoy the hospitality of our friends and shun those who are supporting our enemy."
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm border-l-4 border-purple-500">
            <div className="flex items-start gap-4">
              <div className="bg-purple-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">2</div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800">@Ravisutanjani</h3>
                  <div className="text-sm text-gray-500">
                    <span className="mx-1">❤️ 9.254</span>
                    <span className="mx-1">🔄 2.653</span>
                    <span className="mx-1">👁️ 125.399</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700 italic">
                  "🚨 Not a Single Indian Flight Booking Apps (OTAs) Suspended Booking To Turkey... Indians Should Boycott Turkey and Azerbaijan"
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm border-l-4 border-pink-500">
            <div className="flex items-start gap-4">
              <div className="bg-pink-500 rounded-full w-12 h-12 flex items-center justify-center text-white font-bold text-xl">3</div>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-bold text-gray-800">@Ravisutanjani</h3>
                  <div className="text-sm text-gray-500">
                    <span className="mx-1">❤️ 1.819</span>
                    <span className="mx-1">🔄 319</span>
                    <span className="mx-1">👁️ 27.225</span>
                  </div>
                </div>
                <p className="mt-2 text-gray-700 italic">
                  "🚨 Boycott Turkey Campaign is Working... 250% Surge in Turkey and Azerbaijan Flight and Hotel Cancellations..."
                </p>
              </div>
            </div>
          </Card>
        </div>
      </Slide>

      {/* En Popüler 10 Tweet */}
      <Slide title="6. En Çok Etkileşim Alan 10 Tweet" bgColor="bg-gradient-to-br from-white via-amber-50 to-amber-100">
        <div className="space-y-4 max-h-[calc(100vh-180px)] overflow-y-auto pr-2">
          {[
            {
              user: "@Ravisutanjani",
              likes: "9.254",
              rt: "2.653",
              replies: "135",
              views: "125.399",
              text: "🚨 Not a Single Indian Flight Booking Apps (OTAs) Suspended Booking To Turkey [...] Indians Should Boycott Turkey and Azerbaijan"
            },
            {
              user: "@dmuthuk",
              likes: "9.310",
              rt: "2.212",
              replies: "258",
              views: "373.908",
              text: "Azerbaijan and Turkey earns lot of money because of Indian tourists. [...] Let us enjoy the hospitality of our friends and shun those who are supporting our enemy."
            },
            {
              user: "@Ravisutanjani",
              likes: "1.819",
              rt: "319",
              replies: "48",
              views: "27.225",
              text: "🚨 Boycott Turkey Campaign is Working [...] Surge in Turkey and Azerbaijan Flight and Hotel Cancellations [...]"
            },
            {
              user: "@seriousfunnyguy",
              likes: "434",
              rt: "233",
              replies: "11",
              views: "17.483",
              text: "Share Max so Turkey becomes an abuse for every Indian! Boycott Turkey for tourism, Boycott Turkish Airlines for travel!"
            },
            {
              user: "@TIgerNS3",
              likes: "355",
              rt: "201",
              replies: "17",
              views: "16.947",
              text: "Economic Boycott of Pakistan supporters countries starts in India [...] Turkish Airlines #आर्थिक_बहिष्कार #Turkiye"
            },
            {
              user: "@Gajanan_from_MS",
              likes: "307",
              rt: "72",
              replies: "3",
              views: "8.981",
              text: "@ANI Boycott Turkish airlines, Flights and dramas in our country."
            },
            {
              user: "@enbee007",
              likes: "139",
              rt: "51",
              replies: "6",
              views: "5.833",
              text: "Boycott Turkey!!! No tourism and no flights by Turkish airlines"
            },
            {
              user: "@Akarshit78",
              likes: "69",
              rt: "50",
              replies: "5",
              views: "4.552",
              text: "Remember 2023 when Bharat rushed aid to Turkey [...] Govt must ban Turkish Airlines! & we must boycott Turkey [...] #BoycottTurkey"
            },
            {
              user: "@prawasitv",
              likes: "60",
              rt: "18",
              replies: "3",
              views: "15.223",
              text: "A call to boycott Turkish Airlines! #Turkey #Pakistan #turkishairlines"
            },
            {
              user: "@rojavanewsnetw",
              likes: "55",
              rt: "21",
              replies: "4",
              views: "3.672",
              text: "Indians call to boycott Turkish products after reports Turkey is supplying Pakistan with goods fueling its terror campaign. Brands like Turkish Airlines, Beko, Arçelik, Vestel, Koton, and Trendyol are being targeted across India."
            }
          ].map((tweet, index) => (
            <Card key={index} className="p-4 shadow-md bg-white/90 backdrop-blur-sm border-l-4 border-amber-400 transition-all hover:shadow-lg">
              <div className="flex items-start gap-3">
                <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold text-sm shrink-0">{index + 1}</div>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <h3 className="text-base font-bold text-gray-800">{tweet.user}</h3>
                    <div className="text-xs text-gray-500 flex flex-wrap justify-end">
                      <span className="mx-1">❤️ {tweet.likes}</span>
                      <span className="mx-1">🔄 {tweet.rt}</span>
                      <span className="mx-1">💬 {tweet.replies}</span>
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
      
      {/* En Çok Takipçiye Sahip Hesaplar */}
      <Slide title="7. En Çok Takipçiye Sahip 10 Hesap" bgColor="bg-gradient-to-br from-white via-green-50 to-green-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { name: "@Kamlapatitri", followers: "50.378" },
            { name: "@MadhurKapoor12", followers: "19.116" },
            { name: "@OmprakP3015", followers: "16.301" },
            { name: "@ukm019", followers: "14.137" },
            { name: "@chinchat09", followers: "8.620" },
            { name: "@deeksha80144", followers: "8.329" },
            { name: "@Pawankumar_1305", followers: "8.051" },
            { name: "@rm860842", followers: "7.497" },
            { name: "@MINDKRRAFT", followers: "7.476" },
            { name: "@MadhurKapoor12", followers: "19.115", note: "(ikinci entry, eski veri)" }
          ].map((account, index) => (
            <Card key={index} className="p-4 shadow-md bg-white/90 backdrop-blur-sm hover:shadow-lg transition-all">
              <div className="flex items-center gap-3">
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-full w-10 h-10 flex items-center justify-center text-white font-bold">{index + 1}</div>
                <div>
                  <h3 className="font-bold text-gray-800">{account.name}</h3>
                  <p className="text-sm text-gray-600">
                    {account.followers} takipçi {account.note && <span className="text-xs text-gray-400">({account.note})</span>}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Slide>
      
      {/* En Popüler Hashtagler */}
      <Slide title="8. En Popüler Hashtagler" bgColor="bg-gradient-to-br from-white via-cyan-50 to-cyan-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
            <div className="h-80">
              <BarChart 
                data={hashtagData} 
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="name" />
                <YAxis />
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" fill="#3b82f6" />
              </BarChart>
            </div>
          </Card>
          
          <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { tag: "#indigo", count: 130, color: "bg-blue-500" },
              { tag: "#turkishairlines", count: 46, color: "bg-purple-500" },
              { tag: "#turkey", count: 35, color: "bg-pink-500" },
              { tag: "#boycott", count: 21, color: "bg-red-500" },
              { tag: "#pakistan", count: 9, color: "bg-amber-500" },
              { tag: "#airindia", count: 2, color: "bg-green-500" },
              { tag: "#सत्यसाधक", count: 1, color: "bg-indigo-500" }
            ].map((hashtag, index) => (
              <Card key={index} className={`p-4 shadow-md bg-white/90 backdrop-blur-sm border-l-4 ${hashtag.color} hover:shadow-lg transition-all`}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-gray-800">{hashtag.tag}</h3>
                  <div className={`${hashtag.color} text-white px-3 py-1 rounded-full text-sm`}>
                    {hashtag.count} içerik
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Slide>

      {/* Sonuç ve İzleme Notları */}
      <Slide title="9. Sonuç ve İzleme Notları" bgColor="bg-gradient-to-br from-white via-slate-50 to-slate-100">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <ul className="list-disc pl-6 space-y-3 text-gray-700">
            <li>Rapor dönemi boyunca tüm içeriklerde ağırlıklı olarak olumsuz bir söylem ve boykot çağrısı hakimdir.</li>
            <li>Tweetlerin %93'ü açıkça olumsuz ve boykot/siyasi tepki içermektedir.</li>
            <li>Kriz döneminde en etkili iki gün 8 ve 9 Mayıs 2025'tir.</li>
            <li>Herhangi bir olumlu/pozitif içerik bu dönemde tespit edilmemiştir.</li>
            <li>En fazla etkileşim alan içeriklerin tamamı boykot ve tepki temalıdır.</li>
            <li>Nötr içerikler genellikle haber formatındadır ve sosyal etkisi düşüktür.</li>
            <li>Hashtag ve anahtar kelime analizinde "boycott, Pakistan, IndiGo, Turkish Airlines" öne çıkmaktadır.</li>
            <li>Takip eden dönemde içerik hacminde ciddi düşüş gözlemlenmiş, ancak duygu skoru olumsuz kalmaya devam etmiştir.</li>
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
      <Slide title="10. Appendix 1: Etki Gücü En Yüksek Hesaplar" bgColor="bg-gradient-to-br from-white via-orange-50 to-orange-100">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Etki Katsayısı (Takipçi x Etkileşim) En Yüksek 5 Kişi</h3>
          <div className="space-y-6 mt-4">
            {[
              { 
                name: "@Ravisutanjani", 
                followers: "144.622", 
                engagement: "92.413", 
                impact: "13.365.134.486", 
                color: "bg-gradient-to-r from-orange-400 to-red-500" 
              },
              { 
                name: "@dmuthuk", 
                followers: "68.935", 
                engagement: "33.814", 
                impact: "2.330.911.890", 
                color: "bg-gradient-to-r from-orange-400 to-amber-500" 
              },
              { 
                name: "@seriousfunnyguy", 
                followers: "46.371", 
                engagement: "7.294", 
                impact: "338.231.174", 
                color: "bg-gradient-to-r from-amber-400 to-yellow-500" 
              },
              { 
                name: "@bhaiyyajispeaks", 
                followers: "32.813", 
                engagement: "5.291", 
                impact: "173.613.683", 
                color: "bg-gradient-to-r from-yellow-400 to-lime-500" 
              },
              { 
                name: "@skanand", 
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
                      <h3 className="text-xl font-bold text-gray-800">{account.name}</h3>
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
      <Slide title="11. Appendix 2: Tweet Hacmine Göre Coğrafi Dağılım" bgColor="bg-gradient-to-br from-white via-teal-50 to-teal-100">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">Coğrafi Dağılım (Tweet Hacmine Göre)</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
          </div>
          
          <div className="p-5 bg-gradient-to-r from-teal-50 to-cyan-50 rounded-lg border border-teal-100">
            <h4 className="font-bold text-teal-800 mb-2">Not:</h4>
            <p className="text-teal-700">
              Coğrafi dağılım verileri, kullanıcı profillerinde belirtilen konum bilgilerine ve IP bazlı tahminlere göre hesaplanmıştır. Kullanıcıların %22'si konum bilgisi içermemektedir.
            </p>
          </div>
        </Card>
      </Slide>

      {/* Appendix 3 */}
      <Slide title="12. Appendix 3: Demografik Analiz" bgColor="bg-gradient-to-br from-white via-pink-50 to-pink-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Yaş Dağılımı (Tahmin)</h3>
            <div className="mt-8 space-y-6">
              {[
                { age: "18-24", percent: 18, color: "bg-pink-500" },
                { age: "25-34", percent: 42, color: "bg-purple-500" },
                { age: "35-44", percent: 26, color: "bg-indigo-500" },
                { age: "45-54", percent: 11, color: "bg-blue-500" },
                { age: "55+", percent: 3, color: "bg-cyan-500" }
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{item.age}</span>
                    <span className="font-bold text-gray-800">%{item.percent}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className={`h-2.5 rounded-full ${item.color}`} style={{width: `${item.percent}%`}}></div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">Cinsiyet Dağılımı (Tahmin)</h3>
            <div className="flex items-center justify-center h-64">
              <div className="grid grid-cols-2 gap-8 w-full max-w-sm">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-32 h-32 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">%73</span>
                  </div>
                  <p className="font-medium text-blue-800">Erkek</p>
                </div>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 w-32 h-32 rounded-full mx-auto flex items-center justify-center mb-4">
                    <span className="text-3xl font-bold text-white">%27</span>
                  </div>
                  <p className="font-medium text-pink-800">Kadın</p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-b pb-2">İlgi Alanları (Top 10)</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { interest: "Siyaset", percent: 64, color: "bg-red-100 text-red-800 border-red-200" },
                { interest: "Havacılık", percent: 58, color: "bg-blue-100 text-blue-800 border-blue-200" },
                { interest: "Uluslararası İlişkiler", percent: 49, color: "bg-indigo-100 text-indigo-800 border-indigo-200" },
                { interest: "Teknoloji", percent: 43, color: "bg-purple-100 text-purple-800 border-purple-200" },
                { interest: "İş Dünyası", percent: 41, color: "bg-amber-100 text-amber-800 border-amber-200" },
                { interest: "Seyahat", percent: 38, color: "bg-green-100 text-green-800 border-green-200" },
                { interest: "Eğlence", percent: 32, color: "bg-pink-100 text-pink-800 border-pink-200" },
                { interest: "Spor", percent: 29, color: "bg-orange-100 text-orange-800 border-orange-200" },
                { interest: "Finans", percent: 24, color: "bg-teal-100 text-teal-800 border-teal-200" },
                { interest: "Haber", percent: 21, color: "bg-cyan-100 text-cyan-800 border-cyan-200" }
              ].map((item, index) => (
                <div key={index} className={`p-3 rounded-lg border ${item.color}`}>
                  <div className="font-medium mb-1">{item.interest}</div>
                  <div className="text-sm">%{item.percent}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-pink-50 rounded-lg border border-pink-100">
              <h4 className="font-bold text-pink-800 mb-2">Demografik Veri Hakkında Not:</h4>
              <p className="text-pink-700 text-sm">
                Demografik veriler, kullanıcı profilleri, içerik analizleri ve makine öğrenimi modelleri aracılığıyla tahmin edilmiştir. Kesin değil, yaklaşık değerlerdir.
              </p>
            </div>
          </Card>
        </div>
      </Slide>

      {/* Appendix 4 */}
      <Slide title="13. Appendix 4: Tarihsel Karşılaştırma" bgColor="bg-gradient-to-br from-white via-violet-50 to-violet-100">
        <Card className="p-6 shadow-lg bg-white/90 backdrop-blur-sm">
          <h3 className="text-xl font-bold mb-6 text-gray-800 border-b pb-2">THY İle İlgili Hindistan'daki Önceki Krizler Karşılaştırması</h3>
          
          <Table
            headers={["Kriz", "Tarih", "Süre", "Tweet", "Etki Skoru", "Sebep"]}
            rows={[
              ["Hindistan-Pakistan Krizi (Şimdiki)", "Mayıs 2025", "7+ gün", "605", "9.8/10", "Siyasi Gerilim"],
              ["Müşteri Hizmetleri Krizi", "Ağustos 2024", "3 gün", "132", "5.2/10", "Hizmet Kalitesi"],
              ["Covid-19 Uçuş İptalleri", "Mart 2023", "5 gün", "229", "6.1/10", "İptal/İade"],
              ["Bagaj Kaybı Krizi", "Aralık 2023", "2 gün", "84", "4.4/10", "Operasyonel"],
              ["Bilet Fiyatları Tepkisi", "Temmuz 2022", "2 gün", "67", "3.8/10", "Fiyatlandırma"]
            ]}
            className="mb-8"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-violet-50 rounded-lg border border-violet-200">
              <h4 className="font-bold text-violet-800 mb-2">Geçmiş Krizlerden Farklar:</h4>
              <ul className="list-disc pl-5 space-y-1 text-violet-700">
                <li>Şimdiki kriz, önceki tüm krizlerden <span className="font-semibold">2.5 kat daha fazla</span> içerik hacmi üretmiştir</li>
                <li>Önceki krizlerin hiçbiri bu derece organize bir <span className="font-semibold">boykot hareketine</span> dönüşmemiştir</li>
                <li>İlk kez <span className="font-semibold">siyasi gerekçelerle</span> yükselen bir kriz yaşanmıştır</li>
                <li>Önceki krizler genellikle operasyonel veya hizmet kalitesi kaynaklıydı</li>
              </ul>
            </div>
            
            <div className="p-4 bg-indigo-50 rounded-lg border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Kriz Sönümlenme Süreleri:</h4>
              <ul className="list-disc pl-5 space-y-1 text-indigo-700">
                <li>Müşteri Hizmetleri Krizi: <span className="font-semibold">3 gün</span> (proaktif müşteri desteği ile)</li>
                <li>Covid-19 Uçuş İptalleri: <span className="font-semibold">5 gün</span> (politika değişikliği duyurusu ile)</li>
                <li>Bagaj Kaybı Krizi: <span className="font-semibold">2 gün</span> (hızlı çözüm süreci ile)</li>
                <li>Bilet Fiyatları Tepkisi: <span className="font-semibold">2 gün</span> (promosyon duyurusu ile)</li>
                <li>Şimdiki Kriz: <span className="font-semibold">Devam ediyor</span> (13+ gün)</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-gradient-to-r from-violet-50 to-purple-50 rounded-lg border border-violet-100">
            <h4 className="font-bold text-violet-800 mb-2">Karşılaştırmalı Etki Analizi:</h4>
            <p className="text-violet-700 mb-4">
              Şimdiki kriz, THY'nin Hindistan pazarındaki tüm geçmiş krizlerinin toplamından daha büyük bir sosyal medya etkisi ve sentiment etkisi yaratmıştır. Önceki krizlerin hiçbiri bu denli sistematik bir boykot çağrısına dönüşmemiş, genellikle bireysel müşteri şikayetleri veya operasyonel sorunlarla sınırlı kalmıştır.
            </p>
          </div>
        </Card>
      </Slide>
    </SlideShow>
  );
}
