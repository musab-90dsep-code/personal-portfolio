import { Github, Linkedin, Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/musab-90dsep-code", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/musabkhan-dev", label: "LinkedIn" },
    { icon: Facebook, href: "https://www.facebook.com/musabkhan.dev", label: "Facebook" },
    { icon: Instagram, href: "https://www.instagram.com/musabkhan.dev", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <footer className="py-20 bg-[#0a0c10] border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#00f2ff]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <div className="text-3xl font-display font-black tracking-tighter text-white mb-8">
            M<span className="text-[#00f2ff]">K</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mb-12">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-[#00f2ff] hover:border-[#00f2ff]/50 hover:bg-[#00f2ff]/10 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-sm mb-2">
              © {new Date().getFullYear()} Musab Khan. All rights reserved.
            </p>
            <p className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">
              Engineering Digital Excellence
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
