import { ArrowRight } from "lucide-react";

const GLOBE_SRC = "./src/assets/Globe Mesh.png";

const Hero = () => {
  return (
    <div>
      <section
        id="home"
        className="relative overflow-hidden px-5 sm:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16"
      >
        {GLOBE_SRC && (
          <img
            src={GLOBE_SRC}
            alt=""
            className="absolute -top-10 -right-16 w-75 sm:w-120 max-w-[60vw] opacity-90 pointer-events-none"
            aria-hidden="true"
          />
        )}
        <div className="max-w-295 mx-auto relative z-10 text-center">
          <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.14em] uppercase text-[#E8873A] mb-3.5">
            Chartered Accountants &mdash; Mumbai
          </p>
          <h1 className="hero-txt text-pretty text-[36px] sm:text-[48px] lg:text-[60px] leading-[1.08] tracking-[-0.015em] mx-auto mb-5 text-[#17395A] max-w-[780px]">
            Helping Businesses Grow with Confidence.
          </h1>
          <p className="text-[17px] text-pretty text-[#5B6472] max-w-[560px] mx-auto mb-8 leading-relaxed">
            Trusted chartered accountants delivering expert tax, accounting,
            compliance, and advisory services for ambitious businesses and
            individuals.
          </p>
          <div className="flex justify-center gap-3.5 flex-wrap mb-16">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-[3px] bg-[#E8873A] text-[#141414] text-sm font-semibold px-6 py-[13px] hover:bg-[#f89747] transition-colors"
            >
              Schedule a Consultation <ArrowRight size={16} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-[3px] border border-[#E4E0D5] text-[#17395A] text-sm font-semibold px-6 py-[13px] hover:border-[#17395A] transition-colors"
            >
              Our Services
            </a>
          </div>

          <div className="flex justify-center gap-14 pt-10 border-t border-[#E4E0D5] max-w-[780px] mx-auto flex-wrap">
            <div className="flex flex-col gap-1">
              <span className="font-['Fraunces',serif] font-semibold text-[28px] text-[#17395A]">
                18+
              </span>
              <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#5B6472] tracking-wide">
                Years in practice
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-['Fraunces',serif] font-semibold text-[28px] text-[#17395A]">
                400+
              </span>
              <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#5B6472] tracking-wide">
                Clients served
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-['Fraunces',serif] font-semibold text-[28px] text-[#17395A]">
                ₹120Cr
              </span>
              <span className="font-['IBM_Plex_Mono',monospace] text-xs text-[#5B6472] tracking-wide">
                Assets under advisory
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
