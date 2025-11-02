import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Location() {
  return (
    <section id="location" className="py-24 bg-gradient-to-b from-stone-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-4">
            Visit Us
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Come experience the perfect blend of atmosphere and artisanal coffee
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-8">Get In Touch</h3>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Address</h4>
                  <p className="text-amber-100">123 Brew Street</p>
                  <p className="text-amber-100">Downtown, CA 90210</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Phone</h4>
                  <p className="text-amber-100">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Email</h4>
                  <p className="text-amber-100">hello@artisancoffee.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-2">Hours</h4>
                  <div className="space-y-1 text-amber-100">
                    <p>Monday - Friday: 6:00 AM - 8:00 PM</p>
                    <p>Saturday: 7:00 AM - 9:00 PM</p>
                    <p>Sunday: 7:00 AM - 9:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="bg-stone-100 rounded-3xl overflow-hidden shadow-2xl mb-8">
              <div className="aspect-video bg-gradient-to-br from-stone-300 to-stone-400 flex items-center justify-center">
                <MapPin className="w-20 h-20 text-stone-500" />
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-stone-200">
              <h4 className="text-2xl font-bold text-stone-800 mb-4">
                Parking & Accessibility
              </h4>
              <ul className="space-y-3 text-stone-700">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <span>Free street parking available on Brew Street</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <span>Public parking garage 2 blocks away</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <span>Wheelchair accessible entrance and restrooms</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2"></div>
                  <span>Bike racks available out front</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
