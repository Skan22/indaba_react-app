import { useId, useState } from 'react';
import { ArrowRight, CheckCircle, WarningCircle, EnvelopeSimple, Confetti } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';
import Calligraphy from './Calligraphy.jsx';
import { REGISTER_ENDPOINT, CONTACT_EMAIL } from '../site.config.js';

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function SignupForm() {
  const nameId = useId();
  const mailId = useId();
  const [values, setValues] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | pending | done | error

  const set = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((v) => ({ ...v, [key]: undefined }));
  };

  function validate() {
    const next = {};
    if (!values.name.trim()) next.name = 'Please tell us who you are.';
    if (!EMAIL.test(values.email.trim())) next.email = 'That does not look like an email address.';
    return next;
  }

  async function onSubmit(e) {
    e.preventDefault();
    const found = validate();
    setErrors(found);
    if (Object.keys(found).length) return;

    setStatus('pending');
    try {
      const res = await fetch(REGISTER_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, event: 'IndabaX Tunisia 2026' })
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus('done');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="notice" role="status">
        <CheckCircle className="notice__ico" size={26} aria-hidden="true" />
        <div>
          <p className="notice__title">You are on the list</p>
          <p className="notice__body">
            We have your details. Joining instructions and the final programme go out by email before
            26 September.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="field">
        <label className="field__label" htmlFor={nameId}>Name</label>
        <input
          id={nameId}
          className="field__input"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={set('name')}
          aria-invalid={errors.name ? 'true' : undefined}
          aria-describedby={errors.name ? `${nameId}-err` : undefined}
          disabled={status === 'pending'}
        />
        {errors.name ? (
          <p className="field__error" id={`${nameId}-err`}>
            <WarningCircle size={15} aria-hidden="true" />
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="field">
        <label className="field__label" htmlFor={mailId}>Email</label>
        <input
          id={mailId}
          className="field__input"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          value={values.email}
          onChange={set('email')}
          aria-invalid={errors.email ? 'true' : undefined}
          aria-describedby={errors.email ? `${mailId}-err` : `${mailId}-help`}
          disabled={status === 'pending'}
        />
        {errors.email ? (
          <p className="field__error" id={`${mailId}-err`}>
            <WarningCircle size={15} aria-hidden="true" />
            {errors.email}
          </p>
        ) : (
          <p className="field__help" id={`${mailId}-help`}>Used only for this event. No other mail.</p>
        )}
      </div>

      {status === 'pending' ? (
        <div aria-hidden="true" style={{ display: 'grid', gap: '.5rem', maxWidth: '13rem' }}>
          <span className="skeleton" style={{ height: '2.75rem', borderRadius: 'var(--r-pill)' }} />
        </div>
      ) : (
        <div>
          <button className="btn" type="submit">
            Register
            <span className="btn__ico" aria-hidden="true"><ArrowRight size={15} /></span>
          </button>
        </div>
      )}

      <p aria-live="polite" className="sr-only">
        {status === 'pending' ? 'Sending your registration.' : ''}
      </p>

      {status === 'error' ? (
        <p className="field__error" role="alert">
          <WarningCircle size={15} aria-hidden="true" />
          We could not save your registration. Please try again in a moment
          {CONTACT_EMAIL ? (
            <>
              , or write to <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: 'inherit', textDecoration: 'underline' }}>{CONTACT_EMAIL}</a>
            </>
          ) : null}.
        </p>
      ) : null}
    </form>
  );
}

function OpensSoon() {
  return (
    <div className="notice">
      <Confetti className="notice__ico" size={26} aria-hidden="true" />
      <div>
        <p className="notice__title">Registration opens soon</p>
        <p className="notice__body">
          Sign-up runs through the SUP&rsquo;COM IEEE Student Branch. The form appears here the moment it
          is live.
          {CONTACT_EMAIL ? (
            <>
              {' '}In the meantime,{' '}
              <a className="link" href={`mailto:${CONTACT_EMAIL}?subject=IndabaX%20Tunisia%202026`}>
                write to the organisers
                <EnvelopeSimple size={14} aria-hidden="true" />
              </a>
              .
            </>
          ) : null}
        </p>
      </div>
    </div>
  );
}

export default function Register() {
  return (
    <section id="register" className="register act-deep" style={{ paddingBlock: 'var(--section-y)' }}>
      <Calligraphy />
      <div aria-hidden="true" className="ambient" style={{ left: '78%', top: '30%', width: 520, height: 520, transform: 'translate(-50%,-50%)' }} />

      <div className="wrap">
        <Reveal className="register__panel">
          <div className="register__col">
            <h2 className="h-section" style={{ maxWidth: '15ch' }}>Take a seat on 26 September.</h2>
            <p className="lede" style={{ marginTop: '1rem', maxWidth: '40ch' }}>
              One day, three keynotes and a hackathon. Bring a laptop for the build.
            </p>
          </div>
          <div className="register__col">
            {REGISTER_ENDPOINT ? <SignupForm /> : <OpensSoon />}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
