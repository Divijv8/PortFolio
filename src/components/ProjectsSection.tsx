import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import SectionHeading from "@/components/SectionHeading";
import { trackSpotlight } from "@/lib/utils";

type Category = "AI & ML" | "Web & Tools" | "Systems & Games";

interface Project {
  title: string;
  url: string;
  description: string;
  tags: string[];
  category: Category;
  badge?: string;
  metric?: { value: string; label: string };
}

const featured: Project[] = [
  {
    title: "DermSeg",
    url: "https://github.com/Divijv8/DermSeg",
    category: "AI & ML",
    badge: "IC3 2026 Accepted",
    metric: { value: "0.90", label: "Dice · ISIC 2018" },
    description:
      "A new segmentation architecture: a ResNet-50 encoder paired with an FCT decoder, trained with two-phase transfer learning. Five skip connections with 1×1 projection convolutions bridge 7×7 to 112×112 resolutions, trained with weighted BCE + Dice loss across 3 deep-supervision heads.",
    tags: ["TensorFlow", "ResNet-50", "FCT", "Medical Imaging", "Transfer Learning"],
  },
  {
    title: "TimeWeave",
    url: "https://github.com/Divijv8/major-project-1-main",
    category: "Web & Tools",
    badge: "Major Project",
    metric: { value: "0", label: "clashes · CP-SAT constraint solver" },
    description:
      "Automated college timetabling system. A Google OR-Tools CP-SAT solver schedules every B.Tech semester globally, with no teacher, batch or room overlaps. A custom parser turns messy institutional Excel workbooks into clean relational data: 2,358 sessions, 314 faculty and 90 rooms. Role-based views cover faculty, students and room occupancy, and a conflict auditor checks the original manual schedule.",
    tags: ["Django", "DRF", "OR-Tools CP-SAT", "React", "PostgreSQL"],
  },
  {
    title: "Oracle ERP Asset Report Analyser",
    url: "https://divijv8-oracle-asset-report.hf.space/",
    category: "AI & ML",
    badge: "Live Demo",
    metric: { value: "7B", label: "Mistral on ZeroGPU" },
    description:
      "AI document analysis for Oracle ERP Asset Additions reports. Regex state-machine parsing extracts and validates PDFs by reconciling report totals against computed row sums, with formatted Excel export. A local Mistral-7B served by vLLM on Hugging Face ZeroGPU writes executive summaries and answers multi-turn questions.",
    tags: ["Python", "Gradio", "vLLM", "Mistral-7B", "HF Spaces"],
  },
];

const others: Project[] = [
  {
    title: "BlockBin",
    url: "https://github.com/Divijv8/BlockBin",
    category: "Web & Tools",
    description:
      "Decentralized file storage on IPFS + Polygon. 60–75% cheaper than traditional cloud, 80% gas-cost reduction through contract optimization, and 99.9% uptime with 65 real organic users.",
    tags: ["React", "Solidity", "IPFS", "Polygon"],
  },
  {
    title: "Theme Studio for LeetCode",
    url: "https://github.com/Divijv8/Leetcode-Theme-packs",
    category: "Web & Tools",
    description:
      "Chrome extension that reskins leetcode.com with 8 themed worlds: code-generated SVG backdrops, glass panels, a themed editor and an animated “Accepted” finisher. It re-points LeetCode's own CSS variables, so themes survive UI changes.",
    tags: ["Chrome Extension", "JavaScript", "CSS Variables", "SVG"],
  },
  {
    title: "QuietNet",
    url: "https://github.com/Divijv8/QuietNet",
    category: "Web & Tools",
    description:
      "A lightweight Manifest V3 Chrome extension that silently tracks active time per website, with idle detection so inactive time isn't counted, and shows a clean per-site breakdown in a popup dashboard.",
    tags: ["Manifest V3", "JavaScript", "Chrome APIs"],
  },
  {
    title: "VeriFy",
    url: "https://github.com/Divijv8/Fake-News-Detection",
    category: "AI & ML",
    description:
      "Fake news detection at 97% accuracy with Word2Vec + LSTM trained on 280K+ articles. Gemini explains each prediction in plain language, and human-in-the-loop feedback is logged for retraining.",
    tags: ["LSTM", "Word2Vec", "Gemini API", "NLP"],
  },
  {
    title: "Music Genre Classifier",
    url: "https://github.com/Divijv8/Music-Genre-Classifier",
    category: "AI & ML",
    description:
      "Deep neural network classifying music genres from audio at 90–94% validation accuracy on GTZAN, using 40 MFCCs per frame extracted with Librosa.",
    tags: ["TensorFlow", "Keras", "Librosa"],
  },
  {
    title: "DocScanner",
    url: "https://github.com/Divijv8/DocScanner",
    category: "AI & ML",
    description:
      "OpenCV document scanner with automatic contour detection, a GUI for image selection, and a manual corner editor for when auto-detection misses.",
    tags: ["Python", "OpenCV", "Computer Vision"],
  },
  {
    title: "Route Visualiser",
    url: "https://github.com/Divijv8/RouteVisualiser",
    category: "Systems & Games",
    description:
      "Interactive visualizer for Dijkstra's, Prim's and Kruskal's algorithms, showing routing, pathfinding and spanning-tree construction in real time.",
    tags: ["C++", "SFML", "Graph Algorithms"],
  },
  {
    title: "SnakeAlgos",
    url: "https://github.com/Divijv8/SnakeAlgos",
    category: "Systems & Games",
    description:
      "A* vs. Dijkstra raced head-to-head as snakes on a grid, tracking speed, efficiency and decision-making live.",
    tags: ["C++", "SFML", "A*", "Pathfinding"],
  },
  {
    title: "360° Alien Shooter",
    url: "https://github.com/Divijv8/360AlienShooterSFML",
    category: "Systems & Games",
    description:
      "Fast-paced 2D shooter with full 360° aiming, player health and progressively harder enemy waves.",
    tags: ["C++", "SFML", "Game Dev"],
  },
];

const filters = ["All", "AI & ML", "Web & Tools", "Systems & Games"] as const;
type Filter = (typeof filters)[number];

const isLive = (url: string) => !url.includes("github.com");

const LinkHint = ({ url }: { url: string }) => {
  const live = isLive(url);
  const Icon = live ? Globe : Github;
  return (
    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors">
      <Icon className="w-3.5 h-3.5" />
      {live ? "Live demo" : "Source"}
      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </span>
  );
};

const FeaturedCard = ({ project, index, large }: { project: Project; index: number; large?: boolean }) => {
  const header = (
    <div className="flex items-center justify-between gap-3 mb-6">
      <span className="font-mono text-xs text-muted-foreground">
        {String(index + 1).padStart(2, "0")} / {project.category}
      </span>
      {project.badge && <span className="accent-badge">{project.badge}</span>}
    </div>
  );

  const metric = project.metric && (
    <div>
      <div
        className={`font-extrabold tracking-tight text-gradient leading-none ${
          large ? "text-6xl md:text-8xl" : "text-4xl md:text-5xl"
        }`}
        style={{ fontFamily: "var(--font-display)" }}
      >
        {project.metric.value}
      </div>
      <div className="mt-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
        {project.metric.label}
      </div>
    </div>
  );

  const body = (
    <>
      <h3 className={`font-bold text-foreground tracking-tight mb-3 ${large ? "text-2xl md:text-3xl" : "text-xl md:text-2xl"}`}>
        {project.title}
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {project.tags.map((tag) => (
          <span key={tag} className="tag-pill">
            {tag}
          </span>
        ))}
      </div>
      <div className="pt-5 border-t border-border/60">
        <LinkHint url={project.url} />
      </div>
    </>
  );

  return (
    <ScrollReveal delay={index * 0.1} className={`h-full ${large ? "lg:col-span-2" : ""}`}>
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={trackSpotlight}
        className="spotlight-card group relative flex h-full flex-col rounded-2xl p-6 md:p-8 overflow-hidden"
      >
        {large ? (
          /* Wide hero card: metric panel left, details right */
          <div className="relative z-[1] grid h-full gap-8 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-12">
            <div className="flex flex-col justify-between gap-8 lg:border-r lg:border-border/60 lg:pr-12">
              {header}
              {metric}
            </div>
            <div className="flex flex-col">{body}</div>
          </div>
        ) : (
          <div className="relative z-[1] flex h-full flex-col">
            {header}
            <div className="mb-5">{metric}</div>
            {body}
          </div>
        )}
      </a>
    </ScrollReveal>
  );
};

const CompactCard = ({ project }: { project: Project }) => (
  <motion.a
    layout
    initial={{ opacity: 0, scale: 0.96 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.25 }}
    href={project.url}
    target="_blank"
    rel="noopener noreferrer"
    onMouseMove={trackSpotlight}
    className="spotlight-card group relative flex h-full flex-col rounded-xl p-5 md:p-6 overflow-hidden"
  >
    <div className="relative z-[1] flex h-full flex-col">
      <div className="flex items-start justify-between gap-3 mb-3">
        <h3 className="text-base md:text-lg font-bold text-foreground tracking-tight">{project.title}</h3>
        <ArrowUpRight className="w-4 h-4 mt-1 shrink-0 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground mb-5 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-x-3 gap-y-1">
        {project.tags.map((tag) => (
          <span key={tag} className="font-mono text-[11px] text-muted-foreground/90">
            #{tag.replace(/\s+/g, "")}
          </span>
        ))}
      </div>
    </div>
  </motion.a>
);

const ProjectsSection = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = filter === "All" ? others : others.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section-padding scroll-mt-20">
      <div className="section-container">
        <SectionHeading
          index="02"
          eyebrow="Selected Projects"
          title="What I've Built"
          description="Research-grade ML, production tooling and the occasional game, built end-to-end."
        />

        {/* Featured bento */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6 mb-20">
          <FeaturedCard project={featured[0]} index={0} large />
          <FeaturedCard project={featured[1]} index={1} />
          <FeaturedCard project={featured[2]} index={2} />
        </div>

        {/* More projects */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
          <ScrollReveal>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground">More projects</h3>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="inline-flex flex-wrap gap-1 p-1 rounded-xl glass" role="tablist" aria-label="Filter projects">
              {filters.map((f) => (
                <button
                  key={f}
                  role="tab"
                  aria-selected={filter === f}
                  onClick={() => setFilter(f)}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors duration-300 ${
                    filter === f ? "text-accent-foreground" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {filter === f && (
                    <motion.span
                      layoutId="projectFilter"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "var(--gradient-accent)" }}
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{f}</span>
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <CompactCard key={project.title} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
