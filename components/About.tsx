'use client';

import { motion } from 'motion/react';
import { TerminalSquare, Layout, Cpu, Globe, ArrowRight } from 'lucide-react';

const stats = [
  { icon: <TerminalSquare size={20} />, title: "Backend Mastery", desc: "Django & Python Expert", color: "from-[#00f2ff] to-[#00d1ff]" },
  { icon: <Layout size={20} />, title: "Frontend Magic", desc: "Next.js & Framer Motion", color: "from-[#22c55e] to-[#10b981]" },
  { icon: <Cpu size={20} />, title: "System Design", desc: "Scalable Architecture", color: "from-[#00f2ff] to-[#22c55e]" },
  { icon: <Globe size={20} />, title: "Global Vision", desc: "Modern Web Standards", color: "from-[#22c55e] to-[#00f2ff]" }
];

export default function About() {
  return (
    <section id="about" className="py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#00f2ff]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-[#22c55e]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Visual Side (Interactive Image/Box) */}
          <div className="flex-1 relative w-full aspect-square max-w-md mx-auto lg:mx-0">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00f2ff]/20 to-[#22c55e]/20 rounded-[3rem] blur-2xl animate-pulse" />

            {/* Spinning Rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 border-2 border-dashed border-[#00f2ff]/30 rounded-[3.5rem]"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-6 border-2 border-dashed border-[#22c55e]/30 rounded-[3rem]"
            />

            {/* Main Interactive Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute inset-12 bg-[#0a0c10]/80 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] flex flex-col items-center justify-center p-10 shadow-[0_0_50px_rgba(0,0,0,0.5)] group"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-[#00f2ff] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <Cpu size={80} className="text-[#00f2ff] relative z-10 transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="mt-8 text-center">
                <h3 className="text-2xl font-bold text-white mb-2">The Code Architect</h3>
                <p className="text-gray-400 text-sm font-mono tracking-widest uppercase">System Architect</p>
              </div>
            </motion.div>

            {/* Small Floating Chips */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-[#00f2ff] font-mono text-xs"
            >
              &lt;innovation /&gt;
            </motion.div>
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-4 -left-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 text-[#22c55e] font-mono text-xs"
            >
              high_performance: true
            </motion.div>
          </div>

          {/* Text Side */}
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-[#00f2ff] text-xs font-bold uppercase tracking-widest mb-6">
                About Me
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-8 leading-tight">
                Crafting Digital <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#10b981] to-[#22c55e]">Masterpieces</span>
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-10">
                I am <span className="text-white font-semibold">Musab Khan</span>, a digital architect obsessed with performance and aesthetics. I don't just build websites; I engineer <span className="text-[#00f2ff]">immersive experiences</span> that push the boundaries of what's possible on the modern web.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                {stats.map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    className="p-5 rounded-2xl bg-[#0a0c10]/40 border border-white/5 hover:border-[#00f2ff]/30 transition-all group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${item.color} p-2.5 mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                      <div className="text-[#0a0c10]">{item.icon}</div>
                    </div>
                    <h4 className="text-white font-bold mb-1">{item.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </div>

              <motion.a
                whileHover={{ gap: '1.5rem' }}
                href="#contact"
                className="inline-flex items-center gap-4 text-[#00f2ff] font-bold group"
              >
                Let's Build Something Iconic
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
