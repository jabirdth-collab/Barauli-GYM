import { Check, Flame, MessageCircle, HelpCircle } from "lucide-react";
import { MEMBERSHIP_PLANS, MembershipPlan, GYM_DETAILS } from "../data";

interface MembershipProps {
  onSelectPlan: (planName: string) => void;
}

export default function Membership({ onSelectPlan }: MembershipProps) {
  
  const handleWhatsAppBooking = (plan: MembershipPlan) => {
    const textMessage = `Hello Barauli Gym! I am looking to join the *${plan.name}* plan (${plan.duration} at ₹${plan.price}). Please share detail on how to register.`;
    const encodedMessage = encodeURIComponent(textMessage);
    window.open(`https://wa.me/${GYM_DETAILS.whatsappPhone}?text=${encodedMessage}`, "_blank");
  };

  return (
    <section id="plans" className="py-24 bg-stone-900 border-t border-stone-850 relative">
      {/* Visual glowing accent */}
      <div className="absolute top-[20%] left-[-10%] w-[350px] h-[350px] bg-brand-orange-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-500 px-3 py-1 bg-brand-orange-500/10 border border-brand-orange-500/25 rounded-md inline-block">
            Investment In Yourself
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            MEMBERSHIP PLANS & RATES
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange-500 mx-auto rounded-full" />
          <p className="text-stone-400 text-sm max-w-2xl mx-auto">
            Transparent pricing with absolute quality value. Choose the subscription term that fits your fitness schedule. No activation fees.
          </p>
        </div>

        {/* Pricing Layout Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {MEMBERSHIP_PLANS.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col justify-between rounded-2xl border transition-all duration-300 ${
                plan.popular
                  ? "bg-stone-950 border-brand-orange-500 shadow-2xl shadow-brand-orange-500/15 md:-translate-y-4 scale-102"
                  : "bg-stone-950/70 border-stone-800 shadow-lg hover:border-stone-700"
              } p-8`}
            >
              {/* Most popular ribbons */}
              {plan.popular && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-orange-500 text-black text-[10px] font-black tracking-wider uppercase py-1 px-4 rounded-full shadow-md flex items-center gap-1.5">
                  <Flame className="w-3.5 h-3.5 fill-black" />
                  Most Popular Choice
                </span>
              )}

              {/* Package Header details */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-display font-bold text-lg text-white uppercase tracking-wider">
                    {plan.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs font-mono text-stone-400 bg-stone-900 border border-stone-850 px-2 py-0.5 rounded-md">
                      Valid for {plan.duration}
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex items-baseline gap-2">
                  <span className="font-display font-black text-4xl text-brand-orange-500 bg-gradient-to-r from-brand-orange-500 to-amber-500 bg-clip-text text-transparent">
                    ₹{plan.price}
                  </span>
                  {plan.originalPrice && (
                    <span className="text-stone-500 line-through text-sm">
                      ₹{plan.originalPrice}
                    </span>
                  )}
                  {plan.originalPrice && (
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-900/10 border border-emerald-900/20 rounded py-0.5 px-1.5">
                      Save {Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)}%
                    </span>
                  )}
                </div>

                <div className="border-t border-stone-905 pt-6 space-y-3.5">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <div className="bg-brand-orange-500/10 p-1 rounded-full text-brand-orange-500 mt-1 flex-shrink-0">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-stone-300 text-xs leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons Block */}
              <div className="mt-8 pt-6 border-t border-stone-905 space-y-3">
                <button
                  id={`select-plan-${plan.id}`}
                  onClick={() => onSelectPlan(plan.name)}
                  className={`w-full py-3 px-4 rounded-xl font-bold uppercase text-xs tracking-wider transition-all cursor-pointer ${
                    plan.popular
                      ? "bg-brand-orange-500 hover:bg-brand-orange-600 text-black shadow-lg shadow-brand-orange-500/20 active:scale-95"
                      : "bg-stone-900 hover:bg-stone-850 text-white border border-stone-800"
                  }`}
                >
                  Join With This Plan
                </button>
                <button
                  id={`whatsapp-plan-${plan.id}`}
                  onClick={() => handleWhatsAppBooking(plan)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-[11px] font-semibold text-stone-400 hover:text-emerald-400 bg-stone-950 hover:bg-emerald-950/20 border border-stone-900 hover:border-emerald-900/25 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Register via WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic bottom discount highlight info */}
        <div className="mt-16 bg-stone-950 border border-stone-850 p-6 rounded-2xl max-w-3xl mx-auto flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
          <div className="bg-brand-orange-500/10 p-3 rounded-xl border border-brand-orange-500/30 text-brand-orange-500 flex-shrink-0">
            <HelpCircle className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Are you a Student or couple training together?</h4>
            <p className="text-xs text-stone-400 mt-1">We provide specialized additional group training discounts. Ask the supervisor on floor or submit a query on our contact page to activate custom deductions.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
