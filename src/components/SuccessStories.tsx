import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TRANSFORMATION_STORIES, SuccessStory } from "../data";
import { Sparkles, ArrowRightLeft, MessageSquare, Flame } from "lucide-react";

export default function SuccessStories() {
  // Store dynamic show-after flag for each story by ID, defaults to showing after state
  const [toggleState, setToggleState] = useState<Record<string, "after" | "before">>({
    "ts-1": "after",
    "ts-2": "after",
    "ts-3": "after"
  });

  const handleToggleState = (id: string) => {
    setToggleState(prev => ({
      ...prev,
      [id]: prev[id] === "after" ? "before" : "after"
    }));
  };

  return (
    <section id="success-stories" className="py-24 bg-stone-900 border-t border-stone-850 relative">
      {/* Glow support */}
      <div className="absolute top-[40%] right-[-15%] w-[400px] h-[400px] bg-brand-orange-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-500 px-3 py-1 bg-brand-orange-500/10 border border-brand-orange-500/25 rounded-md inline-block">
            Proven Results
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            TRANSFORMATION SUCCESS STORIES
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange-500 mx-auto rounded-full" />
          <p className="text-stone-400 text-sm max-w-2xl mx-auto">
            These are not just numbers, they are lives empowered. Meet local Barauli citizens who fully transformed their strength, health, and confidence with consistent workout regimes.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {TRANSFORMATION_STORIES.map((story) => {
            const isShowingAfter = toggleState[story.id] === "after";
            
            return (
              <div
                key={story.id}
                className="bg-stone-950 border border-stone-850 rounded-2xl p-6 flex flex-col justify-between group hover:border-brand-orange-500/30 transition-colors duration-300 shadow-xl"
              >
                <div className="space-y-6">
                  {/* Image toggle frame */}
                  <div className="relative h-80 rounded-xl overflow-hidden border border-stone-900">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={isShowingAfter ? "after" : "before"}
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.3 }}
                        src={isShowingAfter ? story.afterImage : story.beforeImage}
                        alt={`${story.name} ${isShowingAfter ? "After" : "Before"} Gym Practice`}
                        className="w-full h-full object-cover object-center"
                      />
                    </AnimatePresence>

                    {/* Dark gradient mask */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                    {/* Before/After Indicator badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                      <span className="bg-brand-orange-500 text-black text-[9px] font-black tracking-widest uppercase py-1 px-3.5 rounded-full shadow-lg">
                        {story.tag}
                      </span>
                      
                      <span className={`text-[10px] font-black tracking-widest uppercase py-1 px-3 rounded border shadow-lg ${
                        isShowingAfter 
                          ? "bg-emerald-950/90 border-emerald-500 text-emerald-400" 
                          : "bg-amber-950/90 border-amber-500 text-amber-400"
                      }`}>
                        {isShowingAfter ? "AFTER TRANSFORMATION" : "BEFORE STARTING"}
                      </span>
                    </div>

                    {/* Metric overlay at base of image */}
                    <div className="absolute bottom-4 left-4 right-4 grid grid-cols-2 gap-2 text-center pointer-events-none">
                      <div className="bg-stone-900/90 backdrop-blur-sm p-2 rounded-lg border border-stone-800">
                        <span className="text-[9px] text-stone-400 font-mono uppercase block">Before Weight</span>
                        <span className="text-sm font-bold text-stone-200 line-through">{story.beforeWeight}</span>
                      </div>
                      <div className="bg-brand-orange-500/90 backdrop-blur-sm p-2 rounded-lg border border-brand-orange-500/20">
                        <span className="text-[9px] text-black font-mono font-bold uppercase block">After Weight</span>
                        <span className="text-sm font-black text-black">{story.afterWeight}</span>
                      </div>
                    </div>
                  </div>

                  {/* Toggle Button Switcher */}
                  <div className="flex justify-center">
                    <button
                      id={`toggle-${story.id}`}
                      onClick={() => handleToggleState(story.id)}
                      className="inline-flex items-center gap-2 bg-stone-900 hover:bg-stone-850 active:scale-95 border border-stone-800 text-stone-300 hover:text-brand-orange-500 font-mono text-xs font-bold py-2 px-5 rounded-full uppercase tracking-wider transition-all cursor-pointer"
                    >
                      <ArrowRightLeft className="w-3.5 h-3.5 text-brand-orange-500 animate-pulse" />
                      <span>Compare: See {isShowingAfter ? "Before State" : "After State"}</span>
                    </button>
                  </div>

                  {/* Details Block */}
                  <div className="space-y-4 pt-2">
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-black text-lg text-white tracking-wide uppercase">
                        {story.name}
                      </h3>
                      <span className="bg-stone-900 border border-stone-850 text-[10px] font-mono text-stone-400 font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                        In {story.timeframe}
                      </span>
                    </div>

                    <div className="relative">
                      <span className="text-4xl text-brand-orange-500/20 font-bold font-display absolute -top-4 -left-1">“</span>
                      <p className="text-xs text-stone-300 leading-relaxed italic pl-5">
                        {story.quote}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom success index validation */}
                <div className="border-t border-stone-900 pt-5 mt-6 flex items-center gap-2">
                  <div className="bg-brand-orange-500/10 p-1.5 rounded-full text-brand-orange-500">
                    <Flame className="w-4 h-4 fill-brand-orange-500" />
                  </div>
                  <span className="text-[10px] text-brand-orange-500 font-mono uppercase tracking-widest font-bold">
                    {story.achievement}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Motivational bottom banner */}
        <div className="mt-16 text-center">
          <p className="text-stone-400 text-sm font-sans">
            Ready to be our next success story? Your 6-month body transformation starts today.
          </p>
        </div>

      </div>
    </section>
  );
}
