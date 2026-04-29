import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { BookOpen, Award, Users, Globe, Lightbulb, Target } from "lucide-react";
import Layout from "@/components/Layout";

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

const features = [
  { icon: Lightbulb, title: "Innovative Pedagogy", desc: "Beyond traditional subject-specific teaching, our innovative pedagogy integrates experiential learning, case studies, and real-world projects." },
  { icon: BookOpen, title: "New Curriculums", desc: "Our curriculums embrace innovative and contemporary methods, regularly updated to meet industry demands and global standards." },
  { icon: Target, title: "Future Skill Programs", desc: "Programs fostering personal growth and skill development in SAP, SAS, AI, and other emerging technologies." },
  { icon: Award, title: "Certified Trainings", desc: "Specific knowledge, skills, and competencies through certified training programs partnered with industry leaders like HCLTech." },
  { icon: Users, title: "Industry Partnerships", desc: "Strong collaborations with companies like HCLTech, ICAI, and 350+ recruiting companies for practical exposure." },
  { icon: Globe, title: "Global Exposure", desc: "International conferences, exchange programs, and global partnerships. DGU participated at EAIE 2025 Conference in Sweden." },
];

const phdPrograms = [
  "PhD in Management", "PhD in Computer Science", "PhD in Pharmacy",
  "PhD in Agriculture", "PhD in Law", "PhD in Liberal Studies",
];

const Academics = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <Layout>
      <section ref={heroRef} className="relative h-[60vh] flex items-end overflow-hidden">
        <motion.img src="https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/3.jpg" alt="Academics" className="absolute inset-0 w-full h-full object-cover" style={{ y: heroY }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-6 pb-16">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-accent font-semibold mb-3">Research</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Academics</h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl font-body">World-class academic programs with innovative pedagogy and industry-relevant curriculum.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Academic Excellence */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Why DGU</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Academic Excellence</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-secondary/30 rounded-2xl p-8 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5">
                    <f.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2 text-lg">{f.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PhD Programs */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Advanced Research</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">PhD Programs</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {phdPrograms.map((prog, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-center gap-4 bg-background rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shrink-0">
                    <Award className="h-5 w-5 text-white" />
                  </div>
                  <span className="font-display font-medium text-foreground text-sm">{prog}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Rankings */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-14">Rankings & Recognition</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "5th", desc: "Among India's Top 10 Promising Finance Management Universities for 2025" },
              { value: "350+", desc: "Companies Recruiting from Campus Every Year" },
              { value: "EAIE 2025", desc: "Participated at International EAIE Conference in Sweden" },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <div className="text-4xl md:text-5xl font-display font-bold text-accent mb-3">{item.value}</div>
                  <p className="text-white/60 text-sm font-body">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
