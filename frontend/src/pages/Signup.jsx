import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Signup() {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', phone: '' });
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (res.ok) {
        navigate('/login');
      } else {
        const data = await res.json();
        alert(data.error || 'Registration failed');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-ivory)] text-[var(--color-dark)] font-inter py-12">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-lg p-10 bg-white shadow-2xl rounded-3xl border border-[var(--color-sage)]"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-playfair font-bold text-[var(--color-gold)] mb-3">Begin Your Journey</h1>
          <p className="text-sm text-gray-500 tracking-wide uppercase">Create your client profile</p>
        </div>
        <form onSubmit={handleSignup} className="space-y-5">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
            <input 
              type="text" 
              name="name"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)] transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
            <input 
              type="email" 
              name="email"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)] transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Phone Code (WhatsApp)</label>
            <input 
              type="tel" 
              name="phone"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)] transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Password</label>
            <input 
              type="password" 
              name="password"
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)] transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 mt-6 rounded-xl bg-[var(--color-dark)] text-[var(--color-ivory)] font-medium hover:bg-[var(--color-gold)] transition-colors duration-300 shadow-xl shadow-[var(--color-gold)]/20"
          >
            Create Account
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-500">
          Already booked us? <Link to="/login" className="text-[var(--color-gold)] font-semibold hover:underline transition-all">Sign in here</Link>
        </p>
      </motion.div>
    </div>
  );
}
