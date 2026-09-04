import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero";
import SplitText from "../components/SplitText";
import RevealImage from "../components/RevealImage";
import DestinationExpand from "../components/DestinationExpand";
import FeaturedServices from "../components/FeaturedServices";
import HorizontalGallery from "../components/HorizontalGallery";
import StatCounter from "../components/StatCounter";
import BlogFeature from "../components/BlogFeature";
import Testimonial from "../components/Testimonial";
import Magnetic from "../components/Magnetic";
import { services, stats, blogPosts } from "../data/content";

const whyChoosePanels = [
  {
    word: "Safety And Security",
    label: "Real-Time Protection",
    description:
      "Acciva's software provides real time monitoring, centralised to security operations, an automated safe drop confirmation through IVR call and assures response time of less than 60 seconds in any panic situations.",
    image:
      "https://images.unsplash.com/photo-1758411898007-6a17c74ef528?auto=format&fit=crop&w=1600&q=80",
  },
  {
    word: "Cost Optimization",
    label: "Maximum Efficiency",
    description:
      "It increases transport efficiency by utilising the largest technologies and reduces operation cost by utilising manpower and fleet optimally.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    word: "Technology Integration",
    label: "Automation Platform",
    description:
      "Acciva’s state of art technology is an automation platform for employee transportation that helps Rostering, routing, deployment, live tracking, paperless automated billing and e-trip sheet.",
    image:
      "https://cdn.mos.cms.futurecdn.net/CqmoQX7egZuXKVrkrrUUkH.jpg",
  },
];

const luxuryCabs = [
  {
    name: "Rolls-Royce",
    country: "Ultra Luxury",
    description: "Cullinan · Phantom · Wraith. The pinnacle of prestige motoring. Chauffeur-driven opulence for executives and high-profile events.",
    image: "https://images.unsplash.com/photo-1631295868223-63265b40d9e4?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Mercedes-Benz",
    country: "Premium Luxury",
    description: "AMG GLC · CLK · B-Class. Sophisticated engineering meets executive comfort. Perfect for corporate airport transfers and client rides.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "BMW",
    country: "Sport Luxury",
    description: "M Sport · Luxury · xDrive. The ultimate driving experience. Dynamic, refined, and built for those who expect nothing but excellence.",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Audi",
    country: "Executive Luxury",
    description: "Audi A6 · Q5 · A8 · S5. Vorsprung durch Technik. Sleek, intelligent cabins crafted for the discerning corporate traveller.",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1600&q=80",
  },
  {
    name: "Jaguar",
    country: "British Luxury",
    description: "F-TYPE · F-PACE · XF · XE. Iconic British craftsmanship meets modern performance. A statement of style for every corporate journey.",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1600&q=80",
  },
];

const journalPosts = blogPosts.filter((p) => !p.featured).slice(0, 3);

const Home = () => {
  return (
    <>
      <Hero />

      {/* Introduction + Giant image story */}
      <section className="bg-soft py-16 md:py-24 overflow-hidden">
        <div className="container-px grid md:grid-cols-12 gap-8 md:gap-8 items-start">
          <div className="md:col-span-6">
            <span className="eyebrow text-teal">About Us</span>
            <div className="mt-8 space-y-2">
              <h1 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight">
                Welcome To <span className="italic text-teal font-normal">Acciva.</span>
              </h1>
            </div>
            <div className="mt-10">
              <p className="text-slate-700 text-[15px] font-normal leading-relaxed">
                Acciva Travels has emerged to be one of the best leading Corporate Employee Transport Services &amp; Solutions Pan India. We are committed to provide quality and reliable Employee Transportation services. Our state-of-art app based Technology empowers the entire Employee Transportation Management System process for our Corporate companies.
              </p>
            </div>

            {/* Service list */}
            <div className="mt-10 space-y-3">
              {[
                "Monthly Basis Cab Taxi Hiring Services Sedan",
                "Providing Vehicles for Office Work",
                "Sedan Vehicle on Rental Basis for Corporate",
                "Hiring of Taxi Services for Corporate",
                "Cab Taxi Hiring Services Sedan / SUV / MUV",
                "Hiring of Sedan / SUV / MUV Cars",
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-start gap-3 group"
                >
                  <motion.span
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    transition={{ type: "spring", stiffness: 400, damping: 12 }}
                    className="mt-1 w-6 h-6 rounded-full bg-teal/10 border border-teal/30 flex items-center justify-center shrink-0 group-hover:bg-teal group-hover:border-teal group-hover:shadow-[0_0_0_4px] group-hover:shadow-teal/15 transition-all duration-300"
                  >
                    <svg className="w-3 h-3 text-teal group-hover:text-white transition-colors duration-300" fill="none" viewBox="0 0 10 10">
                      <motion.path
                        d="M2 5l2.5 2.5L8 3"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.4, delay: i * 0.08 + 0.2, ease: "easeOut" }}
                      />
                    </svg>
                  </motion.span>
                  <span className="text-slate-700 text-[15px] font-normal leading-relaxed">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="md:col-span-6 relative md:sticky md:top-32">
            <RevealImage
              src="https://i.pinimg.com/1200x/6e/46/5a/6e465aacc98f07549078a74b0050f979.jpg"
              alt="Acciva executive fleet vehicle"
              className="h-[38vh] md:h-[58vh] ml-auto w-full md:w-[90%]"
            />
            <div className="absolute -bottom-10 -left-4 sm:left-0 md:-left-10 w-1/2 md:w-[40%] shadow-[0_20px_60px_rgba(7,26,36,0.25)] border-4 border-soft">
              <RevealImage
                src="https://i.pinimg.com/736x/23/98/7c/23987cfd635b58c2100cb5e1ae52e388.jpg"
                alt="Acciva mixed fleet vehicles"
                className="h-[18vh] md:h-[24vh]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Luxury Cab Services */}
      <section className="bg-soft py-16 md:py-20">
        <div className="container-px mb-16">
          <span className="eyebrow text-teal">Cab Service</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 max-w-2xl tracking-tight">
            Luxury Cab Services <span className="italic text-teal font-normal">For Every Occasion.</span>
          </h2>
        </div>
        <DestinationExpand destinations={luxuryCabs} />
      </section>

      {/* Statement Banner */}
      <section className="relative bg-soft py-4 md:py-7 overflow-hidden">
        {/* Background Video & Overlays */}
        <video
          autoPlay
          loop
          muted
          playsInline
          src="/hero-mountains.mp4"
          className="absolute inset-0 w-full h-full object-cover opacity-15 scale-105 pointer-events-none"
        />
        <div className="absolute inset-0 bg-linear-to-b from-soft/95 via-soft/85 to-soft/95 pointer-events-none" />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-teal/20 rounded-full blur-3xl pointer-events-none"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
        />
        {/* Corner quarter-circle accents */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal/20 rounded-bl-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-sand/20 rounded-tr-full pointer-events-none" />

        <div className="container-px text-center relative z-10">
          <motion.div
            className="mx-auto mb-4 h-px w-12 bg-teal/40"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <div className="text-navy flex flex-col items-center">
            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display italic text-xl sm:text-2xl md:text-3xl text-navy/90 block"
            >
              Your
            </motion.span>
            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-navy block mt-1"
            >
              Next Chapter
            </motion.span>
            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ fontFamily: "var(--font-accent)", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", lineHeight: "1.08" }}
              className="italic text-teal font-normal block mt-1"
            >
              Starts Here.
            </motion.span>
          </div>
          <p className="mt-5 eyebrow text-teal font-mono tracking-widest uppercase">
            Acciva Travels · Pan-India Corporate Mobility Benchmark
          </p>
          <Magnetic className="mt-6 inline-block">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
            >
              <span>Book Now</span>
              <ArrowUpRight size={16} />
            </NavLink>
          </Magnetic>
        </div>
      </section>

      {/* What We Offer (Enhanced Featured Showcase) */}
      <section className="bg-soft pt-14 md:pt-18 pb-6 md:pb-8 text-navy">
        <div className="container-px">
          <FeaturedServices />
        </div>
      </section>

      {/* Enterprise Trust */}
      <section className="bg-soft pt-8 md:pt-10 pb-6">
        <div className="container-px">
          <span className="eyebrow text-teal">Enterprise Trust</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
            Why Enterprises <span className="italic text-teal font-normal">Trust Us.</span>
          </h2>
        </div>
      </section>
      <HorizontalGallery panels={whyChoosePanels} />

      {/* Numbers / Metrics */}
      <section className="bg-soft pt-0 md:pt-1 pb-15">
        <div className="container-px grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((s, idx) => (
            <StatCounter key={s.label} {...s} index={idx} />
          ))}
        </div>
      </section>


      {/* Creative Modern Animated Testimonials */}
      <Testimonial />

      {/* Travel Journal */}
      <section className="bg-soft pt-8 md:pt-10 pb-16 md:pb-20">
        <div className="container-px">
          <span className="eyebrow text-teal">The Journal</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 max-w-xl tracking-tight">
            Stories From The <span className="italic text-teal font-normal">Open Road.</span>
          </h2>
          <div className="mt-12">
            <BlogFeature posts={journalPosts} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <img
          src="https://i.pinimg.com/originals/0d/e5/a8/0de5a8eb83ab56ee38799cd6674b92a6.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_55%]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-neutral-300/45" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_35%_45%_at_50%_50%,rgba(212,212,212,0.88)_0%,rgba(212,212,212,0.55)_45%,rgba(212,212,212,0)_75%)]" />
        <div className="relative z-10 container-px text-center">
          <motion.span
            className="eyebrow text-teal inline-block"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Let&rsquo;s Create Your Next Journey
          </motion.span>
          <motion.div
            className="mx-auto mt-6 h-px w-20 bg-sand/60"
            style={{ transformOrigin: "center" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          />
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6">
            Where Will <br />
            <span className="italic text-teal font-normal">You Go Next?</span>
          </h2>
          <p className="mt-5 text-slate-700 text-[15px] font-normal leading-relaxed max-w-xl mx-auto">
            Tell us where your team needs to be, and we&apos;ll build a corporate mobility plan around it, from daily commutes to citywide fleet deployments.
          </p>
          <Magnetic className="mt-12">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 rounded-full border-2 border-sand bg-sand text-navy font-bold px-10 py-5 eyebrow transition-colors duration-500"
            >
              Plan Your Journey &rarr;
            </NavLink>
          </Magnetic>
        </div>
      </section>
    </>
  );
};

export default Home;






