import { UsersThree, GraduationCap, Presentation, DiscordLogo, FileText, ArrowUpRight } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';
import { CHALLENGE_SPEC_URL, CHALLENGE_FORM_URL, CHALLENGE_REGISTRATION } from '../site.config.js';

/* Everything stated here comes from the published registration form and the
   specification book. Nothing about the brief itself is described, because the
   brief is in the spec book. */
const BRIEF = [
  { Icon: UsersThree, k: 'Team size', v: 'Three to five members' },
  { Icon: GraduationCap, k: 'Who can enter', v: 'Student teams, from any school' },
  { Icon: Presentation, k: 'On the day', v: 'Work the problem, then pitch to judges' },
  { Icon: DiscordLogo, k: 'Before you start', v: 'Every member needs a Discord username' }
];

export default function Challenge() {
  const open = CHALLENGE_REGISTRATION === 'open' && Boolean(CHALLENGE_FORM_URL);
  const closed = CHALLENGE_REGISTRATION === 'closed';

  return (
    <section id="challenge" className="act-light" style={{ paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">
        <Reveal className="brief">
          <div className="brief__head">
            {open || closed ? (
              <p className={`status${closed ? ' status--closed' : ''}`}>
                <span className="status__dot" aria-hidden="true" />
                {closed ? 'Team registration closed' : 'Registration open'}
              </p>
            ) : null}
            <h2 className="h-section" style={{ marginTop: '1rem', maxWidth: '18ch' }}>
              {closed ? 'The teams are set. The brief is public.' : 'Bring a team. Solve a real AI problem.'}
            </h2>
            <p className="lede" style={{ marginTop: '1rem', maxWidth: '54ch' }}>
              The Tech Challenge runs alongside the programme. Student teams take on a real-world
              problem through the day and pitch their answer to a panel of judges. The full brief is
              in the specification book, which stays open to read.
            </p>
          </div>

          <dl className="brief__grid">
            {BRIEF.map(({ Icon, k, v }) => (
              <div className="brief__item" key={k}>
                <Icon className="brief__ico" size={22} aria-hidden="true" />
                <dt className="brief__k">{k}</dt>
                <dd className="brief__v">{v}</dd>
              </div>
            ))}
          </dl>

          <div className="brief__actions">
            {open ? (
              <a className="btn" href={CHALLENGE_FORM_URL} target="_blank" rel="noreferrer noopener">
                Register a team
                <span className="btn__ico" aria-hidden="true"><ArrowUpRight size={15} /></span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : null}
            {!open && !closed ? <p className="brief__soon">Team registration opens soon.</p> : null}

            {CHALLENGE_SPEC_URL ? (
              <a
                className={open ? 'btn btn--onlight' : 'btn'}
                href={CHALLENGE_SPEC_URL}
                target="_blank"
                rel="noreferrer noopener"
              >
                Read the specification book
                <span className="btn__ico" aria-hidden="true"><FileText size={15} /></span>
                <span className="sr-only">(PDF on Google Drive, opens in a new tab)</span>
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
