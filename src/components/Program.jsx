import {
  Coffee,
  Confetti,
  Gavel,
  Microphone,
  Presentation,
  SignIn,
  Trophy,
  UsersThree
} from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';

const SESSIONS = [
  { time: '08:00–09:00', title: 'Check-in', Icon: SignIn, note: 'Arrival' },
  { time: '09:00–09:30', title: 'Opening ceremony', Icon: Confetti, note: 'Welcome' },
  { time: '09:30–10:15', title: 'Keynote 1', Icon: Microphone, note: 'On stage', featured: true },
  { time: '10:15–11:00', title: 'Coffee break', Icon: Coffee, note: 'Pause', concurrent: 'Poster session · 10:15–14:00' },
  { time: '11:00–12:00', title: 'Keynotes 2 and 3', Icon: Microphone, note: 'On stage', featured: true },
  { time: '12:00–13:00', title: 'Lunch', Icon: Coffee, note: 'Pause' },
  { time: '13:00–14:30', title: 'Parallel workshops', Icon: Presentation, note: 'Hands-on' },
  { time: '14:30–16:30', title: 'Tech Challenge pitching', Icon: Trophy, note: 'Live pitch', featured: true },
  { time: '16:30–18:00', title: 'Jury deliberation', Icon: Gavel, note: 'Decision time' },
  { time: '18:00', title: 'Closing ceremony and winners announcement', Icon: UsersThree, note: 'Finale', featured: true }
];

export default function Program() {
  return (
    <section id="program" className="act-deep program" style={{ paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">
        <Reveal className="program__intro">
          <div>
            <h2 className="h-section">The day, in full.</h2>
            <p className="lede measure" style={{ marginTop: '1rem' }}>
              From check-in to the winner announcement, here is how IndabaX Tunisia 2026 unfolds.
            </p>
          </div>
          <p className="program__place">Saturday 26 September<br />SUP&rsquo;COM · Technopole Ghazela</p>
        </Reveal>

        <ol className="program__list">
          {SESSIONS.map((session, index) => (
            <Reveal as="li" className={`program__item${session.featured ? ' is-featured' : ''}`} key={session.title} delay={index * 45}>
              <time className="program__time">{session.time}</time>
              <div className="program__marker" aria-hidden="true"><session.Icon size={18} /></div>
              <div className="program__detail">
                <p className="program__note">{session.note}</p>
                <h3>{session.title}</h3>
                {session.concurrent && <p className="program__concurrent">In parallel: {session.concurrent}</p>}
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
