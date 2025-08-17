import { motion } from 'framer-motion';
import { Container, SectionTitle, useInViewMotion } from '../components/Common';
import { Users2 } from 'lucide-react';
import DATA from '../lib/data';

export default function Partners() {
  return (
    <main>
      <section id="partners" className="scroll-mt-24 bg-white py-24 dark:bg-zinc-950">
        <Container>
          <SectionTitle
            kicker="Network"
            title="Partners & collaborators"
            subtitle="We collaborate with universities, academies, and institutes to deliver world‑class programs."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {DATA.partners.map((p) => (
              <motion.div
                key={p}
                {...useInViewMotion()}
                className="flex items-center gap-3 rounded-xl border border-zinc-200/70 bg-zinc-50 p-4 dark:border-zinc-800/70 dark:bg-zinc-900"
              >
                <Users2 className="shrink-0" />
                <p className="text-sm text-zinc-800 dark:text-zinc-200">{p}</p>
              </motion.div>
            ))}
          </div>
          <p className="mt-6 text-xs text-zinc-500">
            Note: Co‑hosts and event partners are credited in event highlights (e.g., Abel Symposium 2025) but are not listed as formal organizational partners unless explicitly agreed.
          </p>
        </Container>
      </section>
    </main>
  );
}
