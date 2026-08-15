import portraitImg from "@/assets/portrait.jpg";
import AnimatedText from "@/components/animations/AnimatedText";
import ScrollReveal from "@/components/animations/ScrollReveal";
import ParallaxImage from "@/components/animations/ParallaxImage";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-28 pb-16 section-padding scroll-mt-20"
    >
      <div className="section-container">
        {/* Hero headline */}
        <div className="mb-12 md:mb-16">
          <AnimatedText
            text="Software Developer"
            as="h1"
            immediate
            className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-foreground"
          />
          <AnimatedText
            text="& ML Engineer"
            as="h1"
            immediate
            delay={0.15}
            className="text-[clamp(2.5rem,8vw,7rem)] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-gradient"
          />
        </div>

        {/* About blurb */}
        <div className="mb-12 md:mb-16 max-w-2xl">
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
                I build production-grade ML systems, decentralized applications,
                and AI-integrated tools end-to-end — from architecture to
                deployment. My work includes an original deep learning
                architecture for medical image segmentation (0.90 Dice on the
                ISIC 2018 test set, accepted at IC3 2026) and a blockchain
                storage platform with 65 real organic users.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={0.8}>
              <p>
                I'm a LeetCode Knight (top 5% globally, rating 1868) — which
                reflects the same obsession with correctness and efficiency I
                bring to every project I ship.
              </p>
            </ScrollReveal>
          </div>
        </div>

        {/* Sub info */}
        <ScrollReveal delay={0.3}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-16 md:mb-24">
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

        {/* Portrait */}
        <ScrollReveal delay={0.2}>
          <div className="flex justify-center">
            <div className="w-full max-w-md rounded-2xl glow-hover gradient-border">
              <ParallaxImage
                src={portraitImg}
                alt="Divij Verma portrait"
                className="rounded-2xl"
                containerClassName="rounded-2xl"
                speed={0.2}
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default HeroSection;
