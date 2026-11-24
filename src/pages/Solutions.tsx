import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowRight } from 'lucide-react';
import { ALL_SYSTEMS, CATEGORIES } from '../data/systemsData';

export function Solutions() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSolutions = useMemo(() => {
    return ALL_SYSTEMS.filter((p) => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-xs font-bold text-[#FF5A00] uppercase">
          <span>PORTFOLIO & PLATFORMS</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-950">
          Purpose-built tools.<br />
          <span className="text-[#FF5A00]">Real business impact.</span>
        </h1>
        <p className="text-base text-slate-600 leading-relaxed">
          Click on any of our 11 specialized enterprise platforms below to view complete architectural specifications, problem statements, and key modules.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between pb-6 border-b border-slate-200">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#FF5A00] text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search systems..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-slate-200 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredSolutions.map((system) => (
          <div
            key={system.id}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
          >
            {system.image && (
              <div className="h-44 w-full overflow-hidden bg-slate-900 relative">
                <img
                  src={system.image}
                  alt={system.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>
            )}
            <div className={`p-6 bg-gradient-to-br ${system.mockupBg} border-b border-slate-100 flex items-center justify-between`}>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-900 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full border border-slate-200">
                <system.icon className="w-3.5 h-3.5 text-[#FF5A00]" />
                <span>{system.categoryLabel}</span>
              </div>
              <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200">
                {system.metrics}
              </span>
            </div>

            <div className="p-6 space-y-4 flex-1">
              <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#FF5A00] transition-colors">
                {system.title}
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                {system.shortDesc}
              </p>
            </div>

            <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                {system.techStack.slice(0, 2).map((t) => (
                  <span key={t} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600">
                    {t}
                  </span>
                ))}
              </div>
              <Link
                to={`/solutions/${system.id}`}
                className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#FF5A00] transition-colors"
              >
                <span>View Full Page</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Solutions;
