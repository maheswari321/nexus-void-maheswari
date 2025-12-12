import { motion } from "framer-motion";
import { 
  Code, Palette, Wrench, Users, Lightbulb, Target, Award, 
  Figma, Layers, Globe, Database
} from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const SkillsPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const technicalSkills = [
    { name: "UI/UX Design", icon: Palette, items: ["Wireframing", "Prototyping"] },
    { name: "Languages", icon: Code, items: ["Python", "Java (basic)"] },
    { name: "Web Technologies", icon: Globe, items: ["HTML", "CSS"] },
  ];

  const tools = [
    { name: "Figma", icon: Figma },
    { name: "Adobe Photoshop", icon: Layers },
    { name: "Adobe Illustrator", icon: Palette },
    { name: "Canva", icon: Layers },
    { name: "Unity", icon: Target },
  ];

  const softSkills = [
    { name: "Teamwork", icon: Users },
    { name: "Creative Thinking", icon: Lightbulb },
    { name: "Adaptability", icon: Target },
  ];

  const areasOfInterest = [
    { name: "UI/UX", icon: Palette },
    { name: "Graphic Design", icon: Layers },
    { name: "DBMS", icon: Database },
  ];

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
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* Technical Skills */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <Code className="w-6 h-6 text-primary" />
            Technical Skills
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-card rounded-xl p-6 group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px hsl(180 100% 50% / 0.3)",
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <motion.div
                    className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-primary/30"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <skill.icon className="w-6 h-6 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm border border-border group-hover:border-primary/50 transition-colors"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <Wrench className="w-6 h-6 text-secondary" />
            Tools
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="glass-card rounded-xl p-4 text-center group cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 25px hsl(270 91% 65% / 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ transitionDelay: `${index * 0.05}s` }}
              >
                <motion.div
                  className="w-10 h-10 mx-auto mb-2 rounded-lg bg-secondary/20 flex items-center justify-center"
                  whileHover={{ rotate: 15 }}
                >
                  <tool.icon className="w-5 h-5 text-secondary" />
                </motion.div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <Users className="w-6 h-6 text-neon-pink" />
            Soft Skills
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="glass-card rounded-xl p-6 text-center group"
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-neon-pink/20 to-primary/20 flex items-center justify-center border border-neon-pink/30 pulse-glow"
                  whileHover={{ scale: 1.1 }}
                >
                  <skill.icon className="w-8 h-8 text-neon-pink" />
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Areas of Interest */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <Target className="w-6 h-6 text-primary" />
            Areas of Interest
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {areasOfInterest.map((area, index) => (
              <motion.div
                key={area.name}
                className="gradient-border p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <area.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">{area.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Certificate */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl font-display font-bold mb-6 flex items-center gap-3">
            <Award className="w-6 h-6 text-secondary" />
            Certificate
          </h2>
          <motion.div
            className="glass-card rounded-xl p-6 border-glow-purple"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground">
                  Golang Programming
                </h3>
                <p className="text-muted-foreground">Completed course certification</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillsPage;
