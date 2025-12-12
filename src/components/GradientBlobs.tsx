import { motion } from "framer-motion";

const GradientBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-20">
      {/* Main gradient blob - top left */}
      <motion.div
        className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Secondary blob - top right */}
      <motion.div
        className="absolute -top-1/4 -right-1/4 w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(270 91% 65% / 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Bottom blob */}
      <motion.div
        className="absolute -bottom-1/4 left-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(330 100% 60% / 0.08) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
        animate={{
          x: [0, 60, 0],
          y: [0, -40, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center accent blob */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsl(180 100% 50% / 0.05) 0%, hsl(270 91% 65% / 0.05) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
    </div>
  );
};

export default GradientBlobs;
