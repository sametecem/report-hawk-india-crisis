
import React from 'react';
import { Card } from '@/components/ui/card';

interface NewsHeaderProps {
  totalNews: number;
}

const NewsHeader = ({ totalNews }: NewsHeaderProps) => {
  return (
    <div className="flex flex-wrap justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2 border-l-4 border-blue-500 pl-3">Güncel Haberler</h1>
        <p className="text-gray-600">
          Teknoloji ve sosyal medya alanındaki en son gelişmeler
        </p>
      </div>
      <Card className="p-4 bg-blue-50 border-blue-200 w-full lg:w-auto mt-4 lg:mt-0 hover:shadow-md transition-shadow duration-300">
        <div className="flex items-center gap-3">
          <div className="text-4xl font-bold text-blue-600">{totalNews}</div>
          <div className="text-sm text-gray-600">
            <div className="font-medium">Güncel Haber</div>
            <div>Son 7 gün içinde</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default NewsHeader;
