import Image from "next/image";

import HelpCarousel from "./HelpCarousel";

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
    image: "/help-carousel/startup.jpg",
  },
  {
    title: "Working at a startup",
    subtitle: "Find useful roles, document ownership, and translate shipped work into application proof.",
    image: "/help-carousel/startup.jpg",
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

const steps = [
  "Diagnose goals, strengths, deadlines, and family priorities.",
  "Design the college list, application calendar, and positioning plan.",
  "Coach essays, activities, recommendations, and interviews through submission.",
];

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

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f6f0] text-[#18211f]">
      <header className="sticky top-0 z-30 border-b border-[#18211f]/10 bg-[#f8f6f0]/92 backdrop-blur">
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

      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2200&q=85"
            alt="Students walking on a university campus"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#06120f]/70" />
        </div>
        <div className="relative mx-auto grid min-h-[720px] max-w-7xl items-center gap-10 px-5 py-20 text-white lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="max-w-3xl pt-6">
            <p className="mb-5 inline-flex border border-white/30 bg-white/10 px-3 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[#d6f5e8]">
              College admissions consulting
            </p>
            <h1 className="text-5xl font-black leading-[0.96] tracking-normal sm:text-6xl lg:text-7xl">
              Ivy-caliber guidance for standout applications.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/84">
              IvyAdmits helps ambitious students turn strong grades, activities,
              essays, and goals into a focused application strategy for highly
              selective colleges.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-sm bg-[#f3c64e] px-7 text-sm font-black text-[#10201b] transition hover:bg-[#ffd762]"
              >
                Start your admissions plan
              </a>
              <a
                href="#services"
                className="inline-flex min-h-12 items-center justify-center rounded-sm border border-white/35 px-7 text-sm font-extrabold text-white transition hover:bg-white/10"
              >
                Explore services
              </a>
            </div>
          </div>

          <aside className="grid gap-4 lg:justify-self-end">
            <div className="border border-white/20 bg-white/12 p-5 backdrop-blur-md">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#d6f5e8]">
                Built around the student
              </p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                <div>
                  <p className="text-4xl font-black">1:1</p>
                  <p className="mt-1 text-sm leading-6 text-white/75">
                    Dedicated admissions coaching
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black">9-12</p>
                  <p className="mt-1 text-sm leading-6 text-white/75">
                    Support from early planning through senior year
                  </p>
                </div>
                <div>
                  <p className="text-4xl font-black">Top 20</p>
                  <p className="mt-1 text-sm leading-6 text-white/75">
                    Strategy for selective universities
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

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
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3c64e]">
              Process
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Clear milestones for a stressful season.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/74">
              Families get structure, students get momentum, and every major
              application choice has a reason behind it.
            </p>
          </div>
          <div className="grid gap-4">
            {steps.map((step, index) => (
              <div key={step} className="grid grid-cols-[48px_1fr] gap-5 border border-white/15 p-5">
                <span className="flex h-12 w-12 items-center justify-center bg-[#f3c64e] text-lg font-black text-[#10201b]">
                  {index + 1}
                </span>
                <p className="self-center text-lg leading-7 text-white/86">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-2 lg:px-8">
        <div className="overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1400&q=85"
            alt="Graduates celebrating outdoors"
            width={1400}
            height={1000}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
        <div className="self-center">
          <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b5d4a]">
            Advising philosophy
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight">
            Strategy sharp enough for parents. Coaching warm enough for students.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[#596560]">
            IvyAdmits is designed for families who want high standards without
            turning applications into panic. We focus on honest positioning,
            practical timelines, and essays that sound like the student on their
            best day.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="border-l-4 border-[#0b5d4a] bg-white p-5">
              <p className="font-black">Personalized roadmap</p>
              <p className="mt-2 text-sm leading-6 text-[#65716d]">
                Every task maps to the student&apos;s schools, story, and deadlines.
              </p>
            </div>
            <div className="border-l-4 border-[#f3c64e] bg-white p-5">
              <p className="font-black">Parent visibility</p>
              <p className="mt-2 text-sm leading-6 text-[#65716d]">
                Families can track progress without micromanaging every draft.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0b5d4a]">
              Social proof placeholders
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight">
              Add your real results, counselor bios, and student stories here.
            </h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {[
              "Replace this with an acceptance story, parent quote, or case study.",
              "Add counselor credentials, admissions reader experience, or school specialties.",
              "Show verified outcomes, scholarship wins, or program completion metrics.",
            ].map((quote) => (
              <blockquote key={quote} className="border border-[#18211f]/12 p-6">
                <p className="text-lg leading-8 text-[#33413d]">{quote}</p>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl scroll-mt-20 px-5 py-20 lg:px-8"
      >
        <div className="grid gap-8 bg-[#0b5d4a] p-6 text-white md:grid-cols-[0.85fr_1.15fr] md:p-10">
          <div>
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
          <div className="min-h-[720px] overflow-hidden bg-white">
            <iframe
              src="https://calendly.com/contact-ivyadmits/30min"
              title="Schedule a 15-minute IvyAdmits consultation"
              className="h-[720px] w-full border-0"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
