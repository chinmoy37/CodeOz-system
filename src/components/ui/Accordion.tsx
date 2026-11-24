import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
  tag?: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
}

export const Accordion: React.FC<AccordionProps> = ({ items, allowMultiple = false }) => {
  const [openIds, setOpenIds] = useState<string[]>([items[0]?.id || '']);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-xl border border-gray-200 dark:border-midnight-700/80 bg-white dark:bg-midnight-850 overflow-hidden transition-all duration-200"
          >
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-center justify-between p-4 text-left font-heading font-semibold text-sm md:text-base text-midnight-950 dark:text-white hover:text-lime transition-colors"
            >
              <div className="flex items-center gap-3">
                {item.tag && (
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-lime/10 text-lime border border-lime/30">
                    {item.tag}
                  </span>
                )}
                <span>{item.title}</span>
              </div>
              <ChevronDown
                className={clsx(
                  'w-4 h-4 text-gray-400 dark:text-purple-300 transition-transform duration-300',
                  isOpen && 'transform rotate-180 text-lime'
                )}
              />
            </button>
            {isOpen && (
              <div className="px-4 pb-4 pt-1 text-sm text-gray-600 dark:text-purple-200/80 leading-relaxed border-t border-gray-100 dark:border-midnight-800 animate-in fade-in duration-200">
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
