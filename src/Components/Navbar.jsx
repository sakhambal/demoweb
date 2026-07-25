import { useState, useEffect } from "react";
import { X, Menu } from "lucide-react";
import  logo  from "../assets/CA_Logo.png"

const LOGO_SRC = "";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div>
      <header
        className={`sticky top-0 z-100 bg-white/90 backdrop-blur-md border-b transition-colors duration-200 ${
          scrolled ? "border-[#E4E0D5]" : "border-transparent"
        }`}
      >
        <div className="max-w-295 mx-auto flex items-center gap-8 px-5 sm:px-8 py-4">
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            {logo && (
              <img
                src={logo}
                alt="CA India logo"
                className="h-8 w-auto block"
              />
            )}
            <span className="font-['Fraunces',serif] font-medium text-lg text-[#17395A]">
              GR Jain <span className="text-[#E8873A] italic">&amp;</span>{" "}
              Associates
            </span>
          </a>
          <nav className="hidden [@media(min-width:861px)]:flex gap-7 ml-auto text-sm font-medium text-[#5B6472]">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-[#17395A] transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden [@media(min-width:861px)]:inline-flex items-center gap-2 rounded-[3px] bg-[#17395A] text-white text-sm font-semibold px-4.5 py-2.5 hover:bg-[#0F2A42] transition-colors"
          >
            Schedule a Consultation
          </a>
          <button
            className="[@media(min-width:861px)]:hidden ml-auto text-[#17395A]"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="[@media(min-width:861px)]:hidden flex flex-col gap-1 px-5 sm:px-8 pb-5 pt-3 border-t border-[#E4E0D5]">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="py-2.5 text-[15px] text-[#17395A] font-medium"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2.5 inline-flex items-center justify-center gap-2 rounded-[3px] bg-[#17395A] text-white text-sm font-semibold px-6 py-3"
            >
              Schedule a Consultation
            </a>
          </div>
        )}
      </header>
    </div>
  );
};

export default Navbar;
