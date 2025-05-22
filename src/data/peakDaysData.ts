
import { PeakDayData } from '@/types/dailyTrends';

// Peak days data
export const peakDaysData: PeakDayData[] = [
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
