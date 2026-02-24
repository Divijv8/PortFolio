const projects = [
  {
    title: "BlockBin — Decentralized File Storage",
    url: "https://github.com/Divijv8/BlockBin",
    description:
      "Built a full-stack decentralized file storage application using React, Solidity, IPFS, Web3.Storage, and Polygon. Reduced storage costs by 60–75% compared to traditional cloud providers while ensuring permanent, distributed file accessibility with 99.9% uptime.",
  },
  {
    title: "Fake News Detection System",
    url: "https://github.com/Divijv8/Fake-News-Detection",
    description:
      "Developed an AI-powered web application achieving 97% detection accuracy using an LSTM model trained on 280,000+ articles. Integrated Google Gemini API for real-time, human-readable explanations with <3s response time via an interactive Streamlit dashboard.",
  },
  {
    title: "Music Genre Classifier",
    url: "https://github.com/Divijv8/Music-Genre-Classifier",
    description:
      "Built a Deep Neural Network using TensorFlow and Keras to classify music genres from audio signals, achieving 90–94% validation accuracy on the GTZAN dataset. Extracted 40 MFCCs per frame from 1,000+ audio samples using Librosa.",
  },
  {
    title: "DocScanner",
    url: "https://github.com/Divijv8/DocScanner",
    description:
      "A document scanner built with Python and OpenCV that detects document contours from images, with a GUI for image selection and a manual editing interface to fine-tune corners when auto-detection isn't accurate.",
  },
  {
    title: "Route Visualiser",
    url: "https://github.com/Divijv8/RouteVisualiser",
    description:
      "An interactive graph algorithm visualizer built with C++ and SFML, demonstrating Dijkstra's, Prim's, and Kruskal's algorithms with real-time visual exploration of routing, pathfinding, and spanning tree construction.",
  },
  {
    title: "360° Alien Shooter",
    url: "https://github.com/Divijv8/360AlienShooterSFML",
    description:
      "A fast-paced 2D shooter game built with C++ and SFML featuring 360° gameplay, dynamic shooting mechanics, player health management, and progressive difficulty levels across waves of enemies.",
  },
  {
    title: "SnakeAlgos",
    url: "https://github.com/Divijv8/SnakeAlgos",
    description:
      "A visual comparison of A* and Dijkstra pathfinding algorithms through an interactive snake game built with C++ and SFML. Each snake navigates a grid using its respective algorithm while the game tracks speed, efficiency, and decision-making in real time.",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] w-full">
        <h2 className="text-xs md:text-sm tracking-[0.25em] uppercase text-muted-foreground font-medium mb-16">
          Selected Projects
        </h2>

        <div className="space-y-0 divide-y divide-border">
          {projects.map((project) => (
            <div key={project.title} className="py-10 md:py-14 first:pt-0">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <h3
                  className="text-2xl md:text-4xl font-extrabold uppercase tracking-[-0.01em] text-foreground group-hover:text-muted-foreground transition-colors"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h3>
              </a>
              <p className="mt-3 md:mt-4 text-sm md:text-base leading-relaxed text-muted-foreground max-w-2xl tracking-wide">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
