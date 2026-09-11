import { Microphone, Trophy, Clock } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';

const KEYNOTES = [
  {
    key: 'keynote-1',
    Icon: Microphone,
    title: 'To be announced',
    body: 'Speaker to be confirmed. We will share the name here as soon as the invitation is accepted.'
  },
  {
    key: 'keynote-2',
    Icon: Microphone,
    title: 'To be announced',
    body: 'Speaker to be confirmed. We will share the name here as soon as the invitation is accepted.'
  },
  {
    key: 'keynote-3',
    Icon: Microphone,
    title: 'To be announced',
    body: 'Speaker to be confirmed. We will share the name here as soon as the invitation is accepted.'
  }
];

const HACKATHON = {
  Icon: Trophy,
  title: 'To be announced',
  body: 'Team format and prizes will be announced.',
  meta: 'Announced ahead of the event'
};

export default function Speakers() {
  return (
    <section id="speakers" className="act-light" style={{ paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">
        <Reveal>
          <h2 className="h-section" style={{ maxWidth: '16ch' }}>Three keynotes, one hackathon.</h2>
          <p className="lede measure" style={{ marginTop: '1rem' }}>
            The shape of the day is set. The lineup is still being confirmed.
          </p>
        </Reveal>

        <div className="slots">
          {KEYNOTES.map((keynote, i) => (
            <Reveal className="slot slot--keynote panel" key={keynote.key} delay={60 + i * 80}>
              <div className="slot__portrait" aria-hidden="true">
                <keynote.Icon size={28} />
              </div>
              <h3 className="slot__title">{keynote.title}</h3>
              <p className="slot__body">{keynote.body}</p>
            </Reveal>
          ))}

          <Reveal className="slot slot--hackathon panel" delay={300}>
            <div className="slot__portrait" aria-hidden="true">
              <HACKATHON.Icon size={28} />
            </div>
            <div className="slot__main">
              <h3 className="slot__title">{HACKATHON.title}</h3>
              <p className="slot__body">{HACKATHON.body}</p>
              <p className="slot__meta">
                <Clock size={15} aria-hidden="true" />
                {HACKATHON.meta}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
