import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero";
import Industries from "../components/Industries";
import RevealImage from "../components/RevealImage";
import DestinationExpand from "../components/DestinationExpand";
import FeaturedServices from "../components/FeaturedServices";
import WhyAcciva from "../components/WhyAcciva";
import StatCounter from "../components/StatCounter";
import BlogFeature from "../components/BlogFeature";
import Testimonial from "../components/Testimonial";
import Magnetic from "../components/Magnetic";
import SmartLink from "../components/SmartLink";
import { stats as fallbackStats, blogPosts as fallbackBlogPosts } from "../data/content";
import { useCollection, usePageContent } from "../data/useContent";

const HOME_DEFAULTS = {
  heroTitle: "Corporate Mobility & Transportation Solutions for a Moving Business World",
  heroSupporting:
    "Employee Transportation | Corporate Cabs | Corporate Car Rentals | Executive Mobility | Long-Term Leasing | Logistics | Truck Services | Events | PAN India Mobility",
  heroDesc:
    "Acciva Travels provides end-to-end mobility, transportation and logistics solutions for businesses-from daily employee pick-up and drop to executive travel, long-term vehicle leasing, commercial trucks, logistics movement, corporate events and PAN India transportation requirements.",
  heroCta1: "Get a Corporate Mobility Consultation",
  heroCta2: "Request a Corporate Quotation",
  heroCta3: "Talk to Our Mobility Team",
  heroImage1: "/images/hero1.webp",
  heroImage2: "/images/hero2.webp",
  heroImage3: "/images/hero3.webp",
  introEyebrow: "About Us",
  introHeadingMain: "Welcome To",
  introHeadingAccent: "Acciva.",
  introParagraph:
    "Acciva Travels has emerged to be one of the best leading Corporate Employee Transport Services & Solutions Pan India. We are committed to provide quality and reliable Employee Transportation services. Our state-of-art app based Technology empowers the entire Employee Transportation Management System process for our Corporate companies.",
  introServiceList: [
    "Monthly Basis Cab Taxi Hiring Services Sedan",
    "Providing Vehicles for Office Work",
    "Sedan Vehicle on Rental Basis for Corporate",
    "Hiring of Taxi Services for Corporate",
    "Cab Taxi Hiring Services Sedan / SUV / MUV",
    "Hiring of Sedan / SUV / MUV Cars",
  ],
  introImageMain:
    "https://content.jdmagicbox.com/v2/comp/guwahati/c8/9999px361.x361.260624114535.r2c8/catalogue/ne-car-sarfari-azara-guwahati-travel-agents-0y05j0do2u.jpg",
  introImageSecondary:
    "https://static.vecteezy.com/system/resources/thumbnails/060/206/512/small/a-row-of-cars-parked-in-a-parking-lot-free-photo.jpeg",
  fleetEyebrow: "Our Fleet",
  fleetHeadingMain: "A Vehicle For",
  fleetHeadingAccent: "Every Corporate Need.",
  fleetShowcaseLabel: "Corporate Fleet Showcase · Hover to Expand",
  fleetCtaLabel: "Book This Fleet",
  fleetCtaLink: "/services",
  fleetItems: [
    { name: "Sedan", country: "Everyday Corporate Travel", description: "Comfortable, fuel-efficient sedans for daily employee commutes and routine office travel.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Toyota_Camry_2.5_Hybrid_Ascent_Sport_%28IX%29_%E2%80%93_f_02012026.jpg/1280px-Toyota_Camry_2.5_Hybrid_Ascent_Sport_%28IX%29_%E2%80%93_f_02012026.jpg" },
    { name: "MPV", country: "Family & Group Travel", description: "Spacious multi-purpose vehicles built for small teams travelling together in comfort.", image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg/1280px-Toyota_Innova_Crysta_2.4_Z_front_right.jpg" },
    { name: "SUV", country: "All-Terrain Comfort", description: "Rugged, powerful SUVs that handle any terrain for site visits and outstation assignments.", image: "https://upload.wikimedia.org/wikipedia/commons/1/1f/2024_Toyota_RAV4_Cruiser_Hybrid_front.jpg" },
    { name: "Luxury Sedan", country: "Premium Business Class", description: "Refined luxury sedans that make the right impression for client meetings and executive travel.", image: "https://5.imimg.com/data5/SELLER/Default/2026/7/630120673/LH/ZG/IH/82002021/bmw-7-series-car-rental-service-500x500.jpeg" },
    { name: "Ultra-Luxury Executive", country: "Boardroom On Wheels", description: "Top-tier chauffeured vehicles designed for VIP delegates and high-stakes corporate travel.", image: "https://i.ytimg.com/vi/3bMYs-09ONU/hq720.jpg" },
    { name: "Tempo Traveller", country: "Group Transport", description: "Reliable tempo travellers for mid-sized groups moving together to events or off-sites.", image: "https://cabtaxirentalservicejodhpur.com/assets/img/vehicle/12-seater-tempo-traveller-jodhpur.webp" },
    { name: "Mini Bus", country: "Shared Mobility", description: "Efficient mini buses that keep larger teams connected with shared, scheduled transport.", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDTUp-WRvnjwiNnvdeol89AXwHWwAeNde3M_ag4kMtPxsjg7AFaMKjHwoq&s=10" },
    { name: "Staff Bus", country: "Employee Transport", description: "Dedicated staff buses that make daily employee pick-up and drop reliable at scale.", image: "https://jcbl.com/jcbl-images/products/elite/banner.jpg" },
    { name: "Truck", country: "Logistics Fleet", description: "Sturdy trucks that keep your logistics and material movement running on schedule.", image: "https://t3.ftcdn.net/jpg/03/52/78/44/360_F_352784409_vACH9AegP2m2xM7l6nppLUazM7LhFiz1.jpg" },
  ],
  statementLine1: "One Partner.",
  statementLine2: "One Platform.",
  statementLine3: "Complete Mobility.",
  statementTagline: "Acciva Travels · Pan-India Corporate Mobility Benchmark",
  statementCta: "Book Now",
  servicesEyebrow: "Our Services",
  servicesHeadingMain: "Our Transport",
  servicesHeadingAccent: "Services.",
  servicesButtonText: "Explore All Services",
  servicesButtonLink: "/services",
  servicesCardButtonText: "View Specifications",
  servicesCardButtonLink: "/services",
  servicesStripTitle: "Full Spectrum Fleet Management",
  servicesStripDescription:
    "Also providing Dedicated Staff Bus Shuttles, Corporate VIP Delegations & Inter-City Business Transit.",
  servicesStripButtonText: "View All Capabilities",
  servicesStripButtonLink: "/services",
  industriesEyebrow: "Industries We Serve",
  industriesHeadingMain: "Trusted Across",
  industriesHeadingAccent: "Every Sector.",
  industriesParagraph:
    "From fast-scaling startups to established multinationals, Acciva powers corporate mobility for organisations across every industry vertical, PAN India.",
  industriesList: [
    { name: "IT & Technology", icon: "Cpu" },
    { name: "ITES", icon: "Headset" },
    { name: "BFSI", icon: "Landmark" },
    { name: "Manufacturing", icon: "Factory" },
    { name: "Healthcare", icon: "HeartPulse" },
    { name: "Pharmaceuticals", icon: "Pill" },
    { name: "Consulting", icon: "Briefcase" },
    { name: "Engineering", icon: "Cog" },
    { name: "Automotive", icon: "Car" },
    { name: "Electronics", icon: "CircuitBoard" },
    { name: "E-commerce", icon: "ShoppingCart" },
    { name: "Logistics", icon: "Truck" },
    { name: "Retail", icon: "Store" },
    { name: "Global Capability Centres", icon: "Globe2" },
    { name: "Startups", icon: "Rocket" },
    { name: "MNCs", icon: "Building2" },
    { name: "Industrial Companies", icon: "Factory" },
    { name: "Corporate Offices", icon: "Building" },
  ],
  whyEyebrow: "Why Acciva Travels",
  whyHeadingMain: "Why Enterprises",
  whyHeadingAccent: "Trust Us.",
  whyReasons: [
    { title: "One-Stop Mobility", description: "Multiple transportation services under one partner.", icon: "Car" },
    { title: "Operational Expertise", description: "Professionally managed transportation operations.", icon: "ShieldCheck" },
    { title: "Technology Enabled", description: "Technology-supported visibility and control where available.", icon: "Navigation" },
    { title: "Scalable Fleet", description: "Solutions from individual executives to large employee transportation programs.", icon: "Building2" },
    { title: "Professional Drivers", description: "Focus on safety, discipline and customer experience.", icon: "ShieldCheck" },
    { title: "PAN India Capability", description: "Multi-city mobility based on genuine service coverage.", icon: "MapPin" },
    { title: "Operational Support", description: "Support aligned to actual service commitments.", icon: "Headphones" },
    { title: "End-to-End Management", description: "From requirement and allocation through trip completion, reporting and billing.", icon: "Award" },
  ],
  testimonialsEyebrow: "Enterprise Trust & Reviews",
  testimonialsHeadingMain: "Trusted By India's Leading",
  testimonialsHeadingAccent: "Enterprises.",
  journalEyebrow: "The Journal",
  journalHeadingMain: "Stories From The",
  journalHeadingAccent: "Open Road.",
  ctaEyebrow: "Let's Create Your Next Journey",
  ctaHeadingMain: "Where Will",
  ctaHeadingAccent: "You Go Next?",
  ctaParagraph:
    "Tell us where your team needs to be, and we'll build a corporate mobility plan around it, from daily commutes to citywide fleet deployments.",
  ctaButtonText: "Plan Your Journey",
  ctaButtonLink: "/contact",
  ctaBackgroundImage: "https://t4.ftcdn.net/jpg/09/30/49/83/360_F_930498387_akToV5jhe5VGgiZzIVZc4NT8PRxVCwJ3.jpg",
};

const Home = () => {
  const { items: stats } = useCollection("stats", fallbackStats);
  const { items: blogPosts } = useCollection("blog-posts", fallbackBlogPosts);
  const { data: content } = usePageContent("home", HOME_DEFAULTS);
  const journalPosts = blogPosts.filter((p) => !p.featured).slice(0, 3);

  return (
    <>
      <Hero
        title={content.heroTitle}
        supporting={content.heroSupporting}
        desc={content.heroDesc}
        cta1={content.heroCta1}
        cta2={content.heroCta2}
        cta3={content.heroCta3}
        image1={content.heroImage1}
        image2={content.heroImage2}
        image3={content.heroImage3}
      />

      {/* Introduction + Giant image story */}
      <section className="bg-soft pt-16 md:pt-24 pb-8 md:pb-10 overflow-hidden">
        <div className="container-px grid md:grid-cols-12 gap-8 md:gap-8 items-start">
          <div className="md:col-span-6">
            <span className="eyebrow text-teal">{content.introEyebrow}</span>
            <div className="mt-8 space-y-2">
              <h1 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] tracking-tight">
                {content.introHeadingMain}{" "}
                <span className="italic text-teal font-normal">{content.introHeadingAccent}</span>
              </h1>
            </div>
            <div className="mt-10">
              <p className="text-slate-700 text-[15px] font-normal leading-relaxed">
                {content.introParagraph}
              </p>
            </div>

            {/* Service list */}
            <div className="mt-10 space-y-3">
              {content.introServiceList.map((service, i) => (
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
              src={content.introImageMain}
              alt="Acciva executive fleet vehicle"
              className="h-[38vh] md:h-[58vh] ml-auto w-full md:w-[90%]"
            />
            <div className="absolute -bottom-10 -left-4 sm:left-0 md:-left-10 w-1/2 md:w-[40%] shadow-[0_20px_60px_rgba(7,26,36,0.25)] border-4 border-soft">
              <RevealImage
                src={content.introImageSecondary}
                alt="Acciva mixed fleet vehicles"
                className="h-[18vh] md:h-[24vh]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Corporate Fleet Showcase */}
      <section className="bg-soft pt-8 md:pt-10 pb-16 md:pb-20">
        <div className="container-px mb-6">
          <span className="eyebrow text-teal">{content.fleetEyebrow}</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 max-w-2xl tracking-tight">
            {content.fleetHeadingMain} <span className="italic text-teal font-normal">{content.fleetHeadingAccent}</span>
          </h2>
        </div>
        <DestinationExpand
          destinations={content.fleetItems}
          showcaseLabel={content.fleetShowcaseLabel}
          ctaLabel={content.fleetCtaLabel}
          ctaLink={content.fleetCtaLink}
        />
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
              {content.statementLine1}
            </motion.span>
            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="font-display font-medium text-2xl sm:text-3xl md:text-4xl text-navy block mt-1"
            >
              {content.statementLine2}
            </motion.span>
            <motion.span
              initial={{ y: "40%", opacity: 0 }}
              whileInView={{ y: "0%", opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              style={{ fontFamily: "var(--font-accent)", fontSize: "clamp(1.5rem, 4vw, 2.25rem)", lineHeight: "1.08" }}
              className="italic text-teal font-normal block mt-1"
            >
              {content.statementLine3}
            </motion.span>
          </div>
          <p className="mt-5 eyebrow text-teal font-mono tracking-widest uppercase">
            {content.statementTagline}
          </p>
          <Magnetic className="mt-6 inline-block">
            <NavLink
              to="/contact"
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
            >
              <span>{content.statementCta}</span>
              <ArrowUpRight size={16} />
            </NavLink>
          </Magnetic>
        </div>
      </section>

      {/* What We Offer (Enhanced Featured Showcase) */}
      <section className="bg-soft pt-14 md:pt-18 pb-6 md:pb-8 text-navy">
        <div className="container-px">
          <FeaturedServices
            eyebrow={content.servicesEyebrow}
            headingMain={content.servicesHeadingMain}
            headingAccent={content.servicesHeadingAccent}
            buttonText={content.servicesButtonText}
            buttonLink={content.servicesButtonLink}
            cardButtonText={content.servicesCardButtonText}
            cardButtonLink={content.servicesCardButtonLink}
            stripTitle={content.servicesStripTitle}
            stripDescription={content.servicesStripDescription}
            stripButtonText={content.servicesStripButtonText}
            stripButtonLink={content.servicesStripButtonLink}
          />
        </div>
      </section>

      {/* Industries We Serve */}
      <Industries
        eyebrow={content.industriesEyebrow}
        headingMain={content.industriesHeadingMain}
        headingAccent={content.industriesHeadingAccent}
        paragraph={content.industriesParagraph}
        items={content.industriesList}
      />

      {/* Enterprise Trust */}
      <section className="bg-soft pt-8 md:pt-10 pb-0">
        <div className="container-px">
          <span className="eyebrow text-teal">{content.whyEyebrow}</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 tracking-tight">
            {content.whyHeadingMain} <span className="italic text-teal font-normal">{content.whyHeadingAccent}</span>
          </h2>
        </div>
      </section>
      <WhyAcciva reasons={content.whyReasons} />

      {/* Creative Modern Animated Testimonials */}
      <Testimonial
        eyebrow={content.testimonialsEyebrow}
        headingMain={content.testimonialsHeadingMain}
        headingAccent={content.testimonialsHeadingAccent}
      />

      {/* Numbers / Metrics */}
      <section className="bg-soft pt-0 md:pt-1 pb-15">
        <div className="container-px grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((s, idx) => (
            <StatCounter key={s.label} {...s} index={idx} />
          ))}
        </div>
      </section>

      {/* Travel Journal */}
      <section className="bg-soft pt-8 md:pt-10 pb-16 md:pb-20">
        <div className="container-px">
          <span className="eyebrow text-teal">{content.journalEyebrow}</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 max-w-xl tracking-tight">
            {content.journalHeadingMain} <span className="italic text-teal font-normal">{content.journalHeadingAccent}</span>
          </h2>
          <div className="mt-12">
            <BlogFeature posts={journalPosts} />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-8 md:py-10 overflow-hidden">
        <img
          src={content.ctaBackgroundImage}
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
            {content.ctaEyebrow}
          </motion.span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-3">
            {content.ctaHeadingMain} <br />
            <span className="italic text-teal font-normal">{content.ctaHeadingAccent}</span>
          </h2>
          <p className="mt-2 text-slate-700 text-[15px] font-normal leading-relaxed max-w-xl mx-auto">
            {content.ctaParagraph}
          </p>
          <Magnetic className="mt-6">
            <SmartLink
              to={content.ctaButtonLink}
              className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-sand text-navy font-bold text-sm hover:shadow-2xl transition-all shadow-xl"
            >
              {content.ctaButtonText} &rarr;
            </SmartLink>
          </Magnetic>
        </div>
      </section>
    </>
  );
};

export default Home;
