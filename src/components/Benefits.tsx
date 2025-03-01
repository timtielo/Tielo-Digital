import React from 'react';
import { Clock, TrendingUp, Shield, Zap } from 'lucide-react';

const benefits = [
  {
    icon: Clock,
    title: 'Tijdbesparing',
    description: 'Automatiseer repetitieve taken en focus op wat echt belangrijk is'
  },
  {
    icon: TrendingUp,
    title: 'Verhoogde Productiviteit',
    description: 'Optimaliseer werkprocessen met AI-gedreven oplossingen'
  },
  {
    icon: Shield,
    title: 'Betrouwbare Resultaten',
    description: 'Minimaliseer menselijke fouten en verhoog accuraatheid'
  },
  {
    icon: Zap,
    title: 'Snelle Implementatie',
    description: 'Binnen enkele weken operationeel met onze expertise'
  }
];

export function Benefits() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 font-rubik">
            Waarom kiezen voor AI-automatisering?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ontdek hoe onze oplossingen jouw bedrijf naar het volgende niveau tillen
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-16 h-16 bg-green-light/10 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-8 h-8 text-green-dark" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}