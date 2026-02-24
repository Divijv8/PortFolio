import portraitImg from "@/assets/portrait.jpg";

const HeroSection = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center pt-24 pb-12 px-6 md:px-12 scroll-mt-20">
      <div className="mx-auto max-w-[1400px] w-full">
        {/* Hero headline */}
        <div className="mb-12 md:mb-16">
          <h1 className="text-[clamp(3rem,10vw,9rem)] font-extrabold uppercase leading-[0.9] tracking-[-0.02em] text-foreground" style={{ fontFamily: "var(--font-display)" }}>
            Software<br />
            Developer • ML
          </h1>
        </div>

        {/* About blurb */}
        <div className="mb-12 md:mb-16 max-w-2xl">
          <div className="text-sm md:text-base leading-relaxed text-muted-foreground tracking-wide space-y-4">
            <p>
              Hi, I'm Divij Verma — a passionate third-year B.Tech student in Computer Science & Engineering at Jaypee Institute of Information Technology (JIIT), Noida.
            </p>
            <p>
              I build full-stack applications, decentralized systems, and AI-powered tools that solve real problems with clean, efficient code.
            </p>
            <p>
              I'm a competitive programmer (LeetCode rating 1800 — top 8% globally, CodeChef 1426) who thrives on fast learning, optimization, and ownership. Beyond code, I've freelanced as a 3D artist in Blender, delivering high-quality renders with 100% client satisfaction.
            </p>
          </div>
        </div>

        {/* Sub info */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium">
            Currently studying at<br />
            JIIT, Noida
          </p>
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase text-muted-foreground font-medium">
            (2023 – 2027)
          </p>
        </div>

        {/* Portrait */}
        <div className="flex justify-center">
          <div className="w-full max-w-md overflow-hidden rounded-2xl">
            <img
              src={portraitImg}
              alt="Divij Verma portrait"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
