import { Microphone, Presentation } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';
import nozhaPhoto from '../assets/speakers/nozha.webp';
import mongiPhoto from '../assets/speakers/mongi.webp';
import hafedhPhoto from '../assets/speakers/hafedh.webp';
import jawherPhoto from '../assets/speakers/jawher.webp';
import aymenPhoto from '../assets/speakers/aymen.webp';

const HAFEDH = {
  name: 'Mr. Hafedh Hichri',
  role: 'Software Engineer at feyn · Hugging Face Fellow · Qdrant Star',
  photo: hafedhPhoto,
  bio: 'Software engineer at feyn, Hugging Face Fellow and Qdrant Star.'
};

const NOZHA = {
  name: 'Dr Nozha Boujemaa',
  role: 'Senior AI Advisor',
  topic: 'AI Risk & Accountability, from principles into operations',
  photo: nozhaPhoto,
  bio: 'Senior AI Advisor and Non-Executive Director of Systra and Lloyd. She co-chairs the OECD AI Network of Experts and co-chaired the European Commission’s High-Level Expert Group behind the Ethics Guidelines for Trustworthy AI. Previously Global VP for AI innovation and trust at Decathlon and for digital ethics at IKEA Retail, she directed the INRIA-Saclay Research Center and founded the AI institute DATAIA.'
};

/* Announced on the IndabaX Tunisia page. No title or biography has been
   published for Aymen Chakhari yet, so the card shows only what is confirmed;
   SpeakerCard leaves both out rather than inventing them. */
const AYMEN = {
  name: 'Mr. Aymen Chakhari',
  photo: aymenPhoto,
  topic: 'Building AI We Can Trust: Sovereignty, Openness and the New Security Frontier'
};

const KEYNOTES = [
  NOZHA,
  { ...HAFEDH, topic: 'Lessons from the Hugging Face and OpenAI security incident' },
  AYMEN
];

const WORKSHOPS = [
  {
    name: 'Mr. Mohamed Mongi Benyaiche',
    role: 'CEO, FelCloud · Co-founder & CTO, Curves and Smile',
    topic: 'Sovereign AI & Cloud: Self-Deployed LLMs',
    photo: mongiPhoto,
    bio: 'An energy engineer, entrepreneur and tech leader working at the crossroads of cloud, AI and digital transformation. A graduate of the National Engineering School of Monastir, he spent more than 12 years at the Ministry of Energy before moving into software development and AI. He leads FelCloud, a cloud operator focused on sovereign, open-source infrastructure built with technologies such as OpenStack.'
  },
  { ...HAFEDH, topic: 'How the gears turn in model fine-tuning' },
  {
    name: 'Mr. Jawher Khalifa',
    role: 'AI Engineer & Researcher · Co-Founder & CTO, DrugIT',
    topic: 'When AI Agents Escape: Building Secure Sandboxes for Autonomous AI Agents',
    photo: jawherPhoto,
    bio: 'AI engineer and researcher building secure, reliable agentic AI systems. He is Co-Founder and CTO at DrugIT.'
  }
];

function SpeakerCard({ speaker, kind, delay = 0 }) {
  const Icon = kind === 'Keynote' ? Microphone : Presentation;

  return (
    <Reveal className={`speaker-card speaker-card--${kind.toLowerCase()} panel`} delay={delay}>
      <img className="speaker-card__photo" src={speaker.photo} alt={`Portrait of ${speaker.name}`} />
      <div className="speaker-card__content">
        <p className="speaker-card__kind"><Icon size={16} aria-hidden="true" /> {kind}</p>
        <h3 className="speaker-card__name">{speaker.name}</h3>
        {speaker.role ? <p className="speaker-card__role">{speaker.role}</p> : null}
        <div className="speaker-card__topic">
          <span>Session</span>
          <p>{speaker.topic}</p>
        </div>
        {speaker.bio ? <p className="speaker-card__bio">{speaker.bio}</p> : null}
      </div>
    </Reveal>
  );
}

export default function Speakers() {
  return (
    <section id="speakers" className="act-light" style={{ paddingBlock: 'var(--section-y)' }}>
      <div className="wrap">
        <Reveal>
          <h2 className="h-section" style={{ maxWidth: '18ch' }}>Ideas with consequences.</h2>
          <p className="lede measure" style={{ marginTop: '1rem' }}>
            Meet the people opening up the technical, ethical and practical questions shaping AI today.
          </p>
        </Reveal>

        <div className="programme">
          <h3 className="programme__heading">Keynotes</h3>
          <div className="keynote-list">
            {KEYNOTES.map((speaker, index) => (
              <SpeakerCard key={speaker.name} speaker={speaker} kind="Keynote" delay={80 + index * 80} />
            ))}
          </div>

          <h3 className="programme__heading programme__heading--workshops">Workshops</h3>
          <div className="workshop-grid">
            {WORKSHOPS.map((speaker, index) => (
              <SpeakerCard key={speaker.name} speaker={speaker} kind="Workshop" delay={120 + index * 80} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
