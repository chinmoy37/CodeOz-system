import React from 'react';
import { clsx } from 'clsx';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export interface TabsProps {
  tabs: TabItem[];
  activeTab: string;
  onChange: (id: string) => void;
  variant?: 'underline' | 'pills' | 'segmented';
  className?: string;
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  activeTab,
  onChange,
  variant = 'segmented',
  className,
}) => {
  if (variant === 'segmented') {
    return (
      <div className={clsx('inline-flex p-1 rounded-xl bg-gray-100 dark:bg-midnight-850 border border-gray-200 dark:border-midnight-700/80', className)}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          return (
            <button
              key={tab.id}
              onClick={() => onChange(tab.id)}
              className={clsx(
                'flex items-center gap-2 px-4 py-2 rounded-lg text-xs md:text-sm font-heading font-medium tracking-wide uppercase transition-all duration-200',
                isActive
                  ? 'bg-lime text-midnight-950 shadow-lime-glow font-semibold'
                  : 'text-gray-600 dark:text-purple-300 hover:text-midnight-950 dark:hover:text-white'
              )}
            >
              {tab.icon && <span className="w-4 h-4">{tab.icon}</span>}
              {tab.label}
              {tab.badge !== undefined && (
                <span
                  className={clsx(
                    'px-1.5 py-0.5 rounded-full text-[10px] font-mono',
                    isActive ? 'bg-midnight-950 text-lime' : 'bg-midnight-700 text-gray-300'
                  )}
                >
                  {tab.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>
    );
  }

  // Underline variant
  return (
    <div className={clsx('flex border-b border-gray-200 dark:border-midnight-700 gap-6', className)}>
      {tabs.map((tab) => {
        const isActive = tab.id === activeTab;
        return (
          <button
            key={tab.id}
            onClick={() => onChange(tab.id)}
            className={clsx(
              'flex items-center gap-2 pb-3 text-sm font-heading tracking-wider uppercase transition-colors relative',
              isActive
                ? 'text-lime font-semibold'
                : 'text-gray-500 dark:text-purple-300 hover:text-midnight-950 dark:hover:text-white'
            )}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
            {isActive && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime shadow-[0_0_8px_#CCFF00]" />
            )}
          </button>
        );
      })}
    </div>
  );
};
