import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Globe, FileText, Landmark, Shield, Lightbulb, ExternalLink } from "lucide-react";
import { Link } from "wouter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section id="hero" className="relative pt-40 pb-20 md:pt-52 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        <div className="absolute top-0 right-0 w-1/2 h-[600px] bg-gradient-to-b from-primary/5 to-transparent blur-3xl rounded-full opacity-50 -z-10 transform translate-x-1/3 -translate-y-1/4 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 md:px-12">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-3 mb-8">
              <div className="h-[1px] w-8 bg-primary/40"></div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">
                Stablecoin Research & Strategic Advisory
              </span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] tracking-tight mb-6 text-foreground">
              Bringing Clarity to <br/><span className="text-muted-foreground italic">Stablecoins.</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl md:text-2xl font-serif text-foreground/80 mb-8 border-l-2 border-primary/20 pl-6">
              Technical. Regulatory. Policy.
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed font-light">
              Anvesan researches the infrastructure, regulation, and market structure shaping the global adoption of stablecoins across payments, banking, and enterprise finance.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="w-full sm:w-auto h-14 px-8 rounded-none font-medium text-base group" onClick={() => scrollToSection('contact')}>
                Get in touch
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 rounded-none font-medium text-base border-border hover:bg-muted" onClick={() => scrollToSection('featured-research')}>
                Our research
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-24 md:py-32 bg-foreground text-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-8 bg-background/40"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-background/60">
                  Mission
                </span>
              </div>
            </div>
            
            <div className="lg:col-span-8">
              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={stagger}
                className="space-y-10"
              >
                <motion.p variants={fadeIn} className="text-2xl md:text-4xl font-serif leading-snug">
                  Anvesan exists to accelerate the adoption of stablecoins to the point where stablecoins become indistinguishable from money: <span className="italic text-background/60">ubiquitous, interoperable, and invisible in everyday use.</span>
                </motion.p>
                <motion.p variants={fadeIn} className="text-lg md:text-xl font-light text-background/80 leading-relaxed">
                  We believe the future of finance is one where financial transactions such as remittance, trade settlement, and FX happen instantly, seamlessly, and across borders with minimal friction.
                </motion.p>
                <motion.div variants={fadeIn} className="h-[1px] w-full bg-background/10"></motion.div>
                <motion.p variants={fadeIn} className="text-lg md:text-xl font-light text-background/80 leading-relaxed">
                  Anvesan aims to work closely with fintechs, neobanks, and enterprises building on stablecoin rails, offering regulatory clarity, market intelligence, and access to a network of industry veterans.
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section id="research-focus" className="py-24 md:py-32 bg-background border-b border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-primary/40"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">
                  Research Focus
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">What Anvesan studies</h2>
              <p className="text-lg text-muted-foreground">
                Anvesan publishes focused research on stablecoin infrastructure, regulation, and policy. Each paper is designed for fintech operators, enterprises, policymakers, and market participants building on stablecoin rails.
              </p>
            </div>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "Technical",
                icon: <Globe className="w-6 h-6 text-primary" />,
                desc: "Payments infrastructure, settlement architecture, wallet design, interoperability, and the systems that make stablecoins usable at scale."
              },
              {
                title: "Regulatory",
                icon: <Shield className="w-6 h-6 text-primary" />,
                desc: "Licensing, compliance design, legal frameworks, and the operational specifics of building with stablecoin rails across jurisdictions."
              },
              {
                title: "Policy",
                icon: <Landmark className="w-6 h-6 text-primary" />,
                desc: "How governments, financial institutions, and market participants shape the role of stablecoins in the future of money and cross-border finance."
              }
            ].map((item, i) => (
              <motion.div variants={fadeIn} key={i} className="group">
                <Card className="h-full bg-card hover:bg-muted/50 transition-colors border-border rounded-none rounded-tr-3xl shadow-none">
                  <CardContent className="p-8">
                    <div className="w-12 h-12 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="text-2xl font-serif mb-4 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Research Section */}
      <section id="featured-research" className="py-24 md:py-32 bg-muted/30">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-primary/40"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">
                  Research
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-4 text-foreground">Featured research</h2>
              <p className="text-lg text-muted-foreground">Selected briefings from the Anvesan research archive.</p>
            </div>
            <Link href="/research" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-2 group">
              View all research <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={stagger}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          >
            {/* Card 1 */}
            <motion.div variants={fadeIn}>
              <Card className="h-full flex flex-col bg-card border-border rounded-none hover:shadow-md transition-shadow">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 flex flex-wrap gap-2">
                    <Badge variant="secondary" className="rounded-sm font-normal text-xs bg-primary/5 text-primary">State of the Market</Badge>
                    <span className="text-xs text-muted-foreground flex items-center">· March 2026</span>
                  </div>
                  <h3 className="text-2xl font-serif mb-4 leading-tight">The State of Agentic Payments</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                    A March 2026 briefing on what is live in agentic payments, who is leading, what the numbers say, and how the market is splitting between card-led agentic checkout and internet-native machine payments.
                  </p>
                  <Link href="/research/state-of-agentic-payments-march-2026">
                    <Button variant="outline" className="w-full justify-between group rounded-none">
                      Read overview <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 2 */}
            <motion.div variants={fadeIn}>
              <Card className="h-full flex flex-col bg-muted/50 border-border rounded-none">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="rounded-sm font-normal text-xs border-border">Regulatory</Badge>
                      <span className="text-xs text-muted-foreground flex items-center">· April 2026</span>
                    </div>
                    <Badge variant="secondary" className="rounded-sm font-normal text-xs bg-background text-muted-foreground">Coming soon</Badge>
                  </div>
                  <h3 className="text-2xl font-serif mb-4 leading-tight text-foreground/80">Stablecoins, Regulation, and Market Structure</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                    A forthcoming Anvesan briefing on how licensing, compliance, and jurisdictional fragmentation are shaping stablecoin adoption across markets.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Card 3 */}
            <motion.div variants={fadeIn}>
              <Card className="h-full flex flex-col bg-muted/50 border-border rounded-none">
                <CardContent className="p-8 flex-1 flex flex-col">
                  <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
                    <div className="flex gap-2">
                      <Badge variant="outline" className="rounded-sm font-normal text-xs border-border">Policy</Badge>
                      <span className="text-xs text-muted-foreground flex items-center">· April 2026</span>
                    </div>
                    <Badge variant="secondary" className="rounded-sm font-normal text-xs bg-background text-muted-foreground">Coming soon</Badge>
                  </div>
                  <h3 className="text-2xl font-serif mb-4 leading-tight text-foreground/80">Enterprise Rails for Cross-Border Settlement</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-1">
                    A forthcoming Anvesan note on why fintechs, neobanks, and enterprises are evaluating stablecoin-native rails for remittance, treasury movement, and trade settlement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What Anvesan Offers Section */}
      <section id="what-we-offer" className="py-24 md:py-32 bg-background">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Research, insight, and strategic access</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Anvesan helps fintechs, neobanks, and enterprises understand stablecoin infrastructure, navigate regulation, and make better strategic decisions through focused research, market intelligence, and access to experienced operators across the industry.
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="space-y-6"
            >
              {[
                { title: "Research", desc: "Focused papers on infrastructure, regulation, and policy", icon: <FileText className="w-5 h-5 text-primary" /> },
                { title: "Market Intelligence", desc: "Timely analysis of market structure and adoption trends", icon: <Lightbulb className="w-5 h-5 text-primary" /> },
                { title: "Strategic Access", desc: "Network of experienced operators and industry veterans", icon: <BookOpen className="w-5 h-5 text-primary" /> }
              ].map((item, i) => (
                <motion.div variants={fadeIn} key={i} className="flex gap-6 p-6 border border-border bg-card hover:border-primary/30 transition-colors">
                  <div className="mt-1">{item.icon}</div>
                  <div>
                    <h4 className="font-serif text-xl font-medium mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 md:py-32 bg-muted/50 border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <div className="flex justify-center items-center gap-3 mb-6">
                <div className="h-[1px] w-8 bg-primary/40"></div>
                <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary/80">
                  Contact
                </span>
                <div className="h-[1px] w-8 bg-primary/40"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif mb-6 text-foreground">Let's talk</h2>
              <p className="text-lg text-muted-foreground mb-8">
                For research partnerships, strategic advisory, or media inquiries.
              </p>
              <a href="mailto:research@anvesan.org" className="inline-flex items-center gap-2 text-2xl font-serif hover:text-primary transition-colors border-b border-primary/20 pb-1">
                research@anvesan.org <ExternalLink className="w-5 h-5 opacity-50" />
              </a>
            </div>

            <Card className="bg-card border-border shadow-sm rounded-none max-w-2xl mx-auto">
              <CardContent className="p-8 md:p-10">
                <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); console.log("Form submitted"); }}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium text-foreground">Name</label>
                      <Input id="name" placeholder="John Doe" className="rounded-none border-border bg-background h-12" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
                      <Input id="email" type="email" placeholder="john@example.com" className="rounded-none border-border bg-background h-12" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
                    <Textarea id="message" placeholder="How can we help?" className="rounded-none border-border bg-background min-h-[150px] resize-none" />
                  </div>
                  <Button type="submit" className="w-full h-14 rounded-none font-medium text-base">
                    Send message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </Layout>
  );
}