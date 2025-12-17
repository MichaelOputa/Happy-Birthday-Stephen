import { Heart, Star, Award, Users } from 'lucide-react';

export default function About() {
  const qualities = [
    {
      icon: Heart,
      title: 'Loving Brother',
      description: 'A pillar of support and unconditional love in the family'
    },
    {
      icon: Star,
      title: 'Inspirational',
      description: 'Leading by example with integrity and dedication'
    },
    {
      icon: Award,
      title: 'Achiever',
      description: 'Continuously striving for excellence in everything he does'
    },
    {
      icon: Users,
      title: 'Friend to All',
      description: 'Building meaningful connections with kindness and respect'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            About <span className="text-blue-600">Stephen</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-yellow-500 mx-auto mb-8"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Stephen is more than just a big brother—he's a mentor, a role model, and a constant source of strength.
            His journey through life has been marked by determination, compassion, and an unwavering commitment to
            those he loves. Today, we celebrate not just another year, but a lifetime of incredible moments and
            the profound impact he's had on all of us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {qualities.map((quality, index) => {
            const Icon = quality.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{quality.title}</h3>
                <p className="text-slate-600 leading-relaxed">{quality.description}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-12 bg-gradient-to-r from-blue-900 to-blue-700 rounded-3xl shadow-2xl text-white animate-fade-in-up">
          <blockquote className="text-2xl md:text-3xl font-light text-center italic leading-relaxed">
            "The best kind of brother is the one who stands by you, believes in you, and inspires you to be better every day."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
