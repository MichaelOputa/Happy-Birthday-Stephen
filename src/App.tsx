import { useEffect } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import Messages from './components/Messages';
import SpecialMessage from './components/SpecialMessage';
import Footer from './components/Footer';
import Confetti from './components/Confetti';

function App() {
  useEffect(() => {
    document.title = "Happy Birthday Stephen 🎉";
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Confetti />
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      <Messages />
      <SpecialMessage />
      <Footer />
    </div>
  );
}

export default App;
