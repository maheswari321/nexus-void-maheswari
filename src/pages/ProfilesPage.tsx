import { motion } from "framer-motion";
import { Github, Code2, Trophy, Terminal, ExternalLink } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const ProfilesPage = () => {
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
    hidden: { opacity: 0, scale: 0.9, rotateY: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const profiles = [
    {
      name: "GitHub",
      username: "maheswari321",
      url: "https://github.com/maheswari321",
      icon: Github,
      description: "Check out my repositories and contributions",
      color: "primary",
      stats: ["Public Repos", "Contributions", "Projects"],
    },
    {
      name: "LeetCode",
      username: "Coming Soon",
      url: "#",
      icon: Code2,
      description: "Problem solving and competitive programming",
      color: "secondary",
      stats: ["Problems Solved", "Contest Rating", "Badges"],
    },
    {
      name: "GeeksforGeeks",
      username: "Coming Soon",
      url: "#",
      icon: Terminal,
      description: "Data structures and algorithms practice",
      color: "pink",
      stats: ["Problems", "Score", "Rank"],
    },
    {
      name: "HackerRank",
      username: "Coming Soon",
      url: "#",
      icon: Trophy,
      description: "Skill certifications and challenges",
      color: "blue",
      stats: ["Badges", "Certificates", "Score"],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          gradient: "from-primary/30 to-primary/10",
          border: "border-primary/40",
          icon: "text-primary",
          hover: "hover:shadow-[0_0_40px_hsl(180_100%_50%/0.4)]",
          bg: "bg-primary/10",
        };
      case "secondary":
        return {
          gradient: "from-secondary/30 to-secondary/10",
          border: "border-secondary/40",
          icon: "text-secondary",
          hover: "hover:shadow-[0_0_40px_hsl(270_91%_65%/0.4)]",
          bg: "bg-secondary/10",
        };
      case "pink":
        return {
          gradient: "from-neon-pink/30 to-neon-pink/10",
          border: "border-neon-pink/40",
          icon: "text-neon-pink",
          hover: "hover:shadow-[0_0_40px_hsl(330_100%_60%/0.4)]",
          bg: "bg-neon-pink/10",
        };
      case "blue":
        return {
          gradient: "from-neon-blue/30 to-neon-blue/10",
          border: "border-neon-blue/40",
          icon: "text-neon-blue",
          hover: "hover:shadow-[0_0_40px_hsl(210_100%_60%/0.4)]",
          bg: "bg-neon-blue/10",
        };
      default:
        return {
          gradient: "from-primary/30 to-primary/10",
          border: "border-primary/40",
          icon: "text-primary",
          hover: "hover:shadow-[0_0_40px_hsl(180_100%_50%/0.4)]",
          bg: "bg-primary/10",
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
              Coding Profiles
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Connect with me on various coding platforms and explore my problem-solving journey.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Profile Cards Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {profiles.map((profile, index) => {
            const colors = getColorClasses(profile.color);
            
            return (
              <motion.a
                key={profile.name}
                href={profile.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                className={`group relative overflow-hidden rounded-2xl border ${colors.border} ${colors.hover} transition-all duration-500`}
                whileHover={{ 
                  scale: 1.03,
                  rotateY: 5,
                  rotateX: 2,
                }}
                style={{
                  perspective: "1000px",
                  transformStyle: "preserve-3d",
                }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient}`} />
                
                {/* Blur backdrop */}
                <div className="absolute inset-0 backdrop-blur-xl" />
                
                {/* Content */}
                <div className="relative p-8">
                  {/* Icon and Name */}
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      className={`w-16 h-16 rounded-xl ${colors.bg} flex items-center justify-center border ${colors.border}`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <profile.icon className={`w-8 h-8 ${colors.icon}`} />
                    </motion.div>
                    <div>
                      <h3 className="text-2xl font-display font-bold text-foreground">
                        {profile.name}
                      </h3>
                      <p className={`text-sm ${colors.icon}`}>@{profile.username}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6">
                    {profile.description}
                  </p>

                  {/* Stats Preview */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {profile.stats.map((stat) => (
                      <span
                        key={stat}
                        className="px-3 py-1 rounded-full bg-muted/50 text-xs text-muted-foreground"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>

                  {/* Visit Link */}
                  <motion.div
                    className={`flex items-center gap-2 ${colors.icon} font-medium`}
                    initial={{ x: 0 }}
                    whileHover={{ x: 5 }}
                  >
                    Visit Profile
                    <ExternalLink className="w-4 h-4" />
                  </motion.div>
                </div>

                {/* Animated border glow */}
                <motion.div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    background: `linear-gradient(135deg, transparent, hsl(180 100% 50% / 0.1), transparent)`,
                    backgroundSize: "200% 200%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfilesPage;
