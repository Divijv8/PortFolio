import portraitImg from "@/assets/portrait.jpg";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";
import { ArrowDown } from "lucide-react";

const BADGE_TEXT = "SWE • ML ENGINEER • JIIT NOIDA • ";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 section-padding scroll-mt-20"
    >
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_auto] gap-14 lg:gap-16 xl:gap-20 items-center">
          {/* Left: headline + intro */}
          <div className="min-w-0">
            <div className="mb-10 md:mb-12">
              <AnimatedText
                text="Software Developer"
                as="h1"
                immediate
                className="text-[clamp(2.5rem,8vw,7rem)] lg:text-[clamp(3.5rem,5.6vw,5.75rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-foreground"
              />
              <AnimatedText
                text="& ML Engineer"
                as="h1"
                immediate
                delay={0.15}
                className="text-[clamp(2.5rem,8vw,7rem)] lg:text-[clamp(3.5rem,5.6vw,5.75rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-gradient"
              />
            </div>

            <div className="mb-10 md:mb-12 max-w-xl">
              <div className="text-sm md:text-base leading-relaxed text-muted-foreground tracking-wide space-y-4">
                <ScrollReveal delay={0.5}>
                  <p>
                    Hi, I'm Divij Verma — a final-year CSE student at Jaypee
                    Institute of Information Technology, Noida. I build things
                    people actually use, and I've interned at DRDO building
                    production systems.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.65}>
                  <p>
                    I build production-grade ML systems, decentralized
                    applications, and AI-integrated tools end-to-end — from
                    architecture to deployment. My work includes an original
                    deep learning architecture for medical image segmentation
                    (0.90 Dice on the ISIC 2018 test set, accepted at IC3 2026)
                    and a blockchain storage platform with 65 real organic
                    users.
                  </p>
                </ScrollReveal>
                <ScrollReveal delay={0.8}>
                  <p>
                    I'm a LeetCode Knight (top 5% globally, rating 1868) — which
                    reflects the same obsession with correctness and efficiency
                    I bring to every project I ship.
                  </p>
                </ScrollReveal>
              </div>
            </div>

            <ScrollReveal delay={0.9}>
              <div className="flex flex-wrap items-center gap-3 mb-10 md:mb-12">
                <a
                  href="#projects"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all duration-300 hover:shadow-accent/40 hover:-translate-y-0.5"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  View my work
                  <ArrowDown className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-foreground glass hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5"
                >
                  Get in touch
                </a>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 max-w-xl">
                <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium">
                  Final-year student at
                  <br />
                  <span className="text-foreground">JIIT, Noida</span>
                </p>
                <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium font-mono">
                  (2023 – 2027)
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: arch portrait */}
          <ScrollReveal delay={0.35}>
            <div className="flex justify-center lg:justify-end p-10 pl-14 lg:pr-8">
              <div className="portrait-wrap w-60 sm:w-72 lg:w-[300px] xl:w-[340px]">
                <div className="portrait-glow" aria-hidden="true" />
                <div className="portrait-frame portrait-frame-soft" aria-hidden="true" />
                <div className="portrait-photo">
                  <img src={portraitImg} alt="Divij Verma portrait" />
                </div>
                <div className="portrait-frame portrait-frame-main" aria-hidden="true" />
                <div className="portrait-badge" aria-hidden="true">
                  <svg viewBox="0 0 100 100">
                    <defs>
                      <path
                        id="portrait-badge-circle"
                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                      />
                    </defs>
                    <text
                      className="fill-foreground"
                      style={{
                        fontSize: "8px",
                        letterSpacing: "1.2px",
                        fontWeight: 600,
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      <textPath href="#portrait-badge-circle" textLength="230" lengthAdjust="spacing">{BADGE_TEXT}</textPath>
                    </text>
                  </svg>
                  <span className="portrait-badge-dot" />
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
