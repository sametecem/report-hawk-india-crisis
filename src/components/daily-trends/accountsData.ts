
export interface AccountData {
  handle: string;
  mentions: number;
  avatar: string;
  description: string;
  type: "Marka" | "Kurum" | "Kişi";
  color?: string;
}

export const accountsData: AccountData[] = [
  {
    handle: "@IndiGo6E",
    mentions: 229,
    avatar: "https://pbs.twimg.com/profile_images/1574362382431756290/tlQb5Z8i_400x400.jpg",
    description: "Hindistan merkezli özel havayolu şirketi (IndiGo Airlines)",
    type: "Marka"
  },
  {
    handle: "@TurkishAirlines",
    mentions: 97,
    avatar: "https://pbs.twimg.com/profile_images/1883771335567941632/7BUExsM4_400x400.jpg",
    description: "Türkiye'nin bayrak taşıyıcı havayolu şirketi (Türk Hava Yolları)",
    type: "Marka"
  },
  {
    handle: "@PMOIndia",
    mentions: 33,
    avatar: "https://pbs.twimg.com/profile_images/1800520500432515073/tMB_rJVh_400x400.jpg",
    description: "Hindistan Başbakanlık Ofisi (Prime Minister's Office)",
    type: "Kurum"
  },
  {
    handle: "@RTErdogan",
    mentions: 32,
    avatar: "https://pbs.twimg.com/profile_images/1653157500986744832/wu0ArmY8_400x400.jpg",
    description: "Türkiye Cumhurbaşkanı Recep Tayyip Erdoğan",
    type: "Kişi"
  },
  {
    handle: "@6EIndigo",
    mentions: 32,
    avatar: "https://pbs.twimg.com/profile_images/1574362382431756290/tlQb5Z8i_400x400.jpg",
    description: "IndiGo Airlines'ın alternatif/yardımcı hesabı",
    type: "Marka"
  },
  {
    handle: "@MEAIndia",
    mentions: 29,
    avatar: "https://pbs.twimg.com/profile_images/1833517334864015360/5WT4dWPb_400x400.jpg",
    description: "Hindistan Dışişleri Bakanlığı (Ministry of External Affairs)",
    type: "Kurum"
  },
  {
    handle: "@airindia",
    mentions: 21,
    avatar: "https://pbs.twimg.com/profile_images/1736908359356555264/yP2AWaAq_400x400.jpg",
    description: "Hindistan'ın bayrak taşıyıcı havayolu şirketi (Air India)",
    type: "Marka"
  },
  {
    handle: "@GoHomestay",
    mentions: 20,
    avatar: "https://pbs.twimg.com/profile_images/1842398619187716096/xbjnakfc_400x400.jpg",
    description: "Seyahat/konaklama hizmeti sunan dijital platform",
    type: "Marka"
  },
  {
    handle: "@AmitShah",
    mentions: 19,
    avatar: "https://pbs.twimg.com/profile_images/1833743527928541184/aT_uOoth_400x400.jpg",
    description: "Hindistan İçişleri Bakanı Amit Shah",
    type: "Kişi"
  },
  {
    handle: "@HardeepSPuri",
    mentions: 18,
    avatar: "https://pbs.twimg.com/profile_images/1834448557505748992/ZDYW4b6n_400x400.jpg",
    description: "Hindistan Sivil Havacılık Bakanı Hardeep Singh Puri",
    type: "Kişi"
  }
];

// Helper function to get account color based on type
export const getAccountColor = (type: string) => {
  switch (type) {
    case "Marka": return "#3b82f6"; // blue
    case "Kurum": return "#8b5cf6"; // purple
    case "Kişi": return "#f97316";  // orange
    default: return "#6b7280";      // gray
  }
};
