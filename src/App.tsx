import { useState, useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Equipment from "./components/Equipment";
import Membership from "./components/Membership";
import SuccessStories from "./components/SuccessStories";
import Reviews from "./components/Reviews";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");
  const [selectedPlan, setSelectedPlan] = useState("");

  // Smooth scroll helper
  const navigateToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveSection(sectionId);
    }
  };

  // Select membership plan callback: pre-fills contact form and scrolls down safely
  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName);
    setTimeout(() => {
      navigateToSection("contact");
    }, 100);
  };

  const handleClearSelectedPlan = () => {
    setSelectedPlan("");
  };

  // Real-time scrolling active indicator via IntersectionObserver
  useEffect(() => {
    const sections = ["home", "about", "equipment", "plans", "success-stories", "reviews", "gallery", "contact"];
    
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Detect active viewport middle highlights
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <div className="bg-stone-950 min-h-screen text-stone-100 font-sans antialiased overflow-x-hidden selection:bg-brand-orange-500 selection:text-black">
      
      {/* 1. Dynamic Responsive Header */}
      <Header
        activeSection={activeSection}
        onNavigate={navigateToSection}
      />

      {/* 2. Visual Punchy Hero Section */}
      <Hero
        onJoinClick={() => navigateToSection("plans")}
        onContactClick={() => navigateToSection("contact")}
      />

      {/* 3. About Barauli Gym Pillars */}
      <About />

      {/* 4. Filterable Machinery Showcases */}
      <Equipment />

      {/* 5. Pricing and Perks Packages */}
      <Membership onSelectPlan={handleSelectPlan} />

      {/* 6. Success Client Body Transformations */}
      <SuccessStories />

      {/* 7. Actual star Google Feed Reviews */}
      <Reviews />

      {/* 8. Virtual Division Photo Grid and Lightbox modal */}
      <Gallery />

      {/* 9. Contact Registration Core & Dropdown Accordion FAQ */}
      <Contact
        selectedPlan={selectedPlan}
        onClearPlan={handleClearSelectedPlan}
      />

      {/* 10. Social Maps Footer Details */}
      <Footer onNavigate={navigateToSection} />

      {/* 11. Pulse Assist WhatsApp desk */}
      <WhatsAppButton />

    </div>
  );
}
