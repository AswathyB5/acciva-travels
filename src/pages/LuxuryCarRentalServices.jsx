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

const LCR_DEFAULTS = {
  heroEyebrow: "Luxury Travel",
  heroTitleMain: "Luxury Car Rental in Bangalore for",
  heroTitleAccent: "Special Occasions and Premium Travel",
  heroBackgroundImage:
    "https://images.pexels.com/photos/28374850/pexels-photo-28374850.jpeg?auto=compress&cs=tinysrgb&w=1920",

  introEyebrow: "Introduction",
  introParagraphs: [
    "There are some journeys where getting from one place to another is only part of the experience.",
    "A wedding car needs to look the part. An executive arriving for an important meeting may want something more comfortable and private than an ordinary cab. A couple celebrating an occasion may want the journey to feel different from a regular day. And when a group of guests is visiting Bangalore, the vehicle they travel in can be part of the overall experience.",
    "That is where luxury car rental comes in.",
    "Acciva Travels offers luxury car rental services in Bangalore for customers looking for a more premium option for personal, professional, and special-occasion travel.",
    "Whether you need a luxury car for a few hours, a full day, an event, or a particular journey, the rental can be planned around the occasion and your travel requirements.",
  ],
  introImage:
    "https://images.pexels.com/photos/19894151/pexels-photo-19894151.jpeg?auto=compress&cs=tinysrgb&w=1200",

  differentEyebrow: "The Luxury Difference",
  differentHeadingMain: "What Makes a Luxury Car Rental",
  differentHeadingAccent: "Different?",
  differentParagraphs: [
    "Luxury travel is not only about choosing an expensive car.",
    "The vehicle itself is one part of the experience. Comfort, presentation, privacy, convenience, and the way the journey is organised all matter as well.",
    "A luxury car rental gives customers the option to choose a vehicle that is more suited to an important occasion or premium travel requirement.",
    "Instead of using your everyday vehicle for a wedding, corporate event, airport pickup, celebration, or special outing, you can arrange a premium car specifically for the occasion.",
  ],
  differentChips: [
    { icon: "Sparkles", label: "Comfort" },
    { icon: "Star", label: "Presentation" },
    { icon: "ShieldCheck", label: "Privacy" },
    { icon: "CheckCircle2", label: "Convenience" },
  ],

  weddingEyebrow: "Wedding Transportation",
  weddingHeadingMain: "Luxury Car Rental for",
  weddingHeadingAccent: "Weddings",
  weddingParagraphs: [
    "A wedding is one of the most common occasions where the right car can make a difference.",
    "The wedding car becomes part of the photographs, the arrival, and sometimes even the overall theme of the event. Couples may need transportation between the hotel, venue, ceremony, reception, or photo locations.",
    "A luxury car can also be arranged for the bride and groom, family members, VIP guests, or other important members of the wedding party.",
    "Acciva Travels can help arrange luxury transportation in Bangalore based on the wedding schedule, locations, and duration for which the vehicle is required.",
  ],
  weddingImage:
    "https://images.pexels.com/photos/13044866/pexels-photo-13044866.jpeg?auto=compress&cs=tinysrgb&w=1200",

  executivesEyebrow: "Corporate Travel",
  executivesHeadingMain: "Luxury Cars for Corporate",
  executivesHeadingAccent: "Executives",
  executivesParagraphs: [
    "Luxury car rental is not limited to personal occasions.",
    "Businesses sometimes require premium vehicles for executives, visiting clients, senior management, business partners, or important guests.",
    "An executive travelling from Bangalore Airport to a hotel or meeting location may prefer a more comfortable and private vehicle, particularly when the journey is part of a busy business schedule.",
    "Luxury corporate car rental can also be useful for meetings, conferences, corporate events, business dinners, and official visits.",
    "For companies, the vehicle can be arranged for a particular transfer or kept available for a defined period depending on the itinerary.",
  ],
  executivesImage:
    "https://www.avis.co.in/blog/wp-content/uploads/2025/05/ANA0203-copy.jpg",

  airportEyebrow: "Airport Transfers",
  airportHeadingMain: "Airport Transfers in",
  airportHeadingAccent: "Style",
  airportParagraphs: [
    "Airport travel can be tiring, especially after a long flight.",
    "For customers who want something more comfortable than a standard airport cab, a luxury airport transfer offers another option.",
    "Acciva Travels can arrange luxury car rentals for airport pickups and drops in Bangalore, whether the passenger is travelling alone, arriving for a business trip, or visiting the city for a special occasion.",
    "For corporate guests and VIP visitors, a premium vehicle can also form part of the overall travel arrangement from the airport to a hotel, office, event venue, or other destination.",
  ],
  airportSteps: [
    { step: "01", title: "Airport Pickups & Drops", icon: "Plane" },
    { step: "02", title: "Business Trip or Special Occasion", icon: "Users" },
    { step: "03", title: "Corporate Guests & VIP Visitors", icon: "UserCheck" },
    { step: "04", title: "Hotel, Office or Event Venue", icon: "MapPin" },
  ],

  occasionsEyebrow: "Celebrations",
  occasionsHeadingMain: "Luxury Car Rental for Special",
  occasionsHeadingAccent: "Occasions",
  occasionsParagraphs: [
    "You do not need a major event to rent a luxury car.",
    "A birthday, anniversary, proposal, engagement, graduation, celebration, photoshoot, or special evening can all be reasons to choose a premium vehicle.",
    "For some occasions, the car is simply about making an ordinary plan feel a little more memorable.",
    "Customers can choose a rental duration based on their plans rather than having to use the vehicle for an entire day when only a few hours are needed.",
  ],

  eventsEyebrow: "Events & Productions",
  eventsHeadingMain: "Luxury Cars for Events and",
  eventsHeadingAccent: "Photoshoots",
  eventsParagraphs: [
    "Luxury vehicles are also frequently used as part of event and visual production requirements.",
    "Fashion shoots, wedding photography, advertising productions, music videos, films, social media campaigns, and promotional events may require a particular type of vehicle as part of the setting.",
    "In these cases, the vehicle is not simply transportation. It becomes part of the visual concept.",
    "Acciva Travels can discuss vehicle rental requirements for photoshoots, productions, events, and promotional purposes based on the duration and nature of the project.",
  ],
  eventsChips: [
    { icon: "Image", label: "Fashion shoots" },
    { icon: "HeartHandshake", label: "Wedding photography" },
    { icon: "Sparkles", label: "Advertising productions" },
    { icon: "Layers", label: "Music videos and films" },
    { icon: "Smartphone", label: "Social media campaigns" },
    { icon: "Star", label: "Promotional events" },
  ],

  leisureEyebrow: "Business & Leisure",
  leisureHeadingMain: "Luxury Car Rental for Business and Leisure",
  leisureHeadingAccent: "Travel",
  leisureParagraphs: [
    "A luxury car can be rented for more than a single transfer.",
    "Customers visiting Bangalore for business or leisure may want a vehicle available for several hours or throughout the day while they attend meetings, visit different locations, go shopping, dine out, or explore the city.",
    "For such itineraries, a time-based rental can be more practical than booking separate rides throughout the day.",
    "The rental requirement can be discussed based on the number of passengers, locations, schedule, and duration.",
  ],
  leisureImage:
    "https://images.pexels.com/photos/4964910/pexels-photo-4964910.jpeg?auto=compress&cs=tinysrgb&w=1200",

  chauffeurEyebrow: "Chauffeur Service",
  chauffeurHeadingMain: "Chauffeur-Driven Luxury Car",
  chauffeurHeadingAccent: "Rental",
  chauffeurParagraphs: [
    "For customers who would rather not drive, a chauffeur-driven luxury car can make the experience more convenient.",
    "This can be particularly useful for weddings, corporate travel, airport transfers, events, and occasions where the customer wants to focus on the event rather than navigating Bangalore traffic or finding parking.",
    "A chauffeur-driven arrangement also allows the customer to travel between multiple locations without having to organise a separate vehicle for each part of the itinerary.",
  ],

  outstationEyebrow: "Outstation Travel",
  outstationHeadingMain: "Luxury Car Rental for Outstation",
  outstationHeadingAccent: "Travel",
  outstationParagraphs: [
    "Luxury travel does not have to end at Bangalore's city limits.",
    "Customers may also require premium transportation for weddings, weekend trips, business travel, family occasions, or other journeys outside the city.",
    "An outstation luxury car rental can be arranged according to the destination and duration of travel.",
    "Whether the requirement is for a one-day trip or a longer itinerary, customers can discuss the route, number of passengers, rental duration, and vehicle preference with Acciva Travels.",
  ],
  outstationImage:
    "https://images.pexels.com/photos/29013472/pexels-photo-29013472.jpeg?auto=compress&cs=tinysrgb&w=1200",

  choosingEyebrow: "Making the Choice",
  choosingHeadingMain: "Choosing the Right Luxury Car",
  choosingHeadingAccent: "Rental",
  choosingParagraphs: [
    "The best vehicle depends on what you actually need it for.",
    "A wedding may call for a particular style of vehicle. An executive transfer may prioritise comfort and privacy. A photoshoot may require a specific appearance, while a family journey may need more passenger space.",
    "Before booking, it is useful to consider:",
  ],
  choosingChips: [
    { icon: "Users", label: "Number of passengers" },
    { icon: "Sparkles", label: "Type of occasion" },
    { icon: "Clock", label: "Rental duration" },
    { icon: "MapPin", label: "Pickup and drop locations" },
    { icon: "Route", label: "City or outstation travel" },
    { icon: "UserCheck", label: "Chauffeur requirement" },
    { icon: "Briefcase", label: "Luggage requirements" },
    { icon: "Car", label: "Vehicle preference" },
    { icon: "Image", label: "Event or photography requirements" },
  ],
  choosingClosing:
    "Sharing these details with the rental provider beforehand makes it easier to identify a vehicle and rental arrangement that fits the occasion.",

  whyAccivaEyebrow: "Distinct Advantage",
  whyAccivaHeadingMain: "Why Choose Acciva Travels for Luxury Car",
  whyAccivaHeadingAccent: "Rental?",
  whyAccivaParagraphs: [
    "Acciva Travels provides luxury and premium transportation options in Bangalore for customers who want something beyond a standard car rental.",
    "The requirement can range from a short airport transfer to a full-day luxury car booking, wedding transportation, corporate travel, an event, or an outstation journey.",
    "Rather than treating every booking in the same way, the rental can be discussed according to the occasion, itinerary, passenger requirements, and duration.",
    "For customers booking a luxury vehicle for an important event, planning the transportation in advance is especially useful. It gives both the customer and the transportation provider a clear understanding of where the vehicle is required, for how long, and what the journey involves.",
  ],
  whyAccivaImage:
    "https://media.istockphoto.com/id/182913362/photo/travel-coaches-at-tourist-destination-parked-in-a-row.jpg?s=612x612&w=0&k=20&c=WydkBjrqbYQKAITmQ9oEWzwzsQbQhp15OCOiSTgqj-g=",

  bangaloreEyebrow: "Serving Bangalore",
  bangaloreHeadingMain: "Luxury Car Rental in",
  bangaloreHeadingAccent: "Bangalore",
  bangaloreParagraphs: [
    "Bangalore is a city where business travel, weddings, events, entertainment, and personal celebrations often overlap. From corporate meetings and airport transfers to weddings, private celebrations and photoshoots, there are plenty of occasions where a standard cab may not be what you are looking for.",
    "Acciva Travels provides luxury car rental in Bangalore for customers who want a more premium travel experience for these occasions.",
    "Whether you need a luxury car for a few hours, a full-day booking, a wedding, corporate event, airport transfer, photoshoot, or outstation journey, you can discuss your requirements with the Acciva Travels team.",
  ],

  talkEyebrow: "",
  talkHeadingMain: "Planning a Luxury Car",
  talkHeadingAccent: "Rental?",
  talkParagraphs: [
    "Tell Acciva Travels about your occasion, travel dates, locations, number of passengers, preferred vehicle, and rental duration.",
    "The team can help you explore the available luxury car rental options for your requirement in Bangalore.",
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

// Two-column heading + copy + image block, alternating sides.
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

// Full-width paragraph section, without an accompanying image.
const TextSection = ({ eyebrow, title, italicTitle, paragraphs }) => (
  <section className="py-5 md:py-5 bg-soft">
    <div className="container-px">
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        italicTitle={italicTitle}
        description={paragraphs}
        descriptionClassName="max-w-none w-full"
      />
    </div>
  </section>
);

// Horizontal steps timeline — connecting line with a traveling comet and
// numbered icon tiles, for sequential journeys (airport pickup, outstation
// trips) rather than a plain photo.
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

// Pill chips scrolling as an infinite marquee, for parallel option lists.
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

const LuxuryCarRentalServices = () => {
  const { data: content } = usePageContent("luxury-car-rental-services", LCR_DEFAULTS);

  return (
    <div className="bg-soft text-navy overflow-hidden">
      <Seo
        title="Luxury Car Rental in Bangalore for Special Occasions and Premium Travel"
        description="Luxury car rental services in Bangalore for weddings, corporate executives, airport transfers, special occasions, photoshoots, and outstation travel."
        canonical="https://www.accivatravels.com/services/luxury-car-rental"
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
            <span className="text-teal font-semibold">Luxury Car Rental</span>
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
                  alt="Luxury car rental services in Bangalore"
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
      {/* WHAT MAKES A LUXURY CAR RENTAL DIFFERENT? (PILL ROW)                 */}
      {/* ========================================================================= */}
      <section className="py-5 md:py-5 bg-soft relative overflow-hidden">
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.differentEyebrow}
            title={content.differentHeadingMain}
            italicTitle={content.differentHeadingAccent}
            description={content.differentParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <TechFeatureRow features={content.differentChips} center />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LUXURY CAR RENTAL FOR WEDDINGS                                       */}
      {/* ========================================================================= */}
      <TextImageSection
        eyebrow={content.weddingEyebrow}
        title={content.weddingHeadingMain}
        italicTitle={content.weddingHeadingAccent}
        paragraphs={content.weddingParagraphs}
        image={content.weddingImage}
        alt="Luxury car rental for weddings in Bangalore"
      />

      {/* ========================================================================= */}
      {/* LUXURY CARS FOR CORPORATE EXECUTIVES                                 */}
      {/* ========================================================================= */}
      <TextImageSection
        eyebrow={content.executivesEyebrow}
        title={content.executivesHeadingMain}
        italicTitle={content.executivesHeadingAccent}
        paragraphs={content.executivesParagraphs}
        image={content.executivesImage}
        alt="Luxury cars for corporate executives"
        reverse
      />

      {/* ========================================================================= */}
      {/* AIRPORT TRANSFERS IN STYLE (HORIZONTAL TIMELINE)                     */}
      {/* ========================================================================= */}
      <section className="py-5 md:py-5 bg-soft relative overflow-hidden">
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.airportEyebrow}
            title={content.airportHeadingMain}
            italicTitle={content.airportHeadingAccent}
            description={content.airportParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <div className="mt-4">
            <StepsTimeline steps={content.airportSteps} />
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LUXURY CAR RENTAL FOR SPECIAL OCCASIONS                              */}
      {/* ========================================================================= */}
      <TextSection
        eyebrow={content.occasionsEyebrow}
        title={content.occasionsHeadingMain}
        italicTitle={content.occasionsHeadingAccent}
        paragraphs={content.occasionsParagraphs}
      />

      {/* ========================================================================= */}
      {/* LUXURY CARS FOR EVENTS AND PHOTOSHOOTS                               */}
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
      {/* LUXURY CAR RENTAL FOR BUSINESS AND LEISURE TRAVEL                    */}
      {/* ========================================================================= */}
      <TextImageSection
        eyebrow={content.leisureEyebrow}
        title={content.leisureHeadingMain}
        italicTitle={content.leisureHeadingAccent}
        paragraphs={content.leisureParagraphs}
        image={content.leisureImage}
        alt="Luxury car rental for business and leisure travel"
      />

      {/* ========================================================================= */}
      {/* CHAUFFEUR-DRIVEN LUXURY CAR RENTAL                                   */}
      {/* ========================================================================= */}
      <TextSection
        eyebrow={content.chauffeurEyebrow}
        title={content.chauffeurHeadingMain}
        italicTitle={content.chauffeurHeadingAccent}
        paragraphs={content.chauffeurParagraphs}
      />

      {/* ========================================================================= */}
      {/* LUXURY CAR RENTAL FOR OUTSTATION TRAVEL                              */}
      {/* ========================================================================= */}
      <TextImageSection
        eyebrow={content.outstationEyebrow}
        title={content.outstationHeadingMain}
        italicTitle={content.outstationHeadingAccent}
        paragraphs={content.outstationParagraphs}
        image={content.outstationImage}
        alt="Luxury car rental for outstation travel"
        reverse
      />

      {/* ========================================================================= */}
      {/* CHOOSING THE RIGHT LUXURY CAR RENTAL                                 */}
      {/* ========================================================================= */}
      <section className="py-10 md:py-14 bg-soft relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/10 rounded-tr-full pointer-events-none" />
        <div className="container-px relative z-10">
          <SectionHeading
            eyebrow={content.choosingEyebrow}
            title={content.choosingHeadingMain}
            italicTitle={content.choosingHeadingAccent}
            description={content.choosingParagraphs}
            descriptionClassName="max-w-none w-full"
          />

          <ChipsMarquee chips={content.choosingChips} duration="18s" />

          {content.choosingClosing && (
            <RichText
              as={motion.p}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-none w-full text-slate-700 text-[15px] font-normal leading-relaxed"
              html={content.choosingClosing}
            />
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHY CHOOSE ACCIVA TRAVELS FOR LUXURY CAR RENTAL?                     */}
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
                  alt="Acciva Travels luxury car fleet"
                  effect="zoom-out"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* LUXURY CAR RENTAL IN BANGALORE                                       */}
      {/* ========================================================================= */}
      <TextSection
        eyebrow={content.bangaloreEyebrow}
        title={content.bangaloreHeadingMain}
        italicTitle={content.bangaloreHeadingAccent}
        paragraphs={content.bangaloreParagraphs}
      />

      {/* ========================================================================= */}
      {/* PLANNING A LUXURY CAR RENTAL?                                        */}
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

export default LuxuryCarRentalServices;
