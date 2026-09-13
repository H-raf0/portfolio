import { useEffect, useRef } from "react";
import "./tokens.css";
import "./Marginalia.css";
import { useLenis } from "./hooks/useLenis";
import { useLanguage } from "./i18n/context";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Writing from "./components/Writing";
import Stack from "./components/Stack";
import Press from "./components/Press";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SkyCanvas from "./components/SkyCanvas";
import ScrollIndex from "./components/ScrollIndex";
import PageEmbers from "./components/PageEmbers";
import PageFigure from "./components/PageFigure";

const FONT_STACKS = {
  erode: '"Erode", "Fraunces", Georgia, serif',
  fraunces: '"Fraunces", Georgia, serif',
  instrument: '"Instrument Serif", "Fraunces", Georgia, serif',
};

export default function Marginalia() {
  useLenis();
  const { site: SITE, language, ui } = useLanguage();
  const rootRef = useRef(null);
  const previousLanguage = useRef(language);

  useEffect(() => {
    if (previousLanguage.current === language) return;
    previousLanguage.current = language;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    // Animate the existing tree: no remount, lost form draft, or replayed reveals.
    const animations = [...rootRef.current.querySelectorAll(".r-ch, .r-hero__card-inner, .r-work__meta")]
      .map((node) => node.animate([{ opacity: 0.65 }, { opacity: 1 }], { duration: 220, easing: "ease-out" }));
    return () => animations.forEach((animation) => animation.cancel());
  }, [language]);

  const params = new URLSearchParams(
    typeof window !== "undefined" ? window.location.search : "",
  );
  const fontKey = (params.get("font") || "instrument").toLowerCase();
  const stack = FONT_STACKS[fontKey] || FONT_STACKS.instrument;

  // Set document meta from config (no helmet dep needed for SPA use)
  useEffect(() => {
    document.title = SITE.title;
    const setMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", SITE.description);
    setMeta("theme-color", SITE.themeColor);
  }, [SITE]);

  return (
    <main
      ref={rootRef}
      className="r-root"
      style={{ "--r-font-display": stack }}
      data-font={fontKey}
    >
      <a href="#r-content" className="r-skip-link">
        {ui.skip}
      </a>
      <span className="r-sr-only" role="status" aria-live="polite" aria-atomic="true">{ui.languageChanged}</span>
      <SkyCanvas />
      <PageEmbers />
      <ScrollIndex />
      <PageFigure />
      <Hero />
      <div id="r-content" />
      <About />
      <Work />
      <Writing />
      <Stack />
      <Press />
      <Contact />
      <Footer />
    </main>
  );
}
