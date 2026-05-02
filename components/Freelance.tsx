'use client';

import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const UpworkLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-black" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.561 3.322c-2.555 0-4.462 1.277-5.147 3.467l-.504 2.483c-1.374-1.811-2.366-4.222-2.366-4.222H7.136v6.595c0 1.573-1.275 2.848-2.847 2.848-1.573 0-2.848-1.275-2.848-2.848V5.05H0v6.595c0 2.364 1.918 4.282 4.282 4.282 1.542 0 2.894-.816 3.655-2.046l.034 1.706h3.423V11.23c0-2.025 1.034-2.848 2.138-2.848 1.058 0 1.874.82 1.874 2.848v4.512h3.423v-4.836c0-4.14-1.91-7.584-5.268-7.584zm2.146 11.23h-3.423v-4.512c0-2.028-.816-2.848-1.874-2.848-1.104 0-2.138.823-2.138 2.848v4.36l-.034.204-1.25 1.706-.034-.148V11.23c0-.84-.282-1.638-.764-2.296l.512-2.52c.44-1.42 1.638-2.247 3.284-2.247 2.164 0 3.394 2.22 3.394 4.736v5.649z" />
  </svg>
);

const FiverrLogo = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.4 6.7c0-.2.1-.3.1-.4h-1.9c-.1.2-.1.4-.2.5l-.2.7c-.1.4-.3.6-.5.7-.2.1-.4.2-.7.2h-1.4v-4h-2.1v4.1h-.9v-3.2h-2.1v3.2h-1v2.1h1v3.4c0 .5.1.9.3 1.3.2.4.5.7.8 1s.7.5 1.2.6c.5.1 1 .2 1.5.2h1.6v-2.1h-1.2c-.4 0-.7-.1-1-.2-.3-.1-.5-.2-.7-.4-.2-.2-.3-.4-.4-.7-.1-.3-.1-.6-.1-.9v-1.3h4.6v2.1h2.1v-2.1h.9l.4-.1.4-.2.4-.4.4-.7c0-.2.1-.4.1-.7l1.1-3.6zm-5.7 7.7v-2.1h1.3c.4 0 .8.1 1.1.2.3.1.5.3.7.5.2.2.3.4.4.7.1.3.1.6.1.9 0 .4 0 .7-.1 1-.1.3-.3.6-.5.8s-.4.4-.7.5c-.3.1-.7.2-1.1.2h-1.2z" />
  </svg>
);

export default function Freelance() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10b981] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#10b981]"></span>
            </span>
            Available for Freelance
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
            Hire Me <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-white">Directly</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Upwork */}
          <motion.a
            href="#"
            target="_blank"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-8 rounded-3xl bg-[#0a0c10]/40 backdrop-blur-xl border border-white/5 hover:border-[#22c55e]/50 overflow-hidden flex items-center justify-between transition-all duration-300 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#22c55e]/0 via-[#22c55e]/5 to-[#22c55e]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-16 h-16 bg-[#14a800] rounded-2xl flex items-center justify-center p-3 shadow-[0_0_20px_rgba(20,168,0,0.4)] group-hover:shadow-[0_0_30px_rgba(20,168,0,0.6)] transition-all">
                <UpworkLogo />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#14a800] transition-colors">Upwork</h3>
                <p className="text-sm text-gray-400">Top Rated Professional</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#14a800] group-hover:text-white transition-all relative z-10">
              <ArrowUpRight size={24} />
            </div>
          </motion.a>

          {/* Fiverr */}
          <motion.a
            href="#"
            target="_blank"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            className="group relative p-8 rounded-3xl bg-[#0a0c10]/40 backdrop-blur-xl border border-white/5 hover:border-[#1dbf73]/50 overflow-hidden flex items-center justify-between transition-all duration-300 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#1dbf73]/0 via-[#1dbf73]/5 to-[#1dbf73]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="flex items-center gap-6 relative z-10">
              <div className="w-16 h-16 bg-[#1dbf73] rounded-2xl flex items-center justify-center p-3 shadow-[0_0_20px_rgba(29,191,115,0.4)] group-hover:shadow-[0_0_30px_rgba(29,191,115,0.6)] transition-all">
                <FiverrLogo />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white group-hover:text-[#1dbf73] transition-colors">Fiverr</h3>
                <p className="text-sm text-gray-400">Level 2 Seller / Pro</p>
              </div>
            </div>
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-gray-400 group-hover:bg-[#1dbf73] group-hover:text-white transition-all relative z-10">
              <ArrowUpRight size={24} />
            </div>
          </motion.a>
        </div>

      </div>
    </section>
  );
}
