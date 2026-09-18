import { UsersThree, GraduationCap, Presentation, DiscordLogo, FileText, ArrowUpRight } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';
import { CHALLENGE_SPEC_URL, CHALLENGE_FORM_URL } from '../site.config.js';

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
  return (
    <section id="challenge" className="act-light" style={{ paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">
        <Reveal className="brief">
          <div className="brief__head">
            {CHALLENGE_FORM_URL ? (
              <p className="status">
                <span className="status__dot" aria-hidden="true" />
                Registration open
              </p>
            ) : null}
            <h2 className="h-section" style={{ marginTop: '1rem', maxWidth: '18ch' }}>
              Bring a team. Solve a real AI problem.
            </h2>
            <p className="lede" style={{ marginTop: '1rem', maxWidth: '54ch' }}>
              The Tech Challenge runs alongside the programme. Student teams take on a real-world
              problem through the day and pitch their answer to a panel of judges. The full brief is
              in the specification book.
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
            {CHALLENGE_FORM_URL ? (
              <a className="btn" href={CHALLENGE_FORM_URL} target="_blank" rel="noreferrer noopener">
                Register a team
                <span className="btn__ico" aria-hidden="true"><ArrowUpRight size={15} /></span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            ) : (
              <p className="brief__soon">Team registration opens soon.</p>
            )}

            {CHALLENGE_SPEC_URL ? (
              <a
                className="btn btn--onlight"
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
