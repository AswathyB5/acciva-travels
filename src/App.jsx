import { lazy, Suspense } from "react";
import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
// Every route is its own chunk — a visitor only downloads the page they
// actually asked for, instead of the whole site's worth of JS up front.
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const EmployeeTransportationServices = lazy(() => import("./pages/EmployeeTransportationServices"));
const Blog = lazy(() => import("./pages/Blog"));
const Technology = lazy(() => import("./pages/Technology"));
const Contact = lazy(() => import("./pages/Contact"));
const Careers = lazy(() => import("./pages/Careers"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

// The admin panel (its editors, the rich-text toolbar, DOMPurify, etc.) has
// no business in a public visitor's initial download — split it into its
// own chunk that only loads when someone actually visits /admin.
const AdminApp = lazy(() => import("./admin/admin"));

function SiteLayout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen bg-soft">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
          >
            <Suspense fallback={<div className="min-h-[60vh]" />}>
              <Outlet />
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route
        path="/admin/*"
        element={
          <Suspense fallback={<div className="min-h-screen bg-ivory" />}>
            <AdminApp />
          </Suspense>
        }
      />
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route
          path="/services/employee-transportation-services"
          element={<EmployeeTransportationServices />}
        />
        <Route path="/technology" element={<Technology />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Route>
    </Routes>
  );
}

export default App;
