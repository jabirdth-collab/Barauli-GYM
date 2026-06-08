import { useState, useEffect } from "react";
import { Dumbbell, Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GYM_DETAILS } from "../data";

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export default function Header({ activeSection, onNavigate }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Equipment", id: "equipment" },
    { label: "Plans", id: "plans" },
    { label: "Success Stories", id: "success-stories" },
    { label: "Reviews", id: "reviews" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" }
  ];

  const handleNavItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onNavigate(id);
  };

  return (
    <>
      <header
        id="main-nav-bar"
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-stone-950/95 backdrop-blur-md py-4 border-b border-stone-900 shadow-xl"
            : "bg-gradient-to-b from-black/85 to-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo element */}
          <div
            id="brand-logo"
            onClick={() => handleNavItemClick("home")}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="bg-brand-orange-500 text-black p-2 rounded-lg transition-transform duration-300 group-hover:scale-110">
              <Dumbbell className="w-6 h-6 stroke-[3]" />
            </div>
            <div>
              <span className="font-display font-black text-xl tracking-wider text-white flex items-center gap-1">
                BARAULI <span className="text-brand-orange-500">GYM</span>
              </span>
              <p className="text-[9px] text-stone-400 font-mono tracking-widest uppercase leading-none mt-0.5">
                Premium Fitness Hub
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav id="desktop-navigation" className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavItemClick(item.id)}
                className={`relative font-medium text-sm transition-colors uppercase tracking-wider py-1 cursor-pointer ${
                  activeSection === item.id
                    ? "text-brand-orange-500"
                    : "text-stone-300 hover:text-white"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeUnderline"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-orange-500 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              id="cta-call-header"
              href={`tel:${GYM_DETAILS.phone.replace(/\s+/g, "")}`}
              className="flex items-center gap-1.5 text-stone-200 hover:text-brand-orange-500 font-mono text-xs font-semibold uppercase px-3 py-1.5 transition-colors border border-stone-800 rounded-lg bg-stone-900/40 hover:bg-stone-900"
            >
              <Phone className="w-3.5 h-3.5 text-brand-orange-500" />
              <span>{GYM_DETAILS.phone}</span>
            </a>
            <button
              id="cta-join-header"
              onClick={() => handleNavItemClick("plans")}
              className="bg-brand-orange-500 hover:bg-brand-orange-600 active:scale-95 text-black font-semibold text-xs py-2 px-5 rounded-lg uppercase tracking-wider transition-all shadow-lg shadow-brand-orange-500/20 hover:shadow-brand-orange-500/30 cursor-pointer"
            >
              Join Now
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden flex items-center gap-3">
            <a
              id="cta-mobile-quick-call"
              href={`tel:${GYM_DETAILS.phone.replace(/\s+/g, "")}`}
              className="sm:hidden p-2 rounded-lg bg-stone-900 border border-stone-800 text-brand-orange-500 active:scale-95"
              aria-label="Call Gym"
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-stone-300 hover:text-brand-orange-500 focus:outline-none focus:ring-1 focus:ring-brand-orange-500 rounded-lg bg-stone-900/50 border border-stone-800"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-navigation-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[73px] left-0 w-full bg-stone-950 border-b border-brand-orange-500/20 z-40 lg:hidden shadow-2xl"
          >
            <div className="px-4 py-6 space-y-3 bg-gradient-to-b from-stone-950 to-stone-900 max-h-[calc(100vh-80px)] overflow-y-auto">
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavItemClick(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-between ${
                      activeSection === item.id
                        ? "bg-brand-orange-500/10 text-brand-orange-500 border-l-4 border-brand-orange-500"
                        : "text-stone-300 hover:bg-stone-900 hover:text-white"
                    }`}
                  >
                    <span>{item.label}</span>
                    {activeSection === item.id && (
                      <span className="w-1.5 h-1.5 bg-brand-orange-500 rounded-full" />
                    )}
                  </button>
                ))}
              </nav>

              <div className="pt-4 border-t border-stone-850 flex flex-col gap-3 px-4">
                <a
                  href={`tel:${GYM_DETAILS.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-center gap-2 text-center text-stone-200 border border-stone-800 bg-stone-900/60 rounded-xl py-3 text-sm font-mono"
                >
                  <Phone className="w-4 h-4 text-brand-orange-500" />
                  <span>{GYM_DETAILS.phone}</span>
                </a>
                <button
                  onClick={() => handleNavItemClick("plans")}
                  className="w-full bg-brand-orange-500 text-black font-bold text-center rounded-xl py-3.5 text-sm uppercase tracking-widest shadow-lg shadow-brand-orange-500/20"
                >
                  Join Barauli Gym
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
