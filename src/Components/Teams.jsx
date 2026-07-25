import Reveal from "./Reveal";

const TEAM = [
  {
    id: "T-01",
    name: "Girish R. Jain",
    role: "Founder & Managing Partner",
    creds: "FCA, DISA",
    focus:
      "25+ years advising businesses on tax strategy and financial governance.",
    initials: "GJ",
  },
  {
    id: "T-02",
    name: "Ananya Deshpande",
    role: "Partner, Audit & Assurance",
    creds: "FCA, CIA",
    focus:
      "Leads statutory and internal audit engagements across manufacturing and retail clients.",
    initials: "AD",
  },
  {
    id: "T-03",
    name: "Rohan Mehta",
    role: "Senior Manager, Taxation",
    creds: "ACA, LLB",
    focus:
      "Specialises in corporate tax planning, NRI taxation, and litigation support.",
    initials: "RM",
  },
  {
    id: "T-04",
    name: "Priya Nair",
    role: "Manager, GST & Compliance",
    creds: "ACA",
    focus:
      "Manages GST advisory, registrations, and compliance for growing startups.",
    initials: "PN",
  },
];

const Teams = () => {
  return (
    <div>
      <section
        id="team"
        className="px-5 sm:px-8 py-16 sm:py-[88px] max-w-[1180px] mx-auto"
      >
        <Reveal as="div" className="text-center mb-14">
          <h2 className="font-['Fraunces',serif] font-medium text-[28px] sm:text-[40px] text-[#17395A] tracking-[-0.01em]">
            Our Team
          </h2>
          <p className="text-[#5B6472] max-w-[480px] mx-auto mt-3.5 text-[15px]">
            A small, senior team &mdash; every engagement is led by someone who
            signs their name to the work.
          </p>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {TEAM.map((m, i) => (
            <Reveal
              key={m.id}
              delay={i * 70}
              className="border border-[#E4E0D5] rounded-[4px] p-6 bg-white hover:border-[#2C5D8A] hover:-translate-y-[3px] transition-[border-color,transform] duration-200"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="w-[52px] h-[52px] rounded-full bg-[#17395A] text-white flex items-center justify-center font-['Fraunces',serif] text-[17px] font-medium ring-4 ring-[#FBFAF6] shadow-[0_0_0_1px_#E4E0D5]">
                  {m.initials}
                </span>
                <span className="font-['IBM_Plex_Mono',monospace] text-[11px] text-[#5B6472]">
                  {m.id}
                </span>
              </div>
              <h3 className="font-['Fraunces',serif] font-medium text-lg text-[#17395A] mb-1">
                {m.name}
              </h3>
              <p className="text-[13px] font-semibold text-[#E8873A] mb-1">
                {m.role}
              </p>
              <p className="font-['IBM_Plex_Mono',monospace] text-[11px] text-[#5B6472] mb-3">
                {m.creds}
              </p>
              <p className="text-[13px] text-[#5B6472] leading-relaxed">
                {m.focus}
              </p>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Teams;
