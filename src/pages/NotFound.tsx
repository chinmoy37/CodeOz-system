import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Home, Compass } from 'lucide-react';

export function NotFound() {
  return (
    <div className="py-24 max-w-3xl mx-auto px-4 text-center space-y-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5A00] font-mono text-xs font-bold uppercase">
        <span>ERROR 404</span>
      </div>
      <h1 className="text-4xl sm:text-6xl font-black font-heading text-slate-950">
        Page Not Found
      </h1>
      <p className="text-slate-600 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
        The route you are navigating to does not exist or has been shifted within our system architecture.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B0F19] text-white text-xs font-bold hover:bg-[#FF5A00] transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-100 text-slate-800 text-xs font-bold hover:bg-slate-200 transition-colors"
        >
          <Compass className="w-4 h-4" />
          <span>Browse All Solutions</span>
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
