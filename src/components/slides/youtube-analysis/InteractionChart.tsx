
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';

interface InteractionData {
  type: string;
  count: number;
}

interface InteractionChartProps {
  data: InteractionData[];
}

const InteractionChart: React.FC<InteractionChartProps> = ({ data }) => {
  return (
    <Card className="bg-white shadow-md">
      <CardContent className="p-6">
        <h3 className="font-semibold text-lg mb-4 flex items-center">
          <MessageSquare size={18} className="mr-2 text-purple-500" /> Etkileşim Dağılımı
        </h3>
        <div className="h-60">
          <ChartContainer config={{
            count: {
              label: "Etkileşim Adedi",
              theme: { light: "#8b5cf6", dark: "#a78bfa" }
            }
          }}>
            <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
              <XAxis dataKey="type" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="count" name="Adet" fill="var(--color-count)" radius={[4, 4, 0, 0]} barSize={60} />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default InteractionChart;
