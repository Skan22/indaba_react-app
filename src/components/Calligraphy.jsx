import pattern from '../assets/pattern-calligraphy-large.webp';

/**
 * The brand calligraphy running down both margins. The source art is navy, so
 * it screens onto the deep sections and multiplies onto the paper ones. The
 * blend mode is set in CSS by the surrounding act.
 */
export default function Calligraphy() {
  return (
    <div
      aria-hidden="true"
      className="calligraphy"
      style={{ backgroundImage: `url(${pattern}), url(${pattern})` }}
    />
  );
}
