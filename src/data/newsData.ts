
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

// News data
export const newsData: NewsItem[] = [
  {
    id: 1,
    title: "Here's Why 'Boycott Turkish Airlines' Is Trending On Social Media: 'A Call To Every Proud Indian'",
    date: "8 Mayıs 2025",
    source: "News18",
    summary: "Our nation's dignity and security come first. When countries like Turkey openly support Pakistan and those who threaten India's sovereignty, we must stand...",
    url: "https://www.news18.com/viral/heres-why-boycott-turkish-airlines-is-trending-on-social-media-a-call-to-every-proud-indian-aa-9328459.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0dondFODLXN95RAvkZ1gPkx_smZg5_zFGJfq9wjIwelnXSqGkw3VG0tE7tw&s"
  },
  {
    id: 2,
    title: "जो तुर्की पाकिस्‍तान का करता है खुला समर्थन, उसकी एयरलाइंस का इंडिगो से रिश्‍ता, उठे सवाल",
    date: "1 Mayıs 2025",
    source: "Navbharat Times",
    summary: "हाइलाइट्स ... नई दिल्‍ली: तुर्की पाकिस्तान का बड़ा समर्थक है। इसके बावजूद भारत की विमानन कंपनी इंडिगो उसकी राष्ट्रीय विमान सेवा तुर्किश एयरलाइंस के लिए महत्वपूर्ण पार्टनर बनी हुई है।",
    url: "https://navbharattimes.indiatimes.com/business/business-news/indigo-and-turkish-airlines-alliance-pro-pakistan-turkey-gaining-business-advantage-in-india/articleshow/120850563.cms",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmJWrbrydgAx6nAq48wqI0v3MJczEdlL3RtXR-xfRr7cWsECIhiSNAkqV-Qg&s"
  },
  {
    id: 3,
    title: "'Unsupportive stance towards India...': India's travel accommodation brand Go Homstays ends partnership with Turkish Airlines",
    date: "8 Mayıs 2025",
    source: "Business Today",
    summary: "The move comes amid a broader social media campaign urging Indian platforms to remove Turkish and Azerbaijani travel listings in response to their...",
    url: "https://www.businesstoday.in/india/story/unsupportive-stance-towards-india-indias-travel-accommodation-brand-go-homstays-ends-partnership-with-turkish-airlines-475331-2025-05-08",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFwYUFVo3g2njCEaGFC5sSs6PVwmo47Wv2Ka9YEJey4_cBZ4S1LFlHcUcIPA&s"
  },
  {
    id: 4,
    title: "एयर इंडिया की सरकार से अपील, कैंसिल की जाए इंडिगो-टर्किश एयरलाइंस डील",
    date: "17 Mayıs 2025",
    source: "Hindustan Hindi News",
    summary: "Boycott Turkey Impact: बायकॉट तुर्की ट्रेंड के बीच अब एयरलाइन कंपनी इंडिगो की मुश्किलें बढ़ती ही जा रही है।, Business Hindi News - Hindustan.",
    url: "https://www.livehindustan.com/business/air-india-appeals-to-the-government-to-cancel-the-indigo-turkish-airlines-deal-201747405466692.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwmaoHGptmT_ens15wE2ixR7ZM0qX1Ctwa0wmIEPZQnEckx6gJZo_4Z04Gxg&s"
  },
  {
    id: 5,
    title: "Operation Sindoor: Shiv Sena Leader Shaina NC Urges Indians To Boycott Turkey, Azerbaijan Over Support To",
    date: "8 Mayıs 2025",
    source: "Free Press Journal",
    summary: "The Shiv Sena has called for a boycott against Turkey and Azerbaijan after both countries expressed solidarity with Pakistan after India's 'Operation...",
    url: "https://www.freepressjournal.in/mumbai/operation-sindoor-shiv-sena-leader-shaina-nc-urges-indians-to-boycott-turkey-azerbaijan-over-support-to-pakistan-asks-indigo-to-end-partnership-with-turkish-airlines",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL2UePhklgbjv8dtulEd_F5cwvPmxMaeq489xks-DpltmFXRKXpAUw_bkc6w&s"
  },
  {
    id: 6,
    title: "Misinformation leads to boycott calls in India for Turkish companies",
    date: "8 Mayıs 2025",
    source: "Türkiye Today",
    summary: "Anti-Türkiye sentiment is growing in India amid renewed tensions with Pakistan, as unverified claims and political frustration fuel a backlash against...",
    url: "https://www.turkiyetoday.com/nation/misinformation-leads-to-boycott-calls-in-india-for-turkish-companies-152370",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRruraFvlBbeezgcwlbQ3CGKhzsh60WVAbVhA4kLwaOTDa-XppgKPdsiwQdCw&s"
  },
  {
    id: 7,
    title: "IndiGo not looking to cut flight operations to Turkey, Azerbaijan so far amid boycott calls",
    date: "15 Mayıs 2025",
    source: "Moneycontrol",
    summary: "Despite several domestic travel companies suspending new bookings to Turkey and Azerbaijan since May 9, InterGlobe aviation-run IndiGo airlines is not...",
    url: "https://www.moneycontrol.com/news/business/indigo-not-looking-to-cut-flight-operations-to-turkey-azerbaijan-so-far-amid-boycott-calls-13024597.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWgmLJOjm1sSali2LrxjiJ0m7wDbCkJPqgiIR8TESmVxrEACzjOGaay6P6nQ&s"
  },
  {
    id: 8,
    title: "Boycott Turkey विवाद के बीच क्यों लोगों के निशाने पर आई इंडिगो? कंपनी ने सफाई में कही ये बात",
    date: "16 Mayıs 2025",
    source: "Zee News",
    summary: "IndiGo-Turkish Airlines Partnership: पाकिस्तान का साथ देने वाले तुर्किये के खिलाफ भारतीयों में गुस्सा है. लोग तुर्किए के सामानों का विरोध कर रहे हैं.",
    url: "https://zeenews.india.com/hindi/business/indigo-turkish-airlines-partnership-benefits-for-travelers/2759590",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKfSHB9w45ueBtRJUiwXLOH9RUYqUijUdS64hKhuG0zYvq9VIlsqHF2dGGKw&s"
  },
  {
    id: 9,
    title: "Turkey, facing backlash over Pakistan support, has deep ties with Indian aviation",
    date: "15 Mayıs 2025",
    source: "Mint",
    summary: "IndiGo, the largest airline in India, has had a codeshare arrangement with Turkish Airlines since late 2018.",
    url: "https://www.livemint.com/industry/turkey-facing-backlash-over-pakistan-support-has-deep-ties-with-indian-aviation-11747229882719.html",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZb-4m7gakpGsyeIcJRg3qE7G3jB7BlsBzcIn275REaPEYadMB4Gi-nMq6BA&s"
  },
  {
    id: 10,
    title: "तुर्किये विवाद के बीच IndiGo एयरलाइन का बड़ा बयान, टर्किश एयरलाइन के साथ साझेदारी के गिनाए फायदे",
    date: "16 Mayıs 2025",
    source: "Zee Business",
    summary: "Boycott Turkey Row: एयरलाइन इंडिगो ने तुर्किये की राष्ट्रीय एयरलाइन Turkish Airlines के साथ अपने कोडशेयरिंग समझौते को लेकर हो रहे विरोध पर सफाई देते हुए कहा कि यह साझेदारी भारतीय यात्रियों और देश की...",
    url: "https://www.zeebiz.com/hindi/aviation/boycott-turkey-row-indigo-defends-code-sharing-with-turkish-airlines-after-social-media-backlash-215459",
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2O5VdyKJBthouv6fyHqOKALo9-Qva8EtJ-l9XqIQYRrL9JbeBLKqNFbVBQw&s"
  }
];

// Günlük haber sayısı verisi
export const dailyNewsData = [
  { day: "1 May", count: 8 },
  { day: "8 May", count: 17 },
  { day: "15 May", count: 13 },
  { day: "16 May", count: 12 },
  { day: "17 May", count: 11 },
  { day: "18 May", count: 1 },
  { day: "19 May", count: 3 },
  { day: "20 May", count: 5 },
  { day: "21 May", count: 3 },
  { day: "22 May", count: 8 }
];

// Duygu analizi verileri
export const sentimentData = [
  { name: "Negatif", value: 95, color: "#ef4444" },
  { name: "Nötr", value: 5, color: "#9ca3af" }
];

// Kelime bulutu için örnek veriler
export const wordCloudData = [
  { text: "turkey", size: 40 },
  { text: "turkish", size: 35 },
  { text: "india", size: 33 },
  { text: "boycott", size: 30 },
  { text: "pakistan", size: 28 },
  { text: "airlines", size: 25 },
  { text: "turkishairlines", size: 25 },
  { text: "flight", size: 20 },
  { text: "ban", size: 20 },
  { text: "tourists", size: 18 },
  { text: "travel", size: 18 },
  { text: "support", size: 15 },
  { text: "market", size: 15 },
  { text: "loss", size: 15 },
  { text: "risk", size: 12 }
];
