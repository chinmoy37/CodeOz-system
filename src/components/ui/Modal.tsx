import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { clsx } from 'clsx';
import { AccentCornerTag } from './Badge';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  description?: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  hasAccentTag?: boolean;
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
  footer,
  size = 'md',
  hasAccentTag = true,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog Surface */}
      <div
        className={clsx(
          'relative w-full rounded-2xl overflow-hidden z-10 transition-all transform shadow-2xl',
          'bg-white dark:bg-midnight-900 border border-gray-200 dark:border-midnight-700/80',
          sizeClasses[size]
        )}
      >
        {hasAccentTag && <AccentCornerTag color="lime" />}

        {/* Header */}
        <div className="flex items-start justify-between p-6 pb-4 border-b border-gray-100 dark:border-midnight-800">
          <div>
            {title && (
              <h3 className="text-xl font-bold font-heading text-midnight-950 dark:text-white">
                {title}
              </h3>
            )}
            {description && (
              <p className="text-sm text-gray-500 dark:text-purple-300/70 mt-1">
                {description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-gray-400 hover:text-midnight-900 dark:hover:text-lime hover:bg-gray-100 dark:hover:bg-midnight-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">{children}</div>

        {/* Footer */}
        {footer && (
          <div className="flex items-center justify-end gap-3 p-6 pt-4 border-t border-gray-100 dark:border-midnight-800 bg-gray-50/50 dark:bg-midnight-950/40">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
