import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import {
  ChevronRight,
  Wallet,
  Clock,
  ShieldCheck,
  Fuel,
  Wrench,
  Headphones,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowUpRight,
  Send,
  CheckCircle2,
  FileText,
  Car,
  IdCard,
  Image as ImageIcon,
  ScrollText,
  FileCheck2,
  Stethoscope,
  Users,
  FileBadge,
  Wallet as WalletIcon,
  Flame,
  BriefcaseMedical,
  Flashlight,
  Umbrella,
} from "lucide-react";
import Magnetic from "../components/Magnetic";
import RevealImage from "../components/RevealImage";

const advantages = [
  { icon: Wallet, title: "Guaranteed Income" },
  { icon: Clock, title: "On-Time Payments" },
  { icon: ShieldCheck, title: "Corporate Duty" },
  { icon: Fuel, title: "Fuel Advance" },
  { icon: Wrench, title: "Maintenance Discount" },
  { icon: Headphones, title: "Driver Support" },
];

const driverDocuments = [
  { icon: IdCard, label: "Original Driving License" },
  { icon: FileBadge, label: "Display Card" },
  { icon: ImageIcon, label: "Passport Size 3 Photos" },
  { icon: ShieldCheck, label: "Police Verification Certificate (PVC)" },
  { icon: IdCard, label: "Aadhaar Card" },
  { icon: FileText, label: "House Agreement (Driver Name)" },
  { icon: Stethoscope, label: "Medical Certificate" },
  { icon: FileText, label: "PAN Card" },
  { icon: Users, label: "Family Photo" },
];

const vehicleDocuments = [
  { icon: Car, label: "Vehicle RC" },
  { icon: ScrollText, label: "Vehicle Permit" },
  { icon: FileCheck2, label: "Vehicle Insurance" },
  { icon: FileText, label: "Vehicle Tax" },
  { icon: FileCheck2, label: "Fitness Certificate (FC)" },
  { icon: ShieldCheck, label: "Emission" },
  { icon: ImageIcon, label: "RC Owner 1 PHOTO" },
  { icon: WalletIcon, label: "RC Owner PAN & Pass Book" },
];

const inVehicleItems = [
  { icon: Flame, label: "Fire Kit" },
  { icon: BriefcaseMedical, label: "First Aid" },
  { icon: Flashlight, label: "Torch" },
  { icon: Umbrella, label: "Umbrella" },
];

const docGroups = [
  { title: "Driver Documents", items: driverDocuments },
  { title: "Vehicle Documents", items: vehicleDocuments },
  { title: "In Vehicle", items: inVehicleItems },
];

/* ---- Document checklist — a traveling ball relays down the connecting line and
   whichever item it reaches zooms/lights up, same motif as the Services page's
   "Why Choose Acciva Travels?" differentiator timeline. ---- */
const DocTimeline = ({ items }) => {
  const [active, setActive] = useState(-1);
  const total = items.length;

  return (
    <div className="relative">
      <motion.div
        className="absolute left-4 top-2 bottom-2 w-0.5 bg-linear-to-b from-teal via-sand to-teal origin-top"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Traveling ball riding the vertical line, looping forever */}
      <motion.div
        className="absolute left-4 -translate-x-1/2 w-3 h-3 rounded-full bg-teal shadow-[0_0_12px_4px_rgba(59,141,196,0.55)] z-20"
        initial={{ top: "0%", opacity: 0 }}
        whileInView={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
        viewport={{ once: true, amount: 0.2 }}
        onUpdate={(latest) => {
          const pct = parseFloat(latest.top);
          if (Number.isNaN(pct)) return;
          const step = Math.min(total - 1, Math.max(0, Math.round((pct / 100) * (total - 1))));
          setActive((prev) => (prev === step ? prev : step));
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatDelay: 1.4,
          ease: "easeInOut",
          times: [0, 0.03, 0.97, 1],
        }}
      />

      <ul className="space-y-3.5">
        {items.map((item, i) => {
          const isActive = active === i;
          const Icon = item.icon;
          return (
            <motion.li
              key={item.label}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex items-start gap-3"
            >
              <motion.span
                animate={
                  isActive
                    ? { scale: 1.25, backgroundColor: "rgba(225,197,157,0.3)" }
                    : { scale: 1, backgroundColor: "rgba(255,255,255,1)" }
                }
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`relative z-10 shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center shadow-sm transition-colors duration-300 ${
                  isActive ? "border-sand text-navy" : "border-teal/40 text-teal"
                }`}
              >
                {isActive && (
                  <motion.span
                    className="absolute -inset-1.5 rounded-full border-2 border-sand/70 pointer-events-none"
                    initial={{ opacity: 0.8, scale: 0.85 }}
                    animate={{ opacity: [0.8, 0], scale: [0.85, 1.5] }}
                    transition={{ duration: 1, repeat: Infinity, ease: "easeOut" }}
                  />
                )}
                <Icon size={13} className="relative z-10" />
              </motion.span>
              <motion.span
                animate={isActive ? { scale: 1.05, x: 3 } : { scale: 1, x: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className={`text-[14px] leading-snug pt-1.5 transition-colors duration-300 origin-left ${
                  isActive ? "text-navy font-bold" : "text-slate-700 font-medium"
                }`}
              >
                {item.label}
              </motion.span>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

/* ---- 3D tilt advantage card — mouse-follow tilt + pulsing icon ring. The ring/glow
   pulses whenever this card is "active", whether the visitor is hovering it or the
   auto-relay (see ADVANTAGE_INTERVAL below) has landed on it. ---- */
const AdvantageCard = ({ item, index, isActive }) => {
  const Icon = item.icon;
  const isTeal = index % 2 === 0;
  const glow = isTeal ? "rgba(59,141,196,0.35)" : "rgba(225,197,157,0.5)";
  const [hovered, setHovered] = useState(false);
  const active = isActive || hovered;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [10, -10]), { stiffness: 350, damping: 24 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-10, 10]), { stiffness: 350, damping: 24 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setHovered(false);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 1200, transformStyle: "preserve-3d" }}
      animate={
        active
          ? { scale: 1.05, y: -8, boxShadow: `0 20px 40px -8px ${glow}` }
          : { scale: 1, y: 0, boxShadow: "0 10px 25px rgba(38,55,74,0.06)" }
      }
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative rounded-3xl bg-white border-2 overflow-hidden transition-colors duration-300 ${
        isTeal ? (active ? "border-teal/60" : "border-teal/25") : active ? "border-sand/70" : "border-sand/40"
      }`}
    >
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal" />
      <div
        className={`absolute top-0 right-0 w-20 h-20 rounded-bl-full pointer-events-none ${
          isTeal ? "bg-teal/10" : "bg-sand/20"
        }`}
      />

      <div className="p-6 sm:p-8 flex flex-col items-center text-center gap-4 relative" style={{ transform: "translateZ(24px)" }}>
        <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center ${isTeal ? "bg-teal/10 text-teal" : "bg-sand/25 text-navy"}`}>
          {active && (
            <>
              <motion.span
                className={`absolute inset-0 rounded-2xl border-2 pointer-events-none ${
                  isTeal ? "border-teal/50" : "border-sand/60"
                }`}
                initial={{ scale: 0.85, opacity: 0.8 }}
                animate={{ scale: [0.85, 1.35, 0.85], opacity: [0.8, 0, 0.8] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.span
                className="absolute inset-0 rounded-2xl pointer-events-none"
                animate={{ boxShadow: [`0 0 0px 0px ${glow}`, `0 0 20px 8px ${glow}`, `0 0 0px 0px ${glow}`] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
              />
            </>
          )}
          <Icon
            size={28}
            className={`stroke-[1.75] relative z-10 transition-transform duration-300 ${active ? "scale-110" : ""}`}
          />
        </div>
        <h3 className="font-display font-bold text-base sm:text-lg text-navy leading-snug">{item.title}</h3>
      </div>
    </motion.div>
  );
};

const initialForm = {
  name: "",
  phone: "",
  vehicleType: "",
  regYear: "",
};

const ADVANTAGE_INTERVAL = 1100;

const Careers = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [activeAdvantage, setActiveAdvantage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveAdvantage((prev) => (prev + 1) % advantages.length);
    }, ADVANTAGE_INTERVAL);
    return () => clearInterval(id);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.vehicleType.trim()) newErrors.vehicleType = "Vehicle type is required";
    if (!form.regYear.trim()) newErrors.regYear = "Registration year is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm(initialForm);
  };

  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* SUBPAGE HEADER + FLEET VISUAL                                        */}
      {/* ========================================================================= */}
      <section
        className="pt-28 sm:pt-32 pb-4 md:pb-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=85')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-slate-300/80 backdrop-blur-[1px]" />

        <div className="container-px relative z-10">
          <div className="flex items-center gap-2 text-xs font-bold text-navy mb-6 uppercase tracking-wider">
            <NavLink
              to="/"
              className="hover:text-teal transition-colors text-navy/70 font-bold"
            >
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Careers</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <div className="max-w-3xl">
              <motion.span
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="eyebrow text-teal inline-block"
              >
                Drive With Acciva
              </motion.span>
              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                <span className="line-mask inline-block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.15,
                    }}
                    className="block"
                  >
                    Drive With
                  </motion.span>
                </span>
                <span className="line-mask inline-block overflow-hidden">
                  <motion.span
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    transition={{
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.27,
                    }}
                    className="block italic text-teal font-normal"
                  >
                    Acciva Advantages.
                  </motion.span>
                </span>
              </h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.4,
              }}
              className="max-w-md text-navy/90 text-[15px] font-medium leading-relaxed pb-2"
            >
              Join India's most trusted corporate mobility fleet and drive with
              guaranteed income, on-time payments, and round-the-clock support.
            </motion.p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DRIVE WITH ACCIVA ADVANTAGES                                         */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-teal/5 rounded-full blur-3xl pointer-events-none" />
        <div className="container-px relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 text-center max-w-2xl mx-auto"
          >
            <span className="eyebrow text-teal">Why Drive With Us</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
              Drive With{" "}
              <span className="italic text-teal font-normal">
                Acciva Advantages.
              </span>
            </h2>
            <motion.div
              className="mx-auto mt-6 h-px w-16 bg-sand/60"
              style={{ transformOrigin: "center" }}
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
            style={{ perspective: 1200 }}
          >
            {advantages.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <AdvantageCard
                  item={item}
                  index={i}
                  isActive={activeAdvantage === i}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* QUOTE / CTA BANNER                                                   */}
      {/* ========================================================================= */}
      <section className="relative py-6 md:py-8 bg-soft text-navy overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[280px] bg-teal/15 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -18, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        <div className="absolute top-0 right-0 w-64 h-64 bg-teal/10 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-sand/15 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-3xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow text-teal inline-block"
          >
            Safety Transportation Made Easy
          </motion.span>

          <motion.div
            className="mx-auto mt-6 h-px w-16 bg-sand/60"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          />

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight"
          >
            Feel Free To{" "}
            <span className="italic text-teal font-normal">Touch With Us.</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-8"
          >
            <Magnetic strength={22}>
              <a
                href="#attach-vehicle"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-sand text-navy font-bold text-sm sm:text-base hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span>Book Now</span>
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowUpRight size={18} />
                </motion.span>
              </a>
            </Magnetic>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* VISIT ACCIVA                                                         */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="eyebrow text-teal">Get In Touch</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
              Visit{" "}
              <span className="italic text-teal font-normal">Acciva.</span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Contact Info Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative p-7 sm:p-9 rounded-3xl bg-white border border-navy/10 shadow-2xl flex flex-col justify-between overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-teal/10 rounded-bl-full pointer-events-none" />

              <div className="relative">
                <div className="flex items-start justify-between gap-4 mb-6 pb-6 border-b border-navy/10">
                  <div>
                    <h3 className="font-display text-xl sm:text-2xl text-navy">
                      Acciva Travels Private Limited
                    </h3>
                    <p className="text-slate-600 text-[14px] font-normal leading-relaxed mt-2">
                      Ground Floor, No.52, 1st Main Rd, HMT Layout, Anandnagar,
                      Hebbal, Bengaluru, Karnataka 560032
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-8">
                  <div className="flex items-center gap-0.5 text-sand">
                    {[...Array(5)].map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -30 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{
                          type: "spring",
                          stiffness: 300,
                          damping: 14,
                          delay: i * 0.08,
                        }}
                      >
                        <Star
                          size={16}
                          fill={i < 5 ? "currentColor" : "none"}
                          className={i === 4 ? "text-navy/20" : ""}
                        />
                      </motion.span>
                    ))}
                  </div>
                  <span className="font-sans font-bold text-sm text-navy">
                    4.7
                  </span>
                  <span className="text-slate-500 text-xs font-mono">
                    (134 reviews)
                  </span>
                </div>

                <div className="space-y-3">
                  <motion.a
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    href="mailto:info@accivatravels.com"
                    className="p-4 rounded-2xl bg-soft border border-navy/10 hover:border-teal/50 hover:shadow-md transition-[border-color,box-shadow] flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                      <Mail size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-navy/50 uppercase">
                        Email
                      </p>
                      <p className="font-sans font-bold text-sm text-navy group-hover:text-teal transition-colors">
                        info@accivatravels.com
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.05,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    href="tel:+919035012166"
                    className="p-4 rounded-2xl bg-soft border border-navy/10 hover:border-teal/50 hover:shadow-md transition-[border-color,box-shadow] flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-navy/50 uppercase">
                        Mobile
                      </p>
                      <p className="font-sans font-bold text-sm text-navy group-hover:text-teal transition-colors">
                        +91 90350 12166
                      </p>
                    </div>
                  </motion.a>

                  <motion.a
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    href="tel:+918023541166"
                    className="p-4 rounded-2xl bg-soft border border-navy/10 hover:border-teal/50 hover:shadow-md transition-[border-color,box-shadow] flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                      <Phone size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-navy/50 uppercase">
                        Landline
                      </p>
                      <p className="font-sans font-bold text-sm text-navy group-hover:text-teal transition-colors">
                        +91 80 2354 1166
                      </p>
                    </div>
                  </motion.a>

                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.15,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    whileHover={{ y: -3, scale: 1.01 }}
                    className="p-4 rounded-2xl bg-soft border border-navy/10 flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                      <MapPin size={18} />
                    </div>
                    <div>
                      <p className="text-[10px] font-mono text-navy/50 uppercase">
                        Bengaluru Address
                      </p>
                      <p className="font-sans font-bold text-sm text-navy leading-snug">
                        # 52, 1 Main Road, Anand Nagar, Hebbal, Bengaluru
                        560024.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Map Column */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-7 rounded-3xl overflow-hidden bg-white border border-navy/10 shadow-2xl min-h-[380px]"
            >
              <iframe
                title="Acciva Travels Bengaluru Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0961003448615!2d77.59094080000001!3d13.029551899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179675b10e35%3A0x4e2fa4b235d073e4!2sAcciva%20Travels%20Private%20Limited!5e0!3m2!1sen!2sin!4v1788930808147!5m2!1sen!2sin"
                width="600"
                height="450"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="strict-origin-when-cross-origin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 380 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* REQUIRED DOCUMENTS                                                   */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[280px] bg-sand/10 rounded-full blur-3xl pointer-events-none" />
        <div className="container-px relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 text-center max-w-2xl mx-auto"
          >
            <span className="eyebrow text-teal">Onboarding Checklist</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
              Required{" "}
              <span className="italic text-teal font-normal">Documents.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {docGroups.map((group, gi) => (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 45 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -6 }}
                transition={{
                  duration: 0.7,
                  delay: gi * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="relative p-6 sm:p-7 rounded-3xl bg-soft border-2 border-navy/10 hover:border-teal/50 hover:shadow-xl transition-[border-color,box-shadow,transform] overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-teal via-sand to-teal" />

                <div className="inline-flex items-center px-4 py-2 rounded-xl bg-sand/40 shadow-sm mb-6">
                  <span className="font-display text-sm sm:text-base font-bold tracking-wide">
                    {group.title}
                  </span>
                </div>

                <DocTimeline items={group.items} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ATTACH YOUR VEHICLE WITH ACCIVA                                      */}
      {/* ========================================================================= */}
      <section
        id="attach-vehicle"
        className="py-16 md:py-24 bg-soft scroll-mt-24 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/10 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/15 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 space-y-10 lg:space-y-14">
          {/* Row 1 — full width intro */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="eyebrow text-teal">Vehicle Partner Program</span>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
              Attach Your Vehicle{" "}
              <span className="italic text-teal font-normal">With Acciva.</span>
            </h2>
            <p className="mt-5 text-slate-700 text-[15px] font-normal leading-relaxed max-w-2xl">
              Fill out the form below and our onboarding team will guide you
              through document verification and vehicle attachment.
            </p>
          </motion.div>

          {/* Row 2 — image + form, two columns */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
            <motion.div
              initial={{ opacity: 0, x: -40, scale: 0.97 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 h-full"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="h-full min-h-[280px] rounded-3xl overflow-hidden shadow-xl border border-navy/10"
              >
                <RevealImage
                  src="https://www.ascott-trans.com/images/car-rent-in-mumbai.jpg"
                  className="h-full"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-7"
            >
              <div className="relative p-7 sm:p-10 rounded-3xl bg-white border border-navy/10 shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1.5 bg-linear-to-r from-teal via-sand to-teal" />

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-teal/10 border border-teal/30 text-navy mb-8 flex items-center gap-4"
                  >
                    <CheckCircle2 size={24} className="text-teal shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-sm text-navy">
                        Message Sent!
                      </h4>
                      <p className="text-slate-600 text-[15px] font-normal mt-0.5">
                        Our onboarding team will reach out to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/90 mb-2">
                        Full Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Arjun Reddy"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
                          errors.name ? "border-red-400" : "border-navy/10"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-red-500 mt-1 font-mono">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/90 mb-2">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
                          errors.phone ? "border-red-400" : "border-navy/10"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 font-mono">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/90 mb-2">
                        Vehicle Type *
                      </label>
                      <input
                        name="vehicleType"
                        value={form.vehicleType}
                        onChange={handleChange}
                        placeholder="e.g. Sedan / SUV / Van"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
                          errors.vehicleType
                            ? "border-red-400"
                            : "border-navy/10"
                        }`}
                      />
                      {errors.vehicleType && (
                        <p className="text-[11px] text-red-500 mt-1 font-mono">
                          {errors.vehicleType}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/90 mb-2">
                        Vehicle Registration Year *
                      </label>
                      <input
                        name="regYear"
                        value={form.regYear}
                        onChange={handleChange}
                        placeholder="e.g. 2022"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
                          errors.regYear ? "border-red-400" : "border-navy/10"
                        }`}
                      />
                      {errors.regYear && (
                        <p className="text-[11px] text-red-500 mt-1 font-mono">
                          {errors.regYear}
                        </p>
                      )}
                    </div>
                  </div>

                  <Magnetic strength={8} className="w-full block">
                    <button
                      type="submit"
                      className="w-full py-4 rounded-full bg-sand text-navy font-bold text-xs font-mono uppercase tracking-wider transition-all shadow-lg hover:shadow-2xl flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Send Message</span>
                      <Send size={16} />
                    </button>
                  </Magnetic>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
