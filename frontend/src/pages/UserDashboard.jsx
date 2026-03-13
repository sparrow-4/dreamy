import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function UserDashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // In a real app we would fetch the user from /api/auth/me
    setUser({ name: 'Guest Client', email: 'client@example.com' });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-[var(--color-dark)] font-inter">
      {/* Sidebar / Header */}
      <nav className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-sm">
        <h1 className="text-2xl font-playfair font-bold text-[var(--color-gold)]">Dreamy SFX | Client</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium">{user?.name}</span>
          <button className="px-4 py-2 text-sm text-red-500 font-medium hover:bg-red-50 rounded-lg transition-colors">Sign Out</button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="text-3xl font-playfair font-bold mb-2">My Events</h2>
            <p className="text-gray-500">Track and manage your special effect bookings.</p>
          </div>
          <button className="px-6 py-3 bg-[var(--color-dark)] text-white font-medium rounded-xl hover:bg-[var(--color-gold)] transition-colors shadow-lg">
            + New Booking
          </button>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Active Bookings */}
          <div className="lg:col-span-2 space-y-6">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4"
            >
              <div>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full tracking-wide">Confirmed</span>
                <h3 className="text-xl font-bold mt-3 mb-1">Grand Wedding Reception</h3>
                <p className="text-sm text-gray-500">📍 Taj Palace, Mumbai | 🗓️ Oct 25, 2026</p>
                <div className="mt-3 text-sm text-gray-600 font-medium">✨ Cold Pyro, Confetti Storm</div>
              </div>
              <button className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">View Details</button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 opacity-70"
            >
              <div>
                <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold uppercase rounded-full tracking-wide">Quote Sent</span>
                <h3 className="text-xl font-bold mt-3 mb-1">Corporate Anniversary</h3>
                <p className="text-sm text-gray-500">📍 ITC Grand, Delhi | 🗓️ Nov 10, 2026</p>
                <div className="mt-3 text-sm text-gray-600 font-medium">✨ Low Fog, Lasers</div>
              </div>
              <button className="px-4 py-2 bg-[var(--color-gold)] text-white rounded-lg text-sm font-medium hover:bg-yellow-600">Review Quote</button>
            </motion.div>
          </div>

          {/* Profile Sidebar */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-[var(--color-sage)]/50 h-fit">
            <h3 className="font-playfair font-bold text-xl mb-6">Profile Information</h3>
            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wide">Full Name</label>
                <div className="font-medium">{user?.name}</div>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wide">Email</label>
                <div className="font-medium">{user?.email}</div>
              </div>
              <div>
                <label className="text-xs text-gray-500 uppercase tracking-wide">Phone (WhatsApp)</label>
                <div className="font-medium">+91 9876543210</div>
              </div>
              <button className="w-full mt-4 py-2 border border-gray-200 rounded-lg text-sm font-medium hover:bg-gray-50">Edit Profile</button>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
