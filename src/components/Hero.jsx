import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown } from '@phosphor-icons/react';
import logoWhite from '../assets/logo-white.webp';
import starOrnament from '../assets/ornament-star.webp';
import latticeLeft from '../assets/ornament-lattice-tall-left.webp';
import latticeRight from '../assets/ornament-lattice-tall-right.webp';
import Calligraphy from './Calligraphy.jsx';
import { CHALLENGE_REGISTRATION } from '../site.config.js';

export default function Hero() {
  const ref = useRef(null);
  const challengeOpen = CHALLENGE_REGISTRATION === 'open';

  /* Pointer parallax written straight to CSS custom properties on the section.
     Keeping it out of React state means the hero never re-renders while the
     cursor moves. Skipped on touch and under reduced motion. */
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const fine = window.matchMedia('(pointer: fine)');
    const calm = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!fine.matches || calm.matches) return undefined;

    let frame = 0;
    const onMove = (e) => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--px', ((e.clientX - r.left) / r.width - 0.5) * 2);
        el.style.setProperty('--py', ((e.clientY - r.top) / r.height - 0.5) * 2);
      });
    };
    const onLeave = () => {
      el.style.setProperty('--px', 0);
      el.style.setProperty('--py', 0);
    };

    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      el.removeEventListener('pointermove', onMove);
      el.removeEventListener('pointerleave', onLeave);
    };
  }, []);

  return (
    <section id="top" ref={ref} className="hero act-deep" aria-labelledby="hero-title">
      <Calligraphy />
      <div aria-hidden="true" className="scrim hero__scrim" />
      <img aria-hidden="true" className="hero__lattice hero__lattice--l" src={latticeLeft} alt="" />
      <img aria-hidden="true" className="hero__lattice hero__lattice--r" src={latticeRight} alt="" />
      <div aria-hidden="true" className="ambient hero__glow" />
      <span aria-hidden="true" className="spark spark--a" style={{ left: '14%', top: '22%', width: 10, height: 10, opacity: 0.7, boxShadow: '0 0 20px 4px var(--accent)' }} />
      <span aria-hidden="true" className="spark spark--b" style={{ left: '62%', top: '70%', width: 8, height: 8, opacity: 0.62, boxShadow: '0 0 18px 4px var(--accent)' }} />
      <span aria-hidden="true" className="spark spark--a" style={{ left: '46%', top: '13%', width: 6, height: 6, opacity: 0.55, boxShadow: '0 0 14px 3px var(--accent)', animationDuration: '11s' }} />

      <div className="wrap hero__grid">
        <div>
          <img
            className="hero__logo animate-in"
            src={logoWhite}
            alt="Deep Learning IndabaX Tunisia 2026"
            width="1629"
            height="670"
            fetchPriority="high"
          />
          <div className="rule animate-rule" style={{ '--delay': '180ms', marginTop: 'clamp(1.75rem,3vw,2.25rem)' }} />
          <h1 id="hero-title" className="hero__title animate-in" style={{ '--delay': '120ms' }}>
            One day of deep learning, open to everyone.
          </h1>
          <p className="hero__lede animate-in" style={{ '--delay': '240ms' }}>
            Students, researchers and practitioners meet for keynote talks and a hackathon.
            Hosted by the SUP&rsquo;COM IEEE Student Branch.
          </p>
          <div className="hero__actions animate-in" style={{ '--delay': '340ms' }}>
            <a className="btn" href="#register">
              Register
              <span className="btn__ico" aria-hidden="true"><ArrowRight size={15} /></span>
            </a>
            <a className="btn btn--ghost" href={challengeOpen ? '#challenge' : '#about'}>
              {challengeOpen ? 'Enter the Tech Challenge' : 'What is IndabaX?'}
              <span className="btn__ico" aria-hidden="true"><ArrowDown size={15} /></span>
            </a>
          </div>
        </div>

        <div className="hero__art animate-in" style={{ '--delay': '300ms' }}>
          <img className="hero__star float" src={starOrnament} alt="" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
