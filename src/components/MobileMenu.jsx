const NAV_ITEMS = [
  { href: '#projects', label: 'Work' },
  { href: '#experience', label: 'Experience' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  const resumeHref = `${import.meta.env.BASE_URL}Aloknath-Sah-Resume.pdf`;

  return (
    <div
      id="mobile-navigation"
      aria-hidden={!menuOpen}
      className={`fixed inset-0 z-30 flex flex-col items-center justify-center bg-[#080b12]/[0.98] px-6 backdrop-blur-2xl transition duration-300 md:hidden ${
        menuOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'
      }`}
    >
      <p className="mb-8 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-200">Navigate</p>
      {NAV_ITEMS.map((item, index) => (
        <a
          key={item.href}
          href={item.href}
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
          style={{ transitionDelay: menuOpen ? `${index * 45}ms` : '0ms' }}
          className={`my-2 text-3xl font-semibold tracking-tight text-white transition duration-300 hover:text-cyan-200 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
        >
          {item.label}
        </a>
      ))}
      <a
        href={resumeHref}
        download
        tabIndex={menuOpen ? 0 : -1}
        onClick={() => setMenuOpen(false)}
        className="mt-8 rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-100"
      >
        Download resume ↗
      </a>
    </div>
  );
};
