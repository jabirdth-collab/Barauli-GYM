import { Play, Phone, ShieldCheck, Flame, Users2 } from "lucide-react";
import { motion } from "motion/react";
import { GYM_DETAILS } from "../data";

interface HeroProps {
  onJoinClick: () => void;
  onContactClick: () => void;
}

export default function Hero({ onJoinClick, onContactClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-stone-950 flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Background Graphic Overlay with a subtle scale motion */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-stone-950/80 to-stone-950 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/65 to-stone-950/20 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 to-transparent z-10" />
        
        <motion.img
          initial={{ scale: 1.15, opacity: 0.35 }}
          animate={{ scale: 1.02, opacity: 0.45 }}
          transition={{ duration: 12, ease: "easeOut" }}
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=85"
          alt="Premium Fitness Gym Background"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Hero Visual Light Accents */}
      <div className="absolute top-[20%] left-[-10%] w-[450px] h-[450px] bg-brand-orange-500/10 rounded-full filter blur-[120px] pointer-events-none z-0 animate-pulse-slow" />
      <div className="absolute bottom-[10%] right-[-10%] w-[350px] h-[350px] bg-brand-orange-500/10 rounded-full filter blur-[100px] pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Column left */}
          <div className="lg:col-span-7 select-none">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-stone-900/90 border border-stone-800 text-brand-orange-500 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-6 shadow-md"
            >
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-orange-600"></span>
              </span>
              Now Open in Barauli, Bihar
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[1.05] mb-6"
            >
              Transform <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange-500 to-amber-500">Your Body</span>,
              <br className="hidden sm:inline" /> Transform Your Life
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-stone-300 text-sm sm:text-base md:text-lg font-sans max-w-2xl leading-relaxed mb-10"
            >
              {GYM_DETAILS.subheading}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
            >
              <button
                id="hero-cta-join"
                onClick={onJoinClick}
                className="group relative bg-brand-orange-500 hover:bg-brand-orange-600 active:scale-95 text-black font-black uppercase text-sm px-8 py-4.5 rounded-xl tracking-wider transition-all duration-200 flex items-center justify-center gap-2 shadow-2xl shadow-brand-orange-500/35 cursor-pointer"
              >
                <span>Join Barauli Gym Now</span>
                <Play className="w-4 h-4 fill-black text-black group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                id="hero-cta-call"
                href={`tel:${GYM_DETAILS.phone.replace(/\s+/g, "")}`}
                className="inline-flex items-center justify-center gap-2 border border-stone-800 bg-stone-900/65 hover:bg-stone-900 hover:border-stone-700 text-white font-bold uppercase text-sm px-8 py-4.5 rounded-xl tracking-wider transition-all cursor-pointer"
              >
                <Phone className="w-4 h-4 text-brand-orange-500" />
                <span>Call: {GYM_DETAILS.phone}</span>
              </a>
            </motion.div>

            {/* Micro Highlights Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-3 gap-4 border-t border-stone-900 pt-8 max-w-lg"
            >
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl sm:text-3xl text-brand-orange-500">10+</span>
                <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider mt-1">Gym Subsections</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl sm:text-3xl text-white">45+</span>
                <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider mt-1">Modern Machines</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-black text-2xl sm:text-3xl text-brand-orange-500">5.0 ★</span>
                <span className="text-[10px] text-stone-400 font-mono uppercase tracking-wider mt-1">Google Rating</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Feature Promo Sidebar Cards right */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative p-7 rounded-2xl bg-gradient-to-br from-stone-900 to-stone-950 border border-stone-850 shadow-2xl space-y-6"
            >
              {/* Highlight ribbon */}
              <div className="absolute -top-3 right-5 bg-brand-orange-500 text-black text-[9px] font-black tracking-widest uppercase py-1 px-3.5 rounded-full shadow-md animate-pulse">
                LIMITED OFFER PRE-LAUNCH
              </div>

              <div className="border-b border-stone-900 pb-4">
                <h3 className="font-display font-bold text-lg text-white uppercase">WHY CHOOSE BARAULI GYM?</h3>
                <p className="text-xs text-stone-400 mt-1">The supreme standard of gym experience in your town.</p>
              </div>

              {/* Point 1 */}
              <div className="flex items-start gap-3.5 group">
                <div className="bg-brand-orange-500/10 p-2.5 rounded-lg text-brand-orange-500 group-hover:bg-brand-orange-500 group-hover:text-black transition-colors duration-300">
                  <ShieldCheck className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-200">World-Class Heavy Racks</h4>
                  <p className="text-xs text-stone-400 mt-0.5">High-end biomechanical leverage & dumbbells up to 50kg.</p>
                </div>
              </div>

              {/* Point 2 */}
              <div className="flex items-start gap-3.5 group">
                <div className="bg-brand-orange-500/10 p-2.5 rounded-lg text-brand-orange-500 group-hover:bg-brand-orange-500 group-hover:text-black transition-colors duration-300">
                  <Flame className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-200">Certified Fitness Mentors</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Continuous stance correction and detailed diet charts.</p>
                </div>
              </div>

              {/* Point 3 */}
              <div className="flex items-start gap-3.5 group">
                <div className="bg-brand-orange-500/10 p-2.5 rounded-lg text-brand-orange-500 group-hover:bg-brand-orange-500 group-hover:text-black transition-colors duration-300">
                  <Users2 className="w-5 h-5 stroke-[2.5]" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-200">Fully Air-Conditioned Layout</h4>
                  <p className="text-xs text-stone-400 mt-0.5">Hydrated workout setups, changing rooms & locker systems.</p>
                </div>
              </div>

              {/* Instant Call To Action */}
              <div className="pt-2">
                <button
                  onClick={onContactClick}
                  className="w-full text-center py-3 bg-stone-900 border border-brand-orange-500/25 text-brand-orange-500 hover:text-white hover:border-brand-orange-500 hover:bg-brand-orange-500/5 text-xs font-black uppercase tracking-widest rounded-xl transition-all cursor-pointer"
                >
                  Request a Free 1-Day Trial Pass
                </button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
