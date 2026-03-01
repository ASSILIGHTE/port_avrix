import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download, ExternalLink, Code2, Database, Brain, Globe, Smartphone, Server, Cloud } from 'lucide-react';
import { FaPython, FaPhp, FaJs, FaJava, FaReact, FaNodeJs, FaLaravel } from 'react-icons/fa';
import { SiCplusplus, SiMysql, SiTensorflow, SiPytorch, SiScikitlearn, SiNextdotjs, SiTailwindcss, SiDocker } from 'react-icons/si';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import ScrollToTop from './components/ScrollToTop';
import Loading from './components/Loading';

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Programming Languages Data
const languages = [
  { name: "Python", icon: <FaPython size={32} />, level: 90, color: '#3776AB' },
  { name: "PHP", icon: <FaPhp size={32} />, level: 85, color: '#777BB4' },
  { name: "JavaScript", icon: <FaJs size={32} />, level: 85, color: '#F7DF1E' },
  { name: "Java", icon: <FaJava size={32} />, level: 75, color: '#007396' },
  { name: "C++", icon: <SiCplusplus size={32} />, level: 70, color: '#00599C' },
  { name: "React", icon: <FaReact size={32} />, level: 85, color: '#61DAFB' },
  { name: "Node.js", icon: <FaNodeJs size={32} />, level: 80, color: '#339933' },
  { name: "Laravel", icon: <FaLaravel size={32} />, level: 85, color: '#FF2D20' },
];

// Technical Skills Data
const technicalSkills = [
  { name: "Machine Learning", icon: Brain, desc: "Neural Networks, SVM, Random Forest" },
  { name: "Computer Vision", icon: Code2, desc: "ResNet, Image Classification" },
  { name: "Web Development", icon: Globe, desc: "React, Laravel, REST API" },
  { name: "Data Engineering", icon: Database, desc: "MySQL, Data Pipeline" },
  { name: "Mobile Development", icon: Smartphone, desc: "React Native" },
  { name: "System Architecture", icon: Server, desc: "Microservices, Cloud" },
];

// Additional Skills/Tools
const tools = [
  { name: "TensorFlow", icon: SiTensorflow },
  { name: "PyTorch", icon: SiPytorch },
  { name: "Scikit-learn", icon: SiScikitlearn },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Docker", icon: SiDocker },
  { name: "MySQL", icon: SiMysql },
];

// Projects Data
const projects = [
  {
    title: "G-Predict (Future Salary Forecasting)",
    desc: "Machine Learning-based salary prediction system using official statistical data from BPS (Badan Pusat Statistik) to forecast future income trends and economic indicators.",
    tags: ["Machine Learning", "Python", "Data Analysis"],
    
  },
  {
    title: "Oil Production Prediction System",
    desc: "Random Forest model with hyperparameter optimization for accurate daily production forecasting in industrial settings.",
    tags: ["Random Forest", "Python", "Forecasting"],
    
  },
  {
    title: "Cyber Crime Reporting System (STTP)",
    desc: "Secure Laravel-based reporting system with digital evidence management and comprehensive audit trail.",
    tags: ["Laravel", "PHP", "Security"],

  },
  {
    title: "Sentiment Analysis on Game Reviews",
    desc: "SVM-based sentiment classification system for analyzing public perception and reviews.",
    tags: ["SVM", "NLP", "Python"],
  
  },
  {
    title: "Roblox Game Development",
    desc: "Interactive multi-level game using structured Game Development Life Cycle methodology.",
    tags: ["Game Dev", "Lua", "Design"],
  
  },
];

// Education Data
const education = [
  {
    degree: "Informatics Engineering",
    school: "University Name",
    year: "2020 - Present",
    desc: "Focus on Machine Learning and Software Engineering",
  },
];

export default function Portfolio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen bg-dark-950 text-white overflow-x-hidden">
      <Navbar />
      <ScrollToTop />

      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#020617_100%)]" />
      </div>

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative inline-block mb-8"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-purple-500 blur-2xl opacity-30 animate-pulse-slow" />
            <img
              src="/profile.png"
              alt="Aufariq Rajabi F"
              className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-primary-500/30 shadow-2xl"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold font-display mb-4"
          >
            Aufariq <span className="text-gradient">Rajabi F</span>
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg sm:text-xl text-slate-400 mb-8 max-w-2xl mx-auto"
          >
            Informatics Engineer • Machine Learning Developer • Web System Developer
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-center gap-4 mb-10"
          >
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-xl bg-dark-800 text-slate-400 hover:text-white hover:bg-dark-700 transition-all duration-300"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-xl bg-dark-800 text-slate-400 hover:text-white hover:bg-dark-700 transition-all duration-300"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:aufariq@example.com"
              whileHover={{ scale: 1.1, y: -3 }}
              className="p-3 rounded-xl bg-dark-800 text-slate-400 hover:text-white hover:bg-dark-700 transition-all duration-300"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary inline-flex items-center justify-center gap-2"
            >
              View Projects
              <ExternalLink size={18} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-secondary inline-flex items-center justify-center gap-2"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-slate-600 flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-slate-0" />
          </motion.div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-24 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title text-center mb-12">
              About Me
            </motion.h2>

            <motion.div variants={fadeInUp} className="card">
              <p className="text-slate-300 leading-relaxed text-lg">
                I specialize in building data-driven systems using Machine Learning
                and modern web technologies. My focus includes predictive analytics,
                industrial production forecasting, digital evidence management systems,
                and structured information architecture.
              </p>
              <p className="text-slate-300 leading-relaxed text-lg mt-4">
                With a strong foundation in both software engineering and data science,
                I create intelligent solutions that solve real-world problems.
                I'm passionate about leveraging AI and machine learning to drive
                innovation and efficiency.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-dark-700">
                {[
                  { number: '5+', label: 'Projects' },
                  { number: '', label: '' },
                  { number: '20+', label: 'Technologies' },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gradient">{stat.number}</div>
                    <div className="text-sm text-slate-400">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 px-4 bg-dark-900/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title text-center mb-4">
              Skills & Technologies
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle text-center mb-16">
              The tools and technologies I use to bring ideas to life
            </motion.p>

            {/* Programming Languages */}
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Code2 className="text-primary-400" size={24} />
                Programming Languages
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {languages.map((lang, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group card hover:scale-105"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div style={{ color: lang.color }} className="transition-transform group-hover:scale-110">
                        {lang.icon}
                      </div>
                      <h4 className="text-lg font-semibold">{lang.name}</h4>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${lang.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="h-2 rounded-full bg-gradient-to-r from-primary-500 to-purple-500"
                      />
                    </div>
                    <p className="text-sm text-slate-400 mt-2">{lang.level}% Proficiency</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            
            <motion.div variants={fadeInUp} className="mb-16">
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Brain className="text-primary-400" size={24} />
                Technical Skills
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technicalSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="card group hover:border-primary-500/50"
                  >
                    <skill.icon className="w-10 h-10 text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                    <h4 className="text-lg font-semibold mb-2">{skill.name}</h4>
                    <p className="text-slate-400 text-sm">{skill.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Tools & Frameworks */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Cloud className="text-primary-400" size={24} />
                Tools & Frameworks
              </h3>
              <div className="flex flex-wrap gap-4">
                {tools.map((tool, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    className="p-4 rounded-xl bg-dark-800 border border-dark-700 hover:border-primary-500/50 transition-all duration-300"
                  >
                    <tool.icon size={28} className="text-slate-300 hover:text-primary-400" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title text-center mb-4">
              Featured Projects
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle text-center mb-16">
              Some of the projects I've worked on
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 px-4 bg-dark-900/50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="section-title text-center mb-4">
              Get In Touch
            </motion.h2>
            <motion.p variants={fadeInUp} className="section-subtitle text-center mb-16">
              Have a project in mind? Let's talk about it.
            </motion.p>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <motion.div variants={fadeInUp} className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Let's work together</h3>
                  <p className="text-slate-400">
                    I'm always interested in hearing about new projects and opportunities.
                    Feel free to reach out if you'd like to collaborate or just say hi.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { icon: Mail, label: 'Email', value: 'avrixx@gmail.com' },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-dark-800/50 border border-dark-700"
                    >
                      <div className="p-3 rounded-xl bg-primary-500/20 text-primary-400">
                        <item.icon size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-slate-400">{item.label}</p>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div variants={fadeInUp}>
                <ContactForm />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
