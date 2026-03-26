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
  
