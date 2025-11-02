import { Coffee, Menu as MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import MenuModal from './MenuModal';

interface NavigationProps {
  onOrderClick?: () => void;
}

export default function Navigation({ onOrderClick }: NavigationProps) {
  const [menuModalOpen, setMenuModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg'
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <Coffee className={`w-8 h-8 transition-colors ${
              isScrolled ? 'text-amber-600' : 'text-amber-400'
            }`} />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-stone-800' : 'text-white'
            }`}>
              Artisan Coffee
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('menu')}
              className={`font-semibold transition-colors hover:text-amber-500 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className={`font-semibold transition-colors hover:text-amber-500 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className={`font-semibold transition-colors hover:text-amber-500 ${
                isScrolled ? 'text-stone-700' : 'text-white'
              }`}
            >
              Visit
            </button>
            <button
              onClick={() => setMenuModalOpen(true)}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Order Online
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition-colors ${
              isScrolled ? 'text-stone-800' : 'text-white'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-stone-200 shadow-lg">
          <div className="px-6 py-4 space-y-4">
            <button
              onClick={() => scrollToSection('menu')}
              className="block w-full text-left font-semibold text-stone-700 hover:text-amber-500 py-2 transition-colors"
            >
              Menu
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left font-semibold text-stone-700 hover:text-amber-500 py-2 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('location')}
              className="block w-full text-left font-semibold text-stone-700 hover:text-amber-500 py-2 transition-colors"
            >
              Visit
            </button>
            <button
              onClick={() => {
                setMenuModalOpen(true);
                setIsOpen(false);
              }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
            >
              Order Online
            </button>
          </div>
        </div>
      )}

      <MenuModal isOpen={menuModalOpen} onClose={() => setMenuModalOpen(false)} />
    </nav>
  );
}
