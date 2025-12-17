import { MessageCircle, Heart } from 'lucide-react';
import type { Message } from '../types';

export default function Messages() {
  const messages: Message[] = [
    {
      id: 1,
      author: 'Michael',
      relationship: 'Brother',
      message: 'You’re more than just family, you’re a blessing, a source of joy, and a constant reminder that good hearts still exist. Your smile lights up every room, and your determination inspires everyone around you. I admire your courage, your growth, and the way you keep pushing forward no matter what. May this new year of your life open doors you never imagined, reward your hard work, and surround you with peace, love, and success. You deserve every good thing coming your way and more. Happy Birthday Chief Stephen! 🎉🎂🎈'
        
    },
    {
      id: 2,
      author: 'Jeffrey',
      relationship: 'Brother',
      message: 'Happy Birthday Oluwastephen! Its crazy to see how far we\'ve both come since we first met. Watching you grow into the man you are today has been an honor, and I\'m glad we\'re still we 🤭. Thanks for being a constant presence in my life. You\'re worthy of celebration. May the cause to celebrate never cease.🫶❤️🫠🎂🎉'
    },
    {
      id: 3,
      author: 'Chekubechukwu',
      relationship: 'Sister',
      message: 'Happy Birthday to my darling brother, Umezurike! What a blessing it has been to find a brother in you. You\'ve woven threads of trust, kindness, and unwavering support into the fabric of our family, creating something truly special. In you, I found a confidant, a rare soul who listens with the heart, gives without expectation, and cares with beautiful intention. Your selflessness is a light that truly brightens the path for those around you. May the Lord, in His infinite goodness, pour out His finest blessings upon you. May He honor your generous spirit by filling your new chapter with joy, peace, and every beautiful thing you deserve.'
    },
    {
      id: 4,
      author: 'Jessica',
      relationship: 'Sister',
      message: 'Happy Birthday to my dear brother 💙🎉. Meeting and knowing you is one of the best things God made to happen for us, your family. From the bottom of my heart, I just want you to know how proud I am of the man you are becoming. You’ve always been a protector, my biggest supporter, and someone I can count on without hesitation. Your strength, kindness, and sense of humor makes life brighter for everyone around you, especially our family. May this new year bring you bigger wins, deeper happiness, good health, and endless reasons to laugh just like you always do. Never stop being authentic, fearless, and full of life. The best chapters are still ahead of you. Cheers to you, my brother today and always. I love you so much🥂✨. Once again, I celebrate you Stephen "Oputa" Umezurike.'
    },
    {
      id: 5,
      author: 'Mom',
      relationship: 'Mother',
      message: 'Happy Birthday My Stephen, I wish you the very best, you will prosper, you will excel in everything you do, God will announce you, God will keep you, He will continue to guide you everywhere you go, you will reign through your ministrations, your voice will be heard in the world, you will live to declare the works of God and you will live to celebrate more birthday in the land of the living. I love you my Son, Remain blessed always.'
    },
    {
      id: 6,
      author: 'Aunt Jenny',
      relationship: 'Sister',
      message: 'Happy Birthday to a truly special and remarkable person, Stephen! You are not just my husband\'s best man, you are a dear brother, a kindred spirit, and a friend whose loyalty shines through in everything you do. Your smile truly is a gift, one that lifts spirits and brings comfort, and your steadfast support in a good times and hard times is a treasure we hold close to our hearts. Thank you for being you, a genuine, kind and always amazing. On behalf of my husband and me, we want you to know how deeply we love and appreciate you. Have the most beautiful birthday, Stephen Umezurike!'
    }
  ];

  return (
    <section id="messages" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="flex items-center justify-center mb-6">
            <MessageCircle className="w-12 h-12 text-yellow-400 mr-4" />
            <h2 className="text-5xl md:text-6xl font-bold text-white">
              Birthday <span className="text-yellow-400">Messages</span>
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-blue-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Words of love and appreciation from those who know you best
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {messages.map((message, index) => (
            <div
              key={message.id}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up border border-slate-600/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-6 right-6 text-yellow-400/20 group-hover:text-yellow-400/40 transition-colors">
                <Heart className="w-8 h-8" />
              </div>

              <div className="mb-4">
                <h3 className="text-2xl font-bold text-white mb-1">{message.author}</h3>
                <p className="text-blue-400 text-sm font-medium">{message.relationship}</p>
              </div>

              <p className="text-slate-300 leading-relaxed text-lg italic">
                "{message.message}"
              </p>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
