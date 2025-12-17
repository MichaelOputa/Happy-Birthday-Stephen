import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGradientPosition((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const scrollToContent = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const [particles] = useState<
    {
      width: string;
      height: string;
      left: string;
      top: string;
      animationDelay: string;
      animationDuration: string;
    }[]
  >(() =>
    Array.from({ length: 20 }).map(() => ({
      width: `${Math.random() * 100 + 50}px`,
      height: `${Math.random() * 100 + 50}px`,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${Math.random() * 10 + 10}s`
    }))
  );

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        background: `linear-gradient(${gradientPosition}deg,
          #1e40af 0%,
          #3b82f6 25%,
          #1e3a8a 50%,
          #2563eb 75%,
          #1e40af 100%)`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-20"></div>

      <div className="relative z-10 text-center px-6 animate-fade-in">
        <div className="mb-8 animate-scale-in">
          <div className="text-7xl mb-4 animate-bounce-slow">🎉</div>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight animate-slide-up">
          Happy Birthday,
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 mt-4 animate-shimmer">
            Stephen
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed animate-slide-up-delay">
          Celebrating a man of strength, kindness, and inspiration
        </p>

        <div className="mt-16 animate-bounce">
          <button
            onClick={scrollToContent}
            className="text-white/80 hover:text-white transition-colors duration-300"
            aria-label="Scroll to content"
          >
            <ChevronDown className="w-12 h-12" />
          </button>
        </div>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
              animationDelay: p.animationDelay,
              animationDuration: p.animationDuration
            }}
          />
        ))}
      </div>
    </section>
  );
}
