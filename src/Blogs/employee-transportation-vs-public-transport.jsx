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
  ShieldCheck,
  Wallet,
  MapPin,
  Route,
  Calculator,
} from "lucide-react";
import AnimatedImage from "../components/AnimatedImage";
import Seo from "../components/Seo";
import HERO_IMAGE from "../assets/Employee Transportation.png";

const CORPORATE_ADVANTAGES = [
  {
    icon: Route,
    title: "Can Corporate Shuttles Improve Productivity and Punctuality?",
    description: [
      "One of the biggest advantages of a corporate shuttle is a more direct commute. Instead of employees planning multiple connections between buses, trains, or other forms of transit, company transportation can be organized around workplace locations and employee requirements.",
      "This can make arrival times more predictable and reduce time wasted during transfers.",
      "Some corporate transportation services can also provide amenities such as Wi-Fi, allowing employees to use their commuting time productively when appropriate. Even when employees simply use the journey to relax, arriving at work less stressed can contribute to a better start to the day.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Is Corporate Transportation Safer?",
    description: [
      "Safety is another major consideration, particularly for employees travelling early in the morning or late at night.",
      "Professional corporate transportation programs can incorporate features such as GPS tracking, verified drivers, trip monitoring, and defined pickup and drop-off procedures. Businesses can also create specific transportation policies for employees working night shifts.",
      "For organizations with employees who finish work late, dedicated transportation can provide an additional layer of security compared with waiting for or changing between public transport services at night.",
    ],
  },
];

const PUBLIC_TRANSPORT_BENEFITS = [
  {
    icon: Wallet,
    title: "Is Public Transport More Affordable?",
    description: [
      "Public transportation can be an economical option, particularly when employees live close to established bus, metro, or railway networks.",
      "From an employer's perspective, supporting public transport may also eliminate the need to operate a dedicated fleet. Companies do not necessarily have to manage vehicles, drivers, maintenance, fuel, scheduling, and other operational requirements associated with transportation.",
      "For employees, individual public transit fares can also be relatively inexpensive, depending on the location and available services.",
    ],
  },
  {
    icon: MapPin,
    title: "Does Public Transport Have Better Coverage?",
    description: [
      "Public transportation networks can cover large areas and provide access to established transit hubs. This makes them useful for employees who live in different parts of a city.",
      "However, broad coverage does not always mean a convenient door-to-door commute. Employees may still need to walk significant distances, change buses or trains, or arrange separate transportation for the beginning or end of their journey.",
    ],
  },
];

const COMMUTER_ROI_POINTS = [
  "Number of employees using the service",
  "Average vehicle occupancy",
  "Number of operating days",
  "Route distance and travel time",
  "Driver and vehicle costs",
  "Fuel and maintenance expenses",
  "Technology and monitoring costs",
  "Employee utilization and satisfaction",
];

const FAQS = [
  {
    q: "What is the primary difference between a corporate shuttle and public transport?",
    a: "Corporate shuttles are designed around an organization's employees, routes, and working hours, offering a more direct and controlled commuting experience. Public transport serves the broader population and is generally more economical, but employees may experience transfers, delays, and overcrowding.",
  },
  {
    q: "Is company-provided transportation cost-effective for hybrid offices?",
    a: "Yes. Businesses can use attendance data, route optimization, and smart scheduling to operate transportation only when there is sufficient employee demand. This can make company transportation more practical for employees who work from the office only a few days each week.",
  },
  {
    q: "What does first-mile and last-mile connectivity mean?",
    a: "It refers to the beginning and final portions of a commute. For example, an employee may need transportation from home to a metro station or from a railway station to the office. Corporate shuttles can help connect these gaps.",
  },
  {
    q: "How can businesses benefit from commuter programs?",
    a: "Depending on local regulations, eligible commuter programs may provide tax advantages or other financial benefits. Companies should check current rules in their jurisdiction before designing such a program.",
  },
  {
    q: "Which transportation option is safer for late-night shifts?",
    a: "Dedicated corporate transportation can offer additional safety measures such as GPS tracking, verified drivers, trip monitoring, and emergency procedures. These features can make it a strong option for employees travelling during late hours, although actual safety depends on how the service is designed and operated.",
  },
];

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      "@id": "https://www.accivatravels.com/employee-transportation-vs-public-transport#article",
      headline: "Employee Transportation vs Public Transport: Which Is Better?",
      description:
        "Compare employee transportation & public transport for cost, safety, reliability, and convenience to choose the best commuting solution for your business needs.",
      url: "https://www.accivatravels.com/employee-transportation-vs-public-transport",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://www.accivatravels.com/employee-transportation-vs-public-transport",
      },
      author: { "@type": "Organization", name: "Acciva Travels" },
      publisher: {
        "@type": "Organization",
        name: "Acciva Travels",
        url: "https://www.accivatravels.com",
      },
      articleSection: "Employee Transportation",
      keywords: [
        "employee transportation",
        "corporate employee transportation",
        "employee transportation vs public transport",
        "corporate shuttle",
        "public transportation",
        "employee commute solutions",
        "first-mile last-mile connectivity",
      ],
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.accivatravels.com/employee-transportation-vs-public-transport#faq",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@type": "TravelAgency",
      "@id": "https://www.accivatravels.com/#organization",
      name: "Acciva Travels",
      url: "https://www.accivatravels.com",
      email: "info@accivatravels.com",
      telephone: ["+91 90350 12166", "+91 80 2354 1166"],
      address: {
        "@type": "PostalAddress",
        streetAddress: "#52, 1 Main Road, Anand Nagar, Hebbal",
        addressLocality: "Bengaluru",
        postalCode: "560024",
        addressCountry: "IN",
      },
    },
  ],
};

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
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-teal/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

      {decorated && (
        <motion.div
          className={`absolute top-0 right-0 w-24 h-24 sm:w-28 sm:h-28 rounded-bl-full pointer-events-none origin-top-right ${accentBg}`}
          initial={{ scale: 0.4, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.9, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
        />
      )}

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

const EmployeeTransportationVsPublicTransport = () => {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <div className="bg-soft text-navy overflow-hidden">
      <Seo
        title="Employee Transportation vs Public Transport: Which Is Better?"
        description="Compare employee transportation & public transport for cost, safety, reliability, and convenience to choose the best commuting solution for your business needs."
        canonical="https://www.accivatravels.com/employee-transportation-vs-public-transport"
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
                Employee Transportation
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar size={12} /> September 8, 2026
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock size={12} /> 8 min read
              </span>
            </div>

            <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight">
              Employee Transportation vs. Public Transport:{" "}
              <span className="italic text-teal font-normal">Which Is Better?</span>
            </h1>

            <p className="mt-6 text-slate-700 text-[15px] font-normal leading-relaxed">
              Choosing the right way to get employees to and from work has become an important
              business decision. Long commutes, traffic congestion, unpredictable public
              transport, and growing expectations around workplace safety can all affect
              employee experience and productivity. This is why corporate employee
              transportation is becoming an increasingly practical option for businesses that
              want to make commuting easier and more reliable.
            </p>
            <p className="mt-4 text-slate-700 text-[15px] font-normal leading-relaxed">
              But is company-provided transportation actually better than public transport? The
              answer depends on factors such as cost, employee schedules, workplace location,
              safety requirements, and the type of workforce a company has.
            </p>
            <p className="mt-4 text-slate-700 text-[15px] font-normal leading-relaxed">
              Let's compare both options and see which approach makes the most sense for modern
              businesses.
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
              alt="Employees comparing a corporate shuttle with a public bus for their daily commute"
              eager
              className="w-full h-auto max-h-[420px] object-contain transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>

          {/* ===================================================================== */}
          {/* ARTICLE BODY                                                         */}
          {/* ===================================================================== */}
          <div className="max-w-5xl mx-auto mt-14 space-y-16">
            {/* 1. Why Does Employee Transportation Matter */}
            <section>
              <SectionHeading title="Why Does Employee Transportation Matter for Businesses?" />
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>
                  A daily commute can have a direct impact on how employees begin and end their
                  working day. Spending long hours in traffic or standing in an overcrowded bus
                  or train can contribute to fatigue and frustration.
                </p>
                <p>
                  For businesses operating in busy metropolitan areas, commuting can also create
                  punctuality problems. Delays, traffic jams, missed connections, and limited
                  public transport options can result in employees arriving late or feeling
                  exhausted before their workday even begins.
                </p>
                <p>
                  A well-planned employee transportation program can address many of these
                  issues by providing employees with a more predictable journey between
                  convenient pickup points and the workplace.
                </p>
              </div>
            </section>

            {/* 2. Advantages of Corporate Transportation */}
            <section>
              <SectionHeading title="What Are the Advantages of Corporate Transportation?" />
              <div className="grid sm:grid-cols-2 gap-6">
                {CORPORATE_ADVANTAGES.map((point, i) => (
                  <ArticleCard
                    key={point.title}
                    index={i}
                    direction="x"
                    border={i === 0 ? "teal" : "sand"}
                    icon={point.icon}
                    title={point.title}
                    description={point.description}
                  />
                ))}
              </div>
            </section>

            {/* 3. Benefits of Public Transportation */}
            <section>
              <SectionHeading title="What Are the Benefits of Public Transportation?" />
              <div className="grid sm:grid-cols-2 gap-6">
                {PUBLIC_TRANSPORT_BENEFITS.map((point, i) => (
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

            {/* 4. Challenges of Public Transportation */}
            <section>
              <SectionHeading
                eyebrow="Reliability & Comfort"
                title="What Are the Challenges of Public Transportation for Employees?"
              />
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>
                  Reliability can become a major issue when employees depend entirely on public
                  transportation.
                </p>
                <p>
                  Bus and train delays can affect arrival times, while service interruptions can
                  create unexpected commuting problems. During peak hours, overcrowding can also
                  make the journey uncomfortable and stressful.
                </p>
                <p>
                  For employees travelling long distances, several transfers can add
                  considerable time to the daily commute. Over weeks and months, this can have a
                  noticeable effect on employee satisfaction.
                </p>
                <p>
                  This does not mean public transportation is a poor choice. Rather, it shows
                  why businesses should consider the complete commuting experience instead of
                  looking only at the price of an individual trip.
                </p>
              </div>
            </section>

            {/* 5. Hybrid Employees */}
            <section>
              <SectionHeading title="How Can Companies Support Hybrid Employees?" />
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>
                  Hybrid working has changed employee transportation requirements. A company may
                  not need to transport every employee every day when some employees only come
                  into the office two or three days a week.
                </p>
                <p>
                  Instead of operating fixed routes regardless of demand, businesses can use
                  scheduling and route-optimization technology to adjust transportation according
                  to office attendance.
                </p>
                <p>
                  This approach can help companies avoid running underutilized vehicles while
                  still providing transportation when employees actually need it.
                </p>
              </div>
            </section>

            {/* 6. First-mile / Last-mile */}
            <section>
              <SectionHeading title="What Is First-Mile and Last-Mile Connectivity?" />
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>
                  First-mile and last-mile connectivity describes the beginning and end portions
                  of an employee's commute.
                </p>
                <p>
                  For example, an employee may be able to reach a major railway or metro station
                  easily but have difficulty travelling from home to that station. Similarly, an
                  employee may reach a transit hub near the office but still need another mode of
                  transportation to complete the journey.
                </p>
                <p>Corporate shuttles can help bridge these gaps.</p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 shadow-sm"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-linear-to-b from-teal to-sand" />
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 sm:w-40 sm:h-40 bg-sand/25 rounded-bl-full pointer-events-none origin-top-right"
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-24 h-24 sm:w-28 sm:h-28 bg-teal/15 rounded-tl-full pointer-events-none origin-bottom-right"
                    initial={{ scale: 0.4, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                  <p className="relative z-10 text-slate-700 text-[15px] font-normal leading-relaxed">
                    Rather than replacing public transportation entirely, companies can use
                    targeted employee transportation routes to connect employees with major
                    transit hubs. This creates a hybrid mobility model that combines the
                    strengths of both systems.
                  </p>
                </motion.div>
              </div>
            </section>

            {/* 7. Financial Benefits of Commuter Programs */}
            <section>
              <SectionHeading title="Are There Financial Benefits to Commuter Programs?" />
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>
                  Transportation costs should be evaluated from both the employee and employer
                  perspective.
                </p>
                <p>
                  Depending on the country and applicable regulations, commuter programs may
                  provide tax-related benefits, such as eligible pre-tax transportation benefits
                  or transit programs. Businesses should confirm the applicable rules with a
                  qualified tax professional because these benefits vary by location.
                </p>
                <p>
                  More importantly, companies should consider the overall business impact of
                  transportation. The true cost is not simply the price of a vehicle or transit
                  pass. It can also include lost working time, employee turnover, absenteeism,
                  administrative effort, and employee satisfaction.
                </p>
              </div>
            </section>

            {/* 8. Calculating Transportation ROI */}
            <section>
              <SectionHeading
                eyebrow="Cost & Utilization"
                title="How Should Businesses Calculate Transportation ROI?"
              />
              <div className="text-slate-700 text-[15px] font-normal leading-relaxed mb-6">
                <p>
                  A useful way to evaluate <strong>corporate employee transportation</strong> is
                  to calculate cost per occupied seat rather than simply looking at the total
                  cost of operating a vehicle. Businesses can consider:
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-3xl bg-white border border-navy/10 shadow-[0_10px_35px_rgba(38,55,74,0.05)] p-6 sm:p-8"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-transparent via-teal/50 to-transparent" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center bg-teal/10 text-teal">
                    <Calculator size={20} />
                  </div>
                  <h3 className="font-display text-navy text-xl sm:text-2xl font-bold">
                    Cost-Per-Seat Factors
                  </h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {COMMUTER_ROI_POINTS.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-slate-700 text-[15px] leading-relaxed"
                    >
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
                <p className="relative z-10 text-slate-700 text-[15px] leading-relaxed font-normal mt-6">
                  This provides a more realistic picture of whether a transportation program is
                  delivering value.
                </p>
              </motion.div>
            </section>

            {/* 9. Hybrid Model */}
            <section>
              <SectionHeading title="Is a Hybrid Transportation Model Better?" />
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>
                  For many businesses, the choice does not have to be either corporate
                  transportation or public transportation.
                </p>
                <p>
                  A hybrid model can combine public transit subsidies with targeted corporate
                  shuttle routes. Employees who have convenient access to buses, trains, or metro
                  services can continue using them, while employees facing difficult first-mile
                  or last-mile journeys can use company transportation.
                </p>
                <p>
                  This can be especially useful for hybrid offices, large campuses, businesses
                  operating multiple shifts, and organizations with employees travelling outside
                  normal public transport hours.
                </p>
              </div>
            </section>

            {/* 10. So Which Is Better + Conclusion */}
            <section>
              <SectionHeading title="So, Which Is Better: Employee Transportation or Public Transport?" />
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                <p>There is no single answer for every company.</p>
                <p>
                  <strong>Public transportation</strong> can be a cost-effective solution when
                  employees live close to reliable transit networks and have convenient
                  connections to the workplace.
                </p>
                <p>
                  <strong>Corporate employee transportation</strong>, on the other hand, can
                  provide greater control over routes, schedules, safety procedures, and employee
                  experience. It can be particularly valuable when employees face long commutes,
                  multiple transfers, unreliable services, or late-night travel requirements.
                </p>
                <p>
                  For many modern businesses, the strongest solution may be a combination of
                  both. By understanding employee travel patterns and using data to plan routes,
                  companies can build a transportation strategy that balances convenience,
                  safety, utilization, and cost.
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
                    Choosing between public transport and corporate employee transportation
                    depends on the needs of the workforce, workplace location, budget, and
                    commuting patterns. Public transport can be an affordable choice for
                    employees with convenient and reliable connections, while corporate
                    transportation offers greater flexibility, safety, comfort, and control over
                    routes and schedules.
                  </p>
                  <p className="text-slate-700 text-[15px] font-normal leading-relaxed mt-4">
                    For many businesses, a combination of both can be the most effective
                    approach. By using corporate shuttles for key routes, first-mile and
                    last-mile connectivity, and late-night shifts while supporting public
                    transportation where practical, companies can create a more reliable and
                    employee-friendly commuting experience.
                  </p>
                  <p className="text-slate-700 text-[15px] font-normal leading-relaxed mt-4">
                    Ultimately, the right transportation strategy is not just about reducing
                    travel costs. It is about helping employees reach work safely, comfortably,
                    and on time while creating measurable value for the business.
                  </p>
                  <p className="text-slate-700 text-[15px] font-normal leading-relaxed mt-4">
                    Acciva Travels offers professionally managed corporate employee
                    transportation solutions that help businesses provide safe, reliable, and
                    convenient daily commuting for their workforce. With services covering route
                    planning, fleet coordination, employee pickup and drop, and
                    technology-enabled transportation management, Acciva Travels helps
                    organizations streamline employee mobility while improving operational
                    efficiency.
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

export default EmployeeTransportationVsPublicTransport;
