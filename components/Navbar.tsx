'use client';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Reviews', href: '#testimonials' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'bg-transparent py-'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <nav className={`relative flex items-center justify-between px-6 py-3 rounded-2xl transition-all duration-500 ${scrolled
          ? 'bg-[#0a0c10]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-transparent'
          }`}>
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-display font-black tracking-tighter text-white group"
          >
            M<span className="text-[#00f2ff] group-hover:animate-pulse">K</span>
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-300 hover:text-[#00f2ff] transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00f2ff] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* Resume Button */}
            <a
              href="/resume.pdf"
              target="_blank"
              className="flex items-center gap-2 px-5 py-2 text-sm font-bold bg-white/5 border border-[#00f2ff]/30 text-[#00f2ff] rounded-xl hover:bg-[#00f2ff]/10 hover:border-[#00f2ff] transition-all shadow-[0_0_15px_rgba(0,242,255,0.1)] active:scale-95"
            >
              <Download size={16} />
              Resume
            </a>
          </div>

          {/* Mobile Nav Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-[#00f2ff] transition-colors p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
            className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#0a0c10]/95 backdrop-blur-xl border border-[#00f2ff]/20 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] overflow-hidden"
            aria-label="Mobile Navigation Menu"
          >
            <div className="flex flex-col px-6 py-6 space-y-4">
              <div className="flex items-center gap-3 mb-2 px-1">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e] shadow-[0_0_8px_#22c55e]"></span>
                </span>
                <span className="text-[11px] font-bold text-gray-200 uppercase tracking-[0.2em]">Available for Hire</span>
              </div>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-200 hover:text-[#00f2ff] text-lg font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-[#00f2ff]/10 space-y-3">
                <a
                  href="/resume.pdf"
                  target="_blank"
                  className="flex items-center justify-center gap-2 w-full px-6 py-3 text-base font-bold bg-white/5 border border-[#00f2ff]/30 text-[#00f2ff] rounded-xl"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={18} />
                  Download CV
                </a>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 text-base font-semibold bg-gradient-to-r from-[#00f2ff] to-[#22c55e] text-[#0a0c10] rounded-xl shadow-[0_0_15px_rgba(0,242,255,0.2)] transition-transform hover:scale-105"
                  aria-label="Contact and Hire Me"
                >
                  Hire Me
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
