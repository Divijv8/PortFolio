import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  /** Skip useInView check — animate immediately on mount (for hero/above-the-fold content) */
  immediate?: boolean;
}

const AnimatedText = ({
  text,
  className = "",
  delay = 0,
  once = true,
  as: Tag = "h1",
  immediate = false,
}: AnimatedTextProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px 0px" });

  const shouldAnimate = immediate || isInView;

  const words = text.split(" ");

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: immediate ? 0.05 : 0.08,
        delayChildren: delay,
      },
    },
  };

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      rotateX: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 180,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={shouldAnimate ? "visible" : "hidden"}
      style={{ perspective: 600 }}
    >
      <Tag className={className}>
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordVariants}
            className="inline-block mr-[0.3em] last:mr-0"
            style={{ transformOrigin: "bottom center" }}
          >
            {word}
          </motion.span>
        ))}
      </Tag>
    </motion.div>
  );
};

export default AnimatedText;
