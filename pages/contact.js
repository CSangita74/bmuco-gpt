import { Container, SectionTitle } from '../components/Common';

export default function Contact() {
  return (
    <main>
      <section id="contact" className="scroll-mt-24 bg-gradient-to-b from-zinc-50 to-white py-24 dark:from-zinc-900 dark:to-zinc-950">
        <Container>
          <SectionTitle
            kicker="Contact"
            title="Let’s build something important"
            subtitle="Proposals for talks, schools, or research sprints are welcome. Media and press enquiries too."
          />
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! On a live site this would submit to your backend.");
            }}
            className="mx-auto max-w-2xl space-y-4"
            aria-labelledby="contact-heading"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring dark:border-zinc-700 dark:bg-zinc-900"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring dark:border-zinc-700 dark:bg-zinc-900"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-medium" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm outline-none ring-indigo-500 focus:ring dark:border-zinc-700 dark:bg-zinc-900"
              />
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs text-zinc-600 dark:text-zinc-400">
                By submitting, you agree to our privacy policy.
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-white dark:text-zinc-900"
              >
                Send message
              </button>
            </div>
          </form>
        </Container>
      </section>
    </main>
  );
}
