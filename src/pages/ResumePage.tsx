import { motion } from "framer-motion";
import { Download, FileText, Eye, RefreshCw } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const ResumePage = () => {
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
    hidden: { opacity: 0, y: 30, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const handleDownload = () => {
    // In a real app, this would trigger an actual download
    // For now, we'll show a toast
    alert("Resume download will be available soon!");
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16 flex items-center justify-center">
      <ParticleBackground variant="default" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Resume
            </span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Download my resume to learn more about my experience and skills.
          </p>
        </motion.div>

        {/* Resume Card with 3D Effect */}
        <motion.div
          variants={itemVariants}
          className="relative perspective-1000"
          style={{ perspective: "1000px" }}
        >
          <motion.div
            className="glass-card rounded-2xl p-12 border-glow-mixed relative overflow-hidden"
            whileHover={{ 
              rotateY: 10,
              rotateX: -5,
              scale: 1.02,
            }}
            transition={{ duration: 0.5 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Holographic effect */}
            <div className="absolute inset-0 holographic opacity-30 pointer-events-none" />
            
            {/* Resume Icon */}
            <motion.div
              className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <FileText className="w-12 h-12 text-primary" />
            </motion.div>

            {/* File Info */}
            <div className="mb-8">
              <h2 className="text-2xl font-display font-bold text-foreground mb-2">
                Maheswari M - Resume
              </h2>
              <p className="text-muted-foreground">
                Computer Science & Design Student
              </p>
              <div className="flex items-center justify-center gap-4 mt-4 text-sm text-muted-foreground">
                <span>PDF Format</span>
                <span>•</span>
                <span>Updated 2024</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleDownload}
                className="btn-neon flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="w-5 h-5" />
                Download Resume
              </motion.button>

              <motion.button
                className="btn-neon btn-neon-purple flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="w-5 h-5" />
                Preview
              </motion.button>
            </div>

            {/* Decorative elements */}
            <motion.div
              className="absolute top-4 right-4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <RefreshCw className="w-6 h-6 text-primary/30" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Resume Highlights */}
        <motion.div
          variants={itemVariants}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
          {[
            { label: "Projects", value: "4+" },
            { label: "Skills", value: "10+" },
            { label: "Tools", value: "5+" },
            { label: "Certificates", value: "1+" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass-card rounded-xl p-4"
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-2xl font-display font-bold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResumePage;
