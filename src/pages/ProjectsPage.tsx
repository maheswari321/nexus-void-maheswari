import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingCart, Utensils, Car, Image } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const ProjectsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -10 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const projects = [
    {
      title: "E-Commerce Website",
      category: "UI/UX Design",
      description: "Designed complete e-commerce UI/UX with modern product pages and cart flow. Focus on intuitive navigation and clean visual style.",
      icon: ShoppingCart,
      github: "https://github.com/maheswari321/E---commerce-website-UI-UX-",
      color: "primary",
    },
    {
      title: "Fresh Juice Poster",
      category: "Graphic Design",
      description: "Clean UI/UX layout in Figma focusing on consistency and easy flow. Vibrant visual design with attention to typography and color harmony.",
      icon: Image,
      github: "#",
      color: "secondary",
    },
    {
      title: "Food Poster",
      category: "Graphic Design",
      description: "User-friendly UI/UX design in Figma with clean layouts and smooth navigation. Engaging visual storytelling through design.",
      icon: Utensils,
      github: "https://github.com/maheswari321/Poster",
      color: "pink",
    },
    {
      title: "Smart Tollgate System",
      category: "UX Design",
      description: "FASTag/RFID system for automated toll deduction. Features camera-based tracking and fraud prevention. Supports FASTag, online payment & cash.",
      icon: Car,
      github: "#",
      color: "blue",
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          bg: "from-primary/20 to-primary/5",
          border: "border-primary/30 hover:border-primary/60",
          icon: "text-primary",
          glow: "group-hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]",
        };
      case "secondary":
        return {
          bg: "from-secondary/20 to-secondary/5",
          border: "border-secondary/30 hover:border-secondary/60",
          icon: "text-secondary",
          glow: "group-hover:shadow-[0_0_30px_hsl(270_91%_65%/0.3)]",
        };
      case "pink":
        return {
          bg: "from-neon-pink/20 to-neon-pink/5",
          border: "border-neon-pink/30 hover:border-neon-pink/60",
          icon: "text-neon-pink",
          glow: "group-hover:shadow-[0_0_30px_hsl(330_100%_60%/0.3)]",
        };
      case "blue":
        return {
          bg: "from-neon-blue/20 to-neon-blue/5",
          border: "border-neon-blue/30 hover:border-neon-blue/60",
          icon: "text-neon-blue",
          glow: "group-hover:shadow-[0_0_30px_hsl(210_100%_60%/0.3)]",
        };
      default:
        return {
          bg: "from-primary/20 to-primary/5",
          border: "border-primary/30 hover:border-primary/60",
          icon: "text-primary",
          glow: "group-hover:shadow-[0_0_30px_hsl(180_100%_50%/0.3)]",
        };
    }
  };

  return (
    <div className="relative min-h-screen pt-24 pb-16">
      <ParticleBackground variant="sparse" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header */}
        <motion.div variants={cardVariants} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              My Projects
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A collection of my design and development work showcasing UI/UX expertise and creative solutions.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            
            return (
              <motion.div
                key={project.title}
                variants={cardVariants}
                className={`group relative glass-card rounded-2xl overflow-hidden border ${colors.border} ${colors.glow} transition-all duration-500`}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 5,
                  rotateX: 5,
                }}
                style={{ 
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-50`} />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${colors.bg} flex items-center justify-center border border-border`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <project.icon className={`w-7 h-7 ${colors.icon}`} />
                    </motion.div>
                    
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-muted ${colors.icon}`}>
                      {project.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 text-foreground text-sm font-medium transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                    <motion.button
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${colors.border} ${colors.icon} text-sm font-medium transition-colors`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </motion.button>
                  </div>
                </div>

                {/* Hover glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(180 100% 50% / 0.06), transparent 40%)`,
                  }}
                />
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
