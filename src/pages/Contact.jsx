import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Building2,
  ChevronRight,
  Headphones,
  Award,
  ArrowUpRight,
} from "lucide-react";
import AnimatedImage from "../components/AnimatedImage";

const SUBJECT_OPTIONS = [
  "Corporate Employee Transportation",
  "Fleet Management Inquiry",
  "Airport Transfer Services",
  "Vehicle Partner / Careers",
  "General Inquiry",
  "Other",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  subject: SUBJECT_OPTIONS[0],
  customSubject: "",
  message: "",
};

const Contact = () => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
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
    if (form.subject === "Other" && !form.customSubject.trim()) {
      newErrors.customSubject = "Please specify a subject";
    }
    if (!form.message.trim()) newErrors.message = "Please provide details";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      setStatus("error");
      return;
    }

    const subjectLine = form.subject === "Other" ? form.customSubject : form.subject;
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY,
          subject: `New Contact Form: ${subjectLine}`,
          name: form.name,
          email: form.email,
          phone: form.phone,
          form_subject: subjectLine,
          message: form.message,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) throw new Error("Send failed");

      setStatus("success");
      setForm(initialForm);
    } catch {
      setStatus("send-error");
    }
  };

  return (
    <div className="bg-soft text-navy overflow-hidden">
      {/* ========================================================================= */}
      {/* MAIN SECTION: SUBPAGE HEADER & IMMEDIATE CONTACT FORM FIRST          */}
      {/* ========================================================================= */}
      <section
        className="pt-28 sm:pt-32 pb-4 md:pb-6 relative overflow-hidden"
        style={{
          backgroundImage: `url('https://carwow-uk-wp-2.imgix.net/Volvo-XC40-white-scaled.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600')`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundAttachment: "fixed",
        }}
      >
        {/* Light overlay for text legibility */}
        <div className="absolute inset-0 bg-slate-300/80 backdrop-blur-[1px]" />

        <div className="container-px relative z-10">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-bold text-navy mb-6 uppercase tracking-wider">
            <NavLink
              to="/"
              className="hover:text-teal transition-colors text-navy/70 font-bold"
            >
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Contact Us</span>
          </div>

          {/* Title & Intro Row */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="max-w-3xl"
            >
              <span className="eyebrow text-teal">Get In Touch</span>

              <h1 className="font-display text-navy text-3xl sm:text-4xl md:text-5xl leading-[1.08] mt-6 tracking-tight">
                Connect With Our{" "}
                <span className="italic text-teal font-normal">
                  Mobility Specialists.
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-md text-navy/90 text-[15px] font-medium leading-relaxed pb-2"
            >
              Request customized enterprise proposals, corporate rate cards,
              tech park shuttle network setups, or 24/7 dispatch support.
            </motion.p>
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 bg-soft">
        <div className="container-px">
          {/* 2-Column Main Section: Left Visuals & Info | Right Contact Form FIRST */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* RIGHT COLUMN (Placed in Grid Col 7-12) - THE CONTACT FORM */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7 order-1 lg:order-2"
            >
              <div className="p-7 sm:p-10 md:p-12 rounded-3xl bg-white border border-navy/10 shadow-2xl relative">
                <div className="mb-8 pb-6 border-b border-navy/10 flex items-center justify-between">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy leading-[1.08] tracking-tight">
                      Request Enterprise Proposal
                    </h2>
                    <p className="text-slate-600 text-[15px] font-normal leading-relaxed mt-1">
                      Submit your fleet requirements below. Our corporate team
                      will respond within 4 hours.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                    <Send size={20} />
                  </div>
                </div>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-teal/10 border border-teal/30 text-navy mb-8 flex items-center gap-4"
                  >
                    <CheckCircle2 size={24} className="text-teal shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-sm text-navy">
                        Inquiry Received Successfully!
                      </h4>
                      <p className="text-slate-600 text-[15px] font-normal leading-relaxed mt-0.5">
                        Our corporate enterprise manager will review your
                        requirement and get back to you shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === "send-error" && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-6 rounded-2xl bg-red-50 border border-red-200 text-navy mb-8 flex items-center gap-4"
                  >
                    <div>
                      <h4 className="font-sans font-bold text-sm text-navy">
                        Something Went Wrong
                      </h4>
                      <p className="text-slate-600 text-[15px] font-normal leading-relaxed mt-0.5">
                        We couldn't send your message right now. Please try
                        again in a moment.
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
                        placeholder="e.g. Rajesh Kumar"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border font-sans text-[15px] text-navy placeholder:font-sans placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
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
                        Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rajesh@company.com"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border font-sans text-[15px] text-navy placeholder:font-sans placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
                          errors.email ? "border-red-400" : "border-navy/10"
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-red-500 mt-1 font-mono">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/90 mb-2">
                        Phone Number *
                      </label>
                      <input
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border font-sans text-[15px] text-navy placeholder:font-sans placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
                          errors.phone ? "border-red-400" : "border-navy/10"
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 font-mono">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/90 mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-2xl bg-soft border border-navy/10 font-sans text-[15px] text-navy focus:outline-none focus:border-teal transition-colors"
                      >
                        {SUBJECT_OPTIONS.map((option) => (
                          <option key={option}>{option}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {form.subject === "Other" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/90 mb-2">
                        Please Specify Subject *
                      </label>
                      <input
                        name="customSubject"
                        value={form.customSubject}
                        onChange={handleChange}
                        placeholder="Type your subject here..."
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border font-sans text-[15px] text-navy placeholder:font-sans placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
                          errors.customSubject
                            ? "border-red-400"
                            : "border-navy/10"
                        }`}
                      />
                      {errors.customSubject && (
                        <p className="text-[11px] text-red-500 mt-1 font-mono">
                          {errors.customSubject}
                        </p>
                      )}
                    </motion.div>
                  )}

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-navy/90 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us how we can help..."
                      className={`w-full px-4 py-3.5 rounded-2xl bg-soft border font-sans text-[15px] text-navy placeholder:font-sans placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors resize-none ${
                        errors.message ? "border-red-400" : "border-navy/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 font-mono">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    <span>{status === "sending" ? "Sending..." : "Send Message"}</span>
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              </div>
            </motion.div>

            {/* LEFT COLUMN (Grid Col 1-5) - SHOWCASE IMAGE BANNER & CONTACT CHANNELS */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="lg:col-span-5 order-2 lg:order-1 space-y-6"
            >
              {/* Showcase Image Banner */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-navy/10 group">
                <AnimatedImage
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Acciva Corporate Command & Operations"
                  effect="zoom-in"
                  eager
                  duration={0.9}
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Direct Contact Cards with Hover Spring */}
              <div className="space-y-3">
                <motion.a
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  href="tel:+919035012166"
                  className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs hover:border-teal/50 hover:shadow-md transition-[border-color,box-shadow] group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-navy/50 uppercase">
                      Direct Enterprise Line
                    </p>
                    <p className="font-sans font-bold text-sm text-navy group-hover:text-teal transition-colors">
                      +91 903 501 2166 / +91 80 2354 1166
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.05,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  href="mailto:info@accivatravels.com"
                  className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs hover:border-teal/50 hover:shadow-md transition-[border-color,box-shadow] group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-navy/50 uppercase">
                      Corporate RFPs & Inquiries
                    </p>
                    <p className="font-sans font-bold text-sm text-navy group-hover:text-teal transition-colors">
                      info@accivatravels.com
                    </p>
                  </div>
                </motion.a>

                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-navy/50 uppercase">
                      Central Operations HQ
                    </p>
                    <p className="font-sans font-bold text-sm text-navy leading-snug">
                      # 52, 1 Main Road, Anand Nagar, Hebbal,
                      Bengaluru 560024.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-navy/50 uppercase">
                      Ground Dispatch Tower
                    </p>
                    <p className="font-sans font-bold text-sm text-teal">
                      24/7/365 Non-Stop Operations
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE LOCATION & GOOGLE MAP SECTION                            */}
      {/* ========================================================================= */}
      <section className="pb-16 md:pb-20 bg-soft">
        <div className="container-px">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl mx-auto rounded-3xl overflow-hidden bg-white border border-navy/10 shadow-2xl"
          >
            {/* Top Map Bar */}
            <div className="p-6 md:p-8 bg-white border-b border-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="eyebrow text-teal block mb-3">
                  Central Command & Fleet Dispatch
                </span>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy leading-[1.08] tracking-tight mt-1">
                  Acciva Travels Headquarters in{" "}
                  <span className="italic text-teal font-normal">
                    Bengaluru.
                  </span>
                </h2>
                <p className="text-slate-600 text-[15px] font-normal leading-relaxed mt-1">
                  Serving Manyata Tech Park, Electronic City, Whitefield, Outer
                  Ring Road & Pan-India Corridors.
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Bengaluru,+Karnataka,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl shrink-0"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-[260px] sm:h-[320px] relative bg-navy/5">
              <iframe
                title="Acciva Travels Bengaluru Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0961003448615!2d77.59094080000001!3d13.029551899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179675b10e35%3A0x4e2fa4b235d073e4!2sAcciva%20Travels%20Private%20Limited!5e0!3m2!1sen!2sin!4v1788930808147!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CLOSING ASSISTANCE BANNER                                            */}
      {/* ========================================================================= */}
      <section className="py-8 md:py-10 bg-soft text-navy relative overflow-hidden">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[240px] bg-teal/15 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 25, 0], y: [0, -15, 0] }}
          transition={{
            duration: 9,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
        {/* Corner quarter-circle accents — section-scale echo of the card motif */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-sand/25 rounded-tr-full pointer-events-none" />

        <div className="container-px relative z-10 text-center max-w-3xl mx-auto">
          <span className="eyebrow text-teal inline-block mb-4">
            Dedicated Enterprise Mobility
          </span>

          <motion.div
            className="mx-auto mb-6 h-px w-14 bg-teal/50"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-navy leading-[1.08] tracking-tight">
            Need Immediate Assistance Or{" "}
            <span className="italic text-teal font-normal">
              Fleet Consultation?
            </span>
          </h2>

          <p className="mt-3 text-slate-700 text-[15px] font-normal leading-relaxed">
            Our corporate transit managers are available round-the-clock to
            structure scalable transit contracts for your team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <NavLink
              to="/services"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
            >
              <span>Explore Fleet Capabilities</span>
              <ArrowUpRight size={16} />
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;








