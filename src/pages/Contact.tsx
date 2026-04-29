import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
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

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your inquiry! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section ref={heroRef} className="relative h-[50vh] flex items-end overflow-hidden">
        <motion.img src="https://www.dgu.ac/thumb/1920x1080/images/header-images/about-us/about-dbsgu/1.jpg" alt="Contact" className="absolute inset-0 w-full h-full object-cover" style={{ y: heroY }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative container mx-auto px-6 pb-16">
          <ScrollReveal>
            <p className="text-sm font-body uppercase tracking-[0.25em] text-accent font-semibold mb-3">Get in Touch</p>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-white">Contact Us</h1>
            <p className="mt-4 text-white/60 text-lg max-w-xl font-body">We're here to help you with any questions.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-background">
        <div className="container mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <ScrollReveal>
                <h2 className="text-2xl font-display font-bold text-foreground mb-8">Get in Touch</h2>
              </ScrollReveal>
              <div className="space-y-4">
                {[
                  { icon: MapPin, title: "Address", content: "Selaqui-Chakrata Road, Selaqui, Dehradun, Uttarakhand - 248011" },
                  { icon: Phone, title: "Phone", content: "Reception: 0135-6141300 | Admission: +91 7259162060" },
                  { icon: Mail, title: "Email", content: "info@dgu.ac" },
                  { icon: Clock, title: "Office Hours", content: "Monday - Saturday: 9:00 AM - 5:00 PM" },
                ].map((item, i) => (
                  <ScrollReveal key={i} delay={i * 0.1}>
                    <div className="flex items-start gap-4 p-5 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 bg-background">
                      <div className="w-11 h-11 rounded-xl bg-primary flex items-center justify-center shrink-0">
                        <item.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground text-sm">{item.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1 font-body">{item.content}</p>
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            <ScrollReveal delay={0.2}>
              <div className="bg-secondary/30 rounded-2xl p-8 border border-border">
                <h2 className="text-2xl font-display font-bold text-foreground mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { label: "Full Name", type: "text", key: "name", placeholder: "Your full name" },
                    { label: "Email", type: "email", key: "email", placeholder: "your@email.com" },
                    { label: "Phone", type: "tel", key: "phone", placeholder: "+91 XXXXXXXXXX" },
                  ].map((field) => (
                    <div key={field.key}>
                      <label className="text-sm font-medium text-foreground mb-1 block font-body">{field.label}</label>
                      <input
                        type={field.type}
                        required={field.key !== "phone"}
                        value={formData[field.key as keyof typeof formData]}
                        onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all font-body"
                        placeholder={field.placeholder}
                      />
                    </div>
                  ))}
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block font-body">Message</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none font-body"
                      placeholder="Your message..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 rounded-full bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:bg-purple-vivid transition-colors font-body"
                  >
                    Send Message <Send className="h-4 w-4" />
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      <section className="h-[400px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.831!2d77.8655!3d30.3577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sDBS+Global+University+Dehradun!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
          className="w-full h-full border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DBS Global University Location"
        />
      </section>
    </Layout>
  );
};

export default Contact;
