'use client';

import { motion } from 'motion/react';
import { Code2, Server, Layout, Globe, Cpu, Zap } from 'lucide-react';

const services = [
  {
    title: "Frontend Development",
    description: "Crafting highly interactive, responsive, and pixel-perfect user interfaces using Next.js, React, and Framer Motion.",
    icon: <Layout className="w-8 h-8 text-[#00f2ff]" />,
    gradient: "from-[#00f2ff]/20 to-transparent"
  },
  {
    title: "Backend Engineering",
    description: "Building robust, secure, and scalable server-side logic and RESTful APIs using Django, Python, and Node.js.",
    icon: <Server className="w-8 h-8 text-[#10b981]" />,
    gradient: "from-[#10b981]/20 to-transparent"
  },
  {
    title: "Full-Stack Solutions",
    description: "Developing end-to-end web applications from database architecture to frontend deployment with a focus on performance.",
    icon: <Globe className="w-8 h-8 text-[#39ff14]" />,
    gradient: "from-[#39ff14]/20 to-transparent"
  },
  {
    title: "System Architecture",
    description: "Designing scalable system structures and clean code patterns to ensure long-term maintainability and performance.",
    icon: <Cpu className="w-8 h-8 text-[#00f2ff]" />,
    gradient: "from-[#00f2ff]/20 to-transparent"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* Left Side: Sticky Content */}
          <div className="lg:w-1/3 lg:sticky lg:top-32 h-fit">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00f2ff]/10 border border-[#00f2ff]/20 text-[#00f2ff] text-xs font-bold uppercase tracking-widest mb-6">
                Expertise
              </div>
              <h2 className="text-5xl md:text-6xl font-display font-bold text-white mb-8 leading-tight">
                My Professional <span className="text-[#00f2ff]">Services</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                I combine technical engineering with creative design to deliver high-end digital products that scale.
              </p>
              
              <div className="mt-12 hidden lg:block">
                <div className="w-20 h-1 bg-gradient-to-r from-[#00f2ff] to-transparent rounded-full" />
              </div>
            </motion.div>
          </div>

          {/* Right Side: Detailed Service Cards */}
          <div className="lg:w-2/3 space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-8 md:p-12 rounded-[2.5rem] bg-[#0a0c10]/40 backdrop-blur-xl border border-white/5 hover:border-[#00f2ff]/20 transition-all duration-500 overflow-hidden flex flex-col md:flex-row gap-8 items-start shadow-2xl"
              >
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 group-hover:bg-[#00f2ff]/10 group-hover:scale-110 transition-all duration-500">
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#00f2ff] transition-colors">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed group-hover:text-gray-300 transition-colors">
                    {service.description}
                  </p>
                </div>

                {/* Decorative Number */}
                <div className="absolute top-8 right-12 text-6xl font-display font-black text-white/5 group-hover:text-[#00f2ff]/10 transition-colors pointer-events-none">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
