import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedText from "@/components/animations/AnimatedText";
import { motion } from "framer-motion";
import { ExternalLink, Code2 } from "lucide-react";

interface Project {
  title: string;
  url: string;
  description: string;
  tags: string[];
  badge?: string;
}

const projects: Project[] = [
  {
    title: "DermSeg",
    url: "https://github.com/Divijv8/DermSeg",
    description:
      "Designed a novel segmentation architecture: replaced the FCT encoder with a ResNet-50 backbone while preserving the FCT decoder, using two-phase transfer learning. Connected them via 5 skip connections with 1×1 projection convolutions across 7×7–112×112 resolutions. Trained with weighted BCE+Dice loss across 3 deep supervision heads, achieving 0.90 Dice on the ISIC 2018 test set.",
    tags: ["TensorFlow", "ResNet-50", "FCT", "Medical Imaging", "Transfer Learning"],
    badge: "IC3 2026 Accepted",
  },
  {
    title: "BlockBin",
    url: "https://github.com/Divijv8/BlockBin",
    description:
      "Full-stack decentralized file storage using React, Solidity, IPFS, Web3.Storage, and Polygon. Reduced storage costs by 60–75% vs. traditional cloud. Optimized smart contract functions for 80% gas-cost reduction. Engineered reliability with no rollback mechanism via async state coordination, achieving 99.9% uptime with 65 real organic users.",
    tags: ["React", "Solidity", "IPFS", "Polygon", "Web3.Storage"],
  },
  {
    title: "VeriFy",
    url: "https://github.com/Divijv8/Fake-News-Detection",
    description:
      "AI-powered fake news detection achieving 97% accuracy using Word2Vec + LSTM trained on 280,000+ articles. Integrated Google Gemini API for real-time, human-readable explanations. Implemented a human-in-the-loop feedback loop that logs corrections to CSV for iterative retraining.",
    tags: ["Word2Vec", "LSTM", "Gemini API", "NLP", "Feedback Loop"],
  },
  {
    title: "Music Genre Classifier",
    url: "https://github.com/Divijv8/Music-Genre-Classifier",
    description:
      "Deep Neural Network using TensorFlow and Keras to classify music genres from audio signals, achieving 90–94% validation accuracy on the GTZAN dataset. Extracted 40 MFCCs per frame from 1,000+ audio samples using Librosa.",
    tags: ["TensorFlow", "Keras", "Librosa", "Audio ML"],
  },
  {
    title: "DocScanner",
    url: "https://github.com/Divijv8/DocScanner",
    description:
      "A document scanner built with Python and OpenCV that detects document contours from images, with a GUI for image selection and a manual editing interface to fine-tune corners when auto-detection isn't accurate.",
    tags: ["Python", "OpenCV", "GUI", "Computer Vision"],
  },
  {
    title: "Route Visualiser",
    url: "https://github.com/Divijv8/RouteVisualiser",
    description:
      "Interactive graph algorithm visualizer built with C++ and SFML, demonstrating Dijkstra's, Prim's, and Kruskal's algorithms with real-time visual exploration of routing, pathfinding, and spanning tree construction.",
    tags: ["C++", "SFML", "Graph Algorithms", "Visualization"],
  },
  {
    title: "360° Alien Shooter",
    url: "https://github.com/Divijv8/360AlienShooterSFML",
    description:
      "A fast-paced 2D shooter game built with C++ and SFML featuring 360° gameplay, dynamic shooting mechanics, player health management, and progressive difficulty levels across waves of enemies.",
    tags: ["C++", "SFML", "Game Dev"],
  },
  {
    title: "SnakeAlgos",
    url: "https://github.com/Divijv8/SnakeAlgos",
    description:
      "A visual comparison of A* and Dijkstra pathfinding algorithms through an interactive snake game built with C++ and SFML. Each snake navigates a grid using its respective algorithm while the game tracks speed, efficiency, and decision-making in real time.",
    tags: ["C++", "SFML", "A*", "Dijkstra", "Pathfinding"],
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setRotateX((y - centerY) / 15);
    setRotateY((centerX - x) / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <ScrollReveal delay={index * 0.1} className="h-full">
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
        className="h-full"
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block h-full"
        >
          <div className="glass rounded-xl p-6 md:p-8 h-full flex flex-col glow-hover group transition-all duration-300 hover:border-accent/30">
            {/* Header */}
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <Code2 className="w-5 h-5 text-accent shrink-0" />
                <h3 className="text-lg md:text-xl font-bold text-foreground group-hover:text-gradient transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0 mt-1" />
            </div>

            {/* Badge */}
            {project.badge && (
              <div className="mb-4">
                <span className="accent-badge">{project.badge}</span>
              </div>
            )}

            {/* Description */}
            <p className="text-sm leading-relaxed text-muted-foreground mb-6 flex-grow">
              {project.description}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map((tag) => (
                <span key={tag} className="tag-pill">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </a>
      </motion.div>
    </ScrollReveal>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding scroll-mt-20">
      <div className="section-container">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <Code2 className="w-5 h-5 text-muted-foreground" />
            <span className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium">
              Selected Projects
            </span>
          </div>
        </ScrollReveal>

        <AnimatedText
          text="What I've Built"
          as="h2"
          className="text-3xl md:text-5xl font-bold text-foreground mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
