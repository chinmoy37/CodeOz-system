import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { CodeOzLogo } from '../ui/CodeOzLogo';

export function Footer() {
  return (
    <footer className="bg-[#FF5A00] text-white pt-16 pb-12 border-t border-orange-600 shadow-2xl relative overflow-hidden">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-block focus:outline-none">
              <div className="inline-flex items-center bg-white px-4 py-2.5 rounded-2xl shadow-md border border-white/40">
                <CodeOzLogo size="md" />
              </div>
            </Link>
            <p className="text-xs text-orange-100 max-w-sm leading-relaxed font-normal">
              CodeOz is an enterprise software engineering company that specializes in designing and developing scalable web applications, business platforms, and digital solutions utilizing the Microsoft .NET ecosystem.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F19] border border-black/40 text-[11px] font-mono text-emerald-400 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All Systems Operational · SLA 99.9%</span>
            </div>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-white border-b border-orange-400/60 pb-1 inline-block">
              Pages & Navigation
            </div>
            <ul className="space-y-2 text-xs text-orange-100 font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="hover:text-white transition-colors">Services & Capabilities</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">All Solutions</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact & Consultation</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-white border-b border-orange-400/60 pb-1 inline-block">
              Core Technologies
            </div>
            <ul className="space-y-2 text-xs text-orange-100 font-mono">
              <li>ASP.NET Core 8 / C#</li>
              <li>Microsoft SQL Server</li>
              <li>Entity Framework Core</li>
              <li>Docker & Cloud Containers</li>
              <li>SignalR Real-time Web</li>
              <li>REST & GraphQL APIs</li>
            </ul>
          </div>

          <div className="space-y-3">
            <div className="text-xs font-black uppercase tracking-wider text-white border-b border-orange-400/60 pb-1 inline-block">
              Contact & Support
            </div>
            <ul className="space-y-2.5 text-xs text-orange-100 font-medium">
              <li className="flex items-center gap-2">
                <span className="p-1.5 bg-white/20 rounded-lg text-white"><Mail className="w-3.5 h-3.5" /></span>
                <span>contact@codeoz.org</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="p-1.5 bg-white/20 rounded-lg text-white"><Phone className="w-3.5 h-3.5" /></span>
                <span>+880 1700-000000</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="p-1.5 bg-white/20 rounded-lg text-white"><MapPin className="w-3.5 h-3.5" /></span>
                <span>Dhaka, Bangladesh</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-orange-400/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-orange-100">
          <div>© {new Date().getFullYear()} CodeOz. All rights reserved.</div>
          <div className="flex items-center gap-6 text-orange-200">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#security" className="hover:text-white transition-colors">Security Architecture</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
