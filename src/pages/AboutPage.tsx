import { motion } from "framer-motion";
import { MapPin, Phone, Mail, GraduationCap, Calendar } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const AboutPage = () => {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const education = [
    {
      degree: "B.E – Computer Science and Design",
      institution: "Kongu Engineering College",
      period: "2022–Present",
      grade: "CGPA: 6.99/10",
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Government Higher Secondary School",
      period: "2021–2022",
      grade: "71.3%",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Government Higher Secondary School",
      period: "2019–2020",
      grade: "75.4%",
    },
  ];

  const contactInfo = [
    { icon: Phone, label: "Phone", value: "8608874232" },
    { icon: Mail, label: "Email", value: "mdmd212005@gmail.com" },
    { icon: MapPin, label: "Location", value: "Tamil Nadu, India" },
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
              About Me
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </motion.div>

        {/* About Text */}
        <motion.div
          variants={itemVariants}
          className="mb-16"
        >
          <motion.div
            className="glass-card rounded-2xl p-8 md:p-12 border-glow-cyan"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              "Motivated and creative <span className="text-primary font-semibold">Computer Science and Design student</span> with 
              a strong foundation in programming, UI/UX design, and software development. Strong 
              <span className="text-secondary font-semibold"> problem-solving ability</span>, a keen eye for aesthetics, 
              and a collaborative mindset, with a focus on delivering <span className="text-primary font-semibold">impactful user experiences</span>. 
              Seeking opportunities to apply interdisciplinary skills in real-world projects and dynamic team environments."
            </p>
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div variants={itemVariants} className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span>Education</span>
          </h2>

          <div className="grid gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-6 relative overflow-hidden group"
                whileHover={{ scale: 1.02, x: 10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary to-secondary" />
                
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {edu.degree}
                  </h3>
                  <p className="text-muted-foreground mb-2">{edu.institution}</p>
                  <div className="flex flex-wrap gap-4 text-sm">
                    <span className="flex items-center gap-1 text-primary">
                      <Calendar className="w-4 h-4" />
                      {edu.period}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-secondary/20 text-secondary font-medium">
                      {edu.grade}
                    </span>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div variants={itemVariants}>
          <h2 className="text-2xl sm:text-3xl font-display font-bold mb-8 flex items-center gap-3">
            <Mail className="w-8 h-8 text-secondary" />
            <span>Contact Details</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="glass-card rounded-xl p-6 text-center group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px hsl(180 100% 50% / 0.2)",
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <info.icon className="w-6 h-6 text-primary" />
                </motion.div>
                <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                <p className="text-foreground font-medium break-all">{info.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
