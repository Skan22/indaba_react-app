import { useEffect, useState } from 'react';
import { CalendarBlank, MapPin, Books, Trophy } from '@phosphor-icons/react';
import Reveal from './Reveal.jsx';

/* Doors at 09:00 in Tunis (UTC+1, no daylight saving). */
export const EVENT_START = Date.UTC(2026, 8, 26, 8, 0, 0);

const FACTS = [
  { Icon: CalendarBlank, k: 'Date', v: 'Saturday 26 September 2026' },
  { Icon: MapPin, k: 'Venue', v: "SUP'COM, Technopole Ghazela" },
  { Icon: Books, k: 'Format', v: 'Three keynote talks' },
  { Icon: Trophy, k: 'Hackathon', v: 'Open to all attendees' }
];

function remaining(target) {
  const ms = target - Date.now();
  if (ms <= 0) return null;
  const s = Math.floor(ms / 1000);
  return {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    minutes: Math.floor((s % 3600) / 60),
    seconds: s % 60
  };
}

function useCountdown(target) {
  const [left, setLeft] = useState(() => remaining(target));
  useEffect(() => {
    const id = setInterval(() => setLeft(remaining(target)), 1000);
    return () => clearInterval(id);
  }, [target]);
  return left;
}

const pad = (n) => String(n).padStart(2, '0');

export default function Glance() {
  const left = useCountdown(EVENT_START);

  const units = left && [
    { value: left.days, label: left.days === 1 ? 'Day' : 'Days' },
    { value: pad(left.hours), label: 'Hours' },
    { value: pad(left.minutes), label: 'Minutes' },
    { value: pad(left.seconds), label: 'Seconds' }
  ];

  return (
    <div className="glance">
      <Reveal className="wrap">
        <div className="glance__card">
          {units ? (
            <div className="countdown" role="timer" aria-live="off">
              <p className="sr-only">
                {`${left.days} days, ${left.hours} hours and ${left.minutes} minutes until IndabaX Tunisia 2026.`}
              </p>
              {units.map((u) => (
                <div className="countdown__unit" key={u.label} aria-hidden="true">
                  <div className="countdown__value">{u.value}</div>
                  <div className="countdown__label">{u.label}</div>
                </div>
              ))}
            </div>
          ) : (
            <div className="countdown">
              <div className="countdown__unit" style={{ textAlign: 'left', minWidth: 0 }}>
                <div className="countdown__value" style={{ fontSize: 'var(--fs-2xl)' }}>Today</div>
                <div className="countdown__label">Doors at 09:00</div>
              </div>
            </div>
          )}

          <div className="glance__divider" aria-hidden="true" />

          <dl className="facts">
            {FACTS.map(({ Icon, k, v }) => (
              <div className="fact" key={k}>
                <Icon className="fact__ico" size={20} aria-hidden="true" />
                <div>
                  <dt className="fact__k">{k}</dt>
                  <dd className="fact__v" style={{ margin: 0 }}>{v}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>
    </div>
  );
}
