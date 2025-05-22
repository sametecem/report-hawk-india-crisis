
import React from 'react';

const AccountTypeLegend: React.FC = () => {
  return (
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
  );
};

export default AccountTypeLegend;
