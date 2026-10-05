import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  ShieldCheck,
  Thermometer,
  Truck,
  Weight,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLink,
  CountUp,
  EuropeMap,
  FormField,
  PageHero,
  Reveal,
  SectionHeading,
} from "./components.jsx";

function TextInput({ label, ...props }) {
  return (
    <label className="form-field">
      <span>{label}</span>
      <input {...props} required />
    </label>
  );
}
function SuccessNotice({ children }) {
  return (
    <div className="success-notice">
      <Check size={17} />
      <span>{children}</span>
    </div>
  );
}

export function HomePage({ copy }) {
  const c = copy.home;
  return (
    <>
      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="signal-dot" />
            {c.eyebrow}
          </div>
          <h1 className="display-title">{c.title}</h1>
          <p>{c.text}</p>
          <div className="hero-buttons">
            <Link className="button button-yellow" to="/calculator">
              {c.cta}
              <ArrowUpRight size={17} />
            </Link>
            <Link className="text-button" to="/about">
              {c.secondary}
              <ArrowRight size={15} />
            </Link>
          </div>
          <div className="hero-index">
            <span>01 / 03</span>
            <span className="index-line" />
            <span>UKR · EU</span>
          </div>
        </div>
        <div className="hero-map-column">
          <EuropeMap label={c.mapLabel} map={copy.map} />
          <div className="map-route-label route-from">
            <span>01 / {copy.calculator.originCountry}</span>
            <b>{c.from}</b>
          </div>
          <div className="map-route-label route-to">
            <span>02 / {copy.calculator.destinationCountry}</span>
            <b>{c.to}</b>
          </div>
          <div className="dispatch-status">
            <span className="signal-dot" />
            {c.dispatch}
          </div>
          <div className="hero-coordinate">{copy.map.coordinates}</div>
        </div>
        <div className="hero-bottom">
          <span>{copy.ui.homeMeta}</span>
          <span>
            {copy.ui.scroll} <ArrowDownRight size={14} />
          </span>
        </div>
      </section>
      <section className="stats-strip" aria-label="Company statistics">
        {c.stats.map((stat, i) => (
          <Reveal className="stat-item" key={stat.label}>
            <div className="stat-number">
              <CountUp value={stat.value} suffix={stat.suffix} />
              <span className="stat-index">0{i + 1}</span>
            </div>
            <div className="stat-label">{stat.label}</div>
          </Reveal>
        ))}
      </section>
      <section className="home-intro section-pad">
        <div className="section-marker">A / 01</div>
        <Reveal>
          <SectionHeading
            kicker={c.introKicker}
            title={c.introTitle}
            text={c.introText}
          />
        </Reveal>
        <div className="intro-tail">
          <span>BUILT FOR LONG-HAUL BUSINESS</span>
          <span>
            UA <ArrowRight size={16} /> EU
          </span>
        </div>
      </section>
      <section className="services-preview section-pad">
        <Reveal>
          <SectionHeading
            kicker={c.servicesKicker}
            title={c.servicesTitle}
            action={
              <Link to="/services" className="arrow-link">
                {c.serviceLink}
                <ArrowRight size={16} />
              </Link>
            }
          />
        </Reveal>
        <div className="preview-list">
          {copy.services.items.map((service, i) => (
            <Reveal key={service.number} className="preview-row">
              <span className="preview-no">0{i + 1}</span>
              <span className="preview-icon">{service.icon}</span>
              <div>
                <h3>{service.title}</h3>
                <p>{service.short}</p>
              </div>
              <Link
                to="/services"
                className="round-arrow"
                aria-label={copy.common.more}
              >
                <ArrowUpRight size={17} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="fleet-band">
        <div className="fleet-band-grid">
          <Reveal>
            <div className="eyebrow">{copy.ui.fleetLabel}</div>
            <h2 className="display-title">{c.fleetTitle}</h2>
            <p>{c.fleetText}</p>
            <ArrowLink to="/fleet">{copy.common.learn}</ArrowLink>
          </Reveal>
          <div className="truck-drawing" aria-hidden="true">
            <div className="truck-cab">
              <div className="truck-window" />
              <div className="truck-nose" />
            </div>
            <div className="truck-trailer" />
            <div className="truck-wheels">
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className="truck-label">{copy.ui.fleetUnits}</span>
            <div className="truck-track" />
          </div>
        </div>
      </section>
      <section className="trust-section section-pad">
        <Reveal>
          <SectionHeading
            kicker={c.trustKicker}
            title={c.trustTitle}
            text={c.trustText}
          />
        </Reveal>
        <div className="industry-grid">
          {c.industries.map((item, i) => (
            <div key={item} className="industry-item">
              <span>0{i + 1}</span>
              <b>{item}</b>
              <ArrowUpRight size={16} />
            </div>
          ))}
        </div>
      </section>
      <section className="cta-panel">
        <div>
          <div className="eyebrow">{copy.ui.ctaLabel}</div>
          <h2 className="display-title">{c.ctaTitle}</h2>
          <p>{c.ctaText}</p>
        </div>
        <Link to="/calculator" className="button button-yellow">
          {copy.common.quote}
          <ArrowUpRight size={17} />
        </Link>
        <span className="cta-watermark">UKR</span>
      </section>
    </>
  );
}

export function AboutPage({ copy }) {
  const c = copy.about;
  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        intro={c.intro}
        tag="UA / EU"
      />
      <section className="timeline-section section-pad">
        <Reveal>
          <SectionHeading kicker={copy.ui.aboutRange} title={c.timelineTitle} />
        </Reveal>
        <div className="timeline-grid">
          {c.timeline.map((item, index) => (
            <Reveal key={item.year} className="timeline-item">
              <div className="timeline-marker">
                <span>{item.year}</span>
                <i />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="timeline-index">0{index + 1}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="mission-band">
        <div className="eyebrow">{c.missionKicker}</div>
        <p className="mission-statement">“{c.mission}”</p>
        <span className="mission-ghost">{copy.ui.principles}</span>
      </section>
      <section className="values-section section-pad">
        <Reveal>
          <SectionHeading kicker={copy.ui.principles} title={c.valuesTitle} />
        </Reveal>
        <div className="values-grid">
          {c.values.map((value, i) => (
            <Reveal key={value.title} className="value-item">
              <span className="value-number">0{i + 1}</span>
              <ShieldCheck size={19} />
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="team-section section-pad">
        <div className="team-visual">
          <div className="team-orbit orbit-one" />
          <div className="team-orbit orbit-two" />
          <div className="team-initial">У</div>
          <span className="team-caption">{c.teamLabel}</span>
        </div>
        <div className="team-copy">
          <div className="eyebrow">{copy.ui.people}</div>
          <h2 className="display-title">{c.teamTitle}</h2>
          <p>{c.teamText}</p>
        </div>
      </section>
      <section className="compliance-section section-pad">
        <Reveal>
          <SectionHeading
            kicker={copy.ui.compliance}
            title={c.complianceTitle}
          />
        </Reveal>
        <div className="compliance-list">
          {c.compliance.map((item, i) => (
            <div className="compliance-item" key={item}>
              <ShieldCheck size={20} />
              <span>{item}</span>
              <b>0{i + 1}</b>
            </div>
          ))}
        </div>
        <p className="fine-print">{c.note}</p>
      </section>
    </>
  );
}

export function ServicesPage({ copy }) {
  const c = copy.services;
  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        intro={c.intro}
        tag="FTL / B2B"
      />
      <section className="services-detail section-pad">
        <div className="service-detail-list">
          {c.items.map((item) => (
            <Reveal key={item.number} className="service-detail-row">
              <div className="service-detail-code">
                {item.number}
                <span>{item.icon}</span>
              </div>
              <div className="service-detail-copy">
                <div className="eyebrow">{item.short}</div>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
              <span className="service-detail-mark">{item.icon}</span>
            </Reveal>
          ))}
        </div>
      </section>
      <section className="service-bottom">
        <div>
          <div className="eyebrow">{copy.ui.servicesLabel}</div>
          <h2 className="display-title">{c.closingTitle}</h2>
          <p>{c.closingText}</p>
        </div>
        <Link to="/calculator" className="button button-yellow">
          {copy.common.quote}
          <ArrowUpRight size={17} />
        </Link>
      </section>
    </>
  );
}

function TrailerIllustration({ type }) {
  return (
    <div
      className={`trailer-illustration trailer-${type.toLowerCase()}`}
      aria-hidden="true"
    >
      <span className="trailer-glint" />
      <div className="illustration-cab">
        <span />
      </div>
      <div className="illustration-body">
        <div className="container-ribs" />
        {type === "REEFER" && <Thermometer size={29} />}
        {type === "MEGA" && <span className="mega-mark">MEGA</span>}
      </div>
      <div className="illustration-wheels">
        <i />
        <i />
        <i />
      </div>
      <div className="illustration-ground" />
    </div>
  );
}

export function FleetPage({ copy }) {
  const c = copy.fleet;
  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        intro={c.intro}
        tag={`85 / ${c.units}`}
      />
      <section className="fleet-specs section-pad">
        <div className="fleet-count-line">
          <div>
            <strong>85</strong>
            <span>{c.units}</span>
          </div>
          <span>{copy.ui.fleetConfigs}</span>
        </div>
        {c.vehicles.map((vehicle) => (
          <Reveal key={vehicle.code} className="fleet-spec-card">
            <div className="fleet-spec-head">
              <span>{vehicle.code}</span>
              <span>{copy.ui.fleetStandard}</span>
            </div>
            <TrailerIllustration type={vehicle.type} />
            <div className="fleet-spec-content">
              <h2>{vehicle.title}</h2>
              <p>{vehicle.description}</p>
              <div className="spec-grid">
                <div>
                  <Weight size={15} />
                  <span>{c.labelCapacity}</span>
                  <b>{vehicle.capacity}</b>
                </div>
                <div>
                  <span className="spec-volume">M³</span>
                  <span>{c.labelVolume}</span>
                  <b>{vehicle.volume}</b>
                </div>
                <div>
                  <Truck size={15} />
                  <span>{c.labelLength}</span>
                  <b>{vehicle.length}</b>
                </div>
                {vehicle.temp && (
                  <div>
                    <Thermometer size={15} />
                    <span>{c.labelTemp}</span>
                    <b>{vehicle.temp}</b>
                  </div>
                )}
              </div>
              <div className="fleet-card-foot">
                {vehicle.detail}
                <ArrowUpRight size={15} />
              </div>
            </div>
          </Reveal>
        ))}
        <p className="fine-print fleet-note">{c.note}</p>
      </section>
      <section className="fleet-cta-strip">
        <span>{copy.ui.fleetHelp}</span>
        <Link to="/calculator">
          {copy.common.quote}
          <ArrowRight size={16} />
        </Link>
      </section>
    </>
  );
}

const cityCoordinates = {
  Kyiv: [50.45, 30.52],
  Київ: [50.45, 30.52],
  Lviv: [49.84, 24.03],
  Львів: [49.84, 24.03],
  Odesa: [46.48, 30.72],
  Одеса: [46.48, 30.72],
  Warsaw: [52.23, 21.01],
  Варшава: [52.23, 21.01],
  Berlin: [52.52, 13.4],
  Берлін: [52.52, 13.4],
  Paris: [48.86, 2.35],
  Париж: [48.86, 2.35],
  Amsterdam: [52.37, 4.9],
  Амстердам: [52.37, 4.9],
  Milan: [45.46, 9.19],
  Мілан: [45.46, 9.19],
  Prague: [50.08, 14.44],
  Прага: [50.08, 14.44],
  Barcelona: [41.39, 2.17],
  Барселона: [41.39, 2.17],
  Brussels: [50.85, 4.35],
  Брюссель: [50.85, 4.35],
  Vienna: [48.21, 16.37],
  Відень: [48.21, 16.37],
  Bucharest: [44.43, 26.1],
  Бухарест: [44.43, 26.1],
  Vilnius: [54.69, 25.28],
  Вільнюс: [54.69, 25.28],
  Stockholm: [59.33, 18.07],
  Стокгольм: [59.33, 18.07],
  Budapest: [47.5, 19.04],
  Будапешт: [47.5, 19.04],
};
const countryCoordinates = {
  Україна: [50.45, 30.52],
  Ukraine: [50.45, 30.52],
  Польща: [52.23, 21.01],
  Poland: [52.23, 21.01],
  Німеччина: [52.52, 13.4],
  Germany: [52.52, 13.4],
  Франція: [48.86, 2.35],
  France: [48.86, 2.35],
  Нідерланди: [52.37, 4.9],
  Netherlands: [52.37, 4.9],
  Італія: [45.46, 9.19],
  Italy: [45.46, 9.19],
  Чехія: [50.08, 14.44],
  Czechia: [50.08, 14.44],
  Іспанія: [40.42, 3.7],
  Spain: [40.42, 3.7],
  Бельгія: [50.85, 4.35],
  Belgium: [50.85, 4.35],
  Австрія: [48.21, 16.37],
  Austria: [48.21, 16.37],
  Румунія: [44.43, 26.1],
  Romania: [44.43, 26.1],
  Литва: [54.69, 25.28],
  Lithuania: [54.69, 25.28],
  Швеція: [59.33, 18.07],
  Sweden: [59.33, 18.07],
  Угорщина: [47.5, 19.04],
  Hungary: [47.5, 19.04],
};

function estimateRoute(route, cargo, language) {
  const origin = cityCoordinates[route.originCity] ||
    countryCoordinates[route.originCountry] || [50.45, 30.52];
  const destination = cityCoordinates[route.destinationCity] ||
    countryCoordinates[route.destinationCountry] || [52.23, 21.01];
  const radians = (degrees) => (degrees * Math.PI) / 180;
  const latitudeDelta = radians(destination[0] - origin[0]);
  const longitudeDelta = radians(destination[1] - origin[1]);
  const arc =
    2 *
    Math.asin(
      Math.sqrt(
        Math.sin(latitudeDelta / 2) ** 2 +
          Math.cos(radians(origin[0])) *
            Math.cos(radians(destination[0])) *
            Math.sin(longitudeDelta / 2) ** 2,
      ),
    );
  const distance = Math.max(250, Math.round((6371 * arc * 1.22) / 50) * 50);
  const weight = Number(cargo.weight) || 1;
  const cargoFactor = cargo.type === 1 ? 1.28 : cargo.type === 2 ? 1.18 : 1;
  // Placeholder pricing only: replace these per-kilometre, cargo and weight assumptions with approved commercial rates before launch.
  const base =
    distance * (1.35 + Math.min(weight / 24000, 1) * 0.45) * cargoFactor;
  const formatter = new Intl.NumberFormat(
    language === "uk" ? "uk-UA" : "en-GB",
    { maximumFractionDigits: 0 },
  );
  return {
    distance: formatter.format(distance),
    low: formatter.format(Math.round((base * 0.9) / 10) * 10),
    high: formatter.format(Math.round((base * 1.16) / 10) * 10),
    days: Math.max(1, Math.ceil(distance / 650) + 1),
  };
}

export function CalculatorPage({ copy, language }) {
  const c = copy.calculator;
  const [step, setStep] = useState(1);
  const [route, setRoute] = useState({
    originCountry: c.countries[0],
    originCity: c.cities[0],
    destinationCountry: c.countries[2],
    destinationCity: c.cities[4],
  });
  const [cargo, setCargo] = useState({
    type: 0,
    weight: "12000",
    volume: "50",
  });
  const [result, setResult] = useState(null);
  const navigate = useNavigate();
  const patch = (setter, key, value) =>
    setter((current) => ({ ...current, [key]: value }));
  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        intro={c.intro}
        tag="EST. / EUR"
      />
      <section className="calculator-layout section-pad">
        <aside className="calculator-aside">
          <span>{copy.ui.planner}</span>
          <div className="calculator-vertical">{copy.ui.estimateDate}</div>
          <div className="calculator-progress">
            <div className={step >= 1 ? "complete" : ""}>
              01 <span>{c.routeTitle}</span>
            </div>
            <div className={step >= 2 ? "complete" : ""}>
              02 <span>{c.cargoTitle}</span>
            </div>
            <div className={step >= 3 ? "complete" : ""}>
              03 <span>{c.resultTitle}</span>
            </div>
          </div>
          <div className="calculator-map-mini">
            <EuropeMap compact label={copy.ui.mapRoute} map={copy.map} />
          </div>
        </aside>
        <div className="calculator-form">
          <div className="calculator-step-label">
            {c.step} 0{step} / 03 <span className="step-rule" />
          </div>
          {result ? (
            <div className="estimate-result">
              <div className="eyebrow">{c.resultTitle}</div>
              <h2 className="display-title">
                {route.originCity}
                <br />
                <span>→</span> {route.destinationCity}
              </h2>
              <div className="estimate-primary">
                <span>{c.price}</span>
                <strong>
                  €{result.low} <i>—</i> €{result.high}
                </strong>
              </div>
              <div className="estimate-detail">
                <div>
                  <span>{c.distance}</span>
                  <b>{result.distance} km</b>
                </div>
                <div>
                  <span>{c.transit}</span>
                  <b>
                    ~{result.days} {language === "uk" ? "днів" : "days"}
                  </b>
                </div>
              </div>
              <p className="fine-print">{c.disclaimer}</p>
              <div className="estimate-actions">
                <button
                  className="button button-yellow"
                  onClick={() => navigate("/contact")}
                >
                  {c.resultCta}
                  <ArrowUpRight size={16} />
                </button>
                <button
                  className="text-button"
                  onClick={() => {
                    setResult(null);
                    setStep(1);
                  }}
                >
                  {c.back}
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={(event) => {
                event.preventDefault();
                if (step === 1) setStep(2);
                else {
                  setResult(estimateRoute(route, cargo, language));
                  setStep(3);
                }
              }}
            >
              {step === 1 ? (
                <>
                  <h2 className="form-title">{c.routeTitle}</h2>
                  <div className="form-grid">
                    <label className="form-field">
                      <span>{c.originCountry}</span>
                      <select
                        value={route.originCountry}
                        onChange={(event) =>
                          patch(setRoute, "originCountry", event.target.value)
                        }
                      >
                        {c.countries.map((country) => (
                          <option key={country}>{country}</option>
                        ))}
                      </select>
                      <ChevronDown className="select-chevron" size={15} />
                    </label>
                    <TextInput
                      label={c.originCity}
                      value={route.originCity}
                      onChange={(event) =>
                        patch(setRoute, "originCity", event.target.value)
                      }
                    />
                    <label className="form-field">
                      <span>{c.destinationCountry}</span>
                      <select
                        value={route.destinationCountry}
                        onChange={(event) =>
                          patch(
                            setRoute,
                            "destinationCountry",
                            event.target.value,
                          )
                        }
                      >
                        {c.countries.map((country) => (
                          <option key={country}>{country}</option>
                        ))}
                      </select>
                      <ChevronDown className="select-chevron" size={15} />
                    </label>
                    <TextInput
                      label={c.destinationCity}
                      value={route.destinationCity}
                      onChange={(event) =>
                        patch(setRoute, "destinationCity", event.target.value)
                      }
                    />
                  </div>
                  <button
                    className="button button-yellow form-submit"
                    type="submit"
                  >
                    {c.next}
                    <ArrowRight size={16} />
                  </button>
                </>
              ) : (
                <>
                  <h2 className="form-title">{c.cargoTitle}</h2>
                  <div className="form-grid">
                    <label className="form-field full-width">
                      <span>{c.cargoType}</span>
                      <select
                        value={cargo.type}
                        onChange={(event) =>
                          patch(setCargo, "type", Number(event.target.value))
                        }
                      >
                        {c.types.map((type, index) => (
                          <option value={index} key={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="select-chevron" size={15} />
                    </label>
                    <TextInput
                      label={c.weight}
                      type="number"
                      min="1"
                      value={cargo.weight}
                      onChange={(event) =>
                        patch(setCargo, "weight", event.target.value)
                      }
                    />
                    <TextInput
                      label={c.volume}
                      type="number"
                      min="1"
                      value={cargo.volume}
                      onChange={(event) =>
                        patch(setCargo, "volume", event.target.value)
                      }
                    />
                  </div>
                  <div className="form-step-actions">
                    <button
                      className="text-button"
                      type="button"
                      onClick={() => setStep(1)}
                    >
                      {c.back}
                    </button>
                    <button className="button button-yellow" type="submit">
                      {c.calculate}
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </section>
    </>
  );
}

export function NewsPage({ copy }) {
  const c = copy.news;
  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        intro={c.intro}
        tag={copy.ui.newsTag}
      />
      <section className="news-section section-pad">
        <div className="news-grid">
          {c.articles.map((article, index) => (
            <Reveal
              key={article.slug}
              className={`news-card ${index === 0 ? "news-featured" : ""}`}
            >
              <Link to={`/news/${article.slug}`} className="news-card-link">
                <div className={`news-art news-art-${index + 1}`}>
                  <span>
                    {article.category} / {article.date}
                  </span>
                  <span className="news-art-number">0{index + 1}</span>
                  <div className="news-art-lines" />
                </div>
                <div className="news-card-copy">
                  <div className="eyebrow">
                    {article.category} <i>·</i> {article.date}
                  </div>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                  <div className="news-read">
                    {c.read}
                    <ArrowUpRight size={15} />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

export function ArticlePage({ copy }) {
  const { slug } = useParams();
  const article = copy.news.articles.find((item) => item.slug === slug);
  if (!article)
    return (
      <PageHero
        kicker="404 / NEWS"
        title={copy.ui.articleMissing}
        intro={copy.ui.articleMissingText}
      />
    );
  return (
    <>
      <section className="article-hero">
        <div className="eyebrow">
          <Link to="/news">{copy.common.back}</Link> / {article.category} /{" "}
          {article.date}
        </div>
        <h1 className="display-title">{article.title}</h1>
        <div className="article-art">
          <span>{copy.ui.articleLabel}</span>
          <div className="article-art-lines" />
        </div>
      </section>
      <article className="article-body">
        {article.body.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <Link to="/news" className="arrow-link">
          {copy.common.back}
          <ArrowRight size={16} />
        </Link>
      </article>
    </>
  );
}

export function CareersPage({ copy }) {
  const c = copy.careers;
  const [selected, setSelected] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        intro={c.intro}
        tag={copy.ui.careersTag}
      />
      <section className="careers-section section-pad">
        <div className="career-list">
          {c.jobs.map((job, i) => (
            <Reveal
              key={job.title}
              className={`career-item ${selected === job.title ? "career-selected" : ""}`}
            >
              <button
                className="career-toggle"
                onClick={() => {
                  setSelected(selected === job.title ? "" : job.title);
                  setSubmitted(false);
                }}
                aria-expanded={selected === job.title}
              >
                <span className="career-no">0{i + 1}</span>
                <span className="career-name">
                  <b>{job.title}</b>
                  <small>{job.type}</small>
                </span>
                <ArrowDownRight size={18} className="career-arrow" />
              </button>
              {selected === job.title && (
                <div className="career-expanded">
                  <div>
                    <h3>{c.requirements}</h3>
                    <ul>
                      {job.requirements.map((requirement) => (
                        <li key={requirement}>
                          <Check size={14} />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {submitted ? (
                    <SuccessNotice>{copy.common.submitted}</SuccessNotice>
                  ) : (
                    <form
                      className="career-form"
                      onSubmit={(event) => {
                        event.preventDefault();
                        setSubmitted(true);
                      }}
                    >
                      <h3>{c.formTitle}</h3>
                      <TextInput label={copy.common.name} placeholder="" />
                      <TextInput
                        label={copy.common.email}
                        type="email"
                        placeholder=""
                      />
                      <FormField label={c.cv} placeholder="https://" />
                      <button className="button button-yellow" type="submit">
                        {c.apply}
                        <ArrowUpRight size={16} />
                      </button>
                    </form>
                  )}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </section>
      <section className="careers-foot">
        <span>UKR / EU</span>
        <p>{copy.ui.careersFoot}</p>
        <Truck size={25} />
      </section>
    </>
  );
}

export function ContactPage({ copy }) {
  const c = copy.contact;
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <PageHero
        kicker={c.kicker}
        title={c.title}
        intro={c.intro}
        tag="UA / EU"
      />
      <section className="contact-layout section-pad">
        <div className="contact-info">
          <div className="contact-info-block">
            <span>{c.addressLabel}</span>
            <p>{c.address}</p>
          </div>
          <div className="contact-info-block">
            <span>{copy.common.phone}</span>
            <a href="tel:+380000000000">+38 (000) 000 00 00</a>
          </div>
          <div className="contact-info-block">
            <span>{copy.common.email}</span>
            <a href="mailto:logistics@example.com">logistics@example.com</a>
          </div>
          <div className="contact-info-block">
            <span>{c.hoursLabel}</span>
            <p>{c.hours}</p>
          </div>
          <div className="contact-map-label">{c.mapLabel}</div>
          <EuropeMap compact label={copy.ui.mapLive} map={copy.map} />
        </div>
        <div className="contact-form-wrap">
          <div className="eyebrow">{copy.ui.contactFormLabel}</div>
          <h2 className="form-title">{c.formTitle}</h2>
          {submitted ? (
            <SuccessNotice>{copy.common.submitted}</SuccessNotice>
          ) : (
            <form
              className="contact-form"
              onSubmit={(event) => {
                event.preventDefault();
                setSubmitted(true);
              }}
            >
              <div className="form-grid">
                <TextInput label={copy.common.name} placeholder="" />
                <TextInput label={copy.common.company} placeholder="" />
                <TextInput
                  label={copy.common.email}
                  type="email"
                  placeholder=""
                />
                <TextInput
                  label={copy.common.phone}
                  type="tel"
                  placeholder=""
                />
              </div>
              <label className="form-field">
                <span>{c.subject}</span>
                <select>
                  {c.subjects.map((subject) => (
                    <option key={subject}>{subject}</option>
                  ))}
                </select>
                <ChevronDown className="select-chevron" size={15} />
              </label>
              <label className="form-field message-field">
                <span>{copy.common.message}</span>
                <textarea rows="4" required />
              </label>
              <button className="button button-yellow" type="submit">
                {copy.common.send}
                <ArrowUpRight size={16} />
              </button>
            </form>
          )}
          <p className="fine-print">{c.note}</p>
        </div>
      </section>
    </>
  );
}
