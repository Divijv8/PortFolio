import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon, Linkedin, Github, Phone, FileText } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "about"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto max-w-[1400px] px-6 md:px-12 py-5 flex items-center justify-between">
          {/* Brand */}
          <a href="/" className="text-sm font-medium tracking-[0.15em] uppercase text-foreground">
            Divij Verma
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className={`text-sm tracking-[0.1em] uppercase text-foreground hover:text-muted-foreground transition-colors ${activeSection === "about" ? "border-b border-foreground pb-0.5" : ""}`}>
              About
            </a>
            <a href="#projects" className={`text-sm tracking-[0.1em] uppercase text-foreground hover:text-muted-foreground transition-colors ${activeSection === "projects" ? "border-b border-foreground pb-0.5" : ""}`}>
              Projects
            </a>
          </div>

          {/* Desktop CTA + dark mode */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border text-foreground hover:bg-secondary transition-colors"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setConnectOpen(true)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm tracking-wide text-foreground hover:bg-secondary transition-colors"
            >
              Let's Connect
            </button>
          </div>

          {/* Mobile: theme + burger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border text-foreground"
              aria-label="Toggle dark mode"
            >
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-background border-t border-border px-6 py-8 space-y-6 animate-in slide-in-from-top-2 duration-200">
            <a href="#about" onClick={() => setMobileOpen(false)} className="block text-sm tracking-[0.15em] uppercase text-foreground">
              About
            </a>
            <a href="#projects" onClick={() => setMobileOpen(false)} className="block text-sm tracking-[0.15em] uppercase text-foreground">
              Projects
            </a>
            <div className="pt-4 border-t border-border">
              <button
                onClick={() => { setConnectOpen(true); setMobileOpen(false); }}
                className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-border text-sm text-foreground"
              >
                Let's Connect
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Connect Dialog */}
      <Dialog open={connectOpen} onOpenChange={setConnectOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-lg tracking-[0.1em] uppercase">Let's Connect</DialogTitle>
            <DialogDescription className="text-muted-foreground text-sm">
              Reach out through any of these channels.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 pt-2">
            <a
              href="https://www.linkedin.com/in/divij1524/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground"
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm tracking-wide">LinkedIn</span>
            </a>
            <a
              href="https://github.com/Divijv8/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm tracking-wide">GitHub</span>
            </a>
            <a
              href="tel:+917300806953"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground"
            >
              <Phone className="w-5 h-5" />
              <span className="text-sm tracking-wide">+91 73008 06953</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1LeHo9nAHcNRIymjPe8GXD3VNg4jo7za0/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-4 py-3 rounded-lg border border-border hover:bg-secondary transition-colors text-foreground"
            >
              <FileText className="w-5 h-5" />
              <span className="text-sm tracking-wide">Resume</span>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
