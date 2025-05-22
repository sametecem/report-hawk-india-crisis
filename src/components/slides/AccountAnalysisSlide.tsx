
import React, { useRef } from 'react';
import Slide from '@/components/Slide';
import { Card } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';
import { mentionedAccounts, activeAccounts } from '@/data/reportData';
import DownloadButton from '@/components/DownloadButton';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const AccountAnalysisSlide = () => {
  const mentionedAccountsRef = useRef<HTMLDivElement>(null);
  const activeAccountsRef = useRef<HTMLDivElement>(null);
  const userStatsRef = useRef<HTMLDivElement>(null);

  // Account details with images and descriptions
  const accountDetails = [
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

  // Get account type color
  const getTypeColor = (type: string) => {
    switch (type) {
      case "Marka": return "#3b82f6"; // blue
      case "Kurum": return "#8b5cf6"; // purple
      case "Kişi": return "#f97316";  // orange
      default: return "#6b7280";      // gray
    }
  };

  return (
    <Slide title="7. Hesap ve Etkileşim Analizi" bgColor="bg-gradient-to-br from-white via-green-50 to-green-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="p-4 md:p-6 shadow-lg bg-white/90 backdrop-blur-sm relative">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Sık Bahsedilen 10 Hesap</h3>
          <DownloadButton targetRef={mentionedAccountsRef} filename="en-sik-bahsedilen-hesaplar" />
          <div ref={mentionedAccountsRef} className="space-y-2 md:space-y-3 mt-2">
            <style dangerouslySetInnerHTML={{ __html: `
              @media print {
                .account-item {
                  page-break-inside: avoid;
                  margin-bottom: 10px;
                }
              }
            `}} />
            {accountDetails.map((account, index) => (
              <div key={index} className="account-item flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg transition-colors">
                <Avatar className="h-8 w-8 md:h-10 md:w-10 border flex-shrink-0">
                  <AvatarImage src={account.avatar} alt={account.handle} />
                  <AvatarFallback>{account.handle.slice(1, 3)}</AvatarFallback>
                </Avatar>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center">
                    <a 
                      href={`https://twitter.com/${account.handle.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-blue-600 hover:text-blue-800 flex items-center text-sm md:text-base"
                    >
                      {account.handle} 
                      <ExternalLink className="h-3 w-3 ml-1" />
                    </a>
                    <span className="ml-2 text-xs md:text-sm text-gray-500">({account.mentions} kez)</span>
                  </div>
                  <p className="text-xs text-gray-600 truncate">{account.description}</p>
                  <div 
                    className="mt-1 inline-flex items-center text-xs px-2 py-0.5 rounded-full" 
                    style={{
                      backgroundColor: `${getTypeColor(account.type)}20`,
                      color: getTypeColor(account.type)
                    }}
                  >
                    {account.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4 md:p-6 shadow-lg bg-white/90 backdrop-blur-sm relative">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b pb-2">En Çok Tweet Atan 10 Hesap</h3>
          <DownloadButton targetRef={activeAccountsRef} filename="en-cok-tweet-atan-hesaplar" />
          <div ref={activeAccountsRef} className="space-y-2 mt-2">
            {activeAccounts.map((account, index) => (
              <div key={index} className="flex flex-wrap items-center justify-between">
                <a 
                  href={`https://twitter.com/${account.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-blue-600 hover:text-blue-800 text-sm md:text-base"
                >
                  @{account.name} <ExternalLink className="h-3 w-3 ml-1" />
                </a>
                <span className="font-medium text-sm md:text-base">{account.count} tweet</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-4 md:p-6 shadow-lg bg-white/90 backdrop-blur-sm md:col-span-2 relative">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-gray-800 border-b pb-2">Kullanıcı İstatistikleri</h3>
          <DownloadButton targetRef={userStatsRef} filename="kullanici-istatistikleri" />
          <div ref={userStatsRef} className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 mt-2">
            <div className="bg-green-50 p-3 md:p-4 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2 text-sm md:text-base">Tekil Tweet Atan Kullanıcı</h4>
              <p className="text-2xl md:text-3xl font-bold text-green-700">512</p>
            </div>
            <div className="bg-blue-50 p-3 md:p-4 rounded-lg">
              <h4 className="font-semibold text-blue-800 mb-2 text-sm md:text-base">En Aktif Kullanıcının Tweet Sayısı</h4>
              <p className="text-2xl md:text-3xl font-bold text-blue-700">53</p>
              <p className="text-xs md:text-sm text-blue-600">(@smartyevans)</p>
            </div>
            <div className="bg-purple-50 p-3 md:p-4 rounded-lg">
              <h4 className="font-semibold text-purple-800 mb-2 text-sm md:text-base">Ortalama Kullanıcı Başına Tweet</h4>
              <p className="text-2xl md:text-3xl font-bold text-purple-700">2.47</p>
            </div>
          </div>
        </Card>
      </div>
    </Slide>
  );
};

export default AccountAnalysisSlide;
