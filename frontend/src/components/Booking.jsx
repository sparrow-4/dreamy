import { useState } from 'react';
import { motion } from 'framer-motion';

const eventTypes = ['Weddings', 'Stage Shows', 'Festivals', 'Corporate Events', 'Private Parties'];

export default function Booking() {
  const [formData, setFormData] = useState({ name: '', phone: '', eventType: 'Weddings', eventDate: '', location: '', effects: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleBook = (e) => {
    e.preventDefault();
    const message = `Booking Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nEvent: ${formData.eventType}\nDate: ${formData.eventDate}\nLocation: ${formData.location}\nEffects Needed: ${formData.effects}`;
    const url = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-[var(--color-sage)]/20 text-[var(--color-dark)]">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Event Types visually */}
        <div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[var(--color-gold)] mb-6">Book Your Experience</h2>
          <p className="text-lg text-gray-700 mb-10 leading-relaxed">
            From intimate weddings to massive stadium festivals, our professional team ensures safety, precision, and unforgettable impact. We bring the magic to you.
          </p>
          <div className="space-y-4">
            {eventTypes.map((event, idx) => (
              <motion.div 
                key={event}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center text-[var(--color-gold)] font-bold">✓</div>
                <span className="text-xl font-medium">{event}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Booking Form */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-3xl shadow-2xl border border-[var(--color-ivory)] relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--color-sage)] via-[var(--color-gold)] to-[var(--color-blush)]"></div>
          <h3 className="text-2xl font-playfair font-bold mb-6">Request a Quote</h3>
          <form onSubmit={handleBook} className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input type="text" name="name" onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input type="tel" name="phone" onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]" />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium mb-1">Event Type</label>
                <select name="eventType" onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] bg-white">
                  {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Event Date</label>
                <input type="date" name="eventDate" onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Location</label>
              <input type="text" name="location" onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]" />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Effects Needed</label>
              <textarea name="effects" onChange={handleChange} placeholder="e.g. 4 Cold Pyros, Pink Confetti" rows="3" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]"></textarea>
            </div>

            <button type="submit" className="w-full py-4 bg-[var(--color-dark)] text-white font-medium rounded-xl hover:bg-[var(--color-gold)] transition-colors duration-300">
              Book on WhatsApp
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
