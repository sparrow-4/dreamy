import { motion } from 'framer-motion';

const images = [
  'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1561593369-1bf33c41555a?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1469371670807-013ccf39f2a5?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=800&auto=format&fit=crop'
];

export default function Gallery() {
  return (
    <section className="py-24 bg-[var(--color-dark)] text-[var(--color-ivory)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-[var(--color-gold)]">Wedding Moments</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Explore our gallery of magical celebrations.</p>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (idx % 3) * 0.2, duration: 0.8 }}
              className="break-inside-avoid overflow-hidden rounded-2xl relative group"
            >
              <div className="absolute inset-0 bg-gold/20 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none"></div>
              <img 
                src={src} 
                alt="Wedding Moment" 
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
