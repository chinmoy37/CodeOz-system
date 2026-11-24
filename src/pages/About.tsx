import React from 'react';
import {
  Check,
  Compass,
  Hammer,
  Rocket,
  RefreshCw
} from 'lucide-react';

export function About() {
  return (
    <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
      {/* PART 1: "About CodeOz" - Software should feel simple. */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Visual Image with Floating Quote Pill */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] bg-slate-100">
            <img
              src="/about-workspace.png?v=2"
              alt="CodeOz Engineering & Product Design Studio"
              className="w-full h-full object-cover object-center"
            />
            {/* Floating Dark Card Badge */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#0B0F19]/95 backdrop-blur-md rounded-2xl p-5 border border-slate-800 text-white shadow-xl">
              <p className="text-sm font-bold font-heading leading-snug">
                We create technology that <span className="text-[#FF5A00]">removes friction</span> instead of adding to it.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Title, Narrative, Value Pillars, and Who We Work With */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-3">
            <div className="text-xs font-mono font-bold tracking-wider text-[#FF5A00]">
              <span className="text-[#FF5A00] font-sans uppercase">About CodeOz</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black font-heading text-slate-950 tracking-tight leading-[1.06]">
              Software should<br />
              feel <span className="text-[#FF5A00]">simple.</span>
            </h1>
          </div>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            CodeOz is a software engineering and digital technology company. We help organizations design, build, modernize, and scale the digital products and business systems they rely on — secure, reliable, high-performing solutions that simplify complexity and deliver measurable business value.
          </p>

          {/* 5 Core Pillars with Checkmarks */}
          <div className="pt-2 border-t border-slate-200/80">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 pt-6">
              {/* Item 1 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF5A00] stroke-[3]" />
                  <h4 className="text-sm font-bold text-slate-950 font-heading">Business-focused technology</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                  Every build starts from a business goal, not a feature list.
                </p>
              </div>

              {/* Item 2 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF5A00] stroke-[3]" />
                  <h4 className="text-sm font-bold text-slate-950 font-heading">Modern engineering</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                  Proven stacks, disciplined reviews, and automated delivery.
                </p>
              </div>

              {/* Item 3 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF5A00] stroke-[3]" />
                  <h4 className="text-sm font-bold text-slate-950 font-heading">Intuitive UX</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                  Products people understand on first use.
                </p>
              </div>

              {/* Item 4 */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF5A00] stroke-[3]" />
                  <h4 className="text-sm font-bold text-slate-950 font-heading">Scalable architecture</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6 leading-relaxed">
                  Foundations designed to grow with demand.
                </p>
              </div>

              {/* Item 5 */}
              <div className="space-y-1 sm:col-span-2">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF5A00] stroke-[3]" />
                  <h4 className="text-sm font-bold text-slate-950 font-heading">Long-term maintainability</h4>
                </div>
                <p className="text-xs text-slate-500 pl-6 leading-relaxed max-w-md">
                  Clean, documented code your team can own for years.
                </p>
              </div>
            </div>
          </div>

          {/* Who we work with */}
          <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
            <span className="text-xs font-mono font-medium text-slate-500 mr-2">Who we work with</span>
            {['Enterprises', 'Government', 'Startups', 'Partners'].map((partner) => (
              <span
                key={partner}
                className="px-4 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#FF5A00] hover:text-[#FF5A00] transition-colors"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* PART 2: OUR AGILE PROCESS */}
      <div className="space-y-10 pt-8 border-t border-slate-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-2">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono font-bold tracking-wider text-[#FF5A00] uppercase">
              OUR AGILE PROCESS
            </div>
            <h2 className="text-3xl sm:text-5xl font-black font-heading text-slate-950 tracking-tight leading-tight">
              Clean steps. <span className="text-[#FF5A00]">Less noise.</span>
            </h2>
          </div>
          <p className="text-sm text-slate-500 max-w-sm leading-relaxed">
            How we partner with you from technical discovery to production deployment and long-term evolution.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF5A00]/40 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5A00] flex items-center justify-center shadow-sm">
              <Compass className="w-5 h-5 text-[#FF5A00]" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">Discover</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Technical feasibility, domain modeling, architecture blueprinting, and milestone roadmap alignment.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF5A00]/40 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5A00] flex items-center justify-center shadow-sm">
              <Hammer className="w-5 h-5 text-[#FF5A00]" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">Build</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Two-week agile sprints with clean code reviews, automated CI unit testing, and demonstrable progress.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF5A00]/40 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5A00] flex items-center justify-center shadow-sm">
              <Rocket className="w-5 h-5 text-[#FF5A00]" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">Deploy</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Automated CI/CD zero-downtime container releases, security audits, and cloud infrastructure setup.
            </p>
          </div>

          <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF5A00]/40 transition-all space-y-4">
            <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5A00] flex items-center justify-center shadow-sm">
              <RefreshCw className="w-5 h-5 text-[#FF5A00]" />
            </div>
            <h3 className="text-xl font-bold font-heading text-slate-900">Evolve</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              24/7 telemetry monitoring, performance profiling, and 99.9% uptime SLA mission-critical support.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
