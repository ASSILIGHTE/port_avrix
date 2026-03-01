import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-dark-800/60 border border-dark-700 hover:border-primary-500/50 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-6 sm:p-8">
        {/* Project Number */}
        <div className="absolute top-4 right-4 text-6xl font-bold text-dark-700/50 -z-10">
          {String(index + 1).padStart(2, '0')}
        </div>

        {/* Title */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 group-hover:text-primary-400 transition-colors duration-300">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-slate-400 mb-6 leading-relaxed">
          {project.desc}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags && project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-3 py-1 text-xs font-medium bg-dark-700/50 text-slate-300 rounded-full border border-dark-600"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <motion.a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary-500/20 text-primary-400 rounded-xl hover:bg-primary-500/30 transition-all duration-300 text-sm font-medium"
            >
              <ExternalLink size={16} />
              Live Demo
            </motion.a>
          )}
          {project.githubUrl && (
            <motion.a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-4 py-2 border border-dark-600 text-slate-300 rounded-xl hover:border-primary-500/50 hover:text-white transition-all duration-300 text-sm font-medium"
            >
              <Github size={16} />
              Code
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
