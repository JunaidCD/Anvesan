import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Landmark, Shield, FileText, Lightbulb, BookOpen, ArrowUpRight, Mail } from "lucide-react";
import { Link } from "wouter";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.13 } },
};

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export default function Home() {
  return (
    <Layout>
      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section id="hero" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Mesh gradient */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 10%, hsl(222 44% 10% / 0.06) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 20% 80%, hsl(215 14% 48% / 0.06) 0%, transparent 60%)",
          }}
        />
        {/* Grid lines */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 pt-36 pb-24">
          <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-5xl">
            {/* Eyebrow */}
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-background text-[0.7rem] font-semibold tracking-[0.2em] uppercase text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Stablecoin Research & Strategic Advisory
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeUp}
              className="font-serif font-medium leading-[1.08] tracking-tight text-5xl md:text-7xl lg:text-[5.5rem] mb-8 text-foreground"
            >
              Bringing Clarity<br />
              to <em className="not-italic text-gradient">Stablecoins.</em>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              variants={fadeUp}
              className="text-xl md:text-2xl font-serif italic text-muted-foreground mb-6 max-w-2xl"
            >
              Technical. Regulatory. Policy.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-base md:text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed"
            >
              Anvesan researches the infrastructure, regulation, and market structure shaping
              the global adoption of stablecoins across payments, banking, and enterprise finance.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-start gap-3">
              <Button
                size="lg"
                className="h-12 px-7 rounded-xl font-medium text-base group gap-2"
                onClick={() => scrollTo("contact")}
              >
                Get in touch
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 rounded-xl font-medium text-base border-border hover:bg-foreground/5"
                onClick={() => scrollTo("featured-research")}
              >
                View research
              </Button>
            </motion.div>
          </motion.div>

          {/* Stats strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-24 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "3", label: "Research Focus Areas" },
              { value: "$180T+", label: "Cross-border flows studied" },
              { value: "100+", label: "Jurisdictions tracked" },
              { value: "2026", label: "Founded" },
            ].map((s) => (
              <div key={s.label}>
                <p className="font-serif text-3xl md:text-4xl font-medium tracking-tight mb-1 text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── MISSION ───────────────────────────────────────────────── */}
      <section id="mission" className="relative py-28 md:py-36 bg-foreground text-background overflow-hidden">
        {/* Subtle noise overlay */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            <motion.div variants={fadeUp} className="lg:col-span-3 pt-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="h-px w-6 bg-background/40" />
                <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-background/50">
                  Mission
                </span>
              </div>
            </motion.div>

            <div className="lg:col-span-9 space-y-8">
              <motion.p
                variants={fadeUp}
                className="text-2xl md:text-3xl lg:text-4xl font-serif leading-[1.35] text-background"
              >
                Anvesan exists to accelerate stablecoin adoption to the point where stablecoins become
                indistinguishable from money:{" "}
                <span className="italic text-background/55">
                  ubiquitous, interoperable, and invisible in everyday use.
                </span>
              </motion.p>

              <motion.div variants={fadeUp} className="h-px bg-background/10 w-full" />

              <motion.p
                variants={fadeUp}
                className="text-base md:text-lg font-light text-background/70 leading-relaxed max-w-2xl"
              >
                We believe the future of finance is one where remittance, trade settlement, and FX happen
                instantly, seamlessly, and across borders with minimal friction. Anvesan works closely with
                fintechs, neobanks, and enterprises building on stablecoin rails—offering regulatory clarity,
                market intelligence, and access to a network of industry veterans.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── RESEARCH FOCUS ────────────────────────────────────────── */}
      <section id="research-focus" className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
              <div className="h-px w-6 bg-foreground/20" />
              <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                Research Focus
              </span>
            </motion.div>
            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-4 max-w-xl">
              What Anvesan studies
            </motion.h2>
            <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mb-16 leading-relaxed">
              Each paper is designed for fintech operators, enterprises, policymakers, and market participants
              building on stablecoin rails.
            </motion.p>

            <motion.div variants={stagger} className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                {
                  title: "Technical",
                  icon: <Globe className="w-5 h-5" />,
                  desc: "Payments infrastructure, settlement architecture, wallet design, interoperability, and the systems that make stablecoins usable at scale.",
                  accent: "from-blue-500/8 to-transparent",
                },
                {
                  title: "Regulatory",
                  icon: <Shield className="w-5 h-5" />,
                  desc: "Licensing, compliance design, legal frameworks, and the operational specifics of building with stablecoin rails across jurisdictions.",
                  accent: "from-violet-500/8 to-transparent",
                },
                {
                  title: "Policy",
                  icon: <Landmark className="w-5 h-5" />,
                  desc: "How governments, financial institutions, and market participants shape the role of stablecoins in the future of money and cross-border finance.",
                  accent: "from-emerald-500/8 to-transparent",
                },
              ].map((item, i) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className={`card-hover group relative rounded-2xl border border-border bg-gradient-to-br ${item.accent} bg-card p-8 overflow-hidden`}
                >
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-6 text-foreground/60 group-hover:text-foreground group-hover:bg-foreground/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-serif mb-3 text-foreground">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED RESEARCH ─────────────────────────────────────── */}
      <section id="featured-research" className="py-28 md:py-36 bg-muted/40 border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                  <div className="h-px w-6 bg-foreground/20" />
                  <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
                >
                  View all <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </motion.div>
            </div>

            <motion.div variants={stagger} className="grid grid-cols-1 lg:grid-cols-3 gap-5">
              {/* Live article card */}
              <motion.div variants={fadeUp} className="lg:col-span-1">
                <Link href="/research/state-of-agentic-payments-march-2026" className="block h-full group">
                  <div className="card-hover h-full rounded-2xl border border-border bg-card p-8 flex flex-col gap-6 hover:border-foreground/20 transition-colors relative overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute top-0 right-0 w-48 h-48 rounded-full bg-primary/4 blur-3xl pointer-events-none"
                    />
                    <div className="flex items-center gap-2">
                      <Badge className="rounded-full text-[0.65rem] px-2.5 py-0.5 font-medium bg-foreground text-background">
                        State of the Market
                      </Badge>
                      <span className="text-xs text-muted-foreground">March 2026</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif leading-tight mb-3 group-hover:text-muted-foreground transition-colors">
                        The State of Agentic Payments
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        What is live, who is leading, what the numbers say, and how the market is splitting between
                        card-led agentic checkout and internet-native machine payments.
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm font-medium text-foreground group-hover:gap-3 transition-all">
                      Read overview <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Coming soon cards */}
              {[
                {
                  tag: "Regulatory",
                  date: "April 2026",
                  title: "Stablecoins, Regulation & Market Structure",
                  desc: "How licensing, compliance, and jurisdictional fragmentation are shaping stablecoin adoption across markets.",
                },
                {
                  tag: "Policy",
                  date: "April 2026",
                  title: "Enterprise Rails for Cross-Border Settlement",
                  desc: "Why fintechs, neobanks, and enterprises are evaluating stablecoin-native rails for remittance, treasury movement, and trade settlement.",
                },
              ].map((item, i) => (
                <motion.div variants={fadeUp} key={i}>
                  <div className="h-full rounded-2xl border border-border/60 bg-muted/50 p-8 flex flex-col gap-6 relative overflow-hidden">
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="rounded-full text-[0.65rem] px-2.5 py-0.5 font-medium border-border text-muted-foreground">
                          {item.tag}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{item.date}</span>
                      </div>
                      <span className="text-[0.65rem] font-medium tracking-widest uppercase text-muted-foreground/60 bg-background/60 border border-border/50 rounded-full px-2.5 py-1">
                        Soon
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-serif leading-tight mb-3 text-foreground/60">{item.title}</h3>
                      <p className="text-sm text-muted-foreground/70 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT WE OFFER ─────────────────────────────────────────── */}
      <section id="what-we-offer" className="py-28 md:py-36 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center"
          >
            <div>
              <motion.div variants={fadeUp} className="flex items-center gap-3 mb-5">
                <div className="h-px w-6 bg-foreground/20" />
                <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-muted-foreground">
                  What we offer
                </span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-serif mb-6 leading-tight">
                Research, insight,<br />and strategic access
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed text-lg">
                Anvesan helps fintechs, neobanks, and enterprises understand stablecoin infrastructure,
                navigate regulation, and make better strategic decisions through focused research, market
                intelligence, and access to experienced operators.
              </motion.p>
            </div>

            <motion.div variants={stagger} className="space-y-4">
              {[
                {
                  title: "Research",
                  desc: "Focused papers on infrastructure, regulation, and policy",
                  icon: <FileText className="w-5 h-5" />,
                },
                {
                  title: "Market Intelligence",
                  desc: "Timely analysis of market structure and adoption trends",
                  icon: <Lightbulb className="w-5 h-5" />,
                },
                {
                  title: "Strategic Access",
                  desc: "Network of experienced operators and industry veterans",
                  icon: <BookOpen className="w-5 h-5" />,
                },
              ].map((item, i) => (
                <motion.div
                  variants={fadeUp}
                  key={i}
                  className="group flex gap-5 p-6 rounded-2xl border border-border bg-card hover:border-foreground/20 hover:shadow-md transition-all duration-200 card-hover"
                >
                  <div className="mt-0.5 w-10 h-10 rounded-xl bg-foreground/5 border border-border flex items-center justify-center text-foreground/50 group-hover:bg-foreground/10 group-hover:text-foreground flex-shrink-0 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-serif text-xl font-medium mb-1.5 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────── */}
      <section id="contact" className="py-28 md:py-36 bg-foreground text-background relative overflow-hidden">
        {/* Noise */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            backgroundSize: "200px 200px",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div variants={fadeUp} className="flex justify-center items-center gap-3 mb-8">
              <div className="h-px w-6 bg-background/30" />
              <span className="text-[0.65rem] font-semibold tracking-[0.22em] uppercase text-background/50">
                Contact
              </span>
              <div className="h-px w-6 bg-background/30" />
            </motion.div>

            <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-serif mb-6 text-background leading-tight">
              Let's talk.
            </motion.h2>

            <motion.p variants={fadeUp} className="text-base md:text-lg text-background/60 mb-12 leading-relaxed">
              For research partnerships, strategic advisory, or media inquiries — reach us directly.
            </motion.p>

            <motion.a
              variants={fadeUp}
              href="mailto:research@anvesan.org"
              className="group inline-flex items-center gap-3 text-xl md:text-2xl font-serif text-background hover:text-background/70 transition-colors border-b border-background/25 pb-1.5 hover:border-background/50"
            >
              <Mail className="w-5 h-5 opacity-60 group-hover:opacity-100 transition-opacity" />
              research@anvesan.org
            </motion.a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
