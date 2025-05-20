
import React from 'react';
import SlideShow from '@/components/SlideShow';
import Slide from '@/components/Slide';
import Table from '@/components/Table';
import DataChart from '@/components/DataChart';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, ChartBar, FileText, Info } from 'lucide-react';

// Sample data for charts
const weeklyTweetData = [
  { date: '8 Mayıs', Tweet: 90 },
  { date: '9 Mayıs', Tweet: 61 },
  { date: '10 Mayıs', Tweet: 90 },
  { date: '11 Mayıs', Tweet: 20 },
  { date: '12 Mayıs', Tweet: 24 },
  { date: '13 Mayıs', Tweet: 86 },
  { date: '14 Mayıs', Tweet: 72 },
];

const categoryData = [
  { name: 'Boykot çağrısı', value: 67.8 },
  { name: 'Siyasi gerekçeler', value: 17.2 },
  { name: 'Alternatif marka/ülke', value: 3.5 },
  { name: 'Haber/duyuru', value: 5.3 },
  { name: 'Kişisel şikayet', value: 4.0 },
  { name: 'Nötr içerik', value: 2.2 },
];

const dailyData = [
  { date: '8 Mayıs', Beğeni: 10025, RT: 2366, Görüntülenme: 444700 / 10000 },
  { date: '9 Mayıs', Beğeni: 9334, RT: 2679, Görüntülenme: 133500 / 10000 },
  { date: '10 Mayıs', Beğeni: 306, RT: 133, Görüntülenme: 24261 / 10000 },
  { date: '11 Mayıs', Beğeni: 61, RT: 25, Görüntülenme: 6566 / 10000 },
  { date: '12 Mayıs', Beğeni: 543, RT: 246, Görüntülenme: 23585 / 10000 },
  { date: '13 Mayıs', Beğeni: 634, RT: 281, Görüntülenme: 44726 / 10000 },
  { date: '14 Mayıs', Beğeni: 1945, RT: 363, Görüntülenme: 41712 / 10000 },
];

const Index = () => {
  return (
    <SlideShow>
      {/* Cover Slide */}
      <Slide bgColor="bg-gradient-to-br from-slate-800 to-slate-900">
        <div className="flex flex-col items-center justify-center h-full text-white">
          <Badge className="mb-8 bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 px-4 py-1 text-sm uppercase tracking-wide">Kurumsal Rapor</Badge>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-300">
            THY Hindistan Krizi <br className="hidden md:inline" />Monitoring Raporu
          </h1>
          <div className="text-xl md:text-2xl mb-12 opacity-90 text-center font-light">
            15 Ekim 2024 – 20 Mayıs 2025
          </div>
          <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl border border-white/20 flex flex-col items-center text-slate-100 text-sm md:text-base space-y-2 shadow-xl">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-300" />
              <p>Hazırlayan: AI Monitoring | Data Analiz Ekibi</p>
            </div>
            <div className="flex items-center gap-2">
              <ChartBar className="w-4 h-4 text-blue-300" />
              <p>Kapsam: Twitter (605 özgün içerik)</p>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-blue-300" />
              <p>Hazırlanma Tarihi: 21 Mayıs 2025</p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 2: Yönetici Özeti */}
      <Slide title="1. Yönetici Özeti">
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100/50 p-6 rounded-xl border-l-4 border-blue-500 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-blue-800">
              <Info className="w-5 h-5 text-blue-500" />
              Kriz Özeti:
            </h3>
            <p className="text-gray-700 leading-relaxed">
              15 Ekim 2024 - 20 Mayıs 2025 aralığında, Hindistan kamuoyunda ve medyasında, Türk Hava Yolları'na (THY) ve Türkiye menşeli şirketlere karşı #boycott (boykot) çağrılarında <span className="font-semibold bg-yellow-100 px-1 rounded">tarihi bir artış</span> yaşanmıştır. Özellikle 8-14 Mayıs haftasında, sosyal medyada olumsuz içeriklerde ciddi bir patlama gözlemlenmiştir.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2 pb-2 border-b">
              <ChartBar className="w-5 h-5 text-purple-500" />
              En Temel Bulgular:
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium text-gray-900">Toplam içerik:</span> 605 tweet (tamamı analiz edilmiştir)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium text-gray-900">Negatif içerik oranı:</span> %92,7 (<span className="font-bold">561 tweet</span>)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center text-green-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium text-gray-900">Pozitif içerik oranı:</span> %0,0 (<span className="font-bold">0 tweet</span>)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium text-gray-900">Nötr içerik oranı:</span> %7,3 (<span className="font-bold">44 tweet</span>)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium text-gray-900">Toplam etkileşimler:</span> 22.968 beğeni, 6.121 retweet, 648 yanıt, 741.218 gösterim
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium text-gray-900">En yoğun gün:</span> 8 Mayıs 2025 — <span className="font-bold">90 tweet, 10.025 beğeni, 2.366 RT, 444.700 gösterim</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-100 flex items-center justify-center text-red-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium text-gray-900">Duygu skoru:</span> Günlük ortalama <span className="font-bold text-red-600 bg-red-50 px-1 py-0.5 rounded">-0,95</span> (kesin ağırlıkla olumsuz)
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium text-gray-900">En popüler negatif tweet:</span> @dmuthuk (9.310 beğeni, 2.212 RT, 373.908 gösterim)
                </div>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="flex items-start gap-2">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mt-0.5">•</span>
                <div>
                  <span className="font-medium text-gray-900">En çok geçen anahtar kelimeler:</span> 
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge className="bg-slate-700">boycott</Badge>
                    <Badge className="bg-slate-700">बहिष्कार</Badge>
                    <Badge className="bg-slate-700">Pakistan</Badge>
                    <Badge className="bg-slate-700">IndiGo</Badge>
                    <Badge className="bg-slate-700">Türkiye</Badge>
                    <Badge className="bg-slate-700">Turkish Airlines</Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="font-semibold text-lg mb-2 flex items-center gap-2 text-gray-700">
              <FileText className="w-5 h-5 text-gray-500" />
              Kapsam:
            </h3>
            <p className="text-gray-700">
              15 Ekim'den 20 Mayıs'a kadar olan tüm Twitter içerikleri, Hintçe ve İngilizce analiz edilmiş ve ana trendler, örnekler ve hacimsel verilerle raporlanmıştır.
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 3: Veri Kapsamı ve Metodoloji */}
      <Slide title="2. Veri Kapsamı ve Metodoloji">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">Kapsam</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Hindistan merkezli Twitter'daki THY ve Türkiye karşıtı içerikler (Hashtag: #BoycottTurkishAirlines, #boycottturkey vb.)
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 h-fit">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                <ChartBar className="w-5 h-5 text-purple-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">Veri Kaynağı</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              605 adet tweet, favori, retweet, reply, gösterim, tarih ve içerik metni ile
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
                <Info className="w-5 h-5 text-indigo-600" />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">Analiz Metodu</h3>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="bg-gradient-to-r from-blue-50 to-blue-100/40 p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  <span className="font-bold text-blue-600">01</span>
                </div>
                <p className="text-gray-700">Otomatik dil algılama<br/>(hi: Hintçe, en: İngilizce)</p>
              </li>
              <li className="bg-gradient-to-r from-purple-50 to-purple-100/40 p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  <span className="font-bold text-purple-600">02</span>
                </div>
                <p className="text-gray-700">Duygu analizi: Anahtar kelime temelli<br/>otomatik -1 (negatif), 0 (nötr), +1 (pozitif)</p>
              </li>
              <li className="bg-gradient-to-r from-indigo-50 to-indigo-100/40 p-4 rounded-lg flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center mb-3">
                  <span className="font-bold text-indigo-600">03</span>
                </div>
                <p className="text-gray-700">Zaman serisi ve günlük trend analizleri,<br/>metin madenciliği</p>
              </li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 4: Genel İstatistikler */}
      <Slide title="3. Genel İstatistikler ve Hacimsel Veriler">
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="w-1.5 h-6 rounded-full bg-blue-500 mr-2"></span>
              Toplam İçerik ve Etkileşim
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              <Card className="border-0 shadow-md bg-gradient-to-br from-blue-500/90 to-blue-600/90 text-white overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-blue-100">Tweet</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-3xl font-bold">605</p>
                </CardContent>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
              </Card>
              <Card className="border-0 shadow-md bg-gradient-to-br from-purple-500/90 to-purple-600/90 text-white overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-purple-100">Beğeni</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-3xl font-bold">22.968</p>
                </CardContent>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
              </Card>
              <Card className="border-0 shadow-md bg-gradient-to-br from-indigo-500/90 to-indigo-600/90 text-white overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-indigo-100">Retweet</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-3xl font-bold">6.121</p>
                </CardContent>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
              </Card>
              <Card className="border-0 shadow-md bg-gradient-to-br from-sky-500/90 to-sky-600/90 text-white overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-sky-100">Yanıt</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-3xl font-bold">648</p>
                </CardContent>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
              </Card>
              <Card className="border-0 shadow-md bg-gradient-to-br from-cyan-500/90 to-cyan-600/90 text-white overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle className="text-base text-cyan-100">Görüntülenme</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-3xl font-bold">741.218</p>
                </CardContent>
                <div className="absolute top-0 right-0 w-16 h-16 bg-white/10 rounded-full -mt-8 -mr-8"></div>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="w-1.5 h-6 rounded-full bg-purple-500 mr-2"></span>
              İçerik Türüne Göre Duygu Dağılımı
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="overflow-hidden shadow-md">
                <div className="h-1.5 bg-red-500 w-full"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    Negatif
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">561 tweet <span className="text-base font-normal">(%92,7)</span></p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden shadow-md">
                <div className="h-1.5 bg-green-500 w-full"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                    Pozitif
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">0 tweet <span className="text-base font-normal">(%0,0)</span></p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden shadow-md">
                <div className="h-1.5 bg-gray-400 w-full"></div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700 flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-gray-400"></span>
                    Nötr
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">44 tweet <span className="text-base font-normal">(%7,3)</span></p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center">
              <span className="w-1.5 h-6 rounded-full bg-amber-500 mr-2"></span>
              Dönemsel Hacim ve Zirve Günler
            </h3>
            <ul className="space-y-3 text-gray-700 bg-white p-5 rounded-xl shadow-sm">
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-0.5">
                  <ArrowRight className="w-3 h-3" />
                </span>
                <div>
                  <span className="font-medium text-gray-900">En yoğun gün:</span> 8 Mayıs 2025 
                  <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 px-2 py-0.5 rounded-md ml-2 text-sm">
                    90 tweet
                  </span>
                  <span className="inline-flex items-center gap-1 bg-red-50 text-red-800 px-2 py-0.5 rounded-md ml-2 text-sm">
                    10.025 beğeni
                  </span>
                  <span className="inline-flex items-center gap-1 bg-blue-50 text-blue-800 px-2 py-0.5 rounded-md ml-2 text-sm">
                    444.700 gösterim
                  </span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-0.5">
                  <ArrowRight className="w-3 h-3" />
                </span>
                <div>
                  <span className="font-medium text-gray-900">İlk büyük yükseliş:</span> 7-8 Mayıs arası (trendin başlangıcı)
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 mt-0.5">
                  <ArrowRight className="w-3 h-3" />
                </span>
                <div>
                  <span className="font-medium text-gray-900">İkinci dalga:</span> 13-14 Mayıs arası (konsolide boykot çağrıları)
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 5: Günlük ve Haftalık Detaylı Trendler */}
      <Slide title="4. Günlük ve Haftalık Detaylı Trendler">
        <div className="space-y-6">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <Table 
              headers={['Tarih', 'Tweet', 'Beğeni', 'RT', 'Yanıt', 'Görüntülenme', 'Ortalama Duygu']}
              rows={[
                ['8 Mayıs', '90', '10.025', '2.366', '292', '444.700', '-0.94'],
                ['9 Mayıs', '61', '9.334', '2.679', '148', '133.500', '-0.87'],
                ['10 Mayıs', '90', '306', '133', '23', '24.261', '-0.93'],
                ['11 Mayıs', '20', '61', '25', '9', '6.566', '-0.95'],
                ['12 Mayıs', '24', '543', '246', '18', '23.585', '-1.00'],
                ['13 Mayıs', '86', '634', '281', '53', '44.726', '-0.95'],
                ['14 Mayıs', '72', '1.945', '363', '80', '41.712', '-0.92'],
                ['15 Mayıs', '32', '48', '10', '10', '5.642', '-0.87'],
                ['16 Mayıs', '27', '13', '4', '2', '2.557', '-0.92'],
                ['17 Mayıs', '14', '9', '5', '3', '1.358', '-0.92'],
                ['18 Mayıs', '2', '1', '0', '1', '300', '-1.00'],
                ['19 Mayıs', '10', '4', '1', '2', '1.450', '-0.90'],
                ['20 Mayıs', '3', '1', '0', '1', '109', '-0.67'],
              ]}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/3 bg-white p-5 rounded-xl shadow-md">
              <h3 className="font-semibold text-lg mb-3 text-gray-800 flex items-center gap-2">
                <ChartBar className="w-5 h-5 text-blue-500" />
                Haftalık Toplam (8-14 Mayıs):
              </h3>
              <ul className="space-y-2 mt-4">
                <li className="flex justify-between items-center p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <span className="text-gray-700">Tweet:</span>
                  <span className="font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">453</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <span className="text-gray-700">Beğeni:</span>
                  <span className="font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">23.496</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <span className="text-gray-700">RT:</span>
                  <span className="font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">6.025</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <span className="text-gray-700">Gösterim:</span>
                  <span className="font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-md">696.480</span>
                </li>
                <li className="flex justify-between items-center p-2 rounded-md hover:bg-blue-50 transition-colors">
                  <span className="text-gray-700">Negatif oranı:</span>
                  <span className="font-bold bg-red-100 text-red-800 px-2 py-0.5 rounded-md">%93,3</span>
                </li>
              </ul>
            </div>

            <div className="md:w-2/3">
              <DataChart 
                data={weeklyTweetData} 
                dataKey="Tweet" 
                xAxisKey="date" 
                barColor="#4f46e5"
                title="Tweet Hacmi (8-14 Mayıs)"
              />
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 6: Duygu Analizi ve Temalar */}
      <Slide title="5. Duygu Analizi ve Temalar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4 text-gray-800 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <ChartBar className="w-4 h-4" />
              </span>
              Genel Duygu Trendleri:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-4 rounded-xl border border-red-200">
                <div className="text-red-800 text-sm font-medium mb-1">Duygu skoru</div>
                <div className="font-bold text-xl text-red-900">-0,95</div>
                <div className="text-red-700 text-xs mt-1">tüm dönemde net olarak negatif</div>
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 p-4 rounded-xl border border-green-200">
                <div className="text-green-800 text-sm font-medium mb-1">Olumlu örnek</div>
                <div className="font-bold text-xl text-green-900">0 tweet</div>
                <div className="text-green-700 text-xs mt-1">olumlu içerik bulunmamaktadır</div>
              </div>
              <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl border border-gray-200">
                <div className="text-gray-800 text-sm font-medium mb-1">Nötr oran</div>
                <div className="font-bold text-xl text-gray-900">%7,3</div>
                <div className="text-gray-700 text-xs mt-1">sadece 44 tweet nötr içerik</div>
              </div>
            </div>
            <div className="mt-4 bg-indigo-50 p-3 rounded-md">
              <p className="text-indigo-800 text-sm">Boykot ve olumsuzluk teması, tweetlerin <span className="font-bold">%92'sinde</span> baskın olarak tespit edilmiştir.</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4 text-gray-800 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <FileText className="w-4 h-4" />
              </span>
              En Sık Geçen Anahtar Kelimeler:
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg">
                <Badge className="bg-blue-700 mt-1">boycott / बहिष्कार</Badge>
                <div className="text-sm text-gray-700">
                  Boykot çağrıları, çağrının yayıldığı gün: <span className="font-semibold">8 Mayıs</span>
                </div>
              </li>
              <li className="flex items-start gap-2 p-3 bg-indigo-50 rounded-lg">
                <Badge className="bg-indigo-700 mt-1">IndiGo & Codeshare</Badge>
                <div className="text-sm text-gray-700">
                  Alternatif havayolu ve IndiGo'nun THY ile işbirliği tartışması
                </div>
              </li>
              <li className="flex items-start gap-2 p-3 bg-green-50 rounded-lg">
                <Badge className="bg-green-700 mt-1">Pakistan / support</Badge>
                <div className="text-sm text-gray-700">
                  Siyasi gerekçelerle öne çıkan söylem
                </div>
              </li>
              <li className="flex items-start gap-2 p-3 bg-purple-50 rounded-lg">
                <Badge className="bg-purple-700 mt-1">İptal, asla, shame</Badge>
                <div className="text-sm text-gray-700">
                  Kişisel deneyim/çağrı içerikleri
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4 text-gray-800 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                <Info className="w-4 h-4" />
              </span>
              Negatif ve Nötr Temalar:
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4 py-2">
                <h4 className="text-red-800 font-medium mb-2">Negatif Temalar:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Hindistan'a karşı politik tavır</li>
                  <li>Alternatif ülke/marka çağrısı (Yunanistan, Ermenistan, Emirates, Air India önerileri)</li>
                  <li>"Turkish Airlines asla tercih edilmemeli", "Hindistan'ı savunan destinasyonlara yönelin"</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-gray-400 pl-4 py-2">
                <h4 className="text-gray-800 font-medium mb-2">Nötr Temalar:</h4>
                <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                  <li>Sektörel haber, neutral bilgi paylaşımları (az sayıda, genellikle haber kuruluşu kaynaklı)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 7: En Popüler Tweetler */}
      <Slide title="6. En Popüler Tweetler (Gerçek İçeriklerle)">
        <div className="space-y-6">
          <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
            <span className="w-2 h-6 rounded-full bg-blue-500 mr-1"></span>
            Beğeniye Göre:
          </h3>
          
          <div className="space-y-4">
            <Card className="overflow-hidden border-0 shadow-md">
              <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-600"></div>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">D</div>
                  <div className="text-sm font-semibold text-blue-600">@dmuthuk</div>
                </div>
                <p className="text-gray-800 mb-3 bg-gray-50 p-3 rounded-lg border-l-4 border-red-500 italic">
                  "Azerbaijan and Turkey earns lot of money because of Indian tourists... We should not fly Turkish airlines too. Let us enjoy the hospitality of our friends and shun those who are supporting our enemy."
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1 bg-red-50 text-red-700 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    <strong>9.310</strong>
                  </span>
                  <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
                    <strong>2.212</strong>
                  </span>
                  <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    <strong>373.908</strong>
                  </span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-0 shadow-md">
              <div className="h-1 w-full bg-gradient-to-r from-red-500 to-red-600"></div>
              <CardContent className="pt-4">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">R</div>
                  <div className="text-sm font-semibold text-blue-600">@Ravisutanjani</div>
                </div>
                <p className="text-gray-800 mb-3 bg-gray-50 p-3 rounded-lg border-l-4 border-red-500 italic">
                  "🚨 Not a Single Indian Flight Booking Apps (OTAs) Suspended Booking To Turkey... Indians Should Boycott Turkey and Azerbaijan"
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                  <span className="flex items-center gap-1 bg-red-50 text-red-700 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                    <strong>9.254</strong>
                  </span>
                  <span className="flex items-center gap-1 bg-green-50 text-green-700 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-repeat"><path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/></svg>
                    <strong>2.653</strong>
                  </span>
                  <span className="flex items-center gap-1 bg-blue-50 text-blue-700 px-2 py-1 rounded">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                    <strong>125.399</strong>
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6 mt-6">
            <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
              <span className="w-2 h-6 rounded-full bg-red-500 mr-1"></span>
              Negatif ve Viral Örnek Temalar:
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">D</div>
                <div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">@dmuthuk</div>
                  <p className="text-gray-700 italic">"...shun those who are supporting our enemy..."</p>
                </div>
              </li>
              <li className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-medium">R</div>
                <div>
                  <div className="text-sm font-semibold text-blue-600 mb-1">@Ravisutanjani</div>
                  <p className="text-gray-700 italic">"...IndiGo Has Codeshare with Turkish Airlines...Indians Should Boycott Turkey..."</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 8: Kategorize Edilmiş İçerik */}
      <Slide title="7. Kategorize Edilmiş İçerik Sınıflandırması">
        <div className="space-y-6">
          <p className="text-gray-700 italic bg-gray-50 p-3 rounded-lg">
            (Tüm analiz edilen tweetlerdeki ana temalar, oranlarla)
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <Table 
                headers={['Kategori', 'Tweet Sayısı', 'Oran (%)']}
                rows={[
                  ['Boykot çağrısı (boycott)', '410', '67,8'],
                  ['Siyasi gerekçeler (Pakistan vs)', '104', '17,2'],
                  ['Alternatif marka/ülke önerisi', '21', '3,5'],
                  ['Haber/duyuru', '32', '5,3'],
                  ['Kişisel şikayet/iptal bildirimleri', '24', '4,0'],
                  ['Nötr içerik (bilgi/haber)', '14', '2,2'],
                ]}
              />
            </div>

            <div>
              <DataChart 
                data={categoryData} 
                dataKey="value" 
                xAxisKey="name" 
                barColor="#8b5cf6"
                title="Kategori Dağılımı (%)"
              />

              <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-4 rounded-xl mt-4 shadow-md">
                <p className="font-medium text-center">
                  Negatif içeriklerin <span className="text-xl font-bold">%84,9'u</span> boykot/siyasi çağrı kategorisindedir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 9: Influencer ve En Etkili Kullanıcılar */}
      <Slide title="8. Influencer ve En Etkili Kullanıcılar">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4 text-gray-800 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-star"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              </span>
              En fazla etkileşim üretenler:
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-purple-50 to-indigo-50">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xl shadow-md">D</div>
                <div>
                  <div className="font-semibold text-gray-900">@dmuthuk</div>
                  <div className="text-sm text-gray-600 mt-1">Toplam etkileşim:</div>
                  <div className="text-lg font-bold text-indigo-600">11.522</div>
                </div>
                <div className="ml-auto w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    1
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-50 to-cyan-50">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-md">R</div>
                <div>
                  <div className="font-semibold text-gray-900">@Ravisutanjani</div>
                  <div className="text-sm text-gray-600 mt-1">Toplam etkileşim:</div>
                  <div className="text-lg font-bold text-blue-600">13.045</div>
                </div>
                <div className="ml-auto w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="font-semibold text-lg mb-4 text-gray-800 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-newspaper"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/></svg>
              </span>
              Haber kaynaklı ve yüksek erişimli hesaplar:
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-6">
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">ND</span>
                </div>
                <div className="text-sm text-gray-800 font-medium">NDTVProfitHindi</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">TN</span>
                </div>
                <div className="text-sm text-gray-800 font-medium">TimesNow</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-white font-bold">+</span>
                </div>
                <div className="text-sm text-gray-800 font-medium">Diğer</div>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-gray-700 text-sm">
                Medya kuruluşları genellikle olay bazlı bilgilendirme yapmış, fakat bu paylaşımların da yüksek etkileşim alarak krize katkıda bulunduğu gözlemlenmiştir.
              </p>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 10: Sonuç ve İzleme Notları */}
      <Slide title="10. Sonuç ve İzleme Notları">
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-5 rounded-xl shadow-md">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <span>Rapor dönemi boyunca tüm içeriklerde ağırlıklı olarak olumsuz bir söylem ve boykot çağrısı hakimdir.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-red-100 text-red-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <span>Tweetlerin %93'ü açıkça olumsuz ve boykot/siyasi tepki içermektedir.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <span>Kriz döneminde en etkili iki gün 8 ve 9 Mayıs 2025'tir.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-amber-100 text-amber-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <span>Herhangi bir olumlu/pozitif içerik bu dönemde tespit edilmemiştir.</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-xl shadow-md">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <span>En fazla etkileşim alan içeriklerin tamamı boykot ve tepki temalıdır.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <span>Nötr içerikler genellikle haber formatındadır ve sosyal etkisi düşüktür.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <span>Hashtag ve anahtar kelime analizinde "boycott, Pakistan, IndiGo, Turkish Airlines" öne çıkmaktadır.</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0 rounded-full bg-green-100 text-green-700 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </div>
                  <span>Takip eden dönemde içerik hacminde ciddi düşüş gözlemlenmiş, ancak duygu skoru olumsuz kalmaya devam etmiştir.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200 shadow-md mt-6">
            <div className="flex items-start mb-3">
              <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                <Info className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="font-semibold text-lg text-blue-800">Not:</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Bu rapor yalnızca otomatik veri işleme ve içerik analizine dayanmaktadır.
              Hiçbir karar önerisi veya yönlendirici yorum içermez; tüm bulgular şeffaf veri ve istatistikle sunulmuştur.
            </p>
            <div className="flex justify-center mt-4">
              <div className="px-4 py-2 bg-white rounded-full text-sm text-blue-700 font-medium shadow-sm border border-blue-200">
                AI Monitoring | Data Analiz Ekibi
              </div>
            </div>
          </div>
        </div>
      </Slide>

    </SlideShow>
  );
};

export default Index;
