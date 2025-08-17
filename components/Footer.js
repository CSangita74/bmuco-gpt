import Link from 'next/link';
import { Container } from './Common';
import { useContext } from 'react';
import { LangContext } from '../pages/_app';

const Footer = () => {
  const { lang } = useContext(LangContext);
  return (
    <footer className="border-t border-zinc-200/60 bg-white py-12 text-sm dark:border-zinc-800/60 dark:bg-zinc-950">
      <Container className="grid gap-6 md:grid-cols-4">
        <div>
          <div className="mb-2 flex items-center gap-2">
            <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-emerald-500" />
            <span className="font-semibold">BMUCO</span>
          </div>
          <p className="text-zinc-600 dark:text-zinc-400">
            A global, independent science organisation. © {new Date().getFullYear()}
          </p>
        </div>
        <div>
          <h5 className="mb-2 font-semibold">Navigate</h5>
          <ul className="space-y-1">
            {[
              ["About", "/about"],
              ["Programs", "/programs"],
              ["Talks", "/talks"],
              ["Impact", "/impact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href}>
                  <a className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-2 font-semibold">Support</h5>
          <ul className="space-y-1">
            {[
              ["Join", "/join"],
              ["Donate", "/join"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <Link href={href}>
                  <a className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                    {label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="mb-2 font-semibold">Policies</h5>
          <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
            <li>Independent Organisation</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
