'use client';

import { motion } from 'motion/react';
import { Code2, Database, Layout, TerminalSquare, Cpu, Globe, Rocket, Shield } from 'lucide-react';

const skills = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    icon: <Layout className="text-[#00f2ff]" />
  },
  {
    category: "Backend",
    items: ["Django", "Python", "Node.js", "Express", "RESTful APIs"],
    icon: <Database className="text-[#39ff14]" />
  },
  {
    category: "Database",
    items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"],
    icon: <Cpu className="text-purple-400" />
  },
  {
    category: "Security & Tools",
    items: ["Git", "Linux", "CI/CD", "Jest", "Postman"],
    icon: <Shield className="text-amber-400" />
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-transparent overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Expertise <span className="text-[#39ff14]">&</span> Tools</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">Mastering the stack to build the future.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group p-8 rounded-[2rem] bg-[#0a0c10]/40 backdrop-blur-xl border border-white/5 hover:border-[#00f2ff]/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Floating Glow Behind Icon */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl group-hover:bg-[#00f2ff]/10 transition-colors" />

              <div className="mb-8 p-4 rounded-2xl bg-white/5 inline-block group-hover:scale-110 transition-transform duration-500 shadow-2xl">
                {skillGroup.icon}
              </div>

              <h3 className="text-xl font-bold font-display mb-6 text-white">{skillGroup.category}</h3>

              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item) => (
                  <motion.span
                    key={item}
                    whileHover={{ scale: 1.1 }}
                    className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:border-[#39ff14]/30 hover:text-[#39ff14] transition-all cursor-default"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
