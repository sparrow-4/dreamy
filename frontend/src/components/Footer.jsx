import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#111] text-white py-16 font-inter">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-[var(--color-gold)] to-[#b08d29] rounded-full flex items-center justify-center font-playfair font-bold text-2xl shadow-lg border-2 border-white/20">
              DS
            </div>
            <h3 className="text-2xl font-playfair font-bold text-[var(--color-gold)]">Dreamy SFX</h3>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-6">
            Premium wedding and event special effects. Based in Kerala, delivering magic worldwide.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] transition-colors">📸</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] transition-colors">💬</a>
            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-gold)] transition-colors">✉️</a>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col space-y-3">
          <h4 className="text-lg font-playfair font-bold text-[var(--color-gold)] mb-3">Quick Links</h4>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Our Work</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Services</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">About Us</a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          <Link to="/login" className="text-gray-400 hover:text-[var(--color-gold)] transition-colors text-sm mt-4">Client/Admin Portal</Link>
        </div>

        {/* Contact */}
        <div className="flex flex-col space-y-4">
          <h4 className="text-lg font-playfair font-bold text-[var(--color-gold)] mb-2">Contact Us</h4>
          <p className="text-gray-400 text-sm flex items-center gap-2">📍 Kerala, India</p>
          <p className="text-gray-400 text-sm flex items-center gap-2">📞 +91 98765 43210</p>
          <p className="text-gray-400 text-sm flex items-center gap-2">✉️ hello@dreamysfx.com</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Dreamy SFX. All rights reserved.
      </div>
    </footer>
  );
}
