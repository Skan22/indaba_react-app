import { ArrowUpRight } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';
import Calligraphy from './Calligraphy.jsx';
import indaba1 from '../assets/photos/indaba-1.webp';
import indaba2 from '../assets/photos/indaba-2.webp';
import indaba3 from '../assets/photos/indaba-3.webp';
import tunisia1 from '../assets/photos/tunisia-1.webp';
import tunisia2 from '../assets/photos/tunisia-2.webp';
import tunisia3 from '../assets/photos/tunisia-3.webp';

/* Alt text describes what is actually in each frame: these are photographs
   from IndabaX Tunisia 2025 and the Deep Learning Indaba in Rwanda, 2025. */
const GALLERY = [
  {
    key: 'a',
    src: tunisia1,
    alt: 'A speaker at the lectern addressing a full auditorium at IndabaX Tunisia 2025, held at SUP\u2019COM.'
  },
  {
    key: 'b',
    src: tunisia2,
    alt: 'The IndabaX Tunisia 2025 organising team, around fifty volunteers in event t-shirts, gathered under the event banner in the SUP\u2019COM atrium.'
  },
  {
    key: 'c',
    src: indaba1,
    alt: 'Six delegates cheering with their arms in the air in front of the Deep Learning Indaba Rwanda 2025 backdrop.'
  },
  {
    key: 'd',
    src: indaba2,
    alt: 'A four-person panel discussion on stage at the Deep Learning Indaba in Rwanda, 2025.'
  },
  {
    key: 'e',
    src: indaba3,
    alt: 'Hundreds of Deep Learning Indaba delegates gathered on a lawn for a group photograph, many of them holding African national flags.'
  },
  {
    key: 'f',
    src: tunisia3,
    alt: 'Attendees watching a session from the auditorium seats at IndabaX Tunisia 2025.'
  }
];

export default function About() {
  return (
    <section id="about" className="act-light" style={{ paddingBlock: 'var(--section-y)', overflow: 'hidden' }}>
      <Calligraphy />

      <div className="wrap" style={{ position: 'relative' }}>
        <Reveal>
          <p className="eyebrow">About</p>
          <h2 className="h-section" style={{ marginTop: '.75rem', maxWidth: '17ch' }}>
            What is IndabaX Tunisia?
          </h2>
        </Reveal>

        <Reveal delay={90} style={{ marginTop: 'clamp(1.5rem,3vw,2rem)' }}>
          <div className="measure" style={{ display: 'grid', gap: '1.125rem' }}>
            <p className="lede">
              Indaba is a pan-African, grassroots organisation working to strengthen machine learning and
              artificial intelligence across the continent. It runs an annual gathering plus a growing network
              of local events, IndabaX, held in individual countries throughout the year.
            </p>
            <p style={{ color: 'var(--text-muted)' }}>
              IndabaX Tunisia is the local edition of that mission. Organised by the SUP&rsquo;COM IEEE Student
              Branch, it brings students, researchers and practitioners together in Tunis for a single day of
              keynote talks and a hackathon.
            </p>
            <p style={{ marginTop: '.25rem' }}>
              <a
                className="link"
                href="https://deeplearningindaba.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                Read about the Deep Learning Indaba
                <ArrowUpRight size={15} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="wrap" delay={140} style={{ marginTop: 'clamp(3rem,6vw,4.5rem)', position: 'relative' }}>
        <div className="gallery">
          {GALLERY.map((photo) => (
            <figure key={photo.key} className={`gallery__${photo.key}`}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 860px) 50vw, 30vw"
              />
            </figure>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
