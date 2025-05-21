
import React from 'react';
import { cn } from '@/lib/utils';

interface TableProps {
  headers: string[];
  rows: (string | number | React.ReactNode)[][];
  className?: string;
  highlightFirstColumn?: boolean;
  compact?: boolean;
  striped?: boolean;
}

const Table = ({ 
  headers, 
  rows, 
  className,
  highlightFirstColumn = false,
  compact = false,
  striped = true,
}: TableProps) => {
  return (
    <div className={cn("w-full overflow-x-auto rounded-lg shadow-md", className)}>
      <table className="min-w-full border-collapse bg-white overflow-hidden">
        <thead>
          <tr className="bg-gradient-to-r from-blue-500/90 to-purple-500/90 text-white">
            {headers.map((header, index) => (
              <th key={index} className={cn(
                "py-4 px-4 text-left font-semibold",
                compact ? "py-2 px-3 text-sm" : ""
              )}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr 
              key={rowIndex} 
              className={cn(
                "border-b border-gray-100 hover:bg-gray-50 transition-colors",
                striped ? (rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50/50') : 'bg-white'
              )}
            >
              {row.map((cell, cellIndex) => (
                <td 
                  key={cellIndex} 
                  className={cn(
                    "py-3 px-4 text-gray-800",
                    compact ? "py-2 px-3 text-sm" : "",
                    highlightFirstColumn && cellIndex === 0 ? "font-medium" : ""
                  )}
                >
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
