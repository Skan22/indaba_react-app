// ---------------------------------------------------------------------------
// Fill these in before the site goes live.
//
// Every value here starts as null on purpose: no section will ever show an
// address, a link or a form that does not work. While a value is null the
// matching part of the page renders an honest fallback instead.
// ---------------------------------------------------------------------------

/** Organisers' address, e.g. 'indabax@supcom.tn'. Enables the contact links. */
export const CONTACT_EMAIL = null;

/** Attendee registration form. Free entry, places limited. While null the
 *  registration section shows an "opens soon" state instead of the button. */
export const ATTEND_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSe0anDsqGiWuV99i7VG7vhhV9j8Ck3oLCWB7gv8Kc1tvWDuqQ/viewform';

/** Tech Challenge: the published specification book (Google Drive folder).
 *  Confirm the folder's sharing is set to "anyone with the link" before launch;
 *  while null the challenge section hides the spec-book link. */
export const CHALLENGE_SPEC_URL =
  'https://drive.google.com/drive/folders/1PLwVk98dgNToEJMvx9EDhN67wAsqnynh';

/** Where Tech Challenge team entries stand. Drives the challenge section, the
 *  hero's second button and the footer link, so this one word is the only edit
 *  needed to open or close entries.
 *
 *    'open'   linked as the section's primary action
 *    'closed' entries have shut; the specification book stays linked
 *    'soon'   not open yet
 */
export const CHALLENGE_REGISTRATION = 'closed';

/** The team registration form. Only linked while CHALLENGE_REGISTRATION is
 *  'open'; kept here so entries can be reopened without hunting for the URL. */
export const CHALLENGE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfUVwJsJpv-ke-opFTx6KASutsIpiFFWleg1yFpt3qKwvYbxw/viewform';

/** Public profiles for the footer. Null entries are simply not rendered. */
export const SOCIAL = {
  linkedin: null,
  instagram: null
};
