import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import dbsLogo from "@/assets/dbs-logo.png";
import ApplyNowModal from "./ApplyNowModal";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "Study",
    path: "/programs",
    children: [
      { label: "Undergraduate Programs", path: "/programs#undergraduate" },
      { label: "Postgraduate Programs", path: "/programs#postgraduate" },
      { label: "Doon Business School", path: "/programs#business" },
      { label: "School of Advanced Computing", path: "/programs#computing" },
      { label: "School of Liberal Studies", path: "/programs#liberal" },
      { label: "School of Pharmacy", path: "/programs#pharmacy" },
      { label: "School of Modern Media", path: "/programs#media" },
      { label: "School of Agriculture", path: "/programs#agriculture" },
      { label: "School of Law", path: "/programs#law" },
      { label: "School of Nursing", path: "/programs#nursing" },
    ],
  },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Overview", path: "/about" },
      { label: "Vision & Mission", path: "/about#vision" },
      { label: "Leadership", path: "/about#leadership" },
      { label: "Accreditations", path: "/about#accreditations" },
    ],
  },
  {
    label: "Research",
    path: "/academics",
    children: [
      { label: "Academic Excellence", path: "/academics" },
      { label: "Faculty", path: "/academics#faculty" },
      { label: "Collaborations", path: "/academics#collaborations" },
    ],
  },
  { label: "Placements", path: "/placements" },
  { label: "Campus Life", path: "/campus-life" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [applyOpen, setApplyOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/85 backdrop-blur-xl shadow-lg shadow-primary/5 border-b border-border"
          : "bg-white/70 backdrop-blur-xl"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        <Link to="/" className="flex items-center">
          <img
            src={dbsLogo}
            alt="DBS Global University"
            className="h-10 md:h-12 transition-all duration-300"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setActiveDropdown(item.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.path}
                className={`px-4 py-2 text-[14px] font-body font-semibold uppercase tracking-wide transition-colors flex items-center gap-1 ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-foreground/70 hover:text-primary"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="h-3.5 w-3.5 ml-0.5" />}
              </Link>

              <AnimatePresence>
                {item.children && activeDropdown === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full left-0 mt-0 bg-white rounded-xl shadow-2xl shadow-primary/10 border border-border p-2 min-w-[260px]"
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm font-body text-foreground/60 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

          <button
            onClick={() => setApplyOpen(true)}
            className="ml-6 px-6 py-2.5 bg-primary text-primary-foreground text-xs font-bold font-body uppercase tracking-wider rounded-full hover:bg-purple-vivid transition-colors"
          >
            Apply Now
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-foreground"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden overflow-hidden bg-white border-t border-border"
          >
            <div className="container mx-auto px-6 py-6 space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <Link
                    to={item.path}
                    className="block px-4 py-3 text-base font-body font-medium text-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </div>
              ))}
              <button
                onClick={() => { setIsOpen(false); setApplyOpen(true); }}
                className="block w-full text-center mt-6 px-5 py-3 bg-primary text-primary-foreground text-sm font-bold font-body rounded-full"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <ApplyNowModal open={applyOpen} onOpenChange={setApplyOpen} />
    </nav>
  );
};

export default Navbar;
