import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { EQUIPMENT_SHOWCASE } from "../data";
import { Sparkles, Trophy, Dumbbell } from "lucide-react";

export default function Equipment() {
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Strength" | "Cardio" | "Functional">("All");

  const filterCategories = ["All", "Strength", "Cardio", "Functional"] as const;

  const filteredEquipment = selectedCategory === "All"
    ? EQUIPMENT_SHOWCASE
    : EQUIPMENT_SHOWCASE.filter(item => item.category === selectedCategory);

  return (
    <section id="equipment" className="py-24 bg-stone-950 border-t border-stone-900 relative">
      {/* Glow support */}
      <div className="absolute bottom-[20%] right-[-10%] w-[350px] h-[350px] bg-brand-orange-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-500 px-3 py-1 bg-brand-orange-500/10 border border-brand-orange-500/25 rounded-md inline-block">
            Elite Iron Infrastructure
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            GYM EQUIPMENT SHOWCASE
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange-500 mx-auto rounded-full" />
          <p className="text-stone-400 text-sm max-w-2xl mx-auto">
            Train with the finest! We imported biomechanically sound and high-tensile heavy-strength machinery to safely speed up your gains, lift limits, and track active progression.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {filterCategories.map((category) => (
            <button
              key={category}
              id={`equip-tab-${category.toLowerCase()}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl font-display font-semibold text-xs tracking-wider uppercase transition-all cursor-pointer ${
                selectedCategory === category
                  ? "bg-brand-orange-500 text-black font-extrabold shadow-lg shadow-brand-orange-500/25"
                  : "bg-stone-900 text-stone-400 hover:text-white border border-stone-850 hover:border-stone-750"
              }`}
            >
              {category} Division
            </button>
          ))}
        </div>

        {/* Dynamic Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredEquipment.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.25 }}
                key={item.id}
                className="bg-stone-900/60 border border-stone-850 rounded-2xl overflow-hidden flex flex-col justify-between group hover:border-brand-orange-500/40 transition-colors duration-300 shadow-xl"
              >
                <div>
                  {/* Photo area */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Dark overlay mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent opacity-60" />
                    
                    {/* Category Label badge */}
                    <span className="absolute top-4 left-4 bg-black/85 backdrop-blur-sm border border-stone-800 text-[10px] font-mono font-bold text-brand-orange-500 px-3 py-1 rounded-full uppercase tracking-widest">
                      {item.category} Range
                    </span>
                  </div>

                  {/* Description Box */}
                  <div className="p-6 space-y-3">
                    <h3 className="font-display font-bold text-base text-white group-hover:text-brand-orange-500 transition-colors duration-300 uppercase tracking-tight">
                      {item.name}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Bottom Spec Footer with target impact */}
                <div className="p-6 pt-0">
                  <div className="border-t border-stone-850 pt-4 flex items-center justify-between">
                    <span className="text-[10px] text-stone-500 font-mono uppercase tracking-widest flex items-center gap-1">
                      <Dumbbell className="w-3.5 h-3.5 text-brand-orange-500" />
                      Ergonomic Levers
                    </span>
                    <span className="text-[10px] text-emerald-400 bg-emerald-950/20 border border-emerald-900/30 font-semibold py-0.5 px-2 rounded-full uppercase">
                      Safety Certified
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Footer highlight */}
        <div className="mt-16 text-center">
          <p className="text-xs text-stone-500 font-mono">
            * Equipment updated continuously. All gear conforms to international biomechanics safety requirements.
          </p>
        </div>

      </div>
    </section>
  );
}
