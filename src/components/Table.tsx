
import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  className?: string;
}

const Table = ({ headers, rows, className }: TableProps) => {
  return (
    <div className={cn("w-full overflow-x-auto", className)}>
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300">
            {headers.map((header, index) => (
              <th key={index} className="py-3 px-4 text-left font-semibold text-gray-700">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className={`border-b border-gray-200 ${rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}
            >
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="py-3 px-4 text-gray-800">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
