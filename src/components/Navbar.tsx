import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "achievements", label: "Achievements" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [hidden, setHidden] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { scrollY, scrollYProgress } = useScroll();

  // Hide on scroll down, show on scroll up
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
      setMobileOpen(false);
    } else {
      setHidden(false);
    }
  });

  // Active section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["contact", "achievements", "projects", "experience", "about"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Scroll progress bar */}
      <motion.div
        className="scroll-progress"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navbar */}
      <motion.nav
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto max-w-[1200px] px-4 md:px-6 pt-4">
          <div className="glass-strong rounded-2xl px-5 md:px-8 py-3.5 flex items-center justify-between shadow-lg shadow-background/5">
            {/* Brand */}
            <a
              href="#about"
              className="text-sm font-bold tracking-[0.1em] uppercase text-foreground hover:text-accent transition-colors duration-300"
            >
              Divij<span className="text-accent">.</span>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`relative px-3.5 py-2 text-xs tracking-[0.08em] uppercase font-medium transition-colors duration-300 rounded-lg ${activeSection === link.id
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 rounded-lg"
                      style={{ background: "hsl(var(--accent) / 0.08)" }}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              ))}
            </div>

            {/* Desktop CTA + dark mode */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2.5 rounded-xl text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                <motion.div
                  key={theme}
                  initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {theme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              </button>
              <a
                href="#contact"
                className="px-5 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase text-white transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 hover:scale-[1.02]"
                style={{ background: "var(--gradient-accent)" }}
              >
                Connect
              </a>
            </div>

            {/* Mobile: theme + burger */}
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle dark mode"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 text-foreground"
                aria-label="Toggle menu"
              >
                <motion.div
                  key={mobileOpen ? "close" : "open"}
                  initial={{ scale: 0.5, rotate: -90, opacity: 0 }}
                  animate={{ scale: 1, rotate: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                >
                  {mobileOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0, y: -8 }}
                animate={{ opacity: 1, height: "auto", y: 0 }}
                exit={{ opacity: 0, height: 0, y: -8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="md:hidden mt-2 glass-strong rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="px-5 py-6 space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.button
                      key={link.id}
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileOpen(false);
                        const el = document.getElementById(link.id);
                        if (el) {
                          setTimeout(() => {
                            el.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }
                      }}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className={`block w-full text-left px-4 py-3 rounded-xl text-sm tracking-[0.1em] uppercase font-medium transition-colors ${activeSection === link.id
                        ? "text-accent bg-accent/10"
                        : "text-foreground hover:bg-secondary/50"
                        }`}
                    >
                      {link.label}
                    </motion.button>
                  ))}
                  <div className="pt-3 border-t border-border/50 mt-3">
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setMobileOpen(false);
                        const el = document.getElementById("contact");
                        if (el) {
                          setTimeout(() => {
                            el.scrollIntoView({ behavior: "smooth" });
                          }, 100);
                        }
                      }}
                      className="block w-full px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase text-white text-center"
                      style={{ background: "var(--gradient-accent)" }}
                    >
                      Connect
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  );
};

export default Navbar;
