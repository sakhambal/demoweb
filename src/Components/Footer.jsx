import {   MapPin,
    Mail,
    Phone,} from 'lucide-react'

const GLOBE_SRC = "./src/assets/globe.svg";
const LOGO_SRC = "./src/assets/CA_Logo.png";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-b from-slate-900 to-blue-800 text-white/80 px-5 sm:px-8 pt-16 overflow-hidden">
    {GLOBE_SRC && (
      <img
        src={GLOBE_SRC}
        alt=""
        className="absolute -bottom-20 -right-16 w-[380px] max-w-[50vw] opacity-35 invert brightness-[1.6] pointer-events-none"
        aria-hidden="true"
      />
    )}
    <div className="max-w-[1180px] mx-auto relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 pb-12">
      <div>
        <div className="flex items-center gap-2.5">
          {LOGO_SRC && <img src={LOGO_SRC} alt="CA India logo" className="h-8 w-auto block brightness-0 invert" />}
          <span className="font-['Fraunces',serif] font-medium text-lg text-white">
            GR Jain <span className="text-[#E8873A] italic">&amp;</span> Associates
          </span>
        </div>
        <p className="text-[13px] leading-relaxed mt-3.5 max-w-65">
          Expert financial solutions and chartered accounting services for businesses and individuals.
        </p>
        <p className="flex items-center gap-2 text-[13px] leading-relaxed mt-3.5 max-w-[260px]">
          <Mail size={14} /> ca@GRJain.com
        </p>
        <p className="flex items-center gap-2 text-[13px] leading-relaxed mt-3.5 max-w-[260px]">
          <Phone size={14} /> +11 223 344 556
        </p>
        <p className="flex items-center gap-2 text-[13px] leading-relaxed mt-3.5 max-w-[260px]">
          <MapPin size={14} /> 48, JSS Road, Mumbai
        </p>
      </div>

      <div>
        <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.08em] uppercase text-[#E8873A] mb-4">
          Services
        </h4>
        <ul className="flex flex-col gap-2.5 text-[13px]">
          <li>Tax Planning &amp; Preparation</li>
          <li>Financial Statement Auditing</li>
          <li>Business Advisory Services</li>
          <li>Financial Planning</li>
          <li>Risk Management</li>
          <li>Payroll &amp; HR Compliance</li>
        </ul>
      </div>

      <div>
        <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.08em] uppercase text-[#E8873A] mb-4">
          Industries
        </h4>
        <ul className="flex flex-col gap-2.5 text-[13px]">
          <li>Technology</li>
          <li>Construction</li>
          <li>Healthcare</li>
          <li>Manufacturing</li>
          <li>Professional Services</li>
          <li>Retail &amp; Real Estate</li>
        </ul>
      </div>

      <div>
        <h4 className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.08em] uppercase text-[#E8873A] mb-4">
          Connect
        </h4>
        <ul className="flex flex-col gap-2.5 text-[13px]">
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              LinkedIn Profile
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors">
              Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="relative z-10 border-t border-white/10 py-[22px] max-w-[1180px] mx-auto flex flex-col sm:flex-row justify-between gap-5 text-xs text-white/50">
      <p>&copy; 2025 GR Jain &amp; Associates, Chartered Accountants. All rights reserved.</p>
      <p className="max-w-[640px] sm:text-right">
        Licensed Chartered Accountant &bull; Member of Institute of Chartered Accountants &bull;
        Professional Indemnity Insurance Coverage &bull; All client information treated with
        strict confidentiality
      </p>
    </div>
  </footer>
  )
}

export default Footer