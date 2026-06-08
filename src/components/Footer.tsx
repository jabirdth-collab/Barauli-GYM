import { Dumbbell, Instagram, Facebook, Youtube, Heart, MapPin, Phone } from "lucide-react";
import { GYM_DETAILS } from "../data";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { label: "Home Base", id: "home" },
    { label: "Our Story", id: "about" },
    { label: "Elite Tools", id: "equipment" },
    { label: "Pricing Perks", id: "plans" },
    { label: "Locker Gallery", id: "gallery" },
    { label: "Help & Trial", id: "contact" }
  ];

  return (
    <footer id="gym-footer" className="bg-stone-950 border-t border-stone-910 py-16 text-stone-400 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          
          {/* Col 1 Brand Statement */}
          <div className="md:col-span-5 space-y-5">
            <div
              onClick={() => onNavigate("home")}
              className="flex items-center gap-2 cursor-pointer group inline-flex"
            >
              <div className="bg-brand-orange-500 text-black p-2 rounded-lg transition-transform group-hover:scale-105">
                <Dumbbell className="w-5 h-5 stroke-[3]" />
              </div>
              <span className="font-display font-black text-xl tracking-wider text-white">
                BARAULI <span className="text-brand-orange-500">GYM</span>
              </span>
            </div>

            <p className="text-xs leading-relaxed text-stone-400 max-w-sm">
              Empowering weight transformation and confidence building in Barauli, Bihar. We offer certified physical coaches, air-conditioned layouts, multi-rack facilities, and custom diets built around you.
            </p>

            {/* Social media connections */}
            <div className="flex gap-4 pt-2">
              <a
                href={GYM_DETAILS.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-stone-900 border border-stone-850 hover:bg-brand-orange-500 hover:text-black transition-colors"
                aria-label="Follow Barauli Gym on Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={GYM_DETAILS.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-stone-900 border border-stone-850 hover:bg-brand-orange-500 hover:text-black transition-colors"
                aria-label="Follow Barauli Gym on Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={GYM_DETAILS.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-stone-900 border border-stone-850 hover:bg-brand-orange-500 hover:text-black transition-colors"
                aria-label="Subscribe to Barauli Gym on Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2 Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider border-l-2 border-brand-orange-500 pl-2">
              QUICK SECTIONS
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {usefulLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => onNavigate(link.id)}
                  className="text-left text-xs hover:text-brand-orange-500 transition-colors uppercase tracking-wide cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Col 3 Coordinates summary info */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider border-l-2 border-brand-orange-500 pl-2">
              NEED IMMEDIATE ASSISTANCE?
            </h4>
            <div className="space-y-3.5 text-xs">
              <div className="flex gap-2">
                <MapPin className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                <span>{GYM_DETAILS.address}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Phone className="w-4 h-4 text-brand-orange-500 flex-shrink-0" />
                <a href={`tel:${GYM_DETAILS.phone.replace(/\s+/g, "")}`} className="hover:text-brand-orange-500 hover:underline">
                  {GYM_DETAILS.phone}
                </a>
              </div>
              <div className="bg-stone-920 border border-stone-900 p-3 rounded-lg">
                <span className="text-[10px] text-stone-500 uppercase font-mono block">Weekly Timings</span>
                <p className="text-[11px] text-stone-300 mt-0.5 font-medium">Mon - Sat: 5:00AM - 10:00AM | 4:00PM - 9:30PM</p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom credits */}
        <div className="mt-16 pt-8 border-t border-stone-910 flex flex-col sm:flex-row items-center justify-between text-[11px] gap-4">
          <div>
            <p>© {currentYear} <strong>{GYM_DETAILS.name}</strong>. All rights reserved.</p>
          </div>
          <div className="flex items-center gap-1">
            <span>Built with commitment to athletic wellness in Barauli, Bihar</span>
            <Heart className="w-3 h-3 text-brand-orange-500 fill-brand-orange-500 animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}
