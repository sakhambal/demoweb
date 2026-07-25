import Reveal from "./Reveal";

const PROCESS = [
    {
      n: "01",
      title: "Understand",
      desc: "We take the time to understand your business, financial objectives, current challenges, and long-term vision before recommending any solution.",
    },
    {
      n: "02",
      title: "Plan",
      desc: "Based on your requirements, we develop a tailored strategy that aligns with your goals while ensuring full compliance with the latest regulations.",
    },
    {
      n: "03",
      title: "Execute",
      desc: "Our team manages every part of the engagement with precision — from registrations and filings to audits and reporting — keeping you informed throughout.",
    },
    {
      n: "04",
      title: "Support",
      desc: "Our commitment doesn't end at delivery. We provide ongoing guidance, timely reminders, and strategic advice to help your business grow with confidence.",
    },
  ];

const Process = () => {
  return (
    <div>
         <section id="about" className="bg-[#FBFAF6] px-5 sm:px-8 py-16 sm:py-[88px]">
        <div className="max-w-[1180px] mx-auto">
          <Reveal as="div" className="text-center mb-14">
            <p className="font-['IBM_Plex_Mono',monospace] text-xs tracking-[0.14em] uppercase text-[#E8873A] mb-3.5">
              Our process
            </p>
            <h2 className="font-['Fraunces',serif] font-medium text-[28px] sm:text-[40px] text-[#17395A] tracking-[-0.01em]">
              How We Work
            </h2>
          </Reveal>
          <div className="flex flex-col max-w-[720px] mx-auto border-l border-[#E4E0D5] pl-8 sm:pl-10">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 90} className="relative pb-11 last:pb-0">
                <div className="absolute -left-[46px] sm:-left-[61px] top-0 w-[34px] h-[34px] sm:w-[42px] sm:h-[42px] rounded-full bg-[#17395A] text-white flex items-center justify-center font-['IBM_Plex_Mono',monospace] text-[11px] sm:text-[13px] font-medium">
                  <span>{p.n}</span>
                </div>
                <div>
                  <h3 className="font-['Fraunces',serif] font-medium text-xl text-[#17395A] mt-0.5 mb-2">
                    {p.title}
                  </h3>
                  <p className="text-sm text-[#5B6472] leading-relaxed max-w-[520px] m-0">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Process