import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GYM_DETAILS } from "../data";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show motivational assistance tooltip 4.5 seconds after loading the page
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4500);

    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppTrigger = () => {
    const textQuery = "Hello Barauli Gym! I am requesting some information regarding memberships, batches, and timing schedules. Please connect back.";
    const url = `https://wa.me/${GYM_DETAILS.whatsappPhone}?text=${encodeURIComponent(textQuery)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-45 flex flex-col items-end gap-2 max-w-xs">
      
      {/* Tooltip speech balloon */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            className="bg-stone-900 border border-emerald-900/35 p-3.5 rounded-2xl shadow-2xl relative flex items-start gap-2.5 max-w-[250px] border-l-4 border-l-emerald-500"
          >
            <div>
              <span className="text-[9px] text-emerald-400 font-bold font-mono uppercase tracking-wider block">Barauli Chat Line</span>
              <p className="text-xs text-stone-200 mt-1 leading-relaxed">
                Need details on timing, batch availability, or direct fees? Tap below to chat instantly on WhatsApp!
              </p>
            </div>
            
            {/* Close tooltip lever */}
            <button
              onClick={() => setShowTooltip(false)}
              className="text-stone-500 hover:text-white p-0.5 rounded cursor-pointer flex-shrink-0"
              aria-label="Close message"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Speach balloon little arrow */}
            <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-stone-900 border-r border-b border-emerald-900/30 transform rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating pulsing WhatsApp button */}
      <button
        id="whatsapp-floating-action"
        onClick={handleWhatsAppTrigger}
        onMouseEnter={() => setShowTooltip(true)}
        className="relative group p-4.5 rounded-full bg-emerald-500 hover:bg-emerald-600 text-stone-950 hover:text-stone-950 font-bold shadow-2xl hover:scale-108 transition-all active:scale-95 cursor-pointer flex items-center justify-center"
        aria-label="Contact Barauli Gym on WhatsApp"
      >
        <MessageCircle className="w-6.5 h-6.5" />

        {/* Pulse light waves */}
        <span className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-ping opacity-45 -z-10" />
        <span className="absolute -inset-1.5 rounded-full bg-emerald-500/10 -z-20 group-hover:bg-emerald-500/20 transition-all duration-300" />
      </button>

    </div>
  );
}
