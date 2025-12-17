import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import type { Memory } from '../types';

export default function Gallery() {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const memories: Memory[] = [
    {
      id: 1,
      type: 'image',
      url: '/1.jpg',
      caption: 'A true legend in the making.'
    },
    {
      id: 2,
      type: 'image',
      url: '/2.jpg',
      caption: 'The epitome of greatness in one person.'
    },
    {
      id: 3,
      type: 'image',
      url: '/3.jpg',
      caption: 'My brother, my hero.'
    },
    {
      id: 4,
      type: 'image',
      url: '/4.jpg',
      caption: 'A minister of God impacting lives.'
    },
    {
      id: 5,
      type: 'image',
      url: '/5.jpg',
      caption: 'A man of integrity and kindness.'
    },
    {
      id: 6,
      type: 'image',
      url: '/6.jpg',
      caption: 'A life filled with joy and love.'
    }
  ];

  const openLightbox = (memory: Memory, index: number) => {
    setSelectedMemory(memory);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedMemory(null);
  };

  const goToPrevious = () => {
    const newIndex = currentIndex > 0 ? currentIndex - 1 : memories.length - 1;
    setCurrentIndex(newIndex);
    setSelectedMemory(memories[newIndex]);
  };

  const goToNext = () => {
    const newIndex = currentIndex < memories.length - 1 ? currentIndex + 1 : 0;
    setCurrentIndex(newIndex);
    setSelectedMemory(memories[newIndex]);
  };

  return (
    <section id="gallery" className="py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Cherished <span className="text-blue-600">Memories</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A collection of moments that tell the story of an extraordinary life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {memories.map((memory, index) => (
            <div
              key={memory.id}
              className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => openLightbox(memory, index)}
            >
              <div className="aspect-square overflow-hidden bg-slate-200">
                <img
                  src={memory.url}
                  alt={memory.caption}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white text-lg font-medium">{memory.caption}</p>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <ImageIcon className="w-12 h-12 text-white/80" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedMemory && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white hover:text-yellow-400 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={goToPrevious}
            className="absolute left-6 text-white hover:text-yellow-400 transition-colors"
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-6 text-white hover:text-yellow-400 transition-colors"
          >
            <ChevronRight className="w-12 h-12" />
          </button>

          <div className="max-w-5xl w-full">
            <img
              src={selectedMemory.url}
              alt={selectedMemory.caption}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
            <p className="text-white text-center text-xl mt-6">{selectedMemory.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
}
