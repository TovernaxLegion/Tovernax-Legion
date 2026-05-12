// ============================================
// SITE CONSTANTS & NAVIGATION DATA
// ============================================

export const SITE = {
  name: "Tovernax Academy",
  tagline: "Excellence in Education",
  description: "A premier educational institution — subunit of Tovernax Legion",
  url: "https://academy.tovernax.com",
  email: "academy@tovernax.com",
  phone: "+91 9597078806",
  address: "Sixth Floor, Vrundavan Skylines, Vastral, Daskroi, Ahmedabad, Gujarat 382418",
  social: {
    instagram: "https://instagram.com/tovernaxacademy",
    youtube: "https://youtube.com/@tovernaxacademy",
    linkedin: "https://linkedin.com/company/tovernax-academy",
    twitter: "https://twitter.com/tovernaxacademy",
    facebook: "https://facebook.com/tovernaxacademy",
    telegram: "https://t.me/tovernaxacademy",
    whatsapp: "https://wa.me/919876543210",
  },
};

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Programs",
    href: "#",
    dropdown: [
      { label: "Courses", href: "/courses", icon: "📚" },
      { label: "Academic Coaching", href: "/academic-coaching", icon: "🎯" },
      { label: "Competitive Exam Prep", href: "/competitive-exam-prep", icon: "🏆" },
      { label: "Teacher Training", href: "/teacher-training", icon: "👩‍🏫" },
    ],
  },
  {
    label: "Learning Modes",
    href: "#",
    dropdown: [
      { label: "Online Classes", href: "/online-classes", icon: "💻" },
      { label: "Offline Classes", href: "/offline-classes", icon: "🏛️" },
      { label: "Hybrid Learning", href: "/hybrid-learning", icon: "🔄" },
    ],
  },
  {
    label: "Counseling",
    href: "#",
    dropdown: [
      { label: "Parent Counseling", href: "/parent-counseling", icon: "👨‍👩‍👧" },
      { label: "Student Counseling", href: "/student-counseling", icon: "🧠" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  programs: [
    { label: "Academic Coaching", href: "/academic-coaching" },
    { label: "Competitive Exam Prep", href: "/competitive-exam-prep" },
    { label: "Online Classes", href: "/online-classes" },
    { label: "Offline Classes", href: "/offline-classes" },
    { label: "Hybrid Learning", href: "/hybrid-learning" },
    { label: "Teacher Training", href: "/teacher-training" },
  ],
  support: [
    { label: "Parent Counseling", href: "/parent-counseling" },
    { label: "Student Counseling", href: "/student-counseling" },
    { label: "Admissions", href: "/admissions" },
    { label: "Contact Us", href: "/contact" },
    { label: "LMS Portal", href: "/lms" },
    { label: "About Us", href: "/about" },
  ],
  tovernaxLegion: [
    { label: "Tovernax Legion (HQ)", href: "https://tovernax.com", external: true },
    { label: "Tovernax Skills", href: "#", external: false, badge: "Soon" },
    { label: "Tovernax Roots", href: "#", external: false, badge: "Soon" },
    { label: "Tovernax Media", href: "#", external: false, badge: "Soon" },
    { label: "Tovernax Expeditions", href: "#", external: false, badge: "Soon" },
    { label: "Tovernax Estates", href: "#", external: false, badge: "Soon" },
  ],
};

export const STATS = [
  { value: "10,000+", label: "Students Enrolled", icon: "👨‍🎓" },
  { value: "98%", label: "Success Rate", icon: "📈" },
  { value: "150+", label: "Expert Faculty", icon: "👩‍🏫" },
  { value: "25+", label: "Programs Offered", icon: "📚" },
];

export const EXAM_CATEGORIES = [
  {
    category: "Engineering",
    exams: ["JEE Main", "JEE Advanced", "BITSAT", "MHT-CET", "GUJCET"],
  },
  {
    category: "Medical",
    exams: ["NEET UG", "NEET PG", "AIIMS", "JIPMER"],
  },
  {
    category: "Civil Services",
    exams: ["UPSC CSE", "GPSC", "MPSC", "State PSC"],
  },
  {
    category: "Commerce & Management",
    exams: ["CA Foundation", "CAT", "MAT", "CLAT"],
  },
  {
    category: "Banking & Finance",
    exams: ["IBPS PO", "SBI Clerk", "RBI Grade B", "SSC CGL"],
  },
  {
    category: "Defence",
    exams: ["NDA", "CDS", "AFCAT", "Coast Guard"],
  },
];

export const FEATURED_COURSES = [
  {
    id: "jee-advanced",
    title: "JEE Advanced Mastery",
    category: "Engineering",
    duration: "2 Years",
    mode: "Hybrid",
    students: "1,200+",
    rating: 4.9,
    color: "from-blue-600 to-indigo-700",
    icon: "⚛️",
    description: "Comprehensive preparation for IIT-JEE with expert mentorship, daily practice tests, and personalized feedback.",
    highlights: ["Daily doubt sessions", "Mock test series", "Performance analytics", "Personal mentoring"],
  },
  {
    id: "neet-prep",
    title: "NEET Complete Prep",
    category: "Medical",
    duration: "2 Years",
    mode: "Hybrid",
    students: "980+",
    rating: 4.8,
    color: "from-emerald-600 to-teal-700",
    icon: "🧬",
    description: "End-to-end NEET preparation with biology-focused modules, NCERT deep dives, and PYQ analysis.",
    highlights: ["NCERT mastery", "Biology special batches", "Weekly assessments", "AIR tracking"],
  },
  {
    id: "upsc-foundation",
    title: "UPSC Foundation",
    category: "Civil Services",
    duration: "1 Year",
    mode: "Online + Offline",
    students: "650+",
    rating: 4.9,
    color: "from-amber-600 to-orange-700",
    icon: "🏛️",
    description: "Structured UPSC preparation covering Prelims, Mains, and Interview stages with current affairs integration.",
    highlights: ["Current affairs daily", "Answer writing practice", "Mock interviews", "Study material"],
  },
  {
    id: "class-10-excellence",
    title: "Class X Excellence",
    category: "Academic",
    duration: "1 Year",
    mode: "All Modes",
    students: "2,100+",
    rating: 4.7,
    color: "from-violet-600 to-purple-700",
    icon: "🎓",
    description: "Complete Class 10 board preparation with concept clarity, regular tests, and score maximization strategies.",
    highlights: ["Board exam focus", "Chapter-wise tests", "Parent updates", "Doubt-clearing sessions"],
  },
  {
    id: "class-12-science",
    title: "Class XII Science",
    category: "Academic",
    duration: "1 Year",
    mode: "All Modes",
    students: "1,800+",
    rating: 4.8,
    color: "from-rose-600 to-pink-700",
    icon: "🔬",
    description: "Integrated Class 12 + competitive exam preparation. CBSE/GSEB board + JEE/NEET foundation.",
    highlights: ["Dual prep model", "Lab sessions", "Board + entrance", "Scholarship tests"],
  },
  {
    id: "banking-ssc",
    title: "Banking & SSC Pro",
    category: "Banking",
    duration: "6 Months",
    mode: "Online",
    students: "750+",
    rating: 4.6,
    color: "from-cyan-600 to-blue-700",
    icon: "🏦",
    description: "Speed, accuracy, and strategy for banking and SSC exams with daily quizzes and current affairs.",
    highlights: ["Speed math", "Sectional tests", "Current affairs", "GK capsules"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Arjun Mehta",
    exam: "JEE Advanced AIR 247",
    batch: "2024 Batch",
    avatar: "AM",
    color: "from-blue-500 to-indigo-600",
    quote:
      "Tovernax Academy gave me the perfect environment to prepare. The faculty's approach to problem-solving and the personalized mentoring made all the difference. Eternally grateful!",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    exam: "NEET AIR 512",
    batch: "2024 Batch",
    avatar: "PS",
    color: "from-emerald-500 to-teal-600",
    quote:
      "The hybrid model at Tovernax was perfect for me. I could attend live classes and also revisit recorded sessions. The faculty are incredibly knowledgeable and supportive.",
    rating: 5,
  },
  {
    name: "Rahul Gupta",
    exam: "IAS (UPSC CSE 2023)",
    batch: "2023 Batch",
    avatar: "RG",
    color: "from-amber-500 to-orange-600",
    quote:
      "Three years of consistent guidance from Tovernax Academy shaped my civil services journey. The current affairs sessions and answer writing practice were game-changers.",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    exam: "Class X - 98.6%",
    batch: "2024 Batch",
    avatar: "SP",
    color: "from-violet-500 to-purple-600",
    quote:
      "My parents were initially skeptical, but the parent counseling sessions at Tovernax helped align our expectations. I scored beyond what I imagined. Thank you, Tovernax!",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    exam: "IBPS PO (SBI)",
    batch: "2023 Batch",
    avatar: "VS",
    color: "from-cyan-500 to-blue-600",
    quote:
      "The online banking prep course at Tovernax is top-notch. The daily quizzes, mock tests, and the teachers' availability on WhatsApp made my preparation smooth and effective.",
    rating: 5,
  },
];

export const WHY_CHOOSE_US = [
  {
    icon: "🎯",
    title: "Personalized Learning Paths",
    description:
      "Every student receives a customized study plan based on diagnostic assessments, learning style, and target goals.",
    color: "bg-blue-50 text-blue-700",
  },
  {
    icon: "👨‍🏫",
    title: "Expert Faculty Network",
    description:
      "150+ hand-picked educators with proven track records, IIT/IIM alumni, and subject matter experts.",
    color: "bg-emerald-50 text-emerald-700",
  },
  {
    icon: "📊",
    title: "Data-Driven Progress",
    description:
      "Advanced analytics dashboard for students and parents to track performance, identify gaps, and optimize study time.",
    color: "bg-amber-50 text-amber-700",
  },
  {
    icon: "🔄",
    title: "Flexible Learning Modes",
    description:
      "Online, offline, and hybrid options give students the freedom to learn in the format that works best for them.",
    color: "bg-violet-50 text-violet-700",
  },
  {
    icon: "🧠",
    title: "Holistic Counseling",
    description:
      "Dedicated counselors for students and parents to manage stress, career planning, and academic decision-making.",
    color: "bg-rose-50 text-rose-700",
  },
  {
    icon: "🏆",
    title: "Proven Track Record",
    description:
      "Consistently producing top rankers across JEE, NEET, UPSC, and board examinations for over a decade.",
    color: "bg-cyan-50 text-cyan-700",
  },
];
