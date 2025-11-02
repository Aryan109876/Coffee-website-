import { Coffee, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-stone-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Coffee className="w-8 h-8 text-amber-500" />
              <span className="text-2xl font-bold">Artisan Coffee</span>
            </div>
            <p className="text-stone-400 leading-relaxed mb-6">
              Crafting exceptional coffee experiences since 2018. Every cup tells a story.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-stone-800 hover:bg-amber-500 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#menu" className="text-stone-400 hover:text-amber-500 transition-colors">Menu</a></li>
              <li><a href="#about" className="text-stone-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#location" className="text-stone-400 hover:text-amber-500 transition-colors">Location</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">Catering</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">Customer Service</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">FAQs</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">Gift Cards</a></li>
              <li><a href="#" className="text-stone-400 hover:text-amber-500 transition-colors">Loyalty Program</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-amber-500">Contact Info</h3>
            <ul className="space-y-3 text-stone-400">
              <li>123 Brew Street</li>
              <li>Downtown, CA 90210</li>
              <li className="pt-2">(555) 123-4567</li>
              <li>hello@artisancoffee.com</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-stone-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-stone-500 text-sm">
              © {currentYear} Artisan Coffee & Roastery. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-stone-500 hover:text-amber-500 transition-colors">Privacy Policy</a>
              <a href="#" className="text-stone-500 hover:text-amber-500 transition-colors">Terms of Service</a>
              <a href="#" className="text-stone-500 hover:text-amber-500 transition-colors">Accessibility</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
