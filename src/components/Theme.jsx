import { LockKey } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';

/* The redacted title, kept from the original mockup: six characters, an
   ampersand, then three and six. */
const REDACTED = [6, 0, 3, 6];

export default function Theme() {
  return (
    <section
      id="theme"
      className="act-light act-light--sunken"
      style={{ paddingBlock: 'var(--section-y)' }}
    >
      <div className="wrap">
        <Reveal className="teaser">
          <h2 className="h-section">This year&rsquo;s theme is still under wraps.</h2>
          <p className="lede" style={{ marginTop: '1rem' }}>
            It is announced on the day, from the stage. Everything else about the programme is below.
          </p>

          <div className="cipher">
            <LockKey className="cipher__lock" size={26} aria-hidden="true" />
            <p className="cipher__text">
              <span className="sr-only">The theme is redacted until the event.</span>
              <span aria-hidden="true">
                {REDACTED.map((count, block) =>
                  count === 0 ? (
                    <span key={block}>&nbsp;&amp;&nbsp;</span>
                  ) : (
                    <span key={block}>
                      {Array.from({ length: count }, (_, i) => (
                        <span className="cipher__redacted" key={i} />
                      ))}
                      {block < REDACTED.length - 1 ? ' ' : null}
                    </span>
                  )
                )}
              </span>
            </p>
          </div>

          <p className="binary" aria-hidden="true">
            01001000 01001001 01000100 01000100 01000101 01001110
          </p>

          <p className="badge">Revealed 26 September</p>
        </Reveal>
      </div>
    </section>
  );
}
