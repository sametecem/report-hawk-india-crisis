
import React from 'react';
import Slide from '@/components/Slide';

const ExecutiveSummarySlide = () => {
  return (
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
  );
};

export default ExecutiveSummarySlide;
