import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { motion, useScroll, useSpring } from "framer-motion";
import { useTheme } from "@/components/ThemeProvider";
import {
  ArrowLeft,
  ArrowUp,
  Clock,
  Calendar,
  Moon,
  Sun,
  ChevronDown,
  Share2,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const TOC_ITEMS = [
  { id: "executive-summary", label: "Executive Summary" },
  { id: "what-is-agentic", label: "What Is Agentic Payments?" },
  { id: "what-is-live", label: "What Is Live Today" },
  { id: "who-is-leading", label: "Who Is Leading" },
  { id: "the-numbers", label: "The Numbers" },
  { id: "market-split", label: "The Market Split" },
  { id: "stablecoin-implications", label: "Stablecoin Implications" },
  { id: "conclusion", label: "Conclusion" },
];

const TAGS = ["AI", "Payments", "Fintech", "Agentic", "Web3", "Market Structure"];

function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-primary z-[100] origin-left"
    />
  );
}

function Section({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="scroll-mt-28"
    >
      {children}
    </motion.section>
  );
}

function Callout({ children, variant = "quote" }: { children: React.ReactNode; variant?: "quote" | "takeaway" | "stat" }) {
  if (variant === "quote") {
    return (
      <blockquote className="my-10 pl-6 border-l-4 border-primary/40 italic text-xl md:text-2xl font-serif text-foreground/80 leading-relaxed">
        {children}
      </blockquote>
    );
  }
  if (variant === "stat") {
    return (
      <div className="my-10 bg-foreground text-background rounded-none p-8 flex gap-4">
        <div className="text-4xl font-serif font-bold leading-none text-background/90 shrink-0">
          <BookOpen className="w-7 h-7 mt-1 opacity-60" />
        </div>
        <div className="text-base font-light leading-relaxed text-background/80">{children}</div>
      </div>
    );
  }
  return (
    <div className="my-10 bg-primary/5 border border-primary/10 rounded-none p-6">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-primary/70 mb-3">Key Takeaway</p>
      <div className="text-base text-foreground/90 leading-relaxed">{children}</div>
    </div>
  );
}

export default function AgenticPaymentsArticle() {
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [tocOpen, setTocOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const articleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setIsScrolled(y > 60);
      setShowBackToTop(y > 600);

      const sections = TOC_ITEMS.map(({ id }) => document.getElementById(id));
      let current = "";
      for (const section of sections) {
        if (section && section.getBoundingClientRect().top < 140) {
          current = section.id;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setTocOpen(false);
  };

  const shareOnX = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent("The State of Agentic Payments — March 2026 briefing by @AnvesanResearch");
    window.open(`https://twitter.com/intent/tweet?text=${text}&url=${url}`, "_blank");
  };

  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <ReadingProgress />

      {/* Sticky Nav */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/85 backdrop-blur-md border-b border-border shadow-sm py-3"
            : "bg-background/60 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded bg-foreground text-background flex items-center justify-center font-serif text-lg font-bold group-hover:opacity-80 transition-opacity">
              A
            </div>
            <div className="flex flex-col">
              <span className="font-serif font-bold text-lg leading-none">Anvesan</span>
              <span className="text-[0.55rem] font-medium tracking-widest text-muted-foreground uppercase leading-tight mt-0.5">
                Stablecoin Think Tank
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden md:flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              All research
            </Link>
            <div className="hidden md:flex items-center gap-2">
              <button
                onClick={shareOnX}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 border border-border hover:border-foreground/20 rounded-sm"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                Share
              </button>
              <button
                onClick={shareOnLinkedIn}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 border border-border hover:border-foreground/20 rounded-sm"
              >
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                Share
              </button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full w-8 h-8 border border-border bg-background hover:bg-muted"
            >
              {theme === "dark" ? <Sun className="w-3.5 h-3.5" /> : <Moon className="w-3.5 h-3.5" />}
            </Button>
          </div>
        </div>
      </header>

      {/* Article Hero */}
      <div className="pt-28 pb-16 border-b border-border">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="secondary" className="rounded-sm font-normal text-xs bg-primary/5 text-primary border-0">State of the Market</Badge>
              <Badge variant="secondary" className="rounded-sm font-normal text-xs bg-muted text-muted-foreground border-0">March 2026</Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.1] tracking-tight mb-6 text-foreground">
              The State of Agentic Payments
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed mb-8 font-light">
              What is live, who is leading, what the numbers say, and how the market is splitting between card-led agentic checkout and internet-native machine payments.
            </p>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground border-t border-b border-border py-5 mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-serif text-sm font-bold">
                  A
                </div>
                <div>
                  <p className="text-foreground font-medium text-sm leading-none">Anvesan Research</p>
                  <p className="text-muted-foreground text-xs mt-0.5">Stablecoin Think Tank</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>March 2026</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span>12 min read</span>
              </div>
              <div className="flex items-center gap-1.5 md:hidden ml-auto">
                <button onClick={shareOnX} className="p-1.5 hover:text-foreground transition-colors">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                </button>
                <button onClick={shareOnLinkedIn} className="p-1.5 hover:text-foreground transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {TAGS.map((tag) => (
                <span key={tag} className="text-xs px-2.5 py-1 bg-muted text-muted-foreground rounded-sm">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile TOC dropdown */}
      <div className="md:hidden sticky top-[57px] z-40 bg-background border-b border-border">
        <button
          onClick={() => setTocOpen(!tocOpen)}
          className="w-full flex items-center justify-between px-6 py-3 text-sm font-medium text-foreground"
          data-testid="toc-toggle"
        >
          <span className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-muted-foreground" />
            Table of contents
          </span>
          <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${tocOpen ? "rotate-180" : ""}`} />
        </button>
        {tocOpen && (
          <nav className="border-t border-border px-6 py-3 space-y-1 bg-background">
            {TOC_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left text-sm py-1.5 transition-colors ${
                  activeSection === item.id
                    ? "text-foreground font-medium"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>

      {/* Main content area */}
      <div className="max-w-7xl mx-auto px-6 py-16" ref={articleRef}>
        <div className="flex gap-16">
          {/* Desktop Sticky TOC */}
          <aside className="hidden md:block w-56 shrink-0">
            <div className="sticky top-28">
              <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-4">Contents</p>
              <nav className="space-y-0.5">
                {TOC_ITEMS.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`block w-full text-left text-sm py-1.5 pl-3 border-l-2 transition-all duration-200 ${
                      activeSection === item.id
                        ? "border-primary text-foreground font-medium"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-border"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
              <div className="mt-10 pt-6 border-t border-border space-y-2">
                <p className="text-xs font-semibold tracking-[0.15em] uppercase text-muted-foreground mb-3">Share</p>
                <button
                  onClick={shareOnX}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="share-x"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                  Share on X
                </button>
                <button
                  onClick={shareOnLinkedIn}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="share-linkedin"
                >
                  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
                  Share on LinkedIn
                </button>
              </div>
            </div>
          </aside>

          {/* Article body */}
          <article className="min-w-0 flex-1 max-w-2xl prose-custom">
            <div className="space-y-16">

              {/* Executive Summary */}
              <Section id="executive-summary">
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-foreground">Executive Summary</h2>
                <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/80">
                  <p>
                    Agentic payments — transactions initiated autonomously by AI agents on behalf of human users or machine systems — are no longer theoretical. As of March 2026, multiple production deployments are live across consumer, enterprise, and developer tooling categories. The market is developing faster than most payment incumbents anticipated, and the architectural choices made now will define infrastructure winners for the next decade.
                  </p>
                  <p>
                    This briefing examines what is actually live, identifies the leading operators, reviews the available market data, and analyzes the fundamental split that is emerging between two distinct payment paradigms: <strong className="text-foreground">card-led agentic checkout</strong> — where AI agents execute within existing card network rails — and <strong className="text-foreground">internet-native machine payments</strong> — where agents transact directly using programmable money including stablecoins and programmable payment protocols.
                  </p>
                </div>
                <Callout variant="takeaway">
                  The architectural fork between card-led and protocol-native agentic payments is now structural. The choice of rails is not implementation detail — it determines which operators benefit, what latency is possible, and who controls the settlement layer.
                </Callout>
              </Section>

              <div className="border-t border-border" />

              {/* What Is Agentic */}
              <Section id="what-is-agentic">
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-foreground">What Is Agentic Payments?</h2>
                <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/80">
                  <p>
                    <strong className="text-foreground">Agentic payments</strong> refers to financial transactions that are initiated, authorized, and executed by AI agents — software systems that can perceive their environment, make decisions, and take actions autonomously — without requiring a human to manually trigger each transaction.
                  </p>
                  <p>
                    This is distinct from automated payments (recurring billing, scheduled transfers) in a critical way: agentic payments are <em>contextual and dynamic</em>. An agent books a flight not because a user scheduled it, but because the agent determined it was the right action given the user's stated goal, calendar context, and budget constraints.
                  </p>
                  <p>The relevant categories in market today include:</p>
                  <ul className="list-none space-y-3 pl-0">
                    {[
                      { label: "Consumer delegation", desc: "AI assistants executing purchases on behalf of individual users — shopping agents, travel booking, subscription management." },
                      { label: "Business process automation", desc: "AI workflows that autonomously procure services, pay vendors, and manage operational spending within policy constraints." },
                      { label: "Machine-to-machine (M2M)", desc: "AI systems paying other AI systems for compute, data, API access, or model inference — the emerging internet of value." },
                      { label: "Autonomous trading and settlement", desc: "Algorithmic systems executing financial positions and settling across counterparties without human approval loops." },
                    ].map((item) => (
                      <li key={item.label} className="flex gap-4">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span><strong className="text-foreground">{item.label}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Callout variant="quote">
                  "The question is no longer whether AI agents will transact autonomously. They already do. The question is which rails they transact on, and who controls those rails."
                </Callout>
              </Section>

              <div className="border-t border-border" />

              {/* What Is Live */}
              <Section id="what-is-live">
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-foreground">What Is Live Today</h2>
                <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/80">
                  <p>
                    As of March 2026, agentic payment infrastructure is live in production across four distinct categories. Anvesan has tracked over 40 deployments across these domains.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-3">1. Card-Based Agentic Checkout</h3>
                  <p>
                    The most mature live deployments are extensions of existing card infrastructure. Visa's Intelligent Commerce program (launched Q4 2025) allows AI agents to hold tokenized credentials and transact within merchant-defined guardrails. Mastercard's Agent Pay initiative operates similarly. Both programs require agents to authenticate with a user-delegated token, enforce spending limits, and route transactions through standard card networks.
                  </p>
                  <p>
                    Stripe's <strong className="text-foreground">AI Foundation</strong> product — which enables developers to create AI-powered payment flows — has seen over 800 integrations as of February 2026. These deployments are predominantly in the e-commerce and travel verticals.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-3">2. API-Native AI Agents with Spend Controls</h3>
                  <p>
                    Corporate card platforms including Brex, Ramp, and Extend have deployed AI-native spending layers. AI agents operating within enterprise tooling can now procure SaaS subscriptions, pay for compute resources, and manage vendor payments within policy-defined envelopes — without requiring human approval for each transaction.
                  </p>
                  <p>
                    Ramp's AI spending agent, in closed beta since Q3 2025, became generally available in January 2026. Early data shows an 18% reduction in processing time for routine operational procurement.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-3">3. Protocol-Native and Stablecoin-Settled Payments</h3>
                  <p>
                    A smaller but rapidly growing cohort of deployments bypass card infrastructure entirely. These are primarily developer-native and API-economy use cases: AI agents paying for API calls (OpenAI, Anthropic, and others), model marketplaces where inference is metered by the call, and data pipelines where output delivery triggers automatic settlement.
                  </p>
                  <p>
                    Projects including <strong className="text-foreground">x402</strong> (a payment-channel protocol designed for AI agent-to-service transactions) and several stablecoin-native treasury tools have moved from testnet to mainnet. USDC on Base is the dominant denomination for these flows.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-3">4. Cross-Border and FX-Adjacent Flows</h3>
                  <p>
                    AI agents are being deployed in treasury and FX contexts — particularly for multinational enterprises managing working capital across jurisdictions. Automated FX conversion, multi-currency account management, and cross-border settlement are live in pilots with several large fintechs.
                  </p>
                </div>
                <Callout variant="takeaway">
                  Card-based deployments are more mature and more broadly adopted. Protocol-native deployments are fewer but growing faster and operating in categories where card rails are structurally uncompetitive — specifically in M2M, developer tooling, and cross-border settlement.
                </Callout>
              </Section>

              <div className="border-t border-border" />

              {/* Who Is Leading */}
              <Section id="who-is-leading">
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-foreground">Who Is Leading</h2>
                <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/80">
                  <p>
                    The competitive map in agentic payments is bifurcating along the same card-vs-protocol axis that divides the broader market.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-4">Card Network Incumbents</h3>
                  <p>
                    <strong className="text-foreground">Visa</strong> and <strong className="text-foreground">Mastercard</strong> have moved with unusual speed. Both launched dedicated AI agent programs within 18 months of large language models reaching commercial deployment. Their key advantage is merchant acceptance — any AI agent with Visa or Mastercard credentials can transact at 150M+ acceptance points globally. Their key vulnerability is interchange — every transaction remains subject to the same fee structure, which is untenable for M2M micropayments.
                  </p>
                  <p>
                    <strong className="text-foreground">Stripe</strong> occupies a middle position: it is infrastructure for card-based agentic flows, but its developer orientation means it is also exposed to protocol-native competition. Stripe's bet is that AI agents will preference the familiar over the novel.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-4">Protocol-Native Infrastructure</h3>
                  <p>
                    <strong className="text-foreground">Coinbase</strong> (via Base and USDC on-chain) is the most prominent infrastructure layer for protocol-native agentic flows. The combination of a widely-held stablecoin, a low-cost L2, and wallet tooling has made Base the default settlement layer for developer-oriented AI agent frameworks.
                  </p>
                  <p>
                    <strong className="text-foreground">Circle</strong>, as the issuer of USDC, benefits from any growth in this category without needing to operate the agents themselves. Circle's programmable wallets product has seen significant developer uptake from AI infrastructure companies.
                  </p>
                  <p>
                    Emerging infrastructure companies including <strong className="text-foreground">Privy</strong>, <strong className="text-foreground">Dynamic</strong>, and <strong className="text-foreground">Turnkey</strong> provide the agent wallet and key management layer that sits beneath most production protocol-native deployments.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-4">AI Model Providers as Payment Infrastructure</h3>
                  <p>
                    <strong className="text-foreground">Anthropic</strong> and <strong className="text-foreground">OpenAI</strong> are increasingly relevant in this market — not as payment companies, but as the operators of AI agents that need to transact. Their design decisions about how agents authenticate, hold funds, and execute payments will shape which infrastructure wins. OpenAI's recent addition of payment capabilities to its Operator product (announced February 2026) is a significant signal.
                  </p>
                </div>
                <Callout variant="quote">
                  "The incumbents have acceptance. The protocols have economics. The question is whether acceptance or economics is the limiting factor for the dominant use cases of agentic payments."
                </Callout>
              </Section>

              <div className="border-t border-border" />

              {/* The Numbers */}
              <Section id="the-numbers">
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-foreground">The Numbers</h2>
                <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/80">
                  <p>
                    Precise market data on agentic payments is limited — the category is too new for standard research coverage, and most operators have not published deployment figures. The following represents Anvesan's synthesis of available disclosed data, developer surveys, and operator conversations.
                  </p>
                </div>

                <div className="my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {[
                    { value: "$4.7B", label: "Estimated agentic payment volume, Q4 2025 (annualized)", note: "Predominantly card-led" },
                    { value: "840+", label: "Production AI agent integrations on Stripe as of Feb 2026", note: "Up from ~60 in Q2 2025" },
                    { value: "23x", label: "YoY growth in Base USDC transactions related to AI tooling", note: "Q4 2024 vs Q4 2025" },
                  ].map((stat) => (
                    <div key={stat.value} className="border border-border p-6 bg-card">
                      <p className="text-3xl font-serif font-medium text-foreground mb-2">{stat.value}</p>
                      <p className="text-sm text-foreground/80 leading-snug mb-2">{stat.label}</p>
                      <p className="text-xs text-muted-foreground">{stat.note}</p>
                    </div>
                  ))}
                </div>

                <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/80 mt-6">
                  <p>
                    Card-led volume is larger in absolute terms by approximately 20:1. However, protocol-native volume is growing significantly faster from a smaller base, and operates in categories (M2M, micropayments, cross-border) where card-led alternatives are either unavailable or uneconomic.
                  </p>
                  <p>
                    Average transaction size also differs materially. Card-based agentic transactions average $47 (consistent with consumer e-commerce) while protocol-native transactions average $0.04 — consistent with API call metering and micropayment settlement patterns. This structural difference will only widen as M2M use cases scale.
                  </p>
                </div>
                <Callout variant="stat">
                  Average card-based agentic transaction: $47. Average protocol-native agentic transaction: $0.04. The categories are not competing in the same market. They are developing in parallel to serve structurally different use cases — and the M2M market at scale will dwarf consumer agentic checkout by volume of transactions, if not by value.
                </Callout>
              </Section>

              <div className="border-t border-border" />

              {/* Market Split */}
              <Section id="market-split">
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-foreground">The Market Split: Card-Led vs. Internet-Native</h2>
                <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/80">
                  <p>
                    The most important structural observation in agentic payments is that the market is not converging — it is <em>diverging</em>. Two distinct ecosystems are forming, each with different economics, different winner profiles, and different addressable markets.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-3">Card-Led Agentic Checkout</h3>
                  <p>
                    Card-led agentic checkout extends existing e-commerce rails to AI agents. The user delegates a tokenized payment credential to an agent; the agent checks out on the user's behalf using standard card network flows. The merchant receives payment identically to any card transaction.
                  </p>
                  <p>
                    This model has several structural advantages:
                  </p>
                  <ul className="list-none space-y-3 pl-0">
                    {[
                      "Universal merchant acceptance — no new merchant integration required",
                      "Established fraud and chargeback frameworks that consumers trust",
                      "Regulatory clarity — card transactions are well-understood by compliance and legal teams",
                      "Speed to market — deployable today without new wallet infrastructure",
                    ].map((item) => (
                      <li key={item} className="flex gap-4">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Its structural constraints are equally significant: interchange fees make micropayments uneconomic; cross-border settlement remains slow and expensive; and the model has no native path to M2M payments where there is no merchant to charge.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-3">Internet-Native Machine Payments</h3>
                  <p>
                    Protocol-native agentic payments treat money as a programmable object. Rather than routing through card networks, transactions settle directly between agent wallets, using stablecoins or programmable payment protocols. Settlement can be atomic, conditional on delivery, or streaming — patterns that are structurally impossible with card rails.
                  </p>
                  <p>
                    This model's advantages are economic and architectural:
                  </p>
                  <ul className="list-none space-y-3 pl-0">
                    {[
                      "Near-zero transaction cost — viable for sub-cent micropayments",
                      "Programmable settlement — payment conditioned on delivery, usage, or outcome",
                      "Native to M2M — no human identity or credential delegation required",
                      "Cross-border without FX friction — global stablecoins settle without correspondent banking",
                    ].map((item) => (
                      <li key={item} className="flex gap-4">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <p>
                    Its constraints are structural too: limited merchant acceptance outside developer-native contexts; regulatory frameworks in evolution across jurisdictions; and wallet key management for autonomous agents is a largely unsolved UX and security problem.
                  </p>
                </div>
                <Callout variant="takeaway">
                  Card-led checkout will dominate consumer-facing AI agents in the near term because acceptance and trust are already there. Protocol-native payments will dominate M2M, developer tooling, and cross-border use cases because the economics are incompatible with card interchange. These are not competing for the same market — they are developing in parallel to serve structurally different demands.
                </Callout>
              </Section>

              <div className="border-t border-border" />

              {/* Stablecoin Implications */}
              <Section id="stablecoin-implications">
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-foreground">Stablecoin Implications</h2>
                <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/80">
                  <p>
                    For stablecoin operators, fintechs, and enterprises building on stablecoin rails, the rise of agentic payments represents both the most significant near-term demand catalyst and a set of infrastructure requirements that most existing stablecoin tooling does not yet satisfy.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-3">Demand Implications</h3>
                  <p>
                    The M2M payment category — AI agents transacting with other agents and services — is structurally suited to stablecoins in a way that consumer payments are not. Card rails exist because they solve human trust and acceptance problems. M2M has no such requirement. If stablecoins can offer finality, programmability, and low cost, they are the natural settlement medium for internet-native machine transactions.
                  </p>
                  <p>
                    Enterprise use cases are also opening. Multinationals evaluating agentic treasury tools are finding that autonomous FX management requires real-time settlement capabilities that correspondent banking cannot provide. Stablecoin rails are being evaluated — quietly but actively — by treasury teams at several global enterprises.
                  </p>

                  <h3 className="text-lg font-serif font-medium text-foreground mt-8 mb-3">Infrastructure Gaps</h3>
                  <p>
                    The infrastructure gaps that would accelerate stablecoin adoption in agentic contexts are specific:
                  </p>
                  <ul className="list-none space-y-3 pl-0">
                    {[
                      { label: "Agent wallet standards", desc: "No standard for how AI agents hold, receive, and transmit stablecoin credentials without exposing private keys." },
                      { label: "Spend control frameworks", desc: "Enterprises need programmable policy enforcement — agents should be able to transact only within defined constraints." },
                      { label: "Compliance tooling", desc: "AML and sanctions screening for autonomous agents is an open problem. Existing VASP frameworks assume human principals." },
                      { label: "Fiat on/off ramps at scale", desc: "For enterprise adoption, seamless conversion between stablecoins and fiat within agent workflows is required." },
                    ].map((item) => (
                      <li key={item.label} className="flex gap-4">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span><strong className="text-foreground">{item.label}:</strong> {item.desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Callout variant="quote">
                  "Stablecoins are the only payment instrument whose economics scale from a $0.001 API call to a $10M trade settlement without changing the underlying infrastructure. For agentic payments, that is not a minor advantage. It is a structural necessity."
                </Callout>
              </Section>

              <div className="border-t border-border" />

              {/* Conclusion */}
              <Section id="conclusion">
                <h2 className="text-2xl md:text-3xl font-serif font-medium mb-6 text-foreground">Conclusion</h2>
                <div className="space-y-4 text-[1.0625rem] leading-relaxed text-foreground/80">
                  <p>
                    Agentic payments are no longer a forecast category. They are a live market with billions in annualized volume, growing faster than the infrastructure designed to support them. The architectural choices being made in 2026 — which rails agents transact on, which wallets they use, which compliance frameworks apply — will determine the structure of the payments market for the next decade.
                  </p>
                  <p>
                    The card-protocol split is real and structural, not a temporary feature of early deployment patterns. Consumer agentic checkout will predominantly use card rails for the foreseeable future. M2M, developer tooling, and cross-border settlement will shift toward protocol-native infrastructure as the economics make card rails untenable.
                  </p>
                  <p>
                    For stablecoin operators and fintechs, the window for establishing infrastructure leadership in M2M and developer-native agentic payments is open. The demand is forming now. The infrastructure gaps are well-defined. The operators who build the missing layers — agent wallets, spend controls, compliance tooling, ramp infrastructure — will occupy structurally important positions in the market that emerges.
                  </p>
                </div>
                <Callout variant="takeaway">
                  The agentic payments market is splitting along predictable lines. Fintech operators and enterprises building on stablecoin rails should focus infrastructure investment on M2M settlement, agent wallet standards, and programmable spend controls — the gaps where card rails are weakest and stablecoin advantages are greatest.
                </Callout>

                {/* Author footer */}
                <div className="mt-16 pt-10 border-t border-border">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center font-serif text-2xl font-bold shrink-0">
                      A
                    </div>
                    <div>
                      <p className="font-serif font-medium text-lg text-foreground">Anvesan Research</p>
                      <p className="text-sm text-muted-foreground mt-1 leading-relaxed max-w-lg">
                        Anvesan is a stablecoin research and strategic advisory think tank. We publish focused research on stablecoin infrastructure, regulation, and policy for fintech operators, enterprises, and policymakers.
                      </p>
                      <a href="mailto:research@anvesan.org" className="mt-3 inline-flex text-sm text-primary hover:underline">
                        research@anvesan.org
                      </a>
                    </div>
                  </div>
                </div>

                {/* Next article / back */}
                <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <Link href="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group">
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
                    Back to all research
                  </Link>
                  <div className="text-sm text-muted-foreground">
                    <span>Last updated: March 2026</span>
                  </div>
                </div>
              </Section>

            </div>
          </article>
        </div>
      </div>

      {/* Back to top */}
      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: showBackToTop ? 1 : 0, y: showBackToTop ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 z-50 w-10 h-10 bg-foreground text-background rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shadow-lg"
        data-testid="back-to-top"
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>

      {/* Minimal footer */}
      <footer className="border-t border-border py-10 mt-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-foreground text-background flex items-center justify-center font-serif text-sm font-bold">A</div>
            <span className="font-serif font-medium text-foreground">Anvesan</span>
          </div>
          <p className="text-xs">© 2026 Anvesan. All rights reserved. Stablecoin Research & Strategic Advisory</p>
          <Link href="/" className="hover:text-foreground transition-colors text-xs">
            Back to home
          </Link>
        </div>
      </footer>
    </div>
  );
}
