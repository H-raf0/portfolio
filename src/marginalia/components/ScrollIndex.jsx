import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../i18n/context";
import "./ScrollIndex.css";

const SECTION_IDS = ["hero", "about", "work", "experience", "stack", "education", "contact"];

export default function ScrollIndex() {
  const { site, ui } = useLanguage();
  const reduce = useReducedMotion();
  const sections = [{ id: "hero", numeral: "", label: ui.home }, ...site.hero.nav.map((entry) => ({ ...entry, id: entry.href.slice(1) }))];
  const [active, setActive] = useState("hero");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.4);

      // Find section currently in viewport center
      const targets = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return { id, top: Infinity };
        const r = el.getBoundingClientRect();
        return { id, top: r.top };
      });

      const trigger = window.innerHeight * 0.4;
      const current = targets
        .filter((target) => target.top <= trigger)
        .sort((a, b) => b.top - a.top)[0];
      setActive(current?.id || SECTION_IDS[0]);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleJump = (id) => (e) => {
    e.preventDefault();
    const el = id === "hero" ? document.querySelector(".r-hero") : document.getElementById(id);
    if (el) {
      window.history.replaceState(window.history.state, "", `#${id}`);
      el.scrollIntoView({ behavior: reduce ? "instant" : "smooth", block: "start" });
    }
  };

  return (
    <motion.aside
      className="r-index"
      aria-label={ui.index}
      inert={!visible}
      initial={false}
      animate={{ opacity: visible ? 1 : 0, x: reduce || visible ? 0 : 20 }}
      transition={{ duration: reduce ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
      style={{ pointerEvents: visible ? "auto" : "none" }}
    >
      <ol className="r-index__list">
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <li key={s.id} className={`r-index__item ${isActive ? "is-active" : ""}`}>
              <a
                href={`#${s.id}`}
                onClick={handleJump(s.id)}
                className="r-index__link"
                aria-current={isActive ? "true" : undefined}
              >
                <span className="r-index__numeral">{s.numeral}</span>
                <span className="r-index__rule" aria-hidden="true" />
                <span className="r-index__label">{s.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </motion.aside>
  );
}
