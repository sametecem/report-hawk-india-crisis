
import React, { useRef } from 'react';
import { 
  BarChart, 
  Bar, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Twitter } from 'lucide-react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import DownloadButton from '@/components/DownloadButton';

const TopMentionedAccounts: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  const accountsData = [
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
    }
  ];

  // Generate colors based on account type
  const getAccountColor = (type: string) => {
    switch (type) {
      case "Marka": return "#3b82f6"; // blue
      case "Kurum": return "#8b5cf6"; // purple
      case "Kişi": return "#f97316";  // orange
      default: return "#6b7280";      // gray
    }
  };
  
  // Add colors to the data
  const chartData = accountsData.map(account => ({
    ...account,
    color: getAccountColor(account.type)
  }));

  // Custom tooltip that shows account details
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-3 rounded shadow-md border border-gray-200 max-w-xs">
          <div className="flex items-center gap-2 mb-1">
            <Avatar className="w-6 h-6">
              <AvatarImage src={data.avatar} alt={data.handle} />
              <AvatarFallback>{data.handle.charAt(1)}</AvatarFallback>
            </Avatar>
            <span className="font-semibold">{data.handle}</span>
          </div>
          <p className="text-sm text-gray-600">{data.description}</p>
          <p className="text-sm font-medium mt-1">
            <span className="text-indigo-600">{data.mentions}</span> kez mention edildi
          </p>
          <div className="mt-1 inline-flex items-center text-xs px-2 py-0.5 rounded-full" 
            style={{ backgroundColor: `${data.color}20`, color: data.color }}>
            {data.type}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative" ref={chartRef}>
      <DownloadButton 
        targetRef={chartRef} 
        filename="en-cok-mention-edilen-hesaplar" 
        className="absolute top-0 right-0" 
      />
      
      <div className="flex items-center gap-2 mb-4">
        <Twitter className="w-5 h-5 text-blue-500" />
        <h3 className="text-xl font-bold text-gray-800">En Çok Mention Edilen Hesaplar</h3>
      </div>
      
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 80, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
            <XAxis type="number" />
            <YAxis 
              type="category" 
              dataKey="handle" 
              tick={{ fontSize: 12 }}
              width={90}
            />
            <Tooltip content={<CustomTooltip />} />
            <Bar dataKey="mentions" name="Mentions">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      
      <div className="mt-4 grid grid-cols-3 gap-2">
        <div className="flex items-center gap-1 text-xs">
          <span className="w-3 h-3 rounded-full bg-blue-500"></span>
          <span>Marka</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="w-3 h-3 rounded-full bg-purple-500"></span>
          <span>Kurum</span>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span>Kişi</span>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-semibold mb-2">Hesap Detayları</h4>
        <div className="space-y-2 max-h-36 overflow-y-auto pr-2">
          {accountsData.slice(0, 4).map((account, index) => (
            <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
              <Avatar className="w-8 h-8">
                <AvatarImage src={account.avatar} alt={account.handle} />
                <AvatarFallback>{account.handle.charAt(1)}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-sm truncate">{account.handle}</p>
                <p className="text-xs text-gray-500 truncate">{account.description}</p>
              </div>
              <div className="text-sm font-semibold" style={{ color: getAccountColor(account.type) }}>
                {account.mentions}
              </div>
            </div>
          ))}
          <div className="text-xs text-blue-600 cursor-pointer mt-1">+ Daha fazla göster</div>
        </div>
      </div>
    </div>
  );
};

export default TopMentionedAccounts;
