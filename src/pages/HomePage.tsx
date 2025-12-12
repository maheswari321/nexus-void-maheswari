import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowDown, Download } from "lucide-react";
import Scene3D from "@/components/Scene3D";
import ParticleBackground from "@/components/ParticleBackground";

const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground variant="default" />

      {/* 3D Scene */}
      <div className="absolute inset-0 opacity-60">
        <Scene3D />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="mb-4">
          <span className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/5 text-primary text-sm font-medium">
            Welcome to my portfolio
          </span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-6"
        >
          <span className="block text-foreground">Hi, I'm</span>
          <span className="block mt-2 bg-gradient-to-r from-primary via-secondary to-neon-pink bg-clip-text text-transparent text-glow-cyan">
            Maheswari M
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-4 font-light"
        >
          Computer Science & Design Student
        </motion.p>

        {/* Role Tags */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {["Creative Designer", "Developer", "Problem Solver"].map((role, index) => (
            <motion.span
              key={role}
              className="px-4 py-2 rounded-lg glass-card text-sm font-medium text-foreground"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px hsl(180 100% 50% / 0.3)",
              }}
              transition={{ delay: index * 0.1 }}
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link to="/projects">
            <motion.button
              className="btn-neon group flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
              <motion.span
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </Link>

          <Link to="/resume">
            <motion.button
              className="btn-neon btn-neon-purple flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4" />
              Download Resume
            </motion.button>
          </Link>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-primary/50 flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-3 bg-primary rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HomePage;
