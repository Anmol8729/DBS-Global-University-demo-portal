import { Link } from "react-router-dom";
import dbsLogo from "@/assets/dbs-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-6 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div>
            <img
              src={dbsLogo}
              alt="DBS Global University"
              className="h-12 brightness-0 invert mb-6"
            />
            <p className="text-white/35 text-sm leading-relaxed font-body">
              Selaqui-Chakrata Road, Selaqui,<br />
              Dehradun, Uttarakhand - 248011
            </p>
            <div className="mt-5 space-y-2">
              <a href="tel:01356141300" className="block text-sm text-white/35 hover:text-accent transition-colors font-body">Reception: 0135-6141300</a>
              <a href="tel:+917259162060" className="block text-sm text-white/35 hover:text-accent transition-colors font-body">Admissions: +91 7259162060</a>
              <a href="mailto:admissions@dgu.ac" className="block text-sm text-white/35 hover:text-accent transition-colors font-body">admissions@dgu.ac</a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-6 text-white/80">Study</h4>
            <ul className="space-y-3">
              {[
                { label: "All Programs", path: "/programs" },
                { label: "Undergraduate", path: "/programs#undergraduate" },
                { label: "Postgraduate", path: "/programs#postgraduate" },
                { label: "Admissions", path: "/admissions" },
                { label: "Scholarships", path: "/admissions#scholarships" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/35 hover:text-accent transition-colors font-body">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-6 text-white/80">About DGU</h4>
            <ul className="space-y-3">
              {[
                { label: "About Us", path: "/about" },
                { label: "Placements", path: "/placements" },
                { label: "Campus Life", path: "/campus-life" },
                { label: "Academics", path: "/academics" },
                { label: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-white/35 hover:text-accent transition-colors font-body">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-sm font-semibold mb-6 text-white/80">Our Schools</h4>
            <ul className="space-y-3">
              {[
                "Doon Business School",
                "Advanced Computing",
                "Liberal Studies",
                "Pharmacy & Research",
                "Modern Media",
                "Agriculture",
                "Law",
                "Nursing",
              ].map((school) => (
                <li key={school}>
                  <Link to="/programs" className="text-sm text-white/35 hover:text-accent transition-colors font-body">{school}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/8">
        <div className="container mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25 font-body">&copy; {new Date().getFullYear()} DBS Global University. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/about" className="text-xs text-white/25 hover:text-accent transition-colors font-body">Privacy Policy</Link>
            <Link to="/about" className="text-xs text-white/25 hover:text-accent transition-colors font-body">Terms of Use</Link>
            <Link to="/about" className="text-xs text-white/25 hover:text-accent transition-colors font-body">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
