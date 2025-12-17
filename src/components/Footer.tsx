import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-6 animate-fade-in-up">
          <Heart className="w-12 h-12 text-red-500 mx-auto mb-4 animate-pulse" />
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-2">
            We Love You, Stephen
          </h3>
          <p className="text-xl text-slate-300">
            Today, tomorrow, and always
          </p>
        </div>

        <div className="border-t border-slate-700 pt-8 mt-8">
          <p className="text-slate-400 mb-2">
            Created with love on December 17, 2025
          </p>
          <p className="text-slate-500 text-sm">
            A special tribute to an extraordinary person
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center space-x-2 text-slate-400">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-current" />
          <span>by your family</span>
        </div>
      </div>
    </footer>
  );
}
