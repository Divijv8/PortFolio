import { useRef, useEffect } from "react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

interface AnimatedCounterProps {
  target: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  separator?: boolean;
}

const AnimatedCounter = ({
  target,
  duration = 2,
  prefix = "",
  suffix = "",
  className = "",
  separator = true,
}: AnimatedCounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px 0px" });

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 30,
    stiffness: 80,
    duration: duration * 1000,
  });

  useEffect(() => {
    if (isInView) {
      motionValue.set(target);
    }
  }, [isInView, motionValue, target]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        const value = Math.round(latest);
        const formatted = separator ? value.toLocaleString() : value.toString();
        ref.current.textContent = `${prefix}${formatted}${suffix}`;
      }
    });
    return unsubscribe;
  }, [springValue, prefix, suffix, separator]);

  return (
    <motion.span
      ref={ref}
      className={className}
    >
      {prefix}0{suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
