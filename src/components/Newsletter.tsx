import { Mail, Send } from 'lucide-react';
import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-stone-800 to-stone-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 text-white rounded-2xl mb-6">
          <Mail className="w-8 h-8" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Stay In The Loop
        </h2>
        <p className="text-xl text-amber-200 mb-10 max-w-2xl mx-auto">
          Subscribe to our newsletter for exclusive offers, brewing tips, and updates on new seasonal blends
        </p>

        {status === 'success' ? (
          <div className="bg-green-500 text-white px-8 py-4 rounded-2xl inline-flex items-center gap-3 text-lg font-semibold animate-pulse">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Thanks for subscribing!
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-6 py-4 rounded-full bg-white text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-4 focus:ring-amber-500/50 text-lg"
              />
              <button
                type="submit"
                className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
              >
                Subscribe
                <Send className="w-5 h-5" />
              </button>
            </div>
          </form>
        )}

        <p className="text-amber-300/70 text-sm mt-6">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </section>
  );
}
