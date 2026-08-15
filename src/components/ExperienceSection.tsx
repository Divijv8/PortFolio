import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedText from "@/components/animations/AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  project: string;
  bullets: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineering Intern",
    company: "DRDO (Defence Research & Development Organisation)",
    location: "Agra, India",
    period: "May – Jul 2026",
    project: "Gate Entry & Pass Generation System",
    bullets: [
      "Designed and developed an automated Gate Entry/Pass Generation System, reducing manual processing time by ~70%",
      "Built RESTful APIs handling 100+ daily entries/exits with robust authentication and role-based access",
      "Improved checkpoint efficiency by ~50% through streamlined digital workflows replacing paper-based processes",
    ],
    tags: ["RESTful APIs", "Full-Stack", "System Design", "Authentication"],
  },
];

const ExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.6"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="experience"
      className="section-padding scroll-mt-20"
      ref={containerRef}
    >
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <Briefcase className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium">
              Experience
            </span>
          </div>
        </ScrollReveal>

        <AnimatedText
          text="Where I've Worked"
          as="h2"
          className="text-3xl md:text-5xl font-bold text-foreground mb-16"
        />

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Timeline line */}
          <div className="timeline-line" />
          <motion.div
            className="timeline-line-fill"
            style={{ height: lineHeight }}
          />

          {experiences.map((exp, index) => (
            <div key={index} className="relative pb-16 last:pb-0">
              {/* Timeline dot */}
              <div className="timeline-dot timeline-dot-filled" />

              <ScrollReveal delay={0.2}>
                <div className="glass rounded-xl p-6 md:p-8 glow-hover">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-base md:text-lg text-muted-foreground font-medium mt-1">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col gap-1 text-xs text-muted-foreground md:text-right shrink-0">
                      <span className="flex items-center gap-1.5 font-mono">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Project name */}
                  <p className="text-sm font-semibold text-foreground mb-4 font-mono">
                    Project: {exp.project}
                  </p>

                  {/* Bullets */}
                  <ul className="space-y-3 mb-6">
                    {exp.bullets.map((bullet, bi) => (
                      <ScrollReveal key={bi} delay={0.3 + bi * 0.1}>
                        <li className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-2" />
                          {bullet}
                        </li>
                      </ScrollReveal>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span key={tag} className="tag-pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
