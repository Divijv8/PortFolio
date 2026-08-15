import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedText from "@/components/animations/AnimatedText";
import AnimatedCounter from "@/components/animations/AnimatedCounter";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

interface Achievement {
  icon: string;
  title: string;
  subtitle: string;
  stat?: { value: number; suffix?: string; prefix?: string };
  highlight?: string;
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
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
