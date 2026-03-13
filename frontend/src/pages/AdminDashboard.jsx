import { useState } from 'react';
import { motion } from 'framer-motion';

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { label: 'Total Bookings', value: '1,248', trend: '+12%' },
    { label: 'Upcoming Events', value: '42', trend: '+4%' },
    { label: 'Pending Quotes', value: '15', trend: '-2%' },
    { label: 'Revenue (YTD)', value: '$124k', trend: '+24%' }
  ];

  return (
    <div className="min-h-screen flex bg-gray-50 text-[var(--color-dark)] font-inter">
      {/* Admin Sidebar */}
      <aside className="w-64 bg-[#111] text-white flex flex-col min-h-screen">
        <div className="p-6">
          <h1 className="text-2xl font-playfair font-bold text-[var(--color-gold)]">Dreamy SFX</h1>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Admin Portal</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-8">
          {['overview', 'bookings', 'calendar', 'clients', 'equipment'].map(tab => (
            <button 
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-colors capitalize ${activeTab === tab ? 'bg-[var(--color-gold)] text-white' : 'text-gray-400 hover:bg-white/10'}`}
            >
              {tab}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-white/10">
          <button className="w-full py-2 bg-white/10 hover:bg-red-500/20 text-gray-300 hover:text-red-400 rounded-lg transition-colors text-sm font-medium">Log Out</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden overflow-y-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 p-8 flex justify-between items-center z-10 sticky top-0">
          <h2 className="text-2xl font-playfair font-bold capitalize">{activeTab}</h2>
          <div className="flex items-center gap-4">
            <span className="w-10 h-10 rounded-full bg-[var(--color-gold)] text-white flex items-center justify-center font-bold">AD</span>
          </div>
        </header>

        <div className="p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-8">
              
              {/* Stats Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                    <p className="text-sm text-gray-500 font-medium uppercase tracking-wider mb-2">{stat.label}</p>
                    <div className="flex items-end justify-between">
                      <h3 className="text-3xl font-bold">{stat.value}</h3>
                      <span className={`text-sm font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>{stat.trend}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Recent Activity */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="text-lg font-bold font-playfair">Recent Bookings Needs Action</h3>
                  <button onClick={() => setActiveTab('bookings')} className="text-sm text-[var(--color-gold)] font-medium hover:underline">View All</button>
                </div>
                <div className="divide-y divide-gray-100">
                   {/* Dummy row */}
                   <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                     <div>
                       <h4 className="font-bold mb-1">Anil & Priya Wedding</h4>
                       <p className="text-sm text-gray-500">Requested 4x Cold Pyro, Low Fog</p>
                     </div>
                     <span className="px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold uppercase rounded-full">New Request</span>
                   </div>
                   <div className="p-6 flex items-center justify-between hover:bg-gray-50 transition-colors">
                     <div>
                       <h4 className="font-bold mb-1">Electro Music Fest</h4>
                       <p className="text-sm text-gray-500">Requested Confetti Storm, Lasers</p>
                     </div>
                     <span className="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase rounded-full">Waiting Client</span>
                   </div>
                </div>
              </div>

            </motion.div>
          )}

          {/* Bookings Tab Placeholder */}
          {activeTab === 'bookings' && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50 text-gray-500 text-sm uppercase tracking-wider">
                      <th className="p-4 font-medium border-b">Order ID</th>
                      <th className="p-4 font-medium border-b">Client</th>
                      <th className="p-4 font-medium border-b">Event</th>
                      <th className="p-4 font-medium border-b">Date</th>
                      <th className="p-4 font-medium border-b">Status</th>
                      <th className="p-4 font-medium border-b text-right">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm font-medium">#DS-1029</td>
                      <td className="p-4 text-sm">Anil Kumar</td>
                      <td className="p-4 text-sm">Wedding</td>
                      <td className="p-4 text-sm">Oct 25, 2026</td>
                      <td className="p-4"><span className="px-2 py-1 bg-yellow-100 text-yellow-700 text-xs font-bold uppercase rounded-full">New Request</span></td>
                      <td className="p-4 text-right"><button className="text-[var(--color-gold)] text-sm font-medium hover:underline">Manage</button></td>
                    </tr>
                    <tr className="hover:bg-gray-50 transition-colors">
                      <td className="p-4 text-sm font-medium">#DS-1030</td>
                      <td className="p-4 text-sm">Sunburn Fest</td>
                      <td className="p-4 text-sm">Festival</td>
                      <td className="p-4 text-sm">Nov 12, 2026</td>
                      <td className="p-4"><span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-bold uppercase rounded-full">Confirmed</span></td>
                      <td className="p-4 text-right"><button className="text-[var(--color-gold)] text-sm font-medium hover:underline">Manage</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          )}

          {/* Other Tabs Placeholder */}
          {['calendar', 'clients', 'equipment'].includes(activeTab) && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col items-center justify-center p-20 text-gray-400">
              <span className="text-4xl mb-4">🚧</span>
              <p>Module under construction.</p>
            </motion.div>
          )}

        </div>
      </main>
    </div>
  );
}
