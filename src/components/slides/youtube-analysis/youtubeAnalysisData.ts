
// Summary data
export const summaryData = {
  videoCount: 265,
  totalViews: 1816608,
  totalComments: 4506,
  totalLikes: 90196, // Toplam beğeni sayısını ekledik
};

// Daily upload and engagement data
export const dailyData = [
  { date: "29 Nis", uploads: 1, views: 159758, interactions: 2393 },
  { date: "8 May", uploads: 2, views: 30107, interactions: 1043 },
  { date: "9 May", uploads: 4, views: 173437, interactions: 41375 },
  { date: "10 May", uploads: 6, views: 14772, interactions: 336 },
  { date: "11 May", uploads: 4, views: 1738311, interactions: 78293 },
  { date: "12 May", uploads: 2, views: 406228, interactions: 16279 },
  { date: "13 May", uploads: 5, views: 936635, interactions: 72736 },
  { date: "14 May", uploads: 16, views: 2258665, interactions: 113458 },
  { date: "15 May", uploads: 35, views: 1082025, interactions: 147665 },
  { date: "16 May", uploads: 20, views: 1352273, interactions: 66879 },
  { date: "17 May", uploads: 7, views: 40998, interactions: 817 },
  { date: "18 May", uploads: 5, views: 136196, interactions: 1543 },
  { date: "19 May", uploads: 4, views: 11811, interactions: 454 },
  { date: "20 May", uploads: 6, views: 12573, interactions: 104 },
  { date: "21 May", uploads: 2, views: 117062, interactions: 2417 },
  { date: "22 May", uploads: 1, views: 3, interactions: 0 }
];

// Top 10 popular videos
export const topVideos = [
  {
    id: 'dSLAa-wiZ5w',
    thumbnail: 'https://img.youtube.com/vi/dSLAa-wiZ5w/hqdefault.jpg',
    title: 'Pakistan Turkey Azerbaijan axis - Big problem for India | Dr Sidharth Arora',
    channel: 'UPSC Unstoppables by Unacademy',
    publishDate: 'May 2025',
    views: 1635099,
    likes: 0, // Not provided in the data
    comments: 0, // Not provided in the data
  },
  {
    id: 'obnlp8MhEDw',
    thumbnail: 'https://img.youtube.com/vi/obnlp8MhEDw/hqdefault.jpg',
    title: 'Boycott Turkey: क्या Turkey ने भारतीयों से अपील? | Breaking News',
    channel: 'Dainik Jagran - दैनिक जागरण',
    publishDate: 'May 2025',
    views: 1370086,
    likes: 0,
    comments: 0,
  },
  {
    id: 'xch7g04d2ho',
    thumbnail: 'https://img.youtube.com/vi/xch7g04d2ho/hqdefault.jpg',
    title: 'फंस गए पाकिस्तान के यार | Turkey के टूर कैंसिल, बिज़नेस का बॉयकॉट',
    channel: 'RJ Raunac',
    publishDate: 'May 2025',
    views: 1254800,
    likes: 0,
    comments: 0,
  },
  {
    id: 'QnFOeZrB0lk',
    thumbnail: 'https://img.youtube.com/vi/QnFOeZrB0lk/hqdefault.jpg',
    title: 'Real Face Of Turkey🤡 |#shorts #turkey #india #pakistan',
    channel: 'त्यागी 🕉️',
    publishDate: 'May 2025',
    views: 817227,
    likes: 0,
    comments: 0,
  },
  {
    id: 'wnlJZ5FtE0M',
    thumbnail: 'https://img.youtube.com/vi/wnlJZ5FtE0M/hqdefault.jpg',
    title: 'Why Indian Tourists are Boycotting Turkiye & Azerbaijan',
    channel: 'Firstpost',
    publishDate: 'May 2025',
    views: 789569,
    likes: 0,
    comments: 0,
  },
  {
    id: '2l3ALCMFpy4',
    thumbnail: 'https://img.youtube.com/vi/2l3ALCMFpy4/hqdefault.jpg',
    title: 'Boycott Turkey - एहसान फरामोश निकला तुर्की | #boycottturkey #shorts',
    channel: 'News18 India',
    publishDate: 'May 2025',
    views: 646046,
    likes: 0,
    comments: 0,
  },
];

// Channel data - Previously sorted by subscribers, we'll keep the structure but note that data is simulated
export const channelData = [
  { name: 'UPSC Unstoppables by Unacademy', subscribers: 1240000, videos: 15, totalViews: 1635099 },
  { name: 'Dainik Jagran - दैनिक जागरण', subscribers: 980000, videos: 12, totalViews: 1370086 },
  { name: 'RJ Raunac', subscribers: 875000, videos: 10, totalViews: 1254800 },
  { name: 'News18 India', subscribers: 720000, videos: 22, totalViews: 860545 },
  { name: 'त्यागी 🕉️', subscribers: 510000, videos: 8, totalViews: 817227 },
  { name: 'Firstpost', subscribers: 430000, videos: 6, totalViews: 789569 },
  { name: 'Zee News', subscribers: 380000, videos: 14, totalViews: 822010 },
  { name: 'CNN-News18', subscribers: 320000, videos: 7, totalViews: 35289 },
  { name: 'Business Today', subscribers: 290000, videos: 5, totalViews: 66003 },
  { name: 'O News हिंदी', subscribers: 240000, videos: 9, totalViews: 9693 },
];

// Interaction data (likes, comments, shares)
export const interactionData = [
  { type: 'Beğeni', count: 90196 },
  { type: 'Yorum', count: 4506 },
  { type: 'Paylaşım', count: 28500 }, // Estimated value as not provided in data
];

// Format number with thousand separators
export const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
