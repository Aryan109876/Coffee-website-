import { useRef } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Menu from './components/Menu';
import About from './components/About';
import Location from './components/Location';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  const locationRef = useRef<HTMLDivElement>(null);

  const handleVisitClick = () => {
    locationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero onVisitClick={handleVisitClick} />
      <Menu />
      <About />
      <div ref={locationRef}>
        <Location />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
