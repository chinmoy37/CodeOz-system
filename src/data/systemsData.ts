import React from 'react';
import {
  HeartPulse,
  ShoppingBag,
  Users,
  Landmark,
  GraduationCap,
  Truck,
  Pill,
  UtensilsCrossed,
  DollarSign,
  Home
} from 'lucide-react';

export type SystemCategory = 'erp' | 'healthcare' | 'retail' | 'finance' | 'education' | 'logistics';

export interface KeyModule {
  name: string;
  desc: string;
}

export interface KpiStat {
  label: string;
  value: string;
}

export interface SystemDetail {
  image?: string;
  id: string;
  title: string;
  category: SystemCategory;
  categoryLabel: string;
  shortDesc: string;
  fullDesc: string;
  businessProblem: string;
  codeozSolution: string;
  bullets: string[];
  keyModules: KeyModule[];
  techStack: string[];
  metrics: string;
  icon: React.ElementType;
  mockupBg: string;
  kpiStats: KpiStat[];
}

export const CATEGORIES = [
  { id: 'all', label: 'All Solutions' },
  { id: 'healthcare', label: 'Healthcare & Clinical' },
  { id: 'retail', label: 'Retail & POS' },
  { id: 'finance', label: 'Finance & Banking' },
  { id: 'erp', label: 'ERP & Real Estate' },
  { id: 'education', label: 'Education' },
  { id: 'logistics', label: 'Logistics & Fleet' }
];

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

export function getSystemById(id: string): SystemDetail | undefined {
  return ALL_SYSTEMS.find((s) => s.id === id);
}
