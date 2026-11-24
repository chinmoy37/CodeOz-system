

export interface CodeOzLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  light?: boolean;
  className?: string;
}

export function CodeOzLogo({ size = 'md', light = false, className = '' }: CodeOzLogoProps) {
  const h = size === 'sm' ? 'h-7' : size === 'lg' ? 'h-11' : size === 'xl' ? 'h-14' : 'h-8 md:h-9';
  const logoSrc = light ? '/assets/logo-white.png' : '/assets/logo.png';

  return (
    <div className={`flex items-center select-none ${h} ${className}`}>
      <img
        src={logoSrc}
        alt="CodeOz Logo"
        className={`${h} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
      />
    </div>
  );
}

export default CodeOzLogo;
