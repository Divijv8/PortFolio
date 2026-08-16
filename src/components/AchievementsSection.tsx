import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { motion } from "framer-motion";
import { Trophy, ExternalLink } from "lucide-react";

interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
  stat?: { value: number; suffix?: string; prefix?: string };
  highlight?: string;
  link?: { url: string; label: string };
}

const achievements: Achievement[] = [
  {
    icon: "🥇",
    title: "Encode 24.1",
    subtitle: "College-wide coding contest",
    stat: { value: 5, prefix: "Rank " },
    highlight: "out of 250+",
  },
  {
    icon: "⚔️",
    title: "LeetCode Knight",
    subtitle: "Top 5% globally",
    stat: { value: 1868, prefix: "Rating " },
  },
  {
    icon: "🔬",
    title: "IC3 2026",
    subtitle: "International research conference",
    highlight: "Paper Accepted",
    link: { url: "https://drive.google.com/file/d/1bFGGbStZ5AUErSv1kLM3y4YkIZKQ5jLH/view?usp=sharing", label: "View Paper" },
  },
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="section-padding scroll-mt-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <Trophy className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium">
              Achievements
            </span>
          </div>
        </ScrollReveal>

        <AnimatedText
          text="Milestones & Recognition"
          as="h2"
          className="text-3xl md:text-5xl font-bold text-foreground mb-16"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <ScrollReveal key={ach.title} delay={i * 0.12}>
              <motion.div
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass rounded-xl p-6 text-center glow-hover group cursor-default h-full"
              >
                {/* Icon */}
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                >
                  {ach.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-base font-bold text-foreground mb-1">
                  {ach.title}
                </h3>

                {/* Subtitle */}
                <p className="text-xs text-muted-foreground mb-4">
                  {ach.subtitle}
                </p>

                {/* Stat */}
                {ach.stat && (
                  <div className="text-2xl font-bold text-foreground font-mono">
                    <AnimatedCounter
                      target={ach.stat.value}
                      prefix={ach.stat.prefix || ""}
                      suffix={ach.stat.suffix || ""}
                      separator={true}
                    />
                  </div>
                )}

                {/* Highlight */}
                {ach.highlight && (
                  <p className="text-xs text-accent font-semibold mt-2 tracking-wide uppercase">
                    {ach.highlight}
                  </p>
                )}

                {/* Link */}
                {ach.link && (
                  <a
                    href={ach.link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 mt-4 px-4 py-2 rounded-lg text-xs font-semibold tracking-wide uppercase text-accent border border-accent/30 bg-accent/5 hover:bg-accent/15 hover:border-accent/60 hover:shadow-[0_0_16px_hsl(var(--accent)/0.2)] transition-all duration-300 group/link"
                  >
                    {ach.link.label}
                    <ExternalLink className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
