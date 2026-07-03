import ConsultationForm from "./ConsultationForm";
import HelpCarousel from "./HelpCarousel";
import HeroBanner from "./HeroBanner";

const helpItems = [
  {
    title: "Starting a non-profit organization",
    subtitle: "Turn a real student-led mission into programs, partnerships, and measurable impact.",
    image: "/help-carousel/nonprofit.jpg",
  },
  {
    title: "Presenting at research conferences",
    subtitle: "Shape independent work into a polished abstract, poster, talk, and follow-up story.",
    image: "/help-carousel/research-conference.jpg",
  },
  {
    title: "Competing at hackathons",
    subtitle: "Pick stronger problems, build quickly, and present the product with technical clarity.",
    image: "/help-carousel/startup-upright.jpg",
  },
  {
    title: "Working at a startup",
    subtitle: "Find useful roles, document ownership, and translate shipped work into application proof.",
    image: "/help-carousel/startup-upright.jpg",
  },
  {
    title: "Competing in Olympiads",
    subtitle: "Build a practice system for advanced contests, qualification ladders, and review cycles.",
    image: "/help-carousel/nonprofit.jpg",
  },
  {
    title: "Winning club competitions",
    subtitle: "Prepare cases, pitches, roleplays, and leadership narratives that stand out to judges.",
    image: "/help-carousel/competition.jpg",
  },
  {
    title: "Researching in a lab",
    subtitle: "Plan mentor outreach, methods, documentation, and credible next steps for publication.",
    image: "/help-carousel/research-conference.jpg",
  },
];

const processSteps = [
  {
    action: "Ideate",
    detail: "your student's storyline",
    body: "Find the themes, strengths, and experiences that can become a compelling admissions narrative.",
  },
  {
    action: "Form",
    detail: "your student's storyline",
    body: "Turn that direction into a practical plan across activities, essays, school strategy, and deadlines.",
  },
  {
    action: "Display",
    detail: "your student's storyline",
    body: "Refine every application piece so the final submission presents one clear, memorable student.",
  },
];

/*
const schools = [
  { name: "Harvard", logo: "/school-logos/harvard.png" },
  { name: "Yale", logo: "/school-logos/yale.png" },
  { name: "Princeton", logo: "/school-logos/princeton.png" },
  { name: "Columbia", logo: "/school-logos/columbia.png" },
  { name: "Penn", logo: "/school-logos/penn.png" },
  { name: "Brown", logo: "/school-logos/brown.png" },
  { name: "Cornell", logo: "/school-logos/cornell.png" },
  { name: "Dartmouth", logo: "/school-logos/dartmouth.png" },
  { name: "Stanford", logo: "/school-logos/stanford.png" },
  { name: "MIT", logo: "/school-logos/mit.png" },
  { name: "Duke", logo: "/school-logos/duke.png" },
  { name: "UChicago", logo: "/school-logos/uchicago.png" },
];
*/

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-[#18211f]">
      <header className="sticky top-0 z-50 border-b border-[#18211f]/10 bg-[#f8f6f0]/92 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <a href="#" className="text-xl font-black tracking-tight">
            IvyAdmits
          </a>
          <div className="hidden items-center gap-8 text-sm font-semibold text-[#33413d] md:flex">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#results">Outcomes</a>
            <a href="#contact">Contact</a>
          </div>
          <a
            href="#contact"
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[#0b5d4a] px-5 text-sm font-extrabold text-white transition hover:bg-[#074838]"
          >
            Book a consult
          </a>
        </nav>
      </header>

      <HeroBanner />

      {/*
      <section
        id="results"
        className="scroll-mt-20 border-b border-[#18211f]/10 bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-8 lg:px-8">
          <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#65716d]">
            Target schools students care about
          </p>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {schools.map((school) => (
              <span
                key={school.name}
                title={school.name}
                className="flex h-24 items-center justify-center border border-[#18211f]/12 bg-white px-5 py-4"
              >
                <Image
                  src={school.logo}
                  alt={`${school.name} logo`}
                  width={96}
                  height={96}
                  className="h-14 w-auto max-w-full object-contain"
                />
              </span>
            ))}
          </div>
        </div>
      </section>
      */}

      <section
        id="services"
        className="scroll-mt-20 overflow-hidden bg-[#f4f7f2] py-20"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b5d4a]">
                What we help with
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Build the profile before the application.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[#596560] md:text-right">
              Olympiads, competitions, ventures, research, leadership, then the
              essays that bring it all into focus.
            </p>
          </div>
        </div>

        <HelpCarousel items={helpItems} />
      </section>

      <section id="process" className="scroll-mt-20 bg-[#10201b] text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3c64e]">
              Process
            </p>
            <h2 className="mt-4 max-w-xl text-4xl font-black leading-tight sm:text-5xl">
              Build the storyline before the application.
            </h2>
          </div>
          <ol className="mt-14 grid gap-6 md:grid-cols-3 md:gap-0">
            {processSteps.map((step, index) => (
              <li
                key={step.action}
                className="relative grid gap-5 border border-white/14 bg-white/[0.04] p-6 md:border-l-0 md:first:border-l"
              >
                <span className="relative z-10 flex h-12 w-12 items-center justify-center border border-[#f3c64e] bg-[#10201b] text-base font-black text-[#f3c64e] shadow-[0_0_0_8px_#10201b]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="leading-tight">
                  <span className="block text-4xl font-black text-[#f3c64e]">
                    {step.action}
                  </span>
                  <span className="mt-2 block text-xl font-black text-white">
                    {step.detail}
                  </span>
                </h3>
                <p className="text-base leading-7 text-white/76">
                  {step.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b5d4a]">
              Our team
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Guidance from people who know elite admissions from the inside.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Students at top 5 universities",
                body: "Current students and recent admits help translate ambition into school-specific strategy, activities, and essays that feel current.",
              },
              {
                title: "Former admissions officers",
                body: "Experienced readers bring judgment on positioning, evaluation, and the details that make an application easier to understand.",
              },
              {
                title: "PhD researchers and specialists",
                body: "Subject experts support students building research, academic depth, competitions, and distinctive intellectual projects.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="border border-[#18211f]/12 bg-[#f8f6f0] p-6"
              >
                <p className="text-3xl font-black leading-tight text-[#0b5d4a]">
                  {item.title}
                </p>
                <p className="mt-4 text-base leading-7 text-[#596560]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 lg:px-8"
      >
        <div className="bg-[#0b5d4a] p-6 text-white md:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3c64e]">
              Free consultation
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Tell us where you are in the process.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/78">
              Choose a 15-minute time to talk through your goals, timeline, and
              where IvyAdmits can help.
            </p>
          </div>
          <div className="mt-8 overflow-hidden bg-[#f8f6f0]">
            <ConsultationForm />
          </div>
        </div>
      </section>
    </main>
  );
}
