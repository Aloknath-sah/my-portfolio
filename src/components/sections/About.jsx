import { RevealOnScroll } from '../RevealOnScroll';

const skillGroups = [
  {
    title: 'Frontend engineering',
    summary: 'Build usable, consistent interfaces and reusable component systems.',
    skills: ['React', 'TypeScript', 'JavaScript', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI'],
  },
  {
    title: 'Architecture & performance',
    summary: 'Keep complex pages responsive, maintainable and independently deployable.',
    skills: ['Component architecture', 'Design systems', 'Micro frontends', 'Module Federation', 'Single-spa', 'Vite', 'Virtualization', 'Lazy loading', 'Code splitting', 'Lighthouse'],
  },
  {
    title: 'State & data',
    summary: 'Manage long-lived workflows and reduce repeated data work in the browser.',
    skills: ['Redux', 'Redux Toolkit', 'Context API', 'IndexedDB', 'Client-side caching', 'WebSockets', 'REST APIs'],
  },
  {
    title: 'Quality, accessibility & AI',
    summary: 'Make product behavior testable and inclusive, with experience integrating AI-backed workflows.',
    skills: ['WCAG AA', 'ARIA', 'Jest', 'Cypress', 'React Testing Library', 'Node.js', 'Python', 'FastAPI', 'LLM applications'],
  },
];

export const About = () => (
  <section id="about" className="section-space scroll-mt-24">
    <div className="mx-auto max-w-6xl px-5 sm:px-8">
      <RevealOnScroll>
        <div className="section-heading-row">
          <div>
            <p className="section-kicker">A little about me</p>
            <h2 className="section-title">Frontend depth. <span className="text-gradient">Product thinking.</span></h2>
          </div>
        </div>
      </RevealOnScroll>

      <div className="mt-9 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <RevealOnScroll>
          <div className="h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-8">
            <p className="text-sm leading-8 text-slate-300 sm:text-base">
              I'm a frontend-heavy Senior Software Engineer with 5+ years of experience building scalable web applications. I enjoy the point where architecture, performance and user experience meet: taking a heavy interface, understanding why it struggles, and making the product faster and easier to use.
            </p>
            <p className="mt-5 text-sm leading-8 text-slate-400 sm:text-base">
              My work has spanned AI-assisted report generation, healthcare assessments, e-commerce, analytics dashboards and micro frontends. I also enjoy mentoring teammates and building reusable patterns that make future changes easier.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4">
                <p className="text-2xl font-semibold text-white">3×</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Game Changer of the Month</p>
              </div>
              <div className="rounded-xl border border-white/[0.07] bg-black/20 p-4">
                <p className="text-2xl font-semibold text-white">2</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Developers mentored</p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid gap-4 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <RevealOnScroll key={group.title} delay={index * 55}>
              <article className="skill-card h-full rounded-2xl border border-white/[0.08] bg-white/[0.025] p-5 transition duration-300 hover:border-cyan-200/20 hover:bg-white/[0.04]">
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h3 className="text-base font-semibold text-white">{group.title}</h3>
                  <span className="font-mono text-[10px] text-slate-600">0{index + 1}</span>
                </div>
                <p className="mb-4 text-xs leading-6 text-slate-500">{group.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-md border border-white/[0.08] bg-black/20 px-2.5 py-1.5 text-[11px] text-slate-300">{skill}</span>
                  ))}
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <RevealOnScroll delay={60}>
          <article className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 sm:p-7">
            <p className="section-kicker">Education</p>
            <div className="mt-4 border-l border-cyan-200/25 pl-4">
              <h3 className="font-semibold text-white">Full-Stack Web Development Program</h3>
              <p className="mt-1 text-sm text-slate-400">Masai School · Bengaluru</p>
              <p className="mt-1 font-mono text-xs text-slate-600">Oct 2019 — Jun 2021</p>
              <p className="mt-3 text-sm leading-6 text-slate-500">1,200+ hours of hands-on work across full-stack JavaScript, data structures, algorithms, React and modern web architecture.</p>
            </div>
            <div className="mt-6 border-l border-cyan-200/25 pl-4">
              <h3 className="font-semibold text-white">Bachelor of Technology</h3>
              <p className="mt-1 text-sm text-slate-400">Indira Gandhi Institute of Technology, Sarang</p>
              <p className="mt-1 font-mono text-xs text-slate-600">May 2015 — Jun 2019</p>
            </div>
          </article>
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <article className="flex h-full flex-col justify-between rounded-2xl border border-cyan-200/15 bg-gradient-to-br from-cyan-200/[0.07] to-blue-400/[0.02] p-6 sm:p-7">
            <div>
              <p className="section-kicker">How I work</p>
              <h3 className="mt-3 text-xl font-semibold text-white">Performance is a product feature.</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">I start by understanding the user journey and the bottleneck, measure before optimizing, and prefer changes that improve the experience without making the codebase harder to maintain.</p>
            </div>
            <div className="mt-7 flex flex-wrap gap-2">
              {['Measure first', 'Accessible by design', 'Reusable systems', 'Mentor & collaborate'].map((value) => <span key={value} className="rounded-full border border-white/10 bg-black/15 px-3 py-1.5 text-xs text-slate-300">{value}</span>)}
            </div>
          </article>
        </RevealOnScroll>
      </div>
    </div>
  </section>
);
