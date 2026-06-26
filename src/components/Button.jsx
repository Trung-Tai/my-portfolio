/**
 * A reusable CTA button component.
 * It can navigate to a hash route with href, or scroll smoothly to a section by id.
 */

const Button = ({ text, className, id, href }) => {
  const handleClick = (e) => {
    if (href) return;

    e.preventDefault();
    const target = id ? document.getElementById(id) : null;

    if (target) {
      const offset = window.innerHeight * 0.15;
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      href={href || `#${id || ""}`}
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`} // Add base + extra class names
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" />
        </div>
      </div>
    </a>
  );
};

export default Button;
