import React from 'react';
import { Loader2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'inverted' | 'ghost' | 'outline' | 'solar';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium font-heading transition-all duration-200 select-none focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none active:scale-[0.98] uppercase tracking-wider text-xs md:text-sm';

    const variants = {
      primary:
        'bg-lime text-midnight-950 hover:bg-lime-light active:bg-lime-dark shadow-lime-glow hover:shadow-lime-glow-lg font-semibold border border-lime',
      secondary:
        'bg-midnight-800 text-white hover:bg-midnight-700 active:bg-midnight-600 border border-midnight-700 hover:border-midnight-600 shadow-md',
      inverted:
        'bg-white text-midnight-950 hover:bg-gray-100 border border-transparent shadow-sm',
      ghost:
        'bg-transparent text-current hover:bg-white/10 dark:hover:bg-midnight-800/80 border border-transparent',
      outline:
        'bg-transparent border border-midnight-700 dark:border-midnight-600 text-current hover:border-lime hover:text-lime',
      solar:
        'bg-solar text-white hover:bg-solar-hover active:bg-solar shadow-solar-glow border border-solar font-semibold',
    };

    const sizes = {
      sm: 'h-8 px-3.5 rounded-lg text-xs gap-1.5',
      md: 'h-10 px-5 rounded-xl text-xs md:text-sm gap-2',
      lg: 'h-12 px-7 rounded-2xl text-sm md:text-base gap-2.5',
      icon: 'h-10 w-10 p-0 rounded-xl flex items-center justify-center',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={twMerge(
          clsx(
            baseStyles,
            variants[variant],
            sizes[size],
            isLoading && 'relative !cursor-wait text-transparent',
            className
          )
        )}
        {...props}
      >
        {isLoading && (
          <span className="absolute inset-0 flex items-center justify-center text-current">
            <Loader2 className="w-4 h-4 animate-spin text-inherit" />
          </span>
        )}
        {!isLoading && leftIcon && <span className="inline-flex shrink-0">{leftIcon}</span>}
        <span className={clsx(isLoading && 'invisible')}>{children}</span>
        {!isLoading && rightIcon && <span className="inline-flex shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = 'Button';
