import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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

const heroCampus = "https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/1.jpg";

const About = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <Layout>
      {/* Hero — Parallax */}
      <section ref={heroRef} className="relative h-[60vh] flex items-end overflow-hidden">
        <motion.img src={heroCampus} alt="DGU Campus" className="absolute inset-0 w-full h-full object-cover" style={{ y: heroY }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-6 pb-16">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-accent font-semibold mb-3">About Us</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">
              About DBS Global University
            </h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl font-body">
              Learn about our vision, mission, and the values that drive DBS Global University.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <img src={heroCampus} alt="Campus" className="rounded-2xl shadow-xl w-full" loading="lazy" />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                A Beacon for Creative Dreamers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4 font-body">
                DBS Global University in Dehradun stands as a beacon for creative dreamers, recognizing that those who dare to venture into uncharted territory are the true architects of the future. At the heart of this academic institution lies a transformative learning experience, built around student centricity.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4 font-body">
                DGU is equipped with state-of-the-art educational and training facilities supervised and coordinated by highly trained coordinators. Everything you need to obtain a world-class education is available at DBSGU.
              </p>
              <p className="text-muted-foreground leading-relaxed font-body">
                The university offers eleven schools with over 80 programs, partnering with industry leaders like HCLTech and ICAI to deliver practical, industry-relevant education.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Our Purpose</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Vision & Mission</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={0.1}>
              <div className="bg-background rounded-2xl p-8 md:p-10 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <span className="text-white font-display font-bold text-xl">V</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  To be a globally recognized university that fosters innovation, creativity, and excellence in education, research, and community service. We envision nurturing future leaders who will contribute positively to society and drive sustainable development.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="bg-background rounded-2xl p-8 md:p-10 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-6">
                  <span className="text-white font-display font-bold text-xl">M</span>
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed font-body">
                  To provide a transformative learning experience built around student centricity, innovative pedagogy, and industry partnerships. We are committed to developing the intellectual, ethical, and social capabilities of our students through contemporary curricula, certified training programs, and future skill development.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-14 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "11", label: "Schools" },
              { value: "350+", label: "Recruiting Companies" },
              { value: "80+", label: "Programs" },
              { value: "5th", label: "Finance Mgmt Ranking" },
            ].map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-display font-bold text-white">{s.value}</div>
                  <p className="text-white/60 mt-2 text-sm font-body uppercase tracking-wider">{s.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
          {/* Recognition row */}
          <ScrollReveal delay={0.4}>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "India Today Ranked", desc: "Best Institution in North India for Management Programs" },
                { title: "5th — Finance Management", desc: "India's Top 10 Promising Finance Management Universities 2025" },
                { title: "EAIE 2025 — Sweden", desc: "International presence at the European Association for International Education Conference" },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/8 px-5 py-4">
                  <div className="mt-0.5 h-2 w-2 rounded-full bg-accent flex-shrink-0" />
                  <div>
                    <p className="text-white font-display font-semibold text-sm">{r.title}</p>
                    <p className="text-white/55 text-xs font-body mt-0.5 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Leadership */}
      <section id="leadership" className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Our Team</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Our Leadership</h2>
          </ScrollReveal>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Chancellor", role: "Leading the vision and strategic direction of the university" },
              { name: "Vice Chancellor", role: "Overseeing academic excellence and research initiatives" },
              { name: "Registrar", role: "Managing administrative operations and student affairs" },
            ].map((leader, i) => (
              <ScrollReveal key={i} delay={i * 0.15}>
                <div className="text-center bg-secondary/30 rounded-2xl p-8 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2">
                  <div className="w-20 h-20 rounded-full bg-primary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-display font-bold">
                    {leader.name.charAt(0)}
                  </div>
                  <h3 className="font-display font-semibold text-foreground text-lg">{leader.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2 font-body">{leader.role}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
