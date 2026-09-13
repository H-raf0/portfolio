import { motion, useReducedMotion } from "framer-motion";
import ChapterHeader from "./ChapterHeader";
import { useLanguage } from "../i18n/context";
import { DownloadIcon, LinkedInIcon } from "./Icons";
import "./Press.css";

const fmt = (iso, locale) => {
  if (!iso) return "";
  const [y, m] = iso.split("-");
  if (!m) return iso;
  const date = new Date(Number(y), Number(m) - 1, 1);
  return date.toLocaleDateString(locale, { month: "short", year: "numeric" });
};

export default function Press() {
  const { site: SITE, mentions, downloads, facts, ui, locale } = useLanguage();
  const reduce = useReducedMotion();
  const { press } = SITE;

  return (
    <section id="education" className="r-press" aria-label={press.label}>
      <div className="r-press__container">
        <ChapterHeader
          align="left"
          numeral={press.numeral}
          label={press.label}
          title={press.title}
          lede={press.lede}
        />

        <div className="r-press__grid">
          {/* Facts column */}
          <motion.dl
            className="r-press__facts"
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {facts.map((f) => (
              <div key={f.k} className="r-press__fact">
                <dt>{f.k}</dt>
                <dd>{f.v}</dd>
              </div>
            ))}
          </motion.dl>

          {/* Downloads */}
          <div className="r-press__downloads">
            <h3 className="r-press__sub">{ui.online}</h3>
            <ul className="r-press__dl-list">
              {downloads.map((d, i) => (
                <motion.li
                  key={d.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a className={`r-press__dl${d.download ? " r-press__dl--cv" : ""}`} href={d.href} download={d.download || undefined}>
                    <span className="r-press__dl-label">{d.label}</span>
                    <span className="r-press__dl-rule" aria-hidden="true" />
                    <span className="r-press__dl-note">{d.note}</span>
                    <span className="r-press__dl-arrow" aria-hidden="true">{d.download ? <DownloadIcon /> : d.id === "linkedin" ? <LinkedInIcon /> : "↗"}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Mentions */}
          <div className="r-press__mentions">
            <h3 className="r-press__sub">{ui.training}</h3>
            <ul className="r-press__mentions-list">
              {mentions.map((m, i) => (
                <motion.li
                  key={m.id}
                  initial={reduce ? false : { opacity: 0, y: 12 }}
                  whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <a className="r-press__mention" href={m.href}>
                    <span className="r-press__mention-venue">{m.venue}</span>
                    <span className="r-press__mention-title">{m.title}</span>
                    <time className="r-press__mention-date" dateTime={m.date}>{fmt(m.date, locale)}</time>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
