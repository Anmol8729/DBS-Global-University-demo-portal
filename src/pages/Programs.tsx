import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Cpu, BookOpen, FlaskConical, Film, Sprout, Award, Scale, Heart } from "lucide-react";
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
    description: "The Doon Business School offers industry-focused business programs designed to develop the next generation of entrepreneurs and business leaders.",
    image: "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/29.jpg",
    programs: [
      { name: "BBA with Specialization in E-Commerce and Supply Chain", duration: "3 Years", level: "Undergraduate" },
      { name: "B.Com with ICAI", duration: "3 Years", level: "Undergraduate" },
      { name: "MBA with Specialization in Digital Transformation", duration: "2 Years", level: "Postgraduate" },
      { name: "BBA+MBA (Integrated Program in Management)", duration: "5 Years", level: "Integrated" },
    ],
  },
  {
    id: "computing", name: "Doon School of Advanced Computing", icon: Cpu,
    description: "In partnership with HCLTech, this school provides cutting-edge technology programs focusing on AI, Machine Learning, and Cyber Security.",
    image: "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/10.jpg",
    programs: [
      { name: "B.Tech in CSE with Specialization in AI&ML - HCLTech", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Tech in CSE with Specialization in Cyber Security - HCLTech", duration: "4 Years", level: "Undergraduate" },
      { name: "BCA with Specialization in Machine Learning - HCLTech", duration: "3 Years", level: "Undergraduate" },
    ],
  },
  {
    id: "liberal", name: "Doon School of Liberal Studies", icon: BookOpen,
    description: "A holistic liberal arts education that nurtures critical thinking, creativity, and a broad understanding of the world.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/8.jpg",
    programs: [
      { name: "Bachelor of Arts (Liberal Arts)", duration: "3 Years", level: "Undergraduate" },
      { name: "MA", duration: "2 Years", level: "Postgraduate" },
    ],
  },
  {
    id: "pharmacy", name: "DBS School of Pharmacy and Research", icon: FlaskConical,
    description: "Comprehensive pharmacy programs combining theoretical knowledge with practical research experience.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/33.jpg",
    programs: [
      { name: "B.Pharm", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Pharm Lateral Entry", duration: "3 Years", level: "Undergraduate" },
      { name: "D.Pharm", duration: "2 Years", level: "Diploma" },
    ],
  },
  {
    id: "media", name: "Doon School of Modern Media", icon: Film,
    description: "Creative media programs designed to prepare students for careers in film, TV, digital media, and mass communications.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/16.jpg",
    programs: [
      { name: "BA Film and TV", duration: "3 Years", level: "Undergraduate" },
      { name: "BA Digital Media & Mass Communications", duration: "3 Years", level: "Undergraduate" },
      { name: "MBA Media & Creative Communication", duration: "2 Years", level: "Postgraduate" },
    ],
  },
  {
    id: "agriculture", name: "Doon School of Modern Agriculture", icon: Sprout,
    description: "Agriculture and forestry programs that blend modern scientific practices with sustainable development principles.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/9.jpg",
    programs: [
      { name: "B.Sc Agriculture", duration: "4 Years", level: "Undergraduate" },
      { name: "B.Sc Forestry", duration: "4 Years", level: "Undergraduate" },
      { name: "M.Sc Agronomy", duration: "2 Years", level: "Postgraduate" },
      { name: "MBA with Specialization in Agri Business", duration: "2 Years", level: "Postgraduate" },
    ],
  },
  {
    id: "futureskills", name: "Doon School of Future Skills", icon: Award,
    description: "Specialized certification and skill-development programs preparing students for emerging technology domains.",
    image: "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/7.jpg",
    programs: [
      { name: "SAP", duration: "Certification", level: "Professional" },
      { name: "SAS", duration: "Certification", level: "Professional" },
      { name: "Artificial Intelligence", duration: "Certification", level: "Professional" },
    ],
  },
  {
    id: "law", name: "Doon School of Law", icon: Scale,
    description: "Rigorous legal education programs that prepare students for successful careers in law and justice.",
    image: lawSchoolImage,
    programs: [
      { name: "BA LLB (Hons.)", duration: "5 Years", level: "Integrated" },
      { name: "BBA LLB", duration: "5 Years", level: "Integrated" },
      { name: "LLM", duration: "1 Year", level: "Postgraduate" },
    ],
  },
  {
    id: "nursing", name: "Doon School of Nursing", icon: Heart,
    description: "Nursing programs that train compassionate healthcare professionals with practical clinical skills.",
    image: "https://www.dgu.ac/thumb/700x350/images/pictures/header-pictures/33.jpg",
    programs: [
      { name: "GNM (General Nursing and Midwifery)", duration: "3 Years", level: "Diploma" },
    ],
  },
];

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
              Nine schools offering 30+ programs across business, technology, liberal arts, pharmacy, media, agriculture, law, and more.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Schools */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28 space-y-20">
          {schoolsData.map((school, i) => (
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
                  </div>
                  <div>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-3">{school.name}</h2>
                    <p className="text-muted-foreground text-sm mb-6 font-body">{school.description}</p>
                    <div className="space-y-3">
                      {school.programs.map((prog, j) => (
                        <div key={j} className="flex items-center justify-between p-4 rounded-xl border border-border hover:border-primary/30 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 bg-background">
                          <div>
                            <span className="text-[10px] font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full font-body uppercase">{prog.level}</span>
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
