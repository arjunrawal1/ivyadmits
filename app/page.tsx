import Image from "next/image";
import ConsultationForm from "./ConsultationForm";
import HelpCarousel from "./HelpCarousel";
import HeroBanner from "./HeroBanner";
import TrackedLink from "./TrackedLink";

const logoItems = [
  { name: "Stanford", logo: "/school-logos/stanford-transparent.png" },
  { name: "Duke", logo: "/school-logos/duke-clean.png" },
  {
    name: "Penn M&T",
    logo: "/school-logos/penn-mt-official-clean.png",
    wide: true,
  },
  {
    name: "Berkeley M.E.T.",
    logo: "/school-logos/berkeley-met-official-clean.png",
    wide: true,
  },
  { name: "Caltech", logo: "/school-logos/caltech-clean.png", wide: true },
  { name: "Carnegie Mellon", logo: "/school-logos/carnegie-mellon-clean.png", wide: true },
  { name: "Georgia Tech", logo: "/school-logos/georgia-tech-clean.png", wide: true },
  { name: "Michigan", logo: "/school-logos/umich-clean.png", wide: true },
  { name: "UNC Chapel Hill", logo: "/school-logos/unc-clean.png", wide: true },
  { name: "Vanderbilt", logo: "/school-logos/vanderbilt-clean.png", wide: true },
  { name: "WashU", logo: "/school-logos/washu-clean.png" },
  { name: "Harvard", logo: "/school-logos/harvard-clean.png" },
  { name: "Yale", logo: "/school-logos/yale-clean.png" },
  { name: "Princeton", logo: "/school-logos/princeton-clean.png" },
  { name: "Columbia", logo: "/school-logos/columbia-clean.png" },
  { name: "Penn", logo: "/school-logos/penn-clean.png" },
  { name: "Brown", logo: "/school-logos/brown-clean.png" },
  { name: "Dartmouth", logo: "/school-logos/dartmouth-clean.png" },
  { name: "MIT", logo: "/school-logos/mit-clean.png" },
  { name: "UChicago", logo: "/school-logos/uchicago-clean.png" },
];

const helpItems = [
  {
    title: "Starting a non-profit organization",
    subtitle:
      "Build a student-led mission with real programs, community partners, and measurable impact.",
    image: "/help-carousel/starting-nonprofit-sharp.jpg",
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
    image: "/help-carousel/startup-coding-office.jpg",
  },
  {
    title: "Leading high-impact events",
    subtitle:
      "Turn event leadership into a stronger extracurricular story with ownership, scale, and follow-through.",
    image: "/help-carousel/leading-events.jpg",
  },
  {
    title: "Starting a business",
    subtitle: "Turn an idea into a real venture with customers, traction, ownership, and a story colleges can understand.",
    image: "/help-carousel/nonprofit.jpg",
  },
  {
    title: "Winning club competitions",
    subtitle: "Prepare cases, pitches, roleplays, and leadership narratives that stand out to judges.",
    image: "/help-carousel/club-competitions.jpg",
  },
  {
    title: "Leading at the national level",
    subtitle:
      "Frame awards, speaking roles, and national recognition into a clear application narrative.",
    image: "/help-carousel/national-leadership.jpg",
  },
];

const plans = [
  {
    title: "Hourly admissions consulting",
    body: "Targeted support for specific colleges, application questions, activity strategy, interview prep, or last-mile decisions when you need expert guidance fast.",
    fit: "Best for seniors with specific needs.",
  },
  {
    title: "Essay review and refinement",
    body: "Detailed feedback on Common App essays, supplementals, activity descriptions, and final revisions so each piece sounds clear, personal, and strategically aligned.",
    fit: "Best for students with drafts in progress.",
  },
  {
    title: "Long-term admissions planning",
    body: "Ongoing mentorship across school selection, extracurricular development, leadership, research, competitions, summer plans, essays, and application strategy.",
    fit: "Best for rising seniors and younger students.",
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

const mentorBios = [
  {
    name: "Arjun Rawal",
    role: "Incoming Stanford student",
    image: "/mentors/arjun-rawal.png",
    bio: "Arjun brings experience across selective admissions, research, and startups. He has worked at RevisionDojo, a Y Combinator-funded company, is now building at Phia, founded a six-figure national tutoring business, published NeurIPS research, and became a Diamond Challenge international grand finalist through venture-building work.",
  },
  {
    name: "Sathvik Gorle",
    role: "Incoming Penn M&T student",
    image: "/mentors/sathvik-gorle.png",
    bio: "Sathvik combines entrepreneurship, research, and national competition experience. He founded Terrabite, received funding through Launch Chapel Hill and NSF I-Corps, won an FBLA national championship, researched economics and computer science at Duke, and interned at Rove, a Y Combinator-backed company.",
  },
  {
    name: "Hadi Abdul",
    role: "Incoming Harvard student",
    image: "/mentors/hadi-abdul.png",
    bio: "Hadi is a USAPhO Silver Medalist and USAMO qualifier, placing him among the nation's top high school physics and math competitors. He researches at Duke's Dunn Lab and the WHO Innovation Hub, founded VoiceWorks to support 9,000+ non-verbal students and 60+ speech-language pathologists, and contributed to patented passive-cooling technology at Katrick Tech.",
  },
  {
    name: "Nikhil Vaddey",
    role: "Incoming Berkeley student",
    image: "/mentors/nikhil-vaddey.png",
    bio: "Nikhil pairs business, technology, and service leadership. He served as an FBLA state officer and National Council board member, captained his varsity tennis team as a four-year letterman, interned in financial analysis at Citco, founded TechDreams4Kids to donate hundreds of laptops to Title I schools, and built NNR Technologies into a six-figure restaurant software business.",
  },
  {
    name: "Pulak Agarwalla",
    role: "Incoming Duke student",
    image: "/mentors/pulak-agarwalla.png",
    bio: "Pulak brings direct insight into the modern application process through serving on the national Common App Student Advisory Board. He co-founded a chess nonprofit raising $150K+ and serving 400+ Title I students. He published math research at UNC, is the NC State K-12 Chess Co-Champion, and placed nationally in FBLA for financial math.",
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
            <a href="#outcomes">Outcomes</a>
            <a href="#plans">Plans</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <TrackedLink
            href="#contact"
            event="nav_book_consult_clicked"
            className="inline-flex min-h-11 items-center justify-center rounded-sm bg-[#0b5d4a] px-5 text-sm font-extrabold text-white transition hover:bg-[#074838]"
          >
            Book a consult
          </TrackedLink>
        </nav>
      </header>

      <HeroBanner />

      <section className="bg-[#f8f6f0] py-4" aria-label="Mentor school logos">
        <div className="mx-auto mb-2 max-w-7xl px-5 lg:px-8">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[#0b5d4a]/75">
            Admitted schools
          </p>
        </div>
        <div className="logo-marquee overflow-hidden">
          <div className="logo-marquee-track flex w-max items-center gap-10">
            {[...logoItems, ...logoItems].map((school, index) => (
              <div
                key={`${school.name}-${index}`}
                className={`flex h-11 shrink-0 items-center justify-center ${
                  school.wide ? "w-36" : "w-16"
                }`}
                aria-hidden={index >= logoItems.length}
              >
                <Image
                  src={school.logo}
                  alt={index < logoItems.length ? `${school.name} logo` : ""}
                  width={school.wide ? 144 : 60}
                  height={school.wide ? 46 : 60}
                  className={`w-auto object-contain opacity-95 ${
                    school.wide ? "max-h-11" : "max-h-10"
                  }`}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

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
        className="scroll-mt-20 overflow-hidden bg-[#f4f7f2] pb-20 pt-14"
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

      <section id="plans" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b5d4a]">
                Plans
              </p>
              <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
                Choose the level of support that fits your timeline.
              </h2>
            </div>
            <p className="max-w-md text-lg leading-8 text-[#596560] md:text-right">
              Start with a free consultation.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.title}
                className="flex min-h-[330px] flex-col border border-[#18211f]/12 bg-[#f8f6f0] p-6"
              >
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#0b5d4a]">
                  {plan.fit}
                </p>
                <h3 className="mt-4 text-3xl font-black leading-tight text-[#18211f]">
                  {plan.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-[#596560]">
                  {plan.body}
                </p>
                <TrackedLink
                  href="#contact"
                  event="plan_contact_clicked"
                  properties={{ plan_name: plan.title }}
                  className="mt-auto inline-flex min-h-11 items-center justify-center rounded-sm bg-[#0b5d4a] px-5 text-sm font-extrabold text-white transition hover:bg-[#074838]"
                >
                  Ask about this plan
                </TrackedLink>
              </article>
            ))}
          </div>
        </div>
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

      <section id="outcomes" className="scroll-mt-20 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b5d4a]">
              Our team
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl">
              Tutors with admits across the most selective schools and
              programs.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#596560]">
              Our mentor network includes students admitted to every Ivy League
              school, Stanford, Penn&apos;s M&amp;T Program, Berkeley M.E.T., and
              other highly selective universities and honors programs.
            </p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Every Ivy League school",
                body: "Across the team, mentors have earned admission to Harvard, Yale, Princeton, Columbia, Penn, Brown, Dartmouth, and Cornell.",
              },
              {
                title: "Stanford, Duke, and top programs",
                body: "Admits include Stanford, Duke, and other highly selective schools where essays, activities, and positioning carry real weight.",
              },
              {
                title: "Penn M&T and Berkeley M.E.T.",
                body: "Specialized program admits bring insight into business, engineering, entrepreneurship, and technical storytelling.",
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

          <div className="mt-14 border-t border-[#18211f]/12 pt-12">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b5d4a]">
                Mentor bios
              </p>
              <h3 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
                Built by students with real admits, research, startups,
                national awards, and nonprofit impact.
              </h3>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
              {mentorBios.map((mentor) => (
                <article
                  key={mentor.name}
                  className="border border-[#18211f]/12 bg-[#f8f6f0]"
                >
                  <div className="relative aspect-square overflow-hidden bg-[#e9eee8]">
                    <Image
                      src={mentor.image}
                      alt={`${mentor.name} portrait`}
                      fill
                      sizes="(min-width: 1280px) 20vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <p className="text-xl font-black leading-tight text-[#18211f]">
                      {mentor.name}
                    </p>
                    <p className="mt-2 text-xs font-black uppercase tracking-[0.14em] text-[#0b5d4a]">
                      {mentor.role}
                    </p>
                    <p className="mt-4 text-sm leading-6 text-[#596560]">
                      {mentor.bio}
                    </p>
                  </div>
                </article>
              ))}
            </div>
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
