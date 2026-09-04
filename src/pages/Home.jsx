import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Hero from "../components/Hero";
import Industries from "../components/Industries";
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

const corporateFleet = [
  {
    name: "Sedan",
    country: "Everyday Corporate Travel",
    description: "Maruti Suzuki Dzire · Honda Amaze class. Compact, fuel-efficient and reliable — the backbone of daily employee pick-up and drop and corporate cab contracts across India.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Toyota_Camry_2.5_Hybrid_Ascent_Sport_%28IX%29_%E2%80%93_f_02012026.jpg/1280px-Toyota_Camry_2.5_Hybrid_Ascent_Sport_%28IX%29_%E2%80%93_f_02012026.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=thumbnail",
  },
  {
    name: "MPV",
    country: "Family & Group Travel",
    description: "Toyota Innova Crysta class. Spacious, dependable and India's favourite multi-purpose vehicle — ideal for outstation trips, airport transfers and small group movement.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg/1280px-Toyota_Innova_Crysta_2.4_Z_front_right.jpg",
  },
  {
    name: "SUV",
    country: "All-Terrain Comfort",
    description: "Mahindra XUV700 class. Commanding road presence with rugged capability — suited for site visits, hilly terrain and executives who need extra ground clearance.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/A_black_Mahindra_XUV700_SUV_in_Ashiana_Brahmananda%2C_Jamshedpur%2C_India_%28Ank_Kumar%2C_Infosys_Limited%29_02.jpg/1280px-A_black_Mahindra_XUV700_SUV_in_Ashiana_Brahmananda%2C_Jamshedpur%2C_India_%28Ank_Kumar%2C_Infosys_Limited%29_02.jpg",
  },
  {
    name: "Luxury Sedan",
    country: "Premium Business Class",
    description: "Skoda Superb / Octavia class. A refined, quiet cabin built for client-facing rides — the preferred choice for corporate guests and senior management travel.",
    image: "https://images.pexels.com/photos/34985962/pexels-photo-34985962.jpeg?auto=compress&cs=tinysrgb&w=1600",
  },
  {
    name: "Ultra-Luxury Executive",
    country: "Boardroom On Wheels",
    description: "Mercedes-Benz E-Class class. Executive-grade engineering and chauffeur-driven poise for CXOs, VIP delegations and high-profile corporate events, available through our authorised premium fleet network.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Mercedes-Benz_W213_E-Class_Exclusive_Obsidian_Black_Metallic_diplomatic.jpg/1280px-Mercedes-Benz_W213_E-Class_Exclusive_Obsidian_Black_Metallic_diplomatic.jpg",
  },
  {
    name: "Tempo Traveller",
    country: "Group Transport",
    description: "12–17 seater configurations built for comfort on long hauls — perfect for team offsites, airport group transfers and mid-sized corporate outings.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Force_Traveller%2C_Leh-Manali_Highway.jpg/1280px-Force_Traveller%2C_Leh-Manali_Highway.jpg",
  },
  {
    name: "Mini Bus",
    country: "Shared Mobility",
    description: "AC mini bus fleet for mid-volume employee transport — an efficient, comfortable option for shuttling teams between office campuses and residential clusters.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Force_Motors_-_Traveller_26_-_Agra_2014-05-14_4222.JPG/1280px-Force_Motors_-_Traveller_26_-_Agra_2014-05-14_4222.JPG",
  },
  {
    name: "Staff Bus",
    country: "Employee Transport",
    description: "Full-size AC/non-AC staff buses for high-volume daily commutes — the core of Acciva's employee transportation management system for large corporate campuses.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Haryana_Roadways_%27Saarthi%27_Volvo_at_ISBT_17%2C_Chandigarh.jpg/1280px-Haryana_Roadways_%27Saarthi%27_Volvo_at_ISBT_17%2C_Chandigarh.jpg",
  },
  {
    name: "Truck",
    country: "Logistics Fleet",
    description: "Ashok Leyland class light and medium commercial trucks — supporting corporate logistics, material movement and last-mile freight alongside our passenger fleet.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Ashok_Leyland_Vehicle_Of_Bharti_Logistics.jpg/1280px-Ashok_Leyland_Vehicle_Of_Bharti_Logistics.jpg",
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
              src="https://content.jdmagicbox.com/v2/comp/guwahati/c8/9999px361.x361.260624114535.r2c8/catalogue/ne-car-sarfari-azara-guwahati-travel-agents-0y05j0do2u.jpg"
              alt="Acciva executive fleet vehicle"
              className="h-[38vh] md:h-[58vh] ml-auto w-full md:w-[90%]"
            />
            <div className="absolute -bottom-10 -left-4 sm:left-0 md:-left-10 w-1/2 md:w-[40%] shadow-[0_20px_60px_rgba(7,26,36,0.25)] border-4 border-soft">
              <RevealImage
                src="https://static.vecteezy.com/system/resources/thumbnails/060/206/512/small/a-row-of-cars-parked-in-a-parking-lot-free-photo.jpeg"
                alt="Acciva mixed fleet vehicles"
                className="h-[18vh] md:h-[24vh]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Corporate Fleet Showcase */}
      <section className="bg-soft py-16 md:py-20">
        <div className="container-px mb-16">
          <span className="eyebrow text-teal">Our Fleet</span>
          <h2 className="font-display text-navy text-2xl sm:text-3xl md:text-4xl leading-[1.08] mt-6 max-w-2xl tracking-tight">
            A Vehicle For <span className="italic text-teal font-normal">Every Corporate Need.</span>
          </h2>
        </div>
        <DestinationExpand destinations={corporateFleet} />
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

      {/* Industries We Serve */}
      <Industries />

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
          src="https://t4.ftcdn.net/jpg/09/30/49/83/360_F_930498387_akToV5jhe5VGgiZzIVZc4NT8PRxVCwJ3.jpg"
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






