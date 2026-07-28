const riskRows = [
  ["Heat stress", "39.0°C", "High", "At or above the 38°C reference threshold"],
  ["Water stress", "16.0%", "High", "At or below the 18% reference threshold"],
  ["Humidity disease", "82.0%", "Moderate", "Above the 75% reference threshold"],
];

const indicators = [
  "Valid environmental observations",
  "Observations processed offline",
  "Synchronization success rate",
  "Alert-generation latency",
  "Active non-identifying sites",
  "Sensor-data completeness",
  "High-risk periods detected",
  "Aggregate users trained",
  "Future alert-interpretation rate",
  "Connected-operation uptime",
];

const roadmap = [
  ["01", "Months 1–2", "Foundation", "Architecture, safeguarding, licensing, schema, repository, baseline prototype."],
  ["02", "Months 3–4", "Offline product", "Risk API, dashboard, local-first workflow, local-language framework."],
  ["03", "Months 5–6", "Edge & indicators", "IoT ingestion, synchronization, public indicators, documentation."],
  ["04", "Months 7–9", "Pilot readiness", "Approvals, training materials, usability and data-quality testing."],
  ["05", "Months 10–11", "Independent review", "Model improvement, accessibility, interoperability, review preparation."],
  ["06", "Month 12", "Release pathway", "Evaluation report, implementation toolkit, proposed stable release, scale plan."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="FarmAssist home">
          <span className="brand-mark" aria-hidden="true">FA</span>
          <span>FarmAssist</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#prototype">Prototype</a>
          <a href="#safeguarding">Safeguarding</a>
          <a href="#roadmap">Roadmap</a>
          <a className="nav-cta" href="mailto:joitabioseedai@gmail.com">Contact</a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="eyebrow"><span /> Open-source · Offline-first · Edge-ready</p>
            <h1>Climate intelligence where connectivity ends.</h1>
            <p className="hero-lede">
              A transparent AI and IoT reference platform designed to help trained adults
              monitor climate risk in school gardens, community nutrition gardens, and
              vulnerable smallholder settings—without collecting personal or child data.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#prototype">Explore the prototype <span>↘</span></a>
              <a className="button button-secondary" href="#safeguarding">See the safety model</a>
            </div>
            <p className="hero-status">
              <strong>Current status:</strong> early reference implementation for supervised
              research and proposed pilots. Independent validation is required.
            </p>
          </div>

          <div className="edge-panel" aria-label="Synthetic demonstration risk assessment">
            <div className="edge-panel-head">
              <div><span className="signal-dot" /> LOCAL ASSESSMENT</div>
              <span>DEMO-001</span>
            </div>
            <div className="reading">
              <span>Latest synthetic reading</span>
              <strong>39.0<sup>°C</sup></strong>
              <small>Heat stress reference threshold exceeded</small>
            </div>
            <div className="sensor-strip">
              <div><span>Humidity</span><strong>82%</strong></div>
              <div><span>Soil moisture</span><strong>16%</strong></div>
              <div><span>Sync state</span><strong>Local</strong></div>
            </div>
            <div className="risk-score">
              <div className="score-top"><span>Combined reference risk</span><strong>90 / 100</strong></div>
              <div className="score-track"><span /></div>
              <p>Explainable reasons and next checks are available on-device.</p>
            </div>
            <div className="offline-badge">Works without continuous internet</div>
          </div>
        </section>

        <section className="proof-band" aria-label="Prototype evidence">
          <div><strong>3</strong><span>non-identifying demo sites</span></div>
          <div><strong>360</strong><span>labelled synthetic records</span></div>
          <div><strong>7</strong><span>documented API routes</span></div>
          <div><strong>98.93%</strong><span>measured Python test coverage</span></div>
        </section>

        <section className="section intro-section">
          <div className="section-kicker">01 — The challenge</div>
          <div className="intro-grid">
            <h2>Environmental signals matter. Connectivity should not decide who can act.</h2>
            <div className="body-copy">
              <p>
                Climate stress can damage garden productivity, while intermittent networks can
                delay monitoring and response. Many tools also introduce unnecessary identity,
                location, or cloud dependencies.
              </p>
              <p>
                FarmAssist demonstrates a different path: collect only essential environmental
                observations, process risk locally, show the logic behind every alert, and
                synchronize approved, non-identifying indicators when a connection returns.
              </p>
            </div>
          </div>
        </section>

        <section className="section system-section" id="prototype">
          <div className="section-kicker light">02 — How it works</div>
          <div className="section-heading light-heading">
            <h2>A complete local-to-public intelligence loop.</h2>
            <p>Four deliberately simple layers. No black-box claim, no identity layer, no permanent connection required.</p>
          </div>
          <div className="system-flow">
            <article>
              <span className="step">01</span>
              <div className="glyph">OBS</div>
              <h3>Observe</h3>
              <p>Temperature, humidity, soil moisture, crop stage, and non-personal stress notes.</p>
            </article>
            <article>
              <span className="step">02</span>
              <div className="glyph">EDGE</div>
              <h3>Assess locally</h3>
              <p>Configurable thresholds generate risk levels, reasons, and adult next-checks on-device.</p>
            </article>
            <article>
              <span className="step">03</span>
              <div className="glyph">QUEUE</div>
              <h3>Queue safely</h3>
              <p>Approved observations wait locally, remain reviewable, and use UUIDs to avoid duplicate submission.</p>
            </article>
            <article>
              <span className="step">04</span>
              <div className="glyph">SYNC</div>
              <h3>Share aggregates</h3>
              <p>When connectivity returns, only privacy-reviewed environmental indicators move upstream.</p>
            </article>
          </div>
          <div className="stack-line">
            <span>Python 3.12</span><span>FastAPI</span><span>SQLite</span><span>TypeScript PWA</span>
            <span>OpenAPI</span><span>Docker</span><span>MIT + CC BY 4.0</span>
          </div>
        </section>

        <section className="section explain-section">
          <div className="section-kicker">03 — Explainability</div>
          <div className="explain-grid">
            <div>
              <p className="overline">REFERENCE ASSESSMENT · SYNTHETIC EXAMPLE</p>
              <h2>Every risk has a reason. Every reason leads to a check.</h2>
              <p className="body-copy">
                The current model is a deterministic threshold engine, not a predictive claim.
                Its JSON configuration is public, human-readable, versionable, and designed
                for local agronomic review.
              </p>
              <div className="next-check">
                <span>Suggested human review</span>
                <p>Confirm shaded sensor placement, inspect root-zone moisture, and consult a qualified agronomist.</p>
              </div>
            </div>
            <div className="risk-table">
              <div className="risk-table-head">
                <span>Signal</span><span>Reading</span><span>Risk</span>
              </div>
              {riskRows.map(([name, readingValue, level, reason]) => (
                <div className="risk-row" key={name}>
                  <div><strong>{name}</strong><small>{reason}</small></div>
                  <span className="mono">{readingValue}</span>
                  <span className={`risk-tag ${level.toLowerCase()}`}>{level}</span>
                </div>
              ))}
              <div className="model-note">
                Reference model only · crop- and region-specific validation not yet completed
              </div>
            </div>
          </div>
        </section>

        <section className="safety-section" id="safeguarding">
          <div className="safety-intro">
            <div className="section-kicker coral">04 — Safeguarding by architecture</div>
            <h2>Designed to be useful without becoming invasive.</h2>
            <p>
              Data minimization is a product boundary, not a policy footnote. The open schema
              deliberately excludes identity, health, contact, household, and precise-location fields.
            </p>
          </div>
          <div className="safety-grid">
            <article>
              <span>Never collected</span>
              <h3>No child profiles</h3>
              <p>No child names, health records, biometrics, school-child identity, phone numbers, or personal farmer identity.</p>
            </article>
            <article>
              <span>Never published</span>
              <h3>No precise locations</h3>
              <p>Public endpoints expose aggregate environmental indicators—not rows, notes, coordinates, or small-group breakdowns.</p>
            </article>
            <article>
              <span>Always required</span>
              <h3>Adult human review</h3>
              <p>Alerts are uncertain prompts for trained adults, never autonomous instructions and never a responsibility placed on children.</p>
            </article>
            <article>
              <span>Before any pilot</span>
              <h3>Institutional safeguards</h3>
              <p>Consent, approval, access controls, retention rules, incident procedures, and accountable agronomic partners.</p>
            </article>
          </div>
          <p className="safety-rule">
            The platform is not a medical device, emergency-warning system, or substitute for
            qualified agronomic, safeguarding, nutrition, or public-health advice.
          </p>
        </section>

        <section className="section indicators-section">
          <div className="section-kicker">05 — Measurement</div>
          <div className="section-heading">
            <h2>Built to measure progress without inventing it.</h2>
            <p>These are designed indicators for future supervised evaluation. No current outcome values are claimed.</p>
          </div>
          <div className="indicator-list">
            {indicators.map((indicator, index) => (
              <div key={indicator}><span>{String(index + 1).padStart(2, "0")}</span><p>{indicator}</p></div>
            ))}
          </div>
        </section>

        <section className="section roadmap-section" id="roadmap">
          <div className="section-kicker">06 — Twelve-month pathway</div>
          <div className="section-heading">
            <h2>From public alpha to evaluation-ready implementation toolkit.</h2>
            <p>A proposed sequence subject to funding, approvals, implementation partners, and evidence at each gate.</p>
          </div>
          <div className="roadmap">
            {roadmap.map(([number, timing, title, detail]) => (
              <article key={number}>
                <span className="roadmap-number">{number}</span>
                <div><small>{timing}</small><h3>{title}</h3><p>{detail}</p></div>
              </article>
            ))}
          </div>
        </section>

        <section className="funding-section">
          <div>
            <p className="eyebrow"><span /> Proposed funding request</p>
            <strong className="funding-number">USD 100,000</strong>
          </div>
          <div>
            <h2>Funding would convert a transparent prototype into independently reviewable public infrastructure.</h2>
            <p>
              Planned work covers offline product maturity, reference IoT ingestion, accessibility
              and localization, safeguarding and pilot preparation, data-quality evaluation,
              independent-review readiness, documentation, and an implementation toolkit.
            </p>
            <p className="truth-note">No UNICEF endorsement, selection, partnership, or funding is claimed.</p>
          </div>
        </section>

        <section className="section evidence-section">
          <div className="section-kicker">07 — Why open</div>
          <div className="evidence-grid">
            <div>
              <h2>Public code makes the promise inspectable.</h2>
              <p>
                The repository includes the working API and PWA, risk configuration, schema,
                deterministic synthetic generator, tests, licenses, model and dataset cards,
                privacy threat model, safeguarding protocol, governance, and release history.
              </p>
            </div>
            <div className="repo-card">
              <div className="repo-top"><span>PUBLIC REPOSITORY</span><span>v0.1.0-alpha</span></div>
              <div className="repo-title">farmassist-child-climate-open</div>
              <ul>
                <li><span>✓</span> MIT-licensed software</li>
                <li><span>✓</span> CC BY 4.0 documentation and synthetic data</li>
                <li><span>✓</span> Reproducible installation and testing</li>
                <li><span>✓</span> Continuous integration and secret scanning</li>
                <li><span>✓</span> Transparent limitations and change control</li>
              </ul>
              <p>Repository publishing is the next owner-controlled release step.</p>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <p className="overline">JOITA BIOSEED AI PRIVATE LIMITED · INDIA</p>
          <h2>Climate resilience should work at the edge—and stay accountable in the open.</h2>
          <div className="hero-actions">
            <a className="button button-light" href="mailto:joitabioseedai@gmail.com">Discuss a responsible pilot <span>↗</span></a>
            <a className="button button-outline-light" href="https://www.joitabioseedai.com/">Visit JOITA BIOSEED AI</a>
          </div>
          <p className="closing-meta">Project lead: Dr. Meenakshi Sharma · joitabioseedai@gmail.com</p>
        </section>
      </main>

      <footer>
        <div><span className="brand-mark small" aria-hidden="true">FA</span><strong>FarmAssist</strong></div>
        <p>Early open-source reference implementation · Requires independent validation</p>
        <p>© 2026 JOITA BIOSEED AI PRIVATE LIMITED</p>
      </footer>
    </>
  );
}
