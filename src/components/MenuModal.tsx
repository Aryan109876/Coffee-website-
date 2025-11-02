import { X, Search, ShoppingCart, Plus, Minus } from 'lucide-react';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { MenuItem, CartItem } from '../lib/types';
import OrderCheckout from './OrderCheckout';

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MenuModal({ isOpen, onClose }: MenuModalProps) {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<MenuItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (isOpen) {
      fetchMenuItems();
    }
  }, [isOpen]);

  const fetchMenuItems = async () => {
    try {
      const { data, error } = await supabase
        .from('menu_items')
        .select('*')
        .eq('available', true);

      if (error) throw error;
      setMenuItems(data || []);
      setFilteredItems(data || []);
    } catch (error) {
      console.error('Error fetching menu:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    let filtered = menuItems;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(item => item.category === selectedCategory);
    }

    if (searchTerm) {
      filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredItems(filtered);
  }, [selectedCategory, searchTerm, menuItems]);

  const categories = ['all', 'espresso', 'specialty', 'food'];

  const addToCart = (item: MenuItem) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) {
        return prev.map(c =>
          c.id === item.id ? { ...c, quantity: c.quantity + 1 } : c
        );
      }
      return [...prev, {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => {
      const existing = prev.find(c => c.id === id);
      if (existing && existing.quantity > 1) {
        return prev.map(c =>
          c.id === id ? { ...c, quantity: c.quantity - 1 } : c
        );
      }
      return prev.filter(c => c.id !== id);
    });
  };

  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  if (showCheckout) {
    return (
      <OrderCheckout
        cartItems={cart}
        total={cartTotal}
        onClose={() => {
          setShowCheckout(false);
          setCart([]);
          onClose();
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-8 py-6 flex items-center justify-between">
          <h2 className="text-3xl font-bold text-white">Order Menu</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <div className="p-8">
              <div className="mb-8">
                <div className="relative mb-6">
                  <Search className="absolute left-4 top-3.5 text-stone-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search menu..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-stone-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div className="flex gap-2 overflow-x-auto pb-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-4 py-2 rounded-full font-semibold whitespace-nowrap transition-all ${
                        selectedCategory === cat
                          ? 'bg-amber-500 text-white'
                          : 'bg-stone-200 text-stone-700 hover:bg-stone-300'
                      }`}
                    >
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </button>
                  ))}
                </div>
              </div>

              {loading ? (
                <div className="text-center py-12">
                  <p className="text-stone-600">Loading menu...</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItems.map(item => (
                    <div
                      key={item.id}
                      className="border border-stone-200 rounded-2xl p-4 hover:shadow-lg transition-shadow"
                    >
                      <h3 className="font-bold text-lg text-stone-800 mb-1">{item.name}</h3>
                      <p className="text-stone-600 text-sm mb-3">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-amber-600">${item.price.toFixed(2)}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="bg-amber-500 hover:bg-amber-600 text-white p-2 rounded-lg transition-colors"
                        >
                          <Plus className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="w-80 bg-gradient-to-b from-stone-50 to-white border-l border-stone-200 overflow-y-auto">
            <div className="p-6 border-b border-stone-200 bg-white sticky top-0">
              <h3 className="text-xl font-bold text-stone-800 flex items-center gap-2">
                <ShoppingCart className="w-5 h-5" />
                Cart
              </h3>
              <p className="text-sm text-stone-600 mt-1">{cartCount} items</p>
            </div>

            {cart.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-stone-600">Your cart is empty</p>
              </div>
            ) : (
              <>
                <div className="p-4 space-y-3">
                  {cart.map(item => (
                    <div key={item.id} className="bg-white rounded-xl p-3 border border-stone-200">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex-1">
                          <h4 className="font-semibold text-stone-800 text-sm">{item.name}</h4>
                          <p className="text-amber-600 font-bold text-sm">${item.price.toFixed(2)}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-stone-600 text-xs mb-2">x{item.quantity}</p>
                          <p className="font-bold text-stone-800">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="flex-1 bg-stone-200 hover:bg-stone-300 text-stone-700 py-1 rounded text-xs font-semibold transition-colors"
                        >
                          <Minus className="w-3 h-3 mx-auto" />
                        </button>
                        <button
                          onClick={() => addToCart(menuItems.find(m => m.id === item.id)!)}
                          className="flex-1 bg-amber-100 hover:bg-amber-200 text-amber-700 py-1 rounded text-xs font-semibold transition-colors"
                        >
                          <Plus className="w-3 h-3 mx-auto" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 border-t border-stone-200 bg-white sticky bottom-0">
                  <div className="mb-4 pb-4 border-b border-stone-200">
                    <div className="flex justify-between mb-2">
                      <span className="text-stone-600">Subtotal</span>
                      <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between mb-2">
                      <span className="text-stone-600">Tax</span>
                      <span className="font-semibold">${(cartTotal * 0.08).toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="flex justify-between mb-4 text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-amber-600">${(cartTotal * 1.08).toFixed(2)}</span>
                  </div>
                  <button
                    onClick={() => setShowCheckout(true)}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 rounded-xl font-bold transition-colors"
                  >
                    Checkout
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
