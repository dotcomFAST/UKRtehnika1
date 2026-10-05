import { useEffect, useRef, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navKeys = [
  "home",
  "about",
  "services",
  "fleet",
  "news",
  "careers",
  "contact",
];
const navPaths = {
  home: "/",
  about: "/about",
  services: "/services",
  fleet: "/fleet",
  news: "/news",
  careers: "/careers",
  contact: "/contact",
};

export function Header({ language, setLanguage, copy }) {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="site-header">
      <Link to="/" className="wordmark" aria-label={copy.brand}>
        <span className="wordmark-mark">У</span>
        <span>{copy.brand}</span>
        <span className="wordmark-dot">.</span>
      </Link>
      <nav
        className={`main-nav ${open ? "is-open" : ""}`}
        aria-label={copy.footer.links}
      >
        {navKeys.map((key) => (
          <Link
            key={key}
            to={navPaths[key]}
            onClick={() => setOpen(false)}
            className={
              location.pathname === navPaths[key] ||
              (key === "news" && location.pathname.startsWith("/news/"))
                ? "active"
                : ""
            }
          >
            {copy.nav[key]}
          </Link>
        ))}
      </nav>
      <div className="header-actions">
        <LanguageToggle language={language} setLanguage={setLanguage} />
        <Link to="/calculator" className="button button-yellow header-quote">
          {copy.common.quote}
          <ArrowUpRight size={15} />
        </Link>
        <button
          className="icon-button menu-toggle"
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? copy.common.close : copy.ui.menu}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
    </header>
  );
}

export function LanguageToggle({ language, setLanguage }) {
  return (
    <div className="language-toggle" aria-label="Language">
      <button
        className={language === "uk" ? "selected" : ""}
        onClick={() => setLanguage("uk")}
        type="button"
      >
        UA
      </button>
      <span>/</span>
      <button
        className={language === "en" ? "selected" : ""}
        onClick={() => setLanguage("en")}
        type="button"
      >
        EN
      </button>
    </div>
  );
}

export function Footer({ language, setLanguage, copy }) {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand">
          <Link to="/" className="wordmark">
            <span className="wordmark-mark">У</span>
            <span>{copy.brand}</span>
            <span className="wordmark-dot">.</span>
          </Link>
          <p>{copy.footer.tagline}</p>
        </div>
        <div className="footer-links">
          <div className="footer-label">{copy.footer.links}</div>
          <div className="footer-nav">
            {navKeys.map((key) => (
              <Link key={key} to={navPaths[key]}>
                {copy.nav[key]}
              </Link>
            ))}
          </div>
        </div>
        <div className="footer-contact">
          <div className="footer-label">{copy.footer.contact}</div>
          <a href="tel:+380000000000">+38 (000) 000 00 00</a>
          <a href="mailto:logistics@example.com">logistics@example.com</a>
          <div className="footer-label footer-social-label">
            {copy.footer.social}
          </div>
          <div className="footer-social">
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
          </div>
          <Link to="/calculator" className="footer-estimate">
            {copy.common.quote}
            <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <span>
          © 2025 {copy.brand}. {copy.footer.rights}
        </span>
        <LanguageToggle language={language} setLanguage={setLanguage} />
        <a href="#top" className="back-top">
          {copy.footer.top} <ArrowUpRight size={13} />
        </a>
      </div>
    </footer>
  );
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export function SectionHeading({ kicker, title, text, action }) {
  return (
    <div className="section-heading">
      <div>
        <div className="eyebrow">{kicker}</div>
        <h2 className="display-title">{title}</h2>
      </div>
      {text && <p className="section-intro">{text}</p>}
      {action}
    </div>
  );
}

export function Reveal({ children, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      node.classList.add("is-visible");
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add("is-visible");
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}

export function CountUp({ value, suffix = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (!("IntersectionObserver" in window)) {
      node.textContent = `${value}${suffix}`;
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const started = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - started) / 1150, 1);
          node.textContent = `${Math.round(value * (1 - (1 - progress) ** 3))}${suffix}`;
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [suffix, value]);
  return <span ref={ref}>{`${value}${suffix}`}</span>;
}

export function EuropeMap({ compact = false, label, map }) {
  return (
    <div
      className={`europe-map ${compact ? "map-compact" : ""}`}
      aria-label={label}
      role="img"
    >
      <div className="map-topline">
        <span>{label}</span>
        <span>{map.coordinates}</span>
      </div>
      <svg viewBox="0 0 640 430" className="map-drawing" aria-hidden="true">
        <defs>
          <pattern
            id="map-grid"
            width="28"
            height="28"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 28 0 L 0 0 0 28"
              fill="none"
              stroke="currentColor"
              strokeWidth=".55"
              opacity=".48"
            />
          </pattern>
        </defs>
        <rect width="640" height="430" fill="url(#map-grid)" />
        <g
          className="map-continent"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        >
          <path d="M83 56l22-10 17 7 8 14 21-2 7 12 18-5 10 9 19-4 12 13 18-4 14 12 20-8 16 7 17-11 19 4 12-13 18 2 7 12 14 2 3 16-10 10 7 12-6 13 13 8-4 14-18 2-8 11-19-5-15 11-15-5-13 11-15-3-8 12-17-1-13 12-17-6-9 15-20-1-10 10-15-5-7 12-18-3-6 18-16 5-5 18-16-4-11 12-18-6-7-17-13-4-5-19-12-7-4-17-14-8-1-18-11-7 3-15-12-12 5-12-10-13 11-10-3-14 15-6 2-14 16-3 6-13 15-3 4-13 14-7 7-15z" />
          <path d="M135 126l19-2 9 12-9 13-18-5-6-9zM197 91l15 2 5 15-12 6-12-10zM282 177l15-6 9 12-6 17-15-3zM422 237l18 5 10 16-8 18-13-9-12-17zM324 310l11 3 8 14-12 7-12-9zM486 296l19 6 5 12-16 6-14-12zM223 263l13 3 6 14-11 4-10-10z" />
        </g>
        <g
          className="route-paths"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1.5"
        >
          <path
            className="route-line route-one"
            d="M334 224C296 218 273 224 243 207S192 179 176 173"
          />
          <path
            className="route-line route-two"
            d="M334 224C360 200 371 166 351 149S315 126 291 113"
          />
          <path
            className="route-line route-three"
            d="M334 224C381 211 420 202 459 179S490 152 503 140"
          />
          <path
            className="route-line route-four"
            d="M334 224C322 258 313 281 287 296S246 315 225 329"
          />
          <path
            className="route-line route-five"
            d="M334 224C377 235 414 253 437 274S456 298 465 320"
          />
        </g>
        <g className="route-nodes">
          <circle cx="334" cy="224" r="6" className="node-origin" />
          <circle cx="334" cy="224" r="13" className="node-ring" />
          <circle cx="176" cy="173" r="4" />
          <circle cx="291" cy="113" r="4" />
          <circle cx="503" cy="140" r="4" />
          <circle cx="225" cy="329" r="4" />
          <circle cx="465" cy="320" r="4" />
        </g>
        <g className="map-captions">
          <text x="347" y="215">
            {map.cities[5]} / UA
          </text>
          <text x="148" y="160">
            {map.cities[0]}
          </text>
          <text x="272" y="101">
            {map.cities[1]}
          </text>
          <text x="510" y="134">
            {map.cities[2]}
          </text>
          <text x="186" y="350">
            {map.cities[3]}
          </text>
          <text x="468" y="340">
            {map.cities[4]}
          </text>
        </g>
      </svg>
      <div className="map-bottomline">
        <span>
          <i className="signal-dot" /> {map.live}
        </span>
        <span>{map.region}</span>
      </div>
    </div>
  );
}

export function PageHero({ kicker, title, intro, tag }) {
  return (
    <section className="page-hero">
      <div className="page-hero-main">
        <div className="eyebrow">{kicker}</div>
        <h1 className="display-title">{title}</h1>
        <p>{intro}</p>
      </div>
      {tag && (
        <div className="page-hero-tag">
          {tag}
          <ArrowDownRight size={18} />
        </div>
      )}
      <div className="hero-slash" />
    </section>
  );
}
export function ArrowLink({ to, children, className = "" }) {
  return (
    <Link className={`arrow-link ${className}`} to={to}>
      {children}
      <ArrowRight size={16} />
    </Link>
  );
}
export function FormField({ label, ...props }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input {...props} />
    </label>
  );
}
