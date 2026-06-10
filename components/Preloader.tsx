'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // 2.5 seconds preloader

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.8, ease: "easeInOut" }
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a0c10]"
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#00f2ff]/5 rounded-full blur-[120px]" />
            <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-[#22c55e]/5 rounded-full blur-[100px]" />
          </div>

          {/* Name Animation */}
          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mb-4"
            >
              <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#10b981] to-[#22c55e] drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">
                Musab Khan
              </h1>
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-[#00f2ff] to-[#22c55e]"
              />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-6 text-[10px] font-bold text-gray-500 uppercase tracking-[0.4em]"
            >
              Initializing Digital Space
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
