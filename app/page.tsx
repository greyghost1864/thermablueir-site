// build-marker-1
const navItems = [
  { label: 'Platform', href: '#platform' },
  { label: 'Heating & Air', href: '#heating-air' },
  { label: 'Engineering', href: '#engineering' },
  { label: 'Manufacturing', href: '#manufacturing' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

const pillars = [
  {
    title: 'Platform Architecture',
    body: 'ThermaBlue IR is built as a manufacturing and infrastructure platform, not a one-off product company.',
  },
  {
    title: 'Controlled Performance',
    body: 'Systems are designed around engineering logic, practical physics, and durable real-world use.',
  },
  {
    title: 'Manufacturing Discipline',
    body: 'The build philosophy emphasizes repeatability, serviceability, and long-term trust.',
  },
];

const howItWorks = [
  ['Observe', 'Start with the real problem, not a forced solution.'],
  ['Simplify', 'Strip the system down to what truly matters.'],
  ['Build', 'Translate the idea into real hardware and controlled form.'],
  ['Test', 'Evaluate performance, durability, and behavior in the field.'],
  ['Refine', 'Tighten what works. Remove what does not.'],
];

const faqs = [
  {
    q: 'What is ThermaBlue IR?',
    a: 'ThermaBlue IR is a manufacturing and infrastructure platform. Heating & Air is the first public system built to demonstrate that platform in a clear and practical way.',
  },
  {
    q: 'Why does the public site begin with Heating & Air?',
    a: "Because it is the clearest public expression of the platform. It shows the company's engineering logic, build philosophy, and hardware seriousness without overextending the message.",
  },
  {
    q: 'Why are some technical details not shown publicly?',
    a: 'The site is designed to explain the company clearly while protecting proprietary architecture. Public clarity matters, but so does disciplined discretion.',
  },
  {
    q: "What is Pete's role on the site?",
    a: "Pete is a selective guide. He adds warmth, clarity, and brand identity in explanatory sections, but he never overpowers the seriousness of the company.",
  },
];

function SectionImage(props: any) {
  const { src, alt, className = '' } = props;

  return (
    <div className={'image-card ' + className}>
      <img src={src} alt={alt} />
    </div>
  );
}

function Eyebrow(props: any) {
  return <div className="eyebrow">{props.children}</div>;
}

export default function Page() {
  return <div className="page-shell">Build test</div>;
}
    <div className="page-shell">
      <header className="site-header">
        <div className="container header-row">
          <a href="#top" className="brand-block">
            <img src="/images/logo-thermablue-transparent.png" alt="ThermaBlue IR logo" className="brand-logo" />
            <div>
              <div className="brand-name">THERMABLUE IR</div>
              <div className="brand-tag">Engineered for control</div>
            </div>
          </a>
          <nav className="nav-links">
            {navItems.map((item) => (
              <a key={item.label} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-bg">
            <img src="/images/hero-thermal-wave.png" alt="Thermal energy background" />
          </div>
          <div className="hero-overlay" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-pill">Manufacturing + Infrastructure Platform</div>
              <h1>Engineered for control.</h1>
              <p>
                ThermaBlue IR is a manufacturing and infrastructure platform built around engineering logic,
                disciplined construction, and durable systems. Heating & Air is the catalyst — the first public
                expression of the platform and the clearest demonstration of how we build.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="#how-it-works">
                  See How It Works
                </a>
                <a className="btn btn-secondary" href="#heating-air">
                  Explore Heating & Air
                </a>
              </div>
            </div>
            <div className="hero-card">
              <img src="/images/logo-thermablue-transparent.png" alt="ThermaBlue IR" className="hero-card-logo" />
              <div className="hero-pillar-grid">
                {pillars.map((pillar) => (
                  <div key={pillar.title} className="mini-card">
                    <div className="mini-card-title">{pillar.title}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section band-section">
          <div className="container three-col-grid">
            {pillars.map((pillar) => (
              <div key={pillar.title} className="content-card">
                <div className="card-title">{pillar.title}</div>
                <p>{pillar.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="platform" className="section section-alt">
          <div className="container split-grid">
            <div>
              <Eyebrow>Platform</Eyebrow>
              <h2>A platform company, not a random product company.</h2>
              <p>
                ThermaBlue IR is best understood as a manufacturing and infrastructure platform. The public site
                begins with Heating & Air because it is the clearest way to demonstrate the architecture, the
                discipline, and the build philosophy.
              </p>
              <p>
                One architecture expressed across multiple verticals remains the long-term frame, but the launch
                site stays disciplined: platform first, catalyst second, credibility throughout.
              </p>
            </div>
            <SectionImage src="/images/platform-generator-grid.png" alt="Platform architecture visual" />
          </div>
        </section>

        <section id="heating-air" className="section">
          <div className="container">
            <div className="section-head max-copy">
              <Eyebrow>Heating & Air</Eyebrow>
              <h2>Heating & Air is the catalyst.</h2>
              <p>
                This is the first public expression of the ThermaBlue platform — a controlled climate system built
                to demonstrate durable hardware, disciplined engineering, and practical performance without relying
                on hype.
              </p>
            </div>
            <div className="stack-grid">
              <SectionImage src="/images/heating-air-master-drive.png" alt="ThermaBlue Heating and Air system" />
              <div className="content-card pete-card">
                <SectionImage src="/images/heating-air-control-screen.png" alt="ThermaBlue system control view" />
                <div className="content-card pete-card">                  
                  <img src="/images/pete-explainer.png?v=3" alt="Pete mascot explaining ThermaBlue" className="pete-image pete-float-a" />
                    <div>
                      <div className="small-pill">Pete appears here first</div>
                      <div className="card-title">Clear, warm, and selective.</div>
                      <p>
                        Pete enters where explanation helps most. His job is to add clarity and warmth to the system
                        story without weakening the company’s seriousness.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="engineering" className="section section-alt">
          <div className="container split-grid">
            <div>
              <Eyebrow>Engineering</Eyebrow>
              <h2>Built by testing, refining, and simplifying.</h2>
              <p>
                ThermaBlue systems are developed through direct engineering work: observation, simplification,
                physical build, testing, and refinement. The goal is not complication. The goal is control. That
                founder-led invention method continues to shape the platform from the ground up.
              </p>
            </div>
            <SectionImage src="/images/engineering-ford-build.png" alt="Engineering by building visual" />
          </div>
        </section>

        <section id="manufacturing" className="section">
          <div className="container split-grid reverse-mobile">
            <SectionImage src="/images/manufacturing-rhino.png" alt="Rhino brand philosophy visual" />
            <div>
              <Eyebrow>Manufacturing</Eyebrow>
              <h2>Built with backbone.</h2>
              <p>
                ThermaBlue is being built with a long-term view: durable systems, disciplined manufacturing, and
                practical trust earned through hardware, serviceability, and performance over time.
              </p>
              <div className="inline-tag">Products built for a purpose, not for status.</div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="section section-alt">
          <div className="container">
            <div className="section-head max-copy">
              <Eyebrow>How It Works</Eyebrow>
              <h2>Clear where it should be. Closed where it must be.</h2>
              <p>
                The public site explains the company clearly without disclosing protected architecture. Visitors
                should understand the logic, the seriousness, and the discipline of the build — without exposing
                what should remain protected.
              </p>
            </div>
            <div className="how-grid">
              <div className="steps-grid">
                {howItWorks.map(([title, body], i) => (
                  <div key={title} className="content-card step-card">
                    <div className="step-num">0{i + 1}</div>
                    <div className="card-title">{title}</div>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
               <div className="content-card side-card">
               <img src="/images/pete-blueprint.png?v=3" alt="Pete holding blueprint" className="pete-image pete-float-b" />
                <div className="card-title">Pete helps explain, not reveal.</div>
                <p>
                  Pete supports public understanding. He can point, guide, and simplify. He does not carry
                  confidential detail, and he does not turn the site into a cartoon.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container split-grid">
            <div>
              <Eyebrow>Trust</Eyebrow>
              <h2>American built from the ground up.</h2>
              <p>
                ThermaBlue is being built with a long-term view: durable systems, disciplined manufacturing, and
                practical trust earned through hardware, serviceability, and performance over time.
              </p>
              <div className="inline-tag">Serious engineering. Serious build discipline.</div>
            </div>
            <SectionImage src="/images/trust-american-flag.png" alt="American built visual" />
          </div>
        </section>

        <section id="faq" className="section section-alt">
          <div className="container">
            <div className="section-head max-copy">
              <Eyebrow>FAQ</Eyebrow>
              <h2>Practical answers.</h2>
            </div>
            <div className="faq-grid">
              <div className="faq-list">
                {faqs.map((faq) => (
                  <div key={faq.q} className="content-card faq-card">
                    <div className="card-title">{faq.q}</div>
                    <p>{faq.a}</p>
                  </div>
                ))}
              </div>
              <div className="content-card side-card">
               <img src="/images/pete-guide.png?v=3" alt="Pete guiding the FAQ" className="pete-image pete-float-c" />
                <div className="card-title">Pete helps here, too.</div>
                <p>
                  FAQ is one of the few places where Pete can feel slightly more playful while still supporting
                  clarity and trust.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <div className="container split-grid">
            <div>
              <Eyebrow>Contact</Eyebrow>
              <h2>Built for a purpose, not for status.</h2>
              <p>
                ThermaBlue IR is building a manufacturing and infrastructure platform with Heating & Air as the
                catalyst. For product, platform, and company inquiries, contact Michael Elder directly.
              </p>
              <div className="cta-row">
                <a className="btn btn-primary" href="mailto:michael.elder@thermablueir.com">
                  michael.elder@thermablueir.com
                </a>
                <a className="btn btn-secondary" href="#platform">
                  Revisit the Platform
                </a>
              </div>
            </div>
            <SectionImage src="/images/closing-earth-hands.png" alt="Closing vision visual" />
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-row">
          <div>ThermaBlue IR — Engineered for control.</div>
          <div>Primary domain: thermablueir.com</div>
        </div>
      </footer>
    </div>
  );
}
