
import React from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';

const ConclusionSlide = () => {
  return (
    <Slide title="11. Sonuç ve İzleme Notları" bgColor="bg-gradient-to-br from-white via-slate-50 to-slate-100">
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
  );
};

export default ConclusionSlide;
