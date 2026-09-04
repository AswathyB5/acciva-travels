import {
  Car,
  Building2,
  Plane,
  Bus,
  ShieldCheck,
  Navigation,
} from "lucide-react";

export const services = [
  {
    slug: "corporate-employee-transportation",
    icon: Car,
    title: "Employee Transportation Services",
    tag: "Shift Logistics",
    description:
      "Acciva ensure that employee transportation is done with upmost care which turns the daily commute with safety, punctuality and efficiency.",
    features: [
      "Daily Commute Safety",
      "Punctuality & Efficiency",
      "GPS Telematics & AI Routing",
      "24/7 Shift Operations",
    ],
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHlcxnzbgHFk_SBwmoO6jcpprDcpPqoswBD0F_gUoNSQ&s=10",
  },
  {
    slug: "fleet-management",
    icon: Building2,
    title: "Fleet Management",
    tag: "Route Optimization",
    description:
      "Acciva’s efficient route mapping system focuses on maximum optimization of the cabs by multiple pick-ups and reports as per the requirement provided by the client.",
    features: [
      "Efficient Route Mapping",
      "Cab Utilization Optimization",
      "Multiple Pick-Up Scheduling",
      "Custom Client Reports",
    ],
    image:
      "https://api.formulaindia.com/upload/media//89b1bfa11e7602fa0fb07ddd09c773c9.jpg",
  },
  {
    slug: "school-transportation",
    icon: Bus,
    title: "School Transportation",
    tag: "Student Safety",
    description:
      "School Transportation offers our customers are intended to provide safety, reliability and quality. Our operations have both the assets and experience to efficiently design.",
    features: [
      "Safety & Reliability",
      "Quality Operations & Assets",
      "Experienced Design & Routing",
      "Dedicated Chauffeurs & Captains",
    ],
    image:
      "https://5.imimg.com/data5/SELLER/Default/2021/10/BD/VV/KJ/111856083/whatsapp-image-2021-09-13-at-21-07-43-1-.jpeg",
  },
  {
    slug: "airport-transfer-services",
    icon: Plane,
    title: "Airport Transfer Services",
    tag: "Executive Flight Transit",
    description:
      "Punctual executive transfers to and from international & domestic airports with live flight tracking and terminal meet-and-greet.",
    features: [
      "Real-Time Flight Schedule Sync",
      "Chauffeur Terminal Meet & Greet",
      "Zero Waiting Time Guarantee",
      "Luxury Sedans & Premium SUVs",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/A_black_Mahindra_XUV700_SUV_in_Ashiana_Brahmananda%2C_Jamshedpur%2C_India_%28Ank_Kumar%2C_Infosys_Limited%29_02.jpg",
  },
  {
    slug: "staff-bus-transport-services",
    icon: Bus,
    title: "Staff Bus & Campus Shuttle",
    tag: "High Capacity Transit",
    description:
      "High-capacity air-conditioned staff coaches and feeder shuttles connecting tech parks, SEZs, and major metro transit hubs.",
    features: [
      "Comfortable Air-Conditioned Buses",
      "Point-to-Point Tech Park Loops",
      "Automated RFID Employee Boarding",
      "Dedicated Route Captains",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/3b/Haryana_Roadways_%27Saarthi%27_Volvo_at_ISBT_17%2C_Chandigarh.jpg",
  },
  {
    slug: "corporate-adhoc-services",
    icon: ShieldCheck,
    title: "Corporate Ad-Hoc & VIP Delegations",
    tag: "Executive Mobility",
    description:
      "On-demand luxury transport for executive visits, board meetings, corporate conferences, and high-profile international delegations.",
    features: [
      "Luxury Sedans & Premium SUVs",
      "English-Fluent Vetted Chauffeurs",
      "Flexible Hourly & Daily Rental Packages",
      "Pan-India Multi-City Coordination",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/21/Mercedes-Benz_W213_E-Class_Exclusive_Obsidian_Black_Metallic_diplomatic.jpg",
  },
  {
    slug: "outstation-cab-services",
    icon: Navigation,
    title: "Outstation & Inter-City Transit",
    tag: "Inter-City Connectivity",
    description:
      "Safe and dependable inter-city business travel for executives and corporate teams across major state industrial corridors.",
    features: [
      "Transparent Flat-Rate Billing",
      "Toll & Highway Assistance Included",
      "24/7 ERT Pan-Highway Support",
      "Verified Long-Distance Drivers",
    ],
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/61/Force_Traveller%2C_Leh-Manali_Highway.jpg",
  },
];

export const destinations = [
  {
    name: "Dubai",
    country: "United Arab Emirates",
    description: "Futuristic skylines meet timeless desert adventure.",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1400&q=80",
    size: "large",
  },
  {
    name: "Paris",
    country: "France",
    description: "Romance, art, and cafe culture along the Seine.",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1400&q=80",
    size: "small",
  },
  {
    name: "Maldives",
    country: "Indian Ocean",
    description: "Overwater villas above crystal turquoise lagoons.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1400&q=80",
    size: "small",
  },
  {
    name: "Singapore",
    country: "Singapore",
    description: "A gleaming garden city of culture and cuisine.",
    image:
      "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1400&q=80",
    size: "medium",
  },
  {
    name: "Switzerland",
    country: "Alps",
    description: "Snow-capped peaks and storybook alpine villages.",
    image:
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1400&q=80",
    size: "medium",
  },
  {
    name: "Bali",
    country: "Indonesia",
    description: "Lush rice terraces, temples, and tranquil shores.",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1400&q=80",
    size: "large",
  },
];

export const stats = [
  { icon: "MapPin", value: 25, suffix: "+", label: "Destinations" },
  { icon: "Users", value: 5000, display: "5K+", suffix: "", label: "Travelers" },
  { icon: "Award", value: 10, suffix: "+", label: "Years of Experience" },
  { icon: "Headphones", value: 24, display: "24/7", suffix: "", label: "Customer Support" },
];

export const testimonials = [
  {
    name: "Vikram Malhotra",
    role: "VP of People Operations",
    company: "Apex Global Tech",
    tag: "Corporate Transport",
    rating: 5,
    quote:
      "Acciva transformed our entire employee transit infrastructure across 4 major tech parks. Punctuality jumped to 99.6% while overall operational transport costs decreased significantly.",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    stats: "2,400+ Daily Commutes",
  },
  {
    name: "Priya Nair",
    role: "Head of Administration",
    company: "Cognizant Enterprises",
    tag: "Fleet Management",
    rating: 5,
    quote:
      "The GPS routing and real-time safety tracking give our employees complete peace of mind. Acciva's technology-driven fleet is by far the most reliable partner we have worked with.",
    avatar:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    stats: "Zero Safety Incidents",
  },
  {
    name: "Daniel Ferreira",
    role: "Director of Facilities",
    company: "Syntel Mobility Group",
    tag: "Pan-India Logistics",
    rating: 5,
    quote:
      "From round-the-clock dedicated dispatchers to seamless EV fleet integration, Acciva sets the gold standard for corporate mobility and employee satisfaction in India.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    stats: "99.8% Punctual Shifts",
  },
  {
    name: "Ananya Rao",
    role: "Managing Director",
    company: "Deloitte Advisory",
    tag: "Executive Transit",
    rating: 5,
    quote:
      "Every detail from vehicle hygiene to route optimization is executed with surgical precision. Truly effortless travel and professional chauffeurs from beginning to end.",
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    stats: "5-Star Executive Rating",
  },
  {
    name: "Rajesh Sengupta",
    role: "Head of Corporate Procurement",
    company: "Infosys BPM",
    tag: "24/7 Fleet Operations",
    rating: 5,
    quote:
      "Acciva's round-the-clock command center and strict SLA adherence have made our night shift employee commutes completely seamless and worry-free.",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    stats: "100% Night SLA Compliance",
  },
  {
    name: "Meera Krishnan",
    role: "Global Mobility Lead",
    company: "Amazon Tech Center",
    tag: "Event & Delegation Logistics",
    rating: 5,
    quote:
      "Flawless coordination for high-profile executive delegations and large-scale tech summits across Bengaluru and Hyderabad. Their luxury fleet is unmatched.",
    avatar:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80",
    stats: "15,000+ VIP Airport Trips",
  },
];

export const blogPosts = [
  {
    slug: "10-places-you-must-visit",
    category: "Destinations",
    date: "August 12, 2026",
    title: "10 Places You Must Visit at Least Once",
    excerpt:
      "From hidden coastal towns to iconic city skylines, these are the destinations that belong on every traveler's list.",
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1200&q=80",
    featured: true,
  },
  {
    slug: "plan-perfect-international-vacation",
    category: "Guides",
    date: "July 28, 2026",
    title: "How to Plan the Perfect International Vacation",
    excerpt:
      "A practical, step-by-step approach to planning a trip abroad without the stress, from budgeting to booking.",
    image:
      "https://plus.unsplash.com/premium_photo-1723629817274-5408105f3a48?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "best-destinations-relaxing-getaway",
    category: "Destinations",
    date: "July 14, 2026",
    title: "Best Destinations for a Relaxing Getaway",
    excerpt:
      "Slow down and unwind at these serene destinations built for rest, wellness, and quiet luxury.",
    image:
      "https://images.unsplash.com/photo-1713843841925-6af6ed0df472?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "travel-tips-first-time-traveler",
    category: "Travel Tips",
    date: "June 30, 2026",
    title: "Travel Tips Every First-Time Traveler Should Know",
    excerpt:
      "Essential advice on packing, documents, and etiquette to help first-time travelers feel confident abroad.",
    image:
      "https://images.unsplash.com/photo-1741795854922-87217b375e79?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "stress-free-next-trip",
    category: "Guides",
    date: "June 9, 2026",
    title: "How to Make Your Next Trip Stress-Free",
    excerpt:
      "Simple planning habits and tools that remove the guesswork from travel logistics, start to finish.",
    image:
      "https://images.unsplash.com/photo-1501555088652-021faa106b9b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    slug: "top-bucket-list-experiences",
    category: "Inspiration",
    date: "May 22, 2026",
    title: "Top Experiences to Add to Your Travel Bucket List",
    excerpt:
      "Unforgettable, once-in-a-lifetime experiences worth planning your next big journey around.",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1200&q=80",
  },
];

export const blogCategories = ["All", "Destinations", "Travel Tips", "Guides", "Inspiration"];

export const jobOpenings = [
  {
    slug: "corporate-fleet-driver-captain",
    title: "Fleet Driver Captain",
    department: "Operations",
    location: "Bengaluru, Hyderabad, Chennai",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Drive dedicated corporate shift routes for tech park clients, maintaining SLA punctuality and passenger safety standards.",
    requirements: [
      "Valid commercial driving license (LMV/Badge)",
      "2+ years professional driving experience",
      "Clean driving record & background check clearance",
      "Familiarity with GPS navigation & route apps",
    ],
  },
  {
    slug: "fleet-operations-supervisor",
    title: "Fleet Operations Supervisor",
    department: "Operations",
    location: "Bengaluru",
    type: "Full-Time",
    experience: "4+ Years",
    description:
      "Oversee daily dispatch, shift rostering, and driver-captain performance across a designated tech corridor cluster.",
    requirements: [
      "Bachelor's degree or equivalent experience",
      "4+ years in fleet/logistics operations",
      "Strong stakeholder & vendor coordination skills",
      "Proficiency with fleet management software",
    ],
  },
  {
    slug: "command-center-dispatcher",
    title: "24/7 Command Center Dispatcher",
    department: "Command & Control",
    location: "Bengaluru (HQ)",
    type: "Full-Time (Rotational Shifts)",
    experience: "1+ Years",
    description:
      "Monitor live GPS telemetry, coordinate emergency response, and resolve real-time routing issues from our central command tower.",
    requirements: [
      "Comfortable with rotational / night shifts",
      "Strong communication & incident-response skills",
      "Basic proficiency with dispatch/telematics tools",
      "Prior BPO, control-room, or logistics experience a plus",
    ],
  },
  {
    slug: "corporate-account-manager",
    title: "Corporate Account Manager",
    department: "Client Success",
    location: "Bengaluru, Pune",
    type: "Full-Time",
    experience: "3+ Years",
    description:
      "Own the relationship for enterprise clients, from onboarding new shuttle routes to quarterly SLA reviews and renewals.",
    requirements: [
      "3+ years in account management or B2B client success",
      "Experience with enterprise/corporate clients preferred",
      "Excellent written & verbal communication",
      "Willingness to travel to client tech parks",
    ],
  },
  {
    slug: "ev-fleet-technician",
    title: "EV Fleet Maintenance Technician",
    department: "Fleet Engineering",
    location: "Bengaluru, Chennai",
    type: "Full-Time",
    experience: "2+ Years",
    description:
      "Maintain and diagnose our growing electric vehicle fleet, ensuring charging cycles, battery health, and uptime targets are met.",
    requirements: [
      "ITI/Diploma in automobile or electrical engineering",
      "2+ years hands-on EV or automotive maintenance",
      "Working knowledge of charging infrastructure",
      "Willingness to work at depot locations",
    ],
  },
];

export const timeline = [
  {
    year: "2007",
    title: "Gettz Travel Solutions Genesis",
    badge: "The Inception",
    description:
      "Started operations as Gettz Travel Solutions in Bengaluru, pioneering reliable, dedicated employee transit for early IT tech parks.",
    stat: "Initial 50+ Dedicated Vehicles",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/Maruti_Suzuki_Swift_Dzire_sedan.jpg",
  },
  {
    year: "2016",
    title: "Incorporation of Acciva Travels Pvt. Ltd.",
    badge: "Brand Reborn",
    description:
      "Formally incorporated as Acciva Travels Pvt. Ltd., inspired by the ethos to stay 'Active & Achieve', modernizing enterprise mobility.",
    stat: "10,000+ Monthly Commutes",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2019",
    title: "Pan-India Expansion",
    badge: "Nationwide Footprint",
    description:
      "Expanded enterprise transport networks to Hyderabad, Chennai, Pune, Mumbai, and Delhi NCR, serving major multinational tech hubs.",
    stat: "6 Major Metros Covered",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2022",
    title: "Tech Command Center & AI Telematics",
    badge: "Smart Mobility",
    description:
      "Launched our 24/7 centralized command center with automated GPS routing, live speed tracking, panic button alerts, and emergency response teams.",
    stat: "99.8% On-Time SLA",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
  },
  {
    year: "2024",
    title: "Green Mobility & EV Fleet Integration",
    badge: "Eco Transit",
    description:
      "Introduced zero-emission electric vehicles into corporate transit loops, cutting corporate carbon footprints across Tier-1 campuses.",
    stat: "100+ Electric Cabs Active",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/87/Toyota_Innova_Crysta_2.4_Z_front_right.jpg",
  },
  {
    year: "2026",
    title: "50,000+ Monthly Enterprise Commutes",
    badge: "Industry Benchmark",
    description:
      "Recognized as one of India's premier corporate mobility partners, empowering thousands of professionals every day with safety and comfort.",
    stat: "50,000+ Safe Trips / Mo",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=600&q=80",
  },
];
