import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  ChevronRight,
  Clock,
  Calendar,
  ArrowUpRight,
  ArrowLeft,
  ChevronDown,
  Route,
  Users,
  ShieldCheck,
  Cpu,
  Bus,
  ClipboardCheck,
  CheckCircle2,
} from "lucide-react";
import AnimatedImage from "../components/AnimatedImage";
import Seo from "../components/Seo";
import HERO_IMAGE from "../assets/Corporate Employee Transportation.png";

const MODELS = [
  {
    icon: Users,
    title: "What Are Fixed Home-to-Office Managed Cabs?",
    description: [
      "Fixed-route or dedicated cabs operate according to predetermined schedules and employee pickup locations. They can work particularly well when employees follow consistent office or shift timings.",
      <>
        Dedicated <strong>corporate cabs</strong> can also provide greater administrative
        control because organizations can establish requirements for drivers, vehicles,
        reporting, safety, and service quality.
      </>,
    ],
  },
  {
    icon: Bus,
    title: "What Are Feeder Shuttles and Pooled Buses?",
    description: [
      "A shuttle or pooled bus model groups employees who live within similar geographical clusters. Employees travel to common pickup points before continuing toward the workplace.",
      "This approach can be useful when many employees live within the same residential areas. It can reduce the number of individual vehicle trips and make fleet utilization more efficient.",
    ],
  },
  {
    icon: Route,
    title: "Is a Hybrid Transportation Model Possible?",
    description: [
      "Yes. Businesses can combine dedicated vehicles, pooled routes, shuttle services, and technology platforms according to employee demand.",
      "A hybrid approach can be particularly useful for organizations with different office locations, shift patterns, or hybrid working schedules.",
    ],
  },
  {
    icon: ClipboardCheck,
    title: "Why Can Individual Fuel Reimbursements Become Difficult to Manage?",
    description: [
      "Fuel reimbursement may appear simple for a small workforce, but managing large numbers of individual claims can create administrative work. Companies must process receipts, verify journeys, review claims, and manage different travel patterns.",
      <>
        A <strong>managed employee transportation</strong> program can consolidate
        transportation operations, making it easier to monitor trips, costs, routes, and
        service performance.
      </>,
    ],
  },
];

const SAFETY_POINTS = [
  {
    icon: ShieldCheck,
    title: "How Should Drivers and Vehicles Be Verified?",
    description: [
      <>
        A strong <strong>employee transport management</strong> program should establish
        clear requirements for driver verification and vehicle compliance. Organizations can
        verify driver identity and qualifications and maintain appropriate documentation for
        vehicles used in employee transportation.
      </>,
      "Regular audits can help ensure that safety standards remain consistent rather than being checked only when a service begins.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "What Safety Measures Are Important for Night Shifts?",
    description: [
      "Night-shift transportation requires additional planning. Useful measures can include GPS tracking, active trip monitoring, emergency or SOS mechanisms, verified drivers, defined pickup and drop-off procedures, and appropriate safeguards for employees travelling alone.",
      "For female employees travelling during late hours, companies may also implement escort policies, safe-drop confirmation procedures, or other measures based on their workforce and local requirements.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "How Can Businesses Prepare for Disruptions?",
    description: [
      "Transportation plans should account for events such as heavy monsoon conditions, road closures, vehicle breakdowns, traffic disruptions, and sudden operational changes.",
      "Having backup vehicles, alternative routes, emergency communication procedures, and escalation contacts can help maintain continuity when normal transportation arrangements are disrupted.",
    ],
  },
];

const TECH_POINTS = [
  {
    icon: Cpu,
    title: "Can AI Optimize Employee Transportation Routes?",
    description: [
      "AI-powered route optimization can analyze factors such as employee locations, pickup points, vehicle capacity, schedules, and traffic conditions. The objective is to create efficient routes while reducing unnecessary vehicle movement and travel time.",
      "Instead of relying entirely on static routes, organizations can use technology to respond to changing demand.",
    ],
  },
  {
    icon: Cpu,
    title: "What Does Real-Time Telematics Provide?",
    description: [
      "Telematics can provide information about vehicle location, trip progress, estimated arrival times, and other operational data. An administrative dashboard can give transport teams greater visibility into active journeys.",
      "This visibility can help organizations identify delays, monitor service performance, and respond to transportation issues more quickly.",
    ],
  },
  {
    icon: Cpu,
    title: "How Do Employee Transportation Apps Help Commuters?",
    description: [
      "Employee-facing applications can simplify everyday transportation tasks. Depending on the system, employees may be able to view bookings, receive pickup information, monitor estimated arrival times, and access emergency assistance.",
      "Self-service tools can also reduce repetitive communication between employees and transport administrators.",
    ],
  },
  {
    icon: Cpu,
    title: "How Should Employee Location Data Be Handled?",
    description: [
      "Employee transportation systems can process sensitive operational information such as addresses, pickup points, schedules, and journey details. Companies should therefore establish clear data-access rules, retention practices, security controls, and privacy procedures.",
      "Where applicable, organizations should assess their responsibilities under relevant privacy regulations, including India's Digital Personal Data Protection framework and the GDPR for organizations processing data within its scope.",
    ],
  },
];

const PROVIDER_POINTS = [
  {
    icon: CheckCircle2,
    title: "What Should Be Included in an SLA?",
    description: [
      "A service-level agreement should clearly define operational expectations. Depending on the organization's requirements, these may include punctuality, vehicle availability, driver standards, response times, cancellation procedures, safety requirements, reporting, and escalation mechanisms.",
      "Clear performance indicators make it easier to evaluate whether the transportation provider is delivering the agreed service.",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Why Is Consolidated Billing Important?",
    description: [
      "Managing multiple vehicles and daily trips can create a significant amount of administrative work. Consolidated billing and automated trip reconciliation can help transport teams compare planned and completed journeys, identify discrepancies, and maintain organized financial records.",
    ],
  },
  {
    icon: CheckCircle2,
    title: "Can an Employee Transportation Provider Scale With Business Growth?",
    description: [
      "Scalability is an important selection criterion. A company may need additional vehicles during hiring growth, new office openings, seasonal demand, or changes in shift patterns.",
      "The provider should therefore demonstrate the ability to increase or reduce capacity without creating unnecessary operational complexity.",
    ],
  },
];

const IMPLEMENTATION_STEPS = [
  {
    n: "01",
    title: "What Is the First Step?",
    description: [
      "The first step is demand mapping. Organizations should analyze employee locations, office locations, working hours, shift patterns, transportation requirements, and expected attendance.",
      "Address clustering can help identify areas where employees can be grouped into efficient routes.",
    ],
  },
  {
    n: "02",
    title: "What Should the Transportation Policy Cover?",
    description: [
      "A transportation policy should explain eligibility, booking procedures, pickup and drop-off rules, cancellation requirements, employee conduct, safety responsibilities, emergency procedures, and escalation channels.",
      "Clear policies help both employees and transportation teams understand their responsibilities.",
    ],
  },
  {
    n: "03",
    title: "Why Are Pilot Runs Important?",
    description: [
      "Before a full-scale launch, companies can conduct trial routes to identify practical problems. Pilot runs can reveal unsuitable pickup points, unrealistic travel times, route inefficiencies, communication gaps, or capacity issues.",
      "After reviewing the results, the company can make adjustments before expanding the program.",
    ],
  },
];

const FAQS = [
  {
    q: "What is the primary difference between dedicated corporate cabs and standard ride-hailing services?",
    a: "Dedicated corporate transportation is organized specifically for an organization's workforce. It can operate according to planned schedules, assigned routes, company safety requirements, and administrative controls rather than relying solely on on-demand ride availability.",
  },
  {
    q: "Is a managed employee cab service cheaper than reimbursing individual fuel bills?",
    a: "It can be more efficient at scale because employees can be grouped into planned routes and the company can manage transportation through centralized operations. Actual savings depend on workforce size, routes, utilization, vehicle type, and the selected operating model.",
  },
  {
    q: "How does hybrid work impact corporate employee transportation contracts?",
    a: "Hybrid work can cause substantial changes in daily ridership. Demand may vary significantly between weekdays, making fixed-capacity arrangements less efficient. Flexible booking systems and adaptable vehicle capacity can help organizations respond to these fluctuations.",
  },
  {
    q: "What are the core components of a strategic employee transportation program?",
    a: "A comprehensive program generally includes demand mapping, service-level definitions, an appropriate operating model, transportation technology, safety and compliance procedures, budgeting, reporting, and performance measurement.",
  },
  {
    q: "What specific safety measures are required for night-shift commutes?",
    a: "Night-shift programs can include real-time GPS tracking, active trip monitoring, verified drivers, emergency alerts, defined pickup and drop-off procedures, and appropriate safeguards for employees travelling alone. Specific measures should reflect applicable laws, company policy, and local operating conditions.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id":
        "https://accivatravels.com/what-is-corporate-employee-transportation/#article",
      headline: "What Is Corporate Employee Transportation? A Complete Guide",
      description:
        "Learn what corporate employee transportation is, its benefits, models, safety measures, and how smart technology improves employee travel, efficiency, and safety.",
      url: "https://accivatravels.com/what-is-corporate-employee-transportation/",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://accivatravels.com/what-is-corporate-employee-transportation/",
      },
      publisher: { "@id": "https://accivatravels.com/#organization" },
      author: { "@id": "https://accivatravels.com/#organization" },
      articleSection: "Corporate Employee Transportation",
      keywords: [
        "corporate employee transportation",
        "employee transportation service",
        "corporate transportation",
        "corporate cabs",
        "employee transport management",
        "managed employee transportation",
        "corporate transportation services",
      ],
    },
    {
      "@type": "Organization",
      "@id": "https://accivatravels.com/#organization",
      name: "Acciva Travels",
      url: "https://accivatravels.com/",
      telephone: ["+91 90350 12166", "+91 80 2354 1166"],
      email: "info@accivatravels.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "52, 1 Main Road, Anand Nagar, Hebbal",
        addressLocality: "Bengaluru",
        postalCode: "560024",
        addressCountry: "IN",
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://accivatravels.com/what-is-corporate-employee-transportation/#breadcrumb",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://accivatravels.com/" },
        {
          "@type": "ListItem",
          position: 2,
          name: "What Is Corporate Employee Transportation? A Complete Guide",
          item: "https://accivatravels.com/what-is-corporate-employee-transportation/",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://accivatravels.com/what-is-corporate-employee-transportation/#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

// Section heading matching the site-wide pattern: eyebrow label + display heading fade-up on scroll.
const SectionHeading = ({ eyebrow, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    className="mb-8"
  >
    {eyebrow && <span className="eyebrow text-teal">{eyebrow}</span>}
    <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
      {title}
    </h2>
  </motion.div>
);

// Card matching the ServiceList / About-page card language: white surface, teal hover border,
// top shimmer sweep on hover, icon badge, and a scroll-triggered fade/lift entrance.
const ArticleCard = ({
  icon: Icon,
  title,
  description,
  index = 0,
  direction = "y",
  decorated = false,
  border,
}) => {
  const isSand = index % 2 === 1;
  const accentBg = isSand ? "bg-sand/20" : "bg-teal/10";
  const accentLine = isSand ? "rgba(225,197,157,0.55)" : "rgba(59,141,196,0.45)";
  const iconBg = isSand ? "bg-sand/20 text-navy" : "bg-teal/10 text-teal";
  const borderClass =
    border === "teal"
      ? "border-teal/30"
      : border === "sand"
      ? "border-sand/40"
      : isSand
      ? "border-sand/30"
      : "border-navy/10";

  return (
    <motion.div
      initial={
        direction === "x"
          ? { opacity: 0, x: index % 2 === 0 ? -24 : 24 }
          : { opacity: 0, y: 24 }
      }
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
      className={`relative overflow-hidden rounded-3xl bg-white border ${borderClass} hover:border-teal/40 hover:shadow-[0_25px_60px_rgba(38,55,74,0.12)] transition-[border-color,box-shadow] duration-500 p-6 sm:p-7 shadow-[0_10px_35px_rgba(38,55,74,0.05)] group h-full`}
    >
      {/* Top shimmer sweep on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {/* Corner quarter-circle round accent — pops in on scroll (matches Home/About card pattern) */}
      {decorated && (
        <motion.div
          className={`absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 rounded-bl-full pointer-events-none origin-top-right ${accentBg}`}
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

      {/* Left edge line, grows downward on scroll */}
      <motion.div
        className="absolute top-0 bottom-0 left-0 w-0.5 origin-top pointer-events-none"
        style={{ background: accentLine }}
        initial={{ scaleY: 0, opacity: 0 }}
        whileInView={{ scaleY: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay: index * 0.08 + 0.15, ease: [0.16, 1, 0.3, 1] }}
      />

      <div className="relative z-10">
        {Icon && (
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.1, rotate: isSand ? 8 : -8 }}
            transition={{ duration: 0.5, delay: index * 0.08 + 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`w-11 h-11 rounded-xl flex items-center justify-center mb-4 ${iconBg}`}
          >
            <Icon size={20} />
          </motion.div>
        )}
        <h3 className="font-display text-navy text-xl sm:text-2xl font-bold leading-tight group-hover:text-teal transition-colors mb-2">
          {title}
        </h3>
        <div className="space-y-3">
          {(Array.isArray(description) ? description : [description]).map((para, i) => (
            <p key={i} className="text-slate-700 text-[15px] leading-relaxed font-normal">
              {para}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const FaqItem = ({ item, isOpen, onToggle }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    className="rounded-2xl border border-navy/10 bg-white overflow-hidden hover:border-teal/40 transition-colors duration-300"
  >
    <button
      onClick={onToggle}
      className="w-full flex items-center justify-between gap-4 text-left px-6 py-5 cursor-pointer"
    >
      <span className="font-display text-navy font-semibold text-[15px] sm:text-base">
        {item.q}
      </span>
      <ChevronDown
        size={18}
        className={`shrink-0 text-teal transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
      />
    </button>
    <motion.div
      initial={false}
      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden"
    >
      <p className="px-6 pb-5 text-slate-700 text-[15px] leading-relaxed font-normal">
        {item.a}
      </p>
    </motion.div>
  </motion.div>
);

const WhatIsCorporateEmployeeTransportation = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-soft text-navy overflow-hidden">
      <Seo
        title="What Is Corporate Employee Transportation? Complete Guide"
        description="Learn what corporate employee transportation is, its benefits, models, safety measures, & how smart technology improves employee travel, efficiency, & safety."
        canonical="https://accivatravels.com/what-is-corporate-employee-transportation/"
      />
      <script type="application/ld+json">{JSON.stringify(JSON_LD)}</script>

      {/* ========================================================================= */}
      {/* JOURNAL INTRO — SAME HERO AS THE BLOG LANDING PAGE                    */}
      {/* ========================================================================= */}
      <section
        className="pt-28 sm:pt-32 pb-4 md:pb-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=2000&q=85')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-slate-300/80 backdrop-blur-[1px]" />

        <div className="container-px relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-navy mb-6 uppercase tracking-wider">
            <NavLink to="/" className="hover:text-teal transition-colors text-navy/70 font-bold">
              Home
            </NavLink>
            <ChevronRight size={12} />
            <NavLink to="/blog" className="hover:text-teal transition-colors text-navy/70 font-bold">
              The Journal
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Employee Transportation</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="eyebrow text-teal">Mobility Intelligence & Insights</span>

              <h2 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                Stories, Tech & <br />
                <span className="italic text-teal font-normal">Fleet Innovation.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="max-w-md text-navy/90 text-[15px] font-medium leading-relaxed pb-2"
            >
              Explore key industry insights on corporate employee transportation, AI dispatch
              telematics, EV sustainability, and mobility benchmarks across India.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ARTICLE HEADER                                                        */}
      {/* ========================================================================= */}
      <article className="py-14 md:py-20 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto"
          >
            <NavLink
              to="/blog"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider font-semibold text-navy/60 hover:text-teal transition-colors mb-6"
            >
              <ArrowLeft size={14} />
              <span>Back to The Journal</span>
            </NavLink>

            <div className="flex items-center gap-4 text-xs font-mono text-navy/50 mb-4">
              <span className="px-3 py-1 rounded-full bg-teal/10 text-teal text-[11px] font-bold uppercase">
                Corporate Mobility
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={12} /> September 8, 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} /> 9 min read
              </span>
            </div>

            <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight">
              What Is Corporate Employee Transportation?{" "}
              <span className="italic text-teal font-normal">A Complete Guide</span>
            </h1>

            <p className="mt-6 text-slate-700 text-[15px] font-normal leading-relaxed">
              Learn what corporate employee transportation is, its benefits, models, safety
              measures, and how smart technology improves employee travel, efficiency, and
              safety.
            </p>
          </motion.div>

          {/* Featured Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ scale: 1.01 }}
            className="max-w-5xl mx-auto mt-10 rounded-3xl overflow-hidden shadow-xl border border-navy/10 bg-white group"
          >
            <AnimatedImage
              src={HERO_IMAGE}
              alt="Corporate employees boarding a managed shuttle for their daily commute"
              eager
              className="w-full h-auto max-h-[420px] object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* ===================================================================== */}
          {/* ARTICLE BODY                                                         */}
          {/* ===================================================================== */}
          <div className="max-w-5xl mx-auto mt-14 space-y-16">
            {/* 1. What Is Corporate Employee Transportation */}
            <section>
              <SectionHeading title="What Is Corporate Employee Transportation?" />
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>
                  Corporate employee transportation is a structured mobility service that helps
                  businesses transport employees between their homes, designated pickup points,
                  and workplaces. Instead of relying entirely on individual travel arrangements,
                  companies can use managed cabs, shuttles, buses, route-based services, and
                  technology platforms to coordinate employee travel.
                </p>
                <p>
                  A well-designed employee transportation program is more than simply arranging
                  vehicles. It combines route planning, scheduling, driver management, safety
                  procedures, technology, compliance, reporting, and cost control. For
                  organizations operating multiple shifts or supporting employees across
                  different locations, a reliable transportation system can become an important
                  part of workforce management.
                </p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-sm"
                >
                  {/* Left edge — gradient blend of blue and beige */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-teal to-sand" />

                  {/* Corner quarter-circle round accent */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-sand/25 rounded-bl-full pointer-events-none origin-top-right"
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                  {/* Same-side accent, lower down */}
                  <motion.div
                    className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-teal/15 rounded-tl-full pointer-events-none origin-bottom-right"
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <p className="relative z-10 text-slate-700 text-[15px] font-normal leading-relaxed">
                    Acciva Travels provides reliable and technology-enabled corporate employee
                    transportation solutions designed to support businesses with safe,
                    efficient, and well-managed employee mobility. With services focused on
                    transportation management, route planning, safety, fleet coordination, and
                    operational efficiency, Acciva Travels helps organizations create a smoother
                    and more dependable commuting experience for their employees.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* 2. Why Has Employee Transportation Become a Corporate Strategy */}
            <section>
              <SectionHeading title="Why Has Employee Transportation Become a Corporate Strategy?" />
              <div className="grid sm:grid-cols-2 gap-6">
                <ArticleCard
                  index={0}
                  direction="x"
                  border="teal"
                  title="Does the daily commute affect employee satisfaction?"
                  description={[
                    "Yes. Long, unpredictable, or uncomfortable commutes can affect employee experience and productivity. When employees have reliable transportation options, they can spend less time worrying about traffic, parking, vehicle availability, and late-night travel.",
                    "For employers, transportation can also support punctuality and attendance. A predictable employee transportation service allows companies to coordinate travel around office hours and shift schedules rather than leaving every employee to manage their commute independently.",
                  ]}
                />
                <ArticleCard
                  index={1}
                  direction="x"
                  border="sand"
                  title="How does transportation support return-to-office strategies?"
                  description={[
                    <>
                      Return-to-office policies can create practical challenges when employees
                      live across different areas. Providing organized{" "}
                      <strong>corporate transportation</strong> can make office commuting more
                      convenient while helping businesses manage changing attendance patterns.
                    </>,
                    "The important point is flexibility. Hybrid employees may not travel to the office every day, so companies need transportation plans that can adapt to changing demand rather than paying for unused capacity.",
                  ]}
                />
              </div>
            </section>

            {/* 3. Main Corporate Employee Transportation Models */}
            <section>
              <SectionHeading title="What Are the Main Corporate Employee Transportation Models?" />
              <div className="grid sm:grid-cols-2 gap-6">
                {MODELS.map((model, i) => (
                  <ArticleCard
                    key={model.title}
                    index={i}
                    icon={model.icon}
                    title={model.title}
                    description={model.description}
                  />
                ))}
              </div>
            </section>

            {/* 4. AI, IoT, Telematics */}
            <section>
              <SectionHeading title="How Do AI, IoT, and Telematics Improve Employee Transportation?" />
              <div className="grid sm:grid-cols-2 gap-6">
                {TECH_POINTS.map((point, i) => (
                  <ArticleCard
                    key={point.title}
                    index={i}
                    icon={point.icon}
                    title={point.title}
                    description={point.description}
                  />
                ))}
              </div>
            </section>

            {/* 5. Safety Measures */}
            <section>
              <SectionHeading
                eyebrow="Safety & Compliance"
                title="What Safety Measures Should Corporate Transportation Programs Include?"
              />
              <div className="grid sm:grid-cols-3 gap-6">
                {SAFETY_POINTS.map((point, i) => (
                  <ArticleCard
                    key={point.title}
                    index={i}
                    icon={point.icon}
                    title={point.title}
                    description={point.description}
                  />
                ))}
              </div>
            </section>

            {/* 6. Choosing a Provider */}
            <section>
              <SectionHeading title="How Should a Company Choose an Employee Transportation Provider?" />
              <div className="grid sm:grid-cols-3 gap-6">
                {PROVIDER_POINTS.map((point, i) => (
                  <ArticleCard
                    key={point.title}
                    index={i}
                    icon={point.icon}
                    title={point.title}
                    description={point.description}
                  />
                ))}
              </div>
            </section>

            {/* 7. Implementation */}
            <section>
              <SectionHeading title="How Can a Business Implement Corporate Employee Transportation?" />
              <div className="grid sm:grid-cols-3 gap-6">
                {IMPLEMENTATION_STEPS.map((step, i) => (
                  <motion.div
                    key={step.n}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -6, transition: { duration: 0.3 } }}
                    className="relative overflow-hidden rounded-3xl bg-white border border-navy/10 hover:border-teal/40 hover:shadow-[0_25px_60px_rgba(38,55,74,0.12)] transition-[border-color,box-shadow] duration-500 p-6 sm:p-7 shadow-[0_10px_35px_rgba(38,55,74,0.05)] group h-full"
                  >
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

                    <div className="relative z-10">
                      <span className="font-display text-3xl font-bold text-teal/30">
                        {step.n}
                      </span>
                      <h3 className="font-display text-navy text-xl sm:text-2xl font-bold leading-tight group-hover:text-teal transition-colors mt-3 mb-2">
                        {step.title}
                      </h3>
                      <div className="space-y-3">
                        {step.description.map((para, di) => (
                          <p
                            key={di}
                            className="text-slate-700 text-[15px] leading-relaxed font-normal"
                          >
                            {para}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* 8. Is it worth it + Conclusion */}
            <section>
              <SectionHeading title="Is Corporate Employee Transportation Worth the Investment?" />
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>
                  For organizations with large workforces, multiple shifts, distributed
                  employees, or significant commuting requirements, <strong>corporate employee
                  transportation</strong> can become an important operational service rather
                  than simply an employee benefit.
                </p>
                <p>
                  The right model depends on workforce size, employee locations, office
                  schedules, budget, safety requirements, and hybrid-work patterns. Technology
                  can improve visibility and route efficiency, while strong policies and SLAs
                  help maintain service quality.
                </p>
                <p>
                  Ultimately, effective <strong>corporate transportation</strong> services
                  should balance three priorities: employee experience, operational efficiency,
                  and business cost control. When these elements work together, employee
                  transportation can evolve from a routine administrative expense into a
                  strategic mobility program.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="mt-8 rounded-3xl bg-teal/5 border border-teal/20 p-7 sm:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-56 h-56 bg-teal/10 rounded-bl-full pointer-events-none" />
                <div className="relative z-10">
                  <h3 className="font-display text-navy text-xl sm:text-2xl font-bold mb-3">
                    Conclusion
                  </h3>
                  <p className="text-slate-700 text-[15px] font-normal leading-relaxed">
                    Acciva Travels helps businesses improve corporate employee transportation by
                    ensuring employee safety, commuting convenience, operational efficiency, and
                    cost control. With flexible routes, smart technology, and reliable transport
                    management, companies can build a safer and more efficient workplace mobility
                    system.
                  </p>
                  <NavLink
                    to="/contact"
                    className="mt-6 inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
                  >
                    <span>Talk to Our Team</span>
                    <ArrowUpRight size={16} />
                  </NavLink>
                </div>
              </motion.div>
            </section>

            {/* FAQ */}
            <section>
              <SectionHeading eyebrow="Common Questions" title="Frequently Asked Questions" />
              <div className="space-y-4">
                {FAQS.map((item, i) => (
                  <FaqItem
                    key={item.q}
                    item={item}
                    isOpen={openFaq === i}
                    onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                  />
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </div>
  );
};

export default WhatIsCorporateEmployeeTransportation;
