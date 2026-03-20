const imageMap = {
  logo: '/images/logo-thermablue-transparent.png',
  heroBg: '/images/hero-thermal-wave.png',
  platform: '/images/platform-generator-grid.png',
  heatingAirHero: '/images/heating-air-master-drive.png',
  heatingAirSupport: '/images/heating-air-control-screen.png',
  engineering: '/images/engineering-ford-build.png',
  manufacturing: '/images/manufacturing-rhino.png',
  trust: '/images/trust-american-flag.png',
  closing: '/images/closing-earth-hands.png',
  peteExplainer: '/images/pete-explainer.png',
  peteThinking: '/images/pete-thinking.png',
}

const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Heating & Air', href: '#heating-air' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

const faqs = [
  {
    q: 'What is ThermaBlue IR?',
    a: 'ThermaBlue IR is a manufacturing and infrastructure platform. Heating & Air is the first public system built to demonstrate that platform in a clear and practical way.',
  },
  {
    q: 'Why start with Heating & Air?',
    a: 'It is the clearest public expression of the platform and demonstrates the engineering logic and manufacturing discipline behind the company.',
  },
  {
    q: 'Why are some technical details not public?',
    a: 'The website explains the system clearly while protecting proprietary architecture. Serious engineering requires both clarity and discretion.',
  },
]

const howItWorks = [
  { title: 'Observe', body: 'Start with the real problem.' },
  { title: 'Simplify', body: 'Reduce the system to what matters.' },
  { title: 'Build', body: 'Turn ideas into physical hardware.' },
  { title: 'Test', body: 'Measure real performance.' },
  { title: 'Refine', body: 'Improve durability and control.' },
]

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs uppercase tracking-[0.2em] text-white/40">
      {children}
    </div>
  )
}

function SectionImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04]">
      <img src={src} alt={alt} className="w-full object-cover" />
    </div>
  )
}

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src={imageMap.logo}
              alt="ThermaBlue IR logo"
              className="h-10 w-auto"
            />
            <div>
              <div className="text-sm font-semibold tracking-[0.14em] text-white">
                THERMABLUE IR
              </div>
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/45">
                Engineered for control
              </div>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-white/70 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        {/* HERO */}
        <section className="relative isolate overflow-hidden border-b border-white/10">
          <div className="absolute inset-0">
            <img
              src={imageMap.heroBg}
              alt="Thermal energy background"
              className="h-full w-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_35%),linear-gradient(to_bottom,rgba(3,7,18,0.45),rgba(3,7,18,0.92))]" />
          </div>

          <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
            <div className="max-w-3xl">
              <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70">
                Manufacturing + Infrastructure Platform
              </div>
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-7xl">
                Engineered for control.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
                ThermaBlue IR is a manufacturing and infrastructure platform
                built around engineering logic, disciplined construction, and
                durable systems. Heating & Air is the catalyst — the first
                public expression of the platform and the clearest demonstration
                of how we build.
              </p>
              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#how-it-works"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:-translate-y-0.5"
                >
                  See How It Works
                </a>
                <a
                  href="#heating-air"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Explore Heating & Air
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[36px] bg-gradient-to-r from-red-500/10 via-white/5 to-blue-500/10 blur-2xl" />
              <div className="relative rounded-[32px] border border-white/10 bg-white/[0.04] p-6 shadow-2xl shadow-black/40">
                <img
                  src={imageMap.logo}
                  alt="ThermaBlue IR"
                  className="mx-auto h-24 w-auto opacity-95 sm:h-28"
                />
                <div className="mt-6 grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-medium text-white">
                      Platform Architecture
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-medium text-white">
                      Controlled Performance
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    <div className="text-sm font-medium text-white">
                      Manufacturing Discipline
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CREDIBILITY STRIP */}
        <section className="border-b border-white/10 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8 lg:py-16">
            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Platform Company
                </div>
                <div className="mt-2 text-base font-semibold text-white">
                  Manufacturing + infrastructure platform
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Current Public Focus
                </div>
                <div className="mt-2 text-base font-semibold text-white">
                  Heating &amp; Air as the catalyst
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                <div className="text-[11px] uppercase tracking-[0.18em] text-white/45">
                  Build Standard
                </div>
                <div className="mt-2 text-base font-semibold text-white">
                  Durable, serviceable, engineered for control
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PLATFORM */}
        <section id="platform" className="border-b border-white/10 bg-neutral-925">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-18 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <div>
              <Eyebrow>Platform</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                A platform company, not a random product company.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                ThermaBlue IR is best understood as a manufacturing and
                infrastructure platform. The public site begins with Heating &
                Air because it is the clearest way to demonstrate the
                architecture, the discipline, and the build philosophy.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-8 text-white/72">
                One architecture expressed across multiple verticals remains the
                long-term frame, but the launch site stays disciplined:
                platform first, catalyst second, credibility throughout.
              </p>
            </div>
            <SectionImage src={imageMap.platform} alt="Platform architecture visual" />
          </div>
        </section>

        {/* HEATING AIR */}
        <section id="heating-air" className="border-b border-white/10 bg-neutral-950">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <Eyebrow>Heating & Air</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Heating & Air is the catalyst.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                This is the first public expression of the ThermaBlue platform —
                a controlled climate system built to demonstrate durable
                hardware, disciplined engineering, and practical performance
                without relying on hype.
              </p>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <SectionImage
                src={imageMap.heatingAirHero}
                alt="ThermaBlue Heating and Air system"
              />

              <div className="grid gap-8">
                <SectionImage
                  src={imageMap.heatingAirSupport}
                  alt="ThermaBlue system control view"
                />

                <div className="grid gap-5 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:grid-cols-[120px_1fr]">
                  <div className="flex items-center justify-center rounded-2xl bg-gradient-to-b from-white/8 to-white/[0.02] p-3">
                    <img
                      src={imageMap.peteExplainer}
                      alt="Pete guiding the Heating & Air section"
                      className="h-28 w-auto object-contain pete-float"
                    />
                  </div>
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-white/55">
                      Pete appears here first
                    </div>
                    <div className="mt-3 text-lg font-semibold text-white">
                      Clear, warm, and selective.
                    </div>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      Pete enters where explanation helps most. His job is to
                      add clarity and warmth to the system story without
                      weakening the company’s seriousness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ENGINEERING */}
        <section id="engineering" className="border-b border-white/10 bg-neutral-925">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-18 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-24">
            <div>
              <Eyebrow>Engineering</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built by testing, refining, and simplifying.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                ThermaBlue systems are developed through direct engineering
                work: observation, simplification, physical build, testing, and
                refinement. The goal is not complication. The goal is control.
                That founder-led invention method continues to shape the
                platform from the ground up.
              </p>
            </div>
            <SectionImage src={imageMap.engineering} alt="Engineering by building visual" />
          </div>
        </section>

        {/* MANUFACTURING */}
        <section id="manufacturing" className="border-b border-white/10 bg-neutral-950">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-18 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
            <SectionImage src={imageMap.manufacturing} alt="Manufacturing visual" />
            <div>
              <Eyebrow>Manufacturing</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built with backbone.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                ThermaBlue is being built with a long-term view: durable
                systems, disciplined manufacturing, and practical trust earned
                through hardware, serviceability, and performance over time.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                Products built for a purpose, not for status.
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section id="how-it-works" className="border-b border-white/10 bg-neutral-925">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <Eyebrow>How It Works</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Clear where it should be. Closed where it must be.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                The public site explains the company clearly without disclosing
                protected architecture. Visitors should understand the logic,
                the seriousness, and the discipline of the build — without
                exposing what should remain protected.
              </p>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_320px]">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {howItWorks.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5"
                  >
                    <div className="text-xs uppercase tracking-[0.18em] text-white/40">
                      0{index + 1}
                    </div>
                    <div className="mt-3 text-lg font-semibold">{step.title}</div>
                    <p className="mt-2 text-sm leading-7 text-white/65">
                      {step.body}
                    </p>
                  </div>
                ))}
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <div className="flex justify-center rounded-2xl bg-black/20 p-4">
                  <img
                    src={imageMap.peteExplainer}
                    alt="Pete guiding the how it works section"
                    className="h-36 w-auto object-contain"
                  />
                </div>
                <div className="mt-5 text-lg font-semibold">
                  Pete helps explain, not reveal.
                </div>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  Pete supports public understanding. He can point, guide, and
                  simplify. He does not carry confidential detail, and he does
                  not turn the site into a cartoon.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* TRUST */}
        <section className="border-b border-white/10 bg-neutral-950">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-18 lg:grid-cols-[1fr_0.95fr] lg:px-8 lg:py-24">
            <div>
              <Eyebrow>Trust</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                American built from the ground up.
              </h2>
              <p className="mt-5 text-base leading-8 text-white/72">
                ThermaBlue is being built with a long-term view: durable
                systems, disciplined manufacturing, and practical trust earned
                through hardware, serviceability, and performance over time.
              </p>
              <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75">
                Serious engineering. Serious build discipline.
              </div>
            </div>
            <SectionImage src={imageMap.trust} alt="American built visual" />
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-b border-white/10 bg-neutral-925">
          <div className="mx-auto max-w-7xl px-6 py-18 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Practical answers.
              </h2>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_300px]">
              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div
                    key={faq.q}
                    className="rounded-[24px] border border-white/10 bg-white/[0.03] p-6"
                  >
                    <div className="text-lg font-medium text-white">{faq.q}</div>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
              <div className="rounded-[28px] border border-white/10 bg-white/[0.03] p-6">
                <div className="flex justify-center rounded-2xl bg-black/20 p-4">
                  <img
                    src={imageMap.peteThinking}
                    alt="Pete thinking"
                    className="h-36 w-auto object-contain"
                  />
                </div>
                <div className="mt-5 text-lg font-semibold">
                  Pete helps here, too.
                </div>
                <p className="mt-3 text-sm leading-7 text-white/68">
                  FAQ is one of the few places where Pete can feel slightly more
                  playful while still supporting clarity and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="bg-neutral-950">
          <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Built for a purpose, not for status.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72">
                ThermaBlue IR is building a manufacturing and infrastructure
                platform with Heating & Air as the catalyst. For product,
                platform, and company inquiries, contact Michael Elder directly.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="mailto:michael.elder@thermablueir.com"
                  className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 transition hover:-translate-y-0.5"
                >
                  michael.elder@thermablueir.com
                </a>
                <a
                  href="#platform"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Revisit the Platform
                </a>
              </div>
            </div>
            <SectionImage src={imageMap.closing} alt="Closing vision visual" />
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/40">
        ThermaBlue IR — Engineered for control.
      </footer>
    </div>
  )
}
