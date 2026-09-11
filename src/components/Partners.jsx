import Reveal from './Reveal.jsx';
import partners2025 from '../assets/partners-2025.webp';
import logoSupcom from '../assets/logo-supcom.webp';
import logoBna from '../assets/logo-bna.webp';
import { CONTACT_EMAIL } from '../site.config.js';

const TIERS = [
  {
    logo: logoSupcom,
    logoWidth: 800,
    logoHeight: 164,
    name: "SUP'COM",
    desc: 'Hosts the day: venue, connectivity and the infrastructure that carries it.'
  },
  {
    logo: logoBna,
    logoWidth: 119,
    logoHeight: 68,
    name: 'BNA',
    desc: 'Sponsors the 2026 edition.'
  }
];

export default function Partners() {
  return (
    <section id="sponsors" className="act-light" style={{ paddingBlock: 'var(--section-y)' }}>
      <div className="wrap partners__grid">
        <Reveal>
          <p className="eyebrow">Sponsors</p>
          <h2 className="h-section" style={{ marginTop: '.75rem', maxWidth: '14ch' }}>
            Made possible together.
          </h2>
          <p className="lede" style={{ marginTop: '1rem', maxWidth: '38ch' }}>
            IndabaX Tunisia is run by volunteers and paid for by the organisations that back it.
          </p>
          {CONTACT_EMAIL ? (
            <p style={{ marginTop: '1.75rem' }}>
              <a
                className="btn btn--onlight"
                href={`mailto:${CONTACT_EMAIL}?subject=IndabaX%20Tunisia%202026%20partnership`}
              >
                Become a partner
              </a>
            </p>
          ) : (
            <p style={{ marginTop: '1.5rem', fontSize: 'var(--fs-sm)', color: 'var(--text-muted)' }}>
              Partnership details for 2026 are being finalised with the SUP&rsquo;COM IEEE Student Branch.
            </p>
          )}
        </Reveal>

        <div className="tiers">
          {TIERS.map((tier, i) => (
            <Reveal className="tier" key={tier.name} delay={80 + i * 90}>
              <span className="tier__mark">
                <img
                  src={tier.logo}
                  width={tier.logoWidth}
                  height={tier.logoHeight}
                  loading="lazy"
                  decoding="async"
                  alt={`${tier.name} logo`}
                />
              </span>
              <div>
                <p className="tier__name">{tier.name}</p>
                <p className="tier__desc">{tier.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Last edition's supporters, shown as their own logo bar and labelled as
          2025 so nothing is implied about who is backing 2026. */}
      <Reveal className="wrap" delay={140}>
        <div className="logowall">
          <h3 className="logowall__h">Who backed the 2025 edition</h3>
          <img
            className="logowall__img"
            src={partners2025}
            width="2048"
            height="99"
            loading="lazy"
            decoding="async"
            alt="Partners of IndabaX Tunisia 2025: the Tunisian government, Invest for Jobs with GIZ and the Digital Transformation Center Tunisia, InstaDeep, the SUP'COM IEEE Student Branch, SUP'COM, the Deep Learning Indaba, Zindi, the IEEE Computational Intelligence Society Tunisia Chapter, Orange Digital Center and the IEEE Tunisia Section."
          />
        </div>
      </Reveal>
    </section>
  );
}
