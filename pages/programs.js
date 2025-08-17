import { motion } from 'framer-motion';
import { Container, SectionTitle, useInViewMotion } from '../components/Common';
import DATA from '../lib/data';
import { ChevronRight } from 'lucide-react';
import { useRouter } from 'next/router';

export default function Programs() {
  const router = useRouter();
  return (
    <main>
      <section id="programs" className="scroll-mt-24 bg-gradient-to-b from-zinc-50 to-white py-24 dark:from-zinc-900 dark:to-zinc-950">
        <Container>
          <SectionTitle
            kicker="What we do"
            title="Programs that meet people where they are"
            subtitle="Virtual and hybrid initiatives that draw big audiences from India, Nepal, and beyond — bringing the world’s best science to emerging talent."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {DATA.programs.map((c) => (
              <motion.div
                key={c.title}
                {...useInViewMotion()}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-6 shadow-sm transition hover:shadow-md dark:border-zinc-800/70 dark:bg-zinc-900"
              >
                <div className="absolute right-0 top-0 h-24 w-24 -translate-y-1/2 translate-x-1/3 rounded-full bg-gradient-to-br from-indigo-500/20 to-emerald-500/20 blur-2xl" />
                <h3 className="mb-2 text-lg font-semibold text-zinc-900 dark:text-white">{c.title}</h3>
                <p className="mb-4 text-sm text-zinc-600 dark:text-zinc-400">{c.body}</p>
                <button
                  onClick={() => router.push('/' + c.target)}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition group-hover:translate-x-0.5 dark:text-indigo-400"
                >
                  {c.cta} <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
