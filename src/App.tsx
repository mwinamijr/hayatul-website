import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//navigation
import Navbar from "./components/navigation/Navbar";
import Footer from "./components/navigation/Footer";

// Pages
import Home from "./containers/HomePage";
import AboutPage from "./containers/About";
import BlogListPage from "./containers/Blog";
import BlogDetail from "./components/BlogDetail";
import ServicesPage from "./containers/Services";
import ContactPage from "./components/ContactForm";

// Education
import Nursery from "./components/education/nursery/Nursery";
import Primary from "./components/education/primary/Primary";
import Religion from "./components/education/ReligiousEd";
import Secular from "./components/education/SecularEd";

// Health
import Health from "./components/health/HealthProgress";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogListPage />} />
        <Route path="/blog/:articleID" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/services" element={<ServicesPage />} />

        <Route path="/education/nursery" element={<Nursery />} />
        <Route path="/education/primary" element={<Primary />} />
        <Route path="/education/religion" element={<Religion />} />
        <Route path="/education/secular" element={<Secular />} />

        <Route path="/health/progress" element={<Health />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
