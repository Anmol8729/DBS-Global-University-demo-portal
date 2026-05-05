import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  GraduationCap,
  Cpu,
  BookOpen,
  FlaskConical,
  Film,
  Sprout,
  Lightbulb,
  Scale,
  HeartPulse,
  Quote,
  Phone,
  Mail,
  MapPin,
  Beaker,
  Library,
  Dumbbell,
  Home,
  UtensilsCrossed,
  Stethoscope,
  Shield,
  Bus,
  Wifi,
  Theater,
  Flower2,
  TreePine,
  Megaphone,
} from "lucide-react";
import Layout from "@/components/Layout";
import ApplyNowButton from "@/components/ApplyNowButton";
import heroCampusImg from "@/assets/hero-campus.jpg";

const lawSchoolImage = "https://dgu.ac/thumb/1400x560/images/header-images/home/hd-08.jpg";

const heroSlides = [
  {
    image: heroCampusImg,
    eyebrow: "Future-Ready Learning",
    title: "A premium campus experience built for ambition, creativity, and careers.",
    description: "Explore industry-aligned programs, inspiring faculty, and a learning environment designed to shape confident graduates for the world ahead.",
  },
  {
    image: "https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/1.jpg",
    eyebrow: "Industry-Aligned Education",
    title: "Where academic excellence meets real-world momentum.",
    description: "Discover a university journey shaped by expert faculty, immersive learning spaces, and strong career pathways.",
  },
  {
    image: "https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/3.jpg",
    eyebrow: "Vibrant Campus Life",
    title: "A campus designed to inspire belonging, confidence, and growth.",
    description: "From classrooms to culture, every part of the experience is built to help students learn boldly and move forward with clarity.",
  },
];

/* ── Schools Data ── */
const schools = [
  { name: "Doon Business School", icon: GraduationCap, link: "/programs#business", programs: ["BBA", "B.Com with ICAI", "MBA", "BBA+MBA"], image: "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/29.jpg", color: "from-purple-deep to-primary", description: "Business-focused programs built around leadership, analytics, entrepreneurship, and industry exposure." },
  { name: "School of Advanced Computing", icon: Cpu, link: "/programs#computing", programs: ["B.Tech CSE (AI&ML)", "B.Tech CSE (Cyber Security)", "BCA"], image: "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/10.jpg", color: "from-primary to-purple-vivid", description: "Future-ready technology pathways spanning AI, cybersecurity, software, and digital systems." },
  { name: "School of Liberal Studies", icon: BookOpen, link: "/programs#liberal", programs: ["BA Liberal Arts", "MA"], image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/8.jpg", color: "from-purple-vivid to-purple-light", description: "Interdisciplinary learning for students who want depth in humanities, culture, and critical thought." },
  { name: "School of Pharmacy", icon: FlaskConical, link: "/programs#pharmacy", programs: ["B.Pharm", "D.Pharm", "B.Pharm Lateral"], image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/33.jpg", color: "from-purple-deep to-primary", description: "Pharmaceutical education supported by labs, applied science, and professional healthcare preparation." },
  { name: "School of Modern Media", icon: Film, link: "/programs#media", programs: ["BA Film & TV", "BA Digital Media", "MBA Media"], image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/16.jpg", color: "from-primary to-purple-vivid", description: "Creative programs designed for storytelling, production, digital content, and media strategy." },
  { name: "School of Agriculture", icon: Sprout, link: "/programs#agriculture", programs: ["B.Sc Agriculture", "B.Sc Forestry", "M.Sc Agronomy"], image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/9.jpg", color: "from-purple-vivid to-purple-light", description: "Applied agricultural education rooted in sustainability, field learning, and modern farming science." },
  { name: "School of Future Skills", icon: Lightbulb, link: "/programs#futureskills", programs: ["SAP", "SAS", "Artificial Intelligence"], image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/7.jpg", color: "from-purple-deep to-primary", description: "Specialized skill tracks aligned with emerging tools, enterprise platforms, and industry demand." },
  { name: "School of Law", icon: Scale, link: "/programs#law", programs: ["BA LLB (Hons.)", "BBA LLB", "LLM"], image: lawSchoolImage, color: "from-primary to-purple-vivid", description: "Rigorous legal education that blends academic depth, advocacy, ethics, and contemporary practice." },
  { name: "School of Hotel Management", icon: UtensilsCrossed, link: "/programs#hotel", programs: ["Bachelor of Hotel Management", "MBA Hospitality"], image: "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/29.jpg", color: "from-purple-vivid to-purple-light", description: "Hospitality programs preparing students for leadership roles in the global hotel and tourism industry." },
  { name: "School of Health Sciences", icon: Stethoscope, link: "/programs#healthsciences", programs: ["Medical Lab Technology", "Cardiovascular Technology", "MBA Healthcare"], image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/33.jpg", color: "from-purple-deep to-primary", description: "Allied health science programs combining clinical training with modern healthcare technology." },
  { name: "School of Nursing", icon: HeartPulse, link: "/programs#nursing", programs: ["GNM"], image: "https://www.dgu.ac/thumb/700x350/images/pictures/header-pictures/33.jpg", color: "from-primary to-purple-vivid", description: "Compassion-led clinical training that prepares students for real care environments and community health." },
];

/* ── Stats ── */
const stats = [
  { end: 11, suffix: "", label: "Schools of Excellence" },
  { end: 350, suffix: "+", label: "Recruiting Partners" },
  { end: 80, suffix: "+", label: "Academic Programs" },
  { end: 95, suffix: "%", label: "Placement Rate" },
];

/* ── Differentiators ── */
const differentiators = [
  { icon: "https://www.dgu.ac/images/icons/icon_09.png", title: "Innovative Pedagogy", desc: "Beyond traditional subject-specific teaching, fostering critical thinking and creativity." },
  { icon: "https://www.dgu.ac/images/icons/icon_10.png", title: "New Curriculums", desc: "Embraces innovative and contemporary methods aligned with industry standards." },
  { icon: "https://www.dgu.ac/images/icons/icon_12.png", title: "Future Skill Programs", desc: "Fostering personal growth and skill development for tomorrow's careers." },
  { icon: "https://www.dgu.ac/images/icons/icon_11.png", title: "Certified Trainings", desc: "Specific knowledge, skills, and competencies in partnership with leading organizations." },
];

/* ── Placed Students ── */
const placedStudents = [
  { name: "Sisir Chhetri", company: "TCS", image: "https://www.dgu.ac/images/pictures/students/Sisir-Chhetri---TCS.jpg" },
  { name: "Ankita Yadav", company: "Dainik Jagran", image: "https://www.dgu.ac/images/pictures/students/Ankita-Yadav---Dainik-Jagran.jpg" },
  { name: "Garima Aggarwal", company: "BP Global", image: "https://www.dgu.ac/images/pictures/students/Garima-Aggarwal---BP-Global.jpg" },
  { name: "Juhi Kumari", company: "DBS Bank", image: "https://www.dgu.ac/images/pictures/students/Juhi-Kumari---DBS-Bank.jpg" },
  { name: "Manivanna PT", company: "HCL Tech", image: "https://www.dgu.ac/images/pictures/students/Manivanna-PT---HCL-Tech.jpg" },
  { name: "Mihir Pancholi", company: "Deloitte", image: "https://www.dgu.ac/images/pictures/students/Mihir-Pancholi---Deloitte.jpg" },
  { name: "Ngawang Dechen", company: "Wipro", image: "https://www.dgu.ac/images/pictures/students/Ngawang-Dechen---Wipro.jpg" },
  { name: "Preshita Solanki", company: "Wipro", image: "https://www.dgu.ac/images/pictures/students/Preshita-Solanki---Wipro.jpg" },
  { name: "Rakshita Ranta", company: "Infosys", image: "https://www.dgu.ac/images/pictures/students/Rakshita-Ranta---Infosys.jpg" },
  { name: "Sashwat", company: "Pocket FM", image: "https://www.dgu.ac/images/pictures/students/Sashwat---Pocket-FM.jpg" },
];

/* ── Recruiter Logos (real colored) ── */
const recruiterLogos = Array.from({ length: 14 }, (_, i) =>
  `https://www.dgu.ac/thumb/122/images/placements-logos/recruiter_${String(i + 1).padStart(2, "0")}.png`
);

/* ── Testimonials ── */
const testimonials = [
  { name: "Saswati Pattjoshi", role: "MBA - Placed at ITC", image: "https://www.dgu.ac/images/pictures/students/saswati-pattjoshi-mba---itc.jpg", text: "I am very thankful to the department faculty and the placement cell that helped me achieve this while guiding me at every stage. My experience with the placement procedure was really great as I got to learn a lot." },
  { name: "Satyam Shekhar", role: "BBA+MBA - Nerolac Paints", image: "https://www.dgu.ac/images/pictures/students/satyam-shekhar-bba+mba---nerolac-paints.jpg", text: "It is a great experience being at DBSGU. Our CDC department has helped a lot during the process of placement. They make sure that each student is well prepared for the interview." },
  { name: "Jyoti Nainwal", role: "MBA - ANZ Bank", image: "https://www.dgu.ac/images/pictures/students/jyoti-nainwal-mba---anz-bank.jpg", text: "I am really thankful towards our college and placement cell, for supporting and providing us opportunities to learn interview skills, communication skills and guiding us in placements." },
  { name: "Dhruv Tripathi", role: "MBA - Deloitte", image: "https://www.dgu.ac/images/pictures/students/dhruv-tripathi-mba---deloitte.jpg", text: "I am delighted to say that the faculties and the staff has helped me to achieve these dreams. Here, I not only had the chance to develop on my technical skills but also on other aspects such as leadership and management skills." },
];

/* ── News ── */
const newsItems = [
  { date: "18 Dec 2025", title: "DBS Global University Students Secure Placements at Crescendo", image: "https://www.dgu.ac/thumb/370/media/WhatsApp_Image_2025-12-22_at_4-30-31_PM.jpeg", link: "https://www.dgu.ac/news-center/placements-news/dbs-global-university-students-secure-placements-at-crescendo" },
  { date: "30 Dec 2025", title: "Students Secure Placement at Home First Finance", image: "https://www.dgu.ac/thumb/370/media/WhatsApp_Image_2025-12-30_at_12-24-45_PM_(1).jpeg", link: "https://www.dgu.ac/news-center/placements-news/dbs-global-university-students-secure-placement-at-home-first-finance" },
  { date: "23 Dec 2025", title: "DGU Celebrates Student Placements at Urban Company", image: "https://www.dgu.ac/thumb/370/media/DBS_Global_University_Student_Placed_at_Urban_Company.jpg", link: "https://www.dgu.ac/news-center/placements-news/dbs-global-university-celebrates-student-placements-at-urban-company" },
  { date: "23 Dec 2025", title: "Student Placement with Lupin Pharmaceuticals", image: "https://www.dgu.ac/thumb/370/media/WhatsApp_Image_2026-01-03_at_2-47-54_PM.jpeg", link: "https://www.dgu.ac/news-center/placements-news/dbs-global-university-celebrates-student-placement-with-lupin-pharmaceuticals" },
];

/* ── Parallax Campus Images ── */
const campusBannerImages = [
  { src: "https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/1.jpg", alt: "Campus Main Building" },
  { src: "https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/2.jpg", alt: "Campus Infrastructure" },
  { src: "https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/3.jpg", alt: "Campus Grounds" },
];

/* ── Life Images ── */
const lifeImages = [
  "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/29.jpg",
  "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/10.jpg",
  "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/8.jpg",
  "https://www.dgu.ac/thumb/700x350/images/pictures/header-pictures/33.jpg",
  "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/16.jpg",
  "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/9.jpg",
  "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/7.jpg",
  lawSchoolImage,
];

/* ── Amenities ── */
const amenities = [
  { icon: Beaker, title: "State-of-the-Art Labs" },
  { icon: Library, title: "Digital Library" },
  { icon: Dumbbell, title: "Sports Complex" },
  { icon: Home, title: "Modern Hostels" },
  { icon: UtensilsCrossed, title: "Multi-Cuisine Cafeteria" },
  { icon: Stethoscope, title: "Medical Facility" },
  { icon: Shield, title: "24/7 Security" },
  { icon: Bus, title: "Transport Service" },
  { icon: Wifi, title: "Wi-Fi Campus" },
  { icon: Theater, title: "Cultural Center" },
  { icon: Flower2, title: "Yoga & Wellness" },
  { icon: TreePine, title: "Green Campus" },
];

/* ── Animated Counter Hook ── */
const useCounter = (end: number, duration = 2000, startOnView = true) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!startOnView) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startOnView]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [started, end, duration]);

  return { count, ref };
};

/* ── Scroll Reveal wrapper ── */
const ScrollReveal = ({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    className={className}
  >
    {children}
  </motion.div>
);

/* ── Parallax Image Component ── */
const ParallaxBanner = ({ src, alt, index }: { src: string; alt: string; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.15 }}
      className="relative overflow-hidden rounded-2xl"
      style={{ height: index === 0 ? "500px" : "400px" }}
    >
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ y }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
    </motion.div>
  );
};

/* ── Section Header ── */
const SectionHeader = ({ subtitle, title, description, light = false, center = true }: {
  subtitle: string; title: string; description?: string; light?: boolean; center?: boolean;
}) => (
  <ScrollReveal className={`${center ? "text-center" : ""} mb-14`}>
    <p className={`text-sm font-body uppercase tracking-[0.25em] font-semibold mb-3 ${light ? "text-accent" : "text-primary"}`}>
      {subtitle}
    </p>
    <h2 className={`text-3xl md:text-5xl font-display font-bold leading-tight ${light ? "text-white" : "text-foreground"}`}>
      {title}
    </h2>
    {description && (
      <p className={`mt-4 text-base font-body max-w-2xl leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-white/50" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </ScrollReveal>
);

/* ── Stat Counter — own component so hook is called at top level ── */
const StatCounter = ({ end, suffix, label }: { end: number; suffix: string; label: string }) => {
  const { count, ref } = useCounter(end, 2000);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-6xl font-display font-bold text-gradient-stat">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/60 mt-2 font-body uppercase tracking-widest">{label}</div>
    </div>
  );
};

/* ── 3D Tilt Card wrapper ── */
const TiltCard = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width  - 0.5;
    const y = (e.clientY - rect.top)  / rect.height - 0.5;
    el.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg) translateZ(4px)`;
  };

  const handleMouseLeave = () => {
    if (ref.current) {
      ref.current.style.transform = "perspective(1000px) rotateY(0deg) rotateX(0deg) translateZ(0px)";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transition: "transform 200ms ease-out", willChange: "transform" }}
    >
      {children}
    </div>
  );
};

/* ── Main Component ── */
const Index = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [heroSlide, setHeroSlide] = useState(0);
  const testimonialScrollerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroContentY = useTransform(scrollY, [0, 500], [0, 60]);

  // Define scrollToTestimonial BEFORE the useEffect that references it
  const scrollToTestimonial = (index: number) => {
    const container = testimonialScrollerRef.current;
    const target = container?.children[index] as HTMLElement | undefined;
    if (!container || !target) return;
    container.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
    setActiveTestimonial(index);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  // Keyboard navigation — uses a ref to avoid stale closure
  const activeTestimonialRef = useRef(activeTestimonial);
  activeTestimonialRef.current = activeTestimonial;

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      const cur = activeTestimonialRef.current;
      if (e.key === "ArrowLeft") {
        scrollToTestimonial((cur - 1 + testimonials.length) % testimonials.length);
      } else if (e.key === "ArrowRight") {
        scrollToTestimonial((cur + 1) % testimonials.length);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleTestimonialScroll = () => {
    const container = testimonialScrollerRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];
    if (!items.length) return;

    const nearestIndex = items.reduce(
      (closest, item, index) => {
        const distance = Math.abs(item.offsetLeft - container.scrollLeft);
        return distance < closest.distance ? { index, distance } : closest;
      },
      { index: 0, distance: Number.POSITIVE_INFINITY }
    ).index;

    if (nearestIndex !== activeTestimonial) {
      setActiveTestimonial(nearestIndex);
    }
  };

  return (
    <Layout>
      {/* ═══════ HERO — Premium Carousel with CTA ═══════ */}
      <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.18),transparent_30%),linear-gradient(135deg,#2e184f_0%,#4f2f75_45%,#ede6d9_100%)]">
        <AnimatePresence mode="wait">
          <motion.div
            key={heroSlide}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: heroImageY }}
            className="absolute inset-0"
          >
            <img
              src={heroSlides[heroSlide].image}
              alt="DBS Global University Campus"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(22,11,37,0.88)_0%,rgba(34,18,54,0.68)_42%,rgba(34,18,54,0.28)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,209,102,0.18),transparent_22%)]" />
        {/* Subtle grain overlay */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }}
        />

        <div className="relative container mx-auto px-6 py-24 md:py-32 lg:py-40">
          <motion.div style={{ y: heroContentY }} className="grid items-end gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${heroSlide}`}
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -18 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                >
                  <p className="mb-4 text-sm font-body font-semibold uppercase tracking-[0.28em] text-[#f1d9ab]">
                    {heroSlides[heroSlide].eyebrow}
                  </p>
                  <h1 className="max-w-4xl text-5xl font-display font-bold leading-[0.95] text-white md:text-6xl lg:text-7xl">
                    {heroSlides[heroSlide].title}
                  </h1>
                  <p className="mt-6 max-w-2xl text-base font-body leading-8 text-white md:text-lg">
                    {heroSlides[heroSlide].description}
                  </p>
                </motion.div>
              </AnimatePresence>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <ApplyNowButton
                  variant="accent"
                  className="group interactive-lift justify-center uppercase tracking-[0.18em] font-bold"
                />
                <Link
                  to="/programs"
                  className="group interactive-lift inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-sm font-body font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md hover:bg-white/16"
                >
                  Explore Courses <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-3">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.eyebrow}
                    type="button"
                    onClick={() => setHeroSlide(index)}
                    className={`rounded-full transition-all duration-300 ${
                      index === heroSlide
                        ? "h-2.5 w-10 bg-accent animate-pulse-glow"
                        : "h-2.5 w-2.5 bg-white/35 hover:bg-white/55"
                    }`}
                    aria-label={`Go to hero slide ${index + 1}`}
                  />
                ))}
              </div>


              <div className="mt-12 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"> 
                {[
                  { value: "11", label: "Schools" },
                  { value: "80+", label: "Programs" },
                  { value: "350+", label: "Recruiters" },
                ].map((item, index) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ y: -8, scale: 1.02 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="inertia-panel rounded-[24px] border border-white/15 bg-white/10 px-5 py-5 backdrop-blur-md"
                  >
                    <p className="text-3xl font-display font-bold text-white">{item.value}</p>
                    <p className="mt-1 text-xs font-body font-semibold uppercase tracking-[0.22em] text-white/60">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative hidden lg:flex flex-col items-center gap-6"
            >
              {/* Campus image panel */}
              <div className="relative w-full max-w-[480px]">
                {/* Glow blobs */}
                <div className="absolute -left-10 top-12 h-40 w-40 rounded-full bg-accent/25 blur-3xl pointer-events-none" />
                <div className="absolute -right-4 bottom-10 h-48 w-48 rounded-full bg-purple-500/20 blur-3xl pointer-events-none" />

                {/* Outer decorative ring */}
                <div className="absolute inset-0 rounded-[36px] border border-accent/30 scale-[1.04] pointer-events-none" />

                {/* Main image card */}
                <div className="relative overflow-hidden rounded-[36px] border border-white/20 shadow-2xl shadow-black/40">
                  <img
                    src="https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/1.jpg"
                    alt="DBS Global University Campus"
                    className="w-full h-[420px] object-cover"
                  />
                  {/* Gradient overlay — bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/70 via-transparent to-transparent" />

                  {/* Gold wireframe SVG overlay — decorative */}
                  <svg
                    className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
                    viewBox="0 0 480 420"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="240" cy="210" r="160" stroke="#f5c842" strokeWidth="1" />
                    <circle cx="240" cy="210" r="120" stroke="#f5c842" strokeWidth="0.6" strokeDasharray="4 6" />
                    <line x1="80" y1="210" x2="400" y2="210" stroke="#f5c842" strokeWidth="0.5" />
                    <line x1="240" y1="50" x2="240" y2="370" stroke="#f5c842" strokeWidth="0.5" />
                    <line x1="127" y1="97" x2="353" y2="323" stroke="#f5c842" strokeWidth="0.5" />
                    <line x1="353" y1="97" x2="127" y2="323" stroke="#f5c842" strokeWidth="0.5" />
                  </svg>

                  {/* Floating stat badge — top right */}
                  <div className="absolute top-5 right-5 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-3">
                    <p className="text-2xl font-display font-bold text-accent leading-none">350+</p>
                    <p className="text-[10px] font-body uppercase tracking-widest text-white/60 mt-1">Recruiters</p>
                  </div>

                  {/* Floating stat badge — bottom left */}
                  <div className="absolute bottom-5 left-5 rounded-2xl border border-white/20 bg-black/40 backdrop-blur-md px-4 py-3">
                    <p className="text-2xl font-display font-bold text-accent leading-none">95%</p>
                    <p className="text-[10px] font-body uppercase tracking-widest text-white/60 mt-1">Placement Rate</p>
                  </div>
                </div>
              </div>

              {/* Quote below image */}
              <div className="w-full max-w-[480px] rounded-[28px] border border-white/15 bg-[linear-gradient(135deg,rgba(255,255,255,0.10),rgba(255,255,255,0.03))] p-6 backdrop-blur-xl">
                <blockquote className="text-white font-display text-lg italic">
                  "Education is the most powerful weapon which you can use to change the world."
                  <footer className="mt-2 text-sm text-[#f1d9ab]">— Nelson Mandela</footer>
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll-down chevron */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 pointer-events-none">
          <span className="text-[10px] font-body uppercase tracking-[0.25em] text-white/40">Scroll</span>
          <ChevronDown className="h-5 w-5 text-white/50 animate-bounce-arrow" />
        </div>
      </section>
      {/* ═══════ ANNOUNCEMENT BANNER — MBA Winter Batch ═══════ */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="bg-gradient-to-r from-accent via-[#f5c842] to-accent"
      >
        <div className="container mx-auto px-6 py-3.5">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
            <div className="flex items-center gap-2">
              <Megaphone className="h-4 w-4 text-foreground/80 flex-shrink-0" />
              <span className="text-sm font-body font-bold text-foreground/90 uppercase tracking-[0.15em]">
                Registration Open
              </span>
            </div>
            <span className="hidden sm:block text-foreground/50">·</span>
            <span className="text-sm font-body font-semibold text-foreground/80">
              MBA Winter Batch 2026–2028 — Apply Now
            </span>
            <a
              href="https://admissions.dgu.ac/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-foreground/15 border border-foreground/20 px-4 py-1.5 text-xs font-body font-bold text-foreground hover:bg-foreground/25 transition-colors"
            >
              Apply Now <ArrowRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </motion.div>
      {/* ═══════ WELCOME SECTION — SOAS Style ═══════ */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img
                src="https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/29.jpg"
                alt="DGU Campus"
                className="w-full rounded-2xl shadow-2xl shadow-primary/10"
              />
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3">
                Welcome to DBS Global University
              </p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
                A Hub for Creativity and Academic Excellence
              </h2>
              <p className="mt-6 text-muted-foreground text-base font-body leading-relaxed">
                Discover a vibrant academic environment designed to inspire innovation and boost your potential. DBS Global University offers world-class education with industry-aligned programs, expert faculty, and modern infrastructure in the serene foothills of the Himalayas.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">
                {differentiators.map((d, i) => (
                  <ScrollReveal key={i} delay={0.1 * i}>
                    <div className="flex items-start gap-3">
                      <img src={d.icon} alt={d.title} className="h-10 w-10 flex-shrink-0" />
                      <div>
                        <h4 className="font-display font-bold text-foreground text-sm">{d.title}</h4>
                        <p className="text-xs text-muted-foreground font-body mt-1 leading-relaxed">{d.desc}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <Link
                to="/about"
                className="group inline-flex items-center gap-2 mt-8 px-6 py-3 bg-primary text-primary-foreground text-sm font-bold font-body rounded-full hover:bg-purple-vivid transition-colors"
              >
                Take A Virtual Tour <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ═══════ WHY CHOOSE DGU — SOAS Style Highlight Cards ═══════ */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white text-center mb-4">
              Why choose DBS Global University?
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {[
              { value: "11", label: "Schools of Excellence", desc: "From Business to Agriculture, Law to Computing — eleven specialized schools." },
              { value: "350+", label: "Recruiting Partners", desc: "Top companies recruit from our campus including Deloitte, TCS, Wipro, and more." },
              { value: "95%", label: "Placement Rate", desc: "Our dedicated placement cell ensures every student is industry-ready." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/15 transition-colors duration-300">
                  <div className="text-5xl md:text-6xl font-display font-bold text-accent mb-4">{item.value}</div>
                  <h3 className="text-lg font-display font-bold text-white mb-2">{item.label}</h3>
                  <p className="text-white/50 text-sm font-body leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ COURSES — Premium Card Grid ═══════ */}
      <section className="overflow-hidden bg-[linear-gradient(180deg,#fbf8f1_0%,#ffffff_55%,#f8f5ef_100%)]">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <SectionHeader
            subtitle="Courses"
            title="Explore Our Schools Through a Premium Card Grid"
            description="Choose from major academic schools designed around industry relevance, future skills, and a refined learning experience."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {schools.map((school, i) => {
              const Icon = school.icon;
              return (
                <ScrollReveal key={school.name} delay={i * 0.07}>
                  <TiltCard>
                    <Link
                      to={school.link}
                      className="group card-shine inertia-panel flex h-full flex-col overflow-hidden rounded-[30px] border border-[#e9dfcf] bg-white shadow-[0_18px_50px_rgba(49,30,74,0.06)] hover:shadow-[0_30px_80px_rgba(49,30,74,0.14)]"
                    >
                      <div className="relative aspect-[16/11] overflow-hidden">
                        <img
                          src={school.image}
                          alt={school.name}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${school.color} opacity-70 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-80`} />
                        <div className="absolute left-5 top-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/25 bg-white/15 text-white backdrop-blur-md">
                          <Icon className="h-6 w-6" />
                        </div>
                      </div>

                      <div className="flex flex-1 flex-col p-6 md:p-7">
                        <div>
                          <p className="text-xs font-body font-semibold uppercase tracking-[0.22em] text-primary/55">
                            School {String(i + 1).padStart(2, "0")}
                          </p>
                          <h3 className="mt-3 text-2xl font-display font-bold leading-tight text-foreground">
                            {school.name}
                          </h3>
                          <p className="mt-4 text-sm font-body leading-7 text-muted-foreground">
                            {school.description}
                          </p>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {school.programs.slice(0, 4).map((program) => (
                            <span
                              key={program}
                              className="rounded-full border border-[#eadfce] bg-[#faf6ef] px-3 py-1.5 text-[11px] font-body font-semibold uppercase tracking-[0.12em] text-primary/75"
                            >
                              {program}
                            </span>
                          ))}
                        </div>

                        <div className="mt-8 flex items-center justify-between border-t border-[#efe7da] pt-5">
                          <span className="text-sm font-body font-semibold text-primary transition-transform duration-300 group-hover:translate-x-1">
                            Learn More
                          </span>
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors duration-300 group-hover:bg-accent group-hover:text-accent-foreground">
                            <ArrowRight className="h-4 w-4" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
      {/* ═══════ AMENITIES — SOAS-style with icon rows ═══════ */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <SectionHeader
            subtitle="Campus Facilities"
            title="Everything You Need for Academic Excellence"
            description="A well-equipped campus designed for a complete student experience."
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {amenities.map((a, i) => {
              const Icon = a.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.05}>
                  <div className="group text-center p-6 rounded-2xl bg-background border border-border hover:border-primary hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 cursor-default hover:-translate-y-2">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                      <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-500" />
                    </div>
                    <p className="text-xs font-body font-semibold text-foreground/70 group-hover:text-primary transition-colors">{a.title}</p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════ STATS RIBBON ═══════ */}
      <section className="relative overflow-hidden bg-gradient-to-r from-primary via-purple-vivid to-primary">
        <div className="relative container mx-auto px-6 py-14 md:py-20">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="mb-10 h-px w-full origin-left bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <StatCounter key={i} end={stat.end} suffix={stat.suffix} label={stat.label} />
            ))}
          </div>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="mt-10 h-px w-full origin-left bg-gradient-to-r from-transparent via-accent/60 to-transparent"
          />
        </div>
      </section>

      {/* ═══════ PLACEMENTS ═══════ */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <SectionHeader
            subtitle="Placements"
            title="Building Careers, Creating Leaders"
            description="350+ companies recruit from our campus every year."
          />

          <div className="relative overflow-hidden mb-14">
            <div className="flex animate-scroll-left gap-8" style={{ width: "max-content" }}>
              {[...placedStudents, ...placedStudents].map((s, i) => (
                <motion.div
                  key={i}
                  className="flex-shrink-0 w-40 text-center group"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-3 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-lg shadow-primary/10">
                    <img src={s.image} alt={s.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <p className="text-foreground font-body font-semibold text-sm mt-3">{s.name}</p>
                  <p className="text-primary text-xs font-body font-medium">{s.company}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden py-6 border-t border-b border-border">
            <div className="flex animate-scroll-left gap-12 items-center" style={{ width: "max-content", animationDuration: "20s" }}>
              {[...recruiterLogos, ...recruiterLogos].map((logo, i) => (
                <img key={i} src={logo} alt="Recruiter" className="h-10 md:h-12 opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════ TESTIMONIALS ═══════ */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <SectionHeader
            subtitle="What Our Students Say"
            title="Student Voices, Shared in Cards"
            description="A quick look at how our students describe the support, preparation, and confidence they gained at DBS Global University."
          />
          <ScrollReveal>
            <div className="relative mx-auto max-w-5xl">
              <div className="mb-6 flex items-center justify-between gap-4">
                <p className="text-sm font-body text-muted-foreground">
                  Side-scroll through one story at a time.
                </p>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => scrollToTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                    className="rounded-full border border-border bg-background p-3 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollToTestimonial((activeTestimonial + 1) % testimonials.length)}
                    className="rounded-full border border-border bg-background p-3 text-muted-foreground transition-colors hover:border-primary/30 hover:text-primary"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div
                ref={testimonialScrollerRef}
                onScroll={handleTestimonialScroll}
                className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {testimonials.map((testimonial, index) => (
                  <article
                    key={testimonial.name}
                    className="group min-w-full snap-center rounded-[32px] border border-border bg-background p-6 shadow-xl shadow-primary/5 md:min-h-[360px] md:p-10"
                  >
                    <div className="grid h-full gap-8 md:grid-cols-[220px_minmax(0,1fr)] md:items-center">
                      <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(160deg,rgba(58,29,95,1),rgba(95,67,141,1),rgba(231,223,205,1))] p-[1px]">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.28),transparent_40%)]" />
                        <div className="relative rounded-[27px] bg-white/95 p-5 backdrop-blur">
                          <div className="flex items-start justify-between gap-4">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="h-20 w-20 rounded-[24px] object-cover ring-4 ring-primary/10 transition-all duration-500 group-hover:ring-accent/40 group-hover:shadow-[0_0_20px_rgba(245,200,66,0.35)]"
                            />
                            <div className="rounded-2xl bg-primary/10 p-3 text-primary">
                              <Quote className="h-5 w-5" />
                            </div>
                          </div>
                          <div className="mt-6">
                            <p className="font-display text-2xl font-bold text-foreground">{testimonial.name}</p>
                            <p className="mt-2 text-base font-body font-medium text-primary">{testimonial.role}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex h-full flex-col justify-between">
                        <p className="max-w-3xl text-lg font-body leading-9 text-muted-foreground md:text-[1.35rem]">
                          "{testimonial.text}"
                        </p>
                        <div className="mt-8 flex items-center justify-between gap-4 border-t border-border pt-5">
                          <p className="text-xs font-body font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                            Student Testimonial
                          </p>
                          <div className="rounded-full bg-secondary px-4 py-2 text-xs font-body font-semibold text-primary">
                            {String(index + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              <div className="mt-5 flex justify-center gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.name}
                    type="button"
                    onClick={() => scrollToTestimonial(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${index === activeTestimonial ? "w-10 bg-primary" : "w-2.5 bg-border hover:bg-primary/40"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* ═══════ NEWS & EVENTS ═══════ */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <SectionHeader subtitle="Insights & Updates" title="Latest News & Events" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group card-shine inertia-panel bg-background rounded-2xl overflow-hidden border border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 block"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <span className="text-xs text-primary font-body font-medium">{item.date}</span>
                    <h3 className="font-display font-semibold text-foreground text-sm mt-2 group-hover:text-primary transition-colors leading-snug line-clamp-2">{item.title}</h3>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs text-muted-foreground font-body group-hover:text-primary transition-colors">
                      Read More <ArrowRight className="h-3 w-3" />
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>


      {/* ═══════ 360 VIRTUAL TOUR ═══════ */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <SectionHeader subtitle="Explore Campus" title="360 Virtual Tour" description="Walk through the DBS Global University campus from anywhere in the world." light />
          <ScrollReveal>
            <div className="max-w-5xl mx-auto aspect-video overflow-hidden rounded-2xl shadow-2xl border-2 border-white/10">
              <iframe
                src="https://walkinside.s3.ap-south-1.amazonaws.com/dbs/index.html"
                title="DBS Global University 360 Virtual Tour"
                className="w-full h-full"
                allow="fullscreen; gyroscope; accelerometer"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ═══════ LIFE AT DGU ═══════ */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="flex items-end justify-between mb-14">
            <ScrollReveal>
              <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3">Student Experience</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground">Life at DGU</h2>
              <p className="mt-3 text-muted-foreground font-body text-base max-w-md">Cultural festivals, sports, clubs, and a vibrant student community in the foothills of the Himalayas.</p>
            </ScrollReveal>
            <Link to="/campus-life" className="group hidden md:inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground text-sm font-bold font-body rounded-full hover:bg-purple-vivid transition-colors">
              Explore More <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {lifeImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="overflow-hidden rounded-xl group cursor-pointer">
                  <img src={img} alt="Life at DGU" className="w-full aspect-square object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ CTA BANNER ═══════ */}
      <section className="relative overflow-hidden">
        <img
          src={campusBannerImages[0].src}
          alt="DGU Campus"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(83,47,126,0.86),rgba(76,43,117,0.88))]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.07),transparent_45%)]" />

        <div className="relative container mx-auto px-6 py-24 md:py-28 lg:py-32">
          <ScrollReveal>
            <div className="mx-auto max-w-5xl text-center">
              <p className="text-sm font-body font-semibold uppercase tracking-[0.28em] text-white/75">
                Ready to Join?
              </p>
              <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-display font-bold leading-[0.95] text-white md:text-6xl lg:text-7xl">
                Shape Your Future at DBS Global University
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg font-body leading-9 text-white/68 md:text-[1.45rem]">
                Join a community that nurtures innovation, creativity, and excellence. Applications are open for the upcoming academic session.
              </p>

              <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://admissions.dgu.ac/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-w-[220px] items-center justify-center gap-3 rounded-2xl bg-white px-9 py-5 text-base font-body font-bold uppercase tracking-[0.14em] text-primary transition-all duration-300 hover:-translate-y-1 hover:bg-[#f6efe4]"
                >
                  Apply Now <ArrowRight className="h-5 w-5" />
                </a>
                <a
                  href="tel:+917259162060"
                  className="inline-flex min-w-[330px] items-center justify-center gap-3 rounded-2xl border border-white/30 bg-white/5 px-9 py-5 text-base font-body font-bold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" /> Speak to Counsellor
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
      {/* ═══════ CONTACT INFO BAR ═══════ */}
      <section className="bg-foreground">
        <div className="container mx-auto px-6 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-body uppercase tracking-wider">Call Us</p>
                <a href="tel:+917259162060" className="text-white font-body font-semibold text-sm hover:text-primary transition-colors">+91 7259162060</a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-body uppercase tracking-wider">Our Address</p>
                <p className="text-white font-body font-semibold text-sm">Selaqui, Dehradun, Uttarakhand</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-white/40 text-xs font-body uppercase tracking-wider">Email Us</p>
                <a href="mailto:admissions@dgu.ac" className="text-white font-body font-semibold text-sm hover:text-primary transition-colors">admissions@dgu.ac</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;




















