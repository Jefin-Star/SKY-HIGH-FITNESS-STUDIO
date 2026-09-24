import { Plan, ServiceItem } from '../types';

export const GYM_CONTACT = {
  phone: '9567236799',
  phoneDisplay: '+91 95672 36799',
  email: 'skyhighfitneesstudio@gmail.com',
  instagram: 'skyhigh_fitness_studio',
  instagramUrl: 'https://instagram.com/skyhigh_fitness_studio',
  whatsappUrl: 'https://wa.me/919567236799',
  addressEmbed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3756.5698523115993!2d76.6077802!3d8.942706200000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b05fdbab3f5ce31%3A0x6d4065b5c52eb29f!2sSky%20high%20fitness%20studio!5e1!3m2!1sen!2sin!4v1790150475576!5m2!1sen!2sin',
  googleMapsDirectionUrl: 'https://maps.google.com/?cid=7872473489112998559',
  timings: {
    morning: '5:00 AM – 10:00 AM',
    evening: '4:00 PM – 9:30 PM',
    mmaSlot: '7:00 PM – 8:00 PM (Mon – Fri)',
    sunday: 'Sunday Closed (Rest & Recovery)',
    online: 'Online Sessions Available Daily',
  }
};

export const PLANS_DATA: Plan[] = [
  // General Fitness
  {
    id: 'gen-1m',
    name: '1 Month Membership',
    category: 'general',
    duration: '1 Month',
    price: 700,
    admissionFee: 1000,
    description: 'Ideal starter plan for newcomers seeking a flexible workout routine.',
    features: [
      'Full Gym Floor & Equipment Access',
      'Cardio & Free Weights Zone',
      'Locker & Shower Facility',
      'General Workout Guidance',
      'One-time Admission Fee: ₹1,000'
    ]
  },
  {
    id: 'gen-3m',
    name: '3 Months Membership',
    category: 'general',
    duration: '3 Months',
    price: 1800,
    admissionFee: 1000,
    highlight: 'Save ₹300',
    description: 'Commit to steady habits and notice noticeable strength gains.',
    features: [
      'Full Gym Floor & Strength Zone Access',
      'Fitness Assessment & Baseline Check',
      'Access to Group Functional Workouts',
      'Locker & Shower Facility',
      'One-time Admission Fee: ₹1,000'
    ]
  },
  {
    id: 'gen-6m',
    name: '6 Months Membership',
    category: 'general',
    duration: '6 Months',
    price: 3800,
    admissionFee: 1000,
    popular: true,
    highlight: 'Most Popular',
    description: 'Best balance of value and serious physical body transformation.',
    features: [
      'Unlimited Gym & Cardio Access',
      'Bi-weekly Progress & Body Fat Tracking',
      'Custom Split & Routine Guidance',
      'Functional & Circuit Training Access',
      'Locker & Shower Facility',
      'One-time Admission Fee: ₹1,000'
    ]
  },
  {
    id: 'gen-1y',
    name: '1 Year Annual Pass',
    category: 'general',
    duration: '12 Months',
    price: 7000,
    admissionFee: 1000,
    highlight: 'Best Value (Under ₹585/mo)',
    description: 'The ultimate year-round fitness lifestyle pass with maximum savings.',
    features: [
      '365 Days Premium Gym Access',
      'Complimentary Routine Periodization',
      'Free Fitness & Body Composition Tests',
      'Guest Workout Passes (2 per year)',
      'Locker & Shower Facility',
      'One-time Admission Fee: ₹1,000'
    ]
  },

  // MMA & Combat Plans
  {
    id: 'mma-1m',
    name: 'MMA 1 Month',
    category: 'mma',
    duration: '1 Month',
    price: 1000,
    admissionFee: 1500,
    description: 'Introduction to Mixed Martial Arts, striking fundamentals, and conditioning.',
    features: [
      'MMA, Boxing & Kickboxing Sessions',
      'Mon to Fri 7:00 PM to 8:00 PM Slots',
      'Punching Bags & Combat Mat Access',
      'Combat Conditioning & Agility',
      'MMA Admission Fee: ₹1,500 (One-time)'
    ]
  },
  {
    id: 'mma-3m',
    name: 'MMA 3 Months',
    category: 'mma',
    duration: '3 Months',
    price: 3000,
    admissionFee: 1500,
    highlight: 'Quarterly Fight Camp',
    description: 'Master defense, striking technique, footwork, and functional combat stamina.',
    features: [
      'Full MMA, Boxing & Kickboxing Schedule',
      'Mon to Fri 7:00 PM to 8:00 PM Training',
      'Pad Work & Defensive Drills',
      'Combat Core & Agility Conditioning',
      'MMA Admission Fee: ₹1,500 (One-time)'
    ]
  },
  {
    id: 'mma-6m',
    name: 'MMA 6 Months',
    category: 'mma',
    duration: '6 Months',
    price: 6000,
    admissionFee: 1500,
    popular: true,
    highlight: 'Fighter Development',
    description: 'Deep combat sports mastery with advanced drills and full conditioning.',
    features: [
      'Full MMA, Boxing & Kickboxing Access',
      'Mon to Fri 7:00 PM to 8:00 PM Training',
      'Sparring & Advanced Combinations',
      'Power, Explosiveness & Recovery Focus',
      'MMA Admission Fee: ₹1,500 (One-time)'
    ]
  },
  {
    id: 'mma-1y',
    name: 'MMA 1 Year Pass',
    category: 'mma',
    duration: '12 Months',
    price: 12000,
    admissionFee: 1500,
    highlight: 'Complete Combat Mastery',
    description: 'A comprehensive year-long combat sports journey for ultimate conditioning.',
    features: [
      'Unlimited MMA & Combat Classes (All Year)',
      'Mon to Fri 7:00 PM to 8:00 PM Training',
      'Customized Fight Conditioning Strategy',
      'Priority Sparring & Mitts Work',
      'MMA Admission Fee: ₹1,500 (One-time)'
    ]
  },

  // Special Packages
  {
    id: 'special-couple',
    name: 'Couple Package',
    category: 'special',
    duration: '3 Months (2 Persons)',
    price: 3600,
    popular: true,
    highlight: 'Only ₹1,800/person for 3 months',
    description: 'Train together with your partner or friend. Boost motivation and achieve goals as a duo.',
    features: [
      'Full Access for 2 Registered Individuals',
      'Valid for 3 Complete Months',
      'Shared Workout Motivation & Synergy',
      'Full Strength & Cardio Floor Access',
      'Locker & Shower Facility for Both'
    ]
  },
  {
    id: 'special-pt',
    name: 'Personal Training (PT)',
    category: 'special',
    duration: '1 Month Custom Coaching',
    price: 4000,
    highlight: '1-on-1 Dedicated Coach',
    description: 'Dedicated certified personal trainer tailoring your workouts, posture, and diet.',
    features: [
      'Dedicated 1-on-1 Certified Personal Trainer',
      'Personalized Workout Split & Progressive Overload',
      'Customized Nutritional & Diet Blueprint',
      'Daily Motivation, Form Checks & Injury Prevention',
      'Gym Membership Floor Access Included'
    ]
  }
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cardio-strength',
    title: 'Cardio, Strength & Conditioning',
    category: 'strength',
    tagline: 'Build lean muscle, cardiovascular endurance, and athletic resilience.',
    description: 'A balanced blend of cardiovascular conditioning and barbell compound movements designed to elevate your heart rate, burn calories, and build solid muscular strength.',
    benefits: ['Enhanced VO2 max & stamina', 'Improved joint integrity', 'Cardiovascular endurance', 'Balanced full-body power'],
    suitableFor: 'Athletes of all fitness levels looking for well-rounded stamina and muscular strength.'
  },
  {
    id: 'hypertrophy',
    title: 'Hypertrophy Muscle Building',
    category: 'strength',
    tagline: 'Scientific hypertrophy routines with progressive resistance training.',
    description: 'Targeted muscle sculpting through optimal volume, mechanical tension, and progressive overload using our premium resistance machines and free weights.',
    benefits: ['Maximized muscle protein synthesis', 'Balanced symmetry & definition', 'Strength gains in key lifts', 'Metabolic rate boost'],
    suitableFor: 'Individuals aiming to build lean muscle mass, aesthetic physique, and peak strength.'
  },
  {
    id: 'hyrox',
    title: 'Hyrox Training',
    category: 'endurance',
    tagline: 'World-renowned fitness racing combining running with functional workout stations.',
    description: 'Specialized preparation for Hyrox competitions and high-capacity functional fitness, integrating sled pushes, ski erg, rowing, burpee broad jumps, and wall balls.',
    benefits: ['Unmatched mental toughness', 'Aerobic & anaerobic hybrid capacity', 'High-calorie expenditure', 'Functional athletic stamina'],
    suitableFor: 'Fitness enthusiasts and competitors ready for high-intensity functional racing challenges.'
  },
  {
    id: 'functional-training',
    title: 'Functional Training',
    category: 'strength',
    tagline: 'Movement patterns that mirror real-life physical demands.',
    description: 'Develop multi-planar strength, balance, core stability, and agility using kettlebells, medicine balls, battle ropes, and bodyweight mechanics.',
    benefits: ['Core stabilization & rotational power', 'Injury prevention & posture correction', 'Real-world functional capability', 'Enhanced coordination'],
    suitableFor: 'Anyone seeking functional agility, daily vitality, and injury-free athletic performance.'
  },
  {
    id: 'group-workout',
    title: 'Group Workouts',
    category: 'wellness',
    tagline: 'High-energy community sessions driven by uplifting coaching.',
    description: 'Engaging, fast-paced group sessions that keep workout motivation at an all-time high with varied intervals and supportive workout partners.',
    benefits: ['Fun, energizing team atmosphere', 'Consistent accountability', 'Dynamic music and coaching cues', 'High-calorie burn'],
    suitableFor: 'People who thrive on community support, upbeat energy, and structured team workouts.'
  },
  {
    id: 'mma-combat',
    title: 'Mixed Martial Arts (MMA)',
    category: 'combat',
    tagline: 'Striking, boxing, kickboxing, and tactical combat conditioning.',
    description: 'Mon to Fri 7:00 PM to 8:00 PM dedicated combat training. Learn boxing combinations, kickboxing strikes, clinch work, footwork, and self-defense under seasoned trainers.',
    benefits: ['Rapid reflex & reaction time', 'Elite combat endurance & stamina', 'Practical self-defense confidence', 'Full-body explosive power'],
    suitableFor: 'Anyone wanting martial arts discipline, striking mastery, or real self-defense ability.'
  },
  {
    id: 'mobility-flexibility',
    title: 'Mobility & Flexibility Training',
    category: 'wellness',
    tagline: 'Restore range of motion, relieve tight muscles, and protect joints.',
    description: 'Targeted mobility flows, dynamic stretching, myofascial release, and posture correction routines that accelerate recovery and enhance lifting mechanics.',
    benefits: ['Deeper range in squats & presses', 'Reduced risk of strains and injuries', 'Alleviation of desk-bound back stiffness', 'Faster post-workout recovery'],
    suitableFor: 'All gym-goers, desk workers, and lifters wanting pain-free movement and fluid mobility.'
  },
  {
    id: 'hiit-workouts',
    title: 'HIIT Workouts',
    category: 'endurance',
    tagline: 'High Intensity Interval Training for maximum metabolic burn.',
    description: 'Time-efficient, explosive workouts alternating between all-out bursts and brief recovery intervals to torch calories and boost afterburn (EPOC).',
    benefits: ['Time-efficient 30-45 min sessions', 'Elevated 24-hour metabolic rate', 'Rapid cardiovascular conditioning', 'No plateauing'],
    suitableFor: 'Busy individuals seeking fast, high-impact cardiovascular and fat-burning results.'
  },
  {
    id: 'circuit-training',
    title: 'Circuit Training',
    category: 'endurance',
    tagline: 'Station-to-station drills targeting different muscle groups with zero downtime.',
    description: 'Rotate through multi-station sequences combining resistance machines, free weights, and bodyweight drills for a thrilling full-body sweat.',
    benefits: ['Continuous muscular engagement', 'Time-effective full-body conditioning', 'Increased muscle endurance', 'Varied and exciting drills'],
    suitableFor: 'Individuals who enjoy diverse exercises without long rest periods between sets.'
  },
  {
    id: 'weight-management',
    title: 'Weight Loss & Gain Training',
    category: 'wellness',
    tagline: 'Personalized caloric and lifting strategies tailored to your exact body composition goals.',
    description: 'Targeted programs whether your mission is aggressive fat reduction, lean bulking, or healthy weight gain, paired with dietary guidance and weekly check-ins.',
    benefits: ['Customized calorie & macronutrient blueprints', 'Targeted lifting splits for your body type', 'Accountability check-ins', 'Sustainable lifestyle transformations'],
    suitableFor: 'Anyone with a specific body transformation target (slimming down or building mass).'
  }
];
