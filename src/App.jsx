import Marginalia from "./marginalia/Marginalia";
import LanguageProvider from "./marginalia/i18n/LanguageProvider";

export default function App() {
  return <LanguageProvider><Marginalia /></LanguageProvider>;
}
