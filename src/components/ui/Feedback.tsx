import React, { useState } from 'react';
import { clsx } from 'clsx';
import { Layers } from 'lucide-react';
import { Button } from './Button';

// --- Tooltip ---
export interface TooltipProps {
  content: string;
  children: React.ReactElement;
  position?: 'top' | 'bottom' | 'left' | 'right';
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  position = 'top',
}) => {
  const [visible, setVisible] = useState(false);

  const positions = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={clsx(
            'absolute z-50 px-2.5 py-1 text-xs font-heading font-medium tracking-wide text-midnight-950 bg-lime rounded-md shadow-lime-glow whitespace-nowrap pointer-events-none transition-all',
            positions[position]
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
};

// --- Skeleton Loader ---
export interface SkeletonProps {
  className?: string;
  variant?: 'text' | 'circular' | 'rectangular';
}

export const Skeleton: React.FC<SkeletonProps> = ({
  className,
  variant = 'rectangular',
}) => {
  const base = 'animate-pulse bg-gray-200 dark:bg-midnight-700/60';
  const variants = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-xl',
  };

  return <div className={clsx(base, variants[variant], className)} />;
};

// --- Empty State ---
export interface EmptyStateProps {
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  icon?: React.ReactNode;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionLabel,
  onAction,
  icon = <Layers className="w-12 h-12 text-gray-400 dark:text-purple-400/40" />,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 rounded-2xl border border-dashed border-gray-300 dark:border-midnight-700/80 bg-gray-50/50 dark:bg-midnight-900/30">
      <div className="mb-4">{icon}</div>
      <h4 className="text-lg font-bold font-heading text-midnight-950 dark:text-white mb-1">
        {title}
      </h4>
      <p className="text-sm text-gray-500 dark:text-purple-300/60 max-w-sm mb-6">
        {description}
      </p>
      {actionLabel && (
        <Button variant="primary" size="sm" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
