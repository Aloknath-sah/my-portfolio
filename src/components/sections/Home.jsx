import { RevealOnScroll } from '../RevealOnScroll';

const proofPoints = [
  { value: '5+', label: 'Years building for the web' },
  { value: '~2 days → 15 min', label: 'Report-prep workflow' },
  { value: '30%', label: 'Faster page loads' },
  { value: '2,000+', label: 'Records virtualized' },
];

export const Home = () => {
  const resumeHref = `${import.meta.env.BASE_URL}Aloknath-Sah-Resume.pdf`;

  return (
    <section id="home" className="relative isolate scroll-mt-24 overflow-hidden pt-32 sm:pt-40">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="hero-orb hero-orb-one" />
        <div className="hero-orb hero-orb-two" />
        <div className="absolute inset-0 bg-grid opacity-40" />
      </div>

      <div className="mx-auto grid min-h-[650px] max-w-6xl items-center gap-14 px-5 pb-20 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10 lg:pb-28">
        <RevealOnScroll className="relative z-10">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-200/20 bg-cyan-200/[0.06] px-3.5 py-2 text-xs font-medium tracking-wide text-cyan-100">
            <span className="h-2 w-2 rounded-full bg-emerald-300 shadow-[0_0_10px_rgba(110,231,183,0.75)]" />
            Senior Software Engineer · Frontend-heavy
          </div>

          <p className="mb-4 font-mono text-sm text-slate-500">Hello, I'm</p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.03] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">
            Aloknath <span className="text-gradient">Sah.</span>
            <span className="mt-3 block text-3xl font-medium leading-tight tracking-[-0.035em] text-slate-300 sm:text-4xl lg:text-[2.65rem]">
              I make complex frontend systems feel simple.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-400 sm:text-lg">
            I build scalable React and TypeScript experiences, with a focus on frontend architecture,
            performance, accessibility, and data-intensive products—from AI-powered workflows to interfaces used at scale.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className="primary-button inline-flex items-center justify-center gap-3">
              Explore selected work <span aria-hidden="true">↘</span>
            </a>
            <a href="#contact" className="secondary-button inline-flex items-center justify-center gap-3">
              Let's connect <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-slate-500">
            <span className="inline-flex items-center gap-2"><span aria-hidden="true">⌖</span> Bengaluru, India</span>
            <a className="transition hover:text-cyan-200" href="https://github.com/Aloknath-sah" target="_blank" rel="noreferrer">GitHub ↗</a>
            <a className="transition hover:text-cyan-200" href="https://www.linkedin.com/in/aloknath-sah/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <a className="transition hover:text-cyan-200" href={resumeHref} download>Download resume ↓</a>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={120} className="relative mx-auto w-full max-w-[530px]">
          <div aria-hidden="true" className="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-blue-500/5 to-violet-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0c111c]/95 shadow-[0_30px_100px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div className="flex items-center gap-2" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
              </div>
              <span className="font-mono text-[11px] text-slate-500">engineering-notes.ts</span>
              <span className="text-xs text-cyan-200">●</span>
            </div>
            <div className="p-5 sm:p-7">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Core strengths</p>
                  <h2 className="mt-1 text-lg font-semibold text-white">Build for the real world.</h2>
                </div>
                <span className="rounded-xl border border-cyan-200/20 bg-cyan-200/10 px-3 py-2 font-mono text-xs text-cyan-100">{`{ UI }`}</span>
              </div>

              <div className="space-y-3">
                {[
                  { key: '01', title: 'Architecture & systems', detail: 'Reusable components · Micro frontends', width: 'w-[91%]', color: 'from-cyan-300 to-blue-400' },
                  { key: '02', title: 'Performance engineering', detail: 'Virtualization · Caching · Rendering', width: 'w-[86%]', color: 'from-blue-400 to-violet-400' },
                  { key: '03', title: 'Product experience', detail: 'Accessibility · Interaction · Resilience', width: 'w-[94%]', color: 'from-emerald-300 to-cyan-300' },
                ].map((item) => (
                  <div key={item.key} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-4">
                    <div className="flex items-start gap-3">
                      <span className="font-mono text-xs text-slate-600">{item.key}</span>
                      <div className="min-w-0 flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <p className="text-sm font-semibold text-slate-100">{item.title}</p>
                          <span className="text-[10px] uppercase tracking-wider text-slate-600">Focus</span>
                        </div>
                        <p className="mt-1 text-xs leading-5 text-slate-500">{item.detail}</p>
                        <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/[0.06]">
                          <div className={`h-full rounded-full bg-gradient-to-r ${item.color} ${item.width}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-xl border border-cyan-200/15 bg-cyan-200/[0.045] p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-100/70">Current featured build</p>
                    <p className="mt-1 font-semibold text-white">PageForge · Visual landing page builder</p>
                  </div>
                  <a href="https://page-forge-ten.vercel.app/" target="_blank" rel="noreferrer" aria-label="Open PageForge demo" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-cyan-200/20 text-cyan-100 transition hover:bg-cyan-200/10">↗</a>
                </div>
              </div>
            </div>
          </div>
          <p className="relative mt-4 text-center font-mono text-[11px] tracking-wide text-slate-600">Thoughtful UI · Measurable impact · Maintainable systems</p>
        </RevealOnScroll>
      </div>

      <div className="border-y border-white/[0.07] bg-white/[0.018]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-0 px-5 sm:px-8 md:grid-cols-4">
          {proofPoints.map((point, index) => (
            <RevealOnScroll key={point.label} delay={index * 55} className={`proof-point py-6 sm:py-7 ${index % 2 === 0 ? 'border-r border-white/[0.07] md:border-r' : 'md:border-r md:border-white/[0.07]'} ${index === 2 ? 'md:border-l md:border-white/[0.07]' : ''} ${index === 3 ? 'border-r-0' : ''}`}>
              <p className="text-xl font-semibold tracking-tight text-white sm:text-2xl">{point.value}</p>
              <p className="mt-2 max-w-[180px] text-xs leading-5 text-slate-500 sm:text-sm">{point.label}</p>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
