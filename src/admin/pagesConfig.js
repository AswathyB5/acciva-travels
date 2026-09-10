import { PanelTop, PanelBottom, Home, Info, Car, Cpu, Newspaper, Mail, Briefcase } from "lucide-react";
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
        key: "industries",
        label: "5. Industries We Serve",
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
        ],
      },
      {
        key: "why",
        label: "6. Why Enterprises Trust Us",
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
        key: "journal",
        label: "7. Travel Journal",
        fields: [
          { name: "journalEyebrow", label: "Eyebrow", type: "text", default: "The Journal" },
          { name: "journalHeadingMain", label: "Heading", type: "text", default: "Stories From The" },
          { name: "journalHeadingAccent", label: "Heading (Highlighted)", type: "text", default: "Open Road." },
        ],
      },
      {
        key: "finalCta",
        label: "8. Final Call To Action",
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
          {
            name: "visionText",
            label: "Vision Card Text",
            type: "textarea",
            default:
              "Our vision is to deliver superior travel and transportation services through a proactive approach focused on hospitality, integrity, reliability and customer satisfaction. We strive to set high standards in corporate transportation by providing efficient and dependable mobility solutions that meet the evolving needs of our customers.",
          },
          { name: "missionTitle", label: "Mission Card Title", type: "text", default: "OUR MISSION" },
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
              },
              {
                title: "24/7 Emergency Response Team",
                description:
                  "At Acciva Travels, we understand that reliable transportation requires support around the clock. Our 24/7 Emergency Response Team is available to promptly address unexpected travel and transportation-related issues and help ensure uninterrupted service.\n\nWith a proactive approach and dedicated support, our team works to provide quick assistance, enhanced passenger safety and reliable transportation solutions whenever needed.",
              },
              {
                title: "No Unauthorized Stops During Travel",
                description:
                  "At Acciva Travels, passenger safety, punctuality and travel efficiency are our top priorities. Our professional transportation team follows planned routes and approved travel schedules, helping ensure a smooth and uninterrupted journey for every passenger.\n\nWe maintain strict guidelines to prevent unauthorized stops during travel, reducing unnecessary delays and supporting a safe, comfortable and timely transportation experience.",
              },
              {
                title: "Minimum Attrition – With Minimal Changes",
                description:
                  "At Acciva Travels, we focus on maintaining a stable and reliable transportation team to ensure consistent service quality. Our minimum staff attrition helps us maintain operational continuity, strong team coordination and a better understanding of client requirements.\n\nBy making minimal changes to our trained staff and transportation operations, we provide corporate clients with a dependable and seamless employee transportation service.",
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
    description: "The Contact page hero.",
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
        ],
      },
    ],
  },
  {
    key: "careers",
    label: "Careers Page",
    icon: Briefcase,
    description: "The Careers page hero. Job openings are managed in the Content Library.",
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
