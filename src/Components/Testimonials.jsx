import { useState, useEffect} from "react";
import { Star, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";


const TESTIMONIALS = [
    {
      name: "Emily Jeff",
      role: "CEO, TheWebAgency",
      quote:
        "GR Jain & Associates turned our messy books into a system we actually trust. Filings are on time, every time.",
    },
    {
      name: "Hamza Malik",
      role: "Manager, TheMarkTech",
      quote:
        "Their GST advisory saved us from two compliance notices this year alone. Responsive and precise.",
    },
    {
      name: "Elizabeth Rai",
      role: "Developer, i2c Company",
      quote:
        "The audit process was thorough but never disruptive. They explain findings in plain language, not jargon.",
    },
    {
      name: "Sara Thomas",
      role: "Accountant, TheConstruction Co.",
      quote:
        "Consistent, detail-oriented, and genuinely invested in our long-term financial planning.",
    },
  ];




const Testimonials = () => {


    const [activeTestimonial, setActiveTestimonial] = useState(0);

useEffect(() => {
    const t = setInterval(() => {
      setActiveTestimonial((i) => (i + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <div>
    <section className="bg-[#FBFAF6] px-5 sm:px-8 py-16 sm:py-[88px]">
        <div className="max-w-[1180px] mx-auto">
          <Reveal as="div" className="text-center mb-14">
            <h2 className="font-['Fraunces',serif] font-medium text-[28px] sm:text-[48px] text-[#141414] tracking-[-0.01em]">
              Client Testimonials
            </h2>
          </Reveal>
          <div className="max-w-[640px] mx-auto text-center">
            <div className="flex justify-center gap-[3px] text-[#E8873A] mb-5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
              ))}
            </div>
            <p className="font-['Fraunces',serif] italic text-[19px] sm:text-2xl text-[#17395A] leading-relaxed mb-6">
              &ldquo;{TESTIMONIALS[activeTestimonial].quote}&rdquo;
            </p>
            <p className="font-semibold text-sm m-0">{TESTIMONIALS[activeTestimonial].name}</p>
            <p className="text-[13px] text-[#5B6472] mt-0.5 mb-6">{TESTIMONIALS[activeTestimonial].role}</p>
            <div className="flex justify-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Show testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-[background,width] duration-200 ${
                    i === activeTestimonial ? "bg-[#17395A] w-[22px] rounded" : "bg-[#E4E0D5] w-2"
                  }`}
                  onClick={() => setActiveTestimonial(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="bg-slate-900 px-5 sm:px-8 py-20 text-center">
        <div className="max-w-[560px] mx-auto flex flex-col items-center gap-4">
          <h2 className="font-['Fraunces',serif] font-medium text-[28px] sm:text-[40px] text-white tracking-[-0.01em]">
            Ready to put your finances in order?
          </h2>
          <p className="text-white/75 text-[15px] mb-2">
            Book a no-obligation consultation with a senior partner this week.
          </p>
          <a
            href=""
            className="inline-flex items-center gap-2 rounded-md bg-white text-[#17395A] text-sm font-bold px-6 py-[13px] hover:bg-[#FBFAF6] transition-colors"
          >
            Schedule a Consultation <ArrowRight size={16} />
          </a>
        </div>
      </section>
      </div>
  )
}

export default Testimonials