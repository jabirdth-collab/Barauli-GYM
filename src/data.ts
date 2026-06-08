export interface MembershipPlan {
  id: string;
  name: string;
  duration: string;
  price: number;
  originalPrice?: number;
  popular: boolean;
  features: string[];
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: "Strength" | "Cardio" | "Functional";
  description: string;
  imageUrl: string;
}

export interface SuccessStory {
  id: string;
  name: string;
  tag: string;
  achievement: string;
  beforeWeight: string;
  afterWeight: string;
  timeframe: string;
  beforeImage: string;
  afterImage: string;
  quote: string;
}

export interface Review {
  id: string;
  author: string;
  stars: number;
  date: string;
  text: string;
  avatarUrl: string;
  verified: boolean;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Strength" | "Cardio" | "Lounge" | "Trainers";
  imageUrl: string;
}

export const GYM_DETAILS = {
  name: "BARAULI GYM",
  tagline: "Transform Your Body, Transform Your Life",
  subheading: "Join Barauli Gym and achieve your fitness goals with professional guidance, state-of-the-art modern equipment, and an elite supportive community.",
  address: "Main Road Barauli, Near Block Gate, Gopalganj, Bihar - 841405",
  phone: "+91 91555 12345",
  whatsappPhone: "919155512345", // Clean dynamic link format
  email: "info@barauligym.com",
  timings: {
    weekdays: "Morning: 05:00 AM - 10:00 AM | Evening: 04:00 PM - 09:30 PM",
    sunday: "Morning: 06:00 AM - 10:00 AM | Evening: CLOSED"
  },
  socials: {
    instagram: "https://instagram.com/barauligym",
    facebook: "https://facebook.com/barauligym",
    youtube: "https://youtube.com/@barauligym"
  }
};

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: "monthly",
    name: "Classic Monthly",
    duration: "1 Month",
    price: 1000,
    originalPrice: 1200,
    popular: false,
    features: [
      "Access to all General Gym Areas",
      "Modern Strength & Cardio Equipment",
      "Standard Locker Room Access",
      "General Fitness Assessment",
      "Certified Gym Floor Mentors"
    ]
  },
  {
    id: "quarterly",
    name: "Premium Quarterly",
    duration: "3 Months",
    price: 2500,
    originalPrice: 3600,
    popular: true,
    features: [
      "Everything in Classic Monthly Plan",
      "Customized Daily Diet & Nutrition Chart",
      "Dedicated Full Body Composition Analysis",
      "Priority Access to Functional Training Zone",
      "Steam Shower Access (2 Sessions/Month)"
    ]
  },
  {
    id: "annual",
    name: "Elite Supreme Annual",
    duration: "12 Months",
    price: 8000,
    originalPrice: 12000,
    popular: false,
    features: [
      "Everything in Premium Quarterly Plan",
      "24/7 Access Permission (When Open)",
      "Unrestricted Locker Storage Space",
      "Personalized Workout Diary Application Support",
      "Complimentary Barauli Gym Brand Shaker & Tee",
      "Unlimited Steam Bath & Regeneration Access",
      "2 Guest Passes Free per Month"
    ]
  }
];

export const EQUIPMENT_SHOWCASE: EquipmentItem[] = [
  {
    id: "eq-1",
    name: "Heavy Duty Multi-Station Squat Racks",
    category: "Strength",
    description: "Premium Olympic squat stations and deadlift platforms engineered with high-tensile safety bumpers for heavy lifts.",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "eq-2",
    name: "Advanced Incline/Decline Plate Loaded Chest Press",
    category: "Strength",
    description: "Biomechanical chest apparatus targeting ultimate muscle fiber recruitment with smooth bearing-guided pivots.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "eq-3",
    name: "High-Performance Curved & Interactive Treadmills",
    category: "Cardio",
    description: "High-grade shock absorber treadmills featuring personalized goal dashboards to safely burn calories and boost stamina.",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "eq-4",
    name: "Olympic Dumbbell Matrix",
    category: "Strength",
    description: "Anti-slip chrome solid-grip dumbbells ranging up to 50kg, accompanied by premium multi-angle training benches.",
    imageUrl: "https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "eq-5",
    name: "Functional Cross-Training Rig & Kettlebell Suite",
    category: "Functional",
    description: "Industrial grade suspension trainers, slam balls, kettlebells, and plyo platforms to boost your explosive athletic power.",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "eq-6",
    name: "Premium Adjustable Dual-Cable Pulley Systems",
    category: "Strength",
    description: "Ultimate cable crossovers featuring high-precision stack pulleys to safely isolate and condition custom targeted muscles.",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=600&q=80"
  }
];

export const TRANSFORMATION_STORIES: SuccessStory[] = [
  {
    id: "ts-1",
    name: "Aman Verma",
    tag: "Weight Loss Champion",
    achievement: "Lost 22 Kg & Gained Muscle",
    beforeWeight: "96 Kg",
    afterWeight: "74 Kg",
    timeframe: "6 Months",
    beforeImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=400&q=80",
    quote: "With the continuous encouragement from Barauli Gym coaches and tailored nutrition diets, I achieved what seemed completely impossible to me."
  },
  {
    id: "ts-2",
    name: "Kriti Sharma",
    tag: "Aesthetic Core Transformation",
    achievement: "Gained Extreme Athletic Strength",
    beforeWeight: "64 Kg (Low Muscle)",
    afterWeight: "57 Kg (Lean Muscle)",
    timeframe: "4 Months",
    beforeImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=400&q=80",
    quote: "The energetic atmosphere, heavy dumbbells variety, and supportive peers kept me showing up every day. This place became my absolute favorite getaway!"
  },
  {
    id: "ts-3",
    name: "Sunny Yadav",
    tag: "Classic Bodybuilding Journey",
    achievement: "Packed 15kg of Lean Muscle mass",
    beforeWeight: "58 Kg (Very Underweight)",
    afterWeight: "73 Kg (Ripped Physique)",
    timeframe: "8 Months",
    beforeImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
    afterImage: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=400&q=80",
    quote: "If you want a real, no-nonsense gym with top quality heavy equipments and serious fitness environment in Gopalganj, there is simply nothing like Barauli Gym!"
  }
];

export const GOOGLE_REVIEWS: Review[] = [
  {
    id: "r-1",
    author: "Rakesh Kumar Ranjan",
    stars: 5,
    date: "2 weeks ago",
    text: "Undoubtedly the best gym in Barauli area. Very spacious layout, friendly professional trainers who actually help you do correct posture, and the heavy dumbbells & cardio machines are top class grade.",
    avatarUrl: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80",
    verified: true
  },
  {
    id: "r-2",
    author: "Soniya S.",
    stars: 5,
    date: "1 month ago",
    text: "Excellent ambiance and safe workout place for female gym enthusiasts. Trainers are skilled and design custom diet charts for you. Air conditioned, always clean, and great selection of background motivate-tracks!",
    avatarUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80",
    verified: true
  },
  {
    id: "r-3",
    author: "Ajay Pratap Singh",
    stars: 5,
    date: "3 weeks ago",
    text: "The annual membership package is super pocket-friendly and provides amazing perks as well. I'm taking personal training and my core strength has improved a lot. Highly recommend to everyone in Barauli seeking a fitness change.",
    avatarUrl: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=100&q=80",
    verified: true
  },
  {
    id: "r-4",
    author: "Deepak Mishra",
    stars: 5,
    date: "2 months ago",
    text: "Very hygiene oriented. Machines are wiped and maintained regularly. I really like the steam bath facility. Orange and black aesthetics look modern and inspire active pumping. Kudos to the owner!",
    avatarUrl: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=100&q=80",
    verified: true
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "g-1",
    title: "Elite Iron & Strength Area",
    category: "Strength",
    imageUrl: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g-2",
    title: "Cardio Burning Station",
    category: "Cardio",
    imageUrl: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g-3",
    title: "Athletic Premium Kettlebells Suite",
    category: "Strength",
    imageUrl: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g-4",
    title: "Qualified Personal Coaching",
    category: "Trainers",
    imageUrl: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g-5",
    title: "Modern Premium Changing Rooms",
    category: "Lounge",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "g-6",
    title: "Advanced Heavy Weight Rack Hub",
    category: "Strength",
    imageUrl: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&w=800&q=80"
  }
];

export const REGULAR_QUESTIONS = [
  {
    q: "What are the timings of Barauli Gym?",
    a: "We are open 6 days a week! Monday to Saturday: Morning 05:00 AM to 10:00 AM & Evening 04:00 PM to 09:30 PM. On Sundays, we are open for a morning session only from 06:00 AM to 10:00 AM to allow for deep gym cleaning."
  },
  {
    q: "Do you have female-only schedules or trainers?",
    a: "Our gym is a highly supportive co-ed space with safe guidelines and video security monitoring. We offer dedicated assistance and personalized fitness planners tailored for female members to make them feel comfortable and empowered."
  },
  {
    q: "Is diet planning included in the membership?",
    a: "Yes! While our 1-month Basic plan includes generic nutritional advice, our 3-Month (Quarterly) and 1-Year (Annual) plans feature custom calorie counting charts, macronutrient allocations, and continuous body fat measurement updates."
  },
  {
    q: "How do I claim a free guest pass?",
    a: "You can request a free guest trial workout pass by filling out our online Contact Form or by leaving a WhatsApp message on our floating help desk. Our team will verify and activate your 1-Day Trial immediately!"
  }
];
