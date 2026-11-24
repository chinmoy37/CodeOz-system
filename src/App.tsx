import React, { useState } from 'react';
import { AuroraGallery } from './components/ui/AuroraGallery';
import {
  Smartphone,
  Palette,
  ShieldCheck,
  Code2,
  Server,
  Database,
  Cloud,
  Layers,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Shield,
  Zap,
  Cpu,
  Monitor,
  Activity,
  Phone,
  Mail,
  MapPin,
  Sparkles,
  Building2,
  Search,
  SlidersHorizontal,
  X,
  Check,
  Send,
  Menu,
  Terminal,
  Workflow,
  Clock,
  Users,
  Compass,
  Hammer,
  Rocket,
  RefreshCw,
  ShoppingBag,
  HeartPulse,
  DollarSign,
  GraduationCap,
  Truck,
  Pill,
  UtensilsCrossed,
  Landmark,
  Home,
  CheckSquare,
  FileCode2,
  Lock,
  Globe2,
  HelpCircle,
  BarChart3,
  Calendar,
  ChevronDown
} from 'lucide-react';

// --- DATA STRUCTURES ---

export interface SystemDetail {
  image?: string;
  id: string;
  title: string;
  category: 'erp' | 'healthcare' | 'retail' | 'finance' | 'education' | 'logistics';
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  businessProblem: string;
  codeozSolution: string;
  bullets: string[];
  keyModules: { name: string; desc: string }[];
  techStack: string[];
  metrics: string;
  icon: React.ElementType;
  mockupBg: string;
  kpiStats: { label: string; value: string }[];
}

export const ALL_SYSTEMS: SystemDetail[] = [
  
  {
    id: 'hospital-management',
    image: '/dashboards/approval.png',
    title: 'Hospital & Diagnostic Management System',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    shortDesc: 'Comprehensive healthcare operations covering OPD/IPD patient lifecycle, automated pathology, and billing.',
    fullDesc: 'An integrated clinical governance suite for modern hospital networks and diagnostic labs. Automates medical instrument bidirectional interfacing, digital prescription archives, ICU/bed reservations, and one-click billing with health insurance providers.',
    businessProblem: 'Long patient queues, handwritten prescriptions leading to pharmacy dispensing mistakes, and lost diagnostic records between departments.',
    codeozSolution: 'Developed an HL7-compliant clinical architecture with automated analyzer sync, integrated digital doctor desk, and patient portal for instant WhatsApp/SMS lab report delivery.',
    bullets: [
      'OPD & IPD patient tracking with visual bed allotment matrix',
      'Automated pathology lab test generation & bidirectional analyzer sync',
      'Integrated pharmacy dispensing & real-time counter billing',
      'Doctor appointment scheduling with automated SMS queue tokens'
    ],
    keyModules: [
      { name: 'Reception & Queue Management', desc: 'Fast OPD token issuing, doctor availability scheduler, and VIP triage priority.' },
      { name: 'Electronic Medical Record (EMR)', desc: 'Customizable specialty templates, digital prescriptions, and historical medical timeline.' },
      { name: 'Diagnostic Lab Automation (LIS)', desc: 'Interfaced directly with Siemens/Mindray analyzers to eliminate manual typing of lab results.' },
      { name: 'Indoor Patient (IPD) Governance', desc: 'Bed matrix, nursing station charts, doctor rounds notes, and itemized discharge billing.' }
    ],
    techStack: ['C# .NET 8', 'Web API', 'PostgreSQL', 'Redis', 'TailwindCSS', 'SignalR'],
    metrics: '-60% Patient Wait Time',
    icon: HeartPulse,
    mockupBg: 'from-emerald-600/20 to-teal-900/30',
    kpiStats: [
      { label: 'Average Wait Time', value: '-60%' },
      { label: 'Daily Lab Tests Handled', value: '5,000+' },
      { label: 'Billing Reconciliation', value: '100%' }
    ]
  },
  {
    id: 'pos-inventory',
    image: '/dashboards/inventory.png',
    title: 'Point of Sale (POS) & Smart Inventory',
    category: 'retail',
    categoryLabel: 'Retail & POS',
    shortDesc: 'High-speed multi-branch retail POS with barcode scanning, offline mode synchronization, and centralized stock.',
    fullDesc: 'Engineered for high-volume retail chains, supermarkets, and electronics distributors. Built with an offline-first architecture that keeps cashiers ringing up sales during internet outages, syncing transactions back to the cloud database the moment connection returns.',
    businessProblem: 'Internet downtime at retail branches paralyzed checkout counters, leading to abandoned shopping carts and severe end-of-day cash reconciliation errors.',
    codeozSolution: 'Engineered a resilient hybrid architecture combining local SQLite databases at each terminal with a high-speed .NET cloud sync broker using SignalR and message queues.',
    bullets: [
      'Multi-branch real-time stock sync with low-stock alerts',
      'Sub-second barcode checkout with thermal receipt printing',
      'Offline-first operational mode with automatic cloud sync',
      'Customer loyalty program, promotional discount rules & return logs'
    ],
    keyModules: [
      { name: 'Fast Checkout Terminal', desc: 'Keyboard-driven interface, barcode scanner support, multi-tender payment (Cash/Card/MFS).' },
      { name: 'Centralized Stock Distribution', desc: 'Inter-branch stock requisition, automated transfer notes, and damage/loss adjustments.' },
      { name: 'Dynamic Discount Engine', desc: 'Buy-1-Get-1, category discounts, member tier points, and happy-hour price overrides.' },
      { name: 'Cash Register Reconciliation', desc: 'Day-end cash drawer tally, cashier shift handover logs, and discrepancy alerts.' }
    ],
    techStack: ['.NET Core', 'WPF / React', 'SQL Server', 'SignalR', 'SQLite'],
    metrics: '99.99% Checkout Uptime',
    icon: ShoppingBag,
    mockupBg: 'from-amber-600/20 to-orange-900/30',
    kpiStats: [
      { label: 'Transaction Speed', value: '< 1.2s' },
      { label: 'Offline Availability', value: '100%' },
      { label: 'Stock Shrinkage', value: '-78%' }
    ]
  },
  {
    id: 'payroll-hrms',
    image: '/dashboards/hrm.png',
    title: 'Payroll & Human Resource Management (HRMS)',
    category: 'finance',
    categoryLabel: 'Finance & HR',
    shortDesc: 'Biometric device synchronization, automated monthly salary sheets, statutory tax deductions, and leave portals.',
    fullDesc: 'Comprehensive workforce management software that connects multi-location biometric attendance devices to calculate overtime, leave balances, provident funds, and statutory tax calculations in minutes instead of days.',
    businessProblem: 'HR teams spent over 10 days each month manually cross-referencing biometric punch logs against leave forms and spreadsheets, causing delayed salary payouts and employee dissatisfaction.',
    codeozSolution: 'Developed an automated Windows service that collects punch logs from devices across 20+ branches directly into a secure .NET payroll engine, generating bank salary files in one click.',
    bullets: [
      'Live biometric attendance machine integration & shift scheduling',
      'One-click monthly payroll generation with bank disbursement sheets',
      'Employee self-service portal for leave requests and payslips',
      'Automated income tax withholding and PF/Gratuity ledger management'
    ],
    keyModules: [
      { name: 'Employee Master Registry', desc: 'Digital employee profiles, emergency contacts, salary history, and document vaults.' },
      { name: 'Shift & Roster Automation', desc: 'Rotational shift planning, grace period tolerances, and overtime calculation rules.' },
      { name: 'One-Click Salary Engine', desc: 'Calculates gross, allowances, deductions, taxes, and bank salary advice letters.' },
      { name: 'Self-Service Mobile Portal', desc: 'Mobile-friendly portal for staff to view attendance, request leave, and download payslips.' }
    ],
    techStack: ['ASP.NET Core', 'C# .NET 8', 'SQL Server', 'REST APIs', 'TailwindCSS'],
    metrics: '95% Faster Payroll Cycles',
    icon: Users,
    mockupBg: 'from-purple-600/20 to-slate-900/30',
    kpiStats: [
      { label: 'Payroll Processing Time', value: '45 mins' },
      { label: 'Disbursement Accuracy', value: '100%' },
      { label: 'Paper Forms Eliminated', value: '100%' }
    ]
  },
  {
    id: 'financial-accounting',
    image: '/dashboards/erp.png',
    title: 'Core Financial Accounting System',
    category: 'finance',
    categoryLabel: 'Finance & HR',
    shortDesc: 'Double-entry enterprise ledger with multi-currency management, automated balance sheets, and audit trails.',
    fullDesc: 'Enterprise accounting software built to comply with international IFRS standards. Provides multi-company consolidation, automated bank reconciliation, real-time general ledgers, and tamper-evident audit trails.',
    businessProblem: 'Disjointed accounting ledgers in outdated desktop software made quarterly financial audits agonizing and increased the risk of undetected balance discrepancies.',
    codeozSolution: 'Engineered a strict double-entry ledger with immutability guarantees, automated foreign currency revaluations, and role-based voucher approvals.',
    bullets: [
      'Automated double-entry bookkeeping with ledger drilldowns',
      'Multi-currency exchange rate handling & month-end revaluation',
      'Immutable audit trails meeting enterprise tax compliance standards',
      'Real-time Profit & Loss, Trial Balance, and Cash Flow forecasting'
    ],
    keyModules: [
      { name: 'General Ledger & Chart of Accounts', desc: 'Multi-level customizable COA, journal entries, and automated debit/credit balancing.' },
      { name: 'Accounts Payable & Receivable', desc: 'Vendor bill management, ageing analysis, customer payment tracking, and credit terms.' },
      { name: 'Automated Bank Reconciliation', desc: 'Direct bank statement imports, auto-matching algorithms, and discrepancy resolution.' },
      { name: 'Executive Financial Reporting', desc: 'Real-time Balance Sheet, P&L, Cash Flow statement, and fiscal year closing wizards.' }
    ],
    techStack: ['.NET 8', 'Entity Framework Core', 'SQL Server', 'Blazor / React'],
    metrics: '100% Audit Compliance',
    icon: Landmark,
    mockupBg: 'from-cyan-600/20 to-blue-900/30',
    kpiStats: [
      { label: 'Reconciliation Time', value: '-80%' },
      { label: 'Audit Readiness', value: 'Instant' },
      { label: 'Currency Precision', value: '4 Decimals' }
    ]
  },
  {
    id: 'multivendor-ecommerce',
    image: '/dashboards/crm.png',
    title: 'Multi-Vendor E-Commerce Platform',
    category: 'retail',
    categoryLabel: 'Retail & POS',
    shortDesc: 'High-throughput online marketplace with merchant payout automation, coupon engines, and logistics tracking.',
    fullDesc: 'A scalable multi-merchant marketplace designed to endure heavy flash-sale traffic. Features dedicated vendor storefronts, dynamic sales commission tiers, digital payment gateway integrations, and rider parcel dispatch.',
    businessProblem: 'Slow page loads during discount campaigns crashed the legacy server, while calculating vendor commissions across thousands of weekly orders took days of manual bookkeeping.',
    codeozSolution: 'Architected an asynchronous .NET 8 Web API utilizing Redis caching, distributed SQL read-replicas, and automated merchant escrow payout calculations.',
    bullets: [
      'High-concurrency product catalog with faceted search',
      'Automated vendor commission calculations & payout reconciliation',
      'Integrated payment gateways (bKash, Nagad, Cards) & courier APIs',
      'Flash sale countdown engines and real-time stock reservations'
    ],
    keyModules: [
      { name: 'Customer Storefront & App', desc: 'Lightning-fast product search, responsive checkout, and real-time delivery tracking.' },
      { name: 'Merchant Portal', desc: 'Independent vendor product catalog, inventory management, and earnings statements.' },
      { name: 'Marketplace Admin Console', desc: 'Product approval workflows, commission management, and dispute mediation.' },
      { name: 'Integrated Payment & Logistics', desc: 'Seamless API bridges to bKash, Nagad, SSLCommerz, Pathao, and Steadfast.' }
    ],
    techStack: ['.NET 8 Web API', 'Next.js / React', 'Redis', 'PostgreSQL', 'Docker'],
    metrics: '10,000+ Concurrent Users',
    icon: ShoppingBag,
    mockupBg: 'from-rose-600/20 to-red-900/30',
    kpiStats: [
      { label: 'Concurrent Capacity', value: '10k+ users' },
      { label: 'Page Load Speed', value: '0.8s' },
      { label: 'Vendor Payout Automation', value: '100%' }
    ]
  },
  {
    id: 'school-management',
    image: '/dashboards/lms.png',
    title: 'School & College Management System',
    category: 'education',
    categoryLabel: 'Education & Logistics',
    shortDesc: 'Student lifecycle platform covering online admissions, automated GPA/CGPA grading, and fee collection.',
    fullDesc: 'Unified academic institution management system connecting administrative staff, teachers, students, and guardians. Automates term report cards, digital fee collection via SMS payment links, and biometric student attendance.',
    businessProblem: 'Manual paper report card preparation took teachers weeks every semester, while delinquent tuition fees caused severe school cash flow shortfalls.',
    codeozSolution: 'Created an academic administrative suite that calculates weighted GPA/CGPA scores in seconds and automatically sends SMS fee reminders with direct digital payment links.',
    bullets: [
      'Digital student admissions & automated identity card generation',
      'Automated examination grading sheets & transcript printing',
      'Online fee collection with automated SMS notifications to guardians',
      'Teacher workload assignment, class routines, and syllabus tracking'
    ],
    keyModules: [
      { name: 'Student Information System (SIS)', desc: 'Complete student academic files, parent contacts, and digital ID card generator.' },
      { name: 'Exam & Transcript Processing', desc: 'Custom grading scales, tabulations sheets, and printable report cards.' },
      { name: 'Accounts & Fee Collection', desc: 'Tuition fees, lab charges, transport fees with instant SMS receipt confirmations.' },
      { name: 'Teacher & Academic Routine', desc: 'Automated timetable generation without teacher schedule collisions.' }
    ],
    techStack: ['ASP.NET Core', 'SQL Server', 'React', 'C# .NET 8'],
    metrics: '50k+ Active Students',
    icon: GraduationCap,
    mockupBg: 'from-emerald-600/20 to-slate-900/30',
    kpiStats: [
      { label: 'Grading Time Saved', value: '90%' },
      { label: 'Fee Collection Rate', value: '98.5%' },
      { label: 'Guardian SMS Reach', value: '100%' }
    ]
  },
  {
    id: 'courier-logistics',
    image: '/dashboards/fleet.png',
    title: 'Courier & Logistics Fleet Tracking',
    category: 'logistics',
    categoryLabel: 'Education & Logistics',
    shortDesc: 'Real-time parcel routing, barcode tracking IDs, hub-to-hub transfer logs, and delivery rider sync.',
    fullDesc: 'Engineered for national express courier networks and last-mile delivery services. Tracks parcel custody at every checkpoint, verifies Cash on Delivery (COD) reconciliations, and optimizes rider dispatch routes.',
    businessProblem: 'Untracked parcels between regional sorting hubs led to high loss rates and merchant disputes over delayed Cash-on-Delivery payments.',
    codeozSolution: 'Built a real-time event-driven logistics network using SignalR and mobile APIs that enforces mandatory barcode scans at every handoff before updating parcel manifests.',
    bullets: [
      'Unique barcode tracking IDs with real-time customer status lookup',
      'Hub-to-hub parcel manifest creation & vehicle load tracking',
      'Delivery agent mobile app sync & Cash on Delivery (COD) accounting',
      'Merchant API plugins for automatic shipping order generation'
    ],
    keyModules: [
      { name: 'Parcel Intake & Label Printing', desc: 'Bulk manifest uploads, dimension weight calculator, and barcode sticker printing.' },
      { name: 'Hub Routing & Line-Haul', desc: 'Inter-district parcel transit manifests, transfer vehicle manifests, and bag sealing logs.' },
      { name: 'Rider Last-Mile App', desc: 'Route optimization, customer call masking, OTP delivery proof, and COD cash collection.' },
      { name: 'Merchant COD Settlement', desc: 'Automated merchant payment advice with bank/MFS transfer files.' }
    ],
    techStack: ['.NET 8 Web API', 'SignalR', 'SQL Server', 'Flutter / React'],
    metrics: '100k+ Parcels / Month',
    icon: Truck,
    mockupBg: 'from-blue-600/20 to-slate-900/30',
    kpiStats: [
      { label: 'Parcel Loss Rate', value: '< 0.01%' },
      { label: 'Last-Mile Delivery Success', value: '96.8%' },
      { label: 'COD Settlement Time', value: '24 Hours' }
    ]
  },
  {
    id: 'pharmacy-system',
    image: '/dashboards/inventory.png',
    title: 'Pharmacy & Drug Store Management',
    category: 'healthcare',
    categoryLabel: 'Healthcare',
    shortDesc: 'Batch expiry date monitoring, medicine generic matching, supplier procurement, and fast POS.',
    fullDesc: 'Specialized pharmaceutical retail and wholesale management software. Warns dispensers 90 days before drug expiration, suggests generic bio-equivalents when a requested brand is sold out, and maintains strict distributor credit ledgers.',
    businessProblem: 'Thousands of dollars in unsold medicine expiring unnoticed on shelves, combined with cashier delays trying to read physician prescription handwriting.',
    codeozSolution: 'Engineered a smart inventory matrix that prioritizes near-expiry batches (FEFO: First Expired, First Out) and offers instant generic drug search during checkout.',
    bullets: [
      'Batch-wise medicine expiration alerts & automated return manifests',
      'Instant generic search for out-of-stock brand alternatives',
      'Wholesale distributor purchase orders & credit accounts',
      'Narcotic drug sales register complying with regulatory standards'
    ],
    keyModules: [
      { name: 'FEFO Inventory Dispatch', desc: 'Ensures older batches are sold first to prevent shelf expiration losses.' },
      { name: 'Smart Prescription Counter', desc: 'Fast generic substitution, drug interaction warnings, and dosage directions.' },
      { name: 'Supplier Reorder Planning', desc: 'Predictive stock replenishment based on historic 30-day velocity.' },
      { name: 'Regulatory Sales Register', desc: 'Audit-ready reports for scheduled medicines and controlled substances.' }
    ],
    techStack: ['C# .NET', 'SQL Server', 'TailwindCSS', 'REST API'],
    metrics: '-90% Expired Stock Waste',
    icon: Pill,
    mockupBg: 'from-teal-600/20 to-slate-900/30',
    kpiStats: [
      { label: 'Expired Drug Losses', value: '-90%' },
      { label: 'Checkout Duration', value: '4 Seconds' },
      { label: 'Generic Substitution', value: '+42%' }
    ]
  },
  {
    id: 'restaurant-pos',
    image: '/dashboards/restaurant.png',
    title: 'Restaurant POS & Kitchen Display System (KDS)',
    category: 'retail',
    categoryLabel: 'Retail & POS',
    shortDesc: 'Kitchen Order Tickets (KOT), visual table floor plan, waiter tablet ordering, and recipe cost analytics.',
    fullDesc: 'Fast-paced dining management system that accelerates table turns and eliminates kitchen order mistakes. Waiters take orders on handheld tablets, tickets display instantly on kitchen screens, and bills split seamlessly.',
    businessProblem: 'Handwritten kitchen slips got lost during peak dinner rushes, leading to delayed appetizers, cold food complaints, and inaccurate inventory tracking of raw ingredients.',
    codeozSolution: 'Engineered a real-time web-socket KDS that organizes tickets by prep time, alerts line cooks to allergen modifications, and automatically deducts ingredients from stock.',
    bullets: [
      'Instant Kitchen Order Ticket (KOT) printing & Kitchen Display (KDS)',
      'Interactive visual floor map with real-time table occupancy status',
      'Recipe ingredient inventory deduction with gross margin tracking',
      'Split billing by item or guest, with support for tips and service charges'
    ],
    keyModules: [
      { name: 'Visual Floor & Table Map', desc: 'Color-coded table states (Available, Seated, Bill Requested, Cleaning).' },
      { name: 'Kitchen Display System (KDS)', desc: 'Timer badges for orders over 15 minutes, bump bar support, and item routing.' },
      { name: 'Recipe & Ingredient Control', desc: 'BOM (Bill of Materials) deducting meat, produce, and sauces per dish prepared.' },
      { name: 'Waiter Handheld Ordering', desc: 'Mobile tablet interface for table-side ordering and instant modifier selection.' }
    ],
    techStack: ['.NET Core Web API', 'React', 'SignalR', 'SQLite / Cloud'],
    metrics: '-40% Table Turn Time',
    icon: UtensilsCrossed,
    mockupBg: 'from-amber-600/20 to-slate-900/30',
    kpiStats: [
      { label: 'Table Turn Speed', value: '-40%' },
      { label: 'Order Error Rate', value: 'Zero' },
      { label: 'Food Cost Visibility', value: 'Real-time' }
    ]
  },
  {
    id: 'microfinance-loan',
    image: '/dashboards/project.png',
    title: 'Microfinance & Loan Management System',
    category: 'finance',
    categoryLabel: 'Finance & HR',
    shortDesc: 'Member savings accounts, multi-tier loan approval workflows, installment collection, and overdue alerts.',
    fullDesc: 'Enterprise banking and credit governance software built for cooperative credit societies, microfinance institutions, and NGOs. Manages daily/weekly loan installments, loan delinquency alerts, and member share capitals.',
    businessProblem: 'Field collection officers using paper record books caused frequent accounting mismatches, delayed loan approval cycles, and high non-performing loan (NPL) rates.',
    codeozSolution: 'Developed an automated loan lifecycle system with strict amortization schedules, field officer collection synchronization, and automated credit scoring rules.',
    bullets: [
      'Member savings, fixed deposits & share capital management',
      'Automated loan amortization schedules with grace period logic',
      'Field collection officer daily sheet generation & arrears monitoring',
      'Multi-level approval workflows with guarantor identity verification'
    ],
    keyModules: [
      { name: 'Member Registration & KYC', desc: 'Biometric fingerprint, NID verification, guarantor documentation, and share ledger.' },
      { name: 'Loan Underwriting Engine', desc: 'Repayment capacity assessment, collateral valuation, and disbursement scheduling.' },
      { name: 'Field Collection Synchronization', desc: 'Mobile app for daily field officers collecting installments with SMS receipts.' },
      { name: 'Delinquency & Arrears Tracker', desc: 'Automated aging of at-risk loans (PAR 30/60/90 days) and penalty calculators.' }
    ],
    techStack: ['ASP.NET Core', 'C# .NET 8', 'SQL Server', 'Reporting Services'],
    metrics: '99.8% Recovery Accuracy',
    icon: DollarSign,
    mockupBg: 'from-green-600/20 to-slate-900/30',
    kpiStats: [
      { label: 'Recovery Rate', value: '99.8%' },
      { label: 'Loan Approval Speed', value: '2 Hours' },
      { label: 'Field Reconciliations', value: 'Same-day' }
    ]
  },
  {
    id: 'realestate-erp',
    image: '/dashboards/mis.png',
    title: 'Real Estate & Property Development ERP',
    category: 'erp',
    categoryLabel: 'Manufacturing & ERP',
    shortDesc: 'Plot and apartment unit reservations, buyer installment schedules, broker commissions, and deed logs.',
    fullDesc: 'Comprehensive project management and sales automation software for real estate developers and housing schemes. Features an interactive master-plan visualizer showing plot availability, customer payment milestone tracking, and automated legal contracts.',
    businessProblem: 'Double booking of residential plots, manual tracking of 36-month installment schedules, and dispute-prone commission calculations with sales brokers.',
    codeozSolution: 'Created a centralized property ERP with an interactive SVG master-plan, automated late installment penalty calculation, and digital deed generation.',
    bullets: [
      'Interactive master-plan plot & apartment availability visualizer',
      'Automated customer installment schedules with late surcharge calculation',
      'Sales broker commission tracking & legal document generation',
      'Construction project material procurement and site progress milestones'
    ],
    keyModules: [
      { name: 'Interactive Project Visualizer', desc: 'Interactive floor maps and plot schemes showing booked, sold, and available units.' },
      { name: 'Buyer Installment Management', desc: 'Automated monthly/milestone demand notices with payment receipt generation.' },
      { name: 'Sales Broker Registry', desc: 'Agent agreements, commission tier structures, and milestone payout releases.' },
      { name: 'Site Construction Monitoring', desc: 'Bill of quantities (BOQ), contractor payment certificates, and project progress.' }
    ],
    techStack: ['.NET 8', 'React', 'SQL Server', 'Azure Blob Storage'],
    metrics: '100% Payment Tracking',
    icon: Home,
    mockupBg: 'from-orange-600/20 to-slate-900/30',
    kpiStats: [
      { label: 'Payment Reconciliation', value: '100%' },
      { label: 'Double Booking Risk', value: '0%' },
      { label: 'Installment Collection', value: '+30%' }
    ]
  }
];

// --- CODEOZ LOGO COMPONENT ---
export function CodeOzLogo({ size = 'md', light = false }: { size?: 'sm' | 'md' | 'lg'; light?: boolean }) {
  const h = size === 'sm' ? 'h-7' : size === 'lg' ? 'h-10' : 'h-8';
  const strokeMain = light ? '#FFFFFF' : '#0B0F19';
  const textMain = light ? 'text-white' : 'text-slate-900';

  return (
    <div className={`flex items-center gap-2.5 font-heading font-extrabold tracking-tight select-none ${h}`}>
      <svg className="h-full aspect-[2.1/1]" viewBox="0 0 126 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M32 10C18 10 8 19 8 30C8 41 18 50 32 50C48 50 56 36 63 30C56 24 48 10 32 10Z"
          stroke={strokeMain}
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M94 10C108 10 118 19 118 30C118 41 108 50 94 50C78 50 70 36 63 30C70 24 78 10 94 10Z"
          stroke="#FF5A00"
          strokeWidth="7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58 24L53 30L58 36"
          stroke={strokeMain}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M68 24L73 30L68 36"
          stroke="#FF5A00"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div className="flex items-baseline leading-none">
        <span className={`text-xl font-black tracking-tight ${textMain}`}>Code</span>
        <span className="text-xl font-black text-[#FF5A00] tracking-tight">Oz</span>
      </div>
    </div>
  );
}

// Page type definitions
type PageName = 'home' | 'services' | 'about' | 'solutions' | 'process' | 'contact' | 'solution-detail';

// --- MAIN REACT APPLICATION ---
export default function App() {
  const [currentPage, setCurrentPage] = useState<PageName>('home');
  const [selectedSolutionId, setSelectedSolutionId] = useState<string>('hospital-management');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [contactSubmitted, setContactSubmitted] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    projectType: 'Hospital Management & Clinical Operations',
    message: ''
  });

  // Scroll to top on page switch
  const navigateTo = (page: PageName, solutionId?: string) => {
    if (solutionId) {
      setSelectedSolutionId(solutionId);
    }
    setCurrentPage(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Find currently active solution for detail page
  const currentSolution = ALL_SYSTEMS.find(s => s.id === selectedSolutionId) || ALL_SYSTEMS[0];

  // Filtered solutions for solutions page & home preview
  const filteredSolutions = ALL_SYSTEMS.filter(p => {
    const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name || !contactForm.email) return;
    setContactSubmitted(true);
    setTimeout(() => {
      setContactSubmitted(false);
      setContactForm({ name: '', email: '', projectType: 'Hospital Management & Clinical Operations', message: '' });
    }, 4500);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#FF5A00] selection:text-white antialiased flex flex-col justify-between">
      
      {/* ----------------- GLOBAL NAVBAR ----------------- */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <button onClick={() => navigateTo('home')} className="flex items-center gap-2 group focus:outline-none">
            <CodeOzLogo size="md" />
          </button>

          {/* Subtitle / Brand slogan tag from image */}
          <div className="hidden lg:block text-xs font-mono text-slate-400">
            The CodeOz journey
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold">
            <button
              onClick={() => navigateTo('home')}
              className={`transition-colors ${currentPage === 'home' ? 'text-[#FF5A00]' : 'text-slate-600 hover:text-[#FF5A00]'}`}
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('about')}
              className={`transition-colors ${currentPage === 'about' ? 'text-[#FF5A00]' : 'text-slate-600 hover:text-[#FF5A00]'}`}
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo('services')}
              className={`transition-colors ${currentPage === 'services' ? 'text-[#FF5A00]' : 'text-slate-600 hover:text-[#FF5A00]'}`}
            >
              Services
            </button>
            <button
              onClick={() => navigateTo('solutions')}
              className={`transition-colors ${currentPage === 'solutions' || currentPage === 'solution-detail' ? 'text-[#FF5A00]' : 'text-slate-600 hover:text-[#FF5A00]'}`}
            >
              All Solutions
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className={`transition-colors ${currentPage === 'contact' ? 'text-[#FF5A00]' : 'text-slate-600 hover:text-[#FF5A00]'}`}
            >
              Contact
            </button>
          </nav>

          {/* Action Button */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => navigateTo('contact')}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0B0F19] hover:bg-[#FF5A00] transition-all shadow-sm hover:shadow-orange-glow group"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-[#FF5A00] rounded-lg"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
            <button
              onClick={() => navigateTo('home')}
              className="block w-full text-left text-base font-semibold text-slate-800 hover:text-[#FF5A00]"
            >
              Home
            </button>
            <button
              onClick={() => navigateTo('about')}
              className="block w-full text-left text-base font-semibold text-slate-800 hover:text-[#FF5A00]"
            >
              About Us
            </button>
            <button
              onClick={() => navigateTo('services')}
              className="block w-full text-left text-base font-semibold text-slate-800 hover:text-[#FF5A00]"
            >
              Services
            </button>
            <button
              onClick={() => navigateTo('solutions')}
              className="block w-full text-left text-base font-semibold text-slate-800 hover:text-[#FF5A00]"
            >
              All Solutions
            </button>
            <button
              onClick={() => navigateTo('contact')}
              className="block w-full text-left text-base font-semibold text-slate-800 hover:text-[#FF5A00]"
            >
              Contact
            </button>
            <div className="pt-2">
              <button
                onClick={() => navigateTo('contact')}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-white bg-[#FF5A00] hover:bg-[#FF701A] transition-colors"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ----------------- PAGE ROUTER ----------------- */}
      <main className="flex-1">

        {/* =========================================================================
            PAGE 1: HOME PAGE
           ========================================================================= */}
        {currentPage === 'home' && (
          <div>
            
            {/* 🌟 1ST SECTION: "One partner for the whole journey — idea to infinity." (FROM USER IMAGE) */}
            <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24 bg-white border-b border-slate-100">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
                  
                  {/* Left Column: Heading & Copy */}
                  <div className="lg:col-span-7 space-y-6">
                    
                    {/* Orange Accent Bar (from screenshot) */}
                    <div className="w-16 h-1.5 bg-[#FF5A00] rounded-full" />

                    {/* Headline */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-950 font-heading leading-[1.08] tracking-tight">
                      One partner for the<br />
                      whole journey —<br />
                      <span className="text-[#FF5A00]">idea to infinity.</span>
                    </h1>

                    {/* Subtext from screenshot */}
                    <p className="text-base sm:text-lg text-slate-600 max-w-xl font-normal leading-relaxed">
                      CodeOz combines strategy, design, engineering, and technology to transform ambitious ideas into scalable digital solutions.
                    </p>

                    <div className="flex flex-wrap items-center gap-4 pt-2">
                      <button
                        onClick={() => navigateTo('contact')}
                        className="px-8 py-3.5 rounded-xl text-sm font-bold text-white bg-[#0B0F19] hover:bg-[#FF5A00] transition-all shadow-md flex items-center gap-2"
                      >
                        <span>Start Your Journey</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => navigateTo('solutions')}
                        className="px-6 py-3.5 rounded-xl text-sm font-bold text-slate-700 bg-slate-50 border border-slate-200 hover:bg-slate-100 transition-colors"
                      >
                        Explore Platforms
                      </button>
                    </div>

                  </div>

                  {/* Right Column: Infinity Journey Diagram & Code Snippet (from screenshot) */}
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

                    {/* Floating Code Snippet Card (from screenshot) */}
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

              {/* Bottom 4 Capabilities Ribbon (from screenshot) */}
              <div className="bg-[#0B0F19] text-white py-6 border-t border-slate-800 mt-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
                    
                    <button onClick={() => navigateTo('services')} className="pt-2 md:pt-0 text-left hover:text-[#FF5A00] transition-colors focus:outline-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mb-1.5" />
                      <div className="text-sm font-bold text-white mt-0.5">Custom .NET Development</div>
                    </button>

                    <button onClick={() => navigateTo('services')} className="pt-2 md:pt-0 md:pl-6 text-left hover:text-[#FF5A00] transition-colors focus:outline-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mb-1.5" />
                      <div className="text-sm font-bold text-white mt-0.5">Business Applications</div>
                    </button>

                    <button onClick={() => navigateTo('services')} className="pt-2 md:pt-0 md:pl-6 text-left hover:text-[#FF5A00] transition-colors focus:outline-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mb-1.5" />
                      <div className="text-sm font-bold text-white mt-0.5">API Integration</div>
                    </button>

                    <button onClick={() => navigateTo('services')} className="pt-2 md:pt-0 md:pl-6 text-left hover:text-[#FF5A00] transition-colors focus:outline-none">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A00] mb-1.5" />
                      <div className="text-sm font-bold text-white mt-0.5">Cloud & Modernization</div>
                    </button>

                  </div>
                </div>
              </div>

            </section>

            {/* 🌟 3D CYLINDRICAL RING GALLERY (FROM USER'S UPLOADED DASHBOARDS & REFERENCE) */}
            <AuroraGallery />

            {/* SECOND SECTION: "Build bold. Ship better." (HERO SHOWCASE & 3D TERMINAL) */}
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
                    <div className="text-4xl sm:text-5xl font-black font-heading text-[#FF5A00]">10+</div>
                    <div className="mt-1 text-sm font-medium text-slate-400">Years Technical Track Record</div>
                  </div>
                  <div className="pt-4 md:pt-0">
                    <div className="text-4xl sm:text-5xl font-black font-heading text-[#FF5A00]">24/7</div>
                    <div className="mt-1 text-sm font-medium text-slate-400">Mission-Critical Support</div>
                  </div>
                </div>
              </div>
            </section>

            {/* SERVICES SECTION */}
            <section className="py-24 bg-white">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                  <div>
                    <div className="text-xs font-bold tracking-wider text-[#FF5A00] uppercase">SERVICES & CAPABILITIES</div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-heading mt-2">
                      Technology that <span className="text-[#FF5A00]">moves business.</span>
                    </h2>
                  </div>
                  <button
                    onClick={() => navigateTo('services')}
                    className="inline-flex items-center gap-2 text-sm font-bold text-[#FF5A00] hover:text-[#FF701A]"
                  >
                    <span>View In-Depth Services Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-slate-50 rounded-2xl p-7 border border-slate-200/80 space-y-4 shadow-sm hover:shadow-md transition-all">
                  <span className="text-xs font-mono font-bold text-[#FF5A00] bg-orange-100 px-2.5 py-1 rounded border border-orange-200">CORE ARCHITECTURE</span>
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
                  <button
                    onClick={() => navigateTo('solutions')}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#0B0F19] text-white text-xs font-bold hover:bg-[#FF5A00] transition-colors"
                  >
                    <span>View All Solutions</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {ALL_SYSTEMS.slice(0, 3).map(system => (
                    <div key={system.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-lg transition-all group overflow-hidden">
                      {system.image && (
                        <div className="-mx-6 -mt-6 h-36 overflow-hidden bg-slate-900 mb-2 relative">
                          <img src={system.image} alt={system.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
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
                        <span className="text-[11px] font-mono text-slate-400">{system.techStack[0]} · {system.techStack[1]}</span>
                        <button
                          onClick={() => navigateTo('solution-detail', system.id)}
                          className="text-xs font-bold text-slate-900 group-hover:text-[#FF5A00] flex items-center gap-1"
                        >
                          <span>Full Specs</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

          </div>
        )}

        {/* =========================================================================
            PAGE 2: SERVICES (WHAT WE DO + OUR EXPERTISE + TECH STACK)
           ========================================================================= */}
        {currentPage === 'services' && (
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
                
                {/* 01: Software Development (Active Dark Card) */}
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
                
                {/* 01: Custom .NET Development (Active Dark) */}
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
        )}

        {/* =========================================================================
            PAGE 3: ABOUT US (FOLLOWING USER DESIGN + INTEGRATED PROCESS)
           ========================================================================= */}
        {currentPage === 'about' && (
          <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-28">
            
            {/* PART 1: "About CodeOz" - Software should feel simple. (FROM USER IMAGE) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Column: Visual Image with Floating Quote Pill */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 aspect-[4/5] bg-slate-100">
                  <img
                    src="/about-workspace.png?v=2"
                    alt="CodeOz Engineering & Product Design Studio"
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Floating Dark Card Badge (from image) */}
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

                {/* 5 Core Pillars with Checkmarks (from image) */}
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

                {/* Who we work with (from image) */}
                <div className="pt-6 border-t border-slate-200/80 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono font-medium text-slate-500 mr-2">Who we work with</span>
                  {['Enterprises', 'Government', 'Startups', 'Partners'].map(partner => (
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

            {/* PART 2: TRANSFERRED PROCESS CONTENT - "Clean steps. Less noise." */}
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
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5A00] flex items-center justify-center shadow-sm"><Compass className="w-5 h-5 text-[#FF5A00]" /></div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">Discover</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Technical feasibility, domain modeling, architecture blueprinting, and milestone roadmap alignment.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF5A00]/40 transition-all space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5A00] flex items-center justify-center shadow-sm"><Hammer className="w-5 h-5 text-[#FF5A00]" /></div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">Build</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Two-week agile sprints with clean code reviews, automated CI unit testing, and demonstrable progress.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF5A00]/40 transition-all space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5A00] flex items-center justify-center shadow-sm"><Rocket className="w-5 h-5 text-[#FF5A00]" /></div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">Deploy</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated CI/CD zero-downtime container releases, security audits, and cloud infrastructure setup.
                  </p>
                </div>

                <div className="p-8 bg-slate-50 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#FF5A00]/40 transition-all space-y-4">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 text-[#FF5A00] flex items-center justify-center shadow-sm"><RefreshCw className="w-5 h-5 text-[#FF5A00]" /></div>
                  <h3 className="text-xl font-bold font-heading text-slate-900">Evolve</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    24/7 telemetry monitoring, performance profiling, and 99.9% uptime SLA mission-critical support.
                  </p>
                </div>

              </div>

            </div>

          </div>
        )}

        {/* =========================================================================
            PAGE 4: ALL 11 SOLUTIONS DIRECTORY PAGE
           ========================================================================= */}
        {currentPage === 'solutions' && (
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
                {[
                  { id: 'all', label: 'All Systems (11)' },
                  { id: 'erp', label: 'Manufacturing & ERP' },
                  { id: 'healthcare', label: 'Healthcare' },
                  { id: 'retail', label: 'Retail & POS' },
                  { id: 'finance', label: 'Finance & HR' },
                  { id: 'education', label: 'Education' },
                  { id: 'logistics', label: 'Logistics' },
                ].map(cat => (
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
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 text-xs rounded-full border border-slate-200 focus:outline-none focus:border-[#FF5A00] focus:ring-1 focus:ring-[#FF5A00]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredSolutions.map(system => (
                <div
                  key={system.id}
                  className="bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
                >
                  {system.image && (
                    <div className="h-44 w-full overflow-hidden bg-slate-900 relative">
                      <img src={system.image} alt={system.title} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
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
                      {system.techStack.slice(0, 2).map(t => (
                        <span key={t} className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono text-slate-600">
                          {t}
                        </span>
                      ))}
                    </div>
                    <button
                      onClick={() => navigateTo('solution-detail', system.id)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-[#FF5A00] transition-colors"
                    >
                      <span>View Full Page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =========================================================================
            PAGE 5: DEDICATED INDIVIDUAL SYSTEM DETAIL PAGE
           ========================================================================= */}
        {currentPage === 'solution-detail' && currentSolution && (
          <div className="py-12 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="flex items-center justify-between">
              <button
                onClick={() => navigateTo('solutions')}
                className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#FF5A00] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Solutions</span>
              </button>
              <div className="text-xs font-mono text-slate-400">
                SYSTEM ID: <span className="text-[#FF5A00] font-bold">{currentSolution.id}</span>
              </div>
            </div>

            {currentSolution.image && (
              <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white">
                <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                    <span className="text-xs font-mono text-slate-500 ml-2">codeoz://platform/${currentSolution.id}/preview</span>
                  </div>
                  <span className="text-[11px] font-mono text-[#FF5A00] font-bold">LIVE TELEMETRY ACTIVE</span>
                </div>
                <div className="w-full max-h-[460px] overflow-hidden bg-slate-50">
                  <img src={currentSolution.image} alt={currentSolution.title} className="w-full h-auto object-cover object-top" />
                </div>
              </div>
            )}

            <div className={`rounded-3xl p-8 sm:p-14 bg-gradient-to-br ${currentSolution.mockupBg} border border-slate-200 space-y-6 relative overflow-hidden`}>
              <div className="max-w-3xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm border border-slate-200 text-xs font-bold text-[#FF5A00]">
                  <currentSolution.icon className="w-4 h-4" />
                  <span>{currentSolution.categoryLabel}</span>
                </div>
                <h1 className="text-3xl sm:text-5xl font-extrabold font-heading text-slate-950 leading-tight">
                  {currentSolution.title}
                </h1>
                <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
                  {currentSolution.fullDesc}
                </p>
                <div className="pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={() => {
                      setContactForm({ ...contactForm, projectType: currentSolution.title });
                      navigateTo('contact');
                    }}
                    className="px-7 py-3.5 bg-[#0B0F19] hover:bg-[#FF5A00] text-white text-xs font-bold rounded-xl transition-all shadow-md flex items-center gap-2"
                  >
                    <span>Request Live Demo for this System</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <div className="px-4 py-3 bg-white/90 rounded-xl border border-slate-200 text-xs font-mono text-slate-800">
                    Proven Impact: <span className="text-emerald-600 font-bold">{currentSolution.metrics}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {currentSolution.kpiStats.map((kpi, kIdx) => (
                <div key={kIdx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-1">
                  <div className="text-3xl font-black font-heading text-[#FF5A00]">{kpi.value}</div>
                  <div className="text-xs font-medium text-slate-600">{kpi.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-red-50/50 rounded-2xl border border-red-200/80 space-y-3">
                <div className="flex items-center gap-2 text-red-700 font-bold text-xs uppercase tracking-wider">
                  <X className="w-4 h-4" />
                  <span>The Legacy Bottlenecks</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">Before CodeOz Engineering</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{currentSolution.businessProblem}</p>
              </div>

              <div className="p-8 bg-emerald-50/50 rounded-2xl border border-emerald-200/80 space-y-3">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                  <Check className="w-4 h-4" />
                  <span>The Engineered Solution</span>
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">After CodeOz Deployment</h3>
                <p className="text-sm text-slate-700 leading-relaxed">{currentSolution.codeozSolution}</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold font-heading text-slate-900">Granular Operational Modules</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentSolution.keyModules.map((mod, mIdx) => (
                  <div key={mIdx} className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-slate-900">
                      <span className="w-6 h-6 rounded-full bg-orange-100 text-[#FF5A00] flex items-center justify-center text-xs font-mono">{mIdx + 1}</span>
                      <span>{mod.name}</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed pl-8">{mod.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        

        {/* =========================================================================
            PAGE 7: CONTACT PAGE
           ========================================================================= */}
        {currentPage === 'contact' && (
          <div className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <span className="text-xs font-bold text-[#FF5A00] uppercase bg-orange-100 px-3 py-1 rounded-full">LET'S BUILD</span>
              <h1 className="text-4xl sm:text-5xl font-extrabold font-heading text-slate-950">Have an idea? <span className="text-[#FF5A00]">Let's code it.</span></h1>
            </div>

            <div className="max-w-xl mx-auto bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-xl space-y-5">
              {contactSubmitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Consultation Request Received!</h3>
                  <p className="text-xs text-slate-600">A senior software architect will contact you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={contactForm.name}
                      onChange={e => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="john@company.com"
                      value={contactForm.email}
                      onChange={e => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00]"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Select Target Solution</label>
                    <select
                      value={contactForm.projectType}
                      onChange={e => setContactForm({ ...contactForm, projectType: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00] bg-white"
                    >
                      {ALL_SYSTEMS.map(sys => (
                        <option key={sys.id} value={sys.title}>{sys.title}</option>
                      ))}
                      <option value="Custom .NET Architecture">Custom .NET Architecture & Web API</option>
                      <option value="Cloud Migration">Legacy .NET to Cloud Modernization</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700 uppercase">Message</label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your requirements..."
                      value={contactForm.message}
                      onChange={e => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:border-[#FF5A00] resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-sm font-bold text-white bg-[#0B0F19] hover:bg-[#FF5A00] transition-all shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Send Project Request</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

      </main>

      {/* ----------------- GLOBAL FOOTER (SOLAR ORANGE THEME) ----------------- */}
      <footer className="bg-[#FF5A00] text-white pt-16 pb-12 border-t border-orange-600 shadow-2xl relative overflow-hidden">
        {/* Subtle decorative background pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:24px_24px]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
            <div className="lg:col-span-2 space-y-4">
              <button onClick={() => navigateTo('home')} className="focus:outline-none">
                <div className="inline-flex items-center bg-white px-4 py-2.5 rounded-2xl shadow-md border border-white/40">
                  <CodeOzLogo size="md" />
                </div>
              </button>
              <p className="text-xs text-orange-100 max-w-sm leading-relaxed font-normal">
                CodeOz is an enterprise software engineering company that specializes in designing and developing scalable web applications, business platforms, and digital solutions utilizing the Microsoft .NET ecosystem.
              </p>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B0F19] border border-black/40 text-[11px] font-mono text-emerald-400 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>All Systems Operational · SLA 99.9%</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-black uppercase tracking-wider text-white border-b border-orange-400/60 pb-1 inline-block">Pages & Navigation</div>
              <ul className="space-y-2 text-xs text-orange-100 font-medium">
                <li><button onClick={() => navigateTo('home')} className="hover:text-white transition-colors">Home</button></li>
                <li><button onClick={() => navigateTo('about')} className="hover:text-white transition-colors">About Us</button></li>
                <li><button onClick={() => navigateTo('services')} className="hover:text-white transition-colors">Services & Capabilities</button></li>
                <li><button onClick={() => navigateTo('solutions')} className="hover:text-white transition-colors">All Solutions</button></li>
                <li><button onClick={() => navigateTo('contact')} className="hover:text-white transition-colors">Contact & Consultation</button></li>
              </ul>
            </div>

            <div className="space-y-3">
              <div className="text-xs font-black uppercase tracking-wider text-white border-b border-orange-400/60 pb-1 inline-block">Core Technologies</div>
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
              <div className="text-xs font-black uppercase tracking-wider text-white border-b border-orange-400/60 pb-1 inline-block">Contact & Support</div>
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
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security Architecture</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
