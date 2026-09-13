import { useLanguage } from "../i18n/context";
import LanguageSwitcher from "./LanguageSwitcher";
import "./Footer.css";

export default function Footer() {
  const { site: SITE, ui } = useLanguage();
  const year = new Date().getFullYear();
  const { footer, owner } = SITE;
  return (
    <footer className="r-footer" aria-label={ui.colophon}>
      <div className="r-footer__container">
        <div className="r-footer__col">
          <span className="r-footer__sig" aria-hidden="true">{owner.initials}</span>
          <p className="r-footer__line">
            {owner.name} — {owner.role}.
            <br />
            {footer.line}
          </p>
        </div>

        <div className="r-footer__col r-footer__col--meta">
          <p className="r-footer__line">
            {ui.typography} {footer.typeCredit}, Inter {ui.fontAnd} Geist Mono.{" "}
            {footer.techCredit}
          </p>
          <p className="r-footer__line r-footer__line--mute">
            © {year} {owner.name}. {ui.rights}
          </p>
        </div>

        <div className="r-footer__col r-footer__col--links">
          {footer.links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
          <LanguageSwitcher />
        </div>
      </div>
    </footer>
  );
}
