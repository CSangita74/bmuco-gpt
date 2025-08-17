import { motion } from 'framer-motion';
import { Container, SectionTitle, useInViewMotion } from '../components/Common';
import DATA from '../lib/data';

export default function Team() {
  return (
    <main>
      <section id="team" className="scroll-mt-24 bg-gradient-to-b from-zinc-50 to-white py-24 dark:from-zinc-900 dark:to-zinc-950">
        <Container>
          <SectionTitle
            kicker="People"
            title="Core team & advisors"
            subtitle={DATA.team.aboutInclusion}
          />
          <div className="grid gap-6 md:grid-cols-4">
            {DATA.team.core.map((m) => (
              <motion.div
                key={m.name}
                {...useInViewMotion()}
                className="rounded-2xl border border-zinc-200/70 bg-white p-6 dark:border-zinc-800/70 dark:bg-zinc-900"
              >
                <div className="h-16 w-16 overflow-hidden rounded-xl bg-gradient-to-br from-indigo-500 to-emerald-500">
                  {m.img ? <img src={m.img} alt={m.name} className="h-full w-full object-cover" /> : null}
                </div>
                <h4 className="mt-3 font-semibold text-zinc-900 dark:text-white">{m.name}</h4>
                <p className="text-sm text-zinc-600 dark:text-zinc-400">{m.role}</p>
                <p className="mt-2 text-sm text-zinc-700 dark:text-zinc-300">{m.bio}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10 rounded-2xl border border-zinc-200/70 bg-white p-6 dark:border-zinc-800/70 dark:bg-zinc-900">
            <h3 className="mb-2 text-lg font-semibold">Honorary Advisors</h3>
            <p className="text-sm text-zinc-700 dark:text-zinc-300">
              {DATA.team.advisors.map((a) => a.name).join(" • ")}
            </p>
          </div>
        </Container>
      </section>
    </main>
  );
}
