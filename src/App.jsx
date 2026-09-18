import { useEffect } from 'react';
import { IconContext } from '@phosphor-icons/react';
import NavBar from './components/NavBar.jsx';
import Hero from './components/Hero.jsx';
import Glance from './components/Glance.jsx';
import About from './components/About.jsx';
import Challenge from './components/Challenge.jsx';
import Theme from './components/Theme.jsx';
import Speakers from './components/Speakers.jsx';
import Partners from './components/Partners.jsx';
import Register from './components/Register.jsx';
import Footer from './components/Footer.jsx';

export default function App() {
  /* A cold load on #about fires before React has mounted the section, so the
     browser has nothing to scroll to. Re-apply the hash once we are painted. */
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === '#top') return;
    const target = document.querySelector(hash);
    if (!target) return;
    requestAnimationFrame(() => target.scrollIntoView({ block: 'start', behavior: 'instant' }));
  }, []);

  return (
    /* One icon weight for the whole site, set once. */
    <IconContext.Provider value={{ weight: 'light' }}>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="grain" aria-hidden="true" />

      <NavBar />

      <main id="main">
        <Hero />
        <Glance />
        <About />
        <Challenge />
        <Theme />
        <Speakers />
        <Partners />
        <Register />
      </main>

      <Footer />
    </IconContext.Provider>
  );
}
