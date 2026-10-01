import React from "react";

const DOCADAMS_BASE_URL = (
  process.env.REACT_APP_DOCADAMS_URL ||
  "https://doc-adams.vercel.app"
).replace(/\/+$/, "");

const DOCADAMS_PROGRESS_URL = DOCADAMS_BASE_URL + "/progress";

const pillars = [
  {
    title: "Longitudinal patient record",
    text: "Keep medical problems organized as cases with multiple visits, reports, outcomes and patient-confirmed durable context.",
  },
  {
    title: "Patient AI guidance",
    text: "Help patients understand a case through structured summaries, provisional possibilities, urgency, red flags and safer next-step guidance.",
  },
  {
    title: "DoctorMAP",
    text: "Build a healthcare-specific geospatial layer that combines a permanent health graph with explicit live discovery while preserving provenance.",
  },
  {
    title: "Doctor workflow",
    text: "Give authorized clinicians relevant history and an editable AI copilot while keeping final assessment, treatment and prescription under clinician authority.",
  },
];

const goals = [
  "Connect patient history, documents, cases and follow-up visits into one longitudinal workflow.",
  "Build clinically safer AI assistance that supports patients and clinicians without replacing professional judgment.",
  "Create a global healthcare provider and facility graph using open, official, reusable and first-party data.",
  "Connect provider discovery to appointments, consultations and the patient record instead of treating search as a separate product.",
  "Keep infrastructure affordable, provider-agnostic, mobile-first and practical for fragmented healthcare systems.",
  "Expand country by country with local registries, languages, workflows and verification rules.",
  "Complete systematic clinical validation, security hardening, reliability testing and regulatory review before production-scale clinical use.",
];

const currentCapabilities = [
  "Patient and doctor authentication",
  "Patient cases / episodes and follow-up visits",
  "Medical document handling and longitudinal history",
  "Patient AI guidance and persistent clinical chat",
  "Patient-confirmed memory architecture",
  "Doctor AI copilot and doctor-reviewed visit saving",
  "Medication-safety support foundations",
  "Provider discovery and appointment workflow",
  "DocADAMS MAP / DoctorMAP integration",
  "MapLibre + PostGIS healthcare mapping architecture",
  "Deep Search with source-aware runtime discovery",
  "Open / official healthcare-data ingestion foundations",
];

const principles = [
  {
    title: "AI assists; clinicians decide",
    text: "Patient-facing AI is guidance. Doctor-facing AI is decision support. The clinician remains responsible for clinical decisions.",
  },
  {
    title: "Open and affordable where possible",
    text: "Prefer open standards, reusable data, low-cost infrastructure and provider portability instead of unnecessary dependency on one premium vendor.",
  },
  {
    title: "Designed for fragmented systems",
    text: "DocADAMS is being shaped for markets where records, provider directories, booking and healthcare information are often disconnected.",
  },
  {
    title: "Provenance matters",
    text: "An external listing is not automatically a verified provider. Data source, verification and first-party status remain distinguishable.",
  },
];

function SectionTitle({ kicker, title, text }) {
  return (
    <div className="max-w-3xl mb-10">
      <p className="text-xs font-bold tracking-[0.22em] text-emerald-700 uppercase">
        {kicker}
      </p>
      <h2 className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-slate-600 leading-7 text-base sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-800">
      {children}
    </span>
  );
}

export default function PitchDeck() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <header className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-rose-500/15 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-wrap gap-2">
            <Pill>Active development</Pill>
            <Pill>C15 · DoctorMAP integration hardening</Pill>
          </div>

          <p className="mt-8 text-sm font-semibold tracking-[0.22em] text-emerald-300 uppercase">
            DocADAMS
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-bold tracking-tight sm:text-6xl">
            A connected healthcare layer from patient history to care discovery,
            clinician workflow and longitudinal follow-up.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-8 text-slate-300 sm:text-xl">
            DocADAMS is evolving from an early clinical-AI concept into a broader
            healthcare workflow platform: patient cases, documents, AI-assisted
            understanding, DoctorMAP, appointments, clinician support and a
            continuously updated longitudinal record.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={DOCADAMS_BASE_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950 shadow-lg transition hover:-translate-y-0.5"
            >
              Open current DocADAMS
            </a>

            <a
              href={DOCADAMS_PROGRESS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-emerald-300/50 bg-emerald-400/10 px-5 py-3 text-sm font-bold text-emerald-100 transition hover:bg-emerald-400/20"
            >
              View live development progress
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-slate-200 transition hover:bg-white/10"
            >
              Contact / collaborate
            </a>
          </div>

          <p className="mt-7 max-w-3xl text-xs leading-6 text-slate-400">
            Development build. Not yet production-ready or formally clinically
            validated.
          </p>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionTitle
          kicker="About DocADAMS"
          title="Not just an AI chatbot. Not just a booking app."
          text="DocADAMS is being built as a patient-centered healthcare workflow layer that connects information and actions that are usually fragmented across reports, visits, doctors, directories and separate software systems."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-16 sm:px-8 lg:grid-cols-2">
          <article className="rounded-3xl bg-emerald-950 p-7 text-white sm:p-9">
            <p className="text-xs font-bold tracking-[0.2em] text-emerald-300 uppercase">
              Vision
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Make connected, understandable and affordable healthcare
              infrastructure available beyond well-integrated health systems.
            </h2>
            <p className="mt-5 leading-7 text-emerald-50/80">
              The long-term vision is a portable healthcare layer where a
              patient can carry structured context across episodes of care,
              discover appropriate providers and facilities, and interact with
              clinicians without repeatedly rebuilding the same medical story.
            </p>
          </article>

          <article className="rounded-3xl bg-slate-900 p-7 text-white sm:p-9">
            <p className="text-xs font-bold tracking-[0.2em] text-sky-300 uppercase">
              Mission
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              Connect patient context, safe AI assistance, healthcare discovery
              and clinician workflows while preserving human clinical authority.
            </h2>
            <p className="mt-5 leading-7 text-slate-300">
              We are prioritizing low-cost, mobile-first and provider-agnostic
              infrastructure that can adapt to fragmented directories, limited
              bandwidth, different national registries and different healthcare
              delivery models.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionTitle
          kicker="Goals"
          title="What we are trying to build"
          text="The product direction is broader than a single AI model. The goal is the system around the model: context, safety, discovery, workflow, provenance and continuity."
        />

        <div className="grid gap-4 md:grid-cols-2">
          {goals.map((goal, index) => (
            <div
              key={goal}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5"
            >
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
                {index + 1}
              </span>
              <p className="leading-7 text-slate-700">{goal}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionTitle
            kicker="Current build"
            title="What exists in the product today"
            text="These capabilities exist in code at varying levels of runtime verification. Built does not mean production-validated."
          />

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {currentCapabilities.map((capability) => (
              <div
                key={capability}
                className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm leading-6 text-slate-200"
              >
                <span className="mr-2 text-emerald-300">✓</span>
                {capability}
              </div>
            ))}
          </div>

          <div className="mt-9">
            <a
              href={DOCADAMS_PROGRESS_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex rounded-xl bg-emerald-400 px-5 py-3 text-sm font-bold text-emerald-950"
            >
              See the interactive progress page →
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionTitle
          kicker="Product principles"
          title="How we want to build it"
        />

        <div className="grid gap-5 md:grid-cols-2">
          {principles.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-slate-200 bg-white p-6"
            >
              <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionTitle
            kicker="Who it is for"
            title="Starting with fragmented and underserved healthcare markets"
            text="The architecture is intended to remain globally portable, with early emphasis on regions where provider data, records, affordability and digital healthcare workflows are fragmented."
          />

          <div className="flex flex-wrap gap-2">
            {[
              "India",
              "Bangladesh",
              "Pakistan",
              "Nepal",
              "Sri Lanka",
              "Indonesia",
              "Philippines",
              "Vietnam",
              "Nigeria",
              "Kenya",
              "Ghana",
              "Tanzania",
              "Uganda",
              "Other underserved markets",
            ].map((market) => (
              <span
                key={market}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700"
              >
                {market}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionTitle
          kicker="Current roadmap"
          title="Build the connected core first, then validate and expand"
        />

        <div className="grid gap-4 md:grid-cols-4">
          {[
            {
              title: "Now",
              text: "C15 / DoctorMAP integration, provider discovery, location UX and system hardening.",
            },
            {
              title: "Next",
              text: "Hospitals, clinics and emergency-care integration on top of the existing provider architecture.",
            },
            {
              title: "Then",
              text: "Localization, country-specific official registries, routing and broader provider/facility coverage.",
            },
            {
              title: "Before scale",
              text: "Clinical validation, medication-safety validation, security, reliability, regulatory review and launch hardening.",
            },
          ].map((step) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-5"
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                {step.title}
              </p>
              <p className="mt-3 leading-7 text-slate-700">{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-emerald-50">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
          <SectionTitle
            kicker="Team"
            title="Current core team"
          />

          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-emerald-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Dr. Debanjan Barman
              </h3>
              <p className="mt-2 font-semibold text-emerald-700">
                Product & clinical direction
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Building the product architecture, clinical workflows, AI
                direction and healthcare-data strategy.
              </p>
            </article>

            <article className="rounded-2xl border border-emerald-200 bg-white p-6">
              <h3 className="text-xl font-bold text-slate-900">
                Dr. Sayak Barman
              </h3>
              <p className="mt-2 font-semibold text-emerald-700">
                Product, Product, Growth & Outreach
              </p>
              <p className="mt-4 leading-7 text-slate-600">
                Supporting communication, outreach and the path from a working
                product toward real-world adoption.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <SectionTitle
          kicker="Collaborate"
          title="Help us build it better."
          text="We welcome useful criticism and collaboration from clinicians, healthcare-data teams, engineers, researchers, health systems, accelerators and potential funding partners."
        />

        <div className="rounded-3xl bg-slate-950 p-7 text-white sm:p-9">
          <p className="text-lg font-semibold">
            contact@innosolvesolutions.org
          </p>
          <p className="mt-3 max-w-3xl leading-7 text-slate-300">
            Useful contributions can include clinical feedback, validation
            support, lawful healthcare datasets, infrastructure guidance,
            partnerships, research collaboration, grants or investment.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:contact@innosolvesolutions.org?subject=DocADAMS%20collaboration"
              className="rounded-xl bg-white px-5 py-3 text-sm font-bold text-slate-950"
            >
              Contact us
            </a>
            <a
              href={DOCADAMS_PROGRESS_URL}
              target="_blank"
              rel="noreferrer"
              className="rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white"
            >
              View current progress
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-5 py-7 text-center text-sm text-slate-500">
        DocADAMS · Development-stage healthcare workflow platform · India
      </footer>
    </main>
  );
}
