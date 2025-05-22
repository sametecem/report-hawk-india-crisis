
import React from 'react';
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
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { AccountData } from './accountsData';
import AccountTooltip from './AccountTooltip';

interface AccountsBarChartProps {
  chartData: AccountData[];
  accountsData: AccountData[];
}

const AccountsBarChart: React.FC<AccountsBarChartProps> = ({ chartData, accountsData }) => {
  return (
    <div className="h-80">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 90, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
          <XAxis type="number" />
          <YAxis 
            type="category" 
            dataKey="handle" 
            tick={(props) => {
              const { x, y, payload } = props;
              const account = accountsData.find(a => a.handle === payload.value);
              
              if (!account) return null;
              
              return (
                <g transform={`translate(${x},${y})`}>
                  <foreignObject x="-85" y="-12" width="80" height="24">
                    <div className="flex items-center gap-1">
                      <Avatar className="w-5 h-5 flex-shrink-0">
                        <AvatarImage src={account.avatar} alt={account.handle} />
                        <AvatarFallback>{account.handle.charAt(1)}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs truncate">{account.handle}</span>
                    </div>
                  </foreignObject>
                </g>
              );
            }}
            width={90}
          />
          <Tooltip content={<AccountTooltip />} />
          <Bar dataKey="mentions" name="Mentions" label={{ position: 'right', formatter: (value: number) => value }}>
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AccountsBarChart;
