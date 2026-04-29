import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Calendar, Users, Music, Trophy, Heart, Palette } from "lucide-react";
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

const activities = [
  { icon: Music, title: "Cultural Events", desc: "Festivals, music nights, dance competitions, and cultural celebrations throughout the year." },
  { icon: Trophy, title: "Sports", desc: "State-of-the-art sports facilities with inter-university competitions in cricket, football, basketball, and more." },
  { icon: Users, title: "Clubs & Societies", desc: "Student-run clubs for debate, photography, tech, entrepreneurship, and community service." },
  { icon: Heart, title: "Community Service", desc: "Blood donation drives, mental health awareness events, and social outreach programs." },
  { icon: Palette, title: "Creative Arts", desc: "Film-making, digital media production, and creative expression through the School of Modern Media." },
  { icon: Calendar, title: "Campus Events", desc: "Regular workshops, seminars, guest lectures, and industry connect programs." },
];

const galleryImages = [
  "https://www.dgu.ac/thumb/700x700/images/pictures/header-pictures/29.jpg",
  "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/10.jpg",
  "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/8.jpg",
  "https://www.dgu.ac/thumb/700x350/images/pictures/header-pictures/33.jpg",
  "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/16.jpg",
  "https://www.dgu.ac/thumb/350x350/images/pictures/header-pictures/9.jpg",
];

const recentEvents = [
  { date: "18 Feb 2026", title: "Mental Health Awareness Event Draws Community Focus on Emotional Well-Being", desc: "We organised an expert session on Mental Health, drawing community focus on emotional well-being." },
  { date: "11 Feb 2026", title: "Viksit Bharat Yuva Connect Program", desc: "We organised the Viksit Bharat Yuva Connect Program, engaging youth in national development." },
  { date: "11 Feb 2026", title: "Blood Donation Drive at DBS Global University", desc: "A Blood Donation Drive was organised, drawing active participation from students and staff." },
];

const CampusLife = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <Layout>
      <section ref={heroRef} className="relative h-[60vh] flex items-end overflow-hidden">
        <motion.img src="https://www.dgu.ac/images/pictures/grid_02.jpg" alt="Campus Life" className="absolute inset-0 w-full h-full object-cover" style={{ y: heroY }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-6 pb-16">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-accent font-semibold mb-3">Student Experience</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Life at DGU</h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl font-body">Buzzing campus life with events, activities, and a vibrant student culture.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Activities */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">What We Offer</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Campus Activities</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activities.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="bg-secondary/30 rounded-2xl p-8 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="w-14 h-14 rounded-2xl bg-primary flex items-center justify-center mb-5">
                    <a.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-display font-bold text-foreground mb-2 text-lg">{a.title}</h3>
                  <p className="text-sm text-muted-foreground font-body leading-relaxed">{a.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Gallery</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Campus Gallery</h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="rounded-2xl overflow-hidden aspect-video relative group cursor-pointer">
                  <img src={img} alt={`Campus ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/30 transition-colors duration-500" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">360 Virtual Tour</h2>
            <p className="text-white/60 mb-10 font-body max-w-xl mx-auto">Explore the DBS Global University campus from anywhere with our immersive 360 virtual tour.</p>
            <div className="max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border-2 border-white/10">
              <iframe
                src="https://walkinside.s3.ap-south-1.amazonaws.com/dbs/index.html"
                title="Campus Tour"
                className="w-full h-full"
                allow="fullscreen; gyroscope; accelerometer"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Recent Events */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Updates</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Campus & Events</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentEvents.map((e, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-secondary/30 rounded-2xl p-8 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 h-full">
                  <span className="text-xs text-primary font-body font-medium">{e.date}</span>
                  <h3 className="font-display font-semibold text-foreground text-sm mt-2 mb-3">{e.title}</h3>
                  <p className="text-xs text-muted-foreground font-body leading-relaxed">{e.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CampusLife;
