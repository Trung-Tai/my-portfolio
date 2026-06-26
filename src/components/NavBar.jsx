import { useState, useEffect, useRef } from "react";
import { useApp } from "../context/AppContext.jsx";
import { navLinks, uiTranslations } from "../constants";

const NavBar = ({ currentPage }) => {
  const { language, toggleLanguage, theme, toggleTheme } = useApp();
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = Math.abs(currentScrollY - lastScrollY.current);
      const isScrolled = currentScrollY > 10;

      setScrolled(isScrolled);

      if (currentScrollY < 20) {
        setHidden(false);
      } else if (scrollDelta > 6) {
        setHidden(currentScrollY > lastScrollY.current);
      }

      lastScrollY.current = currentScrollY;
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    // cleanup the event listener when the component is unmounted
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = navLinks[language] || navLinks.en;

  return (
    <header
      className={`navbar ${scrolled ? "scrolled" : "not-scrolled"} ${
        hidden ? "nav-hidden" : "nav-visible"
      }`}
    >
      <div className="inner">
        <a href="#/home" className="logo">
          <img src="/images/tai-2d.png" alt="logo" width={30} height={30} />Trung Tai
        </a>

        <nav className="desktop">
          <ul>
            {links.map(({ link, name }) => {
              const pageId = link.replace("#/", "");
              const isActive = currentPage === pageId;
              const activeTextClass = theme === "light" ? "text-black font-semibold" : "text-white font-semibold";
              return (
                <li key={name} className={`group ${isActive ? "active-link" : ""}`}>
                  <a href={link}>
                    <span className={isActive ? activeTextClass : ""}>{name}</span>
                    <span className={`underline ${isActive ? "w-full" : "w-0"}`} />
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="nav-toggle-btn"
            title={language === "en" ? "Tiếng Việt" : "English"}
          >
            {language === "en" ? "🇻🇳" : "🇺🇸"}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="nav-toggle-btn"
            title={theme === "dark" ? "Light Mode" : "Dark Mode"}
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <a href="#/contact" className={`contact-btn group ${currentPage === "contact" ? "active-contact" : ""}`}>
            <div className={`inner ${currentPage === "contact"
              ? theme === "light"
                ? "!bg-[#0f172a] !text-white"
                : "!bg-[#f8fafc] !text-black"
              : ""
              }`}>
              <span>{uiTranslations[language].navContact}</span>
            </div>
          </a>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
