import { useState } from 'react';
import './App.css';

import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { About } from './components/sections/About';
import { Contact } from './components/sections/Contact';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell min-h-screen overflow-x-clip bg-[#080b12] text-slate-100">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main>
        <Home />
        <Projects />
        <Experience />
        <About />
        <Contact />
      </main>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} Aloknath Sah. Built with React, Vite and Tailwind CSS.</p>
          <a className="transition hover:text-cyan-300" href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
