import { ArrowUpRight, Ticket, ForkKnife, UsersThree, Confetti } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';
import Calligraphy from './Calligraphy.jsx';
import { ATTEND_FORM_URL, CHALLENGE_REGISTRATION, CONTACT_EMAIL } from '../site.config.js';

/* Straight from the published attendee form: free entry, limited places,
   meals included, and it asks whether you are also entering the challenge. */
const INCLUDED = [
  { Icon: Ticket, text: 'Free entry, but places are limited' },
  { Icon: ForkKnife, text: 'Meals and drinks included' },
  { Icon: UsersThree, text: 'Open to students, researchers, academics and professionals' }
];

export default function Register() {
  return (
    <section id="register" className="register act-deep" style={{ paddingBlock: 'var(--section-y)' }}>
      <Calligraphy />
      <div
        aria-hidden="true"
        className="ambient"
        style={{ left: '78%', top: '30%', width: 520, height: 520, transform: 'translate(-50%,-50%)' }}
      />

      <div className="wrap">
        <Reveal className="register__panel">
          <div className="register__col">
            {ATTEND_FORM_URL ? (
              <p className="status status--deep">
                <span className="status__dot" aria-hidden="true" />
                Registration open
              </p>
            ) : null}
            <h2 className="h-section" style={{ marginTop: '1rem', maxWidth: '15ch' }}>
              Take a seat on 26 September.
            </h2>
            <p className="lede" style={{ marginTop: '1rem', maxWidth: '40ch' }}>
              The seventh IndabaX Tunisia. One day of keynotes, workshops, posters and the Tech
              Challenge pitches.
            </p>
          </div>

          <div className="register__col">
            {ATTEND_FORM_URL ? (
              <>
                <ul className="included">
                  {INCLUDED.map(({ Icon, text }) => (
                    <li className="included__item" key={text}>
                      <Icon className="included__ico" size={20} aria-hidden="true" />
                      {text}
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: '1.75rem' }}>
                  <a className="btn" href={ATTEND_FORM_URL} target="_blank" rel="noreferrer noopener">
                    Register
                    <span className="btn__ico" aria-hidden="true"><ArrowUpRight size={15} /></span>
                    <span className="sr-only">(opens in a new tab)</span>
                  </a>
                </div>

                {CHALLENGE_REGISTRATION === 'open' ? (
                  <p className="register__aside">
                    Entering the Tech Challenge as well? <a className="link" href="#challenge">Register your team</a> too.
                  </p>
                ) : null}
              </>
            ) : (
              <div className="notice">
                <Confetti className="notice__ico" size={26} aria-hidden="true" />
                <div>
                  <p className="notice__title">Registration opens soon</p>
                  <p className="notice__body">
                    Sign-up runs through the SUP&rsquo;COM IEEE Student Branch. The link appears here the
                    moment it is live.
                    {CONTACT_EMAIL ? (
                      <>
                        {' '}In the meantime,{' '}
                        <a className="link" href={`mailto:${CONTACT_EMAIL}?subject=IndabaX%20Tunisia%202026`}>
                          write to the organisers
                        </a>
                        .
                      </>
                    ) : null}
                  </p>
                </div>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
