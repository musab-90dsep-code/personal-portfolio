'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Lock, Plus, Send, LogOut, ArrowLeft, AlertCircle, CheckCircle, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';

export default function AdminPanel() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [reviews, setReviews] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Form states
  const [formData, setFormData] = useState({ name: '', role: '', comment: '', image: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Check if session password exists
  useEffect(() => {
    const savedPassword = sessionStorage.getItem('admin_pass');
    if (savedPassword) {
      setPassword(savedPassword);
      verifyAndLoad(savedPassword);
    }
  }, []);

  const verifyAndLoad = async (passToVerify: string) => {
    setIsLoading(true);
    setLoginError('');
    try {
      const res = await fetch('/api/reviews', {
        headers: {
          'x-admin-password': passToVerify
        }
      });
      
      const data = await res.json();
      if (res.status === 401) {
        setLoginError('Incorrect password. Access denied.');
        sessionStorage.removeItem('admin_pass');
        setIsAuthenticated(false);
      } else if (Array.isArray(data)) {
        setIsAuthenticated(true);
        setReviews(data);
        sessionStorage.setItem('admin_pass', passToVerify);
      } else {
        setLoginError('Failed to fetch reviews.');
      }
    } catch (err) {
      setLoginError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) return;
    verifyAndLoad(password);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('admin_pass');
    setPassword('');
    setIsAuthenticated(false);
    setReviews([]);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, image: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddReview = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.comment) return;
    setIsSubmitting(true);
    setFormStatus('idle');

    try {
      const res = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-admin-password': password
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReviews(data.reviews);
        setFormData({ name: '', role: '', comment: '', image: '' });
        setFormStatus('success');
        setTimeout(() => setFormStatus('idle'), 3000);
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDeleteReview = async (id: string) => {
    if (!confirm('Are you sure you want to delete this review?')) return;

    try {
      const res = await fetch(`/api/reviews?id=${id}`, {
        method: 'DELETE',
        headers: {
          'x-admin-password': password
        }
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setReviews(data.reviews);
      } else {
        alert(data.error || 'Failed to delete review');
      }
    } catch (err) {
      alert('Error deleting review');
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#0a0c10] flex items-center justify-center px-6 selection:bg-[#00f2ff]/20">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00f2ff]/5 to-[#39ff14]/5 blur-3xl opacity-30" />
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative w-full max-w-md bg-[#0d1117]/60 backdrop-blur-2xl border border-white/5 p-10 rounded-[2.5rem] shadow-2xl"
        >
          <div className="flex flex-col items-center text-center mb-8">
            <div className="w-16 h-16 bg-[#00f2ff]/10 rounded-2xl flex items-center justify-center text-[#00f2ff] mb-6 border border-[#00f2ff]/20 shadow-[0_0_15px_rgba(0,242,255,0.1)]">
              <Lock size={28} />
            </div>
            <h1 className="text-3xl font-display font-bold text-white mb-2">Admin Access</h1>
            <p className="text-gray-400 text-sm">Enter password to manage client reviews.</p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Password</label>
              <input
                required
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all text-center tracking-widest"
              />
            </div>

            {loginError && (
              <div className="flex items-center gap-2 text-red-500 text-sm justify-center bg-red-500/10 py-3 rounded-xl border border-red-500/20">
                <AlertCircle size={16} />
                <span>{loginError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full py-4 bg-gradient-to-r from-[#00f2ff] to-[#39ff14] text-[#0a0c10] font-black rounded-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? 'Authenticating...' : 'Access Dashboard'}
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/" className="inline-flex items-center gap-2 text-xs text-gray-500 hover:text-white transition-colors">
              <ArrowLeft size={14} /> Back to Portfolio
            </Link>
          </div>
        </motion.div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0a0c10] text-white py-12 px-6 selection:bg-[#00f2ff]/20">
      <div className="max-w-7xl mx-auto">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-white/5 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-black tracking-tight">
              Reviews <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#10b981] to-[#00f2ff]">Dashboard</span>
            </h1>
            <p className="text-gray-400 mt-2">Add, edit, or delete portfolio client reviews in real-time.</p>
          </div>
          
          <div className="flex gap-4">
            <Link href="/" className="flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-sm font-semibold">
              <ArrowLeft size={16} /> View Site
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-5 py-2.5 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl hover:bg-red-500/20 transition-all text-sm font-semibold"
            >
              <LogOut size={16} /> Log Out
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Add Review Panel */}
          <div className="lg:col-span-5">
            <div className="bg-[#0d1117]/40 backdrop-blur-xl border border-white/5 p-8 rounded-3xl sticky top-8">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Plus size={20} className="text-[#00f2ff]" /> Add New Review
              </h2>

              <form onSubmit={handleAddReview} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Client Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Role / Company</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    placeholder="e.g. CEO, Artech"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Client Photo (Optional)</label>
                  <div className="flex items-center gap-4">
                    <div className="relative w-14 h-14 rounded-xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center text-gray-500 flex-shrink-0">
                      {formData.image ? (
                        <img src={formData.image} alt="Preview" className="w-full h-full object-cover" />
                      ) : (
                        <ImageIcon size={20} />
                      )}
                    </div>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-white text-xs focus:outline-none focus:border-[#00f2ff]/50 transition-all file:mr-4 file:py-1 file:px-2.5 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-white/10 file:text-white hover:file:bg-white/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Review Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.comment}
                    onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
                    placeholder="Musab did an incredible job..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-3 text-white focus:outline-none focus:border-[#00f2ff]/50 transition-all resize-none"
                  />
                </div>

                {formStatus === 'success' && (
                  <div className="flex items-center gap-2 text-green-400 text-sm bg-green-500/10 py-3 px-4 rounded-xl border border-green-500/20">
                    <CheckCircle size={16} />
                    <span>Review successfully added and published!</span>
                  </div>
                )}

                {formStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-500/10 py-3 px-4 rounded-xl border border-red-500/20">
                    <AlertCircle size={16} />
                    <span>Failed to publish review. Check your inputs.</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#00f2ff] to-[#39ff14] text-[#0a0c10] font-black rounded-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? 'Publishing...' : 'Publish Review'} <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Manage Reviews Panel */}
          <div className="lg:col-span-7">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-[#39ff14]">
              Active Reviews ({reviews.length})
            </h2>

            <div className="space-y-6">
              {reviews.length === 0 ? (
                <div className="text-center py-20 bg-[#0d1117]/20 border border-white/5 rounded-3xl">
                  <p className="text-gray-500">No active reviews found.</p>
                </div>
              ) : (
                reviews.map((review) => (
                  <div
                    key={review._id}
                    className="bg-[#0d1117]/30 border border-white/5 hover:border-white/10 p-6 rounded-3xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all shadow-lg"
                  >
                    <div className="flex items-center gap-5 flex-1 min-w-0">
                      {/* Avatar */}
                      <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex-shrink-0">
                        {review.image ? (
                          <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className={`w-full h-full flex items-center justify-center ${review.color || 'text-white'} text-xl font-bold bg-[#0a0c10]`}>
                            {review.name.charAt(0)}
                          </div>
                        )}
                      </div>

                      {/* Content */}
                      <div className="min-w-0">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="text-lg font-bold text-white leading-tight">{review.name}</h3>
                          <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-gray-400">
                            {review.role}
                          </span>
                        </div>
                        <p className="text-gray-400 text-sm mt-2 line-clamp-2 italic leading-relaxed">
                          "{review.comment}"
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleDeleteReview(review._id)}
                      className="flex items-center gap-1.5 px-4 py-2.5 bg-red-500/10 border border-red-500/20 text-red-500 rounded-xl hover:bg-red-500/20 transition-all text-xs font-bold self-end md:self-center flex-shrink-0 active:scale-95"
                    >
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
