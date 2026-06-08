import { Sparkles, Trophy, ShieldAlert, HeartHandshake, Wind, FlameKindling, KeyRound, Soup } from "lucide-react";
import { GYM_DETAILS } from "../data";

export default function About() {
  const USP_ELEMENTS = [
    {
      icon: <Wind className="w-5 h-5 text-brand-orange-500" />,
      title: "100% Air Conditioned",
      desc: "Stay cool and energized during intense training workouts with heavy duty active air filtering systems."
    },
    {
      icon: <Trophy className="w-5 h-5 text-brand-orange-500" />,
      title: "Certified Pro Mentors",
      desc: "Our trainers hold recognized fitness certifications to help correct postures and prevent injuries."
    },
    {
      icon: <KeyRound className="w-5 h-5 text-brand-orange-500" />,
      title: "Secured Personal Lockers",
      desc: "Store your valuables safely in our digital lockboxes and access premium changing rooms/showers."
    },
    {
      icon: <Soup className="w-5 h-5 text-brand-orange-500" />,
      title: "Custom Diet & Nutrition Plans",
      desc: "Unlock targeted recipes and food lists mapped to your fat loss or bulk building trajectory."
    },
    {
      icon: <FlameKindling className="w-5 h-5 text-brand-orange-500" />,
      title: "Recovery Steam Room",
      desc: "Speed up leg recovery and sweat out metabolic toxins in our hygiene-monitored steam sauna."
    },
    {
      icon: <Sparkles className="w-5 h-5 text-brand-orange-500" />,
      title: "Motivating Pumping Vibe",
      desc: "Train in an energetic, friendly environment accompanied by premium surrounds and upbeat rhythm."
    }
  ];

  return (
    <section id="about" className="py-24 bg-stone-950 border-t border-stone-900 relative">
      {/* Background radial accent */}
      <div className="absolute top-[30%] right-[-15%] w-[400px] h-[400px] bg-brand-orange-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* Image Grid Side Left */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-stone-800 shadow-2xl group">
              <div className="absolute inset-0 bg-stone-950/20 group-hover:bg-transparent transition-all duration-500" />
              <img
                src="https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
                alt="Elite athlete lifting weights at Barauli Gym"
                className="w-full h-[520px] object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-stone-950/90 backdrop-blur-md p-5 rounded-xl border border-stone-850 flex items-center gap-4">
                <div className="bg-brand-orange-500 text-black flex items-center justify-center rounded-lg font-display font-black text-2xl h-14 w-15 flex-shrink-0">
                  PT
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-brand-orange-500 uppercase tracking-widest block">
                    Exclusive Guidance
                  </span>
                  <span className="text-sm font-bold text-white block mt-0.5">
                    Personalized Training Sessions
                  </span>
                </div>
              </div>
            </div>

            {/* Behind Background Frame Accent */}
            <div className="absolute -top-4 -left-4 w-48 h-48 border-t-2 border-l-2 border-brand-orange-500/40 rounded-tl-2xl pointer-events-none -z-10" />
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border-b-2 border-r-2 border-brand-orange-500/40 rounded-br-2xl pointer-events-none -z-10" />
          </div>

          {/* Text Description Side Right */}
          <div className="lg:col-span-7 space-y-8 select-none">
            <div className="space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-500 px-3 py-1 bg-brand-orange-500/10 border border-brand-orange-500/25 rounded-md inline-block">
                Who We Are
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
                THE SUPREME FITNESS DESTINATION IN <span className="text-brand-orange-500">BARAULI</span>
              </h2>
              <div className="h-1.5 w-16 bg-brand-orange-500 rounded-full" />
            </div>

            <div className="space-y-4 text-stone-300 text-sm sm:text-base leading-relaxed">
              <p>
                At <strong className="text-white">Barauli Gym</strong>, we believe fitness is not just a workout; it is a profound lifestyle transition. Located near the Block Gate in Barauli (Gopalganj, Bihar), our gym is designed to meet the expectations of beginners as well as seasoned lifters.
              </p>
              <p>
                We have built an incredible facility complete with fully air-conditioned spaces, professional sound systems, premium biomechanical gear, and high-precision lifting accessories. Our goal is simple: to make your fitness journey efficient, safe, and highly empowering.
              </p>
            </div>

            {/* Core USPs list block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
              {USP_ELEMENTS.map((usp, idx) => (
                <div key={idx} className="flex gap-3 bg-stone-900/40 p-4 rounded-xl border border-stone-900">
                  <div className="w-10 h-10 rounded-lg bg-stone-900 flex items-center justify-center flex-shrink-0 border border-stone-850">
                    {usp.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-white uppercase tracking-wide">
                      {usp.title}
                    </h4>
                    <p className="text-xs text-stone-400 mt-1 leading-relaxed">
                      {usp.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
