import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, X } from 'lucide-react';
import { ALL_SYSTEMS, getSystemById } from '../data/systemsData';

export function SolutionDetail() {
  const { id } = useParams<{ id: string }>();
  const system = id ? getSystemById(id) : undefined;

  // ✅ FIX #11: Proper 404 redirect if ID is invalid
  if (!system) {
    return <Navigate to="/not-found" replace />;
  }

  return (
    <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Top Breadcrumb & ID */}
      <div className="flex items-center justify-between">
        <Link
          to="/solutions"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#FF5A00] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to All Solutions</span>
        </Link>
        <div className="text-xs font-mono text-slate-400">
          SYSTEM ID: <span className="text-[#FF5A00] font-bold">{system.id}</span>
        </div>
      </div>

      {/* Screenshot Showcase */}
      {system.image && (
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
          <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-400" />
              <span className="text-xs font-mono text-slate-500 ml-2">codeoz://platform/{system.id}/preview</span>
            </div>
            <span className="text-[11px] font-mono text-[#FF5A00] font-bold">LIVE TELEMETRY ACTIVE</span>
          </div>
          <div className="w-full max-h-[460px] overflow-hidden bg-slate-50">
            {/* ✅ FIX #12: loading="lazy" */}
            <img
              src={system.image}
              alt={system.title}
              loading="lazy"
              className="w-full h-auto object-cover object-top"
            />
          </div>
        </div>
      )}

      {/* Hero Header */}
      <div className={`rounded-3xl p-8 sm:p-14 bg-gradient-to-br ${system.mockupBg} border border-slate-200 space-y-6 relative overflow-hidden`}>
        <div className="max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-bold text-[#FF5A00]">
            <system.icon className="w-4 h-4" />
            <span>{system.categoryLabel}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-950 leading-tight">
            {system.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed">{system.fullDesc}</p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <Link
              to={`/contact?solution=${encodeURIComponent(system.title)}`}
              className="px-7 py-3.5 bg-[#0B0F19] hover:bg-[#FF5A00] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2 group"
            >
              <span>Request Live Demo for this System</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <div className="px-4 py-3 bg-white/90 rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
              Proven Impact: <span className="text-emerald-600 font-bold">{system.metrics}</span>
            </div>
          </div>
        </div>
      </div>

      {/* KPI Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {system.kpiStats.map((kpi, kIdx) => (
          <div key={kIdx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
            <div className="text-3xl font-black font-heading text-[#FF5A00]">{kpi.value}</div>
            <div className="text-xs font-medium text-slate-600">{kpi.label}</div>
          </div>
        ))}
      </div>

      {/* Before / After */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-8 bg-red-50/50 rounded-2xl border border-red-200/80 space-y-3">
          <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
            <X className="w-4 h-4" />
            <span>The Legacy Bottlenecks</span>
          </div>
          <h3 className="text-xl font-bold font-heading text-slate-900">Before CodeOz Engineering</h3>
          <p className="text-sm text-slate-700 leading-relaxed">{system.businessProblem}</p>
        </div>
        <div className="p-8 bg-emerald-50/50 rounded-2xl border border-emerald-200/80 space-y-3">
          <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
            <Check className="w-4 h-4" />
            <span>The Engineered Solution</span>
          </div>
          <h3 className="text-xl font-bold font-heading text-slate-900">After CodeOz Deployment</h3>
          <p className="text-sm text-slate-700 leading-relaxed">{system.codeozSolution}</p>
        </div>
      </div>

      {/* Key Modules */}
      <div className="space-y-6">
        <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">Granular Operational Modules</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {system.keyModules.map((mod, mIdx) => (
            <div key={mIdx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                <span className="w-6 h-6 rounded-full bg-orange-100 text-[#FF5A00] flex items-center justify-center text-xs font-mono">
                  {mIdx + 1}
                </span>
                <span>{mod.name}</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pl-8">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ Related Solutions — navigate between systems */}
      <div className="border-t border-slate-200 pt-10 space-y-4">
        <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">Other Solutions</div>
        <div className="flex flex-wrap gap-3">
          {ALL_SYSTEMS.filter(s => s.id !== system.id).slice(0, 4).map(s => (
            <Link
              key={s.id}
              to={`/solutions/${s.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#FF5A00] hover:text-[#FF5A00] transition-colors bg-white"
            >
              <s.icon className="w-3.5 h-3.5" />
              {s.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SolutionDetail;
