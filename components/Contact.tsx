'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Send, Mail, MapPin, Globe, ArrowRight, Phone } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-transparent relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-white">
              Launch a <span className="text-[#00f2ff]">Mission</span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 leading-relaxed">
              Ready to defy digital gravity? Let's collaborate on something extraordinary.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  icon: <Mail />,
                  label: "Email",
                  value: "musabbinsharif321@gmail.com",
                  href: "mailto:musabbinsharif321@gmail.com",
                  color: "text-[#00f2ff]"
                },
                {
                  icon: <Phone />,
                  label: "Phone",
                  value: "+880 1335357855",
                  href: "tel:+8801335357855",
                  color: "text-[#10b981]"
                },
                {
                  icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" /></svg>,
                  label: "WhatsApp",
                  value: "Message Me",
                  href: "https://wa.me/8801349345353",
                  color: "text-[#25D366]"
                },
                {
                  icon: <MapPin />,
                  label: "Location",
                  value: "Dilu Road, Eskaton, Dhaka",
                  href: "https://www.google.com/maps/search/?api=1&query=Dilu+Road+Eskaton+Dhaka",
                  color: "text-[#ff0055]"
                }
              ].map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  target={item.href?.startsWith('http') ? "_blank" : undefined}
                  rel={item.href?.startsWith('http') ? "noopener noreferrer" : undefined}
                  className={`group p-6 rounded-3xl bg-[#0a0c10]/40 backdrop-blur-xl border border-white/5 hover:border-white/10 transition-all ${item.href ? 'cursor-pointer hover:bg-white/5' : 'cursor-default'}`}
                >
                  <div className={`${item.color} mb-4 group-hover:scale-110 transition-transform`}>{item.icon}</div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">{item.label}</p>
                  <p className="text-white font-medium text-sm break-all">{item.value}</p>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Background Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-[#00f2ff]/20 to-[#39ff14]/20 blur-3xl opacity-30 rounded-[3rem]" />

            <div className="relative bg-[#0a0c10]/60 backdrop-blur-2xl p-10 rounded-[3rem] border border-white/5 shadow-2xl">
              <ContactForm />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [state, setState] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setState('idle');

    const formData = new FormData(e.currentTarget);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "YOUR_ACCESS_KEY_HERE";
    formData.append("access_key", accessKey);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setState('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setState('error');
      }
    } catch (error) {
      setState('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (state === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 space-y-6"
      >
        <div className="w-20 h-20 bg-[#39ff14]/20 rounded-full flex items-center justify-center mx-auto text-[#39ff14]">
          <Send size={40} />
        </div>
        <h3 className="text-3xl font-bold text-white">Mission Received!</h3>
        <p className="text-gray-400">Your message has been successfully transmitted. I'll get back to you shortly.</p>
        <button
          onClick={() => setState('idle')}
          className="text-[#00f2ff] hover:underline font-medium"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form className="space-y-8" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Name</label>
          <input
            name="name"
            type="text"
            required
            className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all"
            placeholder="Musab Khan"
          />
        </div>
        <div className="space-y-3">
          <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Email</label>
          <input
            name="email"
            type="email"
            required
            className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all"
            placeholder="hello@world.com"
          />
        </div>
      </div>

      <div className="space-y-3">
        <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Mission Brief</label>
        <textarea
          name="message"
          rows={4}
          required
          className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all resize-none"
          placeholder="Tell me about your project..."
        />
      </div>

      <button
        disabled={isSubmitting}
        className="group w-full py-5 bg-white text-black font-bold rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Transmitting...' : 'Initiate Project'}
        {!isSubmitting && <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />}
      </button>

      {state === 'error' && (
        <p className="text-red-500 text-sm text-center">Something went wrong. Please try again later.</p>
      )}
    </form>
  );
}
