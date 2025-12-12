import { motion } from "framer-motion";
import { BookOpen, Calendar, ArrowRight, Clock } from "lucide-react";
import ParticleBackground from "@/components/ParticleBackground";

const ArticlesPage = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const placeholderArticles = [
    {
      title: "The Future of UI/UX Design",
      excerpt: "Exploring emerging trends in user interface design and how AI is reshaping the creative process.",
      date: "Coming Soon",
      readTime: "5 min read",
      category: "Design",
    },
    {
      title: "Building Accessible Web Applications",
      excerpt: "A comprehensive guide to creating inclusive digital experiences for all users.",
      date: "Coming Soon",
      readTime: "8 min read",
      category: "Development",
    },
    {
      title: "Design Systems: A Modern Approach",
      excerpt: "How to create and maintain scalable design systems for consistent brand experiences.",
      date: "Coming Soon",
      readTime: "6 min read",
      category: "Design",
    },
    {
      title: "From Figma to Code: Bridging the Gap",
      excerpt: "Best practices for translating design mockups into pixel-perfect implementations.",
      date: "Coming Soon",
      readTime: "7 min read",
      category: "Workflow",
    },
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
              Featured Articles
            </span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Thoughts, insights, and tutorials on design and development.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6" />
        </motion.div>

        {/* Coming Soon Banner */}
        <motion.div
          variants={itemVariants}
          className="mb-12 glass-card rounded-2xl p-8 border-glow-cyan text-center"
        >
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">
            Articles Coming Soon
          </h2>
          <p className="text-muted-foreground">
            Stay tuned for in-depth articles on design, development, and creative workflows.
          </p>
        </motion.div>

        {/* Article Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {placeholderArticles.map((article, index) => (
            <motion.div
              key={article.title}
              variants={itemVariants}
              className="group glass-card rounded-xl p-6 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
              whileHover={{ 
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px -20px hsl(180 100% 50% / 0.2)",
              }}
            >
              {/* Category Badge */}
              <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-secondary/20 text-secondary mb-4">
                {article.category}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {article.title}
              </h3>

              {/* Excerpt */}
              <p className="text-muted-foreground mb-4 line-clamp-2">
                {article.excerpt}
              </p>

              {/* Meta */}
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {article.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {article.readTime}
                  </span>
                </div>
                
                <motion.span
                  className="flex items-center gap-1 text-primary opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  Read
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </div>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ArticlesPage;
