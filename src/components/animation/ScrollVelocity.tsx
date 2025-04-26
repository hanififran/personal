import { motion, useAnimationFrame } from "framer-motion";
import { useRef, useState } from "react";

type ScrollVelocityProps = {
  children: React.ReactNode;
  speed?: number;
};

const ScrollVelocity = ({ children, speed = 50 }: ScrollVelocityProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [x, setX] = useState(0);

  useAnimationFrame((_, delta) => {
    if (!contentRef.current) return;

    const totalWidth = contentRef.current.scrollWidth / 2;

    setX((prev) => {
      const next = prev - (speed * delta) / 1000;
      return next <= -totalWidth ? 0 : next;
    });
  });

  return (
    <div ref={containerRef} className="overflow-hidden w-full">
      <motion.div
        ref={contentRef}
        className="flex w-max"
        style={{ x }}
      >
        <div className="flex gap-4 pr-4">{children}</div>
        <div className="flex gap-4">{children}</div>
      </motion.div>
    </div>
  );
};

export default ScrollVelocity;
