import { motion } from 'framer-motion';

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-dark-950 flex items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-5xl font-bold font-display text-gradient"
        >
          AVRIXX
        </motion.div>
        
        {/* Loading Spinner */}
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full bg-primary-500"
              initial={{ y: 0 }}
              animate={{ y: -10 }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: 'reverse',
                delay: i * 0.15
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
