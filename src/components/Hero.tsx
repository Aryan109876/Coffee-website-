import { Coffee, Clock, MapPin } from 'lucide-react';
import { useState } from 'react';
import MenuModal from './MenuModal';

interface HeroProps {
  onVisitClick?: () => void;
}

export default function Hero({ onVisitClick }: HeroProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-amber-800 to-stone-900"></div>

      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-amber-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="mb-8 inline-block">
          <Coffee className="w-20 h-20 text-amber-400 animate-pulse" strokeWidth={1.5} />
        </div>

        <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 tracking-tight">
          Artisan Coffee
          <span className="block text-5xl md:text-6xl text-amber-400 mt-4">& Roastery</span>
        </h1>

        <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Handcrafted beverages made with passion, precision, and the finest beans from around the world
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button
            onClick={() => setMenuOpen(true)}
            className="bg-amber-500 hover:bg-amber-600 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
          >
            View Menu
          </button>
          <button
            onClick={onVisitClick}
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-white/30"
          >
            Visit Us
          </button>
        </div>

        <MenuModal isOpen={menuOpen} onClose={() => setMenuOpen(false)} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Clock className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
            <h3 className="text-white font-semibold text-lg mb-2">Opening Hours</h3>
            <p className="text-amber-200">Mon - Fri: 6am - 8pm</p>
            <p className="text-amber-200">Sat - Sun: 7am - 9pm</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <MapPin className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
            <h3 className="text-white font-semibold text-lg mb-2">Location</h3>
            <p className="text-amber-200">123 Brew Street</p>
            <p className="text-amber-200">Downtown, CA 90210</p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <Coffee className="w-8 h-8 text-amber-400 mb-3 mx-auto" />
            <h3 className="text-white font-semibold text-lg mb-2">Fresh Daily</h3>
            <p className="text-amber-200">Roasted on-site</p>
            <p className="text-amber-200">Since 2018</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-amber-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}
