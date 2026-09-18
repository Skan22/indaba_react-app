// ---------------------------------------------------------------------------
// Fill these in before the site goes live.
//
// Every value here starts as null on purpose: no section will ever show an
// address, a link or a form that does not work. While a value is null the
// matching part of the page renders an honest fallback instead.
// ---------------------------------------------------------------------------

/** Organisers' address, e.g. 'indabax@supcom.tn'. Enables the contact links. */
export const CONTACT_EMAIL = null;

/** POST target for the sign-up form, e.g. a Formspree or Google Form endpoint.
 *  While null, the registration section shows the "opens soon" state instead. */
export const REGISTER_ENDPOINT = null;

/** Tech Challenge: the published specification book (Google Drive folder).
 *  Confirm the folder's sharing is set to "anyone with the link" before launch;
 *  while null the challenge section hides the spec-book link. */
export const CHALLENGE_SPEC_URL =
  'https://drive.google.com/drive/folders/1PLwVk98dgNToEJMvx9EDhN67wAsqnynh';

/** Tech Challenge: the team registration form. While null the challenge
 *  section shows a "registration opens soon" state instead of the button. */
export const CHALLENGE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfUVwJsJpv-ke-opFTx6KASutsIpiFFWleg1yFpt3qKwvYbxw/viewform';

/** Public profiles for the footer. Null entries are simply not rendered. */
export const SOCIAL = {
  linkedin: null,
  instagram: null
};
