import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Brain,
  Cloud,
  Hourglass,
  Languages,
  Mic,
  Search,
  Sparkles,
  Sprout,
  Volume2,
  Users,
} from "lucide-react";
import heroImage from "@/assets/hero-elder.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imbewu — Preserving elder knowledge for the next generation" },
      {
        name: "description",
        content:
          "Imbewu preserves generational knowledge from elders and helps young people find it with AI. Every story is a seed.",
      },
      { property: "og:title", content: "Imbewu — Elder knowledge, preserved" },
      {
        property: "og:description",
        content:
          "Elders share what they know; AI helps the next generation find it. Preserve your community's knowledge with Imbewu.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { label: "Our story", href: "#story" },
  { label: "Ask Imbewu", href: "#ask" },
  { label: "How AI helps", href: "#ai" },
];

const problems = [
  { icon: Brain, title: "Knowledge lives in memory", n: "01" },
  { icon: Hourglass, title: "Time moves forward", n: "02" },
  { icon: Users, title: "Stories stop being passed on", n: "03" },
];

const steps = [
  {
    icon: Volume2,
    step: "Step 1",
    title: "Speech to text",
    body: "Transcribes an elder's spoken knowledge into text, in their own language.",
  },
  {
    icon: Sparkles,
    step: "Step 2",
    title: "Structured memory",
    body: "Turns long conversations into clear, searchable lessons.",
  },
  {
    icon: Languages,
    step: "Step 3",
    title: "Language AI",
    body: "Makes knowledge accessible across languages and dialects.",
  },
  {
    icon: Search,
    step: "Step 4",
    title: "Contextual retrieval",
    body: "Matches everyday questions with relevant community knowledge.",
  },
];

const seeds = ["Food", "Farming", "Crafts", "Medicine", "Stories", "Traditions"];
const cultures = ["Zulu", "Swati", "Tsonga", "Sepedi", "Other"];

function Index() {
  const [culture, setCulture] = useState("Zulu");
  const [question, setQuestion] = useState("");
  const [place, setPlace] = useState("");
  const [answered, setAnswered] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <header className="absolute inset-x-0 top-0 z-20">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#" className="flex items-center gap-2 text-forest-foreground">
            <span className="grid size-9 place-items-center rounded-full bg-gold text-gold-foreground">
              <Sprout className="size-5" />
            </span>
            <span className="font-display text-lg tracking-tight">Imbewu</span>
          </a>
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-forest-foreground/85 transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#share"
            className="rounded-full bg-sand px-5 py-2.5 text-sm font-medium text-forest transition-transform hover:-translate-y-0.5"
          >
            Share knowledge
          </a>
        </nav>
      </header>

      {/* Hero */}
      <section className="relative isolate min-h-[92vh] overflow-hidden surface-forest">
        <img
          src={heroImage}
          alt="An elder weaving a basket while sharing knowledge with a young woman"
          width={1600}
          height={1104}
          className="absolute inset-0 size-full object-cover object-right"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.22_0.04_152/0.97)_18%,oklch(0.22_0.04_152/0.75)_45%,oklch(0.22_0.04_152/0.15)_75%)]" />
        <div className="relative mx-auto flex min-h-[92vh] max-w-7xl items-center px-6 pt-28 pb-20">
          <div className="max-w-2xl text-forest-foreground">
            <div className="flex items-center gap-3 text-gold">
              <span className="h-px w-10 bg-gold" />
              <span className="eyebrow">From generation to generation</span>
            </div>
            <h1 className="mt-6 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              The knowledge of our elders shouldn't disappear with them.
            </h1>
            <p className="mt-7 max-w-lg text-lg text-forest-foreground/80">
              Imbewu preserves generational knowledge and connects it with the next
              generation. Elders share what they know; AI helps young people find it.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#share"
                className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-medium text-gold-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mic className="size-4" /> Preserve knowledge <ArrowRight className="size-4" />
              </a>
              <a
                href="#ask"
                className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/25 bg-forest-foreground/10 px-7 py-4 font-medium text-forest-foreground backdrop-blur transition-colors hover:bg-forest-foreground/20"
              >
                <Search className="size-4" /> Ask Imbewu
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section id="story" className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-clay">The problem</p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              We're losing more than traditions. We're losing knowledge.
            </h2>
            <p className="mt-6 max-w-md text-lg text-muted-foreground">
              Every elder carries wisdom that took decades to learn — from food and farming
              to medicine, crafts and cultural practice. When it is not recorded or passed
              on, it can disappear.
            </p>
          </div>
          <div className="rounded-3xl p-6 shadow-lift surface-forest sm:p-8">
            <ul className="space-y-4">
              {problems.map(({ icon: Icon, title, n }) => (
                <li
                  key={n}
                  className="flex items-center gap-4 rounded-2xl bg-forest-soft/70 px-5 py-5"
                >
                  <span className="grid size-11 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                    <Icon className="size-5" />
                  </span>
                  <span className="flex-1 text-forest-foreground">{title}</span>
                  <span className="text-sm text-forest-foreground/40">{n}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 px-2 font-display text-xl text-gold">
              Imbewu keeps the knowledge growing.
            </p>
          </div>
        </div>
      </section>

      {/* Ask */}
      <section id="ask" className="bg-sand py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-clay">Ask Imbewu</p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Ask your culture. Ask your elders.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              No perfect search words needed. Ask naturally, and Imbewu finds preserved
              knowledge relevant to you.
            </p>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setAnswered(true);
              }}
              className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9"
            >
              <label className="block text-sm font-medium" htmlFor="q">
                What would you like to learn?
              </label>
              <textarea
                id="q"
                rows={3}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="How did my grandmother store maize through the dry season?"
                className="mt-2 w-full resize-none rounded-2xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              />

              <p className="mt-6 text-sm font-medium">Your cultural background</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {cultures.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCulture(c)}
                    className={`rounded-full border px-4 py-2 text-sm transition-colors ${
                      culture === c
                        ? "border-transparent bg-forest text-forest-foreground"
                        : "border-border bg-background hover:border-ring"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>

              <label className="mt-6 block text-sm font-medium" htmlFor="place">
                Where are you from?
              </label>
              <input
                id="place"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
                placeholder="e.g. Nkandla, KwaZulu-Natal"
                className="mt-2 w-full rounded-2xl border border-input bg-background px-4 py-3 text-base outline-none transition-colors focus:border-ring"
              />

              <button
                type="submit"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-7 py-3.5 font-medium text-forest-foreground transition-transform hover:-translate-y-0.5"
              >
                Get culturally relevant guidance <ArrowRight className="size-4" />
              </button>
            </form>

            <div className="rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-9">
              <h3 className="text-2xl leading-snug">
                Your community's knowledge, made easier to find.
              </h3>
              <p className="mt-4 text-muted-foreground">
                Add your context, then ask Imbewu to see how a culturally relevant answer
                takes shape.
              </p>
              <div className="mt-6 rounded-2xl bg-muted p-5 text-sm leading-relaxed">
                {answered ? (
                  <>
                    <p className="eyebrow text-clay">Drawing from {culture} knowledge</p>
                    <p className="mt-3 text-foreground">
                      Imbewu would search preserved recordings from {place || "your area"}{" "}
                      for elders who spoke about
                      {question ? ` "${question.trim()}"` : " this topic"}, then answer in
                      your language — always crediting the elder whose knowledge it is.
                    </p>
                  </>
                ) : (
                  <p className="text-muted-foreground">
                    Your preview answer appears here, grounded in recordings from elders in
                    your community.
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI */}
      <section id="ai" className="py-24 lg:py-32 surface-forest">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl text-forest-foreground">
            <p className="eyebrow text-gold">How AI powers Imbewu</p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              AI is the tool. Preservation is the mission.
            </h2>
            <p className="mt-5 text-lg text-forest-foreground/75">
              Technology helps knowledge travel further without replacing the people it
              comes from.
            </p>
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-forest-foreground/10 px-4 py-2 text-sm">
              <Cloud className="size-4 text-gold" /> Built with cloud AI services
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ icon: Icon, step, title, body }) => (
              <div
                key={title}
                className="rounded-2xl border border-forest-foreground/10 bg-forest-soft/60 p-6 text-forest-foreground"
              >
                <span className="grid size-11 place-items-center rounded-full bg-gold/15 text-gold">
                  <Icon className="size-5" />
                </span>
                <p className="mt-5 text-xs text-forest-foreground/50">{step}</p>
                <h3 className="mt-1 text-xl">{title}</h3>
                <p className="mt-3 text-sm text-forest-foreground/70">{body}</p>
              </div>
            ))}
          </div>

          <p className="mx-auto mt-14 max-w-3xl text-center font-display text-2xl leading-snug text-gold sm:text-3xl">
            We're not using AI to replace our elders. We're using AI to help their
            knowledge reach the next generation.
          </p>
        </div>
      </section>

      {/* Tree */}
      <section className="mx-auto max-w-7xl px-6 py-24 text-center lg:py-32">
        <p className="eyebrow text-clay">The Imbewu knowledge tree</p>
        <h2 className="mt-5 text-4xl sm:text-5xl">Every story is a seed.</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          What elders preserve today becomes a growing source of knowledge for tomorrow.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {seeds.map((s) => (
            <span
              key={s}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base shadow-soft"
            >
              <Sprout className="size-4 text-clay" />
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="share" className="mx-auto max-w-7xl px-6 pb-24">
        <div className="rounded-[2rem] px-8 py-16 text-center shadow-lift surface-forest sm:px-16">
          <p className="eyebrow text-gold">From generation to generation</p>
          <h2 className="mx-auto mt-5 max-w-2xl text-4xl leading-tight text-forest-foreground sm:text-5xl">
            Your roots hold knowledge. Help it grow.
          </h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a
              href="#share"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-4 font-medium text-gold-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mic className="size-4" /> Record an elder
            </a>
            <a
              href="#ask"
              className="inline-flex items-center gap-2 rounded-full border border-forest-foreground/25 px-7 py-4 font-medium text-forest-foreground transition-colors hover:bg-forest-foreground/10"
            >
              Ask Imbewu
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground sm:flex-row">
          <span className="inline-flex items-center gap-2 font-display text-base text-foreground">
            <Sprout className="size-4 text-clay" /> Imbewu
          </span>
          <span>Preserving generational knowledge, one seed at a time.</span>
        </div>
      </footer>
    </div>
  );
}
