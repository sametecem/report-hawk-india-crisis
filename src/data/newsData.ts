
// News data and interfaces
export interface NewsItem {
  id: number;
  title: string;
  date: string;
  source: string;
  summary: string;
  url: string;
  imageUrl: string;
}

// Örnek haberler
export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Yapay Zeka Alanında Son Gelişmeler",
    date: "22 Mayıs 2025",
    source: "techhaber.com",
    summary: "Yapay zeka teknolojileri son bir yılda hızla gelişiyor. Yeni modeller insan benzeri yetenekler sergiliyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e"
  },
  {
    id: 2,
    title: "Türkiye'nin Sosyal Medya Kullanımı Arttı",
    date: "21 Mayıs 2025",
    source: "dijitalanaliz.org",
    summary: "Türkiye'de sosyal medya kullanıcı sayısı son 6 ayda %15 artış gösterdi, Instagram ve Twitter başı çekiyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81"
  },
  {
    id: 3,
    title: "Siber Güvenlik Tehditleri 2025",
    date: "20 Mayıs 2025",
    source: "guvenlikhaber.net",
    summary: "2025'in ilk çeyreğinde fidye yazılımı saldırıları %30 artış gösterdi. Uzmanlar şirketleri önlem almaya çağırıyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
  },
  {
    id: 4,
    title: "Yazılım Geliştiriciler İçin Yeni Trendler",
    date: "19 Mayıs 2025",
    source: "yazilimdunyasi.com",
    summary: "Modern yazılım geliştirme trendleri arasında mikroservisler ve sunucusuz mimari ön plana çıkıyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  },
  {
    id: 5,
    title: "Veri Analizi Sektöründe İş Fırsatları",
    date: "18 Mayıs 2025",
    source: "kariyerteknoloji.com",
    summary: "Veri bilimi ve analitik alanında uzman arayanların sayısı son bir yılda iki katına çıktı.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
  },
  {
    id: 6,
    title: "E-ticaret Platformlarında Yeni Teknolojiler",
    date: "17 Mayıs 2025",
    source: "eticarethaber.com",
    summary: "Online alışveriş siteleri yapay zeka destekli kişiselleştirme özellikleriyle müşteri deneyimini artırıyor.",
    url: "#",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }
];

// Günlük haber sayısı verisi
export const dailyNewsData = [
  { day: "Pzt", count: 15 },
  { day: "Sal", count: 22 },
  { day: "Çar", count: 18 },
  { day: "Per", count: 25 },
  { day: "Cum", count: 30 },
  { day: "Cmt", count: 12 },
  { day: "Paz", count: 8 }
];

// Duygu analizi verileri
export const sentimentData = [
  { name: "Pozitif", value: 45, color: "#22c55e" },
  { name: "Nötr", value: 30, color: "#9ca3af" },
  { name: "Negatif", value: 25, color: "#ef4444" }
];

// Kelime bulutu için örnek veriler
export const wordCloudData = [
  { text: "Teknoloji", size: 40 },
  { text: "Yapay Zeka", size: 35 },
  { text: "Sosyal Medya", size: 30 },
  { text: "Siber Güvenlik", size: 25 },
  { text: "Veri Analizi", size: 25 },
  { text: "Yazılım", size: 20 },
  { text: "Blockchain", size: 18 },
  { text: "İnovasyon", size: 18 },
  { text: "Bulut", size: 15 },
  { text: "Mobil", size: 15 },
  { text: "Otomasyon", size: 15 },
  { text: "Metaverse", size: 12 },
  { text: "NFT", size: 12 },
  { text: "Kripto", size: 10 },
  { text: "E-ticaret", size: 10 }
];
