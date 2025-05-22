
import React, { useRef } from 'react';
import { Twitter } from 'lucide-react';
import DownloadButton from '@/components/DownloadButton';
import { accountsData, getAccountColor } from './accountsData';
import AccountsBarChart from './AccountsBarChart';
import AccountTypeLegend from './AccountTypeLegend';
import AccountDetailsList from './AccountDetailsList';

const TopMentionedAccounts: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  
  // Add colors to the data
  const chartData = accountsData.map(account => ({
    ...account,
    color: getAccountColor(account.type)
  }));

  return (
    <div className="relative" ref={chartRef}>
      <DownloadButton 
        targetRef={chartRef} 
        filename="en-cok-mention-edilen-hesaplar" 
        className="absolute top-0 right-0" 
        variant="outline"
        size="sm"
      />
      
      <div className="flex items-center gap-2 mb-4">
        <Twitter className="w-5 h-5 text-blue-500" />
        <h3 className="text-xl font-bold text-gray-800">En Çok Mention Edilen Hesaplar</h3>
      </div>
      
      <AccountsBarChart chartData={chartData} accountsData={accountsData} />
      
      <AccountTypeLegend />
      
      <AccountDetailsList accounts={accountsData} />
    </div>
  );
};

export default TopMentionedAccounts;
