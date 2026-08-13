import { useMemo, useState } from "react";

import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Github, Linkedin, Mail, Twitter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { projects } from "@/data/projects";
import { formatMonth } from "@/lib/utils";
import { education } from "@/data/educations";
import { experience } from "@/data/experiences";
import { socials } from "@/data/socials";
import { coworkTools } from "@/data/coworks";

const TITLE = "Fathan Maulana — Software Engineer";
const DESCRIPTION =
  "Software engineer building reliable products end to end. Build. Solve. Deliver.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://fathanmaul.my.id/#person",
      "name": "Fathan Maulana",
      "jobTitle": "Software Engineer",
      "url": "https://fathanmaul.my.id",
      "image": "https://fathanmaul.my.id/og-image.png",
      "sameAs": [
        "https://github.com/fathanmaul",
        "https://linkedin.com/in/fathanmaul",
        "https://x.com/davernn_"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bondowoso",
        "addressCountry": "Indonesia"
      },
      "knowsAbout": [
        "Software Engineering",
        "Web Development",
        "React",
        "TypeScript",
        "Frontend Development",
        "Backend Development",
        "Vite",
        "TanStack"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://fathanmaul.my.id/#website",
      "url": "https://fathanmaul.my.id",
      "name": "Fathan Maulana — Software Engineer",
      "description": "Portfolio & personal website of Fathan Maulana, Software Engineer building reliable digital products end-to-end.",
      "publisher": {
        "@id": "https://fathanmaul.my.id/#person"
      }
    },
    {
      "@type": "ProfilePage",
      "@id": "https://fathanmaul.my.id/#profilepage",
      "url": "https://fathanmaul.my.id",
      "name": "Fathan Maulana — Software Engineer Portfolio",
      "mainEntity": {
        "@id": "https://fathanmaul.my.id/#person"
      }
    }
  ]
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "https://fathanmaul.my.id/" },
      { property: "og:image", content: "https://fathanmaul.my.id/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: "https://fathanmaul.my.id/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://fathanmaul.my.id/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
    ],
  }),
  component: Index,
});

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
      {children}
    </h2>
  );
}

function Index() {
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedProjects = useMemo(() => {
    return [...projects].sort((a, b) => {
      const aDate = a.year * 12 + a.month;
      const bDate = b.year * 12 + b.month;

      return sortOrder === "asc" ? aDate - bDate : bDate - aDate;
    });
  }, [sortOrder]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border/60 bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-bold tracking-tight">
            FM<span className="text-accent">.</span>
          </a>
          <nav className="hidden gap-8 text-sm text-muted-foreground sm:flex">
            <a className="transition-colors hover:text-foreground" href="#work">
              Work
            </a>
            <a className="transition-colors hover:text-foreground" href="#experience">
              Experience
            </a>
            <a className="transition-colors hover:text-foreground" href="#ai">
              AI
            </a>
            <a className="transition-colors hover:text-foreground" href="#education">
              Education
            </a>
            <a className="transition-colors hover:text-foreground" href="#contact">
              Contact
            </a>
          </nav>
          <a
            href="#contact"
            className="rounded-full border border-foreground/25 px-4 py-1.5 text-xs font-semibold tracking-wide transition-colors hover:bg-foreground hover:text-background"
          >
            Get in touch
          </a>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="py-24 sm:py-36">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
            Software Engineer · Bondowoso
          </p>
          <h1 className="mt-8 max-w-3xl text-5xl leading-[0.95] tracking-[-0.03em] sm:text-7xl">
            <span className="font-semibold">Fathan Maulana</span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Turning ideas and requirements into well-structured digital solutions, from intuitive
            user interfaces to robust backend systems.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-85"
            >
              View selected work <ArrowUpRight className="size-4" />
            </a>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary"
            >
              Download CV <Download className="size-4" />
            </a>
          </div>
          <div className="mt-12 flex items-center gap-5">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon className="size-5" strokeWidth={1.6} />
              </a>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="work" className="border-t border-border py-20 sm:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionLabel>Featured Projects</SectionLabel>
            <div className="flex items-center gap-4">
              <Select
                value={sortOrder}
                onValueChange={(value: "asc" | "desc") => setSortOrder(value)}
              >
                <SelectTrigger className="w-35" aria-label="Sort projects order">
                  <SelectValue placeholder="Sort" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Oldest first</SelectItem>
                  <SelectItem value="desc">Newest first</SelectItem>
                </SelectContent>
              </Select>
              <span className="text-xs text-muted-foreground">
                2024 — {new Date().getFullYear()}
              </span>
            </div>
          </div>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {sortedProjects.map((p, index) => (
              <a key={p.title} href={p.href} className="group block">
                <div className="overflow-hidden rounded-md border border-border bg-card">
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading={index === 0 ? "eager" : "lazy"}
                    fetchPriority={index === 0 ? "high" : "auto"}
                    width={1200}
                    height={800}
                    className="aspect-video w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight">{p.title}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {formatMonth(p.month)} {p.year}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-border px-3 py-1 text-[11px] font-medium tracking-wide text-muted-foreground"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        {/* AI Workflows */}
        <section id="ai" className="border-t border-border py-20 sm:py-28">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <SectionLabel>AI Co-workers</SectionLabel>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {coworkTools.map((tool) => (
              <article
                key={tool.name}
                className="group rounded-2xl border border-border bg-card p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-background/70 p-3">
                    <img
                      src={tool.logo}
                      alt={`${tool.name} logo`}
                      className="h-full w-full object-contain"
                      loading="lazy"
                      width={56}
                      height={56}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold tracking-tight">{tool.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {tool.useCase}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="border-t border-border py-20 sm:py-28">
          <SectionLabel>Work Experience</SectionLabel>
          <div className="mt-12 border-l border-border pl-6 sm:pl-10">
            {experience.map((job) => (
              <div key={job.company} className="relative pb-14 last:pb-0">
                <span className="absolute -left-[calc(1.5rem+4.5px)] top-2 size-2 rounded-full bg-accent sm:-left-[calc(2.5rem+4.5px)]" />
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold tracking-tight">{job.company}</h3>
                  <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    {job.period}
                  </span>
                </div>
                <p className="mt-1 font-display text-lg italic text-accent">{job.role}</p>
                <ul className="mt-4 space-y-2">
                  {job.achievements.map((a) => (
                    <li
                      key={a}
                      className="text-sm leading-relaxed text-muted-foreground before:mr-3 before:text-foreground/40 before:content-['—']"
                    >
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="border-t border-border py-20 sm:py-28">
          <SectionLabel>Education</SectionLabel>
          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            {education.map((e) => (
              <div key={e.school}>
                <span className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {e.period}
                </span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight">{e.school}</h3>
                <p className="mt-1 text-sm font-medium">{e.degree}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border py-20 sm:py-32">
          <SectionLabel>Contact</SectionLabel>
          <h3 className="mt-8 max-w-2xl text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
            Have something worth building?
            <span className="block font-display italic text-muted-foreground">
              Let's talk about it.
            </span>
          </h3>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-muted-foreground">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-foreground"
              >
                {label}
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground">
          <div className="flex flex-wrap items-center gap-4">
            <span>© {new Date().getFullYear()} Fathan Maulana</span>
            <a
              href="/CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Download CV
            </a>
          </div>
          <span className="tracking-[0.2em] uppercase">Build. Solve. Deliver.</span>
        </div>
      </footer>
    </div>
  );
}
