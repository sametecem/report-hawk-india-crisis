
import React from 'react';
import SlideShow from '@/components/SlideShow';
import Slide from '@/components/Slide';
import Table from '@/components/Table';
import DataChart from '@/components/DataChart';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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
          <Badge className="mb-6 bg-red-600 hover:bg-red-700">Kurumsal Rapor</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            THY Hindistan Krizi Monitoring Raporu
          </h1>
          <div className="text-xl md:text-2xl mb-12 opacity-90 text-center">
            15 Ekim 2024 – 20 Mayıs 2025
          </div>
          <div className="flex flex-col items-center text-slate-300 text-sm md:text-base space-y-1">
            <p>Hazırlayan: AI Monitoring | Data Analiz Ekibi</p>
            <p>Kapsam: Twitter (605 özgün içerik)</p>
            <p>Hazırlanma Tarihi: 21 Mayıs 2025</p>
          </div>
        </div>
      </Slide>

      {/* Slide 2: Yönetici Özeti */}
      <Slide title="1. Yönetici Özeti">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Kriz Özeti:</h3>
            <p className="text-gray-700">
              15 Ekim 2024 - 20 Mayıs 2025 aralığında, Hindistan kamuoyunda ve medyasında, Türk Hava Yolları'na (THY) ve Türkiye menşeli şirketlere karşı #boycott (boykot) çağrılarında <span className="font-semibold">tarihi bir artış</span> yaşanmıştır. Özellikle 8-14 Mayıs haftasında, sosyal medyada olumsuz içeriklerde ciddi bir patlama gözlemlenmiştir.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">En Temel Bulgular:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-medium">Toplam içerik:</span> 605 tweet (tamamı analiz edilmiştir)</li>
              <li><span className="font-medium">Negatif içerik oranı:</span> %92,7 (<span className="font-bold">561 tweet</span>)</li>
              <li><span className="font-medium">Pozitif içerik oranı:</span> %0,0 (<span className="font-bold">0 tweet</span>)</li>
              <li><span className="font-medium">Nötr içerik oranı:</span> %7,3 (<span className="font-bold">44 tweet</span>)</li>
              <li><span className="font-medium">Toplam etkileşimler:</span> 22.968 beğeni, 6.121 retweet, 648 yanıt, 741.218 gösterim</li>
              <li><span className="font-medium">En yoğun gün:</span> 8 Mayıs 2025 — <span className="font-bold">90 tweet, 10.025 beğeni, 2.366 RT, 444.700 gösterim</span></li>
              <li><span className="font-medium">Duygu skoru:</span> Günlük ortalama <span className="font-bold text-red-600">-0,95</span> (kesin ağırlıkla olumsuz)</li>
              <li><span className="font-medium">En popüler negatif tweet:</span> @dmuthuk (9.310 beğeni, 2.212 RT, 373.908 gösterim)</li>
              <li><span className="font-medium">En çok geçen anahtar kelimeler:</span> <span className="font-bold">boycott, बहिष्कार, Pakistan, IndiGo, Türkiye, Turkish Airlines</span></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Kapsam:</h3>
            <p className="text-gray-700">
              15 Ekim'den 20 Mayıs'a kadar olan tüm Twitter içerikleri, Hintçe ve İngilizce analiz edilmiş ve ana trendler, örnekler ve hacimsel verilerle raporlanmıştır.
            </p>
          </div>
        </div>
      </Slide>

      {/* Slide 3: Veri Kapsamı ve Metodoloji */}
      <Slide title="2. Veri Kapsamı ve Metodoloji">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Kapsam:</h3>
            <p className="text-gray-700">
              Hindistan merkezli Twitter'daki THY ve Türkiye karşıtı içerikler (Hashtag: #BoycottTurkishAirlines, #boycottturkey vb.)
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Veri Kaynağı:</h3>
            <p className="text-gray-700">
              605 adet tweet, favori, retweet, reply, gösterim, tarih ve içerik metni ile
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">Analiz Metodu:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Otomatik dil algılama (hi: Hintçe, en: İngilizce)</li>
              <li>Duygu analizi: Anahtar kelime temelli otomatik -1 (negatif), 0 (nötr), +1 (pozitif)</li>
              <li>Zaman serisi ve günlük trend analizleri, metin madenciliği</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 4: Genel İstatistikler */}
      <Slide title="3. Genel İstatistikler ve Hacimsel Veriler">
        <div className="space-y-8">
          <div>
            <h3 className="font-semibold text-lg mb-3">Toplam İçerik ve Etkileşim</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700">Tweet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">605</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700">Beğeni</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">22.968</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700">Retweet</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">6.121</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700">Yanıt</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">648</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700">Görüntülenme</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">741.218</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">İçerik Türüne Göre Duygu Dağılımı</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <Card className="border-l-4 border-red-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700">Negatif</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">561 tweet <span className="text-base font-normal">(%92,7)</span></p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-green-500">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700">Pozitif</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">0 tweet <span className="text-base font-normal">(%0,0)</span></p>
                </CardContent>
              </Card>
              <Card className="border-l-4 border-gray-400">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg text-gray-700">Nötr</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">44 tweet <span className="text-base font-normal">(%7,3)</span></p>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Dönemsel Hacim ve Zirve Günler</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-medium">En yoğun gün:</span> 8 Mayıs 2025 (90 tweet, 10.025 beğeni, 2.366 RT, 444.700 gösterim)</li>
              <li><span className="font-medium">İlk büyük yükseliş:</span> 7-8 Mayıs arası (trendin başlangıcı)</li>
              <li><span className="font-medium">İkinci dalga:</span> 13-14 Mayıs arası (konsolide boykot çağrıları)</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 5: Günlük ve Haftalık Detaylı Trendler */}
      <Slide title="4. Günlük ve Haftalık Detaylı Trendler">
        <div className="space-y-6">
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

          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-3">Haftalık Toplam (8-14 Mayıs):</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Tweet: 453</li>
              <li>Beğeni: 23.496</li>
              <li>RT: 6.025</li>
              <li>Gösterim: 696.480</li>
              <li>Negatif oranı: <span className="font-bold">%93,3</span></li>
            </ul>
          </div>

          <DataChart 
            data={weeklyTweetData} 
            dataKey="Tweet" 
            xAxisKey="date" 
            barColor="#ef4444"
            title="Tweet Hacmi (8-14 Mayıs)"
          />
        </div>
      </Slide>

      {/* Slide 6: Duygu Analizi ve Temalar */}
      <Slide title="5. Duygu Analizi ve Temalar">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">Genel Duygu Trendleri:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>Duygu skoru tüm dönemde net olarak <span className="font-bold text-red-600">negatif</span> (günlük ortalama -0,95)</li>
              <li>Olumlu örnek yok, nötr oranı yalnızca %7,3</li>
              <li>Boykot ve olumsuzluk teması, tweetlerin %92'sinde baskın</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-2">En Sık Geçen Anahtar Kelimeler ve Kategoriler:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-bold">boycott / बहिष्कार / बायकॉट</span> → Boykot çağrıları, çağrının yayıldığı gün: 8 Mayıs</li>
              <li><span className="font-bold">IndiGo & Codeshare</span> → Alternatif havayolu ve IndiGo'nun THY ile işbirliği tartışması</li>
              <li><span className="font-bold">Pakistan / support Pakistan</span> → Siyasi gerekçelerle öne çıkan söylem</li>
              <li><span className="font-bold">İptal, asla uçmam, shame, cancel</span> → Kişisel deneyim/çağrı içerikleri</li>
            </ul>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Negatif Temalar:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Hindistan'a karşı politik tavır</li>
                <li>Alternatif ülke/marka çağrısı (Yunanistan, Ermenistan, Emirates, Air India önerileri)</li>
                <li>"Turkish Airlines asla tercih edilmemeli", "Hindistan'ı savunan destinasyonlara yönelin"</li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Nötr Temalar:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                <li>Sektörel haber, neutral bilgi paylaşımları (az sayıda, genellikle haber kuruluşu kaynaklı)</li>
              </ul>
            </div>
          </div>
        </div>
      </Slide>

      {/* Slide 7: En Popüler Tweetler */}
      <Slide title="6. En Popüler Tweetler (Gerçek İçeriklerle)">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-3">Beğeniye Göre:</h3>
            
            <div className="space-y-4">
              <Card className="bg-slate-50 border-l-4 border-red-500">
                <CardContent className="pt-4">
                  <div className="text-sm font-semibold text-blue-600 mb-1">@dmuthuk:</div>
                  <p className="text-gray-800 mb-2">
                    "Azerbaijan and Turkey earns lot of money because of Indian tourists... We should not fly Turkish airlines too. Let us enjoy the hospitality of our friends and shun those who are supporting our enemy."
                  </p>
                  <div className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
                    <span><strong>Beğeni:</strong> 9.310</span>
                    <span><strong>RT:</strong> 2.212</span>
                    <span><strong>Gösterim:</strong> 373.908</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-50 border-l-4 border-red-500">
                <CardContent className="pt-4">
                  <div className="text-sm font-semibold text-blue-600 mb-1">@Ravisutanjani:</div>
                  <p className="text-gray-800 mb-2">
                    "🚨 Not a Single Indian Flight Booking Apps (OTAs) Suspended Booking To Turkey... Indians Should Boycott Turkey and Azerbaijan"
                  </p>
                  <div className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
                    <span><strong>Beğeni:</strong> 9.254</span>
                    <span><strong>RT:</strong> 2.653</span>
                    <span><strong>Gösterim:</strong> 125.399</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-50 border-l-4 border-red-500">
                <CardContent className="pt-4">
                  <div className="text-sm font-semibold text-blue-600 mb-1">@Ravisutanjani:</div>
                  <p className="text-gray-800 mb-2">
                    "🚨 Boycott Turkey Campaign is Working... 250% Surge in Turkey and Azerbaijan Flight and Hotel Cancellations..."
                  </p>
                  <div className="text-sm text-gray-600 flex flex-wrap gap-x-4 gap-y-1">
                    <span><strong>Beğeni:</strong> 1.819</span>
                    <span><strong>RT:</strong> 319</span>
                    <span><strong>Gösterim:</strong> 27.225</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-3">Negatif ve Viral Örnek Temalar:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li><span className="font-medium">Kullanıcı:</span> @dmuthuk<br/>
                "...shun those who are supporting our enemy..."</li>
              <li><span className="font-medium">Kullanıcı:</span> @Ravisutanjani<br/>
                "...IndiGo Has Codeshare with Turkish Airlines...Indians Should Boycott Turkey..."</li>
            </ul>
          </div>
        </div>
      </Slide>

      {/* Slide 8: Kategorize Edilmiş İçerik */}
      <Slide title="7. Kategorize Edilmiş İçerik Sınıflandırması">
        <div className="space-y-6">
          <p className="text-gray-700 italic">
            (Tüm analiz edilen tweetlerdeki ana temalar, oranlarla)
          </p>

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

          <div className="bg-gray-100 p-4 rounded-md border-l-4 border-gray-500 mt-4">
            <p className="font-medium text-gray-800">
              Negatif içeriklerin %84,9'u boykot/siyasi çağrı kategorisindedir.
            </p>
          </div>

          <DataChart 
            data={categoryData} 
            dataKey="value" 
            xAxisKey="name" 
            barColor="#6366f1"
            title="Kategori Dağılımı (%)"
          />
        </div>
      </Slide>

      {/* Slide 9: Influencer ve En Etkili Kullanıcılar */}
      <Slide title="8. Influencer ve En Etkili Kullanıcılar">
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold text-lg mb-2">En fazla etkileşim üretenler:</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>@dmuthuk (toplam 11.522 etkileşim)</li>
              <li>@Ravisutanjani (toplam 13.045 etkileşim)</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Haber kaynaklı ve yüksek erişimli hesaplar:</h3>
            <p className="text-gray-700">NDTVProfitHindi, TimesNow, etc.</p>
          </div>
        </div>
      </Slide>

      {/* Slide 10: Sonuç ve İzleme Notları */}
      <Slide title="10. Sonuç ve İzleme Notları">
        <div className="space-y-4">
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

          <div className="bg-gray-100 p-4 rounded-md border-l-4 border-blue-500 mt-6">
            <p className="font-medium text-gray-800 mb-2">Not:</p>
            <p className="text-gray-700">
              Bu rapor yalnızca otomatik veri işleme ve içerik analizine dayanmaktadır.
              Hiçbir karar önerisi veya yönlendirici yorum içermez; tüm bulgular şeffaf veri ve istatistikle sunulmuştur.
            </p>
          </div>
        </div>
      </Slide>

    </SlideShow>
  );
};

export default Index;
