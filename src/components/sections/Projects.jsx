import { RevealOnScroll } from '../RevealOnScroll';

const supportingProjects = [
  {
    number: '02',
    title: 'YC Directory',
    category: 'Startup discovery platform',
    description: 'A platform for founders to submit startup pitches and for visitors to explore, search, and filter startup profiles.',
    stack: ['Next.js', 'TypeScript', 'Sanity CMS', 'Tailwind CSS'],
    demo: 'https://yc-directory-next-js-getq.vercel.app/',
    repo: 'https://github.com/Aloknath-sah/YC-directory-NextJs',
    mark: 'YC',
    accent: 'from-orange-400/20 to-amber-300/5',
  },
  {
    number: '03',
    title: 'LinkedIn Clone',
    category: 'Social networking application',
    description: 'A full-stack social experience with post creation, likes, profiles, and authenticated user sessions.',
    stack: ['Next.js', 'React', 'Clerk', 'MongoDB', 'ShadCN'],
    demo: 'https://linked-in-clone-nu-six.vercel.app/',
    repo: 'https://github.com/Aloknath-sah/LinkedIn-Clone',
    mark: 'in',
    accent: 'from-sky-400/20 to-blue-400/5',
  },
  {
    number: '04',
    title: 'Chat Buddy',
    category: 'Real-time communication',
    description: 'A real-time chat application using WebSockets for bi-directional communication between connected users.',
    stack: ['React', 'Node.js', 'Express', 'Socket.IO', 'MongoDB'],
    demo: 'https://c-buddy-frontend.onrender.com',
    repo: 'https://github.com/Aloknath-sah/Chat-Buddy',
    mark: '↗',
    accent: 'from-violet-400/20 to-fuchsia-400/5',
  },
];

const Tag = ({ children }) => (
  <span className="rounded-full border border-white/[0.09] bg-white/[0.035] px-3 py-1.5 text-[11px] font-medium text-slate-300 sm:text-xs">{children}</span>
);

const ExternalLink = ({ href, children }) => (
  <a href={href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-cyan-200">
    {children} <span aria-hidden="true">↗</span>
  </a>
);

export const Projects = () => {
  return (
    <section id="projects" className="section-space scroll-mt-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <RevealOnScroll>
          <div className="section-heading-row">
            <div>
              <p className="section-kicker">Selected work</p>
              <h2 className="section-title">Projects with a <span className="text-gradient">purpose.</span></h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400 sm:text-base">
              I like projects where thoughtful product decisions meet solid engineering—clear user flows, reusable systems, and measurable outcomes.
            </p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={70}>
          <article className="featured-project relative mt-10 overflow-hidden rounded-[1.75rem] border border-cyan-200/20 bg-[#0b131f]">
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-br from-cyan-300/[0.08] via-transparent to-blue-500/[0.07]" />
            <div className="relative grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="p-6 sm:p-9 lg:p-11">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-cyan-200/25 bg-cyan-200/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-100">01 · Featured project</span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[11px] text-slate-400">Independent build</span>
                </div>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight text-white sm:text-4xl">PageForge</h3>
                <p className="mt-2 text-lg text-cyan-100/80">A visual landing page builder</p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">
                  PageForge lets users create, customize, save, and publish landing pages through a reusable section-based editor instead of hand-writing a new page for every use case.
                </p>

                <div className="mt-7 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-xl border border-white/[0.08] bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Product workflow</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">Section editing, live preview, draft saving, publish flow, public page routes.</p>
                  </div>
                  <div className="rounded-xl border border-white/[0.08] bg-black/20 p-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">Engineering focus</p>
                    <p className="mt-2 text-sm leading-6 text-slate-200">Schema-driven rendering, editor state, history, auth, persistence and versioning.</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['Next.js', 'React', 'TypeScript', 'Zustand', 'Supabase', 'PostgreSQL', 'Vercel'].map((tech) => <Tag key={tech}>{tech}</Tag>)}
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-5">
                  <a href="https://page-forge-ten.vercel.app/" target="_blank" rel="noreferrer" className="primary-button inline-flex items-center gap-2">Open live app <span aria-hidden="true">↗</span></a>
                  <ExternalLink href="https://github.com/Aloknath-sah/PageForge">Source code</ExternalLink>
                </div>
              </div>

              <div className="relative min-h-[280px] border-t border-white/[0.08] p-5 sm:p-8 lg:border-l lg:border-t-0">
                <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-35" />
                <div className="relative flex h-full min-h-[260px] items-center justify-center">
                  <div className="pageforge-browser w-full max-w-[390px] rotate-[1.25deg] overflow-hidden rounded-xl border border-white/15 bg-[#090e17] shadow-[0_25px_70px_rgba(0,0,0,0.4)] transition duration-500 hover:rotate-0 hover:scale-[1.015]">
                    <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
                      <span className="h-2 w-2 rounded-full bg-rose-400/90" /><span className="h-2 w-2 rounded-full bg-amber-300/90" /><span className="h-2 w-2 rounded-full bg-emerald-300/90" />
                      <span className="ml-3 flex-1 rounded-md bg-white/[0.045] px-3 py-1 font-mono text-[9px] text-slate-500">pageforge.app/editor</span>
                    </div>
                    <div className="grid grid-cols-[72px_1fr]">
                      <div className="space-y-2 border-r border-white/[0.08] bg-white/[0.018] p-2.5">
                        {['Hero', 'Features', 'FAQ', 'Team', 'CTA'].map((section, i) => <div key={section} className={`rounded-md px-2 py-2 text-[8px] ${i === 0 ? 'border border-cyan-200/20 bg-cyan-200/10 text-cyan-100' : 'text-slate-600'}`}>{section}</div>)}
                      </div>
                      <div className="p-3 sm:p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[8px] uppercase tracking-[0.2em] text-slate-500">Live preview</span>
                          <span className="rounded-full bg-emerald-300/10 px-2 py-1 text-[8px] text-emerald-200">All changes saved</span>
                        </div>
                        <div className="mt-4 rounded-lg border border-white/[0.07] bg-gradient-to-br from-slate-800/70 to-slate-950 p-4">
                          <div className="h-1.5 w-12 rounded bg-cyan-300/60" />
                          <div className="mt-3 h-3 w-[82%] rounded bg-white/85" />
                          <div className="mt-2 h-3 w-[60%] rounded bg-white/60" />
                          <div className="mt-3 h-2 w-full rounded bg-white/10" />
                          <div className="mt-1.5 h-2 w-[84%] rounded bg-white/10" />
                          <div className="mt-4 flex gap-2"><div className="h-6 w-16 rounded-md bg-cyan-300" /><div className="h-6 w-16 rounded-md border border-white/20" /></div>
                        </div>
                        <div className="mt-3 grid grid-cols-3 gap-2">
                          {[0, 1, 2].map((item) => <div key={item} className="rounded-md border border-white/[0.08] p-2"><div className="h-4 w-4 rounded bg-cyan-200/15" /><div className="mt-2 h-1.5 w-full rounded bg-white/20" /><div className="mt-1 h-1.5 w-2/3 rounded bg-white/10" /></div>)}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="relative mt-4 text-center text-xs text-slate-500">A schema-driven editor experience, built end to end.</p>
              </div>
            </div>
          </article>
        </RevealOnScroll>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {supportingProjects.map((project, index) => (
            <RevealOnScroll key={project.title} delay={index * 70}>
              <article className="project-card group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.04]">
                <div className={`relative mb-6 flex h-36 items-center justify-center overflow-hidden rounded-xl border border-white/[0.07] bg-gradient-to-br ${project.accent}`}>
                  <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-30" />
                  <span className="relative font-mono text-5xl font-bold tracking-[-0.08em] text-white/85 transition duration-300 group-hover:scale-110">{project.mark}</span>
                  <span className="absolute bottom-3 right-3 font-mono text-[10px] text-white/45">PROJECT_{project.number}</span>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.16em] text-slate-500">{project.category}</p>
                <h3 className="mt-2 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-400">{project.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">{project.stack.map((tech) => <Tag key={tech}>{tech}</Tag>)}</div>
                <div className="mt-6 flex items-center justify-between border-t border-white/[0.08] pt-4">
                  <ExternalLink href={project.demo}>Live demo</ExternalLink>
                  <ExternalLink href={project.repo}>GitHub</ExternalLink>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
        <p className="mt-6 text-xs leading-6 text-slate-600">Personal project descriptions summarize the implementations linked above. Availability of third-party demos can change over time.</p>
      </div>
    </section>
  );
};
