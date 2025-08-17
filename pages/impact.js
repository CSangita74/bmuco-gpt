import { motion } from 'framer-motion';
import { Container, SectionTitle, useInViewMotion } from '../components/Common';

export default function Impact() {
  return (
    <main>
      <section id="impact" className="scroll-mt-24 bg-gradient-to-b from-zinc-50 to-white py-24 dark:from-zinc-900 dark:to-zinc-950">
        <Container>
          <SectionTitle
            kicker="Outreach & equity"
            title="From classrooms to colloquia"
            subtitle="We balance elite access with grassroots reach, ensuring students from the Global South take center stage."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { n: "30+", l: "Schools in India & Nepal" },
              { n: "10k+", l: "Event registrations" },
              { n: "100+", l: "Speakers & mentors" },
            ].map((s) => (
              <motion.div
                key={s.l}
                {...useInViewMotion()}
                className="rounded-2xl border border-zinc-200/70 bg-white p-6 text-center shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900"
              >
                <p className="text-4xl font-semibold text-zinc-900 dark:text-white">{s.n}</p>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">{s.l}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <motion.div
              {...useInViewMotion()}
              className="relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-6 dark:border-zinc-800/70 dark:bg-zinc-900"
            >
              <img
                src="https://images.unsplash.com/photo-1523246191510-4aa3e2d91519?q=80&w=1600&auto=format&fit=crop"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-10"
              />
              <div className="relative">
                <h3 className="mb-2 text-lg font-semibold">Equity in practice</h3>
                <p className="text-zinc-700 dark:text-zinc-300">
                  We design timezones, formats, and scholarships to maximize participation from India, Nepal, and the wider Global South. Our hybrid/virtual edge ensures elite science isn’t gated by geography.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...useInViewMotion(0.1)}
              className="rounded-2xl border border-zinc-200/70 bg-white p-6 dark:border-zinc-800/70 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-lg font-semibold">Advisory & governance</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                Honorary advisors include Prof <strong>Neil Lambert</strong> and Prof <strong>Yang‑Hui He</strong>. Our leadership prioritizes inclusion by design.
              </p>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
