import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
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

const recruiterLogos = Array.from({ length: 14 }, (_, i) =>
  `https://www.dgu.ac/thumb/122/images/placements-logos/recruiter_${String(i + 1).padStart(2, "0")}.png`
);

const testimonials = [
  { name: "Saswati Pattjoshi", company: "ITC", image: "https://www.dgu.ac/images/pictures/students/saswati-pattjoshi-mba---itc.jpg", text: "I am very thankful to the department faculty and the placement cell that helped me achieve this while guiding me at every stage." },
  { name: "Satyam Shekhar", company: "Nerolac Paints", image: "https://www.dgu.ac/images/pictures/students/satyam-shekhar-bba+mba---nerolac-paints.jpg", text: "It is a great experience being at DBSGU. Our CDC department has helped a lot during the process of placement." },
  { name: "Jyoti Nainwal", company: "ANZ Bank", image: "https://www.dgu.ac/images/pictures/students/jyoti-nainwal-mba---anz-bank.jpg", text: "I am really thankful towards our college and placement cell, for supporting and providing us opportunities." },
  { name: "Dhruv Tripathi", company: "Deloitte", image: "https://www.dgu.ac/images/pictures/students/dhruv-tripathi-mba---deloitte.jpg", text: "I am delighted to say that the faculties and the staff has helped me to achieve these dreams." },
];

const Placements = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <Layout>
      {/* Hero */}
      <section ref={heroRef} className="relative h-[60vh] flex items-end overflow-hidden">
        <motion.img src="https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/2.jpg" alt="Placements" className="absolute inset-0 w-full h-full object-cover" style={{ y: heroY }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-6 pb-16">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-accent font-semibold mb-3">Career</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Placements</h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl font-body">350+ companies recruit from campus every year.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "350+", label: "Recruiting Companies" },
              { value: "90%+", label: "Placement Rate" },
              { value: "8 LPA", label: "Average Package" },
              { value: "25 LPA", label: "Highest Package" },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-4xl md:text-5xl font-display font-bold text-white">{s.value}</div>
                <p className="text-white/60 mt-2 text-sm font-body uppercase tracking-wider">{s.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Overview */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3">Placement Cell</p>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">Career Development Centre</h2>
              <p className="text-muted-foreground leading-relaxed font-body">
                Placement is an independent activity managed by the career development cell & the students through their nominated committee member, under the guidance of an experienced Placement Coordinator. The activities calendar has incorporated a number of activities designed to promote industry interaction.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Placed Students */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Success Stories</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Our Placed Students</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {placedStudents.map((student, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-3 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-lg shadow-primary/10">
                    <img src={student.image} alt={student.name} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <p className="font-display font-semibold text-foreground text-sm mt-3">{student.name}</p>
                  <p className="text-xs text-primary font-body mt-1 font-medium">{student.company}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recruiter Logos */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-14">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-8 text-center">Our Recruiters</p>
          </ScrollReveal>
          <div className="relative overflow-hidden py-6">
            <div className="flex animate-scroll-left gap-12 items-center" style={{ width: "max-content", animationDuration: "20s" }}>
              {[...recruiterLogos, ...recruiterLogos].map((logo, i) => (
                <img key={i} src={logo} alt="Recruiter" className="h-10 md:h-12 opacity-80 hover:opacity-100 transition-opacity" loading="lazy" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Voices</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Student Testimonials</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                  <Quote className="h-8 w-8 text-primary/20 mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 font-body italic">"{t.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20">
                      <img src={t.image} alt={t.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <span className="font-display font-semibold text-foreground text-sm block">{t.name}</span>
                      <span className="text-xs text-primary font-body">{t.company}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Placements;
