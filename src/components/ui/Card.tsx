import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { AccentCornerTag } from './Badge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'standard' | 'elevated' | 'glass' | 'highlighted' | 'outline';
  glow?: 'none' | 'lime' | 'solar' | 'purple';
  hasAccentTag?: boolean;
}

export const Card: React.FC<CardProps> = ({
  className,
  variant = 'standard',
  glow = 'none',
  hasAccentTag = false,
  children,
  ...props
}) => {
  const base =
    'relative overflow-hidden rounded-2xl transition-all duration-300 border text-current';

  const variants = {
    standard:
      'bg-surface-light dark:bg-midnight-850 border-gray-200 dark:border-midnight-700/80 shadow-card-light dark:shadow-card-dark',
    elevated:
      'bg-white dark:bg-midnight-800 border-gray-100 dark:border-midnight-600 shadow-xl',
    glass:
      'bg-white/80 dark:bg-midnight-900/70 backdrop-blur-xl border-gray-200/50 dark:border-white/10 shadow-2xl',
    highlighted:
      'bg-gradient-to-b from-midnight-800 to-midnight-900 border-lime/40 shadow-lime-glow',
    outline:
      'bg-transparent border-gray-300 dark:border-midnight-700 hover:border-lime/50',
  };

  const glows = {
    none: '',
    lime: 'shadow-lime-glow hover:shadow-lime-glow-lg border-lime/50',
    solar: 'shadow-solar-glow border-solar/50',
    purple: 'shadow-purple-glow border-purple-500/40',
  };

  return (
    <div
      className={twMerge(clsx(base, variants[variant], glows[glow], className))}
      {...props}
    >
      {hasAccentTag && <AccentCornerTag color="lime" />}
      {children}
    </div>
  );
};

export const CardHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={twMerge('p-6 pb-3', className)} {...props}>
    {children}
  </div>
);

export const CardTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({
  className,
  children,
  ...props
}) => (
  <h3 className={twMerge('font-heading text-lg md:text-xl font-bold tracking-tight', className)} {...props}>
    {children}
  </h3>
);

export const CardDescription: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({
  className,
  children,
  ...props
}) => (
  <p className={twMerge('text-sm text-gray-500 dark:text-midnight-600 dark:text-purple-300/70 mt-1', className)} {...props}>
    {children}
  </p>
);

export const CardContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={twMerge('p-6 pt-3', className)} {...props}>
    {children}
  </div>
);

export const CardFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => (
  <div className={twMerge('p-6 pt-0 border-t border-gray-100 dark:border-midnight-700/60 mt-4 flex items-center justify-between', className)} {...props}>
    {children}
  </div>
);
