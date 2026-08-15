import { useState } from "react";
import ScrollReveal from "@/components/animations/ScrollReveal";
import AnimatedText from "@/components/animations/AnimatedText";
import { motion } from "framer-motion";
import { Github, Linkedin, FileText, Send, Loader2, CheckCircle2, XCircle } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Divijv8/",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/divij1524/",
  },
  {
    icon: FileText,
    label: "Resume",
    href: "https://drive.google.com/file/d/1LeHo9nAHcNRIymjPe8GXD3VNg4jo7za0/view?usp=sharing",
  },
];

type FormStatus = "idle" | "sending" | "success" | "error";

const WEB3FORMS_ACCESS_KEY = "a754b17d-d895-42e3-847e-a5f42b35b28c";

const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact: ${formData.name}`,
          from_name: "Portfolio Contact Form",
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputBase =
    "w-full px-4 py-3 rounded-xl bg-secondary/60 border border-border/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/40 focus:border-accent/40 transition-all duration-300";

  return (
    <footer id="contact" className="section-padding scroll-mt-20 border-t border-border/50">
      <div className="section-container">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-16">
          {/* Left — CTA + social */}
          <ScrollReveal>
            <div>
              <AnimatedText
                text="Let's talk."
                as="h2"
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
              />
              <p className="text-muted-foreground text-sm md:text-base max-w-md mb-10 leading-relaxed">
                Have a project or need help? Fill out the form, and I'll get
                back to you soon.
              </p>

              {/* Social links */}
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass w-12 h-12 rounded-full flex items-center justify-center text-muted-foreground hover:text-accent hover:border-accent/30 transition-all duration-300 glow-hover"
                    aria-label={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Contact form */}
          <ScrollReveal delay={0.15} direction="right">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  required
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className={inputBase}
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className={inputBase}
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Your Project
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  placeholder="Tell me about your project"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className={`${inputBase} resize-y min-h-[120px]`}
                />
              </div>

              {/* Submit button */}
              <motion.button
                type="submit"
                disabled={status === "sending" || status === "success"}
                whileHover={{ scale: status === "idle" ? 1.02 : 1 }}
                whileTap={{ scale: status === "idle" ? 0.98 : 1 }}
                className={`w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed ${
                  status === "success"
                    ? "bg-green-500/90 text-white"
                    : status === "error"
                    ? "bg-red-500/90 text-white"
                    : "text-white hover:shadow-lg hover:shadow-accent/20"
                }`}
                style={
                  status === "idle" || status === "sending"
                    ? { background: "var(--gradient-accent)" }
                    : undefined
                }
              >
                {status === "idle" && (
                  <>
                    Submit
                    <Send className="w-4 h-4" />
                  </>
                )}
                {status === "sending" && (
                  <>
                    Sending...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                )}
                {status === "success" && (
                  <>
                    Message Sent!
                    <CheckCircle2 className="w-4 h-4" />
                  </>
                )}
                {status === "error" && (
                  <>
                    Failed — Try Again
                    <XCircle className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal>
        </div>

        {/* Copyright */}
        <ScrollReveal delay={0.2}>
          <div className="text-center pt-8 border-t border-border/30">
            <p className="text-xs text-muted-foreground tracking-wide">
              © {new Date().getFullYear()} Divij Verma. Built with passion & too
              much coffee.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </footer>
  );
};

export default Footer;
