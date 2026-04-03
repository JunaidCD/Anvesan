import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Mail, Globe, Landmark, Shield } from "lucide-react";
import { Link } from "wouter";

/* ── Animation presets ─────────────────────────────────────── */
const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.11 } },
};

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

/* ── Marquee strip ─────────────────────────────────────────── */
const TICKER = [
  "Stablecoin Infrastructure",
  "Settlement Architecture",
  "Cross-Border Finance",
  "Regulatory Frameworks",
  "Licensing & Compliance",
  "Market Structure",
  "Agentic Payments",
  "Interoperability",
  "Policy Research",
  "Enterprise Rails",
];

function Marquee() {
  const items = [...TICKER, ...TICKER];
  return (
    <div className="border-y border-border overflow-hidden py-4 select-none" aria-hidden>
      <div className="marquee-track">
        {items.map((t, i) => (
          <span key={i} className="flex items-center gap-6 pr-6 text-xs font-medium tracking-[0.18em] uppercase text-muted-foreground whitespace-nowrap">
            {t}
            <span className="w-1 h-1 rounded-full bg-border flex-shrink-0" />
          </span>
        ))}
      </div>
    </div>
  );
}

/* ── Hero right-side preview card ──────────────────────────── */
function HeroPreviewCard() {
  return (
    <Link href="/research/state-of-agentic-payments-march-2026" className="block group">
      <motion.div
        initial={{ opacity: 0, x: 32, y: 16 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ delay: 0.55, duration: 0.9, ease }}
        className="relative rounded-2xl border border-border bg-card shadow-xl overflow-hidden lift"
      >
        {/* Card header strip */}
        <div className="bg-foreground px-6 pt-6 pb-8 relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 noise" />
          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <span className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-background/50">
                Anvesan · March 2026
              </span>
              <ArrowUpRight className="w-4 h-4 text-background/40 group-hover:text-background/80 transition-colors" />
            </div>
            <p className="font-serif text-xl text-background leading-snug">
              The State of Agentic Payments
            </p>
          </div>
          {/* Decorative circles */}
          <div aria-hidden className="absolute -bottom-8 -right-8 w-28 h-28 rounded-full border border-background/10" />
          <div aria-hidden className="absolute -bottom-4 -right-4 w-14 h-14 rounded-full border border-background/10" />
        </div>

        {/* Card body */}
        <div className="px-6 py-5">
          <div className="flex flex-wrap gap-1.5 mb-4">
            {["AI", "Payments", "Agentic", "Web3"].map((t) => (
              <span key={t} className="text-[0.6rem] font-medium uppercase tracking-widest px-2 py-0.5 rounded-full border border-border text-muted-foreground">
                {t}
              </span>
            ))}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            What is live, who is leading, what the numbers say — and how the market is splitting between
            card-led agentic checkout and internet-native machine payments.
          </p>
          <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
            <span className="text-[0.65rem] font-medium text-muted-foreground uppercase tracking-wider">12 min read</span>
            <span className="text-[0.65rem] font-semibold text-foreground group-hover:underline underline-offset-2">
              Read overview →
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

export default function Home() {
  return (
    <Layout>

      {/* ══════════════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Background grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035] dark:opacity-[0.06]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />
        {/* Radial vignette to fade grid at edges */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 70% 80% at 50% 50%, transparent 40%, hsl(var(--background)) 100%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 pt-32 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-center">

            {/* Left column */}
            <motion.div initial="hidden" animate="visible" variants={stagger}>

              {/* Eyebrow */}
              <motion.div variants={fadeUp} className="mb-8">
                <span className="inline-flex items-center gap-2.5 text-[0.68rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_6px_2px_rgba(16,185,129,0.4)] animate-pulse" />
                  Stablecoin Research & Strategic Advisory
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={fadeUp}
                className="font-serif font-medium leading-[1.05] tracking-[-0.01em] text-[clamp(2.8rem,6vw,5.5rem)] mb-7 text-foreground"
              >
                Bringing
                <br />
                Clarity to
                <br />
                <em className="not-italic text-gradient">Stablecoins.</em>
              </motion.h1>

              {/* Descriptor pill row */}
              <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2 mb-8">
                {["Technical", "Regulatory", "Policy"].map((t, i) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="text-sm font-medium text-muted-foreground">{t}</span>
                    {i < 2 && <span className="w-1 h-1 rounded-full bg-border" />}
                  </span>
                ))}
              </motion.div>

              {/* Body */}
              <motion.p variants={fadeUp} className="text-base text-muted-foreground max-w-lg mb-10 leading-relaxed">
                Anvesan researches the infrastructure, regulation, and market structure shaping the global
                adoption of stablecoins across payments, banking, and enterprise finance.
              </motion.p>

              {/* CTAs */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-3">
                <Button
                  size="lg"
                  className="h-11 px-6 rounded-xl font-medium text-sm group gap-2"
                  onClick={() => scrollTo("contact")}
                >
                  Get in touch
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-11 px-6 rounded-xl font-medium text-sm border-border hover:bg-foreground/5"
                  onClick={() => scrollTo("featured-research")}
                >
                  View research
                </Button>
              </motion.div>

              {/* Founded note */}
              <motion.div variants={fadeUp} className="mt-12 pt-8 border-t border-border">
                <p className="text-xs text-muted-foreground/60 tracking-widest uppercase font-medium">
                  Founded 2026 · anvesan.org
                </p>
              </motion.div>
            </motion.div>

            {/* Right column — preview card */}
            <div className="hidden lg:block">
              <HeroPreviewCard />
            </div>
          </div>
        </div>
      </section>

      {/* ── Marquee ticker ────────────────────────────────────── */}
      <Marquee />

      {/* ══════════════════════════════════════════════════════════
          MISSION
      ══════════════════════════════════════════════════════════ */}
      <section id="mission" className="relative py-32 md:py-44 bg-foreground text-background overflow-hidden">
        {/* Noise texture */}
        <div aria-hidden className="absolute inset-0 noise" />

        {/* Large decorative quotation mark */}
        <div
          aria-hidden
          className="absolute top-8 right-12 font-serif text-[18rem] leading-none text-background/[0.03] select-none pointer-events-none font-bold"
          style={{ lineHeight: 1 }}
        >
          "
        </div>

        {/* Subtle top-left gradient blob */}
        <div
          aria-hidden
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,255,255,0.025) 0%, transparent 70%)" }}
        />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {/* Top label row */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-16">
              <div className="h-px w-8 bg-background/25" />
              <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-background/35">
                Mission
              </span>
            </motion.div>

            {/* Main quote — left-bordered, prominent */}
            <motion.div variants={fadeUp} className="pl-6 border-l-[2px] border-background/20 mb-16 max-w-3xl">
              <blockquote className="text-[1.65rem] md:text-[2.1rem] lg:text-[2.4rem] font-serif leading-[1.32] text-background tracking-[-0.01em]">
                Anvesan exists to accelerate global stablecoin adoption, driving the market until programmable assets become indistinguishable from traditional fiat —{" "}
                <em className="italic" style={{ color: "hsl(var(--background) / 0.4)" }}>
                  ubiquitous, natively interoperable, and structurally invisible.
                </em>
              </blockquote>
            </motion.div>

            {/* Divider */}
            <motion.div variants={fadeUp} className="h-px bg-background/8 mb-14 max-w-3xl" />

            {/* Two body columns with numbered labels */}
            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-3xl">
              <motion.div variants={fadeUp}>
                <p className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-background/25 mb-3">01</p>
                <p className="text-sm font-light text-background/55 leading-[1.8]">
                  We are advancing a modernized financial architecture where cross-border remittances, B2B trade settlements, and foreign exchange clear instantaneously, eliminating legacy intermediaries.
                </p>
              </motion.div>
              <motion.div variants={fadeUp}>
                <p className="text-[0.6rem] font-bold tracking-[0.25em] uppercase text-background/25 mb-3">02</p>
                <p className="text-sm font-light text-background/55 leading-[1.8]">
                  Anvesan partners with fintech operators, neobanks, and enterprises scaling on stablecoin rails—equipping them with rigorous regulatory frameworks, proprietary market intelligence, and strategic operator networks.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          RESEARCH FOCUS — BENTO GRID
      ══════════════════════════════════════════════════════════ */}
      <section id="research-focus" className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-foreground/20" />
                  <span className="text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-muted-foreground">
                    Research Focus
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif">
                  What Anvesan studies
                </motion.h2>
              </div>
              <motion.p variants={fadeUp} className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                Focused research for fintech operators, enterprises, and policymakers building on stablecoin rails.
              </motion.p>
            </div>

            {/* Bento grid */}
            <motion.div
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-4"
            >
              {/* Large card — Technical */}
              <motion.div variants={fadeUp} className="md:col-span-2">
                <div className="lift h-full rounded-2xl border border-border bg-card p-10 flex flex-col justify-between min-h-[300px] relative overflow-hidden group">
                  {/* Large decorative number */}
                  <span
                    aria-hidden
                    className="absolute right-8 bottom-4 font-serif text-[9rem] font-bold leading-none text-foreground/[0.04] select-none pointer-events-none"
                  >
                    01
                  </span>
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-foreground/6 border border-border flex items-center justify-center mb-8 text-foreground/50 group-hover:bg-foreground/10 group-hover:text-foreground transition-colors">
                      <Globe className="w-5 h-5" />
                    </div>
                    <h3 className="text-3xl font-serif mb-4">Technical</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-sm">
                      Payments infrastructure, settlement architecture, wallet design, interoperability, and
                      the systems that make stablecoins usable at scale.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Small stack right */}
              <motion.div variants={stagger} className="flex flex-col gap-4">
                {[
                  {
                    n: "02", title: "Regulatory", icon: <Shield className="w-4 h-4" />,
                    desc: "Licensing, compliance design, legal frameworks, and jurisdictional specifics across markets.",
                  },
                  {
                    n: "03", title: "Policy", icon: <Landmark className="w-4 h-4" />,
                    desc: "How governments and institutions shape the role of stablecoins in the future of money.",
                  },
                ].map((item) => (
                  <motion.div variants={fadeUp} key={item.n}>
                    <div className="lift h-full rounded-2xl border border-border bg-card p-7 flex flex-col gap-5 relative overflow-hidden group">
                      <span
                        aria-hidden
                        className="absolute right-5 bottom-2 font-serif text-[5rem] font-bold leading-none text-foreground/[0.04] select-none pointer-events-none"
                      >
                        {item.n}
                      </span>
                      <div className="w-9 h-9 rounded-xl bg-foreground/6 border border-border flex items-center justify-center text-foreground/50 group-hover:bg-foreground/10 group-hover:text-foreground transition-colors">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                        <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          FEATURED RESEARCH — EDITORIAL
      ══════════════════════════════════════════════════════════ */}
      <section id="featured-research" className="py-28 md:py-36 border-t border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {/* Header row */}
            <div className="flex items-end justify-between mb-12">
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-foreground/20" />
                  <span className="text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-muted-foreground">
                    Research
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif">
                  Featured research
                </motion.h2>
              </div>
              <motion.div variants={fadeUp}>
                <Link
                  href="/research"
                  className="hidden md:inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  All research
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>

            {/* Feature card — spans full width on mobile, 2/3 left on lg */}
            <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-4">

              {/* Primary feature */}
              <motion.div variants={fadeUp} className="lg:col-span-2">
                <Link href="/research/state-of-agentic-payments-march-2026" className="block group h-full">
                  <div className="lift h-full rounded-2xl bg-foreground text-background overflow-hidden relative flex flex-col min-h-[380px]">
                    {/* Noise */}
                    <div aria-hidden className="absolute inset-0 noise z-0" />
                    {/* Decorative rings */}
                    <div aria-hidden className="absolute -top-16 -right-16 w-64 h-64 rounded-full border border-background/8 pointer-events-none" />
                    <div aria-hidden className="absolute -top-8 -right-8 w-40 h-40 rounded-full border border-background/8 pointer-events-none" />

                    {/* Top bar */}
                    <div className="relative z-10 flex items-center justify-between px-8 pt-8 mb-auto">
                      <div className="flex items-center gap-2">
                        <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase text-background/50">
                          State of the Market
                        </span>
                        <span className="text-background/30">·</span>
                        <span className="text-[0.62rem] text-background/40">March 2026</span>
                      </div>
                      <div className="w-8 h-8 rounded-lg border border-background/15 flex items-center justify-center group-hover:bg-background/10 transition-colors">
                        <ArrowUpRight className="w-4 h-4 text-background/50 group-hover:text-background transition-colors" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 px-8 pb-8 mt-12">
                      <h3 className="font-serif text-3xl md:text-4xl leading-tight mb-4 text-background">
                        The State of Agentic Payments
                      </h3>
                      <p className="text-sm text-background/60 leading-relaxed mb-8 max-w-md">
                        What is live, who is leading, what the numbers say, and how the market is
                        splitting between card-led agentic checkout and internet-native machine payments.
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {["AI", "Payments", "Fintech", "Agentic", "Web3"].map((t) => (
                          <span key={t} className="text-[0.58rem] font-medium uppercase tracking-widest px-2 py-0.5 rounded-full border border-background/20 text-background/50">
                            {t}
                          </span>
                        ))}
                      </div>
                      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-background group-hover:gap-3 transition-all">
                        Read overview <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Coming soon stack */}
              <motion.div variants={stagger} className="flex flex-col gap-4">
                {[
                  {
                    tag: "Regulatory", date: "Apr 2026",
                    title: "Stablecoins, Regulation & Market Structure",
                    desc: "Licensing, compliance, and jurisdictional fragmentation shaping adoption.",
                  },
                  {
                    tag: "Policy", date: "Apr 2026",
                    title: "Enterprise Rails for Cross-Border Settlement",
                    desc: "Why enterprises are moving to stablecoin-native rails for treasury and trade.",
                  },
                ].map((item, i) => (
                  <motion.div variants={fadeUp} key={i} className="flex-1">
                    <div className="h-full rounded-2xl border border-border/70 bg-background/60 p-7 flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-[0.58rem] px-2 py-0.5 rounded-full font-medium border-border/70 text-muted-foreground uppercase tracking-wider">
                            {item.tag}
                          </Badge>
                          <span className="text-[0.6rem] text-muted-foreground/60">{item.date}</span>
                        </div>
                        <span className="text-[0.58rem] font-semibold tracking-[0.15em] uppercase text-muted-foreground/50 border border-border/50 rounded-full px-2.5 py-1">
                          Soon
                        </span>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-serif text-lg leading-snug mb-2 text-foreground/55">{item.title}</h3>
                        <p className="text-xs text-muted-foreground/60 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          WHAT WE OFFER — NUMBERED EDITORIAL ROWS
      ══════════════════════════════════════════════════════════ */}
      <section id="what-we-offer" className="py-28 md:py-36 bg-background border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-foreground/20" />
                  <span className="text-[0.62rem] font-semibold tracking-[0.24em] uppercase text-muted-foreground">
                    What we offer
                  </span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif leading-tight">
                  Research, insight,<br />and strategic access
                </motion.h2>
              </div>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed self-end">
                Anvesan helps fintechs, neobanks, and enterprises understand stablecoin infrastructure,
                navigate regulation, and make better strategic decisions through focused research, market
                intelligence, and access to experienced operators.
              </motion.p>
            </div>

            {/* Numbered rows */}
            <motion.div variants={stagger} className="divide-y divide-border border-t border-border">
              {[
                {
                  n: "01",
                  title: "Research",
                  desc: "Focused papers on infrastructure, regulation, and policy — written for practitioners and decision-makers who need signal, not noise.",
                },
                {
                  n: "02",
                  title: "Market Intelligence",
                  desc: "Timely analysis of market structure, competitive dynamics, and adoption trends across the global stablecoin landscape.",
                },
                {
                  n: "03",
                  title: "Strategic Access",
                  desc: "Direct access to a network of experienced operators and industry veterans across fintech, banking, and crypto infrastructure.",
                },
              ].map((item) => (
                <motion.div
                  variants={fadeUp}
                  key={item.n}
                  className="group grid grid-cols-[3rem_1fr] md:grid-cols-[5rem_1fr_1fr] gap-6 items-start py-8 hover:bg-foreground/[0.02] -mx-6 px-6 transition-colors cursor-default"
                >
                  <span className="font-serif text-sm text-muted-foreground/40 font-medium pt-0.5">{item.n}</span>
                  <h4 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-muted-foreground transition-colors">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed hidden md:block">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════
          CONTACT — ULTRA MINIMAL
      ══════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-32 md:py-44 bg-foreground text-background overflow-hidden">
        {/* Noise */}
        <div aria-hidden className="absolute inset-0 noise" />

        {/* Bottom-right gradient glow */}
        <div
          aria-hidden
          className="absolute bottom-0 right-0 w-[600px] h-[400px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at bottom right, rgba(255,255,255,0.03) 0%, transparent 70%)" }}
        />

        {/* Decorative "Anvesan" — constrained so it fits */}
        <div
          aria-hidden
          className="absolute bottom-0 right-0 font-serif font-bold leading-none text-background/[0.04] select-none pointer-events-none overflow-hidden"
          style={{ fontSize: "clamp(5rem, 12vw, 11rem)", lineHeight: 1, paddingRight: "2rem", paddingBottom: "1rem" }}
        >
          Anvesan
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            {/* Label */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-14">
              <div className="h-px w-8 bg-background/25" />
              <span className="text-[0.6rem] font-bold tracking-[0.3em] uppercase text-background/35">
                Contact
              </span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-16 lg:gap-24 items-start">

              {/* Left — headline + email CTA */}
              <div className="space-y-10">
                <motion.h2
                  variants={fadeUp}
                  className="font-serif font-medium leading-[1.08] text-background"
                  style={{ fontSize: "clamp(3.2rem, 6vw, 5.5rem)" }}
                >
                  Let's talk.
                </motion.h2>

                <motion.div variants={fadeUp} className="h-px bg-background/10" />

                {/* Email as a prominent button-link */}
                <motion.a
                  variants={fadeUp}
                  href="mailto:research@anvesan.org"
                  className="group flex items-center justify-between max-w-lg border border-background/15 rounded-2xl px-6 py-5 hover:bg-background/5 hover:border-background/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-background/8 border border-background/15 flex items-center justify-center flex-shrink-0 group-hover:bg-background/15 transition-colors">
                      <Mail className="w-4 h-4 text-background/60" />
                    </div>
                    <div>
                      <p className="text-[0.6rem] font-bold tracking-[0.2em] uppercase text-background/30 mb-0.5">Email us</p>
                      <p className="font-serif text-lg text-background">research@anvesan.org</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-background/30 group-hover:text-background/60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </motion.a>
              </div>

              {/* Right — use cases as styled list */}
              <motion.div variants={stagger} className="space-y-0 border border-background/10 rounded-2xl overflow-hidden">
                {[
                  { n: "01", label: "Strategic Advisory", sub: "For institutional research partnerships and bespoke consulting engagements." },
                  { n: "02", label: "Media Relations", sub: "For executive interviews, industry commentary, and press coverage." },
                  { n: "03", label: "General Inquiries", sub: "For operational correspondence and general communications." },
                ].map((item, i) => (
                  <motion.div
                    variants={fadeUp}
                    key={item.n}
                    className={`flex items-start gap-5 px-6 py-5 ${i < 2 ? "border-b border-background/8" : ""}`}
                  >
                    <span className="text-[0.55rem] font-bold tracking-[0.2em] text-background/20 mt-1 w-5 flex-shrink-0">{item.n}</span>
                    <div>
                      <p className="text-sm font-medium text-background/70 leading-none mb-1">{item.label}</p>
                      <p className="text-xs text-background/35 leading-relaxed">{item.sub}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
