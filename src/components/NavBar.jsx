import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from '@phosphor-icons/react';
import logoWhite from '../assets/logo-white.webp';

const NAV = [
  { label: 'About', href: '#about' },
  { label: 'Challenge', href: '#challenge' },
  { label: 'Theme', href: '#theme' },
  { label: 'Program', href: '#program' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'Sponsors', href: '#sponsors' }
];

export default function NavBar() {
  const [stuck, setStuck] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');
  const sentinel = useRef(null);
  const burger = useRef(null);

  /* "Has the page scrolled past the hero top?" answered by a sentinel rather
     than a scroll listener, so nothing runs on every frame. */
  useEffect(() => {
    const el = sentinel.current;
    if (!el || typeof IntersectionObserver === 'undefined') return undefined;
    const io = new IntersectionObserver(([e]) => setStuck(!e.isIntersecting), { threshold: 0 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  /* Current section, so the nav can say where you are. */
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const targets = NAV.map((n) => document.querySelector(n.href)).filter(Boolean);
    if (!targets.length) return undefined;
    const seen = new Map();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => seen.set(e.target.id, e.intersectionRatio));
        const best = [...seen.entries()].sort((a, b) => b[1] - a[1])[0];
        setActive(best && best[1] > 0 ? `#${best[0]}` : '');
      },
      { threshold: [0, 0.25, 0.5], rootMargin: '-30% 0px -55% 0px' }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);

  /* Lock the page behind the open menu, and let Escape close it. */
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        burger.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      <div ref={sentinel} aria-hidden="true" style={{ position: 'absolute', top: 0, height: 1, width: '100%' }} />

      <header className={`nav${stuck ? ' is-stuck' : ''}`}>
        <div className="wrap nav__inner">
          <a className="nav__logo" href="#top" aria-label="Deep Learning IndabaX Tunisia 2026, back to top">
            <img src={logoWhite} alt="" width="820" height="337" />
          </a>

          <nav className="nav__links" aria-label="Sections">
            {NAV.map((item) => (
              <a
                key={item.href}
                className="nav__link"
                href={item.href}
                aria-current={active === item.href ? 'true' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a className="btn nav__cta" href="#register">
            Register
            <span className="btn__ico" aria-hidden="true"><ArrowRight size={13} /></span>
          </a>

          <button
            ref={burger}
            type="button"
            className="nav__burger"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span />
          </button>
        </div>
      </header>

      <div id="mobile-menu" className={`menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        {NAV.map((item, i) => (
          <a
            key={item.href}
            className="menu__link"
            href={item.href}
            style={{ '--delay': `${60 + i * 55}ms` }}
            aria-current={active === item.href ? 'true' : undefined}
            onClick={() => setOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <a className="btn menu__cta" href="#register" onClick={() => setOpen(false)}>
          Register
          <span className="btn__ico" aria-hidden="true"><ArrowRight size={14} /></span>
        </a>
      </div>
    </>
  );
}
