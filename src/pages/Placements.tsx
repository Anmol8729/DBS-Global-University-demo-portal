import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Quote, Award, ArrowRight } from "lucide-react";
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

const newsItems = [
  { date: "18 Dec 2025", title: "DBS Global University Students Secure Placements at Reliance Retail", image: "https://www.dgu.ac/thumb/370/media/WhatsApp_Image_2025-12-22_at_4-30-31_PM.jpeg", link: "https://www.dgu.ac/news-center/placements-news" },
  { date: "14 Dec 2025", title: "DBS Global University Students Secure Placements at Tata AIG", image: "https://www.dgu.ac/thumb/370/media/DBS_Global_University_Student_Placed_at_Urban_Company.jpg", link: "https://www.dgu.ac/news-center/placements-news" },
  { date: "18 Dec 2025", title: "DBS Global University Students Secure Placements at Crescendo", image: "https://www.dgu.ac/thumb/370/media/WhatsApp_Image_2025-12-22_at_4-30-31_PM.jpeg", link: "https://www.dgu.ac/news-center/placements-news/dbs-global-university-students-secure-placements-at-crescendo" },
  { date: "30 Dec 2025", title: "Students Secure Placement at Home First Finance", image: "https://www.dgu.ac/thumb/370/media/WhatsApp_Image_2025-12-30_at_12-24-45_PM_(1).jpeg", link: "https://www.dgu.ac/news-center/placements-news/dbs-global-university-students-secure-placement-at-home-first-finance" },
  { date: "23 Dec 2025", title: "DGU Celebrates Student Placements at Urban Company", image: "https://www.dgu.ac/thumb/370/media/DBS_Global_University_Student_Placed_at_Urban_Company.jpg", link: "https://www.dgu.ac/news-center/placements-news/dbs-global-university-celebrates-student-placements-at-urban-company" },
  { date: "23 Dec 2025", title: "Student Placement with Lupin Pharmaceuticals", image: "https://www.dgu.ac/thumb/370/media/WhatsApp_Image_2026-01-03_at_2-47-54_PM.jpeg", link: "https://www.dgu.ac/news-center/placements-news/dbs-global-university-celebrates-student-placement-with-lupin-pharmaceuticals" },
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
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/15 px-4 py-2 backdrop-blur-sm">
              <Award className="h-4 w-4 text-accent flex-shrink-0" />
              <span className="text-xs font-body font-semibold text-accent">India Today — Best Institution in North India for Management Programs</span>
            </div>
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
          <ScrollReveal delay={0.4}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur-sm">
                <Award className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white font-display font-semibold text-sm">India Today Ranked</p>
                  <p className="text-white/60 text-xs font-body mt-0.5">Best Institution in North India for Management Programs</p>
                </div>
              </div>
              <div className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/10 px-6 py-4 backdrop-blur-sm">
                <Award className="h-5 w-5 text-accent flex-shrink-0" />
                <div>
                  <p className="text-white font-display font-semibold text-sm">5th Rank — Finance Management</p>
                  <p className="text-white/60 text-xs font-body mt-0.5">India's Top 10 Promising Finance Management Universities 2025</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
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
                Placement is an independent activity managed by the career development cell & the students through their nominated committee member, under the guidance of an experienced Placement Coordinator. The activities calendar has incorporated a number of activities designed to promote industry interaction. Relationship building with corporates through rich knowledge exchange helps build trust in DGU's capabilities to nurture talent.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recent Placement News */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Latest Updates</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Recent Placement News</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {newsItems.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-background rounded-2xl overflow-hidden border border-border hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 block"
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

      {/* Placed Students */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Success Stories</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Our Placed Students</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {placedStudents.map((student, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="text-center group">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-primary/20 group-hover:border-primary transition-colors duration-300 shadow-lg shadow-primary/10">
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
      <section className="bg-secondary/30">
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
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Voices</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Student Testimonials</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-secondary/30 rounded-2xl p-8 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
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
