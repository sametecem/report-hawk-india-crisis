
import { faker } from '@faker-js/faker';

// Set seed for consistent results
faker.seed(123);

// Helper function to generate dates within a range
const randomDate = (startDate: Date, endDate: Date) => {
  return new Date(startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime()));
};

// Helper function to format date to string
const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('tr-TR', { day: 'numeric', month: 'short' }).format(date);
};

// Helper to generate a random profile picture
const getRandomProfilePic = () => {
  const gender = Math.random() > 0.5 ? 'men' : 'women';
  const randomNumber = Math.floor(Math.random() * 70) + 1;
  return `https://randomuser.me/api/portraits/${gender}/${randomNumber}.jpg`;
};

// Generate comment data for Instagram analysis
export const generateCommentData = () => {
  // Date range
  const startDate = new Date('2025-05-05');
  const endDate = new Date('2025-05-18');
  
  // Generate daily volume data
  const dailyVolume = Array.from({ length: 14 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    // Create a spike on specific days
    let commentMultiplier = 1;
    if (i === 3) commentMultiplier = 2.5; // May 8
    if (i === 5) commentMultiplier = 3.2; // May 10
    if (i === 9) commentMultiplier = 2.8; // May 14
    
    const comments = Math.floor((Math.random() * 2000 + 500) * commentMultiplier);
    
    return {
      date: formatDate(date),
      comments,
      isPeak: commentMultiplier > 1.5
    };
  });

  // Generate peak days data
  const peakDays = dailyVolume
    .filter(day => day.isPeak)
    .map(day => ({
      date: day.date,
      comments: day.comments,
      negativePercentage: Math.floor(Math.random() * 30 + 60) // 60-90%
    }));

  // Generate hourly speed data
  const hourlySpeed = Array.from({ length: 24 }, (_, i) => {
    let commentsPerMinute = Math.random() * 3;
    
    // Create peaks at certain hours
    if (i >= 10 && i <= 13) commentsPerMinute += Math.random() * 10 + 5;
    if (i >= 18 && i <= 21) commentsPerMinute += Math.random() * 8 + 4;
    
    return {
      hour: `${i.toString().padStart(2, '0')}:00`,
      commentsPerMinute: Number(commentsPerMinute.toFixed(1)),
      date: '10 Mayıs'
    };
  });

  // Generate sentiment data
  const sentimentCurve = Array.from({ length: 14 }, (_, i) => {
    const date = new Date(startDate);
    date.setDate(date.getDate() + i);
    
    // Start neutral-negative, go very negative during crisis, slowly recover
    let baseScore = -0.2;
    if (i < 3) baseScore = -0.3;
    else if (i >= 3 && i < 7) baseScore = -0.7;
    else if (i >= 7 && i < 10) baseScore = -0.5;
    else if (i >= 10) baseScore = -0.3;
    
    const randomVariation = Math.random() * 0.2 - 0.1;
    
    return {
      date: formatDate(date),
      sentimentScore: Number((baseScore + randomVariation).toFixed(2)),
      commentCount: dailyVolume[i].comments,
      baseline: 0
    };
  });

  // Generate sentiment distribution
  const sentimentDistribution = [
    { name: 'Çok Negatif', value: Math.floor(Math.random() * 3000 + 7000), color: '#ef4444' },
    { name: 'Negatif', value: Math.floor(Math.random() * 2000 + 4000), color: '#f97316' },
    { name: 'Nötr', value: Math.floor(Math.random() * 1500 + 2000), color: '#a1a1aa' },
    { name: 'Pozitif', value: Math.floor(Math.random() * 700 + 300), color: '#22c55e' },
  ];
  
  // Generate toxicity data by hour
  const toxicityByHour = Array.from({ length: 24 }, (_, i) => {
    let basePercentage = 30; // Base toxicity percentage
    
    // Higher toxicity during evening and late night
    if (i >= 18 || i <= 2) basePercentage += 15;
    // Peak hours have even higher toxicity
    if ((i >= 10 && i <= 13) || (i >= 19 && i <= 22)) basePercentage += 10;
    
    const randomVariation = Math.floor(Math.random() * 10);
    
    return {
      hour: `${i.toString().padStart(2, '0')}:00`,
      toxicityPercentage: basePercentage + randomVariation
    };
  });
  
  // Generate topics data
  const topics = [
    { 
      name: 'Boykot Çağrısı',
      commentCount: Math.floor(Math.random() * 3000 + 7000),
      keywords: ['boykot', 'boycott', 'iptal', 'cancel', 'destek yok', 'destekleme'],
      color: '#ef4444'
    },
    { 
      name: 'Politik Eleştiri',
      commentCount: Math.floor(Math.random() * 2000 + 4000),
      keywords: ['politika', 'dış ilişkiler', 'uluslararası', 'gazze', 'hükümet'],
      color: '#f97316'
    },
    { 
      name: 'Müşteri Şikayeti',
      commentCount: Math.floor(Math.random() * 1500 + 2500),
      keywords: ['bilet', 'iptal', 'rötar', 'müşteri hizmetleri', 'uçuş'],
      color: '#f59e0b'
    },
    { 
      name: 'Ülke Desteği',
      commentCount: Math.floor(Math.random() * 1200 + 2000),
      keywords: ['destek', 'solidarity', 'dayanışma', 'birlik', 'türkiye'],
      color: '#8b5cf6'
    },
    { 
      name: 'Alternatif Havayolu',
      commentCount: Math.floor(Math.random() * 1000 + 1500),
      keywords: ['indigo', 'emirates', 'qatar', 'lufthansa', 'pegasus'],
      color: '#10b981'
    },
    { 
      name: 'Hizmet Övgüsü',
      commentCount: Math.floor(Math.random() * 800 + 700),
      keywords: ['kalite', 'hizmet', 'teşekkür', 'deneyim', 'seyahat'],
      color: '#3b82f6'
    }
  ];
  
  // Generate CTA data by hour
  const ctaByHour = Array.from({ length: 24 }, (_, i) => {
    const baseCount = Math.floor(Math.random() * 30 + 20);
    
    // More CTAs during day time and evening
    const hourMultiplier = (i >= 9 && i <= 22) ? (Math.random() * 3 + 2) : 1;
    const ctaCount = Math.floor(baseCount * hourMultiplier);
    
    return {
      hour: `${i.toString().padStart(2, '0')}:00`,
      ctaCount,
      ctaPercentage: Math.floor(Math.random() * 15 + 30)
    };
  });
  
  // Generate top CTA phrases
  const topCTAPhrases = [
    { phrase: 'Boykot edin', count: Math.floor(Math.random() * 300 + 700) },
    { phrase: 'Desteklemeyin', count: Math.floor(Math.random() * 200 + 500) },
    { phrase: 'Bilet almayın', count: Math.floor(Math.random() * 200 + 400) },
    { phrase: 'İptal edin', count: Math.floor(Math.random() * 100 + 300) },
    { phrase: 'Paylaşın', count: Math.floor(Math.random() * 100 + 200) }
  ];
  
  // Generate post boycott intensity
  const postBoycottIntensity = Array.from({ length: 10 }, (_, i) => {
    return {
      postId: (i + 1).toString(),
      postDescription: faker.lorem.sentence(3),
      totalComments: Math.floor(Math.random() * 3000 + 500),
      negativePercentage: Math.floor(Math.random() * 40 + 40)
    };
  });
  
  // Generate language distribution
  const languageDistribution = [
    { 
      language: 'İngilizce', 
      commentCount: Math.floor(Math.random() * 5000 + 7000), 
      percentage: 48,
      example: 'We need to boycott Turkish Airlines now!',
      color: '#3b82f6'
    },
    { 
      language: 'Hintçe', 
      commentCount: Math.floor(Math.random() * 3000 + 4000), 
      percentage: 28,
      example: 'हमें तुर्की एयरलाइंस का बहिष्कार करना चाहिए',
      color: '#f97316'
    },
    { 
      language: 'Türkçe', 
      commentCount: Math.floor(Math.random() * 2000 + 3000), 
      percentage: 16,
      example: 'Türk Hava Yolları her zaman kaliteli hizmet sunar',
      color: '#ef4444'
    },
    { 
      language: 'Arapça', 
      commentCount: Math.floor(Math.random() * 500 + 1000), 
      percentage: 5,
      example: 'يجب علينا مقاطعة الخطوط الجوية التركية',
      color: '#8b5cf6'
    },
    { 
      language: 'Diğer', 
      commentCount: Math.floor(Math.random() * 300 + 500), 
      percentage: 3,
      example: '(Çeşitli diller)',
      color: '#a1a1aa'
    }
  ];
  
  // Generate top comments
  const topComments = Array.from({ length: 20 }, (_, i) => ({
    username: faker.internet.userName().toLowerCase(),
    userProfilePic: getRandomProfilePic(),
    date: formatDate(randomDate(startDate, endDate)),
    text: faker.lorem.sentences(2),
    impactScore: Math.floor(Math.random() * 40 + 60),
    postLink: `https://instagram.com/p/${faker.string.alphanumeric(10)}/`
  }));
  
  // Generate user personas
  const userPersonas = [
    {
      type: 'Gerçek Fotoğraflı',
      percentage: 45,
      negativityPercentage: 62,
      characteristics: [
        'Daha uzun ve detaylı yorumlar',
        'Diğer kullanıcılarla etkileşimli',
        'Daha düzenli profil özellikleri'
      ],
      sampleComment: 'Bu durumdan dolayı artık Türk Hava Yolları ile seyahat etmeyeceğim. Alternatif firmalar araştırıyorum.',
      sampleProfilePic: 'https://randomuser.me/api/portraits/women/33.jpg'
    },
    {
      type: 'Meme/Logo Profil',
      percentage: 35,
      negativityPercentage: 85,
      characteristics: [
        'Daha sert ve doğrudan ifadeler',
        'Emoji kullanımı yaygın',
        'Hashtag kullanımı sık'
      ],
      sampleComment: 'BOYKOT EDİN!!! #boycottturkishairlines #turkishairlinesboycott 🚫✈️',
      sampleProfilePic: 'https://www.svgrepo.com/show/384674/account-avatar-profile-user-7.svg'
    },
    {
      type: 'Anonim/Boş Profil',
      percentage: 20,
      negativityPercentage: 78,
      characteristics: [
        'Kısa ve keskin yorumlar',
        'Genellikle sadece çağrı içerikli',
        'Diğer yorumlara cevap verme eğilimi yüksek'
      ],
      sampleComment: 'Desteklemeyin! Biletinizi iptal edin!',
      sampleProfilePic: 'https://www.svgrepo.com/show/507442/user-circle.svg'
    }
  ];
  
  // Generate user activity patterns
  const userActivityPatterns = Array.from({ length: 24 }, (_, i) => {
    return {
      hour: `${i.toString().padStart(2, '0')}:00`,
      realPhoto: Math.floor(Math.random() * 50 + (i >= 10 && i <= 22 ? 50 : 20)),
      memePhoto: Math.floor(Math.random() * 70 + (i >= 18 || i <= 2 ? 80 : 30)),
      anonymous: Math.floor(Math.random() * 40 + 30)
    };
  });
  
  // Calculate total metrics
  const totalComments = dailyVolume.reduce((sum, day) => sum + day.comments, 0);
  const uniqueUsers = Math.floor(totalComments * 0.7); // 70% unique users
  const toxicPercentage = Math.floor(Math.random() * 10 + 30); // 30-40%
  const ctaPercentage = Math.floor(Math.random() * 10 + 25); // 25-35%
  const ctaCount = Math.floor(totalComments * ctaPercentage / 100);
  const boycottPercentage = Math.floor(Math.random() * 15 + 65); // 65-80%
  
  return {
    metrics: {
      totalComments,
      uniqueUsers,
      toxicPercentage,
      ctaPercentage,
      ctaCount,
      boycottPercentage
    },
    dailyVolume,
    peakDays,
    hourlySpeed,
    sentimentCurve,
    sentimentDistribution,
    toxicityByHour,
    topics,
    ctaByHour,
    topCTAPhrases,
    postBoycottIntensity,
    languageDistribution,
    topComments,
    userPersonas,
    userActivityPatterns
  };
};
