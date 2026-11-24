import React, { useState } from 'react';
import { Eye, EyeOff, Search, AlertCircle, CheckCircle2 } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// --- Text / Generic Input ---
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  success?: string;
  hint?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, success, hint, leftIcon, rightIcon, id, type = 'text', ...props }, ref) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label htmlFor={inputId} className="text-xs font-heading font-medium tracking-wider uppercase text-gray-700 dark:text-purple-200">
            {label}
          </label>
        )}
        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-gray-400 dark:text-purple-400 pointer-events-none flex items-center justify-center">
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            type={type}
            className={twMerge(
              clsx(
                'w-full h-11 px-4 rounded-xl text-sm transition-all duration-200',
                'bg-white dark:bg-midnight-850',
                'text-midnight-950 dark:text-white placeholder:text-gray-400 dark:placeholder:text-purple-300/40',
                'border border-gray-300 dark:border-midnight-700',
                'focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 dark:focus:ring-lime/20',
                leftIcon && 'pl-10',
                rightIcon && 'pr-10',
                error && 'border-red-500 focus:border-red-500 focus:ring-red-500/20',
                success && 'border-green-500 focus:border-green-500 focus:ring-green-500/20',
                'disabled:opacity-50 disabled:bg-gray-100 dark:disabled:bg-midnight-900 disabled:cursor-not-allowed',
                className
              )
            )}
            {...props}
          />
          {rightIcon && (
            <div className="absolute right-3.5 text-gray-400 dark:text-purple-400 flex items-center justify-center">
              {rightIcon}
            </div>
          )}
        </div>
        {error && (
          <p className="flex items-center gap-1 text-xs text-red-500 mt-0.5">
            <AlertCircle className="w-3.5 h-3.5 shrink-0" />
            {error}
          </p>
        )}
        {success && (
          <p className="flex items-center gap-1 text-xs text-green-500 mt-0.5">
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            {success}
          </p>
        )}
        {hint && !error && !success && (
          <p className="text-xs text-gray-500 dark:text-purple-300/60 mt-0.5">{hint}</p>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

// --- Password Input with toggle ---
export const PasswordInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  const [show, setShow] = useState(false);
  return (
    <Input
      ref={ref}
      type={show ? 'text' : 'password'}
      rightIcon={
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="hover:text-lime focus:outline-none transition-colors"
          aria-label={show ? 'Hide password' : 'Show password'}
        >
          {show ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
      }
      {...props}
    />
  );
});
PasswordInput.displayName = 'PasswordInput';

// --- Search Input ---
export const SearchInput = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
  return (
    <Input
      ref={ref}
      type="search"
      leftIcon={<Search className="w-4 h-4" />}
      placeholder="Search assets, tokens, components..."
      {...props}
    />
  );
});
SearchInput.displayName = 'SearchInput';

// --- Textarea ---
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  hint?: string;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const areaId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);
    return (
      <div className="w-full flex flex-col gap-1.5 text-left">
        {label && (
          <label htmlFor={areaId} className="text-xs font-heading font-medium tracking-wider uppercase text-gray-700 dark:text-purple-200">
            {label}
          </label>
        )}
        <textarea
          id={areaId}
          ref={ref}
          className={twMerge(
            clsx(
              'w-full min-h-[100px] p-4 rounded-xl text-sm transition-all duration-200',
              'bg-white dark:bg-midnight-850',
              'text-midnight-950 dark:text-white placeholder:text-gray-400 dark:placeholder:text-purple-300/40',
              'border border-gray-300 dark:border-midnight-700',
              'focus:outline-none focus:border-lime focus:ring-2 focus:ring-lime/30 dark:focus:ring-lime/20',
              error && 'border-red-500 focus:border-red-500',
              className
            )
          )}
          {...props}
        />
        {error && <p className="text-xs text-red-500">{error}</p>}
        {hint && !error && <p className="text-xs text-gray-500 dark:text-purple-300/60">{hint}</p>}
      </div>
    );
  }
);
Textarea.displayName = 'Textarea';

// --- Switch / Toggle ---
export interface SwitchProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  description?: string;
  disabled?: boolean;
}

export const Switch: React.FC<SwitchProps> = ({ checked, onChange, label, description, disabled = false }) => {
  return (
    <label className={clsx('flex items-center gap-3 cursor-pointer select-none', disabled && 'opacity-50 cursor-not-allowed')}>
      <div
        onClick={() => !disabled && onChange(!checked)}
        className={clsx(
          'relative w-12 h-6 rounded-full transition-colors duration-300 ease-in-out',
          checked ? 'bg-lime shadow-[0_0_12px_#CCFF00]' : 'bg-gray-300 dark:bg-midnight-700'
        )}
      >
        <div
          className={clsx(
            'absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-midnight-950 transition-transform duration-300 ease-in-out',
            checked && 'translate-x-6 bg-midnight-950'
          )}
        />
      </div>
      {(label || description) && (
        <div className="flex flex-col text-left">
          {label && <span className="text-sm font-medium text-midnight-900 dark:text-white">{label}</span>}
          {description && <span className="text-xs text-gray-500 dark:text-purple-300/70">{description}</span>}
        </div>
      )}
    </label>
  );
};

// --- Checkbox ---
export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(({ label, className, ...props }, ref) => {
  return (
    <label className="inline-flex items-center gap-2.5 cursor-pointer select-none text-left">
      <input
        ref={ref}
        type="checkbox"
        className={twMerge(
          'w-4 h-4 rounded text-lime bg-white dark:bg-midnight-800 border-gray-300 dark:border-midnight-600 focus:ring-lime focus:ring-offset-midnight-950 accent-lime cursor-pointer',
          className
        )}
        {...props}
      />
      {label && <span className="text-sm text-gray-700 dark:text-gray-200">{label}</span>}
    </label>
  );
});
Checkbox.displayName = 'Checkbox';
