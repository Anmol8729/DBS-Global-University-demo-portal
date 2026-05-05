import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Phone, FileText, Download } from "lucide-react";
import Layout from "@/components/Layout";
import ApplyNowButton from "@/components/ApplyNowButton";

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

const steps = [
  { step: "01", title: "Choose Your Program", desc: "Explore our 80+ programs across 11 schools and find the right fit for your career goals." },
  { step: "02", title: "Online Application", desc: "Fill out the Apply Now form on this page with your personal and academic details — quick, simple, and fully online." },
  { step: "03", title: "Submit Documents", desc: "Upload required documents including mark sheets, ID proof, photographs, and certificates." },
  { step: "04", title: "Counselling & Admission", desc: "Attend the counselling session, receive your offer letter, and confirm your admission by paying the fees." },
];

const eligibility = [
  { program: "BBA / BCA / BA / B.Com", criteria: "10+2 from a recognized board with minimum 50% marks" },
  { program: "B.Tech", criteria: "10+2 with Physics, Chemistry, Mathematics with minimum 50% marks" },
  { program: "B.Pharm", criteria: "10+2 with Physics, Chemistry, Biology/Mathematics with minimum 50% marks" },
  { program: "MBA", criteria: "Graduation from a recognized university with minimum 50% marks" },
  { program: "BA LLB / BBA LLB", criteria: "10+2 from a recognized board with minimum 50% marks" },
  { program: "B.Sc Agriculture / Forestry", criteria: "10+2 with Science stream with minimum 50% marks" },
  { program: "GNM", criteria: "10+2 with Science stream with minimum 40% marks" },
  { program: "D.Pharm", criteria: "10+2 with Physics, Chemistry and Biology/Mathematics" },
];

const brochures = [
  { school: "Main Brochure", desc: "Complete DGU overview", url: "https://dgu.ac/media/downloads/view_book.pdf" },
  { school: "B.Tech Programs", desc: "Doon School of Advanced Computing", url: "https://dgu.ac/media/downloads/brochures/B.Tech_Brochure.pdf" },
  { school: "BBA / MBA", desc: "Doon Business School", url: "https://dgu.ac/media/downloads/brochures/BBA_BBA_MBA.pdf" },
  { school: "B.Com Programs", desc: "Doon Business School", url: "https://dgu.ac/media/downloads/brochures/BCOM.pdf" },
  { school: "Law Programs", desc: "Doon School of Law", url: "https://dgu.ac/media/downloads/brochures/DGU_Law_2026.pdf" },
  { school: "Pharmacy", desc: "DBS School of Pharmacy and Research", url: "https://dgu.ac/media/downloads/brochures/DBS_School_of_Pharmacy_2025.pdf" },
  { school: "MBA Global", desc: "International MBA Program", url: "https://dgu.ac/media/downloads/brochures/MBA_GLOBAL.pdf" },
  { school: "Agriculture", desc: "Doon School of Modern Agriculture", url: "https://dgu.ac/media/downloads/brochures/Modern_Agriculture.pdf" },
  { school: "Mass Communication", desc: "Doon School of Modern Media", url: "https://dgu.ac/media/downloads/brochures/Mass__Comm.pdf" },
];

const Admissions = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  return (
    <Layout>
      <section ref={heroRef} className="relative h-[60vh] flex items-end overflow-hidden">
        <motion.img src="https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/1.jpg" alt="Admissions" className="absolute inset-0 w-full h-full object-cover" style={{ y: heroY }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-6 pb-16">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-accent font-semibold mb-3">Join Us</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Admissions</h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl font-body">Start your journey at DBS Global University. Registration is now open.</p>
            <ApplyNowButton variant="accent" className="mt-6" />
          </ScrollReveal>
        </div>
      </section>

      {/* Admission Process */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">How to Apply</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Admission Process</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-secondary/30 rounded-2xl p-8 border border-border hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 h-full">
                  <div className="text-4xl font-display font-bold text-primary mb-4">{s.step}</div>
                  <h3 className="font-display font-bold text-foreground mb-2">{s.title}</h3>
                  <p className="text-sm text-muted-foreground font-body">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="bg-secondary/30">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Requirements</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Eligibility Criteria</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {eligibility.map((e, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="flex items-start gap-4 bg-background rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-display font-semibold text-foreground text-sm">{e.program}</h4>
                    <p className="text-xs text-muted-foreground mt-1 font-body">{e.criteria}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Download Brochures */}
      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-primary font-semibold mb-3 text-center">Resources</p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground text-center mb-14">Download Brochures</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {brochures.map((b, i) => (
              <ScrollReveal key={i} delay={i * 0.06}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/20 p-5 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                    <FileText className="h-5 w-5 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-semibold text-foreground text-sm">{b.school}</h4>
                    <p className="text-xs text-muted-foreground font-body mt-0.5 truncate">{b.desc}</p>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="container mx-auto px-6 py-20 md:py-28 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">Need Help with Admissions?</h2>
            <p className="text-white/60 mb-8 font-body max-w-xl mx-auto">Our counsellors are available to guide you through the admission process.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ApplyNowButton variant="accent" label="Apply Now" />
              <a href="tel:+917259162060" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold font-body hover:bg-white/20 transition-colors">
                <Phone className="h-4 w-4" /> Speak to Counsellor
              </a>
              <a href="https://dgu.ac/media/downloads/view_book.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white font-semibold font-body hover:bg-white/20 transition-colors">
                <FileText className="h-4 w-4" /> Download Brochure
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </Layout>
  );
};

export default Admissions;
