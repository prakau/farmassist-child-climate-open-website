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

const reviewerPath = [
  ["01", "Enter", "Submit a synthetic environmental observation without personal data."],
  ["02", "Assess", "Run the configurable risk engine locally without continuous internet."],
  ["03", "Explain", "Inspect thresholds, reasons, confidence boundaries, and next checks."],
  ["04", "Queue", "Review an approved observation held safely on the device."],
  ["05", "Sync", "Reconnect and publish only non-identifying aggregate indicators."],
];

const readiness = [
  ["Working prototype", "API, risk engine, PWA, queue, synthetic generator", "Built & tested"],
  ["Open-source commitment", "MIT software; CC BY 4.0 docs and synthetic data", "Release-ready"],
  ["Low-resource deployment", "Local processing, SQLite, installable PWA, Docker", "Demonstrated"],
  ["Child-centred safety", "No child profiles; aggregate-only publication boundary", "Documented"],
  ["Field validation", "Supervised protocol, approvals, sensor and agronomic review", "Not yet completed"],
  ["Outcome evidence", "Pre-defined technical and future usability indicators", "Future evaluation"],
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
          <a href="#readiness">Readiness</a>
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

        <section className="section evaluator-section" id="readiness">
          <div className="section-kicker">00 — Reviewer brief</div>
          <div className="evaluator-grid">
            <div className="evaluator-lead">
              <p className="overline">CLIMATE VENTURES ALIGNMENT · NO ENDORSEMENT CLAIMED</p>
              <h2>Directly aligned to published climate-tech needs. Deliberately honest about the evidence still required.</h2>
              <p>
                UNICEF’s published 2026 Climate Ventures themes include hyper-local heat and
                humidity alerts for schools, low-cost IoT monitoring, open-source frontier
                technology, and deployment in low-resource settings. FarmAssist maps to those
                technical needs through an offline environmental intelligence layer—without
                claiming validated health or nutrition outcomes.
              </p>
              <a
                className="source-link"
                href="https://www.unicef.org/innovation/call-for-application-climate-and-health-2026"
                target="_blank"
                rel="noreferrer"
              >
                Read the published Climate Ventures call <span>↗</span>
              </a>
            </div>
            <div className="fit-grid">
              <article>
                <span>Priority area 2</span>
                <strong>Early warning, early action</strong>
                <p>Hyper-local temperature, humidity, and soil-moisture checks designed for trained adults supporting schools and communities.</p>
              </article>
              <article>
                <span>Priority area 3</span>
                <strong>Low-cost monitoring</strong>
                <p>An edge-ready reference architecture for environmental sensors, local decisions, and delayed synchronization.</p>
              </article>
              <article>
                <span>Core requirement</span>
                <strong>Working open prototype</strong>
                <p>Functional software, reproducible tests, open licenses, human-readable configuration, and synthetic demonstration data.</p>
              </article>
              <article>
                <span>Deployment reality</span>
                <strong>Low bandwidth by default</strong>
                <p>Essential assessment stays local; connectivity improves coordination but does not gate the core workflow.</p>
              </article>
            </div>
          </div>
          <div className="climate-facts" aria-label="UNICEF-published climate context">
            <div>
              <strong>1 billion</strong>
              <p>children live in countries facing high climate and environmental risk.</p>
            </div>
            <div>
              <strong>466 million</strong>
              <p>children live in areas with at least twice as many extreme-heat days as in the 1960s.</p>
            </div>
            <a
              href="https://www.unicef.org/innovation/call-for-application-climate-and-health-2026"
              target="_blank"
              rel="noreferrer"
            >
              Source: UNICEF Office of Innovation, Climate Ventures 2026 ↗
            </a>
          </div>
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

        <section className="section demo-section">
          <div className="section-kicker">02B — Verifiable demo path</div>
          <div className="section-heading">
            <h2>Five steps a technical reviewer can verify in minutes.</h2>
            <p>
              UNICEF’s published selection process verifies that a prototype exists, matches
              the proposal, and reflects the software and hardware work described.
            </p>
          </div>
          <div className="reviewer-path">
            {reviewerPath.map(([number, title, detail]) => (
              <article key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{detail}</p>
              </article>
            ))}
          </div>
          <div className="demo-proof">
            <div><span>Input contract</span><strong>Strict JSON Schema</strong></div>
            <div><span>Duplicate safety</span><strong>UUID + HTTP 409</strong></div>
            <div><span>Model logic</span><strong>Public JSON thresholds</strong></div>
            <div><span>Public output</span><strong>Aggregate only</strong></div>
            <a
              href="https://www.unicef.org/innovation/stories/unicef-venture-fund-selection-process"
              target="_blank"
              rel="noreferrer"
            >
              Official selection process ↗
            </a>
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

        <section className="section readiness-section">
          <div className="section-kicker">05B — Evidence ledger</div>
          <div className="section-heading">
            <h2>Built, demonstrated, documented—or clearly marked as future work.</h2>
            <p>This ledger prevents prototype evidence from being confused with field validation or child-impact evidence.</p>
          </div>
          <div className="readiness-table">
            <div className="readiness-head"><span>Review question</span><span>Evidence available</span><span>Status</span></div>
            {readiness.map(([question, evidence, state]) => (
              <div className="readiness-row" key={question}>
                <strong>{question}</strong>
                <p>{evidence}</p>
                <span className={state.includes("Future") || state.includes("Not yet") ? "status-future" : "status-ready"}>{state}</span>
              </div>
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

        <section className="section execution-section">
          <div className="section-kicker light">06B — Execution foundation</div>
          <div className="execution-grid">
            <div>
              <p className="overline">JOITA BIOSEED AI PRIVATE LIMITED · INDIA</p>
              <h2>Built by a team already working across software, AI, IoT, agronomy, and field research.</h2>
              <p>
                The proposed child-climate module is new and unvalidated, but it is not starting
                without technical and domain foundations.
              </p>
            </div>
            <div className="execution-list">
              <article><span>01</span><p>Offline-first FarmAssist test build and agronomic advisory workflows.</p></article>
              <article><span>02</span><p>Programmer-led software development with AI and IoT experience.</p></article>
              <article><span>03</span><p>Field-research workflows across three farmer locations covering approximately 25 acres in Haryana.</p></article>
              <article><span>04</span><p>Laboratory and field-validation capacity for proposed supervised evaluation.</p></article>
              <article><span>05</span><p>AgriTrust edge-hardware concepts and related industrial-design applications.</p></article>
            </div>
          </div>
          <p className="execution-boundary">
            These capabilities support delivery readiness; they do not constitute validation of
            the UNICEF-specific module, model performance, child outcomes, or school deployment.
          </p>
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
            <div className="funding-outputs">
              <span>Validated architecture</span>
              <span>Offline product</span>
              <span>Reference IoT adapters</span>
              <span>Safeguarding package</span>
              <span>Supervised-pilot toolkit</span>
              <span>Evaluation report</span>
            </div>
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
              <a
                className="button button-primary"
                href="https://github.com/prakau/farmassist-child-climate-open"
                target="_blank"
                rel="noreferrer"
              >
                Inspect the public repository <span>↗</span>
              </a>
            </div>
          </div>
          <div className="release-gate">
            <span>Open-source evidence live</span>
            <strong>The complete v0.1.0-alpha prototype is public and independently inspectable.</strong>
            <p>
              Review the implementation, synthetic demonstration data, automated tests,
              governance documents, safeguarding controls, model limitations, and release history
              on <a href="https://github.com/prakau/farmassist-child-climate-open" target="_blank" rel="noreferrer">GitHub</a>.
            </p>
          </div>
        </section>

        <section className="closing-section">
          <p className="overline">JOITA BIOSEED AI PRIVATE LIMITED · INDIA</p>
          <h2>Climate resilience should work at the edge—and stay accountable in the open.</h2>
          <div className="hero-actions">
            <a className="button button-light" href="mailto:joitabioseedai@gmail.com">Discuss a responsible pilot <span>↗</span></a>
            <a className="button button-outline-light" href="https://github.com/prakau/farmassist-child-climate-open" target="_blank" rel="noreferrer">Review the source</a>
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
