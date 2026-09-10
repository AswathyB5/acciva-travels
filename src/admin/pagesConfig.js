import { PanelTop, PanelBottom, Home, Info, Car, Cpu, Newspaper, Mail, Briefcase, Users } from "lucide-react";
import { iconNames } from "../data/iconMap";

// Describes every editable "page" of the site: the header/footer plus each
// route. Each page is broken into `sections` that match the actual order
// sections appear on the live page — the admin lists them as a table of
// contents, and each section's fields (text + images) are edited together.
// All section fields for a page are stored flat in one `page-content` API
// document, keyed by field name.
export const pages = [
  {
    key: "navbar",
    label: "Header",
    icon: PanelTop,
    description: "The site-wide navigation bar shown at the top of every page.",
    relatedCollections: [],
    sections: [
      {
        key: "main",
        label: "Header Bar",
        fields: [{ name: "ctaLabel", label: "Header Button Text", type: "text", default: "Book Now" }],
      },
      {
        key: "links",
        label: "Navigation Links",
        fields: [
          {
            name: "navLinks",
            label: "Menu Links",
            type: "cards",
            itemLabel: "Link",
            default: [
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Technology", path: "/technology" },
              { label: "Journal", path: "/blog" },
              { label: "Careers", path: "/careers" },
              { label: "Contact", path: "/contact" },
            ],
            itemFields: [
              { name: "label", label: "Label", type: "text" },
              { name: "path", label: "Path", type: "text", hint: "e.g. /about" },
            ],
          },
          {
            name: "servicesDropdownLabel",
            label: "Services Dropdown Item Label",
            type: "text",
            default: "Employee Transportation Services",
          },
        ],
      },
    ],
  },
  {
    key: "footer",
    label: "Footer",
    icon: PanelBottom,
    description: "Company blurb, contact details, and social links shown at the bottom of every page.",
    relatedCollections: [],
    sections: [
      {
        key: "main",
        label: "Footer Content",
        fields: [
          {
            name: "aboutBlurb",
            label: "About Blurb",
            type: "textarea",
            default:
              "Acciva Travels was founded in 2016 as a Private Limited Company, building on a strong foundation established in 2007 as Gettz Travel Solutions.",
          },
          { name: "phone1", label: "Primary Phone", type: "text", default: "+91 90350 12166" },
          { name: "phone2", label: "Secondary Phone", type: "text", default: "+91 80 2354 1166" },
          { name: "email", label: "Email", type: "text", default: "info@accivatravels.com" },
          {
            name: "whatsappNumber",
            label: "WhatsApp Number",
            type: "text",
            hint: "Include country code, digits only, e.g. 919035012166. Leave blank to keep the floating button decorative/non-clickable.",
            default: "",
          },
          {
            name: "whatsappMessage",
            label: "WhatsApp Default Message",
            type: "text",
            default: "Hi Acciva Travels, I'd like to know more about your corporate transportation services.",
          },
          {
            name: "address",
            label: "Address",
            type: "textarea",
            default: "# 52, 1 Main Road, Anand Nagar, Hebbal, Bengaluru 560024.",
          },
          { name: "hours", label: "Operating Hours", type: "text", default: "24/7/365 Non-Stop Operations" },
          {
            name: "copyrightText",
            label: "Copyright Text",
            type: "text",
            default: "© 2026 Acciva Travels. All rights reserved.",
          },
          {
            name: "socialInstagram",
            label: "Instagram URL",
            type: "text",
            default: "https://www.instagram.com/accivatravel/",
          },
          {
            name: "socialFacebook",
            label: "Facebook URL",
            type: "text",
            default: "https://www.facebook.com/accivatravelsbangalore/",
          },
          {
            name: "socialLinkedin",
            label: "LinkedIn URL",
            type: "text",
            default: "https://in.linkedin.com/company/acciva-travels-p-limited",
          },
          {
            name: "socialPinterest",
            label: "Pinterest URL",
            type: "text",
            default: "https://in.pinterest.com/accivatravel1/",
          },
        ],
      },
      {
        key: "links",
        label: "Quick Links",
        fields: [
          {
            name: "quickLinks",
            label: "Quick Links",
            type: "cards",
            itemLabel: "Link",
            default: [
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Technology", path: "/technology" },
              { label: "Journal", path: "/blog" },
              { label: "Careers", path: "/careers" },
              { label: "Contact", path: "/contact" },
            ],
            itemFields: [
              { name: "label", label: "Label", type: "text" },
              { name: "path", label: "Path", type: "text", hint: "e.g. /about" },
            ],
          },
        ],
      },
    ],
  },
  {
    key: "home",
    label: "Home Page",
    icon: Home,
    description: "Every section of the homepage, top to bottom.",
    relatedCollections: ["stats", "blog-posts", "testimonials", "services"],
    sections: [
      {
        key: "hero",
        label: "1. Hero Slider",
        fields: [
          {
            name: "heroTitle",
            label: "Hero Title",
            type: "textarea",
            default: "Corporate Mobility & Transportation Solutions for a Moving Business World",
          },
          {
            name: "heroSupporting",
            label: "Hero Supporting Line",
            type: "text",
            default:
              "Employee Transportation | Corporate Cabs | Corporate Car Rentals | Executive Mobility | Long-Term Leasing | Logistics | Truck Services | Events | PAN India Mobility",
          },
          {
            name: "heroDesc",
            label: "Hero Description",
            type: "textarea",
            default:
              "Acciva Travels provides end-to-end mobility, transportation and logistics solutions for businesses-from daily employee pick-up and drop to executive travel, long-term vehicle leasing, commercial trucks, logistics movement, corporate events and PAN India transportation requirements.",
          },
          { name: "heroCta1", label: "Slide 1 Button Text", type: "text", default: "Get a Corporate Mobility Consultation" },
          { name: "heroCta2", label: "Slide 2 Button Text", type: "text", default: "Request a Corporate Quotation" },
          { name: "heroCta3", label: "Slide 3 Button Text", type: "text", default: "Talk to Our Mobility Team" },
          { name: "heroImage1", label: "Slide 1 Background Image", type: "image", default: "" },
          { name: "heroImage2", label: "Slide 2 Background Image", type: "image", default: "" },
          { name: "heroImage3", label: "Slide 3 Background Image", type: "image", default: "" },
        ],
      },
      {
        key: "intro",
        label: "2. Welcome Introduction",
        fields: [
          { name: "introEyebrow", label: "Eyebrow", type: "text", default: "About Us" },
          { name: "introHeadingMain", label: "Heading", type: "text", default: "Welcome To" },
          { name: "introHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Acciva." },
          {
            name: "introParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Acciva Travels has emerged to be one of the best leading Corporate Employee Transport Services & Solutions Pan India. We are committed to provide quality and reliable Employee Transportation services. Our state-of-art app based Technology empowers the entire Employee Transportation Management System process for our Corporate companies.",
          },
          {
            name: "introServiceList",
            label: "Bullet List",
            type: "list",
            default: [
              "Monthly Basis Cab Taxi Hiring Services Sedan",
              "Providing Vehicles for Office Work",
              "Sedan Vehicle on Rental Basis for Corporate",
              "Hiring of Taxi Services for Corporate",
              "Cab Taxi Hiring Services Sedan / SUV / MUV",
              "Hiring of Sedan / SUV / MUV Cars",
            ],
          },
          {
            name: "introImageMain",
            label: "Main Image",
            type: "image",
            default:
              "https://content.jdmagicbox.com/v2/comp/guwahati/c8/9999px361.x361.260624114535.r2c8/catalogue/ne-car-sarfari-azara-guwahati-travel-agents-0y05j0do2u.jpg",
          },
          {
            name: "introImageSecondary",
            label: "Overlapping Image",
            type: "image",
            default:
              "https://static.vecteezy.com/system/resources/thumbnails/060/206/512/small/a-row-of-cars-parked-in-a-parking-lot-free-photo.jpeg",
          },
        ],
      },
      {
        key: "fleet",
        label: "3. Corporate Fleet Showcase",
        fields: [
          { name: "fleetEyebrow", label: "Eyebrow", type: "text", default: "Our Fleet" },
          { name: "fleetHeadingMain", label: "Heading", type: "text", default: "A Vehicle For" },
          { name: "fleetHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Every Corporate Need." },
          { name: "fleetShowcaseLabel", label: "Showcase Strip Label", type: "text", default: "Corporate Fleet Showcase · Hover to Expand" },
          { name: "fleetCtaLabel", label: "Card Button Text", type: "text", default: "Book This Fleet" },
          {
            name: "fleetItems",
            label: "Fleet Vehicles",
            type: "cards",
            itemLabel: "Vehicle",
            default: [
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
            itemFields: [
              { name: "name", label: "Vehicle Name", type: "text" },
              { name: "country", label: "Use Case", type: "text" },
              { name: "description", label: "Description", type: "textarea" },
              { name: "image", label: "Image", type: "image" },
            ],
          },
        ],
      },
      {
        key: "statement",
        label: "4. Statement Banner",
        fields: [
          { name: "statementLine1", label: "Line 1", type: "text", default: "One Partner." },
          { name: "statementLine2", label: "Line 2", type: "text", default: "One Platform." },
          { name: "statementLine3", label: "Line 3 (Highlighted)", type: "text", default: "Complete Mobility." },
          {
            name: "statementTagline",
            label: "Tagline",
            type: "text",
            default: "Acciva Travels · Pan-India Corporate Mobility Benchmark",
          },
          { name: "statementCta", label: "Button Text", type: "text", default: "Book Now" },
        ],
      },
      {
        key: "services",
        label: "5. Our Services",
        fields: [
          { name: "servicesEyebrow", label: "Eyebrow", type: "text", default: "Our Services" },
          { name: "servicesHeadingMain", label: "Heading", type: "text", default: "Our Transport" },
          { name: "servicesHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Services." },
          { name: "servicesButtonText", label: "Header Button Text", type: "text", default: "Explore All Services" },
          { name: "servicesCardButtonText", label: "Card Button Text", type: "text", default: "View Specifications" },
          { name: "servicesStripTitle", label: "Capability Strip Title", type: "text", default: "Full Spectrum Fleet Management" },
          {
            name: "servicesStripDescription",
            label: "Capability Strip Description",
            type: "textarea",
            default: "Also providing Dedicated Staff Bus Shuttles, Corporate VIP Delegations & Inter-City Business Transit.",
          },
          { name: "servicesStripButtonText", label: "Capability Strip Button Text", type: "text", default: "View All Capabilities" },
        ],
      },
      {
        key: "industries",
        label: "6. Industries We Serve",
        fields: [
          { name: "industriesEyebrow", label: "Eyebrow", type: "text", default: "Industries We Serve" },
          { name: "industriesHeadingMain", label: "Heading", type: "text", default: "Trusted Across" },
          { name: "industriesHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Every Sector." },
          {
            name: "industriesParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "From fast-scaling startups to established multinationals, Acciva powers corporate mobility for organisations across every industry vertical, PAN India.",
          },
          {
            name: "industriesList",
            label: "Industries",
            type: "cards",
            itemLabel: "Industry",
            default: [
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
            itemFields: [
              { name: "name", label: "Name", type: "text" },
              { name: "icon", label: "Icon", type: "select", options: iconNames },
            ],
          },
        ],
      },
      {
        key: "why",
        label: "7. Why Enterprises Trust Us",
        fields: [
          { name: "whyEyebrow", label: "Eyebrow", type: "text", default: "Why Acciva Travels" },
          { name: "whyHeadingMain", label: "Heading", type: "text", default: "Why Enterprises" },
          { name: "whyHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Trust Us." },
          {
            name: "whyReasons",
            label: "Reasons",
            type: "cards",
            itemLabel: "Reason",
            default: [
              { title: "One-Stop Mobility", description: "Multiple transportation services under one partner.", icon: "Car" },
              { title: "Operational Expertise", description: "Professionally managed transportation operations.", icon: "ShieldCheck" },
              { title: "Technology Enabled", description: "Technology-supported visibility and control where available.", icon: "Navigation" },
              { title: "Scalable Fleet", description: "Solutions from individual executives to large employee transportation programs.", icon: "Building2" },
              { title: "Professional Drivers", description: "Focus on safety, discipline and customer experience.", icon: "ShieldCheck" },
              { title: "PAN India Capability", description: "Multi-city mobility based on genuine service coverage.", icon: "MapPin" },
              { title: "Operational Support", description: "Support aligned to actual service commitments.", icon: "Headphones" },
              { title: "End-to-End Management", description: "From requirement and allocation through trip completion, reporting and billing.", icon: "Award" },
            ],
            itemFields: [
              { name: "title", label: "Title", type: "text" },
              { name: "description", label: "Description", type: "textarea" },
              { name: "icon", label: "Icon", type: "select", options: iconNames },
            ],
          },
        ],
      },
      {
        key: "testimonials",
        label: "8. Enterprise Trust & Reviews",
        fields: [
          { name: "testimonialsEyebrow", label: "Eyebrow", type: "text", default: "Enterprise Trust & Reviews" },
          { name: "testimonialsHeadingMain", label: "Heading", type: "text", default: "Trusted By India's Leading" },
          { name: "testimonialsHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Enterprises." },
        ],
      },
      {
        key: "journal",
        label: "9. Travel Journal",
        fields: [
          { name: "journalEyebrow", label: "Eyebrow", type: "text", default: "The Journal" },
          { name: "journalHeadingMain", label: "Heading", type: "text", default: "Stories From The" },
          { name: "journalHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Open Road." },
        ],
      },
      {
        key: "finalCta",
        label: "10. Final Call To Action",
        fields: [
          { name: "ctaEyebrow", label: "Eyebrow", type: "text", default: "Let's Create Your Next Journey" },
          { name: "ctaHeadingMain", label: "Heading", type: "text", default: "Where Will" },
          { name: "ctaHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "You Go Next?" },
          {
            name: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Tell us where your team needs to be, and we'll build a corporate mobility plan around it, from daily commutes to citywide fleet deployments.",
          },
          { name: "ctaButtonText", label: "Button Text", type: "text", default: "Plan Your Journey" },
          {
            name: "ctaBackgroundImage",
            label: "Background Image",
            type: "image",
            default: "https://t4.ftcdn.net/jpg/09/30/49/83/360_F_930498387_akToV5jhe5VGgiZzIVZc4NT8PRxVCwJ3.jpg",
          },
        ],
      },
    ],
  },
  {
    key: "about",
    label: "About Page",
    icon: Info,
    description: "Every section of the About page, top to bottom.",
    relatedCollections: ["timeline", "testimonials"],
    sections: [
      {
        key: "hero",
        label: "1. Hero",
        fields: [
          { name: "heroEyebrow", label: "Eyebrow", type: "text", default: "About Acciva Travels" },
          { name: "heroTitleMain", label: "Title", type: "text", default: "Our Story, Ethos &" },
          { name: "heroTitleAccent", label: "Title (Highlighted)", type: "text", default: "Decades of Trust." },
          {
            name: "heroIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "Acciva Travels is a professionally managed mobility and transportation company focused on dependable transportation solutions for businesses. Our role goes beyond providing vehicles. We coordinate vehicles, drivers, transportation operations, trip management, technology, safety practices, reporting and customer support to create a smoother corporate mobility experience.",
          },
          {
            name: "heroBackgroundImage",
            label: "Background Image",
            type: "image",
            default: "https://bestsellingcarsblog.com/wp-content/uploads/2013/07/Maruti-DZire-India-June-2013.jpg",
          },
        ],
      },
      {
        key: "history",
        label: "2. Acciva History",
        fields: [
          { name: "historyEyebrow", label: "Eyebrow", type: "text", default: "Our Heritage" },
          { name: "historyHeadingMain", label: "Heading", type: "text", default: "Acciva" },
          { name: "historyHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "History" },
          {
            name: "historyParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Acciva Travels was founded in 2016 as a Private Limited Company, building on a strong foundation established in 2007 as Gettz Travel Solutions. Initially, the company started on a smaller scale providing reliable employee transportation services to businesses.",
              "Over the years, Acciva expanded its operations to meet the growing corporate travel and employee transportation needs of businesses across different locations. With continuous growth, professional expertise and a commitment to quality service. Acciva has developed into a trusted employee transportation and fleet management service provider.",
              "Today, Acciva Travels has a large and dedicated workforce supported by a sophisticated fleet of vehicles and efficient transportation solutions. The company continues to focus on safe, reliable and technology-driven transportation services, strengthening the Acciva brand and working towards delivering greater value to its customers.",
            ],
          },
          {
            name: "historyImage",
            label: "Image",
            type: "image",
            default: "https://content.jdmagicbox.com/v2/comp/mysore/h6/0821px821.x821.200818174613.f7h6/catalogue/travel-trendzz-kr-mohalla-mysore-car-rental-0p53jfp5bt.jpg",
          },
        ],
      },
      {
        key: "visionMission",
        label: "3. Vision & Mission",
        fields: [
          { name: "vmEyebrow", label: "Eyebrow", type: "text", default: "Strategic Compass" },
          { name: "vmHeadingMain", label: "Heading", type: "text", default: "Our Vision &" },
          { name: "vmHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Mission" },
          { name: "visionTitle", label: "Vision Card Title", type: "text", default: "OUR VISION" },
          { name: "visionBadge", label: "Vision Card Badge", type: "text", default: "Future Horizon" },
          {
            name: "visionText",
            label: "Vision Card Text",
            type: "textarea",
            default:
              "Our vision is to deliver superior travel and transportation services through a proactive approach focused on hospitality, integrity, reliability and customer satisfaction. We strive to set high standards in corporate transportation by providing efficient and dependable mobility solutions that meet the evolving needs of our customers.",
          },
          { name: "missionTitle", label: "Mission Card Title", type: "text", default: "OUR MISSION" },
          { name: "missionBadge", label: "Mission Card Badge", type: "text", default: "Core Commitment" },
          {
            name: "missionText",
            label: "Mission Card Text",
            type: "textarea",
            default:
              "Our mission is to provide safe, reliable and comfortable transportation services with customer security and satisfaction at the heart of everything we do. We are committed to maintaining the highest standards of safety, service quality and operational excellence, while delivering a seamless and comfortable travel experience for every customer.",
          },
        ],
      },
      {
        key: "whyChoose",
        label: "4. Why Choose Acciva",
        fields: [
          { name: "whyEyebrow", label: "Eyebrow", type: "text", default: "Distinct Advantage" },
          { name: "whyHeadingMain", label: "Heading", type: "text", default: "Why Choose" },
          { name: "whyHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Acciva?" },
          {
            name: "whyParagraphs",
            label: "Intro Paragraphs",
            type: "list",
            default: [
              "At Acciva Travels, we combine experience, knowledge, confidence and courteous service to deliver reliable travel and transportation solutions. We understand that every customer deserves a safe, comfortable and hassle-free travel experience.",
              "With years of industry experience, we have built our reputation by maintaining a strong focus on customer satisfaction, service quality, safety and reliability. Our dedicated team works proactively to understand customer needs and provide transportation solutions that consistently meet high standards.",
              "Choose Acciva Travels for professional service, experienced support, dependable transportation and a customer-first approach you can trust.",
            ],
          },
          {
            name: "whyCards",
            label: "Advantage Cards",
            type: "cards",
            itemLabel: "Advantage",
            default: [
              {
                title: "Qualified Staff Members",
                description:
                  "At Acciva Travels, our experienced and professionally trained staff members are committed to delivering safe, reliable and efficient employee transportation services. Our team is well-equipped to understand the needs of corporate clients and ensure a smooth and comfortable travel experience.\n\nFrom trained drivers to dedicated transportation support staff we maintain high standards of professionalism, safety, customer service and operational efficiency.",
                icon: "UserCheck",
                badge: "Professional Team",
              },
              {
                title: "24/7 Emergency Response Team",
                description:
                  "At Acciva Travels, we understand that reliable transportation requires support around the clock. Our 24/7 Emergency Response Team is available to promptly address unexpected travel and transportation-related issues and help ensure uninterrupted service.\n\nWith a proactive approach and dedicated support, our team works to provide quick assistance, enhanced passenger safety and reliable transportation solutions whenever needed.",
                icon: "PhoneCall",
                badge: "Round-the-Clock",
              },
              {
                title: "No Unauthorized Stops During Travel",
                description:
                  "At Acciva Travels, passenger safety, punctuality and travel efficiency are our top priorities. Our professional transportation team follows planned routes and approved travel schedules, helping ensure a smooth and uninterrupted journey for every passenger.\n\nWe maintain strict guidelines to prevent unauthorized stops during travel, reducing unnecessary delays and supporting a safe, comfortable and timely transportation experience.",
                icon: "Ban",
                badge: "Strict Route Discipline",
              },
              {
                title: "Minimum Attrition – With Minimal Changes",
                description:
                  "At Acciva Travels, we focus on maintaining a stable and reliable transportation team to ensure consistent service quality. Our minimum staff attrition helps us maintain operational continuity, strong team coordination and a better understanding of client requirements.\n\nBy making minimal changes to our trained staff and transportation operations, we provide corporate clients with a dependable and seamless employee transportation service.",
                icon: "HeartHandshake",
                badge: "Stable Team",
              },
            ],
            itemFields: [
              { name: "title", label: "Title", type: "text" },
              { name: "description", label: "Description", type: "textarea" },
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "badge", label: "Badge Chip Text", type: "text" },
            ],
          },
        ],
      },
      {
        key: "purpose",
        label: "5. Safe Journeys, Smarter Mobility",
        fields: [
          { name: "purposeEyebrow", label: "Eyebrow", type: "text", default: "Our Purpose" },
          { name: "purposeHeadingMain", label: "Heading", type: "text", default: "Safe Journeys. Smarter Mobility." },
          { name: "purposeHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Stronger Connections." },
          {
            name: "purposeSubheading",
            label: "Subheading",
            type: "text",
            default: "We Move What Matters Most - Your People.",
          },
          {
            name: "purposeParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Every journey carries a responsibility. At Acciva Travels, we take that responsibility seriously.",
              "With a strong focus on safety, reliability, punctuality and service excellence, we create transportation experiences that help businesses keep their people moving with confidence. From everyday employee commutes to comprehensive corporate mobility requirements, our team is committed to making every journey seamless.",
            ],
          },
          {
            name: "purposeQuoteLine1",
            label: "Quote Line 1",
            type: "text",
            default: "Because great transportation isn't just about reaching a destination.",
          },
          {
            name: "purposeQuoteLine2",
            label: "Quote Line 2",
            type: "text",
            default: "It's about making every journey count.",
          },
          {
            name: "purposeImage",
            label: "Image",
            type: "image",
            default: "https://www.jaipurcarrental.org/assets/uploads/blog_images/luxury-car-rental-min-min.JPG",
          },
        ],
      },
      {
        key: "ctaBanner",
        label: "6. Safe & Reliable CTA Banner",
        fields: [
          { name: "ctaBannerEyebrow", label: "Eyebrow", type: "text", default: "Corporate Mobility" },
          { name: "ctaBannerHeadingMain", label: "Heading", type: "text", default: "Safe and Reliable" },
          { name: "ctaBannerHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Transportation Made Easy" },
          {
            name: "ctaBannerParagraph1",
            label: "Paragraph 1",
            type: "textarea",
            default:
              "Experience safe, reliable and comfortable employee transportation services with Acciva Travels. Our dedicated team is committed to providing efficient transportation solutions designed around passenger safety, punctuality and customer satisfaction.",
          },
          {
            name: "ctaBannerParagraph2",
            label: "Paragraph 2",
            type: "textarea",
            default:
              "Have questions or need a reliable transportation solution for your business? Get in touch with us today and discover how Acciva Travels can support your corporate transportation needs.",
          },
          {
            name: "ctaBannerButtonText",
            label: "Button Text",
            type: "text",
            default: "Book Your Transportation Service Today",
          },
        ],
      },
      {
        key: "finalCta",
        label: "7. Final Call To Action",
        fields: [
          { name: "finalCtaHeadingMain", label: "Heading", type: "text", default: "Ready to Move With" },
          { name: "finalCtaHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Acciva?" },
          {
            name: "finalCtaParagraph",
            label: "Paragraph",
            type: "textarea",
            default: "Let's create a safer, smarter, and more dependable transportation experience for your organization.",
          },
          { name: "finalCtaButtonText", label: "Button Text", type: "text", default: "Get Started With Acciva" },
          {
            name: "finalCtaBackgroundImage",
            label: "Background Image",
            type: "image",
            default: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Haryana_Roadways_%27Saarthi%27_Volvo_at_ISBT_17%2C_Chandigarh.jpg",
          },
        ],
      },
    ],
  },
  {
    key: "services",
    label: "Services Page",
    icon: Car,
    description: "The Services page hero and opening sections. The fleet catalogue is in the Content Library.",
    relatedCollections: ["services"],
    sections: [
      {
        key: "hero",
        label: "1. Hero",
        fields: [
          { name: "heroEyebrow", label: "Eyebrow", type: "text", default: "Enterprise Solutions" },
          { name: "heroTitleMain", label: "Title", type: "text", default: "Corporate Mobility & Fleet Solutions" },
          { name: "heroTitleAccent", label: "Title (Highlighted)", type: "text", default: "At Scale." },
          {
            name: "heroIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "End-to-end employee transportation, tech park shuttle networks, executive transit, and airport transfers managed with 99.8% on-time precision.",
          },
          {
            name: "heroBackgroundImage",
            label: "Background Image",
            type: "image",
            default:
              "https://images.pexels.com/photos/34985962/pexels-photo-34985962.jpeg?auto=compress&cs=tinysrgb&w=1920",
          },
        ],
      },
      {
        key: "intro",
        label: "2. Who We Are",
        fields: [
          { name: "introEyebrow", label: "Eyebrow", type: "text", default: "Who We Are" },
          { name: "introHeadingMain", label: "Heading", type: "text", default: "Professional, Reliable" },
          { name: "introHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Transportation Services." },
          {
            name: "introParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "At Acciva Travels, we provide reliable passenger transportation for schools, businesses, corporations, and institutions. We work with each client to understand their requirements and build a transportation service that fits their routes, schedules, and day-to-day operations.",
              "From school and employee transportation to scheduled and customized services, we manage the people, vehicles, routes, and schedules involved in keeping your transportation running smoothly. Our focus is simple: safe journeys, dependable service, and better visibility for our clients.",
            ],
          },
          {
            name: "introImage",
            label: "Image",
            type: "image",
            default: "https://i.ibb.co/1Whpb03/0cb03a11-e697-445e-8b5e-c08c67dc9c28.jpg",
          },
        ],
      },
      {
        key: "offer",
        label: "3. What We Offer",
        fields: [
          { name: "offerEyebrow", label: "Eyebrow", type: "text", default: "What We Offer" },
          { name: "offerHeadingMain", label: "Heading", type: "text", default: "Our" },
          { name: "offerHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Transportation Services" },
          {
            name: "offerParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Acciva Travels provides transportation solutions for organizations with regular or customized travel requirements.",
              "Our services include school transportation, corporate and employee transportation, scheduled transportation, route planning, fleet management, and customized transportation services.",
            ],
          },
          {
            name: "offerCards",
            label: "Audience Cards",
            type: "cards",
            itemLabel: "Card",
            default: [
              {
                title: "For Schools",
                description:
                  "For schools, we work with administrators to plan routes, organize pickup and drop-off points, and manage day-to-day transportation operations. Our systems can also give parents better visibility of their child's journey, including vehicle location and estimated arrival times.",
                icon: "GraduationCap",
              },
              {
                title: "For Businesses & Corporations",
                description:
                  "For businesses and corporations, we provide organized employee transportation designed around working hours, pickup locations, routes, and staff requirements. Our team handles the coordination so that businesses can focus on their operations while we take care of the transportation.",
                icon: "Building2",
              },
            ],
            itemFields: [
              { name: "title", label: "Title", type: "text" },
              { name: "description", label: "Description", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "catalogue",
        label: "4. Fleet Catalogue Intro",
        fields: [
          { name: "catalogueEyebrow", label: "Eyebrow", type: "text", default: "Our Fleet Offerings" },
          { name: "catalogueHeadingMain", label: "Heading", type: "text", default: "Tailored Mobility" },
          { name: "catalogueHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Programs." },
          {
            name: "catalogueParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Explore our comprehensive range of specialized transport capabilities designed for corporate technology parks, GCCs, and enterprise teams.",
          },
          { name: "catalogueFilterLabel", label: "Filter Bar Label", type: "text", default: "Filter Fleet by:" },
          { name: "catalogueFilterAllLabel", label: "\"All\" Filter Label", type: "text", default: "All Fleet Capabilities" },
          { name: "catalogueFilterDailyLabel", label: "\"Daily\" Filter Label", type: "text", default: "Daily Employee Transit" },
          { name: "catalogueFilterExecutiveLabel", label: "\"Executive\" Filter Label", type: "text", default: "Executive & VIP" },
          { name: "catalogueFilterGroupLabel", label: "\"Group\" Filter Label", type: "text", default: "Shuttle & Tech Parks" },
          { name: "catalogueCardButtonText", label: "Card Button Text", type: "text", default: "View Details" },
          { name: "catalogueSlaText", label: "Card SLA Chip Text", type: "text", default: "99.8% SLA Backed • Pan-India" },
        ],
      },
      {
        key: "techTracking",
        label: "5. Technology & Tracking",
        fields: [
          { name: "techEyebrow", label: "Eyebrow", type: "text", default: "Smarter Visibility" },
          { name: "techHeadingMain", label: "Heading", type: "text", default: "Technology &" },
          { name: "techHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Tracking" },
          {
            name: "techParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Technology plays an important role in how we manage our transportation services.",
              "With GPS vehicle tracking and mobile-based monitoring, clients can have better visibility of vehicles and routes. Tracking information can help transportation teams monitor journeys, keep passengers informed, and respond quickly when routes or schedules need to change.",
              "For school transportation, tracking can also give parents and authorized users useful information about the vehicle's location and expected arrival time.",
              "By combining technology with hands-on operational management, we make transportation easier to monitor and manage.",
            ],
          },
          {
            name: "techFeatureChips",
            label: "Feature Chips",
            type: "cards",
            itemLabel: "Chip",
            default: [
              { icon: "Radar", label: "GPS Vehicle Tracking" },
              { icon: "Smartphone", label: "Mobile-Based Monitoring" },
              { icon: "MapPin", label: "Live ETA Visibility" },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "label", label: "Label", type: "text" },
            ],
          },
          {
            name: "techImage",
            label: "Live Tracking Visual",
            type: "image",
            default:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl1PGWlQMFcALtYDya1LX3qwlmG22SbNwVPm2T3sBLgd8F-GYxd64fZNH9&s=10",
          },
        ],
      },
      {
        key: "safety",
        label: "6. Safety & Driver Standards",
        fields: [
          { name: "safetyEyebrow", label: "Eyebrow", type: "text", default: "Trust & Compliance" },
          { name: "safetyHeadingMain", label: "Heading", type: "text", default: "Safety &" },
          { name: "safetyHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Driver Standards" },
          {
            name: "safetyParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "When you are responsible for transporting students or employees, safety comes first.",
              "Our aim is to give schools, businesses, passengers, and parents confidence that their transportation is being handled responsibly.",
            ],
          },
          {
            name: "safetyCards",
            label: "Safety Cards",
            type: "cards",
            itemLabel: "Card",
            default: [
              {
                icon: "UserCheck",
                title: "Verified Drivers",
                text: "At Acciva Travels, we take care in selecting and verifying our drivers and ensuring they meet the requirements of the service they are providing. Driver qualifications, experience, conduct, and overall suitability are important parts of our selection process.",
              },
              {
                icon: "Wrench",
                title: "Vehicle Upkeep",
                text: "We also pay attention to the condition and upkeep of our vehicles.",
              },
              {
                icon: "Eye",
                title: "Monitored Operations",
                text: "We monitor transportation operations to maintain a safe and professional service.",
              },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "title", label: "Title", type: "text" },
              { name: "text", label: "Text", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "whyChoose",
        label: "7. Why Choose Acciva Travels",
        fields: [
          { name: "whyEyebrow", label: "Eyebrow", type: "text", default: "Distinct Advantage" },
          { name: "whyHeadingMain", label: "Heading", type: "text", default: "Why Choose" },
          { name: "whyHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Acciva Travels?" },
          {
            name: "whyParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Every organization has different transportation needs. A school may need carefully planned student routes, while a company may need employee pickups that match multiple shifts and locations.",
              "That's why we don't believe in a one-size-fits-all approach.",
              "Acciva Travels works with clients to understand their requirements and build transportation services around them. From route planning and scheduling to fleet and driver coordination, our team manages the details that keep the service moving.",
            ],
          },
          {
            name: "whyHighlight",
            label: "Highlight Quote",
            type: "textarea",
            default:
              "With professional drivers, managed vehicles, route planning, and technology-supported tracking, we provide organizations with a transportation partner they can rely on.",
          },
          {
            name: "differentiators",
            label: "Differentiators",
            type: "cards",
            itemLabel: "Differentiator",
            default: [
              { icon: "Layers", title: "Not One-Size-Fits-All", text: "Services built around each client's specific routes and schedules." },
              { icon: "Route", title: "Requirement-Led Planning", text: "Route planning and scheduling shaped by real operational needs." },
              { icon: "UserCheck", title: "Fleet & Driver Coordination", text: "Vehicles and drivers coordinated so nothing is left to chance." },
              { icon: "Sparkles", title: "Technology-Supported Tracking", text: "A dependable partner backed by visibility at every step." },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "title", label: "Title", type: "text" },
              { name: "text", label: "Text", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "talk",
        label: "8. Let's Talk CTA",
        fields: [
          { name: "talkHeadingMain", label: "Heading", type: "text", default: "Let's Talk About Your" },
          { name: "talkHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Transportation Needs" },
          {
            name: "talkParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Looking for a reliable transportation partner for your school, business, or organization?",
              "Talk to Acciva Travels about your requirements. We'll work with you to understand your routes, schedules, and operational needs and develop a transportation solution that works for you.",
            ],
          },
          { name: "talkButtonText", label: "Button Text", type: "text", default: "Talk to Acciva Travels" },
        ],
      },
      {
        key: "closingCta",
        label: "9. Cinematic Closing CTA",
        fields: [
          { name: "ctaEyebrow", label: "Eyebrow", type: "text", default: "Enterprise Mobility Consulting" },
          { name: "ctaHeadingMain", label: "Heading", type: "text", default: "Ready to Optimize Your" },
          { name: "ctaHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Company Transportation?" },
          {
            name: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Get a tailored fleet proposal with live telemetry integration, automated shift rostering, and dedicated command support.",
          },
          { name: "ctaButton1Text", label: "Button 1 Text", type: "text", default: "Request Enterprise Quote" },
          { name: "ctaButton2Text", label: "Button 2 Text", type: "text", default: "Learn About Our Standards" },
        ],
      },
    ],
  },
  {
    key: "technology",
    label: "Technology Page",
    icon: Cpu,
    description: "The Technology page hero and features overview.",
    relatedCollections: [],
    sections: [
      {
        key: "hero",
        label: "1. Hero",
        fields: [
          { name: "heroEyebrow", label: "Eyebrow", type: "text", default: "Employee Management Solutions" },
          { name: "heroTitleMain", label: "Title", type: "text", default: "Automate Every Mile Of Employee" },
          { name: "heroTitleAccent", label: "Title (Highlighted)", type: "text", default: "Transportation." },
          {
            name: "heroIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "Acciva's state of the art technology is an automation platform for employee transportation that automates everything: rostering, routing, deployment, live tracking, paperless automated billing, and e-trip sheets.",
          },
          {
            name: "heroBackgroundImage",
            label: "Background Image",
            type: "image",
            default:
              "https://static.vecteezy.com/system/resources/thumbnails/036/470/491/small/ai-generated-circuit-board-background-electronic-computer-hardware-technology-ai-generative-photo.jpg",
          },
        ],
      },
      {
        key: "features",
        label: "2. Our Features",
        fields: [
          { name: "featuresEyebrow", label: "Eyebrow", type: "text", default: "Our Features" },
          { name: "featuresHeadingMain", label: "Heading", type: "text", default: "Corporate Transportation &" },
          { name: "featuresHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Mobility Solutions" },
          {
            name: "featuresParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Acciva Travels is a professionally managed corporate transportation and mobility company providing dependable, safe and efficient transportation solutions for businesses. We go beyond simply providing vehicles by managing the complete transportation process-from vehicle and driver coordination to trip management, technology, safety, reporting and customer support.",
              "Our integrated approach helps businesses simplify their employee transportation and corporate mobility operations, improve efficiency and deliver a smoother travel experience for employees and organizations. With a strong focus on reliability, safety, operational efficiency and customer satisfaction, Acciva Travels supports businesses with transportation solutions designed to meet their evolving mobility requirements.",
            ],
          },
          {
            name: "featuresClosingParagraph",
            label: "Closing Paragraph",
            type: "textarea",
            default:
              "At Acciva Travels, we combine people, vehicles, technology and transportation expertise to create reliable corporate mobility solutions that businesses can depend on every day.",
          },
          { name: "featuresButtonText", label: "Button Text", type: "text", default: "Book Now" },
          {
            name: "serviceMarquee",
            label: "Marquee Service Chips",
            type: "cards",
            itemLabel: "Chip",
            default: [
              { icon: "Smartphone", label: "Corporate employee transportation" },
              { icon: "Server", label: "Fleet and vehicle management" },
              { icon: "Navigation", label: "Professional driver coordination" },
              { icon: "Layers", label: "Employee trip and route management" },
              { icon: "Cpu", label: "Transportation technology solutions" },
              { icon: "ShieldCheck", label: "Safety and compliance management" },
              { icon: "Gauge", label: "Transportation reporting and monitoring" },
              { icon: "Sparkles", label: "Dedicated customer support" },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "label", label: "Label", type: "text" },
            ],
          },
        ],
      },
      {
        key: "pillars",
        label: "3. Six Technology Pillars",
        fields: [
          { name: "pillarsEyebrow", label: "Eyebrow", type: "text", default: "Technology Pillars" },
          { name: "pillarsHeadingMain", label: "Heading", type: "text", default: "Six Pillars Powering" },
          { name: "pillarsHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Every Trip." },
          {
            name: "pillarsParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Safety, cost efficiency, paperless workflows, live tracking, analytics and platform reliability — six interlocking systems working together behind every trip you book.",
          },
          {
            name: "pillars",
            label: "Pillars",
            type: "cards",
            itemLabel: "Pillar",
            default: [
              {
                category: "Safety & Security",
                title: "Your Safety, Our Priority",
                tag: "Real-time protection. Rapid response.",
                icon: "ShieldCheck",
                badge: "Real-Time Protection",
                description:
                  "Acciva combines real-time monitoring, centralized security and automated safe-drop confirmation to ensure a safer journey. In emergency situations, our system enables a rapid response within 60 seconds.",
                keywords: ["Real-Time Monitoring", "Safe-Drop Confirmation", "Emergency Response"],
                image: "https://driveclick.cy/images/cache/blogfull/89654/BVOM07avum0KkEhg.png",
              },
              {
                category: "Efficient & Cost-Effective",
                title: "More Efficiency. Lower Costs.",
                tag: "Smarter operations. Greater value.",
                icon: "Gauge",
                badge: "Smarter Operations",
                description:
                  "Acciva optimizes fleet and manpower utilization through smart technology, helping businesses reduce operational costs, improve efficiency and get more value from their transportation operations.",
                keywords: ["Fleet Optimization", "Resource Utilization", "Cost Efficiency"],
                image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
              },
              {
                category: "Paperless Documentation",
                title: "Go Digital. Go Paperless.",
                tag: "Less paperwork. More efficiency.",
                icon: "FileCode2",
                badge: "Paperless",
                description:
                  "Acciva's automated billing and e-trip sheets eliminate paper-based processes, simplifying transportation management while reducing administrative effort and supporting a more sustainable operation.",
                keywords: ["Automated Billing", "E-Trip Sheets", "Reduced Paperwork"],
                image: "https://www.certum.eu/en/wp-content/uploads/2022/05/GettyImages-1349390515-1-1024x683.jpg",
              },
              {
                category: "Vehicle Tracking",
                title: "Know Where Every Ride Is",
                tag: "Real-time visibility. Better control.",
                icon: "Navigation",
                badge: "Live Visibility",
                description:
                  "Acciva's live vehicle tracking provides complete visibility of every journey, helping businesses monitor trips, improve coordination and respond quickly to delays or unexpected situations.",
                keywords: ["Live Tracking", "Smart Rostering", "Trip Feedback"],
                image: "https://v3smarttech.com/wp-content/uploads/2022/10/Improve-your-fuel-efficiency-with-a-GPS-tracking-system.png",
              },
              {
                category: "Analytics & Reporting",
                title: "Turn Data Into Decisions",
                tag: "Clear insights. Smarter operations.",
                icon: "Layers",
                badge: "Clear Insights",
                description:
                  "Acciva transforms transportation data into actionable insights through customized reports and intuitive dashboards, helping businesses monitor performance, control costs and optimize operations.",
                keywords: ["Custom Reports", "Performance Insights", "Data-Driven Decisions"],
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
              },
              {
                category: "Robust Technology",
                title: "Technology That Moves Business",
                tag: "Smarter technology. Stronger operations.",
                icon: "Cpu",
                badge: "Smart Technology",
                description:
                  "Acciva's scalable technology platform simplifies transportation management through intelligent routing, automation and real-time data—helping businesses improve efficiency and maintain greater operational control.",
                keywords: ["Intelligent Routing", "Automation", "Operational Control"],
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
              },
            ],
            itemFields: [
              { name: "category", label: "Category", type: "text" },
              { name: "title", label: "Title", type: "text" },
              { name: "tag", label: "Tag", type: "text" },
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "badge", label: "Badge", type: "text" },
              { name: "description", label: "Description", type: "textarea" },
              { name: "keywords", label: "Keywords", type: "list" },
              { name: "image", label: "Image", type: "image" },
            ],
          },
        ],
      },
      {
        key: "process",
        label: "4. How It Works",
        fields: [
          { name: "processHeadingMain", label: "Heading", type: "text", default: "From Onboarding To" },
          { name: "processHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Every Mile Tracked." },
          {
            name: "processSteps",
            label: "Steps",
            type: "cards",
            itemLabel: "Step",
            default: [
              { step: "01", title: "Onboard & Configure", icon: "Layers" },
              { step: "02", title: "Roster & Route", icon: "Navigation" },
              { step: "03", title: "Track Live", icon: "ShieldCheck" },
              { step: "04", title: "Report & Bill", icon: "Gauge" },
            ],
            itemFields: [
              { name: "step", label: "Step Number", type: "text" },
              { name: "title", label: "Title", type: "text" },
              { name: "icon", label: "Icon", type: "select", options: iconNames },
            ],
          },
        ],
      },
      {
        key: "banner",
        label: "5. Safety CTA Banner",
        fields: [
          { name: "bannerHeading", label: "Heading", type: "text", default: "Safety Transportation Made Easy" },
          { name: "bannerText", label: "Text", type: "text", default: "Feel free to touch with us." },
          { name: "bannerButtonText", label: "Button Text", type: "text", default: "Book Now" },
        ],
      },
      {
        key: "solutions",
        label: "6. Technology Solutions",
        fields: [
          { name: "solutionsEyebrow", label: "Eyebrow", type: "text", default: "Technology Solutions" },
          { name: "solutionsHeadingMain", label: "Heading", type: "text", default: "One Platform." },
          { name: "solutionsHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Three Seamless Experiences." },
          {
            name: "solutionsParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Purpose-built apps for employees, drivers, and transport managers, connected in real time to deliver a smooth, on-time, and safe commute for every enterprise shift.",
          },
          {
            name: "techSolutions",
            label: "Solutions",
            type: "cards",
            itemLabel: "Solution",
            default: [
              {
                name: "Employee App",
                tag: "For Corporate Employees",
                icon: "Smartphone",
                desc: "Ensures a seamless commute experience for corporate employees with on-time, comfortable, safe travel. Acciva's self-rostering app captures real-time GPS coordinates of employees for more accurate supervision. Employees are notified with relevant trip details such as driver profile, pickup and drop points, and vehicle details.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=900&q=80",
              },
              {
                name: "Driver App",
                tag: "For Drivers",
                icon: "Navigation",
                desc: "Drivers can keep track of trips assigned to them, along with the list of employees and their pickup/drop details, for seamless service. Guided navigation helps drivers reach each employee's pickup point on time and accurately. Drivers can also view their trip incomes, track fuel reimbursements, and see other useful stats.",
                image: "https://img.magnific.com/free-photo/young-uber-driver-car-interior_23-2149149653.jpg?semt=ais_hybrid&w=740&q=80",
              },
              {
                name: "Web Application",
                tag: "For Transport Managers",
                icon: "Server",
                desc: "The transport manager can easily manage all employee transportation activities centrally: rostering, booking, ongoing trips, real-time tracking, analysis, and MIS reports. Using the web platform, admins can view the list of all drivers with their current status and other records, and manage every vehicle in the transportation fleet.",
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80",
              },
            ],
            itemFields: [
              { name: "name", label: "Name", type: "text" },
              { name: "tag", label: "Tag", type: "text" },
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "desc", label: "Description", type: "textarea" },
              { name: "image", label: "Image", type: "image" },
            ],
          },
          { name: "solutionsButtonText", label: "Button Text", type: "text", default: "Book Now" },
        ],
      },
      {
        key: "closingCta",
        label: "7. Cinematic Closing CTA",
        fields: [
          { name: "ctaEyebrow", label: "Eyebrow", type: "text", default: "Schedule a Demo" },
          { name: "ctaHeadingMain", label: "Heading", type: "text", default: "Ready to Upgrade to Intelligent" },
          { name: "ctaHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Corporate Mobility?" },
          {
            name: "ctaParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Let our technical mobility consultants audit your current route logistics, calculate potential cost savings, and set up a live Command Tower trial.",
          },
          { name: "ctaButtonText", label: "Button Text", type: "text", default: "Book an Enterprise Platform" },
        ],
      },
    ],
  },
  {
    key: "blog",
    label: "Blog Page",
    icon: Newspaper,
    description: "The Blog/Journal page hero and newsletter section. Posts are managed in the Content Library.",
    relatedCollections: ["blog-posts"],
    sections: [
      {
        key: "hero",
        label: "1. Hero",
        fields: [
          { name: "heroEyebrow", label: "Eyebrow", type: "text", default: "Mobility Intelligence & Insights" },
          { name: "heroTitleMain", label: "Title", type: "text", default: "Stories, Tech &" },
          { name: "heroTitleAccent", label: "Title (Highlighted)", type: "text", default: "Fleet Innovation." },
          {
            name: "heroIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "Explore key industry insights on corporate employee transportation, AI dispatch telematics, EV sustainability, and mobility benchmarks across India.",
          },
          {
            name: "heroBackgroundImage",
            label: "Background Image",
            type: "image",
            default:
              "https://dam.alfuttaim.com/dx/api/dam/v1/collections/26711d2e-640a-4167-bd6a-a2f1ebd504d6/items/cf0b0423-4519-4326-981d-a3f8f580513e/renditions/6063f964-039e-4fa3-93dd-2903c8ebc68c?binary=true&mformat=true",
          },
        ],
      },
      {
        key: "newsletter",
        label: "2. Newsletter CTA",
        fields: [
          { name: "newsletterEyebrow", label: "Eyebrow", type: "text", default: "Monthly Fleet Dispatch Digest" },
          { name: "newsletterHeadingMain", label: "Heading", type: "text", default: "Stay Ahead in Corporate" },
          { name: "newsletterHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Mobility Innovation." },
          {
            name: "newsletterParagraph",
            label: "Paragraph",
            type: "textarea",
            default:
              "Subscribe to receive quarterly whitepapers, EV transition benchmarks, and tech park transit optimization case studies.",
          },
          { name: "newsletterButtonText", label: "Button Text", type: "text", default: "Book Now" },
        ],
      },
    ],
  },
  {
    key: "contact",
    label: "Contact Page",
    icon: Mail,
    description: "The Contact page hero, form panel, showcase image, map, and closing banner.",
    relatedCollections: [],
    sections: [
      {
        key: "hero",
        label: "1. Hero",
        fields: [
          { name: "heroEyebrow", label: "Eyebrow", type: "text", default: "Get In Touch" },
          { name: "heroTitleMain", label: "Title", type: "text", default: "Connect With Our" },
          { name: "heroTitleAccent", label: "Title (Highlighted)", type: "text", default: "Mobility Specialists." },
          {
            name: "heroIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "Request customized enterprise proposals, corporate rate cards, tech park shuttle network setups, or 24/7 dispatch support.",
          },
          {
            name: "heroBackgroundImage",
            label: "Background Image",
            type: "image",
            default:
              "https://carwow-uk-wp-2.imgix.net/Volvo-XC40-white-scaled.jpg?auto=format&cs=tinysrgb&fit=crop&h=800&ixlib=rb-1.1.0&q=60&w=1600",
          },
        ],
      },
      {
        key: "formPanel",
        label: "2. Contact Form Panel",
        fields: [
          { name: "formHeading", label: "Heading", type: "text", default: "Request Enterprise Proposal" },
          {
            name: "formSubheading",
            label: "Subheading",
            type: "text",
            default: "Submit your fleet requirements below. Our corporate team will respond within 4 hours.",
          },
          {
            name: "subjectOptions",
            label: "Subject Dropdown Options",
            type: "list",
            default: [
              "Corporate Employee Transportation",
              "Fleet Management Inquiry",
              "Airport Transfer Services",
              "Vehicle Partner / Careers",
              "General Inquiry",
              "Other",
            ],
          },
          { name: "successHeading", label: "Success Heading", type: "text", default: "Inquiry Received Successfully!" },
          {
            name: "successText",
            label: "Success Text",
            type: "text",
            default: "Our corporate enterprise manager will review your requirement and get back to you shortly.",
          },
          { name: "errorHeading", label: "Error Heading", type: "text", default: "Something Went Wrong" },
          {
            name: "errorText",
            label: "Error Text",
            type: "text",
            default: "We couldn't send your message right now. Please try again in a moment.",
          },
          { name: "submitButtonText", label: "Submit Button Text", type: "text", default: "Send Message" },
          {
            name: "showcaseImage",
            label: "Showcase Image",
            type: "image",
            default: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
          },
          { name: "directLineLabel", label: "Direct Line Card Label", type: "text", default: "Direct Enterprise Line" },
          { name: "rfpLabel", label: "Email Card Label", type: "text", default: "Corporate RFPs & Inquiries" },
          { name: "hqLabel", label: "Address Card Label", type: "text", default: "Central Operations HQ" },
          { name: "dispatchLabel", label: "Hours Card Label", type: "text", default: "Ground Dispatch Tower" },
        ],
      },
      {
        key: "map",
        label: "3. Location & Map",
        fields: [
          { name: "mapEyebrow", label: "Eyebrow", type: "text", default: "Central Command & Fleet Dispatch" },
          { name: "mapHeadingMain", label: "Heading", type: "text", default: "Acciva Travels Headquarters in" },
          { name: "mapHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Bengaluru." },
          {
            name: "mapDescription",
            label: "Description",
            type: "text",
            default: "Serving Manyata Tech Park, Electronic City, Whitefield, Outer Ring Road & Pan-India Corridors.",
          },
          { name: "mapButtonText", label: "Button Text", type: "text", default: "Open in Google Maps" },
          {
            name: "mapLink",
            label: "Google Maps Link",
            type: "text",
            default: "https://maps.google.com/?q=Bengaluru,+Karnataka,+India",
          },
          {
            name: "mapEmbedUrl",
            label: "Google Maps Embed URL",
            type: "text",
            hint: "The src of the embedded map iframe.",
            default:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0961003448615!2d77.59094080000001!3d13.029551899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179675b10e35%3A0x4e2fa4b235d073e4!2sAcciva%20Travels%20Private%20Limited!5e0!3m2!1sen!2sin!4v1788930808147!5m2!1sen!2sin",
          },
        ],
      },
      {
        key: "closingBanner",
        label: "4. Closing Banner",
        fields: [
          { name: "closingEyebrow", label: "Eyebrow", type: "text", default: "Dedicated Enterprise Mobility" },
          { name: "closingHeadingMain", label: "Heading", type: "text", default: "Need Immediate Assistance Or" },
          { name: "closingHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Fleet Consultation?" },
          {
            name: "closingParagraph",
            label: "Paragraph",
            type: "text",
            default: "Our corporate transit managers are available round-the-clock to structure scalable transit contracts for your team.",
          },
          { name: "closingButtonText", label: "Button Text", type: "text", default: "Explore Fleet Capabilities" },
        ],
      },
    ],
  },
  {
    key: "careers",
    label: "Careers Page",
    icon: Briefcase,
    description: "The Careers page hero, advantages, document checklist, vehicle program, and location. Job openings are managed in the Content Library.",
    relatedCollections: ["job-openings"],
    sections: [
      {
        key: "hero",
        label: "1. Hero",
        fields: [
          { name: "heroEyebrow", label: "Eyebrow", type: "text", default: "Drive With Acciva" },
          { name: "heroTitleMain", label: "Title", type: "text", default: "Drive With" },
          { name: "heroTitleAccent", label: "Title (Highlighted)", type: "text", default: "Acciva Advantages." },
          {
            name: "heroIntro",
            label: "Intro Paragraph",
            type: "textarea",
            default:
              "Join India's most trusted corporate mobility fleet and drive with guaranteed income, on-time payments, and round-the-clock support.",
          },
          {
            name: "heroBackgroundImage",
            label: "Background Image",
            type: "image",
            default: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=2000&q=85",
          },
        ],
      },
      {
        key: "advantages",
        label: "2. Drive With Acciva Advantages",
        fields: [
          { name: "advantagesEyebrow", label: "Eyebrow", type: "text", default: "Why Drive With Us" },
          { name: "advantagesHeadingMain", label: "Heading", type: "text", default: "Drive With" },
          { name: "advantagesHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Acciva Advantages." },
          {
            name: "advantages",
            label: "Advantages",
            type: "cards",
            itemLabel: "Advantage",
            default: [
              { icon: "Wallet", title: "Guaranteed Income" },
              { icon: "Clock", title: "On-Time Payments" },
              { icon: "ShieldCheck", title: "Corporate Duty" },
              { icon: "Fuel", title: "Fuel Advance" },
              { icon: "Wrench", title: "Maintenance Discount" },
              { icon: "Headphones", title: "Driver Support" },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "title", label: "Title", type: "text" },
            ],
          },
        ],
      },
      {
        key: "documents",
        label: "3. Onboarding Checklist",
        fields: [
          { name: "documentsEyebrow", label: "Eyebrow", type: "text", default: "Onboarding Checklist" },
          { name: "documentsHeadingMain", label: "Heading", type: "text", default: "Required" },
          { name: "documentsHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Documents." },
          { name: "driverDocumentsTitle", label: "Driver Documents Group Title", type: "text", default: "Driver Documents" },
          {
            name: "driverDocuments",
            label: "Driver Documents",
            type: "cards",
            itemLabel: "Document",
            default: [
              { icon: "IdCard", label: "Original Driving License" },
              { icon: "FileBadge", label: "Display Card" },
              { icon: "Image", label: "Passport Size 3 Photos" },
              { icon: "ShieldCheck", label: "Police Verification Certificate (PVC)" },
              { icon: "IdCard", label: "Aadhaar Card" },
              { icon: "FileText", label: "House Agreement (Driver Name)" },
              { icon: "Stethoscope", label: "Medical Certificate" },
              { icon: "FileText", label: "PAN Card" },
              { icon: "Users", label: "Family Photo" },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "label", label: "Label", type: "text" },
            ],
          },
          { name: "vehicleDocumentsTitle", label: "Vehicle Documents Group Title", type: "text", default: "Vehicle Documents" },
          {
            name: "vehicleDocuments",
            label: "Vehicle Documents",
            type: "cards",
            itemLabel: "Document",
            default: [
              { icon: "Car", label: "Vehicle RC" },
              { icon: "ScrollText", label: "Vehicle Permit" },
              { icon: "FileCheck2", label: "Vehicle Insurance" },
              { icon: "FileText", label: "Vehicle Tax" },
              { icon: "FileCheck2", label: "Fitness Certificate (FC)" },
              { icon: "ShieldCheck", label: "Emission" },
              { icon: "Image", label: "RC Owner 1 PHOTO" },
              { icon: "Wallet", label: "RC Owner PAN & Pass Book" },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "label", label: "Label", type: "text" },
            ],
          },
          { name: "inVehicleItemsTitle", label: "In Vehicle Group Title", type: "text", default: "In Vehicle" },
          {
            name: "inVehicleItems",
            label: "In Vehicle Items",
            type: "cards",
            itemLabel: "Item",
            default: [
              { icon: "Flame", label: "Fire Kit" },
              { icon: "BriefcaseMedical", label: "First Aid" },
              { icon: "Flashlight", label: "Torch" },
              { icon: "Umbrella", label: "Umbrella" },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "label", label: "Label", type: "text" },
            ],
          },
        ],
      },
      {
        key: "vehicleProgram",
        label: "4. Attach Your Vehicle",
        fields: [
          { name: "vehicleEyebrow", label: "Eyebrow", type: "text", default: "Vehicle Partner Program" },
          { name: "vehicleHeadingMain", label: "Heading", type: "text", default: "Attach Your Vehicle" },
          { name: "vehicleHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "With Acciva." },
          {
            name: "vehicleParagraph",
            label: "Paragraph",
            type: "text",
            default: "Fill out the form below and our onboarding team will guide you through document verification and vehicle attachment.",
          },
          {
            name: "vehicleImage",
            label: "Image",
            type: "image",
            default: "https://www.ascott-trans.com/images/car-rent-in-mumbai.jpg",
          },
          { name: "vehicleSuccessHeading", label: "Success Heading", type: "text", default: "Message Sent!" },
          {
            name: "vehicleSuccessText",
            label: "Success Text",
            type: "text",
            default: "Our onboarding team will reach out to you shortly.",
          },
        ],
      },
      {
        key: "quoteBanner",
        label: "5. Quote / CTA Banner",
        fields: [
          { name: "quoteEyebrow", label: "Eyebrow", type: "text", default: "Safety Transportation Made Easy" },
          { name: "quoteHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Touch With Us." },
          { name: "quoteButtonText", label: "Button Text", type: "text", default: "Book Now" },
        ],
      },
      {
        key: "visit",
        label: "6. Visit Acciva",
        fields: [
          { name: "visitEyebrow", label: "Eyebrow", type: "text", default: "Get In Touch" },
          { name: "visitHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Acciva." },
          { name: "visitCompanyName", label: "Company Name", type: "text", default: "Acciva Travels Private Limited" },
          {
            name: "visitAddress",
            label: "Address",
            type: "text",
            default: "Ground Floor, No.52, 1st Main Rd, HMT Layout, Anandnagar, Hebbal, Bengaluru, Karnataka 560032",
          },
          { name: "visitRating", label: "Rating (1-5)", type: "number", default: 4.7 },
          { name: "visitReviewCount", label: "Review Count Text", type: "text", default: "(134 reviews)" },
          {
            name: "visitMapEmbedUrl",
            label: "Google Maps Embed URL",
            type: "text",
            default:
              "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0961003448615!2d77.59094080000001!3d13.029551899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae179675b10e35%3A0x4e2fa4b235d073e4!2sAcciva%20Travels%20Private%20Limited!5e0!3m2!1sen!2sin!4v1788930808147!5m2!1sen!2sin",
          },
        ],
      },
    ],
  },
  {
    key: "employee-transportation-services",
    label: "Employee Transportation Services Page",
    icon: Users,
    description: "The dedicated Employee Transportation Services subpage, linked from the Services nav dropdown.",
    relatedCollections: [],
    sections: [
      {
        key: "hero",
        label: "1. Hero",
        fields: [
          { name: "heroEyebrow", label: "Eyebrow", type: "text", default: "Corporate Mobility" },
          {
            name: "heroTitleMain",
            label: "Title",
            type: "textarea",
            default: "Acciva Travels: Reliable Corporate Employee Transportation Services",
          },
          { name: "heroTitleAccent", label: "Title (Highlighted)", type: "text", default: "Tailored to Your Business Needs" },
          {
            name: "heroBackgroundImage",
            label: "Background Image",
            type: "image",
            default:
              "https://images.pexels.com/photos/34985962/pexels-photo-34985962.jpeg?auto=compress&cs=tinysrgb&w=1920",
          },
        ],
      },
      {
        key: "intro",
        label: "2. Built Around Your Business",
        fields: [
          { name: "introEyebrow", label: "Eyebrow", type: "text", default: "Built Around Your Business" },
          { name: "introHeadingMain", label: "Heading", type: "text", default: "Employee Transportation That" },
          { name: "introHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Works Around Your Business." },
          {
            name: "introParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Managing employee transportation can become complicated when you have multiple shifts, pickup locations, routes, and changing workforce requirements. Delays, missed pickups, and poor coordination can affect employee experience and also add unnecessary work for your HR and administration teams.",
              "Acciva Travels helps businesses take that responsibility off their hands. We plan and manage employee transportation around your working hours, employee locations, and operational requirements, providing reliable daily pickup and drop-off services while your team focuses on running the business.",
              "From scheduled employee transportation to shift-based services and customized routes, we handle the coordination of vehicles, drivers, routes, schedules, and tracking to keep your employee transportation organized and dependable.",
            ],
          },
          {
            name: "introImage",
            label: "Image",
            type: "image",
            default:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo3X_Wak1PB2CWrLV-HNNlB9sU84cQOvJi36YLZfHJnXnVGp8Rxn815_s&s=10",
          },
        ],
      },
      {
        key: "offer",
        label: "3. What We Offer",
        fields: [
          { name: "offerEyebrow", label: "Eyebrow", type: "text", default: "What We Offer" },
          { name: "offerHeadingMain", label: "Heading", type: "text", default: "Employee Transportation" },
          { name: "offerHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Services." },
          {
            name: "offerParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Acciva Travels offers employee transportation solutions that include daily employee pickup and drop-off, shift-based transportation, and multiple pickup and drop-off locations.",
              "We understand that every organization has different transportation requirements. Some businesses may have several work shifts, while others may have employees travelling from different parts of the city. Transportation requirements can also change as teams, shifts, and employee locations change.",
              "Our services are designed to accommodate these requirements and provide your staff with timely, consistent, and well-organized transportation every day.",
            ],
          },
          {
            name: "offerImage",
            label: "Image",
            type: "image",
            default: "https://amazelogistics.com/img/employee-transport-hero.webp",
          },
        ],
      },
      {
        key: "routePlanning",
        label: "4. How We Plan & Manage Routes",
        fields: [
          { name: "routeEyebrow", label: "Eyebrow", type: "text", default: "Planning & Coordination" },
          { name: "routeHeadingMain", label: "Heading", type: "text", default: "How We Plan" },
          { name: "routeHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "& Manage Routes." },
          {
            name: "routeParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "A good transportation service starts with good planning.",
              "We work closely with your HR, administration, and operations teams to understand employee locations, shift timings, preferred pickup points, route requirements, and other operational needs. Based on this information, we develop transportation plans that are practical and efficient for your organization.",
              "Our route planning takes into account factors such as traffic conditions, employee locations, route distances, and shift schedules. This helps us create routes that reduce unnecessary travel time while keeping pickups and drop-offs organized and punctual.",
              "As requirements change, routes and schedules can also be reviewed and adjusted to keep the service working effectively.",
            ],
          },
          {
            name: "routeSteps",
            label: "Route Planning Steps",
            type: "cards",
            itemLabel: "Step",
            default: [
              { step: "01", title: "Understand Requirements", icon: "ClipboardList" },
              { step: "02", title: "Design Practical Routes", icon: "Route" },
              { step: "03", title: "Keep It Punctual", icon: "Gauge" },
              { step: "04", title: "Review & Adjust", icon: "RefreshCcw" },
            ],
            itemFields: [
              { name: "step", label: "Step Number", type: "text" },
              { name: "title", label: "Title", type: "text" },
              { name: "icon", label: "Icon", type: "select", options: iconNames },
            ],
          },
        ],
      },
      {
        key: "safety",
        label: "5. Safety, Drivers & Vehicles",
        fields: [
          { name: "safetyEyebrow", label: "Eyebrow", type: "text", default: "Trust & Compliance" },
          { name: "safetyHeadingMain", label: "Heading", type: "text", default: "Safety, Drivers" },
          { name: "safetyHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "& Vehicles." },
          { name: "safetyDescription", label: "Description", type: "text", default: "Employee safety is one of our priorities." },
          {
            name: "safetyCards",
            label: "Safety Cards",
            type: "cards",
            itemLabel: "Card",
            default: [
              {
                icon: "UserCheck",
                title: "Verified, Trained Drivers",
                text: "At Acciva Travels, we maintain a fleet of well-maintained vehicles operated by experienced and trained drivers. Driver verification, qualifications, experience, and professional conduct are important parts of our transportation operations.",
              },
              {
                icon: "Wrench",
                title: "Vehicle Upkeep",
                text: "We also pay attention to regular vehicle checks and maintenance to help keep every journey safe and comfortable.",
              },
              {
                icon: "Sparkles",
                title: "Comfortable Journeys",
                text: "From clean interiors to comfortable seating and adequate ventilation, we aim to provide employees with a pleasant travel experience throughout their daily commute.",
              },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "title", label: "Title", type: "text" },
              { name: "text", label: "Text", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "tech",
        label: "6. GPS Tracking & Technology",
        fields: [
          { name: "techEyebrow", label: "Eyebrow", type: "text", default: "Smarter Visibility" },
          { name: "techHeadingMain", label: "Heading", type: "text", default: "GPS Tracking" },
          { name: "techHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "& Technology." },
          {
            name: "techParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Technology gives businesses better visibility over their transportation operations.",
              "Our corporate transportation services can incorporate GPS vehicle tracking and driver monitoring systems, allowing authorized teams to view vehicle locations and monitor transportation activity.",
              "This provides HR and administration teams with useful information about ongoing journeys and helps improve communication when there are changes or unexpected delays. Better visibility also makes it easier to manage routes, schedules, and day-to-day transportation requirements.",
            ],
          },
          {
            name: "techFeatures",
            label: "Feature Chips",
            type: "cards",
            itemLabel: "Chip",
            default: [
              { icon: "Radar", label: "GPS Vehicle Tracking" },
              { icon: "Smartphone", label: "Driver Monitoring" },
              { icon: "Bell", label: "Delay & Change Alerts" },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "label", label: "Label", type: "text" },
            ],
          },
          {
            name: "techImage",
            label: "Image",
            type: "image",
            default:
              "https://vitalglowgps.com/cdn/shop/articles/node-n_412b4s6n_17cb7cce-2db8-48bd-99f7-0ee28b502dd4.png?v=1780563505&width=1200",
          },
        ],
      },
      {
        key: "benefits",
        label: "7. Benefits for Employers & Employees",
        fields: [
          { name: "benefitsEyebrow", label: "Eyebrow", type: "text", default: "Why It Matters" },
          { name: "benefitsHeadingMain", label: "Heading", type: "text", default: "Benefits for Employers" },
          { name: "benefitsHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "and Employees." },
          {
            name: "benefitsDescription",
            label: "Description",
            type: "text",
            default: "Managing employee transportation can take considerable time, particularly when there are multiple routes, shifts, vehicles, and pickup locations involved.",
          },
          {
            name: "benefits",
            label: "Benefits",
            type: "cards",
            itemLabel: "Benefit",
            default: [
              {
                icon: "Building2",
                title: "For Employers",
                text: "With Acciva Travels managing the transportation operation, your HR and administration teams can spend less time dealing with daily transportation coordination. We take care of route coordination, driver and vehicle allocation, scheduling, monitoring, and ongoing operational support.",
              },
              {
                icon: "Users",
                title: "For Employees",
                text: "For employees, a dependable transportation service means more predictable commutes, less travel-related stress, and greater confidence in their daily journey to and from work.",
              },
            ],
            itemFields: [
              { name: "icon", label: "Icon", type: "select", options: iconNames },
              { name: "title", label: "Title", type: "text" },
              { name: "text", label: "Text", type: "textarea" },
            ],
          },
        ],
      },
      {
        key: "whyChoose",
        label: "8. Why Choose Acciva Travels",
        fields: [
          { name: "whyEyebrow", label: "Eyebrow", type: "text", default: "Distinct Advantage" },
          { name: "whyHeadingMain", label: "Heading", type: "text", default: "Why Choose" },
          { name: "whyHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Acciva Travels?" },
          {
            name: "whyParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "Every business has its own workforce, working hours, locations, and transportation challenges. That's why we take a practical and flexible approach to employee transportation.",
              "Acciva Travels works with your team to understand what you need and build a transportation plan around your actual requirements. Whether you have multiple shifts, employees travelling from different locations, or changing transportation needs, we work to keep the service organized and reliable.",
            ],
          },
          {
            name: "whyHighlight",
            label: "Highlight Quote",
            type: "textarea",
            default:
              "With professional drivers, managed vehicles, route planning, GPS tracking, and responsive operational support, we provide businesses with a transportation partner they can rely on.",
          },
          {
            name: "whyImage",
            label: "Image",
            type: "image",
            default:
              "https://media.istockphoto.com/id/182913362/photo/travel-coaches-at-tourist-destination-parked-in-a-row.jpg?s=612x612&w=0&k=20&c=WydkBjrqbYQKAITmQ9oEWzwzsQbQhp15OCOiSTgqj-g=",
          },
        ],
      },
      {
        key: "talk",
        label: "9. Let's Talk CTA",
        fields: [
          { name: "talkEyebrow", label: "Eyebrow", type: "text", default: "" },
          { name: "talkHeadingMain", label: "Heading", type: "text", default: "Let's Talk About Your" },
          { name: "talkHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Employee Transportation Needs" },
          {
            name: "talkParagraphs",
            label: "Paragraphs",
            type: "list",
            default: [
              "If your organization is looking for a reliable partner to manage employee or staff transportation, Acciva Travels can help.",
              "Talk to us about your routes, shift timings, employee locations, and other requirements. We'll work with your team to understand your needs and develop a transportation plan that works for your business and your employees.",
            ],
          },
          { name: "talkButtonText", label: "Button Text", type: "text", default: "Talk to Acciva Travels" },
        ],
      },
    ],
  },
];

export function getPageConfig(key) {
  return pages.find((p) => p.key === key);
}

export function getSectionConfig(pageKey, sectionKey) {
  const page = getPageConfig(pageKey);
  if (!page) return null;
  return page.sections.find((s) => s.key === sectionKey) || null;
}

export function pageDefaults(key) {
  const config = getPageConfig(key);
  if (!config) return {};
  const defaults = {};
  config.sections.forEach((section) => {
    section.fields.forEach((f) => {
      defaults[f.name] = f.default;
    });
  });
  return defaults;
}
