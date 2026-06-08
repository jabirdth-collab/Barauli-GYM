import React, { useState, useEffect } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, ChevronUp, MessageSquare } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { GYM_DETAILS, REGULAR_QUESTIONS } from "../data";

interface ContactProps {
  selectedPlan: string;
  onClearPlan: () => void;
}

export default function Contact({ selectedPlan, onClearPlan }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "",
    message: ""
  });

  const [activeFaqIdx, setActiveFaqIdx] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        plan: selectedPlan,
        message: `Hi, I am interested in joining the Barauli Gym under the "${selectedPlan}" membership package. Please reach back to schedule mine registration.`
      }));
    }
  }, [selectedPlan]);

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full Name is required";
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim().replace(/\s+/g, ""))) {
      tempErrors.phone = "Provide a valid 10-digit phone number";
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate server side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
      // Clean up fields after success
      setFormData({
        name: "",
        phone: "",
        email: "",
        plan: "",
        message: ""
      });
      onClearPlan();
    }, 1200);
  };

  const toggleFaq = (idx: number) => {
    setActiveFaqIdx(activeFaqIdx === idx ? null : idx);
  };

  return (
    <section id="contact" className="py-24 bg-stone-900 border-t border-stone-850 relative">
      {/* Background decoration */}
      <div className="absolute top-[10%] right-[-10%] w-[350px] h-[350px] bg-brand-orange-500/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 select-none">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-orange-500 px-3 py-1 bg-brand-orange-500/10 border border-brand-orange-500/25 rounded-md inline-block">
            Start Your Journey
          </span>
          <h2 className="font-display font-black text-3xl sm:text-4xl text-white uppercase tracking-tight">
            CONTACT US & FAQs
          </h2>
          <div className="h-1.5 w-16 bg-brand-orange-500 mx-auto rounded-full" />
          <p className="text-stone-400 text-sm max-w-2xl mx-auto">
            Ready to lift heavy? Leave your contact coordinates below or message us to activate trials, submit registration inquiries, or seek specialized guidance.
          </p>
        </div>

        {/* Contact layout divisions */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* Details & Location Map Left side */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="bg-stone-950 border border-stone-850 p-6 sm:p-8 rounded-2xl space-y-6">
              <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide border-b border-stone-900 pb-3">
                GYM HEADQUARTERS
              </h3>

              <div className="space-y-5">
                {/* Location coordinates */}
                <div className="flex gap-4 items-start">
                  <div className="bg-brand-orange-500/15 text-brand-orange-500 p-2.5 rounded-lg border border-brand-orange-500/20 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono uppercase block tracking-wider">Address Location</span>
                    <strong className="text-stone-200 text-sm mt-0.5 block leading-relaxed">{GYM_DETAILS.address}</strong>
                  </div>
                </div>

                {/* Direct Line */}
                <div className="flex gap-4 items-start">
                  <div className="bg-brand-orange-500/15 text-brand-orange-500 p-2.5 rounded-lg border border-brand-orange-500/20 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono uppercase block tracking-wider">Direct Hotline</span>
                    <a href={`tel:${GYM_DETAILS.phone.replace(/\s+/g, "")}`} className="text-brand-orange-500 hover:underline text-sm font-bold text-wide mt-0.5 block">
                      {GYM_DETAILS.phone}
                    </a>
                  </div>
                </div>

                {/* Email address */}
                <div className="flex gap-4 items-start">
                  <div className="bg-brand-orange-500/15 text-brand-orange-500 p-2.5 rounded-lg border border-brand-orange-500/20 flex-shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono uppercase block tracking-wider">Support Email</span>
                    <a href={`mailto:${GYM_DETAILS.email}`} className="text-stone-200 hover:text-brand-orange-500 text-sm font-semibold mt-0.5 block">
                      {GYM_DETAILS.email}
                    </a>
                  </div>
                </div>

                {/* Operational hours */}
                <div className="flex gap-4 items-start">
                  <div className="bg-brand-orange-500/15 text-brand-orange-500 p-2.5 rounded-lg border border-brand-orange-500/20 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-stone-400 font-mono uppercase block tracking-wider">Operational Hours</span>
                    <div className="text-xs text-stone-200 mt-1 space-y-1">
                      <p><span className="text-brand-orange-500 font-semibold font-mono">Mon - Sat:</span> {GYM_DETAILS.timings.weekdays}</p>
                      <p><span className="text-stone-500 font-semibold font-mono">Sunday:</span> {GYM_DETAILS.timings.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="bg-stone-950 border border-stone-850 p-3 rounded-2xl h-72 overflow-hidden relative shadow-lg group">
              <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-sm border border-stone-800 rounded px-3 py-1 text-[9px] font-mono text-brand-orange-500 uppercase tracking-widest z-10 pointer-events-none">
                Interactive Google Maps
              </div>
              <iframe
                title="Barauli Gym Google Map Location"
                src="https://maps.google.com/maps?q=Barauli,Bihar&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full rounded-xl border-0 filter invert grayscale opacity-80 group-hover:opacity-100 transition-opacity"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Interactive Form Right side */}
          <div className="lg:col-span-7">
            <div className="bg-stone-950 border border-stone-850 p-6 sm:p-8 rounded-2xl h-full flex flex-col justify-between">
              
              <AnimatePresence mode="wait">
                {!formSubmitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleFormSubmit}
                    className="space-y-5"
                  >
                    <div>
                      <h3 className="font-display font-bold text-lg text-white uppercase tracking-wide mb-2">
                        REQUEST A CALL BACK / TRIAL PASS
                      </h3>
                      <p className="text-xs text-stone-400">
                        Fill out your information and our supervisor will dial your registration coordinates back within 2 hours.
                      </p>
                    </div>

                    {/* Pre-fill highlight notice */}
                    {selectedPlan && (
                      <div className="bg-brand-orange-500/10 border border-brand-orange-500/35 p-3 rounded-lg flex items-center justify-between text-xs text-stone-200">
                        <span>Selected Package: <strong className="text-brand-orange-500 uppercase">{selectedPlan}</strong></span>
                        <button
                          type="button"
                          onClick={() => {
                            onClearPlan();
                            setFormData(prev => ({ ...prev, plan: "", message: "" }));
                          }}
                          className="text-stone-500 hover:text-white uppercase font-mono text-[9px] font-bold underline cursor-pointer"
                        >
                          Clear Selection [x]
                        </button>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div>
                        <label className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className={`w-full bg-stone-900 border rounded-xl p-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-brand-orange-500 ${
                            errors.name ? "border-rose-500/50" : "border-stone-850"
                          }`}
                        />
                        {errors.name && <p className="text-[10px] text-rose-400 mt-1">{errors.name}</p>}
                      </div>

                      {/* Phone input */}
                      <div>
                        <label className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="text"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="e.g. +91 9876543210"
                          className={`w-full bg-stone-900 border rounded-xl p-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-brand-orange-500 ${
                            errors.phone ? "border-rose-500/50" : "border-stone-850"
                          }`}
                        />
                        {errors.phone && <p className="text-[10px] text-rose-400 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email input */}
                      <div>
                        <label className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block mb-1">
                          Email ID (Optional)
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="name@email.com"
                          className="w-full bg-stone-900 border border-stone-850 rounded-xl p-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-brand-orange-500"
                        />
                      </div>

                      {/* Plan Choice Dropdown */}
                      <div>
                        <label className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block mb-1">
                          Select Gym Membership Period
                        </label>
                        <select
                          name="plan"
                          value={formData.plan}
                          onChange={handleInputChange}
                          className="w-full bg-stone-900 border border-stone-850 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-brand-orange-500 cursor-pointer"
                        >
                          <option value="">Choose your duration type</option>
                          <option value="Classic Monthly">Classic Monthly (1 Month)</option>
                          <option value="Premium Quarterly">Premium Quarterly (3 Months)</option>
                          <option value="Elite Supreme Annual">Elite Supreme Annual (1 Year)</option>
                          <option value="Free Trial">1-Day Trial Pass (Free)</option>
                        </select>
                      </div>
                    </div>

                    {/* Message section */}
                    <div>
                      <label className="text-[10px] text-stone-400 font-mono uppercase tracking-wider block mb-1">
                        Specific Goals / Injuries Note (Optional)
                      </label>
                      <textarea
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Let us know what you want to achieve (e.g., strength building, core fitness, fat burn, or specify dynamic limits)..."
                        className="w-full bg-stone-900 border border-stone-850 rounded-xl p-3 text-xs text-white placeholder-stone-600 focus:outline-none focus:border-brand-orange-500 resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-brand-orange-500 hover:bg-brand-orange-600 text-black font-black uppercase tracking-wider text-xs py-4 px-6 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-brand-orange-500/20 active:scale-95 cursor-pointer disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4.5 h-4.5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                          <span>Submitting coordinates...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-3.5 h-3.5" />
                          <span>Submit Registration Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-form"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center p-8 space-y-5 h-full text-stone-300"
                  >
                    <div className="bg-emerald-950/20 border border-emerald-500/30 p-5 rounded-full text-emerald-400">
                      <CheckCircle2 className="w-16 h-16 animate-bounce" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="font-display font-black text-2xl text-white uppercase tracking-wider">
                        APPLICATION SUBMITTED SUCCESSFULLY!
                      </h4>
                      <p className="text-xs text-stone-400 max-w-md mx-auto">
                        Thank you for reaching out! Our head counselor is validating your details and will call or message your cellular coordinates back shortly.
                      </p>
                    </div>

                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="bg-stone-900 hover:bg-stone-850 text-stone-300 text-xs font-bold uppercase tracking-wider py-2.5 px-6 rounded-xl border border-stone-800 cursor-pointer active:scale-95"
                    >
                      Submit Another Query
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Accordion FAQ Block */}
        <div className="bg-stone-950 border border-stone-850 rounded-2xl p-6 sm:p-8 select-none">
          <div className="mb-8 flex items-center gap-3 border-b border-stone-900 pb-4">
            <div className="bg-brand-orange-500/10 p-2 text-brand-orange-500 rounded-md">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="font-display font-black text-lg text-white uppercase tracking-wide">
              FREQUENTLY ASKED QUESTIONS (FAQ)
            </h3>
          </div>

          <div className="space-y-4">
            {REGULAR_QUESTIONS.map((faq, idx) => {
              const isOpen = activeFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="border-b border-stone-910 pb-4 last:border-0 last:pb-0"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left py-2 font-display font-bold text-sm text-stone-100 hover:text-brand-orange-500 transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-brand-orange-500" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-stone-400" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="text-xs sm:text-sm text-stone-400 leading-relaxed pt-2 pl-2">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
