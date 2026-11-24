import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { Badge } from './Badge';

export interface Column<T> {
  header: string;
  accessorKey?: keyof T;
  cell?: (row: T) => React.ReactNode;
}

export interface TableProps<T> {
  data: T[];
  columns: Column<T>[];
  pageSize?: number;
}

export function Table<T extends { id: string | number }>({
  data,
  columns,
  pageSize = 5,
}: TableProps<T>) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(data.length / pageSize);

  const paginatedData = data.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="w-full rounded-2xl border border-gray-200 dark:border-midnight-700/80 bg-white dark:bg-midnight-850 overflow-hidden shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50 dark:bg-midnight-900 border-b border-gray-200 dark:border-midnight-700/80 text-xs font-heading font-semibold uppercase tracking-wider text-gray-500 dark:text-purple-300">
            <tr>
              {columns.map((col, idx) => (
                <th key={idx} className="px-6 py-4">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-midnight-700/50">
            {paginatedData.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-gray-50/80 dark:hover:bg-midnight-800/50 transition-colors"
              >
                {columns.map((col, cIdx) => (
                  <td key={cIdx} className="px-6 py-4 font-normal text-midnight-950 dark:text-gray-200">
                    {col.cell ? col.cell(row) : (row[col.accessorKey as keyof T] as unknown as React.ReactNode)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Footer */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-gray-100 dark:border-midnight-700/80 bg-gray-50/50 dark:bg-midnight-900/50 text-xs text-gray-500 dark:text-purple-300">
          <div>
            Showing <span className="font-semibold text-midnight-900 dark:text-white">{(currentPage - 1) * pageSize + 1}</span> to{' '}
            <span className="font-semibold text-midnight-900 dark:text-white">
              {Math.min(currentPage * pageSize, data.length)}
            </span>{' '}
            of <span className="font-semibold text-midnight-900 dark:text-white">{data.length}</span> results
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-1.5 rounded-lg border border-gray-200 dark:border-midnight-700 hover:border-lime disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="font-mono px-2">
              {currentPage} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-1.5 rounded-lg border border-gray-200 dark:border-midnight-700 hover:border-lime disabled:opacity-30 disabled:pointer-events-none transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
