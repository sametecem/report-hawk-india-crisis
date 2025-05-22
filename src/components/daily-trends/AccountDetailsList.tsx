
import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { AccountData, getAccountColor } from './accountsData';

interface AccountDetailsListProps {
  accounts: AccountData[];
}

const AccountDetailsList: React.FC<AccountDetailsListProps> = ({ accounts }) => {
  return (
    <div className="mt-4">
      <h4 className="text-sm font-semibold mb-2">Hesap Detayları</h4>
      <div className="space-y-2 max-h-44 overflow-y-auto pr-2">
        {accounts.map((account, index) => (
          <div key={index} className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
            <Avatar className="w-10 h-10 flex-shrink-0">
              <AvatarImage src={account.avatar} alt={account.handle} />
              <AvatarFallback>{account.handle.charAt(1)}</AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-medium text-sm">{account.handle}</p>
              <p className="text-xs text-gray-500">{account.description}</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="text-sm font-semibold" style={{ color: getAccountColor(account.type) }}>
                {account.mentions}
              </div>
              <div className="text-xs px-2 py-0.5 rounded-full mt-1" 
                style={{ backgroundColor: `${getAccountColor(account.type)}20`, color: getAccountColor(account.type) }}>
                {account.type}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AccountDetailsList;
