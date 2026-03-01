import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:aufariq@example.com', label: 'Email' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-900/80 border-t border-dark-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <motion.a
              href="#home"
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold font-display text-gradient inline-block mb-4"
            >
              AVRIXX
            </motion.a>
            <p className="text-slate-400 text-sm">
              Building data-driven systems using Machine Learning and modern web technologies.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 rounded-xl bg-dark-800 text-slate-400 hover:text-primary-400 hover:bg-dark-700 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon size={20} />
              </motion.a>
            ))}
          </div>

          {/* Back to Top */}
          <div className="text-center md:text-right">
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-xl bg-primary-500/20 text-primary-400 hover:bg-primary-500/30 transition-all duration-300"
              aria-label="Back to top"
            >
              <ArrowUp size={20} />
            </motion.button>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-dark-800 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Aufariq Rajabi F. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
