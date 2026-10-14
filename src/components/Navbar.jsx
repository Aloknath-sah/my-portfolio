import { useEffect } from 'react';

const NAV_ITEMS = [
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const resumeHref = `${import.meta.env.BASE_URL}Aloknath-Sah-Resume.pdf`;

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-white/[0.08] bg-[#080b12]/85 backdrop-blur-xl">
      <nav aria-label="Main navigation" className="mx-auto flex h-[74px] max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#home" aria-label="Aloknath Sah home" className="group flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 font-mono text-sm font-bold text-cyan-200 transition group-hover:border-cyan-200/70 group-hover:bg-cyan-200/15">AS</span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold tracking-wide text-white">Aloknath Sah</span>
            <span className="mt-1 block text-[10px] uppercase tracking-[0.22em] text-slate-500">Frontend engineering</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-400 transition hover:text-white">
              {item.label}
            </a>
          ))}
          <a
            href={resumeHref}
            download
            className="rounded-full border border-cyan-300/40 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:border-cyan-200 hover:bg-cyan-200/10"
          >
            Resume ↗
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-xl border border-white/10 text-slate-200 transition hover:border-cyan-200/50 hover:bg-white/5 md:hidden"
        >
          <span className={`h-0.5 w-5 rounded bg-current transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-5 rounded bg-current transition ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-5 rounded bg-current transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>
    </header>
  );
};
