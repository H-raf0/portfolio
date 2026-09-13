import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ChapterHeader from "./ChapterHeader";
import { useLanguage } from "../i18n/context";
import { SOCIALS } from "../data/socials";
import "./Contact.css";

export default function Contact({ onSubmit }) {
  const { site: SITE, ui } = useLanguage();
  const reduce = useReducedMotion();
  const [sent, setSent] = useState(false);
  const { contact, owner, hero } = SITE;

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (onSubmit) {
      onSubmit(formData);
    } else {
      const subject = encodeURIComponent(`${ui.emailSubject} ${formData.get("name")}`);
      const body = encodeURIComponent(`${ui.emailGreeting}\n\n${formData.get("message")}\n\n${ui.emailReply} ${formData.get("email")}`);
      window.location.href = `mailto:${owner.email}?subject=${subject}&body=${body}`;
    }
    setSent(true);
  }

  return (
    <section id="contact" className="r-contact" aria-label="Contact">
      <div className="r-contact__container">
        <ChapterHeader
          align="left"
          numeral={contact.numeral}
          label={contact.label}
          title={contact.title}
          lede={contact.lede}
        />

        <div className="r-contact__grid">
          {/* Letter form */}
          <motion.form
            className="r-letter"
            onSubmit={handleSubmit}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="r-letter__seal" aria-hidden="true">
              <span>{owner.initials}</span>
            </div>
            <div className="r-letter__heading">
              <span className="r-letter__heading-meta">
                {hero.folioLabel}
              </span>
              <span className="r-letter__heading-rule" aria-hidden="true" />
              <span className="r-letter__heading-meta">{owner.location}</span>
            </div>

            {sent ? (
              <div className="r-letter__sent" role="status">
                <h3>{ui.messageReady}</h3>
                <p>
                  {ui.messageReadyBody} <a href="#work">{ui.projects}</a>.
                </p>
              </div>
            ) : (
              <>
                <div className="r-letter__field">
                  <label htmlFor="r-name">{ui.name}</label>
                  <input
                    id="r-name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder={ui.name}
                  />
                </div>
                <div className="r-letter__field">
                  <label htmlFor="r-email">{ui.replyAddress}</label>
                  <input
                    id="r-email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder={ui.emailPlaceholder}
                  />
                </div>
                <div className="r-letter__field">
                  <label htmlFor="r-msg">{ui.letter}</label>
                  <textarea
                    id="r-msg"
                    name="message"
                    rows={6}
                    required
                    placeholder={ui.messagePlaceholder}
                  />
                </div>
                <div className="r-letter__actions">
                  <button type="submit" className="r-letter__send">
                    {ui.openEmail}
                    <span aria-hidden="true">↗</span>
                  </button>
                  <p className="r-letter__pact">
                    {ui.privacy}
                  </p>
                </div>
              </>
            )}
          </motion.form>

          {/* Socials column */}
          <aside className="r-contact__aside">
            <h3 className="r-contact__sub">{ui.findMe}</h3>
            <ul className="r-contact__socials">
              {SOCIALS.map((s) => (
                <li key={s.id}>
                  <a href={s.href} className="r-contact__social">
                    <span className="r-contact__social-key">{s.id === "email" ? ui.email : s.id}</span>
                    <span className="r-contact__social-rule" aria-hidden="true" />
                    <span className="r-contact__social-val">{s.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="r-contact__hours">
              <h4>{ui.availability}</h4>
              <p>{contact.workingHours}</p>
              <p className="r-contact__hours-note">
                {contact.workingHoursNote}
              </p>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
