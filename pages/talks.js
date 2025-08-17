import { useState } from 'react';
import { Container, SectionTitle } from '../components/Common';
import DATA from '../lib/data';
import { Play, ArrowRight, X } from 'lucide-react';

const TalkCard = ({ t, openVideo }) => (
  <div className="min-w-[280px] max-w-[320px] shrink-0 rounded-xl border border-zinc-200/70 bg-white p-4 shadow-sm dark:border-zinc-800/70 dark:bg-zinc-900">
    <p className="text-sm font-semibold text-zinc-900 dark:text-white">{t.title}</p>
    <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{t.meta}</p>
    <div className="mt-3 flex items-center gap-3">
      <button
        className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400"
        onClick={() => openVideo(t.videoUrl)}
        disabled={!t.videoUrl}
        aria-disabled={!t.videoUrl}
        title={!t.videoUrl ? "Video link coming soon" : "Play video"}
      >
        Play <Play size={14} />
      </button>
      {t.citationUrl && (
        <a
          href={t.citationUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-zinc-500 underline-offset-2 hover:underline"
        >
          citation
        </a>
      )}
    </div>
  </div>
);

const VideoModal = ({ url, onClose }) => {
  if (!url) return null;
  return (
    <div
      className="fixed inset-0 z-50 grid place-items-center bg-black/70 p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black">
        <button
          className="absolute right-2 top-2 z-10 rounded-md bg-white/10 p-2 text-white backdrop-blur hover:bg-white/20"
          onClick={onClose}
          aria-label="Close"
        >
          <X />
        </button>
        <div className="aspect-video w-full">
          <iframe
            src={url.replace("watch?v=", "embed/")}
            title="BMUCO video"
            className="h-full w-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default function Talks() {
  const [videoUrl, setVideoUrl] = useState("");

  const openVideo = (url) => {
    if (url) setVideoUrl(url);
  };
  const closeVideo = () => setVideoUrl("");

  return (
    <main>
      <section id="talks" className="scroll-mt-24 bg-white py-24 dark:bg-zinc-950">
        <Container>
          <SectionTitle
            kicker="Talks & interviews"
            title="Conversations at the frontiers"
            subtitle="A curated archive of dialogues with laureates, award‑winners, and boundary‑pushing researchers."
          />
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto pb-4 pt-2">
              {DATA.talks.map((tk) => (
                <TalkCard key={tk.title} t={tk} openVideo={openVideo} />
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              onClick={() => alert("This would route to a full archive page with filters & search.")}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/70 bg-white px-4 py-2 text-sm font-semibold text-zinc-900 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-zinc-800/70 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              Browse full archive <ArrowRight size={16} />
            </button>
          </div>
        </Container>
        <VideoModal url={videoUrl} onClose={closeVideo} />
      </section>
    </main>
  );
}
