import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedText from "@/components/animations/AnimatedText";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ index, eyebrow, title, description }: SectionHeadingProps) => (
  <div className="mb-14 md:mb-16">
    <ScrollReveal>
      <div className="flex items-center gap-3 mb-5">
        <span className="font-mono text-xs text-accent">{index}</span>
        <span className="h-px w-10 bg-gradient-to-r from-accent/60 to-transparent" />
        <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium">
          {eyebrow}
        </span>
      </div>
    </ScrollReveal>
    <AnimatedText
      text={title}
      as="h2"
      className="text-3xl md:text-5xl font-bold tracking-tight text-foreground"
    />
    {description && (
      <ScrollReveal delay={0.15}>
        <p className="mt-4 max-w-xl text-sm md:text-base text-muted-foreground leading-relaxed">
          {description}
        </p>
      </ScrollReveal>
    )}
  </div>
);

export default SectionHeading;
