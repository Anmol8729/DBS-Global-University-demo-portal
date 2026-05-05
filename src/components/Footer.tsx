import { Link } from "react-router-dom";
import { Download } from "lucide-react";
import dbsLogo from "@/assets/dbs-logo.png";

/* ── Social icon SVGs ── */
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

const socialLinks = [
  { label: "WhatsApp", href: "https://api.whatsapp.com/send/?phone=917060754111", icon: WhatsAppIcon },
  { label: "Facebook", href: "https://www.facebook.com/doonbusinesss", icon: FacebookIcon },
  { label: "Twitter / X", href: "https://twitter.com/DoonBSchool", icon: TwitterIcon },
  { label: "YouTube", href: "https://www.youtube.com/channel/UCSJuj8YqpdJAgjQruqaweJA", icon: YouTubeIcon },
  { label: "Instagram", href: "https://www.instagram.com/doonbusinesschool/", icon: InstagramIcon },
];

const Footer = () => {
  return (
    <footer className="footer-animated-bg text-white">
      {/* Gold accent line at top */}
      <div className="h-[3px] w-full bg-gradient-to-r from-transparent via-accent to-transparent" />
      <div className="container mx-auto px-6 pt-20 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">
          <div>
            <img src={dbsLogo} alt="DBS Global University" className="h-12 brightness-0 invert mb-6" />
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
                { label: "Undergraduate", path: "/programs#business" },
                { label: "Postgraduate", path: "/programs#computing" },
                { label: "Admissions", path: "/admissions" },
                { label: "PhD Programs", path: "/academics" },
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
                "Hotel Management",
                "Health Sciences",
                "Nursing",
              ].map((school) => (
                <li key={school}>
                  <Link to="/programs" className="text-sm text-white/35 hover:text-accent transition-colors font-body">{school}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links + Brochure Row */}
        <div className="mt-14 pt-10 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <span className="text-xs font-body font-semibold uppercase tracking-[0.2em] text-white/40">Follow Us</span>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/[0.08] text-white/50 transition-all duration-300 hover:border-accent/50 hover:bg-accent/15 hover:text-accent"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
          <a
            href="https://dgu.ac/media/downloads/view_book.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-5 py-2.5 text-xs font-body font-semibold uppercase tracking-[0.18em] text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground"
          >
            <Download className="h-3.5 w-3.5" /> Download Brochure
          </a>
        </div>
      </div>

      <div className="border-t border-white/[0.08]">
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
