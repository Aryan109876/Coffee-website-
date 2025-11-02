import { Coffee, Milk, Droplets, Flame } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  icon: React.ReactNode;
  popular?: boolean;
}

export default function Menu() {
  const espressoItems: MenuItem[] = [
    {
      name: "Single Origin Espresso",
      description: "Rotating selection of premium single-origin beans",
      price: "$4.50",
      icon: <Coffee className="w-6 h-6" />,
      popular: true
    },
    {
      name: "Americano",
      description: "Rich espresso with hot water",
      price: "$4.00",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      name: "Cappuccino",
      description: "Espresso with steamed milk and foam",
      price: "$5.00",
      icon: <Milk className="w-6 h-6" />,
      popular: true
    },
    {
      name: "Flat White",
      description: "Velvety microfoam with double espresso",
      price: "$5.50",
      icon: <Milk className="w-6 h-6" />
    }
  ];

  const specialtyItems: MenuItem[] = [
    {
      name: "Nitro Cold Brew",
      description: "Smooth, creamy cold brew on tap",
      price: "$6.00",
      icon: <Coffee className="w-6 h-6" />,
      popular: true
    },
    {
      name: "Honey Lavender Latte",
      description: "House-made lavender syrup with local honey",
      price: "$6.50",
      icon: <Flame className="w-6 h-6" />
    },
    {
      name: "Pour Over",
      description: "Precision-brewed single cup",
      price: "$5.50",
      icon: <Droplets className="w-6 h-6" />
    },
    {
      name: "Matcha Latte",
      description: "Premium ceremonial grade matcha",
      price: "$6.00",
      icon: <Milk className="w-6 h-6" />
    }
  ];

  const MenuCard = ({ item }: { item: MenuItem }) => (
    <div className="group relative bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-amber-400 overflow-hidden">
      {item.popular && (
        <div className="absolute top-4 right-4 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          POPULAR
        </div>
      )}

      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      <div className="relative">
        <div className="text-amber-700 mb-4 group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>

        <h3 className="text-2xl font-bold text-stone-800 mb-2">{item.name}</h3>
        <p className="text-stone-600 mb-4 leading-relaxed">{item.description}</p>

        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-amber-600">{item.price}</span>
          <button className="bg-amber-500 hover:bg-amber-600 text-white px-5 py-2 rounded-full font-semibold text-sm transition-all duration-300 transform hover:scale-105">
            Order
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-stone-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-stone-800 mb-4">
            Our Menu
          </h2>
          <p className="text-xl text-stone-600 max-w-2xl mx-auto">
            Every cup is crafted with expertise and served with care
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-stone-800 mb-8 flex items-center">
            <div className="w-12 h-1 bg-amber-500 mr-4"></div>
            Espresso Classics
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {espressoItems.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-stone-800 mb-8 flex items-center">
            <div className="w-12 h-1 bg-amber-500 mr-4"></div>
            Specialty Drinks
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialtyItems.map((item, index) => (
              <MenuCard key={index} item={item} />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center bg-white rounded-3xl p-10 shadow-lg border border-amber-100">
          <p className="text-stone-700 text-lg mb-4">
            All drinks available hot or iced • Alternative milks available
          </p>
          <p className="text-stone-600">
            Oat • Almond • Soy • Coconut (+$0.75)
          </p>
        </div>
      </div>
    </section>
  );
}
