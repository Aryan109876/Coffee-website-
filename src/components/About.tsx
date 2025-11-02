import { Award, Heart, Leaf, Users } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion",
      description: "Every cup is crafted with dedication and love for the art of coffee"
    },
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Sustainability",
      description: "Direct trade partnerships with farms practicing ethical and sustainable methods"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "Award-winning roasting techniques and expertly trained baristas"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community",
      description: "A gathering place where connections are made over great coffee"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-6">
              Our Story
            </h2>
            <div className="w-20 h-1 bg-amber-500 mb-8"></div>

            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
              Founded in 2018, Artisan Coffee & Roastery began with a simple mission: to bring exceptional coffee experiences to our community. What started as a small neighborhood cafe has grown into a beloved gathering place for coffee enthusiasts.
            </p>

            <p className="text-lg text-stone-700 mb-6 leading-relaxed">
              We source our beans directly from family-owned farms across Ethiopia, Colombia, Guatemala, and Indonesia. Each origin is carefully selected for its unique flavor profile and roasted in small batches to perfection.
            </p>

            <p className="text-lg text-stone-700 leading-relaxed">
              Our head roaster, with over 15 years of experience, personally oversees every roast to ensure consistency and quality in every cup we serve.
            </p>
          </div>

          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-amber-400 to-amber-600 rounded-3xl"></div>
            <div className="absolute inset-8 bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl flex items-center justify-center">
              <div className="text-center text-white p-8">
                <div className="text-7xl font-bold mb-4">2018</div>
                <div className="text-2xl mb-8">Est.</div>
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <div className="text-4xl font-bold text-amber-400">50K+</div>
                    <div className="text-sm text-amber-200 mt-2">Cups Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-amber-400">12</div>
                    <div className="text-sm text-amber-200 mt-2">Origins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-4xl font-bold text-stone-800 mb-12 text-center">
            Our Values
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group text-center p-8 rounded-2xl bg-gradient-to-b from-amber-50 to-white hover:from-amber-100 hover:to-amber-50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-500 text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-stone-800 mb-3">
                  {value.title}
                </h4>
                <p className="text-stone-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
