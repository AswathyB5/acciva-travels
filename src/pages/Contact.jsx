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

const initialForm = {
  name: "",
  company: "",
  email: "",
  phone: "",
  serviceType: "Corporate Employee Transportation",
  fleetSize: "10-50 Cabs",
  city: "Bengaluru",
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
    if (!form.company.trim()) newErrors.company = "Company name is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Enter a valid corporate email";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    if (!form.message.trim()) newErrors.message = "Please provide details";
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
      {/* 01 — MAIN SECTION: SUBPAGE HEADER & IMMEDIATE CONTACT FORM FIRST          */}
      {/* ========================================================================= */}
      <section className="pt-36 sm:pt-44 pb-20 md:pb-28 bg-soft">
        <div className="container-px">
          {/* Breadcrumb Navigation */}
          <div className="flex items-center gap-2 text-xs font-mono text-navy/40 mb-6 uppercase tracking-wider">
            <NavLink to="/" className="hover:text-teal transition-colors">
              Home
            </NavLink>
            <ChevronRight size={12} />
            <span className="text-teal font-semibold">Contact Us</span>
          </div>

          {/* Full Width Stacked Header: Each on a Separate Row */}
          <div className="w-full mb-12 space-y-4">
            {/* Row 1: Badges */}
            <div className="flex items-center gap-3">
              <span className="px-3.5 py-1 rounded-full bg-teal/10 border border-teal/20 text-teal text-[11px] font-mono tracking-widest uppercase font-semibold">
                Enterprise Inquiries & RFPs
              </span>
              <span className="text-xs font-mono text-navy/40">
                24/7 Dedicated Command Tower
              </span>
            </div>

            {/* Row 2: Main Heading */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[76px] text-navy leading-[1.04] tracking-tight w-full">
              Connect with Our{" "}
              <span className="italic text-teal font-normal">
                Mobility Specialists.
              </span>
            </h1>

            {/* Row 3: Description */}
            <p className="text-navy/70 text-base sm:text-xl font-light leading-relaxed max-w-4xl pt-2">
              Request customized enterprise proposals, corporate rate cards, tech park shuttle network setups, or 24/7 dispatch support.
            </p>
          </div>

          {/* 2-Column Main Section: Left Visuals & Info | Right Contact Form FIRST */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* RIGHT COLUMN (Placed in Grid Col 7-12) - THE CONTACT FORM */}
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="p-7 sm:p-10 md:p-12 rounded-3xl bg-white border border-navy/10 shadow-2xl relative">
                <div className="mb-8 pb-6 border-b border-navy/10 flex items-center justify-between">
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl text-navy">
                      Request Enterprise Proposal
                    </h2>
                    <p className="text-xs sm:text-sm text-navy/60 mt-1 font-light">
                      Submit your fleet requirements below. Our corporate team will respond within 4 hours.
                    </p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-teal/10 text-teal flex items-center justify-center shrink-0">
                    <Send size={20} />
                  </div>
                </div>

                {status === "success" && (
                  <div className="p-6 rounded-2xl bg-teal/10 border border-teal/30 text-navy mb-8 flex items-center gap-4">
                    <CheckCircle2 size={24} className="text-teal shrink-0" />
                    <div>
                      <h4 className="font-sans font-bold text-sm text-navy">
                        Inquiry Received Successfully!
                      </h4>
                      <p className="text-xs text-navy/70 mt-0.5 font-light">
                        Our corporate enterprise manager will review your requirement and send over the proposal within 4 hours.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} noValidate className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                        Contact Person Name *
                      </label>
                      <input
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="e.g. Rajesh Kumar"
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
                        Company / Organization *
                      </label>
                      <input
                        name="company"
                        value={form.company}
                        onChange={handleChange}
                        placeholder="e.g. Infosys / Microsoft / Target"
                        className={`w-full px-4 py-3.5 rounded-2xl bg-soft border text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors ${
                          errors.company ? "border-red-400" : "border-navy/10"
                        }`}
                      />
                      {errors.company && (
                        <p className="text-[11px] text-red-500 mt-1 font-mono">{errors.company}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                        Corporate Email Address *
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="rajesh@company.com"
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
                        Phone / Mobile Number *
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

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                        Service Required
                      </label>
                      <select
                        name="serviceType"
                        value={form.serviceType}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-2xl bg-soft border border-navy/10 text-sm text-navy focus:outline-none focus:border-teal transition-colors cursor-pointer"
                      >
                        <option value="Corporate Employee Transportation">Corporate Employee Transportation</option>
                        <option value="Enterprise Fleet Management">Enterprise Fleet Management</option>
                        <option value="Airport Transfer Services">Airport Transfer Services</option>
                        <option value="Staff Bus & Campus Shuttle">Staff Bus & Campus Shuttle</option>
                        <option value="Corporate Ad-Hoc & VIP Delegations">Corporate Ad-Hoc & VIP Delegations</option>
                        <option value="Outstation & Inter-City Transit">Outstation & Inter-City Transit</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                        Primary City / Metro
                      </label>
                      <select
                        name="city"
                        value={form.city}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-2xl bg-soft border border-navy/10 text-sm text-navy focus:outline-none focus:border-teal transition-colors cursor-pointer"
                      >
                        <option value="Bengaluru">Bengaluru (HQ)</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Ahmedabad">Ahmedabad</option>
                        <option value="Kolkata">Kolkata</option>
                        <option value="Kochi">Kochi</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-navy/70 mb-2">
                      Specific Fleet Requirements & Shift Details *
                    </label>
                    <textarea
                      rows={4}
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Share estimated employee headcount, shift timings, vehicle type preference (Sedans / SUVs / TTs / Buses), or any specific RFP requirements..."
                      className={`w-full px-4 py-3.5 rounded-2xl bg-soft border text-sm text-navy placeholder:text-navy/30 focus:outline-none focus:border-teal transition-colors resize-none ${
                        errors.message ? "border-red-400" : "border-navy/10"
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-red-500 mt-1 font-mono">{errors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-navy text-ivory font-bold text-sm sm:text-base hover:bg-teal transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg hover:shadow-xl"
                  >
                    <span>Submit Enterprise Inquiry</span>
                    <Send size={16} />
                  </button>
                </form>
              </div>
            </div>

            {/* LEFT COLUMN (Grid Col 1-5) - SHOWCASE IMAGE BANNER & CONTACT CHANNELS */}
            <div className="lg:col-span-5 order-2 lg:order-1 space-y-6">
              {/* Showcase Image Banner */}
              <div className="relative rounded-3xl overflow-hidden shadow-xl border border-navy/10 group">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Acciva Corporate Command & Operations"
                  className="w-full h-72 sm:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Direct Contact Cards */}
              <div className="space-y-3">
                <a
                  href="tel:+919035012166"
                  className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs hover:border-teal/50 hover:shadow-md transition-all group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-navy/50 uppercase">Direct Enterprise Line</p>
                    <p className="font-sans font-bold text-sm text-navy group-hover:text-teal transition-colors">
                      +91 903 501 2166 / +91 80 2354 1166
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:info@accivatravels.com"
                  className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs hover:border-teal/50 hover:shadow-md transition-all group flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0 group-hover:bg-teal group-hover:text-white transition-colors">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-navy/50 uppercase">Corporate RFPs & Inquiries</p>
                    <p className="font-sans font-bold text-sm text-navy group-hover:text-teal transition-colors">
                      info@accivatravels.com
                    </p>
                  </div>
                </a>

                <div className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-navy/50 uppercase">Central Operations HQ</p>
                    <p className="font-sans font-bold text-sm text-navy">
                      Bengaluru, Karnataka, India
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-navy/10 shadow-xs flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center text-teal shrink-0">
                    <Clock size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-navy/50 uppercase">Ground Dispatch Tower</p>
                    <p className="font-sans font-bold text-sm text-teal">
                      24/7/365 Non-Stop Operations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 02 — INTERACTIVE LOCATION & GOOGLE MAP SECTION                            */}
      {/* ========================================================================= */}
      <section className="pb-24 md:pb-36 bg-soft">
        <div className="container-px">
          <div className="rounded-3xl overflow-hidden bg-white border border-navy/10 shadow-2xl">
            {/* Top Map Bar */}
            <div className="p-6 md:p-8 bg-white border-b border-navy/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-teal font-semibold block">
                  Central Command & Fleet Dispatch Center
                </span>
                <h3 className="font-display text-2xl sm:text-3xl text-navy mt-1">
                  Acciva Travels Headquarters &mdash; Bengaluru
                </h3>
                <p className="text-xs text-navy/60 mt-1">
                  Serving Manyata Tech Park, Electronic City, Whitefield, Outer Ring Road & Pan-India Corridors.
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Bengaluru,+Karnataka,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-navy text-ivory text-xs font-mono font-semibold hover:bg-teal transition-all shrink-0 shadow-xs"
              >
                <span>Open in Google Maps</span>
                <ArrowUpRight size={14} />
              </a>
            </div>

            {/* Embedded Map */}
            <div className="w-full h-[380px] sm:h-[460px] relative bg-navy/5">
              <iframe
                title="Acciva Travels Bengaluru Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.49085449742426!3d12.95395998811883!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1709123456789!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 03 — CLOSING ASSISTANCE BANNER                                            */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-midnight text-ivory relative overflow-hidden border-t border-ivory/15">
        <div className="container-px text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sand/15 border border-sand/30 text-sand text-xs font-mono uppercase tracking-widest mb-4">
            <Award size={14} />
            <span>Dedicated Enterprise Mobility</span>
          </div>

          <h3 className="font-display text-3xl sm:text-4xl text-ivory">
            Need Immediate Assistance or Fleet Consultation?
          </h3>

          <p className="mt-3 text-ivory/70 text-sm sm:text-base font-light">
            Our corporate transit managers are available round-the-clock to structure scalable transit contracts for your team.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="tel:+919035012166"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-xs hover:bg-white transition-all shadow-md"
            >
              <span>Call +91 903 501 2166</span>
              <ArrowUpRight size={14} />
            </a>
            <NavLink
              to="/services"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-ivory/20 text-ivory hover:bg-white/10 transition-all text-xs font-medium"
            >
              <span>Explore Fleet Capabilities</span>
            </NavLink>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
