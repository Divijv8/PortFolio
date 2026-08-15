import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ParallaxImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  speed?: number;
}

const ParallaxImage = ({
  src,
  alt,
  className = "",
  containerClassName = "",
  speed = 0.15,
}: ParallaxImageProps) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-80 * speed, 80 * speed]);

  return (
    <div ref={ref} className={`overflow-hidden ${containerClassName}`}>
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className={`w-full h-auto object-cover scale-110 ${className}`}
        loading="lazy"
      />
    </div>
  );
};

export default ParallaxImage;
