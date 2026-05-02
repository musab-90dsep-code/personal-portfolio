'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Quote, ChevronLeft, ChevronRight, Plus, X, Send } from 'lucide-react';

const initialTestimonials = [
  {
    name: "Elena Volkov",
    role: "CTO, DATAFLOW INC",
    comment: "Musab is a true full-stack expert who understands both frontend UX and backend architecture. He delivered our complex SaaS platform with impeccable quality and scalability.",
    color: "text-[#10b981]",
    bg: "bg-[#10b981]/10"
  },
  {
    name: "Marcus Thorne",
    role: "Creative Director, ARTECH",
    comment: "The level of detail Musab puts into motion and UI is staggering. He doesn't just build components; he engineers digital experiences that truly wow the users.",
    color: "text-[#00f2ff]",
    bg: "bg-[#00f2ff]/10"
  },
  {
    name: "Sofia Rodriguez",
    role: "Founder, BLOOM E-COMMERCE",
    comment: "From database schemas to pixel-perfect layouts, Musab handled everything. Our site's performance increased by 80% after his optimization. A brilliant architect.",
    color: "text-[#39ff14]",
    bg: "bg-[#39ff14]/10"
  }
];

export default function Testimonials() {
  const [list, setList] = useState(initialTestimonials);
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', role: '', comment: '' });

  const nextStep = useCallback(() => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % list.length);
  }, [list.length]);

  const prevStep = useCallback(() => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + list.length) % list.length);
  }, [list.length]);

  useEffect(() => {
    const timer = setInterval(nextStep, 5000);
    return () => clearInterval(timer);
  }, [nextStep]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;

    const newReview = {
      ...formData,
      role: formData.role || "Client",
      color: "text-[#00f2ff]",
      bg: "bg-[#00f2ff]/10"
    };

    setList([newReview, ...list]);
    setIndex(0);
    setFormData({ name: '', role: '', comment: '' });
    setIsModalOpen(false);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
      scale: 0.95
    })
  };

  return (
    <section id="testimonials" className="py-24 bg-[#0a0c10] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Side: Static Content */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-6xl md:text-8xl font-display font-bold text-white mb-2 tracking-tighter">
                Client
              </h2>
              <h2 className="text-6xl md:text-8xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#00f2ff] mb-8 tracking-tighter flex items-center gap-4">
                Voices <span className="text-3xl">↗</span>
              </h2>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-sm">
                Trusted by industry leaders worldwide. Delivering <span className="text-white font-medium">premium</span> solutions that drive business growth.
              </p>

              <button 
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-[#00f2ff]/30 text-[#00f2ff] font-bold rounded-xl hover:bg-[#00f2ff]/10 transition-all mb-12 active:scale-95"
              >
                <Plus size={18} />
                Leave a Review
              </button>

              {/* Navigation Controls */}
              <div className="flex items-center gap-4">
                <button 
                  onClick={prevStep}
                  className="p-4 rounded-full border border-white/10 text-gray-400 hover:text-[#00f2ff] transition-all"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  onClick={nextStep}
                  className="p-4 rounded-full border border-white/10 text-gray-400 hover:text-[#00f2ff] transition-all"
                >
                  <ChevronRight size={20} />
                </button>
                
                <div className="flex gap-2 ml-4">
                  {list.map((_, i) => (
                    <div 
                      key={i}
                      className={`h-1 rounded-full transition-all duration-500 ${
                        i === index ? 'w-8 bg-[#10b981]' : 'w-2 bg-white/10'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Animated Slider Card */}
          <div className="w-full lg:w-2/3 relative min-h-[450px] flex items-center justify-center">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="w-full max-w-2xl bg-white/[0.03] backdrop-blur-xl border border-white/5 rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Quote size={120} className={list[index].color} />
                </div>
                
                <div className="relative z-10">
                  <div className={`p-4 ${list[index].bg} rounded-2xl inline-block mb-10 border border-white/10`}>
                    <Quote className={`w-8 h-8 ${list[index].color}`} />
                  </div>

                  <p className="text-gray-200 text-xl md:text-2xl leading-relaxed italic mb-12 font-medium">
                    "{list[index].comment}"
                  </p>

                  <div className="pt-10 border-t border-white/5 flex items-center gap-6">
                    <div className={`relative w-16 h-16 rounded-2xl overflow-hidden border border-white/10`}>
                      <div className={`absolute inset-0 ${list[index].bg} opacity-20`} />
                      <div className={`w-full h-full flex items-center justify-center ${list[index].color} text-xl font-black bg-[#0a0c10]`}>
                        {list[index].name.charAt(0)}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-white text-xl font-bold">{list[index].name}</h4>
                      <p className={`${list[index].color} font-mono text-xs tracking-widest uppercase mt-1`}>
                        {list[index].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>

      {/* Review Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-[#0a0c10]/90 backdrop-blur-md"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-lg bg-[#0a0c10] border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl backdrop-blur-2xl"
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-3xl font-display font-bold text-white mb-2">Leave a Review</h3>
              <p className="text-gray-400 mb-8">Share your experience working with me.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Full Name</label>
                  <input 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    type="text" 
                    placeholder="Musab Khan"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Role / Company</label>
                  <input 
                    value={formData.role}
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                    type="text" 
                    placeholder="e.g. CTO, Artech"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Review Message</label>
                  <textarea 
                    required
                    value={formData.comment}
                    onChange={(e) => setFormData({...formData, comment: e.target.value})}
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all resize-none"
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full py-5 bg-gradient-to-r from-[#00f2ff] to-[#39ff14] text-[#0a0c10] font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
                >
                  Submit Review <Send size={20} />
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
