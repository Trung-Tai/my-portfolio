import { useApp } from "../context/AppContext.jsx";
import { socialImgs, uiTranslations } from "../constants";

const Footer = () => {
  const { language } = useApp();
  const t = uiTranslations[language] || uiTranslations.en;

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>{t.footerTerms}</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a
              key={index}
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={socialImg.imgPath} alt={socialImg.name} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            Trinh Trung Tai {t.footerRights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
