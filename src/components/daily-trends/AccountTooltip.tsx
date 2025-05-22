
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { AccountData } from './accountsData';

interface CustomTooltipProps {
  active?: boolean;
  payload?: any[];
}

const AccountTooltip: React.FC<CustomTooltipProps> = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload as AccountData;
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

export default AccountTooltip;
