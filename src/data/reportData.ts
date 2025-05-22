// THY Hindistan Krizi data

// Sentiment data
export const sentimentData = [
  { name: "8 Mayıs", score: -0.88 },
  { name: "10 Mayıs", score: 0.07 },
  { name: "11 Mayıs", score: 0.15 },
  { name: "12 Mayıs", score: 0.04 },
  { name: "13 Mayıs", score: 0.10 },
  { name: "14 Mayıs", score: -0.04 },
  { name: "15 Mayıs", score: -0.29 },
];

// Tweet volume data with the new values
export const tweetVolumeData = [
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
export const emotionData = [
  { name: "Negatif", value: 92.6, fill: "#ef4444" },
  { name: "Nötr", value: 7.1, fill: "#9ca3af" },
  { name: "Pozitif", value: 0.3, fill: "#22c55e" },
];

// Updated category data
export const categoryData = [
  { name: "Boykot çağrısı", value: 95.3, fill: "#f87171" },
  { name: "Nötr içerik", value: 1.7, fill: "#9ca3af" },
  { name: "Siyasi gerekçeler", value: 1.5, fill: "#fb923c" },
  { name: "Alternatif önerisi", value: 1.4, fill: "#fbbf24" },
  { name: "Kişisel şikayet", value: 0.1, fill: "#38bdf8" },
];

// Updated hashtag data
export const hashtagData = [
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
export const wordCloudData = [
  "turkish (1.096)", "boycott (890)", "airlines (866)", "turkey (447)", 
  "india (269)", "indigo (190)", "products (187)", "amp (182)", 
  "azerbaijan (143)", "travel (139)", "support (118)", "flights (117)", 
  "booking (103)", "ban (98)", "pakistan (96)", "code (93)", 
  "share (87)", "indiago (85)", "country (81)", "government (79)", 
  "people (78)", "economic (73)", "terrorist (70)", "boycott­turkey (68)", 
  "suspend (65)", "national (65)", "security (64)", "revenue (63)", 
  "crore (61)", "indian (59)"
];

// Updated Twitter data with links - now including all 10 of the most retweeted tweets
export const mostRTTweets = [
  { 
    id: "1922291949068845502", 
    text: "🚨 Indian Travellers Spent Nearly ₹6000 Crore on Tourism in Turkey and Azerbaijan in 2024. This money goes to their economies, strengthening them against India. It's time to #BoycottTurkey and support patriotic destinations!", 
    rt: 3784, 
    likes: 13757, 
    views: 184986,
    author: "Facts Checker",
    handle: "factschecker21",
    verified: true
  },
  { 
    id: "1920890636913328153", 
    text: "🚨 Not a Single Indian Flight Booking Apps (OTAs) Suspended Booking To Turkey! Despite Turkey's anti-India stance, @makemytrip @goibibo still promote tourism there. Why aren't they showing patriotism like others? #BoycottTurkishAirlines", 
    rt: 2649, 
    likes: 9252, 
    views: 125439,
    author: "Defense Analyst",
    handle: "IndianDefense",
    verified: false
  },
  { 
    id: "1920340840519749918", 
    text: "Azerbaijan and Turkey earns lot of money because of Indian tourists. They are using this money against India's interest. Turkey is supporting Pakistan's proxy war against India. Stop funding them! #BoycottTurkey #BoycottTurkishAirlines", 
    rt: 2212, 
    likes: 9305, 
    views: 374054,
    author: "National Security",
    handle: "NationalSec_IND",
    verified: true
  },
  { 
    id: "1921147041190217791", 
    text: "Share Max so Turkey becomes an abuse for every Indian! Boycott Turkish Airlines and Turkish products! This is how we show our strength as a nation. Remember, tourism money funds anti-India propaganda! #BoycottTurkey", 
    rt: 233, 
    likes: 434, 
    views: 17494,
    author: "Proud Indian",
    handle: "Indian_Patriot",
    verified: false
  },
  { 
    id: "1920148321600358407", 
    text: "Economic Boycott of Pakistan supporters countries starts in India - public movement is gaining momentum. First Turkey, next Azerbaijan. This is just the beginning! #EconomicBoycott", 
    rt: 201, 
    likes: 355, 
    views: 16947,
    author: "Economic Times Now",
    handle: "EcoTimes_Now",
    verified: true
  },
  {
    id: "1920918289703391251",
    text: "@ANI Boycott Turkish airlines, Flights and dramas in our country. This will impact their economy. Time to give them back!",
    rt: 72,
    likes: 307,
    views: 8981,
    author: "Indian Citizen",
    handle: "IndianCitizen23",
    verified: false
  },
  {
    id: "1920865537146306625",
    text: "Boycott Turkey!!! No tourism and no flights by Turkish airlines. Make Turkey realize the importance of Indian tourists!",
    rt: 51,
    likes: 139,
    views: 6833,
    author: "Travel Boycott",
    handle: "travel_boycott",
    verified: false
  },
  {
    id: "1920237177209657344",
    text: "Say No to Turkish Airlines. Say No to Travel to Turkey. We need to teach them a lesson with our wallets! #BoycottTurkey",
    rt: 288,
    likes: 709,
    views: 19750,
    author: "India First",
    handle: "india_first_always",
    verified: true
  },
  {
    id: "1920218075150575616",
    text: "India is considering to ban Turkish Airlines and all Turkish products from Indian market! This will be a major economic blow to Turkey.",
    rt: 239,
    likes: 665,
    views: 5850,
    author: "Geopolitical Expert",
    handle: "geo_expert_india",
    verified: true
  },
  {
    id: "1920757008078893082",
    text: "RT @8billiontothree: Turkish Airlines indirectly funding anti-India activities. Indians must boycott all Turkish products and services!",
    rt: 0, // This is a retweet so original RT count not provided
    likes: 276,
    views: 5820,
    author: "Patriotic Indian",
    handle: "patriot_ind",
    verified: false
  },
];

// Updated most mentioned accounts
export const mentionedAccounts = [
  "@IndiGo6E", "@TurkishAirlines", "@PMOIndia", "@RTErdogan", "@6EIndigo", 
  "@MEAIndia", "@airindia", "@GoHomestay", "@AmitShah", "@HardeepSPuri"
];

// Most active accounts
export const activeAccounts = [
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

// Top Twitter accounts by follower count
export const topFollowers = [
  { handle: "dmuthuk", name: "D.Muthukrishnan", followers: 552417 },
  { handle: "sumanthraman", name: "Sumanth Raman", followers: 363300 },
  { handle: "AskPerplexity", name: "Ask Perplexity", followers: 275524 },
  { handle: "BattaKashmiri", name: "Kashmiri Hindu", followers: 222006 },
  { handle: "YRDeshmukh", name: "Yashwant Deshmukh", followers: 201847 },
  { handle: "CaVivekkhatri", name: "CA Vivek Khatri", followers: 194660 },
  { handle: "seriousfunnyguy", name: "SUDHIR", followers: 170431 },
  { handle: "Ravisutanjani", name: "Ravisutanjani", followers: 163979 },
  { handle: "Wego", name: "Wego", followers: 138811 },
  { handle: "centerofright", name: "Vijay", followers: 100712 },
  { handle: "AdvaitaKala", name: "Advaita Kala", followers: 95473 },
  { handle: "malpani", name: "Dr Aniruddha Malpani", followers: 74782 },
  { handle: "Sootradhar", name: "Jayess", followers: 59657 },
  { handle: "fpjindia", name: "Free Press Journal", followers: 55737 },
  { handle: "AmitLeliSlayer", name: "Boiled Anda", followers: 42210 },
  { handle: "TheNewIndian_in", name: "The New Indian", followers: 40605 },
  { handle: "MithilaWaala", name: "Amitabh Chaudhary", followers: 30480 },
  { handle: "americai", name: "Americai V Narayanan", followers: 29991 },
  { handle: "msnindia", name: "MSN India", followers: 27761 },
];

// Create categorized lists for easier use in components
export const mostRetweetedTweets = [...mostRTTweets].sort((a, b) => b.rt - a.rt);
export const mostLikedTweets = [...mostRTTweets].sort((a, b) => b.likes - a.likes);
export const mostViewedTweets = [...mostRTTweets].sort((a, b) => b.views - a.views);
