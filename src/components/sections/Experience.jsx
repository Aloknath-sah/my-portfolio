import { RevealOnScroll } from '../RevealOnScroll';

const roles = [
  {
    company: 'Affine',
    location: 'Bangalore, India',
    role: 'Senior Software Engineer',
    dates: 'Jul 2025 — Present',
    current: true,
    summary: 'Frontend architecture, product delivery and performance engineering for complex web applications.',
    wins: [
      'Built a GenAI-powered React application for Intertek, reducing report preparation from approximately 2 days to around 15 minutes.',
      'Owned frontend architecture, component design, API integration and production delivery; mentored 2 developers.',
      'Optimized a report-rendering experience spanning 100+ pages using virtualization and rendering improvements to help prevent browser freezes.',
      'Added IndexedDB-based client caching to reduce redundant requests and improve responsiveness for frequently accessed data.',
    ],
    stack: ['React', 'TypeScript', 'IndexedDB', 'Performance', 'GenAI'],
  },
  {
    company: 'Sparkviz Technologies',
    location: 'Bangalore, India',
    role: 'Frontend Developer',
    dates: 'Jun 2023 — Jul 2025',
    summary: 'Built healthcare analytics, persistent multi-step assessments, and independently deployable micro-frontend experiences.',
    wins: [
      'Built a clinical assessment and risk analytics platform with dynamic questionnaires and interactive clinician dashboards.',
      'Used IndexedDB to persist deep form state so users could resume long assessments at their exact drop-off point after refresh.',
      'Improved page-load time by 30% through bundle optimization, lazy loading and rendering improvements.',
      'Owned a fleet onboarding and freight-booking micro frontend using Webpack Module Federation; virtualized 2,000+ fleet records.',
      'Applied WCAG AA practices, semantic form progress, keyboard access and accessible modal focus behavior.',
    ],
    stack: ['React', 'TypeScript', 'Module Federation', 'IndexedDB', 'WCAG AA'],
  },
  {
    company: 'AJIO · Reliance Retail',
    location: 'Bangalore, India',
    role: 'SDE 1 · React Developer',
    dates: 'Jul 2021 — May 2023',
    summary: 'Improved customer-facing commerce flows with reusable UI patterns, product ratings and behavior analytics.',
    wins: [
      'Delivered order-page UI enhancements associated with an 18% reduction in drop-offs.',
      'Built product-rating and gamification flows associated with a further 6% drop-off reduction.',
      'Standardized Material UI theme configuration and reusable styling patterns across application modules.',
      'Improved Google Analytics instrumentation and contributed to A/B tests supporting data-informed product decisions.',
    ],
    stack: ['React', 'JavaScript', 'Material UI', 'Analytics', 'A/B testing'],
  },
];

export const Experience = () => (
  <section id="experience" className="section-space scroll-mt-24 border-y border-white/[0.06] bg-white/[0.015]">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <RevealOnScroll>
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">Professional journey</p>
            <h2 className="section-title">Work shaped by <span className="text-gradient">impact.</span></h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
            I care about more than shipping UI: I look for the rendering bottleneck, simplify the architecture, and make the experience work better for people.
          </p>
        </div>
      </RevealOnScroll>

      <div className="mt-10 space-y-5">
        {roles.map((role, index) => (
          <RevealOnScroll key={role.company} delay={index * 60}>
            <article className="experience-card grid gap-5 rounded-2xl border border-white/[0.08] bg-[#0a0e17]/80 p-5 sm:p-7 lg:grid-cols-[220px_1fr] lg:gap-9">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-cyan-200">0{index + 1}</span>
                  {role.current && <span className="rounded-full border border-emerald-300/20 bg-emerald-300/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-emerald-200">Current</span>}
                </div>
                <h3 className="mt-3 text-lg font-semibold text-white">{role.company}</h3>
                <p className="mt-1 text-sm text-slate-400">{role.role}</p>
                <p className="mt-3 font-mono text-xs text-slate-500">{role.dates}</p>
                <p className="mt-1 text-xs text-slate-600">{role.location}</p>
              </div>
              <div>
                <p className="text-sm leading-7 text-slate-300">{role.summary}</p>
                <ul className="mt-4 space-y-3">
                  {role.wins.map((win) => (
                    <li key={win} className="flex gap-3 text-sm leading-6 text-slate-400">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-200/80" />
                      <span>{win}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">{role.stack.map((tech) => <span key={tech} className="rounded-md bg-white/[0.04] px-2.5 py-1.5 text-[10px] font-medium text-slate-400">{tech}</span>)}</div>
              </div>
            </article>
          </RevealOnScroll>
        ))}
      </div>
    </div>
  </section>
);
