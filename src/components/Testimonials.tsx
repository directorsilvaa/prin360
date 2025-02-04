import React from 'react';
import { Quote, Star, ArrowRight } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  image: string;
  quote: string;
  rating: number;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Laura Beatris",
      role: "Software Engineer",
      company: "Wework",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
      quote: "Tenho aprendido demais, eu iniciei do zero e hoje eu já faço JavaScript. É um novo mundo que se abriu pra mim, eu nunca imaginei que teria essa capacidade de codar.",
      rating: 5
    },
    {
      name: "Henrique Weiand",
      role: "Senior Tech Lead",
      company: "Developer",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
      quote: "Fiz muitas conexões que me levaram a hoje me redescobrir dentro da tecnologia e atuar com algumas stacks que além de estar em alta no mercado fazem muito mais feliz.",
      rating: 5
    },
    {
      name: "Lucas Esposito Rocha",
      role: "Desenvolvedor Full Stack",
      company: "RocketSeat",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80",
      quote: "Me sinto feliz de ter conseguido minha primeira vaga e ter realizado meu sonho, mas é apenas o começo da carreira e cada vez procuro evoluir mais.",
      rating: 5
    }
  ];

  return (
    <div className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-black to-[#0B0F19]">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-purple-600/5 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-blue-500/20 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 text-transparent bg-clip-text">
            Histórias de Sucesso
          </h2>
          <p className="text-gray-400 text-lg">
            Conheça as histórias inspiradoras de alunos que transformaram suas carreiras através da Print360
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card Glow Effect */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
              
              {/* Card Content */}
              <div className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl hover:bg-gray-800/80 transition duration-300">
                {/* Quote Icon */}
                <div className="absolute -top-4 -left-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-75"></div>
                    <div className="relative bg-gray-900 p-2 rounded-full">
                      <Quote className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 mb-6">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="relative mr-4 group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="relative w-12 h-12 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role} @ {testimonial.company}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <button className="inline-flex items-center px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 group">
            Ver Mais Histórias
            <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}