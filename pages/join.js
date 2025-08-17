import { motion } from 'framer-motion';
import { Container, SectionTitle, useInViewMotion } from '../components/Common';
import { ChevronRight } from 'lucide-react';

export default function Join() {
  return (
    <main>
      <section id="join" className="scroll-mt-24 bg-white py-24 dark:bg-zinc-950">
        <Container>
          <SectionTitle
            kicker="Support"
            title="Join the movement"
            subtitle="BMUCO is powered by members, donors, and partners. Your support keeps programs free or low‑cost for students in the Global South."
          />
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              {...useInViewMotion()}
              className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-800/70 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-lg font-semibold">Become a member</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Contribute £1/month to sustain outreach and talks.
              </p>
              <button
                onClick={() => alert("This would open Patreon / membership page.")}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-white dark:text-zinc-900"
              >
                Join for £1 <ChevronRight size={16} />
              </button>
            </motion.div>

            <motion.div
              {...useInViewMotion(0.1)}
              className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-800/70 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-lg font-semibold">Donate</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                One‑time or recurring gifts. We’ll direct funds to the highest‑impact initiatives.
              </p>
              <button
                onClick={() => alert("This would open a /donate page with Stripe.")}
                className="mt-4 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                Donate now <ChevronRight size={16} />
              </button>
            </motion.div>

            <motion.div
              {...useInViewMotion(0.2)}
              className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-800/70 dark:bg-zinc-900"
            >
              <h3 className="mb-2 text-lg font-semibold">Partner with us</h3>
              <p className="text-sm text-zinc-700 dark:text-zinc-300">
                Institutes & NGOs: co‑host a program or connect your labs with emerging talent.
              </p>
              <button
                onClick={() => window.location.href = '/contact'}
                className="mt-4 inline-flex items-center gap-2 rounded-xl border border-zinc-300 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-700 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                Get in touch <ChevronRight size={16} />
              </button>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
