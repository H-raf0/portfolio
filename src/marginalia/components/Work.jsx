import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import ChapterHeader from "./ChapterHeader";
import { useLanguage } from "../i18n/context";
import "./Work.css";

export default function Work() {
  const { site: SITE, works } = useLanguage();
  const reduce = useReducedMotion();
  const { work } = SITE;

  return (
    <section id="work" className="r-work" aria-label={work.label}>
      <div className="r-work__container">
        <div className="r-work__header">
          <ChapterHeader
            align="center"
            numeral={work.numeral}
            label={work.label}
            title={work.title}
            lede={work.lede}
          />
        </div>

        <ul className="r-work__grid">
          {works.map((w, i) => (
            <WorkCard key={w.id} work={w} index={i} reduce={reduce} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function WorkCard({ work, index, reduce }) {
  const { ui } = useLanguage();
  return (
    <motion.li
      className="r-work__item"
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: (index % 3) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <a href={work.href} className="r-work__frame" aria-label={`${ui.viewProject} ${work.title}`}>
        <div className="r-work__frame-outer">
          <div className="r-work__frame-inner">
            <div className="r-work__canvas">
              <ProjectImage key={work.thumb || "fallback"} work={work} />
            </div>
          </div>
          <span className="r-work__plaque" aria-hidden="true">
            <span className="r-work__plaque-numeral">{work.numeral}</span>
            <span className="r-work__plaque-title">{work.title}</span>
          </span>
        </div>
      </a>

      <div className="r-work__meta">
        <h3 className="r-work__name">
          <a href={work.href}>{work.title}</a>
        </h3>
        <p className="r-work__role">
          {work.role} · <span>{work.year}</span>
        </p>
        <p className="r-work__blurb">{work.blurb}</p>
        <ul className="r-work__tags">
          {work.tags.map((t) => (
            <li key={t} className="r-work__tag">{t}</li>
          ))}
        </ul>
      </div>
    </motion.li>
  );
}

function ProjectImage({ work }) {
  const [status, setStatus] = useState("loading");
  return (
    <>
      {status !== "loaded" && (
        <div className="r-work__canvas-placeholder" aria-hidden="true">
          <span className="r-work__canvas-numeral">{work.numeral}</span>
        </div>
      )}
      {work.thumb && status !== "error" && (
        <img
          src={work.thumb}
          alt={work.imageAlt}
          width={work.imageWidth || 1600}
          height={work.imageHeight || 1200}
          loading="lazy"
          decoding="async"
          className={status === "loaded" ? "is-loaded" : ""}
          style={{ objectFit: work.imageFit || "cover", objectPosition: work.imagePosition || "center" }}
          onLoad={() => setStatus("loaded")}
          onError={() => setStatus("error")}
        />
      )}
    </>
  );
}
