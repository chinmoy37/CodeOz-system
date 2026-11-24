import { useState, useEffect, useRef, useCallback } from 'react';
import { Maximize2, X, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

export interface DashboardItem {
  id: string;
  title: string;
  category: string;
  location: string;
  image: string;
  specs: string;
  description: string;
  tag: string;
}

// ── Filter tabs ─────────────────────────────────────────────────────────────
export const FILTER_TABS = [
  { key: 'all',        label: 'All' },
  { key: 'erp',        label: 'Manufacturing & ERP' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'retail',     label: 'Retail & POS' },
  { key: 'finance-hr', label: 'Finance & HR' },
  { key: 'education',  label: 'Education' },
  { key: 'logistics',  label: 'Logistics' },
];

export const DASHBOARD_ITEMS: DashboardItem[] = [
  { id: 'fleet',     title: 'Fleetbase Operations & Logistics Dashboard', category: 'LOGISTICS & FLEET',    location: 'ENTERPRISE',       image: '/dashboards/fleet.png',      specs: 'Live GPS · 59,306 Deliveries · 90.7% Fuel Efficiency',         description: 'Real-time vehicle map tracking, delivery route dispatch, driver performance KPIs, and multi-hub manifest reconciliation.',          tag: 'logistics'  },
  { id: 'approval',  title: 'Approval Management System',                 category: 'WORKFLOW & GOVERNANCE', location: 'CORPORATE',        image: '/dashboards/approval.png',   specs: 'Multi-tier RBAC · 4.2h Avg Approval · 110 Approved/Week',      description: 'Expense reports, leave authorizations, and multi-department approval queues with full audit history.',                              tag: 'finance-hr' },
  { id: 'hrm',       title: 'Human Resource Management Suite',            category: 'WORKFORCE & PAYROLL',   location: 'MULTI-BRANCH',     image: '/dashboards/hrm.png',        specs: 'Biometric Sync · One-Click Payroll · Self-Service Portal',      description: 'Attendance tracking, job pipelines, employee records, shift scheduling, and statutory tax reporting.',                             tag: 'finance-hr' },
  { id: 'project',   title: 'Project Management & Agile Dashboard',       category: 'AGILE & ENGINEERING',   location: 'OPERATIONS',       image: '/dashboards/project.png',    specs: '12 Active Projects · Milestone Burndown · Critical Path',       description: 'Active project overview, task boards, upcoming milestones, and team resource allocation charts.',                                  tag: 'erp'        },
  { id: 'mis',       title: 'Management Information System',              category: 'EXECUTIVE ANALYTICS',   location: 'GLOBAL',           image: '/dashboards/mis.png',        specs: '$19,821.3B Revenue · 14.75% Margin · 90% Efficiency',           description: 'Divisional performance, multi-year sales trends, resource utilization, and board-level reporting.',                                tag: 'healthcare' },
  { id: 'erp',       title: 'Enterprise Resource Planning Core',          category: 'ENTERPRISE SUITE',      location: 'HEADQUARTERS',     image: '/dashboards/erp.png',        specs: 'SFMIS · ARMS · PLMS · 13 Document Archives',                    description: 'Unified cockpit for financial vouchers, procurement, asset lifecycles, and case workflows.',                                       tag: 'erp'        },
  { id: 'restaurant',title: 'Restaurant POS & Kitchen Display',           category: 'HOSPITALITY & POS',     location: 'RESTAURANT CHAIN', image: '/dashboards/restaurant.png', specs: 'Table Occupancy · KDS Sync · 12m Kitchen Prep Time',            description: 'Interactive floor layout, real-time Kitchen Order Tickets, waiter tablets, and menu recipes.',                                    tag: 'retail'     },
  { id: 'crm',       title: 'Customer Lifecycle & CRM Pipeline',          category: 'SALES & MARKETING',     location: 'COMMERCIAL',       image: '/dashboards/crm.png',        specs: '$18.5k Contacts · 412 Opportunities · 91% Satisfaction',        description: 'Customer lifecycle funnel (Lead → Won), pipeline by team, product rankings, and activity feed.',                                  tag: 'retail'     },
  { id: 'lms',       title: 'Learning Management System Academy',         category: 'EDUCATION & EDTECH',    location: 'ACADEMY',          image: '/dashboards/lms.png',        specs: '110 Courses · 78% Completion · Student Leaderboard',            description: 'Course enrollment analytics, completion gauges, grade rankings, and assessment timelines.',                                        tag: 'education'  },
  { id: 'inventory', title: 'Product & Inventory Management',             category: 'SUPPLY CHAIN & RETAIL', location: 'WAREHOUSE',        image: '/dashboards/inventory.png',  specs: 'Recipe Builder · Stock Transactions · Unit Pricing',             description: 'Item categorization, unit conversion, stock movement logs, and purchase requisitions.',                                            tag: 'retail'     },
];

// ── Ring constants ──────────────────────────────────────────────────────────
const RING_COUNT  = 40;
const RING_TILT   = 73;
const RING_RADIUS = 430;
const AUTO_SPEED  = 0.03;
const MOUSE_SPEED = 0.18;

// ── Component ───────────────────────────────────────────────────────────────
export const AuroraGallery: React.FC<{
  items?: DashboardItem[];
  subtitle?: string;
}> = ({
  items = DASHBOARD_ITEMS,
  subtitle = 'Explore our production-grade dashboards, ERP platforms, and cloud systems engineered for high-growth businesses.',
}) => {
  const [hoveredItem,    setHoveredItem]    = useState<DashboardItem | null>(null);
  const [hoveredRingIdx, setHoveredRingIdx] = useState<number | null>(null);
  const [modalItem,      setModalItem]      = useState<DashboardItem | null>(null);
  const [activeTab,      setActiveTab]      = useState('all');

  // ✅ FIX #6: Mobile carousel state
  const [mobileIdx, setMobileIdx] = useState(0);

  const ringRef    = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const rotAngle   = useRef(0);
  const rafRef     = useRef<number>(0);
  const onSection  = useRef(false);
  const mouseVel   = useRef(0);

  // ── RAF animation loop ───────────────────────────────────────────────────
  useEffect(() => {
    const animate = () => {
      rotAngle.current += onSection.current ? mouseVel.current : AUTO_SPEED;
      if (ringRef.current) {
        ringRef.current.style.transform =
          `rotateX(${RING_TILT}deg) rotateZ(${rotAngle.current}deg)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  // ── Mouse move → rotation velocity ──────────────────────────────────────
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouseVel.current = nx * MOUSE_SPEED;
  }, []);

  // ✅ FIX #7: ESC closes modal (already existed) + body scroll lock
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setModalItem(null); };
    window.addEventListener('keydown', onKey);
    if (modalItem) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [modalItem]);

  const activeItem = hoveredItem;

  const filteredItems = activeTab === 'all'
    ? items
    : items.filter(it => it.tag === activeTab);

  // ✅ FIX #6: Mobile prev/next handlers
  const mobilePrev = () => setMobileIdx(i => (i - 1 + filteredItems.length) % filteredItems.length);
  const mobileNext = () => setMobileIdx(i => (i + 1) % filteredItems.length);

  // Reset mobile index when tab changes
  useEffect(() => { setMobileIdx(0); }, [activeTab]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-10 overflow-hidden select-none bg-gradient-to-b from-white via-gray-50 to-white"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => { onSection.current = true; }}
      onMouseLeave={() => { onSection.current = false; mouseVel.current = 0; setHoveredRingIdx(null); }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25"
        style={{ width: 700, height: 320, background: 'radial-gradient(ellipse,#FF5A0040 0%,transparent 70%)', filter: 'blur(60px)' }}
      />

      {/* ── Header ───────────────────────────────────────────────────────── */}
      <div className="relative z-10 text-center mb-5 px-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 text-[#FF5A00] text-xs font-bold uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          3D INTERACTIVE SHOWCASE
        </div>
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-slate-950 tracking-tighter leading-none">
          CodeOz <span className="text-[#FF5A00]">Did It</span>
        </h2>
        <p className="mt-3 text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">{subtitle}</p>
      </div>

      {/* ── Filter Tabs ──────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-wrap justify-center gap-2 px-4 mb-2">
        {FILTER_TABS.map(tab => (
          <button
            key={tab.key}
            onClick={() => { setActiveTab(tab.key); setHoveredItem(null); setHoveredRingIdx(null); }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200 ${
              activeTab === tab.key
                ? 'bg-[#FF5A00] border-[#FF5A00] text-white shadow-md shadow-orange-200'
                : 'bg-white border-slate-200 text-slate-600 hover:border-[#FF5A00] hover:text-[#FF5A00]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ✅ FIX #6: Mobile carousel — shown only on small screens */}
      <div className="md:hidden relative z-10 px-4 py-6">
        {filteredItems.length > 0 && (
          <div className="relative">
            <div
              className="rounded-2xl overflow-hidden border-2 border-[#FF5A00] shadow-xl cursor-pointer"
              style={{ aspectRatio: '16/10', background: '#0B0F19' }}
              onClick={() => setModalItem(filteredItems[mobileIdx])}
            >
              <img
                src={filteredItems[mobileIdx].image}
                alt={filteredItems[mobileIdx].title}
                loading="lazy"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                <div>
                  <div className="text-[10px] font-mono text-[#FF5A00] font-bold uppercase mb-1">
                    {filteredItems[mobileIdx].category}
                  </div>
                  <div className="text-white font-bold text-sm leading-snug">
                    {filteredItems[mobileIdx].title}
                  </div>
                  <div className="text-slate-300 text-[11px] mt-1 font-mono">
                    {filteredItems[mobileIdx].specs}
                  </div>
                </div>
              </div>
            </div>

            {/* Prev / Next buttons */}
            <button
              onClick={mobilePrev}
              aria-label="Previous dashboard"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#FF5A00] transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={mobileNext}
              aria-label="Next dashboard"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-[#FF5A00] transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="flex justify-center gap-1.5 mt-3">
              {filteredItems.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setMobileIdx(idx)}
                  aria-label={`Go to dashboard ${idx + 1}`}
                  className={`w-1.5 h-1.5 rounded-full transition-all ${
                    idx === mobileIdx ? 'bg-[#FF5A00] w-4' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ── 3D Stage — desktop only ──────────────────────────────────────── */}
      <div
        className="hidden md:flex relative items-center justify-center"
        style={{ height: 580, perspective: 1300 }}
      >
        {/* Ring plane */}
        <div
          ref={ringRef}
          style={{
            position: 'absolute',
            inset: 0,
            transformStyle: 'preserve-3d',
            transform: `rotateX(${RING_TILT}deg) rotateZ(0deg)`,
          }}
        >
          {Array.from({ length: RING_COUNT }, (_, i) => {
            const item     = filteredItems[i % filteredItems.length];
            const angleDeg = (i / RING_COUNT) * 360;
            const isHov    = hoveredRingIdx === i;
            const liftY    = isHov ? -28 : 0;
            const scale    = isHov ? 1.4 : 1;

            return (
              <div
                key={i}
                role="button"
                aria-label={`View ${item.title}`}
                tabIndex={0}
                onMouseEnter={() => { setHoveredRingIdx(i); setHoveredItem(item); }}
                onMouseLeave={() => { setHoveredRingIdx(null); setHoveredItem(null); }}
                onClick={() => setModalItem(item)}
                onKeyDown={(e) => { if (e.key === 'Enter') setModalItem(item); }}
                style={{
                  position:        'absolute',
                  top:             '50%',
                  left:            '50%',
                  width:           54,
                  height:          76,
                  marginLeft:      -27,
                  marginTop:       -38,
                  backgroundImage: `url(${item.image})`,
                  backgroundSize:  'cover',
                  backgroundPosition: 'center',
                  borderRadius:    7,
                  cursor:          'pointer',
                  border:          isHov ? '2.5px solid #FF5A00' : '1.5px solid rgba(200,200,200,0.5)',
                  boxShadow:       isHov ? '0 16px 40px rgba(255,90,0,0.55)' : '0 2px 8px rgba(0,0,0,0.18)',
                  opacity:         isHov ? 1 : 0.70,
                  transform: [
                    `rotateZ(${angleDeg}deg)`,
                    `translateX(${RING_RADIUS}px)`,
                    `rotateZ(-${angleDeg}deg)`,
                    `rotateX(-${RING_TILT}deg)`,
                    `translateY(${liftY}px)`,
                    `scale(${scale})`,
                  ].join(' '),
                  transition: 'transform 0.22s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.2s ease, border-color 0.2s ease, opacity 0.2s ease',
                  zIndex: isHov ? 40 : 1,
                }}
              />
            );
          })}
        </div>

        {/* Center: hovered card details */}
        <div className="relative z-20 flex gap-5 items-center">
          {activeItem ? (
            <>
              <div
                key={activeItem.id}
                className="group relative overflow-hidden rounded-2xl shadow-2xl border-2 border-[#FF5A00] cursor-pointer animate-fadeIn"
                style={{ width: 300, aspectRatio: '16/10', background: '#0B0F19' }}
                onClick={() => setModalItem(activeItem)}
              >
                <div className="absolute top-0 left-0 w-3 h-3 bg-[#FF5A00] z-10" />
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/80 text-white text-xs font-bold uppercase tracking-widest border border-[#FF5A00]">
                    <Maximize2 className="w-3.5 h-3.5 text-[#FF5A00]" />
                    FULL VIEW
                  </span>
                </div>
              </div>

              <div key={activeItem.id + '-detail'} className="hidden md:flex flex-col gap-2.5 max-w-[210px] animate-fadeIn">
                <div className="text-[10px] font-mono font-bold tracking-widest text-[#FF5A00] uppercase">
                  {activeItem.category} · {activeItem.location}
                </div>
                <h3 className="font-extrabold text-slate-900 text-sm leading-snug">{activeItem.title}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{activeItem.description}</p>
                <div className="text-[10px] font-mono text-slate-400 leading-relaxed border-l-2 border-[#FF5A00] pl-2">
                  {activeItem.specs}
                </div>
                <button
                  onClick={() => setModalItem(activeItem)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF5A00] hover:gap-3 transition-all uppercase tracking-widest mt-1"
                >
                  Full View <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </>
          ) : null}
        </div>
      </div>

      {/* ── Fullscreen modal ─────────────────────────────────────────────── */}
      {modalItem && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={modalItem.title}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
          onClick={() => setModalItem(null)}
        >
          <div
            className="relative max-w-5xl w-full bg-[#0B0F19] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 flex flex-col max-h-[92vh]"
            onClick={e => e.stopPropagation()}
          >
            <div className="absolute top-0 left-0 w-3 h-3 bg-[#FF5A00] z-20" />
            <button
              onClick={() => setModalItem(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 z-30 p-2.5 rounded-full bg-black/70 text-white hover:text-[#FF5A00] border border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-full flex-1 bg-black flex items-center justify-center overflow-auto p-2">
              <img
                src={modalItem.image}
                alt={modalItem.title}
                loading="lazy"
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
              />
            </div>
            <div className="bg-[#0B0F19] text-white px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-3 border-t border-slate-800">
              <div>
                <div className="font-bold text-white text-sm">{modalItem.title}</div>
                <div className="text-slate-400 text-[11px] font-mono mt-0.5">{modalItem.description}</div>
              </div>
              <div className="text-[#FF5A00] font-bold text-xs shrink-0 bg-orange-950/60 border border-[#FF5A00]/40 px-3 py-1.5 rounded-lg font-mono">
                {modalItem.specs}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
