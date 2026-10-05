import { useEffect, useState } from "react";
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { Footer, Header, ScrollToTop } from "./components.jsx";
import {
  AboutPage,
  ArticlePage,
  CalculatorPage,
  CareersPage,
  ContactPage,
  FleetPage,
  HomePage,
  NewsPage,
  ServicesPage,
} from "./pages.jsx";
import { translations } from "./i18n.js";
import "./App.css";

function Site() {
  const [language, setLanguage] = useState(
    () => localStorage.getItem("ukr-language") || "uk",
  );
  const location = useLocation();
  const copy = translations[language];
  useEffect(() => {
    localStorage.setItem("ukr-language", language);
    document.documentElement.lang = language;
    document.title = `${copy.brand} — ${copy.metaTitle}`;
  }, [copy.brand, copy.metaTitle, language]);
  return (
    <>
      <ScrollToTop />
      <Header language={language} setLanguage={setLanguage} copy={copy} />
      <main key={`${location.pathname}-${language}`}>
        <Routes>
          <Route path="/" element={<HomePage copy={copy} />} />
          <Route path="/about" element={<AboutPage copy={copy} />} />
          <Route path="/services" element={<ServicesPage copy={copy} />} />
          <Route path="/fleet" element={<FleetPage copy={copy} />} />
          <Route
            path="/calculator"
            element={<CalculatorPage copy={copy} language={language} />}
          />
          <Route path="/news" element={<NewsPage copy={copy} />} />
          <Route path="/news/:slug" element={<ArticlePage copy={copy} />} />
          <Route path="/careers" element={<CareersPage copy={copy} />} />
          <Route path="/contact" element={<ContactPage copy={copy} />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer language={language} setLanguage={setLanguage} copy={copy} />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Site />
    </BrowserRouter>
  );
}
