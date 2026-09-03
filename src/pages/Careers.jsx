import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronDown,
  TrendingUp,
  Users,
  MapPin,
  Briefcase,
  Clock,
  Send,
  CheckCircle2,
  ArrowUpRight,
  Upload,
} from "lucide-react";
import Magnetic from "../components/Magnetic";
import AnimatedImage from "../components/AnimatedImage";
import { jobOpenings } from "../data/content";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  role: jobOpenings[0]?.title || "",
  experience: "",
  message: "",
};

const Careers = () => {
  const [openRole, setOpenRole] = useState(jobOpenings[0]?.slug || null);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFile = (e) => {
    const file = e.target.files?.[0];
    setFileName(file ? file.name : "");
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
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
    setFileName("");
  };

  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* 01 — SUBPAGE HEADER                                                       */}
      {/* ========================================================================= */}
      <section className="pt-32 sm:pt-36 pb-10 md:pb-12 bg-soft">
        <div className="container-px">
          <div className="flex items-center gap-2 text-xs font-mono text-navy/40 mb-6 uppercase tracking-wider">
            <NavLink to="/" className="hover:text-teal transition-colors">
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Careers</span>
          </div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="eyebrow text-teal">01 — Join Our Team</span>
              <h1 className="font-display text-navy text-3xl sm:text-5xl md:text-6xl leading-[1.08] mt-6 tracking-tight">
                Build the Future of{" "}
                <span className="italic text-teal font-normal">Corporate Mobility.</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="max-w-md text-navy/75 text-base sm:text-lg font-light leading-relaxed pb-2"
            >
              Join a 500+ member pan-India team keeping enterprise fleets safe,
              punctual, and moving — from driver captains to command center
              operations.
            </motion.p>
          </div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-navy/10 mb-12 group">
            <AnimatedImage
              src="https://images.unsplash.com/photo-1626941946705-10e82ef4c533?auto=format&fit=crop&w=1600&q=80"
              alt="Acciva Travels Professional Driver Behind the Wheel"
              effect="zoom-in"
              duration={0.9}
              className="w-full h-[340px] sm:h-[440px] md:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            {[
              { icon: Users, value: "500+", label: "Team Members" },
              { icon: MapPin, value: "6 Metros", label: "Pan-India Presence" },
              { icon: Briefcase, value: `${jobOpenings.length} Open Roles`, label: "Hiring Now" },
              { icon: TrendingUp, value: "80%", label: "Promoted Internally" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -4 }}
                className="p-5 rounded-2xl bg-white border border-navy/10 hover:border-teal/40 hover:shadow-md transition-[border-color,box-shadow] flex items-center gap-4 group"
              >
                <div className="w-11 h-11 rounded-xl bg-teal/10 group-hover:bg-teal group-hover:text-ivory transition-colors flex items-center justify-center text-teal shrink-0">
                  <stat.icon size={22} />
                </div>
                <div>
                  <p className="font-display text-xl sm:text-2xl text-navy font-bold">
                    {stat.value}
                  </p>
                  <p className="text-[11px] font-mono text-navy/50 uppercase">
                    {stat.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — OPEN POSITIONS ACCORDION                                             */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-12"
          >
            <span className="eyebrow text-teal">02 — Current Openings</span>
            <h2 className="font-display text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
              Open{" "}
              <span className="italic text-teal font-normal">Positions.</span>
            </h2>
          </motion.div>

          <div className="space-y-4 max-w-6xl">
            {jobOpenings.map((job, i) => {
              const isOpen = openRole === job.slug;
              return (
                <motion.div
                  key={job.slug}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                  className="rounded-2xl bg-soft border-2 border-navy/15 shadow-sm hover:border-teal/50 hover:shadow-md transition-all overflow-hidden"
                >
                  <button
                    onClick={() => setOpenRole(isOpen ? null : job.slug)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer"
                  >
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-1">
                        <h3 className="font-display text-lg sm:text-xl text-navy">
                          {job.title}
                        </h3>
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-teal/10 text-teal">
                          {job.department}
                        </span>
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-xs text-navy/55 font-mono uppercase tracking-wide">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={12} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} /> {job.type}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Briefcase size={12} /> {job.experience}
                        </span>
                      </div>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-9 h-9 rounded-full bg-white border border-navy/10 flex items-center justify-center text-navy shrink-0"
                    >
                      <ChevronDown size={16} />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-1 border-t border-navy/10">
                          <p className="text-sm text-navy/70 font-light leading-relaxed mt-4 mb-4">
                            {job.description}
                          </p>
                          <p className="text-xs font-mono uppercase tracking-wider text-navy/50 mb-2">
                            Requirements
                          </p>
                          <ul className="space-y-1.5 mb-5">
                            {job.requirements.map((req) => (
                              <li
                                key={req}
                                className="text-sm text-navy/70 flex items-start gap-2"
                              >
                                <CheckCircle2 size={14} className="text-teal shrink-0 mt-0.5" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                          <button
                            onClick={() => {
                              setForm((prev) => ({ ...prev, role: job.title }));
                              document
                                .getElementById("application-form")
                                ?.scrollIntoView({ behavior: "smooth", block: "start" });
                            }}
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-ivory text-xs font-mono font-semibold uppercase tracking-wider hover:bg-teal transition-all cursor-pointer"
                          >
                            <span>Apply for this Role</span>
                            <ArrowUpRight size={14} />
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 04 — APPLICATION FORM                                                     */}
      {/* ========================================================================= */}
      <section id="application-form" className="py-16 md:py-20 bg-soft scroll-mt-24">
        <div className="container-px">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5"
            >
              <span className="eyebrow text-teal">03 — Apply Now</span>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                Ready To{" "}
                <span className="italic text-teal font-normal">Get Started?</span>
              </h2>
              <p className="mt-5 text-navy/70 text-sm sm:text-base font-light leading-relaxed max-w-md">
                Fill out the form and attach your resume. Our HR team reviews
                every application and responds within 3 business days.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <div className="p-7 sm:p-10 rounded-3xl bg-white border border-navy/10 shadow-2xl">
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-teal/10 border border-teal/30 text-navy mb-8 flex items-center gap-4"
                  >
                    <CheckCircle2 size={24} className="text-teal shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-sm text-navy">
                        Application Received!
                      </h4>
                      <p className="text-xs text-navy/70 mt-0.5 font-light">
                        Our HR team will review your profile and reach out within
                        3 business days.
                      </p>
                    </div>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
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
                        <p className="text-[11px] text-red-500 mt-1 font-mono">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                        Position Applying For
                      </label>
                      <input
                        name="role"
                        value={form.role}
                        onChange={handleChange}
                        placeholder="e.g. Fleet Driver Captain"
                        className="w-full px-4 py-3.5 rounded-2xl bg-soft border border-navy/10 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="arjun@email.com"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
                          errors.email ? "border-red-400" : "border-navy/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 font-mono">{errors.email}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
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
                        <p className="text-[11px] text-red-500 mt-1 font-mono">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                      Years of Experience
                    </label>
                    <input
                      name="experience"
                      value={form.experience}
                      onChange={handleChange}
                      placeholder="e.g. 3 years"
                      className="w-full px-4 py-3.5 rounded-2xl bg-soft border border-navy/10 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                      Resume / CV
                    </label>
                    <label
                      htmlFor="resume-upload"
                      className="w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl bg-soft border border-navy/10 text-sm text-navy/50 cursor-pointer hover:border-teal transition-colors"
                    >
                      <Upload size={16} className="text-teal shrink-0" />
                      <span className="truncate">
                        {fileName || "Upload PDF or DOCX (max 5MB)"}
                      </span>
                    </label>
                    <input
                      id="resume-upload"
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFile}
                      className="hidden"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                      Cover Note (Optional)
                    </label>
                    <textarea
                      name="message"
                      rows={3}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about yourself and why you'd like to join Acciva..."
                      className="w-full px-4 py-3.5 rounded-2xl bg-soft border border-navy/10 text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-navy text-ivory font-bold text-xs font-mono uppercase tracking-wider hover:bg-teal transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Submit Application</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 05 — CLOSING CTA                                                          */}
      {/* ========================================================================= */}
      <section className="py-12 md:py-16 bg-soft text-navy relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-4xl mx-auto">
          <span className="eyebrow text-teal inline-block">04 — Don't See Your Role?</span>

          <motion.div
            className="mx-auto my-6 h-px w-16 bg-sand/60"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <h2 className="font-display text-3xl sm:text-5xl md:text-6xl leading-[1.08] tracking-tight">
            We're Always Looking For{" "}
            <span className="italic text-teal font-normal">Great Talent.</span>
          </h2>

          <p className="mt-6 text-navy/75 text-base sm:text-xl font-light max-w-2xl mx-auto leading-relaxed">
            Send us your resume for future opportunities and our HR team will
            reach out when a matching role opens up.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-5">
            <Magnetic strength={20}>
              <a
                href="mailto:careers@accivatravels.com"
                className="inline-flex items-center gap-3 px-9 py-4 rounded-full bg-sand text-navy font-bold text-sm sm:text-base hover:bg-navy hover:text-ivory hover:shadow-2xl hover:scale-105 transition-all shadow-xl"
              >
                <span>Email careers@accivatravels.com</span>
                <ArrowUpRight size={18} />
              </a>
            </Magnetic>

            <Magnetic strength={15}>
              <NavLink
                to="/about"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-navy/20 bg-white text-navy hover:bg-navy/5 hover:border-navy/40 transition-all text-sm font-medium"
              >
                <span>Learn About Acciva</span>
              </NavLink>
            </Magnetic>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
