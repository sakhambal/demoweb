import Reveal from "./Reveal";
import { CheckCircle2, ArrowUpRight, Calculator, Receipt, BookOpenCheck, ShieldCheck, ClipboardList, PiggyBank } from "lucide-react";

const SERVICES = [
    {
      icon: Calculator,
      title: "Taxation",
      desc: "Stay compliant while capturing every legitimate saving, with planning and filings that never miss a deadline.",
      items: ["Income Tax Returns", "Tax Planning", "Tax Advisory", "Capital Gains Tax", "NRI Taxation"],
    },
    {
      icon: Receipt,
      title: "GST",
      desc: "End-to-end GST solutions that keep your operations compliant and running without friction.",
      items: ["GST Registration", "Return Filing", "GST Compliance", "Advisory & Notice Assistance"],
    },
    {
      icon: BookOpenCheck,
      title: "Accounting",
      desc: "Accurate books that give you clarity, control, and confidence in every business decision.",
      items: ["Bookkeeping", "Payroll Processing", "Financial Statements", "MIS Reporting", "Accounts Finalization"],
    },
    {
      icon: ShieldCheck,
      title: "Audit",
      desc: "Independent audit work that strengthens transparency, compliance, and stakeholder trust.",
      items: ["Statutory Audit", "Internal Audit", "Tax Audit", "Compliance Review", "Management Audit"],
    },
    {
      icon: ClipboardList,
      title: "Consultation",
      desc: "Practical guidance that helps businesses operate efficiently and stay financially organised.",
      items: ["Project Reports", "CMA Reports", "Business Valuation", "Financial Due Diligence", "Startup Advisory"],
    },
    {
      icon: PiggyBank,
      title: "Planning",
      desc: "Personalised financial strategy built to protect wealth and support long-term goals.",
      items: ["Investment Planning", "Wealth Structuring", "Estate Planning", "Insurance Advisory", "Retirement Planning"],
    },
  ];

const Services = () => {
  return (
    <div>
         <section id="services" className="px-5 sm:px-8 py-16 sm:py-[88px] max-w-[1180px] mx-auto">
        <Reveal as="div" className="text-center mb-14">
          <h2 className="font-['Fraunces',serif] font-medium text-6xl sm:text-[52px] text-[#141414] tracking-[-0.01em]">
            Our Services
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, i) => (
            <Reveal
              key={s.title}
              delay={i * 60}
              className="border border-[#E4E0D5] p-7 bg-white flex flex-col hover:border-[#2C5D8A] hover:-translate-y-[3px] transition-[border-color,transform] duration-200 rounded-2xl"
            >
              <div className="flex items-center justify-start gap-6 mb-[18px]">
                <span className="w-10 h-10 rounded-[3px] bg-[#141414] text-white flex items-center justify-center">
                  <s.icon size={20} strokeWidth={1.75} />
                </span>
                <h3 className="font-['Fraunces',serif] font-bold text-3xl text-[#141414]">{s.title}</h3>
              </div>
              
              <p className="text-md text-[#111111] leading-relaxed mb-4">{s.desc}</p>
              <ul className="flex flex-col gap-2 mb-5 grow">
                {s.items.map((it) => (
                  <li key={it} className="flex items-center gap-2 text-[13px] text-[#3d3a3a]">
                    <CheckCircle2 size={14} strokeWidth={2} className="text-[#4C9A5B] shrink-0" />
                    {it}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="bg-gray-300 rounded-lg text-[13px] font-bold text-[#272727] h-9 w-full flex justify-center items-center gap-1.5 hover:text-[#E8873A] transition-colors"
              >
                Learn More <ArrowUpRight size={14} />
              </a>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Services