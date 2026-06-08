import { Star, ShieldCheck, HeartPulse, Quote } from "lucide-react";
import { GOOGLE_REVIEWS } from "../data";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-stone-950 border-t border-stone-900 relative">
      {/* Glow support */}
      <div className="absolute bottom-[10%] left-[-15%] w-[400px] h-[400px] bg-brand-orange-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Aggregate statistics top header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 items-center">
          <div className="lg:col-span-6 space-y-4">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-500 px-3 py-1 bg-brand-orange-500/10 border border-brand-orange-500/25 rounded-md inline-block">
              Client Feedback
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
              COMMUNITY GOOGLE REVIEWS
            </h2>
            <div className="h-1.5 w-16 bg-brand-orange-500 rounded-full" />
            <p className="text-stone-400 text-sm max-w-xl">
              Honest feedback from our dedicated members. Barauli Gym enjoys an incredible 5.0-star rating reflecting our persistent focus on workout hygiene, top-notch equipment, and friendly floor guidance.
            </p>
          </div>

          <div className="lg:col-span-6 flex flex-wrap gap-6 items-center justify-start lg:justify-end">
            <div className="bg-stone-900 border border-stone-850 p-6 rounded-2xl flex items-center gap-6">
              <div className="text-center">
                <span className="font-display font-black text-4xl text-white block">5.0</span>
                <span className="text-[9px] text-stone-400 font-mono uppercase tracking-widest">Out of 5.0 Stars</span>
              </div>
              <div className="h-12 w-px bg-stone-800" />
              <div>
                <div className="flex gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-brand-orange-500 text-brand-orange-500" />
                  ))}
                </div>
                <span className="text-xs text-stone-200 font-semibold block">180+ Constant verified reviews</span>
                <span className="text-[10px] text-stone-400 block mt-0.5">Updated weekly from Google Local business</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GOOGLE_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-stone-900/40 border border-stone-900 rounded-2xl p-6 sm:p-8 flex flex-col justify-between group hover:border-stone-800 transition-colors duration-300"
            >
              <div className="space-y-4">
                {/* Reviewer Header */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={review.avatarUrl}
                      alt={review.author}
                      className="w-11 h-11 rounded-full object-cover border border-stone-800"
                    />
                    <div>
                      <h4 className="font-display font-bold text-sm text-stone-100 uppercase tracking-wide">
                        {review.author}
                      </h4>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <span className="text-[10px] text-stone-500 font-mono">
                          {review.date}
                        </span>
                        {review.verified && (
                          <span className="text-[9px] text-brand-orange-500 bg-brand-orange-500/10 border border-brand-orange-500/20 rounded py-0.5 px-1.5 font-mono uppercase flex items-center gap-0.5">
                            <ShieldCheck className="w-3 h-3" /> Verified Member
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Google Logo indicator visual */}
                  <div className="bg-stone-950 p-2 rounded-xl border border-stone-900">
                    <svg className="w-4 h-4 text-white fill-current" viewBox="0 0 24 24">
                      <path d="M12.24 10.285V13.4h6.887c-.648 2.41-2.519 4.13-5.136 4.13-3.074 0-5.567-2.493-5.567-5.567s2.493-5.567 5.567-5.567c1.397 0 2.671.517 3.655 1.484l2.427-2.427C18.522 3.824 15.613 2.613 12.24 2.613 6.96 2.613 2.613 6.96 2.613 12.24s4.347 9.627 9.627 9.627c5.541 0 9.213-3.894 9.213-9.382 0-.622-.054-1.125-.171-1.6H12.24v.002z" />
                    </svg>
                  </div>
                </div>

                {/* Stars Indicator */}
                <div className="flex gap-1 pt-1">
                  {[...Array(review.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-brand-orange-500 text-brand-orange-500" />
                  ))}
                </div>

                {/* Text Description */}
                <div className="relative">
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pl-4 border-l-2 border-stone-800">
                    {review.text}
                  </p>
                </div>
              </div>

              {/* Verified Trust Statement */}
              <div className="mt-6 pt-4 border-t border-stone-910 flex items-center gap-2">
                <HeartPulse className="w-3.5 h-3.5 text-brand-orange-500" />
                <span className="text-[10px] text-stone-500 font-mono uppercase tracking-wider">
                  Verified Local Barauli Business Review
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
