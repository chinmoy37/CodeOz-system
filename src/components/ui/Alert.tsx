import React from 'react';
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X } from 'lucide-react';
import { clsx } from 'clsx';

export interface AlertProps {
  variant?: 'info' | 'success' | 'warning' | 'error' | 'lime';
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  title,
  children,
  onClose,
  className,
}) => {
  const icons = {
    info: <Info className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />,
    success: <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />,
    warning: <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />,
    error: <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />,
    lime: <CheckCircle2 className="w-5 h-5 text-lime shrink-0 mt-0.5" />,
  };

  const variants = {
    info: 'bg-blue-500/10 border-blue-500/30 text-blue-200',
    success: 'bg-green-500/10 border-green-500/30 text-green-200',
    warning: 'bg-amber-500/10 border-amber-500/30 text-amber-200',
    error: 'bg-red-500/10 border-red-500/30 text-red-200',
    lime: 'bg-lime/10 border-lime/40 text-lime',
  };

  return (
    <div
      className={clsx(
        'relative flex items-start gap-3 p-4 rounded-xl border text-sm',
        variants[variant],
        className
      )}
    >
      {icons[variant]}
      <div className="flex-1">
        {title && <h5 className="font-heading font-semibold mb-1 text-inherit">{title}</h5>}
        <div className="text-inherit opacity-90 leading-relaxed">{children}</div>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="text-inherit opacity-60 hover:opacity-100 p-1"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};
