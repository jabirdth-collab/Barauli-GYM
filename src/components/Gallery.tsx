import { useState, MouseEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { GALLERY_ITEMS, GalleryItem } from "../data";
import { Maximize2, X, ChevronLeft, ChevronRight, Image } from "lucide-react";

export default function Gallery() {
  const [selectedTab, setSelectedTab] = useState<"All" | "Strength" | "Cardio" | "Lounge" | "Trainers">("All");
  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const tabs: ("All" | "Strength" | "Cardio" | "Lounge" | "Trainers")[] = [
    "All", "Strength", "Cardio", "Lounge", "Trainers"
  ];

  // Map category matching
  const filteredItems = selectedTab === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((item) => item.category === selectedTab);

  const handleOpenLightbox = (imageUrl: string) => {
    const idx = GALLERY_ITEMS.findIndex((item) => item.imageUrl === imageUrl);
    if (idx !== -1) {
      setActiveImageIdx(idx);
    }
  };

  const handleCloseLightbox = () => {
    setActiveImageIdx(null);
  };

  const handleNextImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx + 1) % GALLERY_ITEMS.length);
    }
  };

  const handlePrevImage = (e: MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length);
    }
  };

  return (
    <section id="gallery" className="py-24 bg-stone-900 border-t border-stone-850 relative">
      {/* Background decoration */}
      <div className="absolute top-[20%] right-[-10%] w-[300px] h-[300px] bg-brand-orange-500/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-500 px-3 py-1 bg-brand-orange-500/10 border border-brand-orange-500/25 rounded-md inline-block">
            Virtual Walkthrough
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            BARAULI GYM PHOTO GALLERY
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange-500 mx-auto rounded-full" />
          <p className="text-stone-400 text-sm max-w-2xl mx-auto">
            Take a visual tour around our spacious layout divisions. Witness our premium workout environments, hygienic changing zones, and advanced strength installations.
          </p>
        </div>

        {/* Division Tab Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              id={`gallery-tab-${tab.toLowerCase()}`}
              onClick={() => setSelectedTab(tab)}
              className={`px-4.5 py-2 rounded-xl text-[11px] font-display font-bold tracking-wider uppercase transition-all cursor-pointer ${
                selectedTab === tab
                  ? "bg-brand-orange-500 text-black shadow-lg shadow-brand-orange-500/15"
                  : "bg-stone-950 text-stone-400 hover:text-white border border-stone-900"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={item.id}
                onClick={() => handleOpenLightbox(item.imageUrl)}
                className="relative h-64 rounded-xl overflow-hidden border border-stone-850 group cursor-pointer shadow-lg"
              >
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />

                {/* Hover overlay masking */}
                <div className="absolute inset-0 bg-stone-950/85 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6 text-center select-none z-10">
                  <div className="bg-brand-orange-500 text-black p-2.5 rounded-full mb-3 shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                    <Maximize2 className="w-5 h-5 stroke-[2.5]" />
                  </div>
                  <h4 className="font-display font-extrabold text-sm text-white uppercase tracking-wider transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                    {item.title}
                  </h4>
                  <p className="text-[10px] text-brand-orange-500 font-mono uppercase tracking-widest mt-1 transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                    Division: {item.category}
                  </p>
                </div>

                {/* Simple bottom vignette mask for loaded displays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none group-hover:opacity-0 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white pointer-events-none group-hover:opacity-0 transition-opacity">
                  <span className="text-xs font-semibold text-stone-200 shadow-sm uppercase tracking-wide">
                    {item.title}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full screen Lightbox Viewer Overlay Modal */}
        <AnimatePresence>
          {activeImageIdx !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseLightbox}
              className="fixed inset-0 bg-black/95 z-55 flex flex-col items-center justify-center p-4 sm:p-8 backdrop-blur-sm cursor-zoom-out"
            >
              {/* Close Button top right */}
              <button
                id="close-lightbox"
                onClick={handleCloseLightbox}
                className="absolute top-6 right-6 p-2 rounded-full bg-stone-900 border border-stone-800 text-white hover:text-brand-orange-500 cursor-pointer transition-colors z-50"
                aria-label="Close Lightbox"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Lightbox center slider panel */}
              <div
                className="relative max-w-5xl w-full max-h-[80vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Previous trigger bar */}
                <button
                  id="lightbox-prev"
                  onClick={handlePrevImage}
                  className="absolute left-[-20px] sm:left-[-50px] p-2 rounded-full bg-stone-900/80 border border-stone-800 text-white hover:text-brand-orange-500 cursor-pointer transition-colors flex items-center justify-center z-50"
                  aria-label="Previous Image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                {/* Central main scaled image loaded with motion */}
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  className="relative rounded-xl overflow-hidden border border-stone-800 max-h-[75vh]"
                >
                  <img
                    src={GALLERY_ITEMS[activeImageIdx].imageUrl}
                    alt={GALLERY_ITEMS[activeImageIdx].title}
                    className="max-h-[75vh] w-auto max-w-full object-contain"
                  />
                  
                  {/* Subtle info panel at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-stone-950/80 border-t border-stone-900 p-4 backdrop-blur-sm">
                    <h3 className="font-display font-extrabold text-sm text-white uppercase tracking-wider text-center">
                      {GALLERY_ITEMS[activeImageIdx].title}
                    </h3>
                    <p className="text-[10px] text-brand-orange-500 font-mono text-center uppercase tracking-widest mt-0.5">
                      Division: {GALLERY_ITEMS[activeImageIdx].category} • {activeImageIdx + 1} / {GALLERY_ITEMS.length}
                    </p>
                  </div>
                </motion.div>

                {/* Next trigger bar */}
                <button
                  id="lightbox-next"
                  onClick={handleNextImage}
                  className="absolute right-[-20px] sm:right-[-50px] p-2 rounded-full bg-stone-900/80 border border-stone-800 text-white hover:text-brand-orange-500 cursor-pointer transition-colors flex items-center justify-center z-50"
                  aria-label="Next Image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Lightbox instructions help footer */}
              <div className="fixed bottom-6 text-stone-400 text-xs font-mono flex items-center gap-1">
                <span>Use arrows to navigate • Click outside to close</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
