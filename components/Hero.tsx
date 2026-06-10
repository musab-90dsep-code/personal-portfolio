'use client';

import React from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { ArrowRight, Github, Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';
import { useState, useEffect } from 'react';

function TypewriterHeading() {
  const text = "Digital Excellence";
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setChars(prev => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 70);
      return () => clearInterval(interval);
    }, 400);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <span className="relative block mt-1 md:mt-2 text-[2.75rem] sm:text-5xl md:text-7xl lg:text-[6.5rem] tracking-tighter min-h-[1.2em]">
      <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
        {text}
      </span>
      <span className="absolute left-0 top-0 w-full text-transparent bg-clip-text bg-gradient-to-r from-[#00f2ff] via-[#10b981] to-[#22c55e] animate-gradient-x drop-shadow-[0_0_15px_rgba(0,242,255,0.3)]">
        {text.slice(0, chars)}
        {chars < text.length && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.6, ease: "linear" }}
            className="inline-block w-[3px] md:w-[5px] h-[0.8em] bg-[#10b981] align-middle ml-2 md:ml-4"
          />
        )}
      </span>
    </span>
  );
}

function TypewriterText() {
  const text = "A Full-Stack Developer dedicated to crafting high-performance, visually stunning web experiences.";
  const [chars, setChars] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setChars(prev => {
          if (prev >= text.length) {
            clearInterval(interval);
            return prev;
          }
          return prev + 1;
        });
      }, 30);
      return () => clearInterval(interval);
    }, 1800);
    return () => clearTimeout(timeout);
  }, []);

  const part1 = text.slice(0, Math.min(chars, 45));
  const part2 = chars > 45 ? text.slice(45, Math.min(chars, 61)) : "";
  const part3 = chars > 61 ? text.slice(61, chars) : "";

  return (
    <div className="relative text-base sm:text-lg md:text-xl text-gray-300/90 font-light max-w-lg leading-relaxed mb-8 md:mb-10 border-l-2 border-[#00f2ff]/50 pl-4 md:pl-5 ml-1">
      <div className="invisible select-none pointer-events-none" aria-hidden="true">
        {text}
      </div>
      <div className="absolute left-0 top-0 w-full pl-4 md:pl-5">
        {part1}
        {part2 && <span className="text-[#00f2ff] font-medium drop-shadow-[0_0_8px_rgba(0,242,255,0.4)]">{part2}</span>}
        {part3}
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          className="inline-block w-[2px] h-[0.9em] bg-[#00f2ff] align-middle ml-1 -mt-1"
        />
      </div>
    </div>
  );
}

export default function Hero() {
  const socialLinks = [
    { icon: Github, mobileSize: 28, desktopSize: 22, href: "https://github.com/musab-90dsep-code", label: "GitHub" },
    { icon: Linkedin, mobileSize: 28, desktopSize: 22, href: "https://www.linkedin.com/in/musabkhan-dev", label: "LinkedIn" },
    { icon: Facebook, mobileSize: 28, desktopSize: 22, href: "https://www.facebook.com/musabkhan.dev", label: "Facebook" },
    { icon: Instagram, mobileSize: 28, desktopSize: 22, href: "https://www.instagram.com/musabkhan.dev", label: "Instagram" },
    { icon: Twitter, mobileSize: 28, desktopSize: 22, href: "#", label: "Twitter" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-start overflow-hidden bg-[#0a0c10]"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/image.png"
          alt="Musab Khan"
          fill
          className="object-cover object-[center_15%] opacity-80"
          priority
          fetchPriority="high"
        />
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0c10] via-[#0a0c10]/80 md:via-[#0a0c10]/60 to-transparent md:w-[80%]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-tr from-transparent via-[#00f2ff]/5 to-transparent mix-blend-overlay pointer-events-none" />

      <div className="relative z-30 max-w-7xl mx-auto px-6 w-full pt-20 flex items-center">
        {/* Vertical Social Sidebar */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:flex flex-col items-center gap-6 mr-12"
        >
          <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-[#00f2ff]/50" />

          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              whileHover={{ scale: 1.2, y: -4 }}
              whileTap={{ scale: 0.9 }}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#00f2ff] transition-colors"
              aria-label={link.label}
            >
              <link.icon size={link.desktopSize} />
            </motion.a>
          ))}

          <div className="w-[1px] h-20 bg-gradient-to-t from-transparent to-[#00f2ff]/50" />
        </motion.div>

        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0a0c10]/60 border border-[#22c55e]/30 backdrop-blur-md mb-8 shadow-[0_0_15px_rgba(34,197,94,0.1)]"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22c55e] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#22c55e] shadow-[0_0_8px_#22c55e]"></span>
            </span>
            <span className="text-[11px] font-bold text-gray-300 uppercase tracking-[0.2em]">Available for Hire</span>
          </motion.div>

          <h1 className="text-[3.5rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[6.5rem] font-display font-extrabold text-white md:leading-[1.05] tracking-tight mb-5 md:mb-6 drop-shadow-md">
            Musab
            <br className="block md:hidden" />
            <span className="ml-1 md:ml-0">Khan</span>
            <TypewriterHeading />
          </h1>

          <TypewriterText />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-5"
          >
            <a href="#projects" className="group relative px-8 py-4 bg-gradient-to-r from-[#00f2ff] to-[#22c55e] text-[#0a0c10] font-bold rounded-xl overflow-hidden shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative flex items-center gap-2">Explore Work <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" /></span>
            </a>


          </motion.div>

          {/* Mobile Social Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex lg:hidden items-center justify-center gap-6 sm:gap-10 mt-12 w-full"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label + "-mobile"}
                whileTap={{ scale: 0.9 }}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-[#00f2ff] transition-all"
                aria-label={link.label}
              >
                <link.icon size={link.mobileSize} />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}