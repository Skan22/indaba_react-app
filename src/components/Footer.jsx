import { ArrowUpRight, EnvelopeSimple } from '@phosphor-icons/react';
import logoWhite from '../assets/logo-white.webp';
import Calligraphy from './Calligraphy.jsx';
import { CONTACT_EMAIL, SOCIAL } from '../site.config.js';

const SECTIONS = [
  { label: 'About', href: '#about' },
  { label: 'Theme', href: '#theme' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Register', href: '#register' }
];

const socials = Object.entries(SOCIAL).filter(([, href]) => Boolean(href));

export default function Footer() {
  return (
    <footer className="footer act-deep">
      <Calligraphy />

      <div className="wrap footer__grid">
        <div className="footer__brand">
          <img className="footer__logo" src={logoWhite} alt="Deep Learning IndabaX Tunisia 2026" width="820" height="337" />
          <p className="footer__blurb">
            A one-day IndabaX, organised by the SUP&rsquo;COM IEEE Student Branch at Technopole Ghazela, Tunis.
          </p>
        </div>

        <nav aria-labelledby="footer-sections">
          <h2 className="footer__h" id="footer-sections">On this page</h2>
          <ul className="footer__list">
            {SECTIONS.map((item) => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="footer__h">Elsewhere</h2>
          <ul className="footer__list">
            <li>
              <a href="https://deeplearningindaba.com" target="_blank" rel="noreferrer noopener">
                Deep Learning Indaba <ArrowUpRight size={13} aria-hidden="true" style={{ display: 'inline', verticalAlign: '-1px' }} />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            {CONTACT_EMAIL ? (
              <li>
                <a href={`mailto:${CONTACT_EMAIL}`}>
                  {CONTACT_EMAIL} <EnvelopeSimple size={13} aria-hidden="true" style={{ display: 'inline', verticalAlign: '-1px' }} />
                </a>
              </li>
            ) : null}
            {socials.map(([name, href]) => (
              <li key={name}>
                <a href={href} target="_blank" rel="noreferrer noopener" style={{ textTransform: 'capitalize' }}>
                  {name} <ArrowUpRight size={13} aria-hidden="true" style={{ display: 'inline', verticalAlign: '-1px' }} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap footer__bottom">
        <p>&copy; {new Date().getFullYear()} IndabaX Tunisia. Part of the Deep Learning Indaba network.</p>
        <nav aria-label="Back to top">
          <a href="#top">Back to top</a>
        </nav>
      </div>
    </footer>
  );
}
