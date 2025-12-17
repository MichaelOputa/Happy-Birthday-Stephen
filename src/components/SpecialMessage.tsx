import { Heart } from 'lucide-react';
import { useState } from 'react';

export default function SpecialMessage() {
  const [stars] = useState<{ left: string; top: string; delay: string }[]>(
    () =>
      Array.from({ length: 30 }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${Math.random() * 3}s`
      }))
  );

  return (
    <section id="special" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {stars.map((s, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: 'white',
              borderRadius: '50%',
              left: s.left,
              top: s.top,
              animationDelay: s.delay
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-block p-4 bg-white/10 rounded-full mb-6 backdrop-blur-sm">
            <Heart className="w-16 h-16 text-yellow-400 animate-pulse" />
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            A Message from the <span className="text-yellow-400">Heart</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-white mx-auto"></div>
        </div>

        <div className="bg-white/10 backdrop-blur-md p-12 md:p-16 rounded-3xl shadow-2xl border border-white/20 animate-fade-in-up">
          <div className="prose prose-lg prose-invert max-w-none">
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-6 font-light">
              Dear Stephen,
            </p>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              As I sit here reflecting on all the years we have shared, I am overwhelmed with gratitude for having you as my big brother. You have been more than family—you have been my guide, my protector, and my constant source of inspiration.
            </p>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              Your journey has been nothing short of remarkable. Every milestone, every achievement, every moment of kindness—they all reflect the incredible person you are. But beyond all your accomplishments, it is your heart that truly sets you apart.
            </p>

            <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
              On this special day, I want you to know how deeply you are loved and appreciated. May this year bring you all the joy, success, and fulfillment you deserve. May your dreams continue to flourish, and may you always know how much you mean to all of us.
            </p>

            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic">
              Happy Birthday, Stephen. Here is to you—today, tomorrow, and always.
            </p>

            <p className="text-lg text-yellow-400 mt-8 font-medium">
              With all our love,<br />
              Your Family
            </p>
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-in-up">
          <div className="inline-flex items-center space-x-2 text-white/60">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-lg">Forever grateful for you</span>
            <Heart className="w-5 h-5 text-red-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
