# Deep Learning IndabaX Tunisia 2026 — frontend

Vite + React site for the one-day IndabaX at SUP'COM, Technopole Ghazela, on
Saturday 26 September 2026.

## Run

```
npm install
npm run dev      # dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
```

## Before it goes live

Two values in `src/site.config.js` are `null` on purpose, so the page never
shows an address or a form that does not work. Each one switches a section from
its fallback state to the real thing:

| Value | Effect while null | Effect once set |
| --- | --- | --- |
| `CONTACT_EMAIL` | Contact links are omitted | Adds "Become a partner" and the footer address |
| `SOCIAL` | Empty entries are skipped | Adds footer links |

The three published links are already set and need nothing further:

| Value | What it points at |
| --- | --- |
| `ATTEND_FORM_URL` | Attendee registration. Free entry, places limited |
| `CHALLENGE_SPEC_URL` | The specification book on Google Drive |
| `CHALLENGE_FORM_URL` | Tech Challenge team registration, linked only while entries are open |

`CHALLENGE_REGISTRATION` is the one word that opens or closes team entries:

| Value | Challenge section | Hero's second button | Footer |
| --- | --- | --- | --- |
| `'open'` | "Registration open", team form leads, spec book second | "Enter the Tech Challenge" | Lists the team form |
| `'closed'` | "Team registration closed", spec book is the only action | "What is IndabaX?" | Team form hidden |
| `'soon'` | "Team registration opens soon" | "What is IndabaX?" | Team form hidden |

The challenge headline changes with it, so a closed challenge never invites
entries it cannot take. Reopening entries is a single edit back to `'open'`.

Registration is handled by Google Forms, so the site links out rather than
collecting anything itself. That is why there is no form markup, no endpoint and
no privacy notice to write: nothing is submitted to this site. If you ever move
to a self-hosted form, the previous inline implementation (validation, pending,
success and error states) is in git history at commit `0e711f0`.

Check that the specification book folder is shared as "anyone with the link".
It is linked publicly from the site, so a restricted folder sends visitors into
a Google permission-request screen.

Also set the real domain in the `og:url` meta tag in `index.html`. If you switch
the registration form on, add a privacy note next to it, since it then collects
names and email addresses.

## Structure

The page runs in three acts: a deep navy open (nav, hero), a paper-white body
(about, challenge, theme, speakers, sponsors) and a deep navy close
(registration, footer). Sections change tone, but the gold accent and the shape
language do not.

Two different actions live on this page and are deliberately labelled apart.
"Register" means attending the day and is the broader of the two, so it carries
the nav pill and the hero's primary button. "Register a team" means entering the
Tech Challenge, which only suits student teams of three to five, so it sits as
the hero's secondary button and inside the challenge section.

- `src/index.css` — the whole design system: brand tokens, fluid type scale,
  spacing, the z-index scale, motion easings, and every component class
- `src/site.config.js` — the values listed above
- `src/components/NavBar.jsx` — sticky nav, glass once scrolled, active-section
  highlighting, mobile menu
- `src/components/Hero.jsx` — pointer parallax written to CSS custom properties,
  so moving the cursor never re-renders React
- `src/components/Glance.jsx` — live countdown, overlapping the hero so the date
  is on screen at first paint
- `src/components/About.jsx` — statement plus a six-tile gallery band
- `src/components/Challenge.jsx` — the Tech Challenge brief: live status, team
  rules, the specification book and the team registration form
- `src/components/Theme.jsx` — the withheld theme, as a redacted line
- `src/components/Speakers.jsx` — one keynote slot and two track slots
- `src/components/Partners.jsx` — 2026 partnership tiers, plus the real 2025
  partner logo bar
- `src/components/Register.jsx` — the single conversion block
- `src/components/Reveal.jsx` — IntersectionObserver scroll entry, used everywhere
- `src/assets/` — brand art and photography

## Notes

- Photography is served as WebP (`src/assets/**/*.webp`); the original PNGs are
  kept alongside them as masters. Regenerate the WebP files if you replace a
  photo, and keep the alt text describing what is actually in the frame.
- `public/og-image.png` is the social card. Regenerate it if the date or venue
  changes.
- All motion is `transform` and `opacity` only, and everything collapses under
  `prefers-reduced-motion: reduce`.
