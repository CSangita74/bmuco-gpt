import { GradientBackdrop, NoiseOverlay, Tag, Container, useInViewMotion } from '../components/Common';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import { useContext } from 'react';
import { LangContext } from './_app';
import DATA from '../lib/data';
import Link from 'next/link';

export default function Home() {
  const motionProps = useInViewMotion();
  const { lang } = useContext(LangContext);
  return (
    <main>
      <section
        id="hero"
        className="relative overflow-hidden bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900"
        style={{ fontFamily: "'Inter', system-ui, -apple-system, Segoe UI, Roboto, 'Helvetica Neue', Arial" }}
      >
        <GradientBackdrop />
        <NoiseOverlay />
        <Container className="relative grid min-h-[72vh] grid-cols-1 items-center gap-12 py-16 md:grid-cols-2">
          <motion.div {...motionProps}>
            <Tag>
              {lang === 'np'
                ? 'Independent • Women-led • Neurodivergent-led • Global South Equity'
                : 'Independent • Women-led • Neurodivergent-led • Global South Equity'}
            </Tag>

            <h1
              className="mt-5 text-5xl font-semibold tracking-tight text-zinc-900 md:text-7xl dark:text-white"
              style={{ fontFamily: "'Newsreader', serif", letterSpacing: "-0.02em" }}
            >
              {lang === 'np'
                ? 'BMUCO — ɟविज्ञान, अनुसन्धान, ɡशिक्षा र जलविायु कायर्यको लाɟगि एक विैɢश्विक के न्द्र'
                : 'BMUCO — a global hub for science, research, education and climate action'}
            </h1>

            <p className="mt-5 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
              {lang === 'np'
                ? 'Since 2017, we connect Nobel laureates, world-leading researchers, and thousands of students across continents — with deep roots in India and Nepal.'
                : 'Since 2017, we connect Nobel laureates, world-leading researchers, and thousands of students across continents — with deep roots in India and Nepal.'}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/programs">
                <a className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-white dark:text-zinc-900">
                  {lang === 'np' ? 'कायर्यक्रम हेनुर्यहोस्' : 'Explore programs'}
                  <ArrowRight size={16} />
                </a>
              </Link>
              <Link href="/talks">
                <a className="inline-flex items-center gap-2 rounded-xl border border-zinc-300/70 bg-white px-4 py-2.5 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700/70 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800">
                  {lang === 'np' ? 'विा(ार्य हेनुर्यहोस्' : 'Watch talks'} <Play size={16} />
                </a>
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 text-center md:max-w-md">
              {DATA.stats.map((s) => (
                <div
                  key={s.l}
                  className="rounded-xl border border-zinc-200/70 bg-white/70 p-4 shadow-sm backdrop-blur dark:border-zinc-800/70 dark:bg-zinc-900/60"
                >
                  <p className="text-xl font-semibold text-zinc-900 dark:text-white">{s.n}</p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div {...useInViewMotion(0.1)} className="relative">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(42rem_42rem_at_80%_20%,rgba(99,102,241,0.12),transparent_60%),radial-gradient(28rem_28rem_at_20%_80%,rgba(16,185,129,0.12),transparent_60%)]" />
            <div className="aspect-[4/3] w-full overflow-hidden rounded-3xl border border-zinc-200/60 bg-white/60 p-2 shadow-2xl backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-900/60">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <img
                  src="https://images.unsplash.com/photo-1546146830-2cca9512c68e?q=80&w=1600&auto=format&fit=crop"
                  alt=""
                  className="h-full w-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/40 via-transparent to-white/10 dark:from-zinc-900/50 dark:to-transparent" />
                <div className="absolute inset-6 grid grid-rows-3 gap-3">
                  {DATA.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="rounded-xl bg-white/80 p-4 text-sm font-medium shadow-lg ring-1 ring-zinc-200/70 backdrop-blur dark:bg-zinc-800/70 dark:ring-zinc-700/70"
                    >
                      {h}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </Container>

        {/* Partners marquee */}
        <div aria-hidden className="border-t border-b border-zinc-200/60 bg-white/80 py-3 dark:border-zinc-800/60 dark:bg-zinc-950/40">
          <Container>
            <Marquee title="PARTNERS & FRIENDS" items={DATA.partners} />
          </Container>
        </div>
      </section>
    </main>
  );
}

const Marquee = ({ title, items }) => {
  return (
    <div className="flex items-center gap-6 overflow-hidden">
      <p className="text-xs font-semibold tracking-widest text-zinc-600 dark:text-zinc-400">{title}</p>
      <div className="relative flex-1">
        <div className="flex gap-10 whitespace-nowrap animate-[scroll_30s_linear_infinite]">
          {items.concat(items).map((t, i) => (
            <span key={i} className="text-sm text-zinc-700 dark:text-zinc-300">
              {t}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};
