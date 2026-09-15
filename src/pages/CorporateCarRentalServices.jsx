import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, ArrowUpRight, MessageCircle } from "lucide-react";
import Seo from "../components/Seo";
import RichText from "../components/RichText";
import AnimatedImage from "../components/AnimatedImage";
import Magnetic from "../components/Magnetic";
import SmartLink from "../components/SmartLink";
import { usePageContent } from "../data/useContent";
import { resolveIcon } from "../data/iconMap";

const CCR_DEFAULTS = {
  heroEyebrow: "Corporate Mobility",
  heroTitleMain: "Corporate Car Rental",
  heroTitleAccent: "Services in Bangalore",
  heroBackgroundImage:
    "https://images.pexels.com/photos/34985962/pexels-photo-34985962.jpeg?auto=compress&cs=tinysrgb&w=1920",

  introEyebrow: "Introduction",
  introParagraphs: [
    "For a business, transportation is often one of those things that needs to work quietly in the background. An employee needs to reach a meeting on time, a client needs to be picked up from the airport, a team needs transportation for an event, or someone needs to travel to another city for work.",
    "When these journeys happen regularly, arranging individual cabs for every trip can become time-consuming for HR and administration teams. This is where a corporate car rental service can make business travel easier to organise.",
    "Acciva Travels provides corporate car rental and transportation services in Bangalore for companies that need vehicles for employees, executives, clients, business visitors, and official travel.",
  ],
  introImage:
    "https://di-uploads-pod1.s3.amazonaws.com/depaulachevy/uploads/2015/08/rental-car-lot-1024x683.jpg",

  reqEyebrow: "Business Requirements",
  reqHeadingMain: "Corporate Car Rental for Different",
  reqHeadingAccent: "Business Requirements",
  reqParagraphs: [
    "There is no single type of corporate travel.",
    "A company may need a car for an employee travelling to a meeting in the city, a vehicle for an executive for an entire day, airport transportation for a visiting client, or cars for employees attending a corporate event.",
    "Some requirements are occasional, while others happen every day.",
    "Acciva Travels works around these different requirements, allowing businesses to arrange transportation based on the type, duration, and frequency of their travel.",
    "Depending on the requirement, businesses can consider options such as point-to-point travel, hourly rentals, full-day bookings, airport transfers, employee transportation, and outstation journeys.",
  ],
  reqOptions: [
    { icon: "Navigation", label: "Point-to-point travel" },
    { icon: "Clock", label: "Hourly rentals" },
    { icon: "Gauge", label: "Full-day bookings" },
    { icon: "Plane", label: "Airport transfers" },
    { icon: "Users", label: "Employee transportation" },
    { icon: "Route", label: "Outstation journeys" },
  ],

  cityEyebrow: "Around the City",
  cityHeadingMain: "Business Travel Across",
  cityHeadingAccent: "Bangalore",
  cityParagraphs: [
    "Bangalore's business landscape means that employees and professionals often have to travel between different parts of the city for work.",
    "A meeting in one part of the city can be followed by another appointment somewhere else. Employees may also need to travel between offices, client locations, hotels, business centres, and event venues.",
    "For these situations, booking a vehicle for a defined period can be more practical than arranging a separate cab for every journey.",
    "A corporate car rental can give an employee access to transportation throughout their scheduled business travel, particularly when multiple stops are involved.",
  ],
  cityImage:
    "https://www.getgoing.com/wp-content/uploads/2026/06/woman-working-from-laptop-1.jpg",

  airportEyebrow: "Airport Transfers",
  airportHeadingMain: "Airport Transfers for Corporate",
  airportHeadingAccent: "Travel",
  airportParagraphs: [
    "Bangalore's airport is an important part of business travel, with employees, executives, clients, and other business visitors regularly travelling into and out of the city.",
    "An airport transfer may be a simple pickup from the airport to an office or hotel. In other cases, a company may need transportation for a visiting executive who has several meetings scheduled during their stay.",
    "Acciva Travels can arrange corporate airport transfers based on the travel schedule provided by the company.",
    "For businesses, arranging these journeys in advance also means the employee or visitor does not have to figure out transportation immediately after landing.",
  ],
  airportImage:
    "https://media.istockphoto.com/id/1195019183/photo/shuttle-bus-brought-people-to-the-airport-for-the-flight.jpg?s=612x612&w=0&k=20&c=K-62TWK0Y8w9lIWRnF3rrdggS47lHPn1DvOfLIbkBjA=",

  employeeEyebrow: "Employee Travel",
  employeeHeadingMain: "Transportation for",
  employeeHeadingAccent: "Employees",
  employeeParagraphs: [
    "Employee transportation can become a regular requirement for companies with teams working from offices, project locations, or different facilities.",
    "Depending on the organisation, transportation may be required for daily commuting, specific shifts, meetings between locations, training programmes, or temporary work assignments.",
    "Acciva Travels provides employee transportation services that can be discussed according to the company's actual requirements.",
    "For recurring travel, businesses can discuss schedules, locations, passenger requirements, and frequency with the Acciva Travels team rather than treating every journey as an individual booking.",
  ],
  employeeSteps: [
    { step: "01", title: "Daily Commuting", icon: "Clock" },
    { step: "02", title: "Specific Shifts", icon: "RefreshCcw" },
    { step: "03", title: "Training Programmes", icon: "GraduationCap" },
    { step: "04", title: "Temporary Work Assignments", icon: "Briefcase" },
  ],

  meetingsEyebrow: "Meetings & Client Visits",
  meetingsHeadingMain: "Cars for Meetings and Client",
  meetingsHeadingAccent: "Visits",
  meetingsParagraphs: [
    "Business meetings often require employees to move between several locations within a limited amount of time.",
    "A sales representative visiting multiple clients, an executive attending meetings throughout the day, or a company representative travelling for a business appointment may need transportation that stays available for the duration of their schedule.",
    "For such requirements, businesses can consider hourly or full-day car rentals instead of arranging individual point-to-point rides.",
    "This can be particularly useful when the day's itinerary is not limited to one destination.",
  ],

  eventsEyebrow: "Events & Conferences",
  eventsHeadingMain: "Corporate Events, Conferences and Business",
  eventsHeadingAccent: "Programmes",
  eventsParagraphs: [
    "Transportation requirements can increase significantly when a company is organising an event.",
    "Conferences, exhibitions, training programmes, seminars, corporate meetings, and other business events may involve employees, guests, speakers, or clients travelling between airports, hotels, offices, and event venues.",
    "Rather than managing every journey separately, companies can plan their transportation requirements in advance and coordinate vehicles around the event schedule.",
    "Acciva Travels can support businesses with transportation arrangements for such corporate programmes based on the number of passengers, locations, timing, and duration involved.",
  ],
  eventsChips: [
    { icon: "Landmark", label: "Conferences" },
    { icon: "Image", label: "Exhibitions" },
    { icon: "GraduationCap", label: "Training programmes" },
    { icon: "Users", label: "Seminars" },
    { icon: "Briefcase", label: "Corporate meetings" },
    { icon: "Sparkles", label: "Business events" },
  ],

  outstationEyebrow: "Outstation Travel",
  outstationHeadingMain: "Outstation Car Rental for Business",
  outstationHeadingAccent: "Travel",
  outstationParagraphs: [
    "Corporate travel is not always limited to Bangalore.",
    "Employees and business representatives may need to travel outside the city for client meetings, site visits, inspections, training, conferences, or other official requirements.",
    "An outstation corporate car rental provides businesses with an option for arranging these journeys without relying on employees to drive themselves.",
    "The requirement can vary from a single-day trip to a longer journey. Businesses can discuss the destination, itinerary, duration, and vehicle requirement with Acciva Travels before making the booking.",
  ],
  outstationImage:
    "https://images.pexels.com/photos/2464531/pexels-photo-2464531.jpeg?auto=compress&cs=tinysrgb&w=1200",

  rentalsEyebrow: "Flexible Arrangements",
  rentalsHeadingMain: "Short-Term and Long-Term Corporate",
  rentalsHeadingAccent: "Rentals",
  rentalsParagraphs: [
    "Corporate transportation requirements can change from one company to another.",
    "A startup may need vehicles occasionally for meetings and airport transfers. A larger organisation may have recurring employee transportation requirements. Another company may need vehicles for a specific project or event lasting several weeks.",
    "For this reason, corporate car rental does not necessarily have to mean a fixed long-term arrangement.",
    "Acciva Travels can cater to different types of requirements, including:",
  ],
  rentalsChips: [
    { icon: "Clock", label: "Hourly car rentals" },
    { icon: "Gauge", label: "Half-day and full-day business travel" },
    { icon: "Navigation", label: "Point-to-point transportation" },
    { icon: "Plane", label: "Airport transfers" },
    { icon: "Users", label: "Employee transportation" },
    { icon: "Building2", label: "Corporate events and conferences" },
    { icon: "Route", label: "Outstation business travel" },
    { icon: "RefreshCcw", label: "Recurring transportation requirements" },
    { icon: "Briefcase", label: "Longer-term corporate rental arrangements" },
  ],
  rentalsClosing:
    "The right arrangement depends on how frequently the company needs transportation and how its employees or business visitors typically travel.",

  whyUseEyebrow: "Why It Matters",
  whyUseHeadingMain: "Why Businesses Use Corporate Car Rental",
  whyUseHeadingAccent: "Services",
  whyUseParagraphs: [
    "For HR and administration teams, arranging transportation is often about more than simply finding a car.",
    "There may be multiple employees travelling at different times, visiting clients arriving on different flights, meetings spread across several locations, or events requiring transportation on a particular schedule.",
    "Working with a dedicated transportation provider can give the company a single point of contact for these requirements.",
    "It can also reduce the need for employees to make separate travel arrangements for every business trip.",
    "For recurring requirements, having an established transportation partner can make it easier to communicate schedules and requirements and organise future journeys.",
  ],

  whyAccivaEyebrow: "Distinct Advantage",
  whyAccivaHeadingMain: "Why",
  whyAccivaHeadingAccent: "Acciva Travels?",
  whyAccivaParagraphs: [
    "Acciva Travels provides transportation services for businesses that need practical solutions for their day-to-day and occasional travel requirements in Bangalore.",
    "The focus is not limited to one particular type of corporate journey. A company may approach Acciva Travels for a single airport transfer, a full-day business requirement, employee transportation, an event, or an outstation trip.",
    "The team can understand the nature of the requirement and help arrange transportation accordingly.",
    "For companies, this means they can have a transportation provider they can approach for different types of business travel instead of finding a separate option for every situation.",
  ],
  whyAccivaImage:
    "https://media.istockphoto.com/id/182913362/photo/travel-coaches-at-tourist-destination-parked-in-a-row.jpg?s=612x612&w=0&k=20&c=WydkBjrqbYQKAITmQ9oEWzwzsQbQhp15OCOiSTgqj-g=",

  bangaloreEyebrow: "Serving Bangalore",
  bangaloreHeadingMain: "Corporate Car Rental in",
  bangaloreHeadingAccent: "Bangalore",
  bangaloreParagraphs: [
    "Bangalore is home to businesses across technology, startups, consulting, manufacturing, education, healthcare, finance, and other industries. With employees, clients, and business visitors constantly moving between offices, airports, hotels, meeting locations, and work sites, transportation is an important part of everyday business operations.",
    "Acciva Travels provides corporate car rental services in Bangalore for organisations looking for a practical way to manage these journeys.",
  ],
  bangaloreChips: [
    { icon: "Cpu", label: "Technology" },
    { icon: "Rocket", label: "Startups" },
    { icon: "Briefcase", label: "Consulting" },
    { icon: "Factory", label: "Manufacturing" },
    { icon: "GraduationCap", label: "Education" },
    { icon: "HeartPulse", label: "Healthcare" },
    { icon: "Landmark", label: "Finance" },
  ],
  bangaloreClosing:
    "Whether you need a vehicle for an important client visit, transportation for employees, an airport pickup, a corporate event, or an outstation business trip, the requirement can be discussed with the Acciva Travels team.",

  talkEyebrow: "",
  talkHeadingMain: "Talk to",
  talkHeadingAccent: "Acciva Travels",
  talkParagraphs: [
    "Have a regular employee transportation requirement, an upcoming corporate event, or simply need a car for business travel in Bangalore?",
    "Share your travel requirements with Acciva Travels, including the locations, number of passengers, timing, and frequency of travel. The team can help you identify a suitable transportation arrangement for your business.",
  ],
  talkButtonText: "Talk to Acciva Travels",
  talkButtonLink: "/contact",
};

// Section heading — description accepts a string or an array of paragraphs
// (rendered verbatim, one <p> per source paragraph) and can span the full
// container width via `descriptionClassName`.
const SectionHeading = ({
  eyebrow,
  title,
  italicTitle,
  description,
  center,
  descriptionClassName = "max-w-3xl",
}) => {
  const paragraphs = Array.isArray(description) ? description : description ? [description] : [];
  return (
    <div className="mb-10">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`${center ? "text-center mx-auto" : ""} max-w-3xl`}
      >
        {eyebrow && <span className="eyebrow text-teal">{eyebrow}</span>}
        <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
          {title}{" "}
          {italicTitle && <span className="italic text-teal font-normal">{italicTitle}</span>}
        </h2>
      </motion.div>
      {paragraphs.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`mt-5 space-y-4 text-slate-700 text-[15px] font-normal leading-relaxed ${
            center ? "mx-auto" : ""
          } ${descriptionClassName}`}
        >
          {paragraphs.map((para, i) => (
            <RichText key={i} as="p" html={para} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

// Two-column heading + copy + image block, alternating sides — the same
// intro/offer layout motif used on the Corporate Cab Services subpage.
const TextImageSection = ({ eyebrow, title, italicTitle, paragraphs, image, alt, reverse }) => (
  <section className="py-10 md:py-14 bg-soft">
    <div className="container-px">
      <div
        className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="h-full flex flex-col justify-center space-y-5"
        >
          <span className="eyebrow text-teal">{eyebrow}</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
            {title}{" "}
            <span className="italic text-teal font-normal">{italicTitle}</span>
          </h2>
          <div className="space-y-4 text-slate-700 text-[15px] font-normal leading-relaxed">
            {paragraphs.map((para, i) => (
              <RichText key={i} as="p" html={para} />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -40 : 40, scale: 0.97 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="h-full"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative h-full max-h-80 sm:max-h-90 rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group"
          >
            <AnimatedImage
              src={image}
              alt={alt}
              effect="zoom-out"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

// Horizontal steps timeline — same motif and layout as the Corporate Cab
// Services subpage's route-planning timeline (connecting line with a
// traveling comet, numbered icon tiles arranged in a responsive row).
const StepsTimeline = ({ steps }) => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative">
      <div className="hidden lg:block absolute top-9 left-[12.5%] right-[12.5%] h-px bg-navy/10 overflow-visible">
        <motion.div
          className="h-full bg-linear-to-r from-teal via-sand to-teal origin-left"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.div
          className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal shadow-[0_0_12px_4px_rgba(59,141,196,0.55)]"
          animate={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
          onUpdate={(latest) => {
            const pct = parseFloat(latest.left);
            if (Number.isNaN(pct)) return;
            const step = Math.min(steps.length - 1, Math.max(0, Math.round((pct / 100) * (steps.length - 1))));
            setActive((prev) => (prev === step ? prev : step));
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatDelay: 0.6,
            ease: "easeInOut",
            times: [0, 0.1, 0.9, 1],
          }}
        />
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {steps.map((s, idx) => {
          const StepIcon = resolveIcon(s.icon);
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-start lg:items-center lg:text-center"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.08, rotate: 4 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 16,
                  delay: idx * 0.15 + 0.1,
                }}
                className={`w-[72px] h-[72px] rounded-2xl border-2 shadow-md flex items-center justify-center relative z-10 mb-5 transition-colors duration-500 ${
                  active === idx ? "bg-sand/25 border-sand text-navy" : "bg-white border-teal/30 text-teal"
                }`}
              >
                <motion.span
                  className="absolute inset-0 rounded-2xl border-2 border-teal/40"
                  animate={{ scale: [1, 1.35, 1], opacity: [0.6, 0, 0.6] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: idx * 0.3,
                  }}
                />
                <StepIcon size={26} />
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 12,
                    delay: idx * 0.15 + 0.35,
                  }}
                  className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-navy text-ivory text-[10px] font-mono font-bold flex items-center justify-center"
                >
                  {s.step}
                </motion.span>
              </motion.div>
              <h4 className="font-display text-lg font-bold text-navy">{s.title}</h4>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

// Pill chips scrolling as an infinite marquee — same motif used by the
// Corporate Cab Services subpage's industries row, since the list represents
// parallel options rather than sequential steps.
const ChipsMarquee = ({ chips, duration = "16s" }) => {
  const loopChips = [...chips, ...chips];
  return (
    <div className="relative overflow-hidden">
      <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-24 bg-linear-to-r from-soft to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-24 bg-linear-to-l from-soft to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-3 whitespace-nowrap will-change-transform animate-marquee-left"
        style={{ animationDuration: duration }}
      >
        {loopChips.map((item, i) => {
          const ItemIcon = resolveIcon(item.icon);
          const isSand = i % 2 === 1;
          return (
            <div
              key={i}
              className={`inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-white border-2 shadow-[0_10px_25px_rgba(38,55,74,0.05)] transition-colors duration-300 shrink-0 ${
                isSand ? "border-sand/40 hover:border-sand/70" : "border-teal/25 hover:border-teal/50"
              }`}
            >
              <span
                className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
                  isSand ? "bg-sand/25 text-navy" : "bg-teal/10 text-teal"
                }`}
              >
                <ItemIcon size={15} />
              </span>
              <span className={`text-[13px] font-semibold ${isSand ? "text-[#a3843f]" : "text-navy"}`}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// Static pill row (not a marquee) with a traveling comet highlighting each
// item in turn — same motif as the Fleet Management subpage's GPS Tracking
// feature row, for shorter option lists that don't need to loop.
const TECH_TONES = ["teal", "sand", "teal"];

const TechFeatureRow = ({ features, center = false }) => {
  const [active, setActive] = useState(-1);
  const total = features.length;
  const inset = `${50 / total}%`;

  return (
    <div className={`pt-4 ${center ? "flex justify-center" : "relative"}`}>
      <div className="relative">
        <div
          className="hidden sm:block absolute top-8 h-px bg-navy/10 overflow-visible pointer-events-none z-0"
          style={{ left: inset, right: inset }}
        >
          <motion.div
            className="h-full bg-linear-to-r from-teal via-sand to-teal origin-left"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-teal shadow-[0_0_12px_4px_rgba(59,141,196,0.55)]"
            initial={{ left: "0%", opacity: 0 }}
            whileInView={{ left: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            viewport={{ once: true, amount: 0.3 }}
            onUpdate={(latest) => {
              const pct = parseFloat(latest.left);
              if (Number.isNaN(pct)) return;
              const step = Math.min(total - 1, Math.max(0, Math.round((pct / 100) * (total - 1))));
              setActive((prev) => (prev === step ? prev : step));
            }}
            transition={{
              duration: 2.6,
              repeat: Infinity,
              repeatDelay: 0.9,
              ease: "easeInOut",
              times: [0, 0.08, 0.92, 1],
            }}
          />
        </div>

        <div className={`flex flex-wrap gap-3 relative z-10 ${center ? "justify-center" : ""}`}>
          {features.map((item, i) => {
          const ItemIcon = resolveIcon(item.icon);
          const isActive = active === i;
          const isSand = TECH_TONES[i % TECH_TONES.length] === "sand";
          const glow = isSand ? "rgba(225,197,157,0.6)" : "rgba(59,141,196,0.4)";
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              animate={
                isActive
                  ? { y: -4, scale: 1.05, boxShadow: `0 16px 30px ${glow}` }
                  : { y: 0, scale: 1, boxShadow: "0 10px 25px rgba(38,55,74,0.05)" }
              }
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={`relative inline-flex items-center gap-2.5 pl-2.5 pr-4 py-2 rounded-full bg-white border-2 transition-colors duration-300 overflow-hidden ${
                isSand
                  ? `border-sand/40 ${isActive ? "!border-sand" : "hover:border-sand/70"}`
                  : `border-teal/25 ${isActive ? "!border-teal" : "hover:border-teal/50"}`
              }`}
            >
              <span
                className={`relative w-8 h-8 shrink-0 rounded-full flex items-center justify-center ${
                  isSand ? "bg-sand/25 text-navy" : "bg-teal/10 text-teal"
                }`}
              >
                {isActive && (
                  <motion.span
                    className={`absolute -inset-1.5 rounded-full border-2 pointer-events-none ${
                      isSand ? "border-sand/70" : "border-teal/60"
                    }`}
                    initial={{ opacity: 0.8, scale: 0.85 }}
                    animate={{ opacity: [0.8, 0], scale: [0.85, 1.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <ItemIcon size={15} className="relative z-10" />
              </span>
              <span className={`text-[13px] font-semibold ${isSand ? "text-[#a3843f]" : "text-navy"}`}>
                {item.label}
              </span>
            </motion.div>
          );
        })}
        </div>
      </div>
    </div>
  );
};

const CorporateCarRentalServices = () => {
  const { data: content } = usePageContent("corporate-car-rental-services", CCR_DEFAULTS);

  return (
    <div className="bg-soft text-navy overflow-hidden">
      <Seo
        title="Corporate Car Rental Services in Bangalore"
        description="Corporate car rental and transportation services in Bangalore for employees, executives, clients, business visitors, and official travel."
        canonical="https://www.accivatravels.com/services/corporate-car-rental-services"
      />

      {/* ========================================================================= */}
      {/* SUBPAGE HEADER — SAME HERO TREATMENT AS THE SERVICES PAGE            */}
      {/* ========================================================================= */}
      <section
        className="pt-28 sm:pt-32 pb-4 md:pb-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('${content.heroBackgroundImage}')`,
          backgroundSize: "cover",
          backgroundPosition: "center 35%",
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
            <NavLink to="/services" className="hover:text-teal transition-colors text-navy/70 font-bold">
              Services
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Corporate Car Rental Services</span>
          </div>

          <div className="gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-6xl"
            >
              <span className="eyebrow text-teal">{content.heroEyebrow}</span>
              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.08] mt-6 tracking-tight">
                {content.heroTitleMain}{" "}
                <span className="italic text-teal font-normal">{content.heroTitleAccent}</span>
              </h1>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTRODUCTION                                                          */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/10 rounded-bl-full pointer-events-none" />
        <div className="container-px relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="h-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-full min-h-[260px] rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group"
              >
                <AnimatedImage
                  src={content.introImage}
                  alt="Corporate car rental services in Bangalore"
                  effect="zoom-out"
                  eager
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="h-full flex flex-col justify-center space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed"
            >
              <span className="eyebrow text-teal">{content.introEyebrow}</span>
              {content.introParagraphs.map((para, i) => (
                <RichText key={i} as="p" html={para} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CORPORATE CAR RENTAL FOR DIFFERENT BUSINESS REQUIREMENTS (PILL ROW)  */}
      {/* ========================================================================= */}
      <section className="py-5 md:py-5 bg-soft relative overflow-hidden">
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.reqEyebrow}
            title={content.reqHeadingMain}
            italicTitle={content.reqHeadingAccent}
            description={content.reqParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <TechFeatureRow features={content.reqOptions} center />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BUSINESS TRAVEL ACROSS BANGALORE                                     */}
      {/* ========================================================================= */}
      <TextImageSection
        eyebrow={content.cityEyebrow}
        title={content.cityHeadingMain}
        italicTitle={content.cityHeadingAccent}
        paragraphs={content.cityParagraphs}
        image={content.cityImage}
        alt="Business travel across Bangalore"
      />

      {/* ========================================================================= */}
      {/* AIRPORT TRANSFERS FOR CORPORATE TRAVEL                               */}
      {/* ========================================================================= */}
      <TextImageSection
        eyebrow={content.airportEyebrow}
        title={content.airportHeadingMain}
        italicTitle={content.airportHeadingAccent}
        paragraphs={content.airportParagraphs}
        image={content.airportImage}
        alt="Airport transfers for corporate travel"
        reverse
      />

      {/* ========================================================================= */}
      {/* TRANSPORTATION FOR EMPLOYEES (HORIZONTAL TIMELINE)                   */}
      {/* ========================================================================= */}
      <section className="py-5 md:py-5 bg-soft relative overflow-hidden">
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.employeeEyebrow}
            title={content.employeeHeadingMain}
            italicTitle={content.employeeHeadingAccent}
            description={content.employeeParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <div className="mt-4">
            <StepsTimeline steps={content.employeeSteps} />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CARS FOR MEETINGS AND CLIENT VISITS                                  */}
      {/* ========================================================================= */}
      <section className="py-5 md:py-5 bg-soft">
        <div className="container-px">
          <SectionHeading
            eyebrow={content.meetingsEyebrow}
            title={content.meetingsHeadingMain}
            italicTitle={content.meetingsHeadingAccent}
            description={content.meetingsParagraphs}
            descriptionClassName="max-w-none w-full"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CORPORATE EVENTS, CONFERENCES AND BUSINESS PROGRAMMES                */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/10 rounded-bl-full pointer-events-none" />
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.eventsEyebrow}
            title={content.eventsHeadingMain}
            italicTitle={content.eventsHeadingAccent}
            description={content.eventsParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <ChipsMarquee chips={content.eventsChips} duration="16s" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* OUTSTATION CAR RENTAL FOR BUSINESS TRAVEL                            */}
      {/* ========================================================================= */}
      <TextImageSection
        eyebrow={content.outstationEyebrow}
        title={content.outstationHeadingMain}
        italicTitle={content.outstationHeadingAccent}
        paragraphs={content.outstationParagraphs}
        image={content.outstationImage}
        alt="Outstation car rental for business travel"
        reverse
      />

      {/* ========================================================================= */}
      {/* SHORT-TERM AND LONG-TERM CORPORATE RENTALS                           */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/10 rounded-tr-full pointer-events-none" />
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.rentalsEyebrow}
            title={content.rentalsHeadingMain}
            italicTitle={content.rentalsHeadingAccent}
            description={content.rentalsParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <ChipsMarquee chips={content.rentalsChips} duration="18s" />

          {content.rentalsClosing && (
            <RichText
              as={motion.p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-none w-full text-slate-700 text-[15px] font-normal leading-relaxed"
              html={content.rentalsClosing}
            />
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY BUSINESSES USE CORPORATE CAR RENTAL SERVICES                     */}
      {/* ========================================================================= */}
      <section className="py-5 md:py-5 bg-soft">
        <div className="container-px">
          <SectionHeading
            eyebrow={content.whyUseEyebrow}
            title={content.whyUseHeadingMain}
            italicTitle={content.whyUseHeadingAccent}
            description={content.whyUseParagraphs}
            descriptionClassName="max-w-none w-full"
          />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY ACCIVA TRAVELS?                                                  */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-teal/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-sand/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container-px relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 space-y-5"
            >
              <span className="eyebrow text-teal">{content.whyAccivaEyebrow}</span>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-4 tracking-tight">
                {content.whyAccivaHeadingMain}{" "}
                <span className="italic text-teal font-normal">{content.whyAccivaHeadingAccent}</span>
              </h2>
              <div className="space-y-5 text-slate-700 text-[15px] font-normal leading-relaxed">
                {content.whyAccivaParagraphs.map((para, i) => (
                  <RichText key={i} as="p" html={para} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="lg:col-span-5"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="relative h-full min-h-[260px] rounded-3xl overflow-hidden shadow-2xl border border-navy/10 group"
              >
                <AnimatedImage
                  src={content.whyAccivaImage}
                  alt="Acciva Travels corporate car rental fleet"
                  effect="zoom-out"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CORPORATE CAR RENTAL IN BANGALORE                                    */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-sand/10 rounded-br-full pointer-events-none" />
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.bangaloreEyebrow}
            title={content.bangaloreHeadingMain}
            italicTitle={content.bangaloreHeadingAccent}
            description={content.bangaloreParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <ChipsMarquee chips={content.bangaloreChips} duration="14s" />

          {content.bangaloreClosing && (
            <RichText
              as={motion.p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-none w-full text-slate-700 text-[15px] font-normal leading-relaxed"
              html={content.bangaloreClosing}
            />
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* TALK TO ACCIVA TRAVELS                                               */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-teal/20 shadow-xl relative overflow-hidden text-center"
          >
            <div className="absolute top-0 right-0 w-56 h-56 bg-teal/10 rounded-bl-full pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-44 h-44 bg-sand/15 rounded-tr-full pointer-events-none" />

            <div className="relative z-10">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-teal/10 flex items-center justify-center text-teal shadow-inner mb-6">
                <MessageCircle size={26} />
              </div>
              {content.talkEyebrow && (
                <span className="eyebrow text-teal block mb-3">{content.talkEyebrow}</span>
              )}
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight">
                {content.talkHeadingMain}{" "}
                <span className="italic text-teal font-normal">{content.talkHeadingAccent}</span>
              </h2>
              <div className="mt-5 space-y-3 text-slate-700 text-[15px] font-normal leading-relaxed max-w-2xl mx-auto">
                {content.talkParagraphs.map((para, i) => (
                  <RichText key={i} as="p" html={para} />
                ))}
              </div>
              <div className="mt-8 flex justify-center">
                <Magnetic strength={20}>
                  <SmartLink
                    to={content.talkButtonLink}
                    className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
                  >
                    <span>{content.talkButtonText}</span>
                    <ArrowUpRight size={16} />
                  </SmartLink>
                </Magnetic>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CorporateCarRentalServices;
