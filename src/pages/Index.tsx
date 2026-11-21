import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import AchievementsSection from "@/components/AchievementsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="relative min-h-screen bg-background scroll-smooth">
      <div className="ambient-bg" aria-hidden="true">
        <div
          className="ambient-blob"
          style={{ width: "42vw", height: "42vw", top: "-12vw", left: "-10vw", background: "hsl(250 90% 62%)" }}
        />
        <div
          className="ambient-blob"
          style={{ width: "36vw", height: "36vw", top: "30vh", right: "-12vw", background: "hsl(320 80% 55%)", animationDelay: "-11s" }}
        />
      </div>
      <div className="relative z-[1]">
        <Navbar />
        <main>
          <HeroSection />
          <ExperienceSection />
          <ProjectsSection />
          <AchievementsSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
