import React from 'react';
import {
  Code2,
  Smartphone,
  Palette,
  Cloud,
  ShieldCheck,
  Compass,
  Zap
} from 'lucide-react';

export function Services() {
  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
      {/* PART 1: "What we do" */}
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-3 max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-wider text-[#FF5A00]">
              <span className="text-[#FF5A00] font-sans uppercase">What we do</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-heading text-slate-950 tracking-tight leading-[1.08]">
              Technology that <span className="text-[#FF5A00]">moves</span><br />
              business.
            </h1>
          </div>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            Six disciplines under one roof — so strategy, design, engineering, and operations move as one, with nothing lost between handoffs.
          </p>
        </div>

        {/* 6 Disciplines Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* 01: Software Development */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[260px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Code2 className="w-6 h-6 text-[#FF5A00]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">Software Development</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Custom web platforms, SaaS products, enterprise applications, and scalable business systems.
              </p>
            </div>
          </div>

          {/* 02: Mobile App Development */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[260px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Smartphone className="w-6 h-6 text-[#FF5A00]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">Mobile App Development</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Native and cross-platform mobile applications designed for seamless user experiences.
              </p>
            </div>
          </div>

          {/* 03: UI/UX Design */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[260px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Palette className="w-6 h-6 text-[#FF5A00]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">UI/UX Design</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Research-driven product design, intuitive interfaces, prototypes, design systems, and user-centered experiences.
              </p>
            </div>
          </div>

          {/* 04: Cloud & DevOps */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[260px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Cloud className="w-6 h-6 text-[#FF5A00]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">Cloud & DevOps</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cloud infrastructure, deployment automation, CI/CD pipelines, scalability, and operational reliability.
              </p>
            </div>
          </div>

          {/* 05: Cybersecurity */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[260px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <ShieldCheck className="w-6 h-6 text-[#FF5A00]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">Cybersecurity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Security-focused engineering, vulnerability assessment, secure architecture, and compliance readiness.
              </p>
            </div>
          </div>

          {/* 06: IT Consulting */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[260px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Compass className="w-6 h-6 text-[#FF5A00]" />
              </div>
              <h3 className="text-xl font-bold font-heading text-slate-900">IT Consulting</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Technology roadmaps, architecture consulting, digital transformation, and strategic technology planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PART 2: "Our expertise" */}
      <div className="space-y-12 pt-8 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div className="space-y-3 max-w-3xl">
            <div className="text-xs font-mono font-bold tracking-wider text-[#FF5A00]">
              <span className="text-[#FF5A00] font-sans uppercase">Our expertise</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black font-heading text-slate-950 tracking-tight leading-[1.08]">
              Core engineering <span className="text-[#FF5A00]">capabilities.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            Modern technology, chosen for longevity — built for what's next.
          </p>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 01: Custom .NET Development */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[250px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Code2 className="w-6 h-6 text-[#FF5A00]" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 leading-snug">Custom .NET Development</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Secure, high-performance .NET applications, APIs, and services engineered for enterprise workloads.
              </p>
            </div>
          </div>

          {/* 02: Business Applications */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[250px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-lg font-mono font-bold text-[#FF5A00]">&#123; &#125;</span>
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 leading-snug">Business Applications</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Line-of-business systems and internal tools that streamline everyday operations.
              </p>
            </div>
          </div>

          {/* 03: API Integration */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[250px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Zap className="w-6 h-6 text-[#FF5A00]" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 leading-snug">API Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Reliable integrations that connect your platforms, partners, and third-party services.
              </p>
            </div>
          </div>

          {/* 04: Cloud & Modernization */}
          <div className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[250px] relative group hover:border-[#FF5A00]/50 hover:shadow-md transition-all">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Cloud className="w-6 h-6 text-[#FF5A00]" />
              </div>
              <h3 className="text-lg font-bold font-heading text-slate-900 leading-snug">Cloud & Modernization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Moving legacy systems to modern, scalable cloud infrastructure without disrupting the business.
              </p>
            </div>
          </div>
        </div>

        {/* Technology Stack Categorized Table */}
        <div className="pt-6 space-y-6">
          <div className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
            Technology stack
          </div>

          <div className="border-t border-slate-200 divide-y divide-slate-100 text-xs">
            {/* Row 1: Frontend */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="w-48 font-bold text-slate-900 font-heading">Frontend</div>
              <div className="flex flex-wrap items-center gap-2">
                {['React', 'TypeScript', 'Next.js', 'Vue'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 2: Backend */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="w-48 font-bold text-slate-900 font-heading">Backend</div>
              <div className="flex flex-wrap items-center gap-2">
                {['Node.js', 'Python', '.NET', 'Go', 'PostgreSQL'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 3: Cloud & Infrastructure */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="w-48 font-bold text-slate-900 font-heading">Cloud & Infrastructure</div>
              <div className="flex flex-wrap items-center gap-2">
                {['AWS', 'Azure', 'Docker', 'Kubernetes'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 4: AI & Data */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="w-48 font-bold text-slate-900 font-heading">AI & Data</div>
              <div className="flex flex-wrap items-center gap-2">
                {['AI/ML', 'TensorFlow', 'PyTorch', 'OpenAI'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Row 5: Mobile */}
            <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="w-48 font-bold text-slate-900 font-heading">Mobile</div>
              <div className="flex flex-wrap items-center gap-2">
                {['Flutter', 'Swift', 'Kotlin'].map(t => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-50 border border-slate-200/80 font-mono text-[11px] text-slate-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
