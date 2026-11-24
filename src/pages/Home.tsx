import { Link } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { AuroraGallery } from '../components/ui/AuroraGallery';
import { CodeOzLogo } from '../components/ui/CodeOzLogo';
import { ALL_SYSTEMS } from '../data/systemsData';

export function Home() {
  return (
    <div>
      {/* 🌟 1ST SECTION: "One partner for the whole journey — idea to infinity." */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Column: Heading & Copy */}
            <div className="lg:col-span-7 space-y-6">
              {/* Orange Accent Bar */}
              <div className="w-16 h-1.5 bg-[#FF5A00] rounded-full" />

              {/* Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 font-heading leading-[1.08] tracking-tight">
                One partner for the<br />
                whole journey —<br />
                <span className="text-[#FF5A00]">idea to infinity.</span>
              </h1>

              {/* Subtext */}
              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                CodeOz combines strategy, design, engineering, and technology to transform ambitious ideas into scalable digital solutions.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/contact"
                  className="px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0B0F19] hover:bg-[#FF5A00] transition-all shadow-md flex items-center gap-2 group"
                >
                  <span>Start Your Journey</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/solutions"
                  className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                >
                  Explore Platforms
                </Link>
              </div>
            </div>

            {/* Right Column: Infinity Journey Diagram & Code Snippet */}
            <div className="lg:col-span-5 relative space-y-8">
              {/* Interactive Infinity Loop Stage */}
              <div className="relative w-full max-w-lg mx-auto py-8 flex items-center justify-center">
                {/* SVG Infinity Curve Track */}
                <svg className="w-full h-44 overflow-visible" viewBox="0 0 460 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M115 25C50 25 20 60 20 90C20 120 50 155 115 155C185 155 210 110 230 90C250 70 275 25 345 25C410 25 440 60 440 90C440 120 410 155 345 155C275 155 250 110 230 90C210 70 185 25 115 25Z"
                    stroke="#E2E8F0"
                    strokeWidth="2"
                  />
                  <path
                    d="M115 25C50 25 20 60 20 90C20 120 50 155 115 155C185 155 210 110 230 90C250 70 275 25 345 25C410 25 440 60 440 90C440 120 410 155 345 155C275 155 250 110 230 90C210 70 185 25 115 25Z"
                    stroke="#FF5A00"
                    strokeWidth="2"
                    strokeDasharray="6 8"
                    className="opacity-60"
                  />
                </svg>

                {/* 1. Node: Idea */}
                <div className="absolute left-[3%] top-[45%] -translate-y-1/2 flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                  <span className="w-2 h-2 rounded-full border-2 border-slate-300 bg-white" />
                  <span>Idea</span>
                </div>

                {/* 2. Node: Strategy */}
                <div className="absolute left-[24%] top-[10%] flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                  <span className="w-2 h-2 rounded-full border-2 border-slate-300 bg-white" />
                  <span>Strategy</span>
                </div>

                {/* 3. Node: Design (Center Cross) */}
                <div className="absolute left-[50%] top-[42%] -translate-x-1/2 -translate-y-1/2 flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-800 shadow-sm z-10">
                  <span className="w-2 h-2 rounded-full border-2 border-[#FF5A00] bg-white" />
                  <span>Design</span>
                </div>

                {/* 4. Node: Engineering */}
                <div className="absolute right-[22%] bottom-[8%] flex items-center gap-1.5 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-800 shadow-sm">
                  <span className="w-2 h-2 rounded-full border-2 border-slate-300 bg-white" />
                  <span>Engineering</span>
                </div>

                {/* 5. Node: Scale (Highlighted Dark with Orange Dot) */}
                <div className="absolute right-[3%] top-[45%] -translate-y-1/2 flex items-center gap-2 px-3 py-1 bg-[#0B0F19] text-white rounded-full text-xs font-semibold shadow-md border border-slate-800">
                  <span>Scale</span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A00] animate-ping" />
                </div>
              </div>

              {/* Floating Code Snippet Card */}
              <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xl max-w-md ml-auto space-y-1.5 font-mono text-xs">
                <div className="text-slate-400">// infinite possibilities, written in code</div>
                <div className="text-slate-800 font-medium">
                  <span className="text-[#FF5A00] font-semibold">const</span> product = <span className="text-blue-600 font-semibold">build</span>(idea)<br />
                  &nbsp;&nbsp;.<span className="text-slate-700">design</span>().<span className="text-slate-700">engineer</span>().<span className="text-slate-700">scale</span>(<span className="text-[#FF5A00] font-bold">Infinity</span>);
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom 4 Capabilities Ribbon */}
        <div className="bg-[#0B0F19] text-white py-6 border-t border-slate-800 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
              
              <Link to="/services" className="pt-2 md:pt-0 text-left hover:text-[#FF5A00] transition-colors focus:outline-none">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mb-1.5" />
                <div className="text-sm font-bold text-white mt-0.5">Custom .NET Development</div>
              </Link>

              <Link to="/services" className="pt-2 md:pt-0 md:pl-6 text-left hover:text-[#FF5A00] transition-colors focus:outline-none">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mb-1.5" />
                <div className="text-sm font-bold text-white mt-0.5">Business Applications</div>
              </Link>

              <Link to="/services" className="pt-2 md:pt-0 md:pl-6 text-left hover:text-[#FF5A00] transition-colors focus:outline-none">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mb-1.5" />
                <div className="text-sm font-bold text-white mt-0.5">API Integration</div>
              </Link>

              <Link to="/services" className="pt-2 md:pt-0 md:pl-6 text-left hover:text-[#FF5A00] transition-colors focus:outline-none">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mb-1.5" />
                <div className="text-sm font-bold text-white mt-0.5">Cloud & Modernization</div>
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* 🌟 3D CYLINDRICAL RING GALLERY */}
      <AuroraGallery />

      {/* SECOND SECTION: "Build bold. Ship better." */}
      <section className="relative overflow-hidden pt-16 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-orange-50/30 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200/80 text-xs font-semibold tracking-wide text-orange-950 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FF5A00] animate-pulse" />
                <span>MICROSOFT .NET & CLOUD-READY ARCHITECTURE</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-950 font-heading leading-[1.08]">
                Build <span className="text-[#FF5A00]">bold.</span><br />
                Ship better.
              </h2>

              <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                We engineer scalable web applications, mission-critical business platforms, and modern digital solutions utilizing the Microsoft .NET ecosystem and cloud-ready architectures.
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00]" />
                  <span>Enterprise SLA 99.9%</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00]" />
                  <span>Clean Architecture & DDD</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#FF5A00]" />
                  <span>Full IP Ownership</span>
                </div>
              </div>
            </div>

            {/* Right 3D Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative bg-[#0B0F19] border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-2xl text-white space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>SYSTEM HEALTHY · .NET 8 LTS</span>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-slate-900 to-[#121826] rounded-xl p-8 border border-slate-800/80 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="px-6 py-4 bg-slate-950/90 rounded-2xl border border-slate-700/80 shadow-2xl ring-1 ring-white/10 flex items-center justify-center">
                    <CodeOzLogo size="lg" light={true} />
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm font-semibold text-white font-mono">CodeOz.Engine.v8</div>
                    <div className="text-xs text-slate-400">High-concurrency enterprise backbone</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                  <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                    <div className="text-slate-400">Throughput</div>
                    <div className="text-base font-bold text-white mt-0.5">14,250 req/s</div>
                  </div>
                  <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800">
                    <div className="text-slate-400">API Latency</div>
                    <div className="text-base font-bold text-[#FF5A00] mt-0.5">12.4 ms</div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-1.5 pt-2">
                  {['C#', 'ASP.NET Core', 'SQL Server', 'Redis', 'Docker', 'Azure'].map(tech => (
                    <span key={tech} className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-[11px] font-mono text-slate-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* STATS RIBBON */}
      <section className="bg-[#0B0F19] text-white py-12 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800/80">
            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black font-heading text-[#FF5A00]">99.9%</div>
              <div className="mt-1 text-sm font-medium text-slate-400">SLA Uptime Guarantee</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black font-heading text-[#FF5A00]">50+</div>
              <div className="mt-1 text-sm font-medium text-slate-400">Enterprise Systems Built</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black font-heading text-[#FF5A00]">5+</div>
              <div className="mt-1 text-sm font-medium text-slate-400">Years Technical Track Record</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-4xl sm:text-5xl font-black font-heading text-[#FF5A00]">24/7</div>
              <div className="mt-1 text-sm font-medium text-slate-400">Mission-Critical Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-bold tracking-wider text-[#FF5A00] uppercase">SERVICES & CAPABILITIES</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading mt-2">
                Technology that <span className="text-[#FF5A00]">moves business.</span>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5A00] hover:text-[#FF701A] group"
            >
              <span>View In-Depth Services Page</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 space-y-4 shadow-sm hover:shadow-md transition-all">
              <span className="text-xs font-mono font-bold text-[#FF5A00] bg-orange-100 px-2.5 py-1 rounded border border-orange-200">
                CORE ARCHITECTURE
              </span>
              <h3 className="text-xl font-bold font-heading text-slate-900">Custom .NET Development</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                ASP.NET Core 8 Web APIs, microservices, and enterprise backends architected for high concurrency and zero memory leaks.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 space-y-4">
              <div className="w-2 h-2 rounded-full bg-[#FF5A00]" />
              <h3 className="text-xl font-bold font-heading text-slate-900">Business Applications</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Workflow-driven ERP and CRM platforms designed to optimize cross-department operations and eliminate manual human errors.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 space-y-4">
              <div className="w-2 h-2 rounded-full bg-[#FF5A00]" />
              <h3 className="text-xl font-bold font-heading text-slate-900">API & Integration</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-throughput secure bridges connecting payment gateways, identity providers (OAuth2), legacy SQL databases, and SaaS tools.
              </p>
            </div>
            <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 space-y-4">
              <div className="w-2 h-2 rounded-full bg-[#FF5A00]" />
              <h3 className="text-xl font-bold font-heading text-slate-900">Cloud & Modernization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Refactoring legacy .NET Framework monoliths to cloud-native .NET 8 containers with automated CI/CD and zero downtime.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PURPOSE-BUILT TOOLS PREVIEW */}
      <section className="py-24 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="text-xs font-bold tracking-wider text-[#FF5A00] uppercase">PURPOSE-BUILT TOOLS</div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading mt-2">
                Purpose-built tools. <span className="text-[#FF5A00]">Real business impact.</span>
              </h2>
            </div>
            <Link
              to="/solutions"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B0F19] text-white text-xs font-bold hover:bg-[#FF5A00] transition-colors"
            >
              <span>View All Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ALL_SYSTEMS.slice(0, 3).map((system) => (
              <div
                key={system.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all group overflow-hidden"
              >
                {system.image && (
                  <div className="-mx-6 -mt-6 h-36 overflow-hidden bg-slate-900 mb-2 relative">
                    <img
                      src={system.image}
                      alt={system.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
                  </div>
                )}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-[#FF5A00] bg-orange-50 px-2.5 py-1 rounded-full border border-orange-200">
                      {system.categoryLabel}
                    </span>
                    <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                      {system.metrics}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold font-heading text-slate-900 group-hover:text-[#FF5A00] transition-colors">
                    {system.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {system.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-slate-400">
                    {system.techStack[0]} · {system.techStack[1]}
                  </span>
                  <Link
                    to={`/solutions/${system.id}`}
                    className="text-xs font-bold text-slate-900 group-hover:text-[#FF5A00] flex items-center gap-1"
                  >
                    <span>Full Specs</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
