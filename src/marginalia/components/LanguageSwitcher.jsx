import { useLanguage } from "../i18n/context";
import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { language, changeLanguage, ui } = useLanguage();
  return (
    <div className="r-language" role="group" aria-label={ui.language}>
      {[["en", "English"], ["fr", "Français"]].map(([code, name], index) => (
        <span className="r-language__option" key={code}>
          {index > 0 && <span className="r-language__divider" aria-hidden="true">/</span>}
          <button type="button" lang={code} aria-label={name} aria-pressed={language === code} onClick={() => changeLanguage(code)}>
            {code.toUpperCase()}
          </button>
        </span>
      ))}
    </div>
  );
}
