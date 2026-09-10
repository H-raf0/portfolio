import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { SITE } from "../config.jsx";
import "./PageFigure.css";

const FIGURE = SITE.assets.figure;

/**
 * Protagonist stays pinned until the midpoint of the About chapter, then
 * moves upward with the page. Scale + horizontal drift are scroll-driven.
 *
 * Scale keyframes (mapped to total document scroll 0 → 1):
 *   0.00 Hero      → 1.0    (full size)
 *   0.15 About     → 0.78   (smaller for text reading)
 *   0.32 Work      → 0.52   (small, frames take spotlight)
 *   0.55 Writing   → 0.46   (smallest, list focus)
 *   0.72 Stack     → 0.46   (still small)
 *   0.82 Press     → 0.65   (growing back)
 *   1.00 Contact   → 0.95   (large again — bookend greeting)
 */
const SCALE_STOPS = [0,    0.15, 0.32, 0.55, 0.72, 0.82, 1.0];
const SCALE_VALS  = [1.0,  0.78, 0.52, 0.46, 0.46, 0.62, 0.78];

const X_STOPS = [0,    0.15, 0.32, 0.55, 0.72, 0.82, 1.0];
const X_VALS  = ["0%", "-6%", "-22%", "-30%", "-30%", "-22%", "-22%"];

export default function PageFigure() {
  const reduce = useReducedMotion();
  const { scrollYProgress, scrollY } = useScroll();
  const [releasePoint, setReleasePoint] = useState(Number.MAX_SAFE_INTEGER);
  const [releaseTop, setReleaseTop] = useState(Number.MAX_SAFE_INTEGER);
  const [hasReleased, setHasReleased] = useState(false);

  useEffect(() => {
    const about = document.getElementById("about");
    if (!about) return undefined;

    const updateReleasePoint = () => {
      const figureHeight = window.innerWidth <= 768
        ? window.innerHeight * 0.8
        : window.innerHeight;
      const figureTopOffset = window.innerHeight - figureHeight;
      const figureCenterOffset = figureTopOffset + figureHeight / 2;
      const aboutMidpoint = about.offsetTop + about.offsetHeight / 2;

      // Release when the visual center of the figure, not its top edge,
      // reaches the midpoint of the About section.
      setReleasePoint(Math.max(0, aboutMidpoint - figureCenterOffset));
      setReleaseTop(Math.max(0, aboutMidpoint - figureHeight / 2));
    };

    updateReleasePoint();
    const observer = new ResizeObserver(updateReleasePoint);
    observer.observe(about);
    window.addEventListener("resize", updateReleasePoint);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateReleasePoint);
    };
  }, []);

  useEffect(() => {
    const updateReleaseState = (value) => {
      setHasReleased(value >= releasePoint);
    };

    updateReleaseState(scrollY.get());
    return scrollY.on("change", updateReleaseState);
  }, [releasePoint, scrollY]);

  const rawScale = useTransform(scrollYProgress, SCALE_STOPS, SCALE_VALS);
  const rawX = useTransform(scrollYProgress, X_STOPS, X_VALS);

  // Spring smooth so motion feels organic, not stepped
  const scale = useSpring(rawScale, {
    stiffness: 90,
    damping: 22,
    mass: 0.8,
  });
  const x = useSpring(rawX, {
    stiffness: 80,
    damping: 24,
    mass: 0.8,
  });

  // Reduced motion = static at hero scale
  if (reduce) {
    return (
      <div
        className={`r-pf${hasReleased ? " r-pf--released" : ""}`}
        style={hasReleased ? { top: releaseTop } : undefined}
        aria-hidden="true"
      >
        <img src={FIGURE} alt="" className="r-pf__img" draggable="false" />
      </div>
    );
  }

  return (
    <div
      className={`r-pf${hasReleased ? " r-pf--released" : ""}`}
      style={hasReleased ? { top: releaseTop } : undefined}
      aria-hidden="true"
    >
      <motion.img
        src={FIGURE}
        alt=""
        className="r-pf__img"
        draggable="false"
        style={{ scale, x, transformOrigin: "left bottom" }}
      />
    </div>
  );
}
