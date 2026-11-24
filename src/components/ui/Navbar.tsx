import React, { useState } from 'react';
import { Sun, Moon, Menu, X, Sparkles, Layers, Palette, Terminal, BookOpen } from 'lucide-react';
import { Button } from './Button';
import { Badge } from './Badge';

export interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
  activeSection: string;
  onNavigate: (section: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  onToggleTheme,
  activeSection,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'showcase', label: 'Aurora 3D Experience', icon: <Sparkles className="w-4 h-4 text-lime" /> },
    { id: 'tokens', label: 'Design Tokens', icon: <Palette className="w-4 h-4" /> },
    { id: 'components', label: 'Component Library', icon: <Layers className="w-4 h-4" /> },
    { id: 'playground', label: 'Interactive Lab', icon: <Terminal className="w-4 h-4 text-solar" /> },
    { id: 'docs', label: 'Documentation', icon: <BookOpen className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b backdrop-blur-xl transition-colors duration-200 border-gray-200/80 dark:border-midnight-700/80 bg-white/80 dark:bg-midnight-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Brand identity: CodeOZ + Aurora Design System */}
        <div
          onClick={() => onNavigate('showcase')}
          className="flex items-center gap-3 cursor-pointer group select-none py-2"
        >
          {/* Logo image or CodeOZ Brand Mark */}
          <div className="relative flex items-center">
            <img
              src="/assets/logo.png"
              alt="CodeOZ Logo"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs font-heading font-semibold tracking-widest text-lime uppercase">
              Design System
            </span>
            <span className="text-[10px] font-mono text-gray-500 dark:text-purple-300/60 uppercase">
              v1.0.0 · Production Ready
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                onClick={() => onNavigate(link.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-heading font-semibold tracking-wider uppercase transition-all duration-200 ${
                  isActive
                    ? 'bg-midnight-800 text-lime border border-lime/30 shadow-lime-glow'
                    : 'text-gray-600 dark:text-purple-200 hover:text-midnight-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-midnight-900'
                }`}
              >
                {link.icon}
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Bar */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Theme switcher */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Dark/Light Mode"
            className="p-2.5 rounded-xl border border-gray-200 dark:border-midnight-700 bg-gray-100 dark:bg-midnight-900 text-midnight-900 dark:text-lime hover:border-lime transition-all active:scale-95 shadow-sm"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4 text-lime" /> : <Moon className="w-4 h-4 text-purple-700" />}
          </button>

          <Button
            variant="primary"
            size="sm"
            onClick={() => onNavigate('playground')}
            className="hidden sm:inline-flex"
          >
            Launch Lab
          </Button>

          {/* Mobile hamburger toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2.5 rounded-xl border border-gray-200 dark:border-midnight-700 bg-gray-100 dark:bg-midnight-900 text-midnight-900 dark:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden px-4 pt-3 pb-6 border-t border-gray-200 dark:border-midnight-800 bg-white/95 dark:bg-midnight-950/95 backdrop-blur-xl">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => {
                  onNavigate(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-left text-sm font-heading font-medium tracking-wider uppercase ${
                  activeSection === link.id
                    ? 'bg-lime text-midnight-950 font-bold'
                    : 'text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-midnight-850'
                }`}
              >
                {link.icon}
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
