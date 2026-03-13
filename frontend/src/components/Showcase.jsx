import { motion } from 'framer-motion';

const showcaseItems = [
  { title: 'Cold Pyro', desc: 'Safe, smokeless indoor fireworks for spectacular entries.', icon: '✨' },
  { title: 'Confetti Blast', desc: 'A dramatic shower of colors tailored to your theme.', icon: '🎊' },
  { title: 'Laser Show', desc: 'Cinematic lighting synchronized to your first dance.', icon: '🔦' },
  { title: 'Low Fog', desc: 'Walk on clouds for a truly magical moment.', icon: '☁️' },
  { title: 'Sparkular Entry', desc: 'A glowing pathway of fountains to welcome you.', icon: '🌟' }
];

export default function Showcase() {
  return (
    <section className="py-24 bg-white text-[var(--color-dark)]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">Signature Effects</h2>
          <p className="text-gray-500 max-w-2xl mx-auto">Transform your venue into a cinematic experience with our premium, high-end effects.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {showcaseItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="p-8 rounded-3xl bg-[var(--color-ivory)] border border-[var(--color-sage)] shadow-sm hover:shadow-xl transition-shadow cursor-default group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform origin-bottom-left">{item.icon}</div>
              <h3 className="text-2xl font-playfair font-bold text-[var(--color-gold)] mb-3">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
