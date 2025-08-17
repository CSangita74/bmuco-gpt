import { useState, useContext } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon, Globe2, ChevronRight, Search } from 'lucide-react';
import { Container } from './Common';
import { useTheme } from '../lib/useTheme';
import { LangContext } from '../pages/_app';

const Nav = () => {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const { lang, setLang } = useContext(LangContext);

  const links = [
    { href: "/about", labelEn: "About", labelNp: "हाम्रो बारेमा" },
    { href: "/programs", labelEn: "Programs", labelNp: "कायर्यक्रमहरू" },
    { href: "/talks", labelEn: "Talks", labelNp: "विा(ार्य" },
    { href: "/impact", labelEn: "Impact", labelNp: "प्रभावि" },
    { href: "/partners", labelEn: "Partners", labelNp: "साझेदारहरू" },
    { href: "/team", labelEn: "Team", labelNp: "टोली" },
    { href: "/join", labelEn: "Join", labelNp: "सामेल हुनुहोस्" },
    { href: "/contact", labelEn: "Contact", labelNp: "सम्पकर्य " },
  ];

  // Simple search index for site content
  const searchIndex = [
    { name: "Maryna Viazovska — Symmetries & Sphere Packings (Talk)", url: "/talks" },
    { name: "Sir Roger Penrose — Twistor ideas today (Talk)", url: "/talks" },
    { name: "David Saltzberg — The science behind Oppenheimer (Talk)", url: "/talks" },
    { name: "Avi Loeb — Interstellar archaeology (Talk)", url: "/talks" },
    { name: "CERN Researcher — Frontiers at the LHC (Talk)", url: "/talks" },
    { name: "Pre-COP: Science & Policy (Talk)", url: "/talks" },
    { name: "Talk Series (Program)", url: "/programs" },
    { name: "Schools Outreach (Program)", url: "/programs" },
    { name: "Winter & Summer Schools (Program)", url: "/programs" },
    { name: "Climate Dialogues (Program)", url: "/programs" },
    { name: "Research Sprints (Program)", url: "/programs" },
    { name: "Community & Mentorship (Program)", url: "/programs" },
    { name: "Neil Lambert (Advisor)", url: "/team" },
    { name: "Yang-Hui He (Advisor)", url: "/team" },
    { name: "Madhav Tiwari (Director)", url: "/team" },
    { name: "Rajarshi Maiti (Co-Director)", url: "/team" },
    { name: "Sridhar Sai Gorrepatti (CTO)", url: "/team" },
    { name: "Ryan Graham (Vision Manager)", url: "/team" },
    { name: "Elizabeth Wathuti (Climate speaker)", url: "/impact" },
    { name: "Dr Helen Adams (Climate speaker)", url: "/impact" },
  ];

  const filtered = query
    ? searchIndex.filter((item) =>
        item.name.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <header className="sticky top-0 z-50">
      <div className="border-b border-zinc-200/60 bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-zinc-800/60 dark:bg-zinc-950/60">
        <Container className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <a className="mr-2 inline-flex items-center gap-2 rounded-xl px-2 py-1 text-left focus:outline-none focus:ring-2 focus:ring-indigo-500">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-500" />
              <div className="hidden sm:block">
                <p className="text-xs font-semibold text-zinc-800 dark:text-zinc-200">BMUCO</p>
                <p className="-mt-1 text-[10px] text-zinc-500 dark:text-zinc-400">Since 2017</p>
              </div>
            </a>
          </Link>

          {/* Desktop nav links */}
          <nav className="hidden items-center gap-6 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href}>
                <a className="text-sm font-medium text-zinc-700 transition hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-zinc-300 dark:hover:text-white">
                  {lang === 'np' ? l.labelNp : l.labelEn}
                </a>
              </Link>
            ))}
          </nav>

          {/* Theme, language, search, and join buttons */}
          <div className="flex items-center gap-2">
            {/* Theme toggle (light, system, dark) */}
            <div className="hidden items-center rounded-xl border border-zinc-200/70 bg-white/80 p-1 dark:border-zinc-800/70 dark:bg-zinc-900/60 sm:flex">
              <button
                aria-pressed={theme === "light"}
                onClick={() => setTheme("light")}
                className={`rounded-lg p-1.5 ${theme === "light" ? "bg-zinc-100 dark:bg-zinc-800" : ""}`}
                aria-label="Use light theme"
              >
                <Sun size={16} />
              </button>
              <button
                aria-pressed={theme === "system"}
                onClick={() => setTheme("system")}
                className={`rounded-lg p-1.5 ${theme === "system" ? "bg-zinc-100 dark:bg-zinc-800" : ""}`}
                aria-label="Use system theme"
              >
                <Globe2 size={16} />
              </button>
              <button
                aria-pressed={theme === "dark"}
                onClick={() => setTheme("dark")}
                className={`rounded-lg p-1.5 ${theme === "dark" ? "bg-zinc-100 dark:bg-zinc-800" : ""}`}
                aria-label="Use dark theme"
              >
                <Moon size={16} />
              </button>
            </div>

            {/* Language toggle (EN/Nepali) */}
            <button
              onClick={() => setLang(lang === 'en' ? 'np' : 'en')}
              className="hidden rounded-lg border border-zinc-200/70 bg-white px-3 py-2 text-sm font-semibold text-zinc-900 shadow-sm hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800 sm:block"
            >
              {lang === 'en' ? 'नेपाली' : 'EN'}
            </button>

            {/* Search icon */}
            <button
              className="rounded-lg p-2"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Search />
            </button>

            {/* Donate/Join CTA */}
            <Link href="/join">
              <a className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-white dark:text-zinc-900">
                {lang === 'np' ? 'Donate / Join' : 'Donate / Join'}
                <ChevronRight size={16} />
              </a>
            </Link>

            {/* Mobile menu toggle */}
            <button
              className="ml-2 rounded-lg p-2 md:hidden"
              aria-label="Open menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </Container>

        {/* Mobile menu dropdown */}
        {open && (
          <div className="border-t border-zinc-200/60 bg-white dark:border-zinc-800/60 dark:bg-zinc-950 md:hidden">
            <Container className="flex flex-col py-2">
              {links.map((l) => (
                <Link key={l.href} href={l.href}>
                  <a
                    onClick={() => setOpen(false)}
                    className="rounded-lg px-3 py-2 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-zinc-200 dark:hover:bg-zinc-900"
                  >
                    {lang === 'np' ? l.labelNp : l.labelEn}
                  </a>
                </Link>
              ))}
              <button
                onClick={() => { setOpen(false); setSearchOpen(true); }}
                className="rounded-lg px-3 py-2 text-left text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-900"
              >
                Search
              </button>
            </Container>
          </div>
        )}
      </div>

      {/* Search Overlay Modal */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4">
          <div className="relative w-full max-w-lg rounded-2xl bg-white p-4 dark:bg-zinc-900">
            <button
              className="absolute right-2 top-2 rounded-md bg-white/10 p-2 text-zinc-800 backdrop-blur hover:bg-white/20 dark:text-zinc-100"
              onClick={() => { setSearchOpen(false); setQuery(''); }}
              aria-label="Close search"
            >
              <X />
            </button>
            <h2 className="mb-2 text-lg font-semibold text-zinc-800 dark:text-zinc-100">Search BMUCO</h2>
            <input
              type="search"
              placeholder="Type to search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mb-3 w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm text-zinc-800 outline-none ring-indigo-500 focus:ring dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100"
            />
            <ul>
              {filtered.map(item => (
                <li key={item.name} className="mb-1">
                  <Link href={item.url}>
                    <a
                      onClick={() => { setSearchOpen(false); setQuery(''); }}
                      className="block rounded-lg px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800"
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
              {query && filtered.length === 0 && (
                <li className="text-sm text-zinc-500 dark:text-zinc-400">No results found.</li>
              )}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
