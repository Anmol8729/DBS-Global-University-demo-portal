import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Cpu, BookOpen, FlaskConical, Film, Sprout, Award, Scale, Heart, Download, UtensilsCrossed, Stethoscope } from "lucide-react";
import Layout from "@/components/Layout";

const lawSchoolImage = "https://dgu.ac/thumb/1400x560/images/header-images/home/hd-08.jpg";

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

const schoolsData = [
  {
    id: "business", name: "Doon Business School", icon: Briefcase,
    description: "The Doon Business School offers industry-focused business programs designed to develop the next generation of entrepreneurs and business leaders. Programs span analytics, fintech, digital marketing, international business, and more.",
    image: "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/29.jpg",
    brochure: "https://dgu.ac/media/downloads/brochures/BBA_BBA_MBA.pdf",
    programs: [
      { name: "BBA General", duration: "3 Years", level: "Undergraduate" },
      { name: "BBA E-Commerce & Supply Chain", duration: "3 Years", level: "Undergraduate" },
      { name: "BBA Fintech", duration: "3 Years", level: "Undergraduate" },
      { name: "BBA Digital Marketing", duration: "3 Years", level: "Undergraduate" },
      { name: "BBA Business Analytics", duration: "3 Years", level: "Undergraduate" },
      { name: "BBA Entrepreneurship", duration: "3 Years", level: "Undergraduate" },
      { name: "BBA Banking & Financial Services", duration: "3 Years", level: "Undergraduate" },
      { name: "BBA Capital Markets", duration: "3 Years", level: "Undergraduate" },
      { name: "BBA International Business", duration: "3 Years", level: "Undergraduate" },
      { name: "B.Com with ICAI", duration: "3 Years", level: "Undergraduate" },
      { name: "B.Com with UK-ACCA", duration: "3 Years", level: "Undergraduate" },
      { name: "B.Com with US-CPA", duration: "3 Years", level: "Undergraduate" },
      { name: "MBA Business Analytics (with SAS)", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Digital Transformation", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Marketing (with SAP)", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA HR (with SAP)", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Finance (with SAP)", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA International Business", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Healthcare Pharma Management", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Logistics & Supply Chain", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Media & Creative Communication", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Agri Business", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Global", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Winter Batch 2026-2028", duration: "2 Years", level: "Postgraduate" },
      { name: "BBA+MBA (Integrated)", duration: "5 Years", level: "Integrated" },
      { name: "PhD", duration: "3–5 Years", level: "Doctoral" },
    ],
  },
  {
    id: "computing", name: "Doon School of Advanced Computing", icon: Cpu,
    description: "In collaboration with HCLTech, this school provides cutting-edge technology programs focusing on AI, Machine Learning, Cyber Security, and Data Science.",
    image: "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/10.jpg",
    brochure: "https://dgu.ac/media/downloads/brochures/B.Tech_Brochure.pdf",
    programs: [
      { name: "B.Tech CSE with Minor", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Tech CSE AI&ML with Minor", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Tech CSE AI&ML — HCLTech", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Tech CSE Cyber Security — HCLTech", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Tech CSE Data Science — HCLTech", duration: "4 Years", level: "Undergraduate" },
      { name: "BCA", duration: "3 Years", level: "Undergraduate" },
      { name: "BCA Data Analytics — HCLTech", duration: "3 Years", level: "Undergraduate" },
      { name: "BCA Machine Learning — HCLTech", duration: "3 Years", level: "Undergraduate" },
      { name: "M.Tech CSE / M.Tech CSE by Research", duration: "2 Years", level: "Postgraduate" },
      { name: "MCA", duration: "2 Years", level: "Postgraduate" },
      { name: "B.Tech CSE + MBA", duration: "5 Years", level: "Integrated" },
      { name: "B.Tech CSE + M.Tech", duration: "5 Years", level: "Integrated" },
      { name: "PhD", duration: "3–5 Years", level: "Doctoral" },
    ],
  },
  {
    id: "law", name: "Doon School of Law", icon: Scale,
    description: "Rigorous legal education programs that prepare students for successful careers in law and justice, blending academic depth with advocacy and contemporary practice.",
    image: lawSchoolImage,
    brochure: "https://dgu.ac/media/downloads/brochures/DGU_Law_2026.pdf",
    programs: [
      { name: "BA LLB (Hons.)", duration: "5 Years", level: "Integrated" },
      { name: "BBA LLB", duration: "5 Years", level: "Integrated" },
      { name: "LLM", duration: "1 Year", level: "Postgraduate" },
    ],
  },
  {
    id: "liberal", name: "Doon School of Liberal Studies", icon: BookOpen,
    description: "A holistic liberal arts education that nurtures critical thinking, creativity, and a broad understanding of the world across humanities, culture, and social sciences.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/8.jpg",
    brochure: "https://dgu.ac/media/downloads/view_book.pdf",
    programs: [
      { name: "Bachelor of Arts (Liberal Arts)", duration: "3 Years", level: "Undergraduate" },
      { name: "MA", duration: "2 Years", level: "Postgraduate" },
      { name: "PhD", duration: "3–5 Years", level: "Doctoral" },
    ],
  },
  {
    id: "pharmacy", name: "DBS School of Pharmacy and Research", icon: FlaskConical,
    description: "Comprehensive pharmacy programs combining theoretical knowledge with practical research experience and professional healthcare preparation.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/33.jpg",
    brochure: "https://dgu.ac/media/downloads/brochures/DBS_School_of_Pharmacy_2025.pdf",
    programs: [
      { name: "B.Pharm", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Pharm Lateral Entry", duration: "3 Years", level: "Undergraduate" },
      { name: "M.Sc Pharmaceutical Chemistry", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Healthcare Pharma Management", duration: "2 Years", level: "Postgraduate" },
      { name: "D.Pharm", duration: "2 Years", level: "Diploma" },
      { name: "PhD", duration: "3–5 Years", level: "Doctoral" },
    ],
  },
  {
    id: "media", name: "Doon School of Modern Media", icon: Film,
    description: "Creative media programs designed to prepare students for careers in film, TV, digital media, and mass communications.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/16.jpg",
    brochure: "https://dgu.ac/media/downloads/brochures/Mass__Comm.pdf",
    programs: [
      { name: "BA Film and TV", duration: "3 Years", level: "Undergraduate" },
      { name: "BA Digital Media & Mass Communications", duration: "3 Years", level: "Undergraduate" },
      { name: "MA (Mass Communication)", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Media & Creative Communication", duration: "2 Years", level: "Postgraduate" },
      { name: "PhD", duration: "3–5 Years", level: "Doctoral" },
    ],
  },
  {
    id: "agriculture", name: "Doon School of Modern Agriculture", icon: Sprout,
    description: "Agriculture and forestry programs that blend modern scientific practices with sustainable development principles and applied field learning.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/9.jpg",
    brochure: "https://dgu.ac/media/downloads/brochures/Modern_Agriculture.pdf",
    programs: [
      { name: "B.Sc Agriculture", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Sc Forestry", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Sc Agri Business", duration: "3 Years", level: "Undergraduate" },
      { name: "M.Sc Agronomy", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA Agri Business", duration: "2 Years", level: "Postgraduate" },
      { name: "PhD", duration: "3–5 Years", level: "Doctoral" },
    ],
  },
  {
    id: "futureskills", name: "Doon School of Future Skills", icon: Award,
    description: "Specialized certification and skill-development programs preparing students for emerging technology domains, enterprise platforms, and industry demand.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/7.jpg",
    brochure: "https://dgu.ac/media/downloads/view_book.pdf",
    programs: [
      { name: "SAP", duration: "Certification", level: "Professional" },
      { name: "SAS", duration: "Certification", level: "Professional" },
      { name: "Artificial Intelligence", duration: "Certification", level: "Professional" },
      { name: "E-Commerce", duration: "Certification", level: "Professional" },
      { name: "AGILE & SCRUM", duration: "Certification", level: "Professional" },
      { name: "Big Data / Python / R", duration: "Certification", level: "Professional" },
      { name: "Digital Marketing", duration: "Certification", level: "Professional" },
      { name: "HR Analytics", duration: "Certification", level: "Professional" },
      { name: "Data Analytics Tools", duration: "Certification", level: "Professional" },
      { name: "Machine Learning", duration: "Certification", level: "Professional" },
      { name: "IoT", duration: "Certification", level: "Professional" },
      { name: "Website Development", duration: "Certification", level: "Professional" },
      { name: "Social Media Marketing", duration: "Certification", level: "Professional" },
      { name: "Luxury Brand Marketing", duration: "Certification", level: "Professional" },
      { name: "French Language", duration: "Certification", level: "Professional" },
    ],
  },
  {
    id: "hotel", name: "Doon School of Hotel Management", icon: UtensilsCrossed,
    description: "Hospitality and hotel management programs designed to prepare students for leadership roles in the global hospitality industry.",
    image: "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/29.jpg",
    brochure: "https://dgu.ac/media/downloads/view_book.pdf",
    programs: [
      { name: "Bachelor of Hotel Management", duration: "4 Years", level: "Undergraduate" },
      { name: "MBA Hospitality Management", duration: "2 Years", level: "Postgraduate" },
    ],
  },
  {
    id: "healthsciences", name: "DBS School of Health Sciences", icon: Stethoscope,
    description: "Allied health science programs combining clinical training with modern healthcare technology, preparing students for careers in diagnostics and patient care.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/33.jpg",
    brochure: "https://dgu.ac/media/downloads/view_book.pdf",
    programs: [
      { name: "Anaesthesia & Operation Theatre Technology", duration: "3 Years", level: "Undergraduate" },
      { name: "Medical Lab Technology", duration: "3 Years", level: "Undergraduate" },
      { name: "Cardiovascular Technology", duration: "3 Years", level: "Undergraduate" },
      { name: "MBA Healthcare & Pharma Management", duration: "2 Years", level: "Postgraduate" },
    ],
  },
  {
    id: "nursing", name: "Doon School of Nursing", icon: Heart,
    description: "Nursing programs that train compassionate healthcare professionals with practical clinical skills for real care environments and community health.",
    image: "https://www.dgu.ac/thumb/700x350/images/pictures/header-pictures/33.jpg",
    brochure: "https://dgu.ac/media/downloads/view_book.pdf",
    programs: [
      { name: "GNM (General Nursing and Midwifery)", duration: "3 Years", level: "Diploma" },
    ],
  },
];

const levelColors: Record<string, string> = {
  Undergraduate: "bg-blue-50 text-blue-700",
  Postgraduate: "bg-purple-50 text-purple-700",
  Integrated: "bg-amber-50 text-amber-700",
  Diploma: "bg-green-50 text-green-700",
  Doctoral: "bg-rose-50 text-rose-700",
  Professional: "bg-teal-50 text-teal-700",
};

const Programs = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] flex items-end overflow-hidden">
        <motion.img
          src="https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/2.jpg"
          alt="Programs" className="absolute inset-0 w-full h-full object-cover" style={{ y: heroY }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-6 pb-16">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-accent font-semibold mb-3">Academics</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Our Programs</h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl font-body">
              Eleven schools offering 80+ programs across business, technology, law, pharmacy, media, agriculture, hospitality, health sciences, and more.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Schools */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28 space-y-20">
          {schoolsData.map((school) => (
            <ScrollReveal key={school.id}>
              <div id={school.id} className="scroll-mt-24">
                <div className="grid md:grid-cols-2 gap-10 items-start">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                    <img src={school.image} alt={school.name} className="w-full h-full object-cover" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <school.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 px-3 py-1.5 text-xs font-body font-semibold text-white">
                        {school.programs.length} Programs
                      </span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">{school.name}</h2>
                    <p className="text-muted-foreground text-sm mb-5 font-body">{school.description}</p>

                    <a
                      href={school.brochure}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mb-6 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-body font-semibold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                    >
                      <Download className="h-3.5 w-3.5" /> Download Brochure
                    </a>

                    <div className="space-y-3">
                      {school.programs.map((prog, j) => (
                        <div key={j} className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 bg-background">
                          <div>
                            <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full font-body uppercase ${levelColors[prog.level] ?? "bg-primary/10 text-primary"}`}>
                              {prog.level}
                            </span>
                            <h3 className="font-display font-semibold text-foreground text-sm mt-1.5">{prog.name}</h3>
                          </div>
                          <div className="flex items-center gap-3 flex-shrink-0">
                            <span className="text-xs text-muted-foreground font-body">{prog.duration}</span>
                            <a
                              href="https://admissions.dgu.ac/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-xs font-medium text-primary hover:text-purple-vivid flex items-center gap-1 transition-colors font-body"
                            >
                              Apply <ArrowRight className="h-3 w-3" />
                            </a>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
