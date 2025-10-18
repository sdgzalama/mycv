import React from "react";

const me = {
  name: "Sidaga Waziri",
  title: "AI & Machine Learning Engineer",
  studying: "B.Sc. in Data Science (ongoing)",
  institution: "Eastern Africa Statistical Training Centre (EASTC)",
  summary:
    "AI/ML engineer and software developer delivering production-grade data products and web services. I design and deploy models and REST APIs, build reliable data pipelines, and ship secure, maintainable code. Currently completing a B.Sc. in Data Science while working full-time.",
  contacts: [
    { label: "Phone", text: "+255 686 000 231", href: "tel:+255686000231" },
    { label: "Work Email", text: "systems@hamasagroup.com", href: "mailto:systems@hamasagroup.com" },
    { label: "Personal Email", text: "sidagawazirikihongo@gmail.com", href: "mailto:sidagawazirikihongo@gmail.com" },
    { label: "Website", text: "hamasagroup.com", href: "https://www.hamasagroup.com", ext: true },
    { label: "Address", text: "Ngome Holding, Mwenge, Dar es Salaam", href: "#" }
  ],
  skills: {
    "Languages": ["Python", "PHP", "JavaScript", "C++", "SQL"],
    "Frameworks": ["FastAPI", "Flask", "Django", "Laravel", "React (basics)"],
    "Data & ML": ["scikit-learn", "Pandas", "Forecasting", "NLP", "Model deployment"],
    "Analytics": ["Power BI", "Data Visualization"],
    "Databases": ["PostgreSQL", "MySQL"],
    "Cloud & Dev": ["Git", "REST APIs", "Linux/Windows", "Docker (basics)"],
    "Networking": ["Routing & Switching", "Troubleshooting"]
  },
  experience: [
    {
      role: "AI & Machine Learning Engineer",
      org: "HAMASA Analytics",
      time: "Jan 2024 – Present",
      points: [
        "Lead ML services (classification, NLP, forecasting) from problem framing to deployment with FastAPI/Flask.",
        "Build ETL/data pipelines, feature stores, and evaluation suites; version models and datasets (Git/DVC).",
        "Expose models as secure REST APIs and integrate with product UIs; monitor latency/accuracy with dashboards.",
        "Drive MLOps practices (CI/CD, automated tests, environment management) for production reliability.",
        "Translate business requirements into measurable deliverables (SLAs, KPIs) and present results to stakeholders."
      ]
    },
    {
      role: "Software Developer",
      org: "DMAC Software Tanzania",
      time: "Nov 2023 – Dec 2023",
      points: [
        "Built web applications (Flask/Laravel) with clean REST endpoints and auth.",
        "Optimized SQL queries and implemented analytics views in PostgreSQL/MySQL.",
        "Improved logging, input validation, and security for production stability."
      ]
    },
    {
      role: "Network Technician",
      org: "MSNET Fiber, Tanzania",
      time: "Jul 2022 – Oct 2023",
      points: [
        "Installed and maintained fiber infrastructure; diagnosed connectivity issues.",
        "Configured routers/switches and executed routine performance testing."
      ]
    },
    {
      role: "IT Specialist",
      org: "Ilula Lutheran Hospital, Tanzania",
      time: "Jul 2021 – Oct 2021",
      points: [
        "Managed IT systems, backups, and user support; improved network reliability."
      ]
    }
  ],
  education: [
    "B.Sc. Data Science (ongoing) — EASTC",
    "Diploma in Computer Science — CoICT (UDSM), 2022",
    "A-Level — Mawelewele Secondary School, 2019",
    "O-Level — Consolata Iringa, 2017"
  ],
  languages: ["English (fluent)", "Kiswahili (native)"]
};

function Section({ title, id, children }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-5 py-10 scroll-mt-24">
      <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export default function App() {
  return (
    <div>
      {/* Top bar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-zinc-200">
        <div className="max-w-6xl mx-auto h-16 px-5 flex items-center justify-between">
          <span className="font-bold tracking-tight">{me.name}</span>
          <nav className="hidden sm:flex gap-6 text-sm">
            {["about", "experience", "skills", "education", "contact"].map((x) => (
              <a key={x} href={"#"+x} className="hover:text-brand.indigo capitalize">{x}</a>
            ))}
          </nav>
          <a href="#contact" className="px-3 py-2 rounded-lg text-white bg-brand.indigo hover:bg-brand.purple">
            Contact
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="bg-gradient-to-br from-white via-indigo-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-5 py-12 sm:py-16">
          <div className="grid md:grid-cols-[1.6fr,1fr] gap-8 items-center">
            <div>
              <p className="text-sm text-zinc-600">AI/ML • Software • Data</p>
              <h1 className="mt-1 text-4xl sm:text-5xl font-extrabold leading-tight">
                {me.name}
              </h1>
              <p className="mt-1 text-xl text-brand.indigo">{me.title}</p>
              <p className="mt-4 text-zinc-700">{me.summary}</p>

              <div className="mt-6 p-4 rounded-xl border border-zinc-200 bg-white shadow-soft">
                <p className="text-sm">
                  <span className="font-medium">Current study:</span>{" "}
                  {me.studying} — {me.institution}
                </p>
                <p className="text-sm text-zinc-600 mt-1">
                  Studying while working full-time in software and data engineering.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="mailto:systems@hamasagroup.com"
                  className="px-4 py-2 rounded-lg border border-brand.indigo text-brand.indigo hover:bg-brand.indigo hover:text-white transition"
                >
                  Email
                </a>
                <a
                  href="tel:+255686000231"
                  className="px-4 py-2 rounded-lg border border-brand.teal text-brand.teal hover:bg-brand.teal hover:text-white transition"
                >
                  Call
                </a>
                <a
                  href="https://www.hamasagroup.com"
                  target="_blank"
                  className="px-4 py-2 rounded-lg border border-brand.purple text-brand.purple hover:bg-brand.purple hover:text-white transition"
                >
                  Website
                </a>
              </div>
            </div>

            <div className="md:justify-self-end">
              <img
                src="/portrait.jpg"
                alt="Portrait of Sidaga Waziri"
                className="w-full max-w-xs md:max-w-sm rounded-2xl border border-zinc-200 shadow-soft object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <Section title="About" id="about">
        <p className="leading-7 text-zinc-700">
          I build end-to-end ML and software solutions: from clean data ingestion and
          modeling to API deployment and monitoring. I value clarity, security,
          and measurable impact, and I communicate results in language that
          business and technical teams can act on.
        </p>
      </Section>

      {/* Experience */}
      <Section title="Experience" id="experience">
        <div className="grid md:grid-cols-2 gap-5">
          {me.experience.map((job) => (
            <article key={job.role} className="p-5 rounded-2xl border border-zinc-200 bg-white shadow-soft">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h3 className="font-semibold">{job.role} — {job.org}</h3>
                <span className="text-sm text-zinc-600">{job.time}</span>
              </div>
              <ul className="mt-3 list-disc pl-5 text-zinc-700">
                {job.points.map((p, i) => <li key={i}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills" id="skills">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(me.skills).map(([k, v]) => (
            <div key={k} className="p-5 rounded-2xl border border-zinc-200 bg-white">
              <h4 className="font-semibold">{k}</h4>
              <p className="mt-2 text-sm text-zinc-700">{v.join(" · ")}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Education */}
      <Section title="Education" id="education">
        <ul className="grid sm:grid-cols-2 gap-4">
          {me.education.map((e, i) => (
            <li key={i} className="p-5 rounded-2xl border border-zinc-200 bg-white">{e}</li>
          ))}
        </ul>
      </Section>

      {/* Contact */}
      <Section title="Contact" id="contact">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {me.contacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target={c.ext ? "_blank" : undefined}
              className="p-4 rounded-xl border border-zinc-200 bg-white hover:border-brand.indigo hover:text-brand.indigo"
            >
              <div className="text-xs text-zinc-500">{c.label}</div>
              <div className="font-medium">{c.text}</div>
            </a>
          ))}
        </div>
      </Section>

      <footer className="py-10 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} {me.name}. All rights reserved.
      </footer>
    </div>
  );
}
