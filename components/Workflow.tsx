'use client';

import { motion } from 'motion/react';
import { Target, ServerCog, Code2, Rocket } from 'lucide-react';

const steps = [
  {
    title: "Discovery & Planning",
    description: "Understanding requirements, defining the scope, and planning the core features to ensure the project aligns perfectly with the end goals.",
    icon: <Target className="w-8 h-8 text-[#00f2ff]" />,
    color: "from-[#00f2ff]"
  },
  {
    title: "System Architecture",
    description: "Designing scalable database schemas, planning secure API structures, and choosing the optimal tech stack for long-term reliability.",
    icon: <ServerCog className="w-8 h-8 text-[#10b981]" />,
    color: "from-[#10b981]"
  },
  {
    title: "Development & Coding",
    description: "Writing clean, modular, and maintainable code. Focusing on responsive frontends and robust, high-performance backend logic.",
    icon: <Code2 className="w-8 h-8 text-[#39ff14]" />,
    color: "from-[#39ff14]"
  },
  {
    title: "Deployment & Launch",
    description: "Optimizing assets, configuring production servers, and deploying the application smoothly to the cloud.",
    icon: <Rocket className="w-8 h-8 text-[#00f2ff]" />,
    color: "from-[#00f2ff]"
  }
];

export default function Workflow() {
  return (
    <section id="workflow" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-[#00f2ff] text-xs font-bold uppercase tracking-widest mb-6">
            Methodology
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            Engineering <span className="text-[#00f2ff]">Process</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            How I transform complex problems into scalable digital products.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[39px] md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[#00f2ff]/20 to-transparent -translate-x-1/2" />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div 
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-16 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Node */}
                <div className="absolute left-[39px] md:left-1/2 top-8 md:top-1/2 w-4 h-4 bg-[#0a0c10] border-2 border-[#00f2ff] rounded-full -translate-x-1/2 md:-translate-y-1/2 z-10 shadow-[0_0_15px_rgba(0,242,255,0.5)]" />

                {/* Empty Half for Desktop Alignment */}
                <div className="hidden md:block w-1/2" />

                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-[80px] md:pl-0">
                  <motion.div 
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`p-8 rounded-3xl bg-[#0a0c10]/40 backdrop-blur-xl border border-white/5 hover:border-[#00f2ff]/30 transition-all duration-300 relative overflow-hidden group ${index % 2 !== 0 ? 'md:text-right' : 'md:text-left'}`}
                  >
                    {/* Background Glow */}
                    <div className={`absolute top-0 ${index % 2 === 0 ? "left-0" : "right-0"} w-40 h-40 bg-gradient-to-br ${step.color} to-transparent opacity-10 blur-3xl pointer-events-none`} />
                    
                    <div className={`flex items-center gap-5 mb-5 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                      <div className="p-4 bg-white/5 border border-white/10 rounded-2xl group-hover:bg-[#00f2ff]/10 group-hover:scale-110 transition-all duration-300">
                        {step.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#00f2ff] transition-colors">{step.title}</h3>
                    </div>
                    <p className="text-gray-400 leading-relaxed text-base md:text-lg">
                      {step.description}
                    </p>
                  </motion.div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
