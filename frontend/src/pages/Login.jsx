import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL || 'http://localhost:5000'}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      if (res.ok) {
        navigate(data.redirect);
      } else {
        alert(data.message || 'Login failed');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--color-ivory)] text-[var(--color-dark)] font-inter">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md p-10 bg-white shadow-2xl rounded-3xl border border-[var(--color-sage)]"
      >
        <div className="text-center mb-10">
          <h1 className="text-4xl font-playfair font-bold text-[var(--color-gold)] mb-3">Dreamy SFX</h1>
          <p className="text-sm text-gray-500 tracking-wide uppercase">Client Portal Access</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Email Address</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)] transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-sage)] transition-all bg-gray-50 focus:bg-white"
              required
            />
          </div>
          <button 
            type="submit"
            className="w-full py-4 mt-4 rounded-xl bg-[var(--color-dark)] text-[var(--color-ivory)] font-medium hover:bg-[var(--color-gold)] transition-colors duration-300 shadow-xl shadow-[var(--color-gold)]/20"
          >
            Sign In to Dashboard
          </button>
        </form>
        <p className="mt-8 text-center text-sm text-gray-500">
          New to Dreamy SFX? <Link to="/signup" className="text-[var(--color-gold)] font-semibold hover:underline transition-all">Request an account</Link>
        </p>
      </motion.div>
    </div>
  );
}
