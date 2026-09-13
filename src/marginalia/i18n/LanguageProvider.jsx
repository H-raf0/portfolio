import { useEffect, useState } from "react";
import { LanguageContext } from "./context";
import { CONTENT } from "./content.jsx";

const STORAGE_KEY = "portfolio-language";
const isLanguage = (value) => value === "en" || value === "fr";

function initialLanguage() {
  const requested = new URLSearchParams(window.location.search).get("lang");
  if (isLanguage(requested)) return requested;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (isLanguage(saved)) return saved;
  } catch { /* Storage may be unavailable in private browsing. */ }
  return "en";
}

export default function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(initialLanguage);

  useEffect(() => {
    document.documentElement.lang = language;
    try { localStorage.setItem(STORAGE_KEY, language); } catch { /* Keep in-memory selection. */ }
  }, [language]);

  useEffect(() => {
    const syncHistory = () => setLanguage(initialLanguage());
    window.addEventListener("popstate", syncHistory);
    return () => window.removeEventListener("popstate", syncHistory);
  }, []);

  function changeLanguage(next) {
    if (!isLanguage(next) || next === language) return;
    const url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.history.replaceState(window.history.state, "", url);
    setLanguage(next);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, ...CONTENT[language] }}>
      {children}
    </LanguageContext.Provider>
  );
}
