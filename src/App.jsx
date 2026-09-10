import { Routes, Route, Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import EmployeeTransportationServices from "./pages/EmployeeTransportationServices";
import Blog from "./pages/Blog";
import Technology from "./pages/Technology";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import WhatIsCorporateEmployeeTransportation from "./Blogs/what-is-corporate-employee-transportation";
import EmployeeTransportationVsPublicTransport from "./Blogs/employee-transportation-vs-public-transport";
import AdminApp from "./admin/admin";

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
            <Outlet />
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
      <Route path="/admin/*" element={<AdminApp />} />
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
        <Route
          path="/blog/what-is-corporate-employee-transportation"
          element={<WhatIsCorporateEmployeeTransportation />}
        />
        <Route
          path="/blog/employee-transportation-vs-public-transport"
          element={<EmployeeTransportationVsPublicTransport />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Route>
    </Routes>
  );
}

export default App;
