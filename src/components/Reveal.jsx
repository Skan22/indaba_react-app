import { useEffect, useRef, useState } from 'react';

/**
 * Scroll-entry reveal. IntersectionObserver rather than a scroll listener, so
 * nothing runs per frame. Reveals once, then disconnects.
 *
 * A cold load on a deep link (/#challenge) scrolls the page after mount, so the
 * observer is not the only thing that can decide visibility: we also measure
 * once on the next frame, when that scroll has landed. Without it a shared
 * section link can arrive already scrolled past its own entry point and stay
 * hidden.
 */
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }

    let raf = 0;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );
    io.observe(el);

    raf = requestAnimationFrame(() => {
      raf = 0;
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        setShown(true);
        io.disconnect();
      }
    });

    return () => {
      if (raf) cancelAnimationFrame(raf);
      io.disconnect();
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={['reveal', shown ? 'is-in' : '', className].filter(Boolean).join(' ')}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
