import { motion } from 'framer-motion';
import { Container, SectionTitle, useInViewMotion } from '../components/Common';

export default function About() {
  return (
    <main>
      <section id="about" className="scroll-mt-24 bg-white py-24 dark:bg-zinc-950">
        <Container>
          <SectionTitle
            kicker="Who we are"
            title="Independent, global, and purpose‑driven"
            subtitle="BMUCO began with hands‑on outreach in under‑resourced schools in India and Nepal and has grown into a global platform for science, research, education, and climate engagement."
          />

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              {...useInViewMotion()}
              className="rounded-2xl border border-zinc-200/70 bg-zinc-50 p-6 dark:border-zinc-800/70 dark:bg-zinc-900"
            >
              <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Our mission</h3>
              <p className="text-zinc-700 dark:text-zinc-300">
                1) Build a world‑class hub for science, research & outreach.<br/>
                2) Provide real equity to the Global South through access and visibility.<br/>
                3) Align our efforts with climate action.<br/>
                4) Be deeply inclusive — women‑led and neurodivergent‑led.
              </p>
              <div className="mt-5 grid grid-cols-2 gap-4">
                {[
                  { label: "Inclusive by design" },
                  { label: "Research & education" },
                  { label: "World‑leading speakers" },
                  { label: "Global South equity" },
                ].map((f, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 rounded-xl bg-white p-3 text-sm shadow-sm ring-1 ring-zinc-200/70 dark:bg-zinc-800 dark:ring-zinc-700/70"
                  >
                    <span>{f.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              {...useInViewMotion(0.1)}
              className="relative overflow-hidden rounded-2xl border border-zinc-200/70 bg-white p-6 dark:border-zinc-800/70 dark:bg-zinc-900"
            >
              <img
                src="https://static.wixstatic.com/media/c2f56a_5697e73846ed4d7d86fc8ae941ed06ef~mv2.jpeg/v1/fill/w_1115,h_627,q_90,enc_avif,quality_auto/c2f56a_5697e73846ed4d7d86fc8ae941ed06ef~mv2.jpeg"
                alt=""
                className="absolute inset-0 h-full w-full object-cover opacity-10"
              />
              <div className="relative">
                <h3 className="mb-3 text-lg font-semibold text-zinc-900 dark:text-white">Highlights</h3>
                <ul className="space-y-3 text-zinc-700 dark:text-zinc-300">
                  <li>
                    Interview with <strong>Maryna Viazovska</strong> at the Royal Institution, in collaboration with <strong>LIMS</strong>.
                  </li>
                  <li>
                    Sessions with <strong>Sir Roger Penrose</strong>, <strong>David Saltzberg</strong> (science advisor to <em>Oppenheimer</em> & <em>The Big Bang Theory</em>), <strong>Avi Loeb</strong>, and <strong>CERN</strong> researchers.
                  </li>
                  <li>
                    Co‑host of the <strong>Abel Symposium 2025</strong> in Bonn (with the <strong>Hausdorff Center for Mathematics</strong> and others).
                  </li>
                  <li>
                    Winter School on <strong>Quantum Field Theory</strong> with hundreds of applicants; lectures by <strong>Neil Lambert</strong> and <strong>Greg Gribakin</strong>.
                  </li>
                  <li>
                    Climate dialogues (pre‑COP) with <strong>Dr Helen Adams</strong>, <strong>Elizabeth Wathuti</strong>, and others.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>
    </main>
  );
}
