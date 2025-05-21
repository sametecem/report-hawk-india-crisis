
// Instagram yorum analizi için sabit veriler

// Günlük Yorum Hacmi & Zirveler
export const dailyVolumeData = [
  { date: '1 Mayıs', comments: 120 },
  { date: '2 Mayıs', comments: 145 },
  { date: '3 Mayıs', comments: 230 },
  { date: '4 Mayıs', comments: 380 },
  { date: '5 Mayıs', comments: 490 },
  { date: '6 Mayıs', comments: 620 },
  { date: '7 Mayıs', comments: 850 },
  { date: '8 Mayıs', comments: 780 },
  { date: '9 Mayıs', comments: 530 },
  { date: '10 Mayıs', comments: 320 },
];

// Duygu Eğrisi (VADER / mBERT compound)
export const sentimentData = [
  { date: '1 Mayıs', score: -0.45 },
  { date: '2 Mayıs', score: -0.38 },
  { date: '3 Mayıs', score: -0.52 },
  { date: '4 Mayıs', score: -0.65 },
  { date: '5 Mayıs', score: -0.72 },
  { date: '6 Mayıs', score: -0.68 },
  { date: '7 Mayıs', score: -0.75 },
  { date: '8 Mayıs', score: -0.71 },
  { date: '9 Mayıs', score: -0.58 },
  { date: '10 Mayıs', score: -0.42 },
];

// Duygu Dağılımı
export const emotionDistData = [
  { name: 'Negatif', value: 72, color: '#ef4444' },
  { name: 'Nötr', value: 23, color: '#9ca3af' },
  { name: 'Pozitif', value: 5, color: '#10b981' },
];

// Tema Kümeleme
export const themeClusterData = [
  { name: 'Boykot Çağrıları', count: 342 },
  { name: 'Filistin Dayanışması', count: 287 },
  { name: 'Şirket Eleştirisi', count: 245 },
  { name: 'Politik Tepki', count: 203 },
  { name: 'Alternatif Öneri', count: 112 },
];

// Post Bazlı Boykot Yoğunluğu
export const postNegativeRatioData = [
  { post: 'Post #1', total: 450, negativeRatio: 82 },
  { post: 'Post #2', total: 380, negativeRatio: 75 },
  { post: 'Post #3', total: 520, negativeRatio: 88 },
  { post: 'Post #4', total: 310, negativeRatio: 68 },
  { post: 'Post #5', total: 290, negativeRatio: 72 },
];

// Dil Dağılımı
export const languageData = [
  { name: 'Türkçe', value: 58, color: '#3b82f6' },
  { name: 'İngilizce', value: 24, color: '#8b5cf6' },
  { name: 'Hintçe', value: 12, color: '#f59e0b' },
  { name: 'Diğer', value: 6, color: '#9ca3af' },
];

// Kullanıcı Persona Dağılımı
export const personaData = [
  { name: 'Gerçek Fotoğraf', value: 45, color: '#10b981' },
  { name: 'Meme/Görsel', value: 32, color: '#f59e0b' },
  { name: 'Anonim/Logo', value: 23, color: '#8b5cf6' },
];

// En Etkileşimli Yorumlar
export const topComments = [
  { 
    username: 'activist23', 
    comment: "THY'nin bu kararını şiddetle kınıyorum. #ThyBoykot", 
    impact: 245, 
    date: '6 Mayıs' 
  },
  { 
    username: 'solidarity88', 
    comment: "Hepimiz destek olmalıyız. #BoykotEt #Filistin", 
    impact: 182, 
    date: '7 Mayıs' 
  },
  { 
    username: 'freedom_fighter', 
    comment: "Bu karar kabul edilemez. Hepimiz sesimizi yükseltmeliyiz!", 
    impact: 176, 
    date: '7 Mayıs' 
  },
  { 
    username: 'peace_now', 
    comment: "Gazze için ayağa kalkın. #Gazze #DestekOl", 
    impact: 154, 
    date: '6 Mayıs' 
  },
  { 
    username: 'solidarity2023', 
    comment: "Boykot hareketine katılın. Sesimizi duyuralım. #ThyBoykot", 
    impact: 121, 
    date: '8 Mayıs' 
  },
];

// CTA Içeren Yorumlar Saatlik Dağılım
export const ctaHourlyData = [
  { hour: '00:00', count: 12 },
  { hour: '01:00', count: 8 },
  { hour: '02:00', count: 5 },
  { hour: '03:00', count: 3 },
  { hour: '04:00', count: 2 },
  { hour: '05:00', count: 4 },
  { hour: '06:00', count: 7 },
  { hour: '07:00', count: 15 },
  { hour: '08:00', count: 24 },
  { hour: '09:00', count: 38 },
  { hour: '10:00', count: 45 },
  { hour: '11:00', count: 52 },
  { hour: '12:00', count: 58 },
  { hour: '13:00', count: 64 },
  { hour: '14:00', count: 72 },
  { hour: '15:00', count: 85 },
  { hour: '16:00', count: 96 },
  { hour: '17:00', count: 104 },
  { hour: '18:00', count: 98 },
  { hour: '19:00', count: 86 },
  { hour: '20:00', count: 75 },
  { hour: '21:00', count: 58 },
  { hour: '22:00', count: 43 },
  { hour: '23:00', count: 25 },
];

// Toksisite Oranı
export const toxicityData = [
  { name: 'Toksik', value: 28, color: '#ef4444' },
  { name: 'Normal', value: 72, color: '#10b981' },
];
