import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'lime' | 'solar' | 'pink' | 'purple' | 'neutral' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  dot?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'lime',
  size = 'md',
  dot = false,
  children,
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center font-heading font-medium tracking-widest uppercase transition-colors';

  const variants = {
    lime: 'bg-lime/15 text-lime border border-lime/30',
    solar: 'bg-solar/15 text-solar border border-solar/30',
    pink: 'bg-pink-neon/15 text-pink-neon border border-pink-neon/30',
    purple: 'bg-midnight-800 text-purple-300 border border-midnight-600',
    neutral: 'bg-white/10 text-white/90 border border-white/20 dark:bg-midnight-800 dark:text-gray-300',
    outline: 'bg-transparent text-current border border-current/30',
  };

  const sizes = {
    sm: 'text-[10px] px-2 py-0.5 rounded-md gap-1',
    md: 'text-xs px-2.5 py-1 rounded-lg gap-1.5',
    lg: 'text-sm px-3.5 py-1.5 rounded-xl gap-2',
  };

  const dotColors = {
    lime: 'bg-lime shadow-[0_0_8px_#CCFF00]',
    solar: 'bg-solar shadow-[0_0_8px_#FF6A00]',
    pink: 'bg-pink-neon shadow-[0_0_8px_#FF007A]',
    purple: 'bg-purple-400',
    neutral: 'bg-gray-400',
    outline: 'bg-current',
  };

  return (
    <span className={twMerge(clsx(base, variants[variant], sizes[size], className))} {...props}>
      {dot && <span className={clsx('w-1.5 h-1.5 rounded-full shrink-0', dotColors[variant])} />}
      {children}
    </span>
  );
};

export const AccentCornerTag: React.FC<{ color?: 'lime' | 'solar' | 'pink' }> = ({
  color = 'lime',
}) => {
  const bg = {
    lime: 'bg-lime shadow-[0_0_10px_#CCFF00]',
    solar: 'bg-solar shadow-[0_0_10px_#FF6A00]',
    pink: 'bg-pink-neon shadow-[0_0_10px_#FF007A]',
  };
  return <div className={clsx('absolute top-0 left-0 w-2.5 h-2.5 z-20', bg[color])} />;
};
